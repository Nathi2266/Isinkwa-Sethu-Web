import { useState } from 'react'
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
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Ownership', href: '#ownership' },
  { label: 'Impact', href: '#impact' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

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
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-cream transition-colors hover:text-gold sm:text-xl"
        >
          Isinkwa Sethu
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline-gold" size="sm" asChild>
            <a href="#cta">Join The Movement</a>
          </Button>
          <Button variant="gold" size="sm" asChild>
            <a href="#ownership">Contribute R370</a>
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
                <li key={link.href}>
                  <SheetClose asChild>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="font-display text-lg text-cream transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3">
              <SheetClose asChild>
                <Button variant="outline-gold" asChild>
                  <a href="#cta" onClick={handleNavClick}>
                    Join The Movement
                  </a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="gold" asChild>
                  <a href="#ownership" onClick={handleNavClick}>
                    Contribute R370
                  </a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
