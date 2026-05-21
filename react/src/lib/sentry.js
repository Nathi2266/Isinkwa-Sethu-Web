/**
 * Sentry initialisation for the Vite + React SaaS app.
 * Import and call initSentry() once at the top of src/main.jsx
 * before ReactDOM.createRoot(). All other Sentry calls across
 * the app import from this file.
 *
 * Leave VITE_SENTRY_DSN empty in .env to disable Sentry
 * entirely — no overhead, no network calls.
 */
import * as Sentry from '@sentry/react'

const DSN = import.meta.env.VITE_SENTRY_DSN || ''

export const sentryEnabled = Boolean(DSN)

export function initSentry() {
  if (!sentryEnabled) {
    console.info('[Sentry] DSN not set — error tracking disabled.')
    return
  }

  Sentry.init({
    dsn: DSN,
    environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || 'development',
    release: import.meta.env.VITE_SENTRY_RELEASE || 'isinkwa_sethu@dev',

    integrations: [
      Sentry.browserTracingIntegration(),
      // Session Replay integration with conservative defaults; can be tuned via env vars
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: false,
      }),
    ],

    // Performance & Replay sampling rates (configurable via env)
    tracesSampleRate: Number(import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE || 0.2),
    replaysSessionSampleRate: Number(import.meta.env.VITE_SENTRY_REPLAY_SESSION_RATE || 0.1),
    replaysOnErrorSampleRate: Number(import.meta.env.VITE_SENTRY_REPLAY_ON_ERROR_RATE || 1.0),

    attachStacktrace: true,
    // Allow opt-in for sending default PII via env (string 'true' required)
    sendDefaultPii: import.meta.env.VITE_SENTRY_SEND_DEFAULT_PII === 'true',
    allowUrls: [window.location.origin],
  })
}

/**
 * Call this after a successful login to attach the user to
 * every subsequent Sentry event in this session.
 */
export function setSentryUser({ id, email, role }) {
  if (!sentryEnabled) return
  Sentry.setUser({ id: String(id), email, role })
}

/**
 * Call this on logout to remove user identity from Sentry.
 */
export function clearSentryUser() {
  if (!sentryEnabled) return
  Sentry.setUser(null)
}

/**
 * Add a breadcrumb manually — call this on key user actions
 * (button clicks, form submissions, navigation) so there is
 * a trail of events leading up to any error.
 */
export function addBreadcrumb({ message, category, level = 'info', data = {} }) {
  if (!sentryEnabled) return
  Sentry.addBreadcrumb({ message, category, level, data })
}

/**
 * Wrap an async function in a Sentry performance span.
 * Use this around API calls and heavy computations.
 *
 * Usage:
 *   const result = await traced('api.users', 'GET /users', () => fetchUsers());
 */
export async function traced(operation, description, fn) {
  if (!sentryEnabled) return fn()
  return Sentry.startSpan ? Sentry.startSpan({ op: operation, name: description }, fn) : fn()
}

export { Sentry }
