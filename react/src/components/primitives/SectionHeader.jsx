import { FadeItem } from '@/components/motion/SectionReveal'
import { cn } from '@/lib/utils'

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'center',
  className,
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'left' ? 'text-left' : 'text-right mx-auto ml-0'

  return (
    <FadeItem className={cn('mb-12 max-w-3xl', alignClass, className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-icon-accent">{eyebrow}</p>
      )}
      <h2 className="font-display text-display font-bold text-cream text-balance">{title}</h2>
      {lead && <p className="mt-4 text-lead text-theme-muted text-balance">{lead}</p>}
    </FadeItem>
  )
}
