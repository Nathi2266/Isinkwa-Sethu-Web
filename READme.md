# Isinkwa Sethu

**A digital economic movement for community ownership.**

Isinkwa Sethu is a full-stack platform that presents a community-powered vision for township economic independence: shared ownership, collective investment (including the R370 stake model), manufacturing, jobs, and wealth that stays inside the community. It is not a charity or NGO template—it is built to feel like a premium movement brand with a cinematic, modern web experience.

## Live (production)

| Service | URL |
|--------|-----|
| Website | https://isinkwa-sethu-web.onrender.com |

## Tech stack

### Frontend (`react/`)

- React 19 + Vite 7
- Tailwind CSS v4
- Framer Motion
- ShadCN UI (Radix) + Lucide React
- React Router
- Sentry (optional, via `VITE_SENTRY_DSN`)

### Backend (`backend/`)

- FastAPI + Uvicorn
- SQLAlchemy (SQLite locally, PostgreSQL in Docker / production)
- JWT admin authentication
- Contact message API

### Infrastructure

- [Render](https://render.com) — static site (frontend) + Docker web service (API)
- GitHub Actions — CI, deploy hooks, promote `deployment_push` → `main`

## Repository structure

```
isinkwa_sethu/
├── react/                 # Frontend app (Vite)
│   ├── src/
│   │   ├── components/    # UI sections, layout, admin, primitives
│   │   ├── pages/         # Route pages + admin
│   │   ├── features/      # Page section modules (optional composition)
│   │   ├── lib/           # API client, utils, monitoring
│   │   └── config/        # Site copy, navigation, env helpers
│   └── public/
├── backend/               # FastAPI API
│   ├── app/
│   │   ├── routers/       # contact, admin
│   │   └── ...
│   ├── Dockerfile
│   └── docker-compose.yml # Postgres + API (optional local stack)
├── .github/
│   ├── workflows/         # CI, deployment, merge-to-deployment
│   └── actions/           # Render deploy, promote-to-main
└── render.yaml            # Render blueprint reference
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, explore, FAQ, CTA |
| `/about` | Movement story and stats |
| `/vision` | Vision, storytelling, timeline |
| `/ownership` | Ownership model and R370 concept |
| `/impact` | Community impact |
| `/community` | Testimonials and voices |
| `/contact` | Contact form (posts to API) |
| `/admin/login` | Admin sign-in |
| `/admin/dashboard` | View contact messages (JWT) |

## Local development

### Prerequisites

- Node.js 22+
- Python 3.12+
- (Optional) Docker for Postgres via `docker-compose`

### 1. Backend

```bash
cd backend
cp .env.example .env
# Edit .env: DATABASE_URL, JWT_SECRET, ADMIN_USERNAME, ADMIN_PASSWORD, CORS_ORIGINS

# SQLite (simplest)
py main.py

# Or Docker (Postgres)
docker compose up --build
```

API runs at **http://localhost:8000** (`/health`, `/api/contact`, `/api/admin/*`).

### 2. Frontend

```bash
cd react
cp .env.example .env
# Leave VITE_API_URL empty for local dev (Vite proxies /api → :8000)

npm install
npm run dev
```

Site runs at **http://localhost:5173**.

### Environment behaviour

| Context | Frontend API | Backend CORS |
|--------|----------------|--------------|
| Local dev | Empty `VITE_API_URL` → Vite proxy to `:8000` | `localhost:5173` in `CORS_ORIGINS` |
| Production build | `VITE_API_URL` → Render API URL | `https://isinkwa-sethu-web.onrender.com` |

See `react/.env.production` and `react/src/config/env.js` for production defaults.

## Scripts

**Frontend** (`react/`):

```bash
npm run dev      # Dev server
npm run build    # Production build → dist/
npm run lint     # ESLint
npm run preview  # Preview production build
```

**Backend** (`backend/`):

```bash
py main.py       # Dev server (reload when not on Render/Docker)
```

## Deployment

Deploys are driven by pushes to **`deployment_push`** (see `.github/workflows/deployment.yml`):

1. Build frontend with production `VITE_API_URL`
2. Trigger Render **frontend** deploy hook (`Frontend_Deploy_Hook` secret)
3. Trigger Render **backend** deploy hook (`Backend_Deploy_Hook` secret)
4. Open/merge PR **`deployment_push` → `main`** (conflicts resolve in favour of incoming deployment code)

### Required GitHub secrets

| Secret | Purpose |
|--------|---------|
| `Frontend_Deploy_Hook` | Render static site deploy hook |
| `Backend_Deploy_Hook` | Render Docker API deploy hook |

### Render environment (recommended)

**Static site** (`react/`):

- `VITE_API_URL` = `https://isinkwa-sethu-web-kpnm.onrender.com`

**Docker API** (`backend/`):

- `CORS_ORIGINS` = `https://isinkwa-sethu-web.onrender.com`
- `DATABASE_URL` = your Postgres connection string
- `JWT_SECRET` = strong secret
- `ADMIN_USERNAME` / `ADMIN_PASSWORD` = admin credentials

## CI

On `main`, `master`, and PRs: **lint + build** for `react/` (`.github/workflows/ci.yml`).

## Brand positioning

- Community **ownership**, dignity, and African excellence
- Township empowerment and economic independence
- Collective action and shared infrastructure—not dependency or generic NGO framing

---

Built by communities. Owned by communities.
