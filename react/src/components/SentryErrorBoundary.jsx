import { Sentry, sentryEnabled } from '@/lib/sentry'
import React from 'react'

function FallbackComponent({ error, resetError }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h2>Something went wrong</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Our team has been notified. Please try again.
      </p>
      <button
        onClick={resetError}
        style={{
          padding: '0.5rem 1.5rem',
          cursor: 'pointer',
          borderRadius: '6px',
        }}
      >
        Try again
      </button>
    </div>
  )
}

export function SentryErrorBoundary({ children }) {
  if (!sentryEnabled) {
    return (
      <React.Suspense fallback={null}>
        {children}
      </React.Suspense>
    )
  }
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      {children}
    </Sentry.ErrorBoundary>
  )
}
