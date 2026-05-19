import { cn } from '@/lib/utils'

export default function GlowOrb({ className, color = 'gold' }) {
  const colors = {
    gold: 'bg-gold/20',
    green: 'bg-green/15',
    brown: 'bg-brown/20',
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute rounded-full blur-[100px] animate-glow-pulse',
        colors[color] ?? colors.gold,
        className
      )}
    />
  )
}
