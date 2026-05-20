import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight, LayoutDashboard, LogOut, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

export default function AdminSidebar({ collapsed, onToggleCollapse, onLogout }) {
  const [logoutOpen, setLogoutOpen] = useState(false)

  const handleConfirmLogout = () => {
    setLogoutOpen(false)
    onLogout()
  }

  return (
    <>
      <aside
        className={cn(
          'flex h-screen shrink-0 flex-col border-r border-gold/15 bg-sidebar backdrop-blur-md transition-all duration-300',
          collapsed ? 'w-[72px]' : 'w-64'
        )}
      >
        <div className="flex items-center justify-between border-b border-gold/10 p-4">
          {!collapsed && (
            <span className="font-display text-sm font-semibold tracking-wide text-cream">Admin</span>
          )}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className={cn('shrink-0', collapsed && 'mx-auto')}
          >
            {collapsed ? <ChevronRight className="size-5" /> : <ChevronLeft className="size-5" />}
          </Button>
        </div>

        <nav className="flex min-h-0 flex-1 flex-col p-3">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gold/15 text-icon-accent'
                  : 'text-theme-muted hover:bg-muted hover:text-icon-accent',
                collapsed && 'justify-center px-2'
              )
            }
            title="Dashboard"
          >
            <LayoutDashboard className="size-5 shrink-0" />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>
          <NavLink
            to="/admin/join-requests"
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gold/15 text-icon-accent'
                  : 'text-theme-muted hover:bg-muted hover:text-icon-accent',
                collapsed && 'justify-center px-2'
              )
            }
            title="Join requests"
          >
            <UserPlus className="size-5 shrink-0" />
            {!collapsed && <span>Join requests</span>}
          </NavLink>
        </nav>

        <div className="mt-auto shrink-0 border-t border-gold/10 p-3">
          <Button
            type="button"
            variant="ghost"
            className={cn(
              'w-full justify-start gap-3 text-theme-muted hover:text-icon-accent',
              collapsed && 'justify-center px-2'
            )}
            onClick={() => setLogoutOpen(true)}
          >
            <LogOut className="size-5 shrink-0" />
            {!collapsed && <span>Log out</span>}
          </Button>
        </div>
      </aside>

      <Dialog open={logoutOpen} onOpenChange={setLogoutOpen}>
        <DialogContent className="[&>button]:hidden">
          <DialogHeader>
            <DialogTitle>Log out?</DialogTitle>
            <DialogDescription>
              You will need to sign in again to access the admin dashboard.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLogoutOpen(false)}>
              Cancel
            </Button>
            <Button variant="gold" onClick={handleConfirmLogout}>
              Log out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
