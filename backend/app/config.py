import os

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

DEFAULT_CORS = (
    "http://localhost:5173,"
    "http://127.0.0.1:5173,"
    "https://isinkwa-sethu-web.onrender.com"
)


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    # SQLite by default for local dev without Docker/Postgres
    database_url: str = "sqlite:///./isinkwa_sethu.db"

    @field_validator("database_url", mode="before")
    @classmethod
    def resolve_database_url(cls, value: str) -> str:
        if value and "@db:" in value and not os.path.exists("/.dockerenv"):
            return value.replace("@db:", "@localhost:")
        return value

    jwt_secret: str = "change-me-in-production"
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60 * 24
    admin_username: str = "admin"
    admin_password: str = "admin"
    cors_origins: str = DEFAULT_CORS

    @field_validator("admin_username", "admin_password", mode="before")
    @classmethod
    def strip_admin_credentials(cls, value: str) -> str:
        if isinstance(value, str):
            return value.strip()
        return value


settings = Settings()
