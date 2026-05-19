import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { reportError } from '@/lib/monitoring'

export function useCountUp(end, { duration = 2000, decimals = 0, suffix = '', prefix = '' } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(end)
      return
    }

    let start = null
    const step = (timestamp) => {
      try {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(eased * end)
        if (progress < 1) requestAnimationFrame(step)
      } catch (error) {
        reportError(error, { feature: 'useCountUp' })
      }
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString()

  return { ref, display: `${prefix}${formatted}${suffix}` }
}
