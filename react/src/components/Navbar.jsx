import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
import { cn } from '@/lib/utils'

const navLinkClass = ({ isActive }) =>
  cn(
    'text-sm font-medium transition-colors',
    isActive ? 'text-icon-accent' : 'text-theme-muted hover:text-icon-accent'
  )

const mobileNavLinkClass = ({ isActive }) =>
  cn(
    'font-display text-lg transition-colors',
    isActive ? 'text-icon-accent' : 'text-cream hover:text-icon-accent'
  )

export default function Navbar() {
  const scrolled = useScrollNavbar()
  const [open, setOpen] = useState(false)

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass-strong py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <nav
        className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-cream transition-colors hover:text-icon-accent sm:text-xl"
        >
          Isinkwa Sethu
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline-gold" size="sm" asChild>
            <Link to="/contact">Join The Movement</Link>
          </Button>
          <Button variant="gold" size="sm" asChild>
            <Link to="/ownership">Contribute R370</Link>
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
              <SheetTitle>Isinkwa Sethu</SheetTitle>
            </SheetHeader>
            <ul className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <SheetClose asChild>
                    <NavLink to={link.path} onClick={handleNavClick} className={mobileNavLinkClass}>
                      {link.label}
                    </NavLink>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3">
              <SheetClose asChild>
                <Button variant="outline-gold" asChild>
                  <Link to="/contact" onClick={handleNavClick}>
                    Join The Movement
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="gold" asChild>
                  <Link to="/ownership" onClick={handleNavClick}>
                    Contribute R370
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
