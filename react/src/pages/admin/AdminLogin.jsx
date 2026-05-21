import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SpinnerWithLabel } from '@/components/ui/spinner'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

export default function AdminLogin() {
  const { isAuthenticated, login } = useAdminAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(username, password)
      navigate('/admin/dashboard', { replace: true })
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center section-padding">
      <form
        onSubmit={handleSubmit}
        className="glass relative w-full max-w-md rounded-2xl border border-gold/15 p-8"
        aria-busy={loading}
      >
        {loading ? (
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-background/40 backdrop-blur-[2px]"
            aria-hidden="true"
          />
        ) : null}
        <Button
          type="button"
          variant="ghost"
          className="mb-4 px-0 text-theme-muted hover:text-foreground"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </Button>
        <h1 className="font-display text-2xl font-bold text-cream">Admin Login</h1>
        <p className="mt-2 text-sm text-theme-muted">Sign in to manage contact messages.</p>

        {error ? (
          <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        ) : null}

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <Button type="submit" variant="gold" className="relative z-20 w-full" disabled={loading}>
            {loading ? <SpinnerWithLabel label="Signing in…" /> : 'Sign in'}
          </Button>
          {loading ? (
            <p className="text-center text-xs text-theme-muted" role="status" aria-live="polite">
              Verifying your credentials…
            </p>
          ) : null}
        </div>
      </form>
    </main>
  )
}
