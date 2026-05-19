import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { useScrollNavbar } from '@/hooks/useScrollNavbar'
import { navLinks } from '@/config/navigation'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

function NavItem({ to, children, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="relative py-1">
      {({ isActive }) => (
        <>
          <span
            className={cn(
              'text-sm font-medium transition-all duration-300',
              isActive ? 'text-icon-accent' : 'text-theme-muted hover:-translate-y-0.5 hover:text-icon-accent'
            )}
          >
            {children}
          </span>
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const scrolled = useScrollNavbar()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const showGlass = scrolled || pathname !== '/'

  const handleNavClick = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          'container-narrow mx-auto rounded-2xl transition-all duration-500',
          showGlass ? 'glass-strong py-3 shadow-lg' : 'bg-transparent py-2'
        )}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-tight text-cream transition-colors hover:text-icon-accent sm:text-xl"
          >
            {site.name}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavItem to={link.path}>{link.label}</NavItem>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/login">Admin</Link>
            </Button>
            <Button variant="outline-gold" size="sm" asChild>
              <Link to={site.ctas.join.path}>{site.ctas.join.label}</Link>
            </Button>
            <Button variant="gold" size="sm" asChild>
              <Link to={site.ctas.contribute.path}>{site.ctas.contribute.label}</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <ul className="mt-8 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <SheetClose asChild>
                      <NavLink
                        to={link.path}
                        onClick={handleNavClick}
                        className={({ isActive }) =>
                          cn(
                            'font-display text-lg transition-colors',
                            isActive ? 'text-icon-accent' : 'text-cream hover:text-icon-accent'
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </SheetClose>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3">
                <SheetClose asChild>
                  <Button variant="ghost" asChild>
                    <Link to="/admin/login" onClick={handleNavClick}>
                      Admin
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="outline-gold" asChild>
                    <Link to={site.ctas.join.path} onClick={handleNavClick}>
                      {site.ctas.join.label}
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="gold" asChild>
                    <Link to={site.ctas.contribute.path} onClick={handleNavClick}>
                      {site.ctas.contribute.label}
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
