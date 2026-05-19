import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export default function ThemeToggleFab() {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={cn(
        'fixed bottom-6 right-6 z-[100] flex size-14 items-center justify-center rounded-full',
        'border border-gold/35 bg-[var(--fab-bg)] text-icon-accent shadow-[0_8px_32px_var(--fab-shadow)]',
        'transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold/15 hover:text-icon-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background'
      )}
    >
      {isDark ? <Sun className="size-6" aria-hidden /> : <Moon className="size-6" aria-hidden />}
      <span className="sr-only">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
    </button>
  )
}
