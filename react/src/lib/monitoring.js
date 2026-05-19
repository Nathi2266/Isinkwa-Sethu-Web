import { Sentry, isSentryEnabled } from '@/sentry'

export function reportError(error, context = {}) {
  if (!isSentryEnabled) return

  const err = error instanceof Error ? error : new Error(String(error))

  Sentry.withScope((scope) => {
    if (context.tags) scope.setTags(context.tags)
    if (context.extra) scope.setExtras(context.extra)
    if (context.feature) scope.setTag('feature', context.feature)
    Sentry.captureException(err)
  })
}

export function reportMessage(message, level = 'info', context = {}) {
  if (!isSentryEnabled) return

  Sentry.withScope((scope) => {
    if (context.tags) scope.setTags(context.tags)
    if (context.extra) scope.setExtras(context.extra)
    Sentry.captureMessage(message, level)
  })
}

export function addBreadcrumb(message, data = {}, category = 'app') {
  if (!isSentryEnabled) return

  Sentry.addBreadcrumb({
    category,
    message,
    data,
    level: 'info',
  })
}

export function setPageContext(pathname) {
  if (!isSentryEnabled) return

  Sentry.setTag('route', pathname)
  Sentry.setContext('page', { pathname, url: window.location.href })
}

export function addRouteBreadcrumb(pathname) {
  addBreadcrumb(`Navigated to ${pathname}`, { pathname }, 'navigation')
}

export function runSafe(fn, context = {}) {
  try {
    return fn()
  } catch (error) {
    reportError(error, context)
    throw error
  }
}

export function wrapHandler(handler, context = {}) {
  return (...args) => runSafe(() => handler(...args), context)
}

export async function runSafeAsync(fn, context = {}) {
  try {
    return await fn()
  } catch (error) {
    reportError(error, context)
    throw error
  }
}
