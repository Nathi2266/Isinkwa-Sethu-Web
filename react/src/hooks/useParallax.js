import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { reportError } from '@/lib/monitoring'

export function useParallax(speed = 0.15) {
  const reduced = usePrefersReducedMotion()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (reduced) return

    let frame = null
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        try {
          setOffset(window.scrollY * speed)
        } catch (error) {
          reportError(error, { feature: 'useParallax' })
        } finally {
          frame = null
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed, reduced])

  return reduced ? 0 : offset
}
