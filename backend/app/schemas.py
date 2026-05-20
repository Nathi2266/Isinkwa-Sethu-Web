import re
from datetime import date, datetime

from pydantic import BaseModel, EmailStr, Field, field_validator

SA_PHONE_PATTERN = re.compile(r"^\+27 \d{2} \d{4} \d{3}$")
MAX_CONTACT_MESSAGE_WORDS = 160


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    email: EmailStr
    message: str = Field(min_length=1, max_length=8000)

    @field_validator("message")
    @classmethod
    def limit_message_words(cls, value: str) -> str:
        words = [w for w in value.split() if w]
        if len(words) > MAX_CONTACT_MESSAGE_WORDS:
            raise ValueError(f"Message must be at most {MAX_CONTACT_MESSAGE_WORDS} words.")
        return value


class ContactRead(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}


class AdminLogin(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class MessageStats(BaseModel):
    total: int


class JoinRequestCreate(BaseModel):
    first_name: str = Field(min_length=1, max_length=120)
    last_name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=15, max_length=16)
    gender: str = Field(min_length=1, max_length=32)
    location: str = Field(min_length=1, max_length=255)
    province: str = Field(min_length=1, max_length=120)
    date_of_birth: date
    occupation: str = Field(min_length=1, max_length=255)
    why_join: str = Field(min_length=10, max_length=500)
    how_heard: str = Field(min_length=1, max_length=255)
    accepted_terms: bool = False

    @field_validator("phone")
    @classmethod
    def validate_sa_phone(cls, value: str) -> str:
        normalized = value.strip()
        if not SA_PHONE_PATTERN.match(normalized):
            raise ValueError("Phone must be in the format +27 81 4714 565.")
        return normalized

    @field_validator("accepted_terms")
    @classmethod
    def must_accept_terms(cls, value: bool) -> bool:
        if not value:
            raise ValueError("You must accept the terms to join the movement.")
        return value


class JoinRequestRead(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    phone: str
    gender: str
    location: str
    province: str
    date_of_birth: date | None
    occupation: str | None
    why_join: str
    how_heard: str | None
    accepted_terms: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class JoinRequestStats(BaseModel):
    total: int
