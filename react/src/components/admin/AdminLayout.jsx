import { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

export default function AdminLayout() {
  const { isAuthenticated, logout } = useAdminAuth()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
        onLogout={handleLogout}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  )
}
