import os

import uvicorn

from app import create_app

app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", "8000"))
    reload = os.environ.get("RENDER") is None and os.environ.get("DOCKER") is None
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=reload)
