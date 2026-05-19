from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import ContactMessage
from app.schemas import ContactCreate, ContactRead

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", response_model=ContactRead, status_code=status.HTTP_201_CREATED)
def submit_contact_message(payload: ContactCreate, db: Session = Depends(get_db)):
    record = ContactMessage(name=payload.name, email=payload.email, message=payload.message)
    db.add(record)
    db.commit()
    db.refresh(record)
    return record
