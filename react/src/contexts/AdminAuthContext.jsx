import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { adminLogin as apiAdminLogin } from '@/lib/api'
import { setSentryUser, clearSentryUser, addBreadcrumb } from '@/lib/sentry'

const STORAGE_KEY = 'isinkwa_admin_token'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY))

  const login = useCallback(async (username, password) => {
    const data = await apiAdminLogin({ username, password })
    localStorage.setItem(STORAGE_KEY, data.access_token)
    setToken(data.access_token)
    setSentryUser({ id: username, role: 'admin' })
    addBreadcrumb({
      message: 'User signed in',
      category: 'auth',
      level: 'info',
      data: { username, role: 'admin' },
    })
    return data
  }, [])

  const logout = useCallback(() => {
    addBreadcrumb({
      message: 'User signed out',
      category: 'auth',
      level: 'info',
    })
    clearSentryUser()
    localStorage.removeItem(STORAGE_KEY)
    setToken(null)
  }, [])

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, login, logout]
  )

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider')
  }
  return context
}
