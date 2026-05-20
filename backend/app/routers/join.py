from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import JoinRequest
from app.schemas import JoinRequestCreate, JoinRequestRead

router = APIRouter(prefix="/api/join", tags=["join"])


@router.post("", response_model=JoinRequestRead, status_code=status.HTTP_201_CREATED)
@router.post("/", response_model=JoinRequestRead, status_code=status.HTTP_201_CREATED)
def submit_join_request(payload: JoinRequestCreate, db: Session = Depends(get_db)):
    record = JoinRequest(
        first_name=payload.first_name.strip(),
        last_name=payload.last_name.strip(),
        email=str(payload.email).strip().lower(),
        phone=payload.phone.strip(),
        gender=payload.gender.strip(),
        location=payload.location.strip(),
        province=payload.province.strip(),
        date_of_birth=payload.date_of_birth,
        occupation=payload.occupation.strip(),
        why_join=payload.why_join.strip(),
        how_heard=payload.how_heard.strip(),
        accepted_terms=payload.accepted_terms,
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record
