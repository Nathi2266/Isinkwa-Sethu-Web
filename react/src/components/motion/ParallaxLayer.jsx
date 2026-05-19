import { useParallax } from '@/hooks/useParallax'
import { cn } from '@/lib/utils'

export default function ParallaxLayer({ children, className, speed = 0.12 }) {
  const y = useParallax(speed)

  return (
    <div className={cn('will-change-transform', className)} style={{ transform: `translate3d(0, ${y}px, 0)` }}>
      {children}
    </div>
  )
}
