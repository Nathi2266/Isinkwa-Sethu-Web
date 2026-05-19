import { resolveApiBase } from '@/config/env'

const API_BASE = resolveApiBase()

async function request(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  })

  const data = await response.json().catch(() => null)

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
