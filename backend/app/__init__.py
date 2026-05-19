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
    on_render = os.environ.get("RENDER") == "true"
    using_default_password = settings.admin_password == "admin"
    logger.info("Admin login user: %s", settings.admin_username)
    if on_render and using_default_password:
        logger.warning(
            "ADMIN_PASSWORD is still the default. Set ADMIN_USERNAME and ADMIN_PASSWORD "
            "on the API service in Render, then redeploy."
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
        return {"status": "ok"}

    return app
