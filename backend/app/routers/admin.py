from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.auth import create_access_token, get_current_admin, verify_admin_credentials
from app.database import get_db
from app.models import ContactMessage, JoinRequest
from app.schemas import (
    AdminLogin,
    ContactRead,
    JoinRequestRead,
    JoinRequestStats,
    MessageStats,
    TokenResponse,
)

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.post("/login", response_model=TokenResponse)
def admin_login(payload: AdminLogin):
    if not verify_admin_credentials(payload.username, payload.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = create_access_token(payload.username)
    return TokenResponse(access_token=token)


@router.get("/messages/stats", response_model=MessageStats)
def message_stats(
    db: Session = Depends(get_db),
    _: str = Depends(get_current_admin),
):
    total = db.scalar(select(func.count()).select_from(ContactMessage)) or 0
    return MessageStats(total=total)


@router.get("/messages", response_model=list[ContactRead])
def list_messages(
    db: Session = Depends(get_db),
    _: str = Depends(get_current_admin),
    search: str | None = Query(None, max_length=255),
    email: str | None = Query(None, max_length=255),
    date_from: datetime | None = Query(None),
    date_to: datetime | None = Query(None),
):
    stmt = select(ContactMessage).order_by(ContactMessage.created_at.desc())
    if search:
        term = f"%{search.strip()}%"
        stmt = stmt.where(
            ContactMessage.name.ilike(term)
            | ContactMessage.email.ilike(term)
            | ContactMessage.message.ilike(term)
        )
    if email:
        stmt = stmt.where(ContactMessage.email.ilike(f"%{email.strip()}%"))
    if date_from:
        start = date_from if date_from.tzinfo else date_from.replace(tzinfo=timezone.utc)
        stmt = stmt.where(ContactMessage.created_at >= start)
    if date_to:
        end = date_to if date_to.tzinfo else date_to.replace(tzinfo=timezone.utc)
        stmt = stmt.where(ContactMessage.created_at <= end)
    return list(db.scalars(stmt).all())


@router.get("/messages/{message_id}", response_model=ContactRead)
def get_message(
    message_id: int,
    db: Session = Depends(get_db),
    _: str = Depends(get_current_admin),
):
    row = db.get(ContactMessage, message_id)
    if row is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found")
    return row


@router.get("/join-requests/stats", response_model=JoinRequestStats)
def join_request_stats(
    db: Session = Depends(get_db),
    _: str = Depends(get_current_admin),
):
    total = db.scalar(select(func.count()).select_from(JoinRequest)) or 0
    return JoinRequestStats(total=total)


@router.get("/join-requests", response_model=list[JoinRequestRead])
def list_join_requests(
    db: Session = Depends(get_db),
    _: str = Depends(get_current_admin),
    search: str | None = Query(None, max_length=255),
    email: str | None = Query(None, max_length=255),
    province: str | None = Query(None, max_length=120),
    gender: str | None = Query(None, max_length=32),
    date_from: datetime | None = Query(None),
    date_to: datetime | None = Query(None),
):
    stmt = select(JoinRequest).order_by(JoinRequest.created_at.desc())
    if search:
        term = f"%{search.strip()}%"
        stmt = stmt.where(
            JoinRequest.first_name.ilike(term)
            | JoinRequest.last_name.ilike(term)
            | JoinRequest.email.ilike(term)
            | JoinRequest.location.ilike(term)
            | JoinRequest.occupation.ilike(term)
            | JoinRequest.why_join.ilike(term)
        )
    if email:
        stmt = stmt.where(JoinRequest.email.ilike(f"%{email.strip()}%"))
    if province:
        stmt = stmt.where(JoinRequest.province.ilike(f"%{province.strip()}%"))
    if gender:
        stmt = stmt.where(JoinRequest.gender == gender.strip())
    if date_from:
        start = date_from if date_from.tzinfo else date_from.replace(tzinfo=timezone.utc)
        stmt = stmt.where(JoinRequest.created_at >= start)
    if date_to:
        end = date_to if date_to.tzinfo else date_to.replace(tzinfo=timezone.utc)
        stmt = stmt.where(JoinRequest.created_at <= end)
    return list(db.scalars(stmt).all())


@router.get("/join-requests/{request_id}", response_model=JoinRequestRead)
def get_join_request(
    request_id: int,
    db: Session = Depends(get_db),
    _: str = Depends(get_current_admin),
):
    row = db.get(JoinRequest, request_id)
    if row is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Join request not found")
    return row
