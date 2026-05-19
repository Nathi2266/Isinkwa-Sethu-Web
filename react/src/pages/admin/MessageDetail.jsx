import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Mail, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fetchContactMessage } from '@/lib/api'
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

export default function MessageDetail() {
  const { messageId } = useParams()
  const { token } = useAdminAuth()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token || !messageId) return
    fetchContactMessage(token, messageId)
      .then(setMessage)
      .catch((err) => setError(err.message || 'Failed to load message'))
      .finally(() => setLoading(false))
  }, [token, messageId])

  return (
    <main className="flex-1 section-padding">
      <Link
        to="/admin/dashboard"
        className="inline-flex items-center gap-2 text-sm text-theme-muted transition-colors hover:text-icon-accent"
      >
        <ArrowLeft className="size-4" />
        Back to dashboard
      </Link>

      {loading ? (
        <div className="glass mt-8 rounded-2xl border border-gold/10 p-10 text-center text-theme-muted">
          Loading message…
        </div>
      ) : null}

      {error ? (
        <div className="glass mt-8 rounded-2xl border border-red-500/30 p-10 text-center text-red-300">
          {error}
        </div>
      ) : null}

      {!loading && !error && message ? (
        <article className="mt-8 max-w-3xl">
          <header className="border-b border-gold/10 pb-6">
            <p className="text-xs font-medium uppercase tracking-wider text-icon-accent">Message details</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-cream">{message.name}</h1>
            <p className="mt-2 text-sm text-theme-muted">Received {formatDate(message.created_at)}</p>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-xl border border-gold/10 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-theme-subtle">
                <User className="size-4 text-icon-accent" />
                Name
              </div>
              <p className="mt-2 font-medium text-cream">{message.name}</p>
            </div>
            <div className="glass rounded-xl border border-gold/10 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-theme-subtle">
                <Mail className="size-4 text-icon-accent" />
                Email
              </div>
              <p className="mt-2">
                <a href={`mailto:${message.email}`} className="font-medium text-gold hover:underline">
                  {message.email}
                </a>
              </p>
            </div>
          </div>

          <section className="glass mt-6 rounded-2xl border border-gold/15 p-6">
            <h2 className="font-display text-sm font-semibold text-icon-accent">Message</h2>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-theme">
              {message.message}
            </p>
          </section>

          <div className="mt-8">
            <Button variant="outline" asChild>
              <a href={`mailto:${message.email}?subject=Re: Your message to Isinkwa Sethu`}>
                Reply via email
              </a>
            </Button>
          </div>
        </article>
      ) : null}
    </main>
  )
}
