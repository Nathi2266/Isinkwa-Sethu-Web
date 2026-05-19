import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { adminLogin as apiAdminLogin } from '@/lib/api'

const STORAGE_KEY = 'isinkwa_admin_token'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY))

  const login = useCallback(async (username, password) => {
    const data = await apiAdminLogin({ username, password })
    localStorage.setItem(STORAGE_KEY, data.access_token)
    setToken(data.access_token)
    return data
  }, [])

  const logout = useCallback(() => {
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
