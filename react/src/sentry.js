import * as SentryLib from './lib/sentry.js'

export const {
  Sentry,
  sentryEnabled,
  sentryEnabled: isSentryEnabled,
  initSentry,
  setSentryUser,
  clearSentryUser,
  addBreadcrumb,
  traced,
} = SentryLib
