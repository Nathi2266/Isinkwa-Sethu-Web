/** Production API (Render). Overridden by VITE_API_URL when set. */
export const PRODUCTION_API_URL = 'https://isinkwa-sethu-web-kpnm.onrender.com'

/** Production site (Render static). Used for docs / future features. */
export const PRODUCTION_SITE_URL = 'https://isinkwa-sethu-web.onrender.com'

/**
 * API base for fetch calls.
 * - Local dev: '' → Vite proxies /api and /health to localhost:8000
 * - Production build: VITE_API_URL or PRODUCTION_API_URL
 */
export function resolveApiBase() {
  const fromEnv = import.meta.env.VITE_API_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  if (import.meta.env.PROD) return PRODUCTION_API_URL
  return ''
}

export const isProduction = import.meta.env.PROD
export const isLocalDev = import.meta.env.DEV
