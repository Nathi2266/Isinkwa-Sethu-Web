import { useEffect, useState } from 'react'
import { reportError } from '@/lib/monitoring'

export function useScrollNavbar(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      try {
        setScrolled(window.scrollY > threshold)
      } catch (error) {
        reportError(error, { feature: 'useScrollNavbar' })
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
