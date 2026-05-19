import logging
import os
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import Base, engine
from app.routers import admin, contact

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    password_from_env = bool(os.environ.get("ADMIN_PASSWORD"))
    # Render captures stdout/stderr; app loggers are often filtered out.
    print(
        f"[isinkwa] Admin auth: username={settings.admin_username!r} "
        f"ADMIN_PASSWORD_env={'set' if password_from_env else 'unset'} "
        f"password_length={len(settings.admin_password)}",
        flush=True,
    )
    if os.environ.get("RENDER") == "true" and not password_from_env:
        print(
            "[isinkwa] WARNING: ADMIN_PASSWORD not in environment — using code default. "
            "Set ADMIN_USERNAME and ADMIN_PASSWORD on this API service, then redeploy.",
            flush=True,
        )
    yield


def create_app() -> FastAPI:
    app = FastAPI(title="Isinkwa Sethu API", lifespan=lifespan)

    origins = [origin.strip() for origin in settings.cors_origins.split(",") if origin.strip()]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(contact.router)
    app.include_router(admin.router)

    @app.get("/health")
    def health():
        """Public health check. Auth fields help verify Render env without exposing secrets."""
        password_from_env = bool(os.environ.get("ADMIN_PASSWORD"))
        return {
            "status": "ok",
            "auth": {
                "username": settings.admin_username,
                "password_env_set": password_from_env,
                "password_length": len(settings.admin_password),
                "using_default_password": settings.admin_password == "admin",
            },
        }

    return app
