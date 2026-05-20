import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Mail, MapPin, Phone, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GENDER_OPTIONS } from '@/config/join'
import { fetchJoinRequest } from '@/lib/api'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      weekday: 'long',
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date(value))
  } catch {
    return value
  }
}

function genderLabel(value) {
  return GENDER_OPTIONS.find((g) => g.value === value)?.label ?? value
}

export default function JoinRequestDetail() {
  const { requestId } = useParams()
  const { token } = useAdminAuth()
  const [request, setRequest] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token || !requestId) return
    fetchJoinRequest(token, requestId)
      .then(setRequest)
      .catch((err) => setError(err.message || 'Failed to load join request'))
      .finally(() => setLoading(false))
  }, [token, requestId])

  return (
    <main className="flex-1 section-padding">
      <Link
        to="/admin/join-requests"
        className="inline-flex items-center gap-2 text-sm text-theme-muted transition-colors hover:text-icon-accent"
      >
        <ArrowLeft className="size-4" />
        Back to join requests
      </Link>

      {loading ? (
        <div className="glass mt-8 rounded-2xl border border-gold/10 p-10 text-center text-theme-muted">
          Loading application…
        </div>
      ) : null}

      {error ? (
        <div className="glass mt-8 rounded-2xl border border-red-500/30 p-10 text-center text-red-300">
          {error}
        </div>
      ) : null}

      {!loading && !error && request ? (
        <article className="mt-8 max-w-3xl">
          <header className="border-b border-gold/10 pb-6">
            <p className="text-xs font-medium uppercase tracking-wider text-icon-accent">Join request</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
              {request.first_name} {request.last_name}
            </h1>
            <p className="mt-2 text-sm text-theme-muted">Applied {formatDate(request.created_at)}</p>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-xl border border-gold/10 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-theme-subtle">
                <User className="size-4 text-icon-accent" />
                Full name
              </div>
              <p className="mt-2 font-medium text-foreground">
                {request.first_name} {request.last_name}
              </p>
              <p className="mt-1 text-sm text-theme-muted">Gender: {genderLabel(request.gender)}</p>
            </div>

            <div className="glass rounded-xl border border-gold/10 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-theme-subtle">
                <Mail className="size-4 text-icon-accent" />
                Email
              </div>
              <p className="mt-2">
                <a href={`mailto:${request.email}`} className="font-medium text-icon-accent hover:underline">
                  {request.email}
                </a>
              </p>
            </div>

            <div className="glass rounded-xl border border-gold/10 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-theme-subtle">
                <Phone className="size-4 text-icon-accent" />
                Phone
              </div>
              <p className="mt-2 font-medium text-foreground">
                <a href={`tel:${request.phone}`} className="hover:text-icon-accent">
                  {request.phone}
                </a>
              </p>
            </div>

            <div className="glass rounded-xl border border-gold/10 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-theme-subtle">
                <MapPin className="size-4 text-icon-accent" />
                Location
              </div>
              <p className="mt-2 font-medium text-foreground">{request.location}</p>
              <p className="mt-1 text-sm text-theme-muted">{request.province}</p>
            </div>

            {request.date_of_birth ? (
              <div className="glass rounded-xl border border-gold/10 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-theme-subtle">Date of birth</p>
                <p className="mt-2 font-medium text-foreground">{request.date_of_birth}</p>
              </div>
            ) : null}

            {request.occupation ? (
              <div className="glass rounded-xl border border-gold/10 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-theme-subtle">Occupation</p>
                <p className="mt-2 font-medium text-foreground">{request.occupation}</p>
              </div>
            ) : null}

            {request.how_heard ? (
              <div className="glass rounded-xl border border-gold/10 p-4 sm:col-span-2">
                <p className="text-xs font-medium uppercase tracking-wider text-theme-subtle">How they heard about us</p>
                <p className="mt-2 text-foreground">{request.how_heard}</p>
              </div>
            ) : null}
          </div>

          <section className="glass mt-6 rounded-2xl border border-gold/15 p-6">
            <h2 className="font-display text-sm font-semibold text-icon-accent">Why they want to join</h2>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-foreground">{request.why_join}</p>
          </section>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="gold" asChild>
              <a href={`mailto:${request.email}?subject=Welcome to Isinkwa Sethu`}>Email applicant</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`tel:${request.phone}`}>Call applicant</a>
            </Button>
          </div>
        </article>
      ) : null}
    </main>
  )
}
