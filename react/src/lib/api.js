import { resolveApiBase } from '@/config/env'
import { traced, addBreadcrumb } from '@/lib/sentry'

const API_BASE = resolveApiBase()

async function request(path, options = {}) {
  const method = (options.method || 'GET').toUpperCase()
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  return traced(`http.${method.toLowerCase()}`, `${method} ${path}`, async () => {
    try {
      const response = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers,
      })

      const data = await response.json().catch(() => null)

      addBreadcrumb({
        message: `${method} ${path} — ${response.status}`,
        category: 'http',
        level: response.ok ? 'info' : 'warning',
        data: { status: response.status, url: `${API_BASE}${path}` },
      })

      if (!response.ok) {
        let message = data?.message ?? 'Request failed'
        const detail = data?.detail
        if (typeof detail === 'string') {
          message = detail
        } else if (Array.isArray(detail)) {
          message = detail.map((item) => item.msg ?? item.message).filter(Boolean).join(', ')
        }
        throw new Error(message)
      }

      return data
    } catch (error) {
      addBreadcrumb({
        message: `${method} ${path} — FAILED`,
        category: 'http',
        level: 'error',
        data: { error: error instanceof Error ? error.message : String(error), url: `${API_BASE}${path}` },
      })
      throw error
    }
  })
}

export function submitContactMessage({ name, email, message }) {
  return request('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
  })
}

export function adminLogin({ username, password }) {
  return request('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
}

export function fetchContactMessages(token) {
  return request('/api/admin/messages', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export function fetchContactMessage(token, messageId) {
  return request(`/api/admin/messages/${messageId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export function submitJoinRequest(payload) {
  return request('/api/join', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function fetchJoinRequests(token) {
  return request('/api/admin/join-requests', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export function fetchJoinRequest(token, requestId) {
  return request(`/api/admin/join-requests/${requestId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
