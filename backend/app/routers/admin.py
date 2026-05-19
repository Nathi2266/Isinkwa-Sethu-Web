from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.auth import create_access_token, get_current_admin, verify_admin_credentials
from app.database import get_db
from app.models import ContactMessage
from app.schemas import AdminLogin, ContactRead, TokenResponse

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.post("/login", response_model=TokenResponse)
def admin_login(payload: AdminLogin):
    if not verify_admin_credentials(payload.username, payload.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = create_access_token(payload.username)
    return TokenResponse(access_token=token)


@router.get("/messages", response_model=list[ContactRead])
def list_messages(
    db: Session = Depends(get_db),
    _: str = Depends(get_current_admin),
):
    stmt = select(ContactMessage).order_by(ContactMessage.created_at.desc())
    return list(db.scalars(stmt).all())
