import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MediaFrame({
  src,
  alt,
  label,
  sublabel,
  aspect = 'video',
  gradient = 'from-brown/30 via-gold/10 to-green/10',
  showPlay = false,
  className,
}) {
  const aspectClass =
    aspect === 'video' ? 'aspect-video' : aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
  const hasImage = Boolean(src)

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
      className={cn('glass group relative overflow-hidden rounded-2xl', aspectClass, className)}
    >
      {hasImage ? (
        <>
          <img
            src={src}
            alt={alt || label || ''}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/10"
            aria-hidden="true"
          />
        </>
      ) : (
        <div className={cn('absolute inset-0 bg-gradient-to-br', gradient)} />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {showPlay && (
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm transition-colors group-hover:bg-gold/20">
            <Play className="size-7 text-icon-accent" fill="currentColor" />
          </div>
        )}
        {label && (
          <p
            className={cn(
              'text-sm font-medium',
              hasImage ? 'text-cream drop-shadow-sm' : 'text-theme-muted'
            )}
          >
            {label}
          </p>
        )}
        {sublabel && !hasImage && <p className="mt-1 text-xs text-theme-subtle">{sublabel}</p>}
      </div>
    </motion.div>
  )
}
