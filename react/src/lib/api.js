import { isLocalDev, resolveApiBase } from '@/config/env'

const API_BASE = resolveApiBase()

async function request(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  const url = `${API_BASE}${path}`

  let response
  try {
    response = await fetch(url, {
      ...options,
      headers,
    })
  } catch {
    const hint = isLocalDev && !API_BASE
      ? ' Start the API with `py main.py` in the backend folder (port 8000).'
      : API_BASE
        ? ` Check that ${API_BASE} is reachable.`
        : ''
    throw new Error(`Could not reach the server.${hint}`)
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    let message = data?.message ?? 'Request failed'
    const detail = data?.detail
    if (typeof detail === 'string') {
      message = detail
    } else if (Array.isArray(detail)) {
      message = detail.map((item) => item.msg ?? item.message).filter(Boolean).join(', ')
    }
    if (response.status === 404) {
      message =
        'Join service is unavailable. Restart the API server (backend) and try again, or contact support if this continues.'
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
