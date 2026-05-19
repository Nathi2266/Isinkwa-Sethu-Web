import * as Sentry from '@sentry/react'

const dsn = import.meta.env.VITE_SENTRY_DSN

export const isSentryEnabled = Boolean(dsn)

if (dsn) {
  Sentry.init({
    dsn,
    environment: import.meta.env.PROD ? 'production' : 'development',
  })
}

export { Sentry }
