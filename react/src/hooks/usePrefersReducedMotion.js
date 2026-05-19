import { useEffect, useState } from 'react'
import { reportError } from '@/lib/monitoring'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => {
      try {
        setReduced(e.matches)
      } catch (error) {
        reportError(error, { feature: 'usePrefersReducedMotion' })
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}
