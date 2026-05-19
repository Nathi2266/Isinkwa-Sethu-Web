import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MediaFrame({
  label,
  sublabel,
  aspect = 'video',
  gradient = 'from-brown/30 via-gold/10 to-green/10',
  showPlay = false,
  className,
}) {
  const aspectClass =
    aspect === 'video' ? 'aspect-video' : aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'glass group relative overflow-hidden rounded-2xl',
        aspectClass,
        className
      )}
    >
      <div className={cn('absolute inset-0 bg-gradient-to-br', gradient)} />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {showPlay && (
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 transition-colors group-hover:bg-gold/20">
            <Play className="size-7 text-gold" fill="currentColor" />
          </div>
        )}
        {label && <p className="text-sm font-medium text-cream/70">{label}</p>}
        {sublabel && <p className="mt-1 text-xs text-cream/45">{sublabel}</p>}
      </div>
    </motion.div>
  )
}
