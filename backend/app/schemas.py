from datetime import date, datetime

from pydantic import BaseModel, EmailStr, Field, field_validator


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)


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
    phone: str = Field(min_length=7, max_length=32)
    gender: str = Field(min_length=1, max_length=32)
    location: str = Field(min_length=1, max_length=255)
    province: str = Field(min_length=1, max_length=120)
    date_of_birth: date
    occupation: str = Field(min_length=1, max_length=255)
    why_join: str = Field(min_length=10, max_length=5000)
    how_heard: str = Field(min_length=1, max_length=255)
    accepted_terms: bool = False

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
