import { cn } from '@/lib/utils'

export default function ContentImage({
  src,
  alt,
  className,
  overlayClassName = 'bg-gradient-to-t from-background/90 via-background/50 to-background/20',
  children,
}) {
  if (!src) return null

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={cn('absolute inset-0', overlayClassName)} aria-hidden="true" />
      {children}
    </div>
  )
}
