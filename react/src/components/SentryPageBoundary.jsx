import { Sentry, isSentryEnabled } from '@/sentry'
import SentryErrorFallback from '@/components/SentryErrorFallback'

export default function SentryPageBoundary({ children }) {
  if (!isSentryEnabled) return children

  return (
    <Sentry.ErrorBoundary fallback={SentryErrorFallback} showDialog={false}>
      {children}
    </Sentry.ErrorBoundary>
  )
}
