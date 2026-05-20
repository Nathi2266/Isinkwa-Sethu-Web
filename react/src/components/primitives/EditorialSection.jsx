import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { slideFromLeft, slideFromRight } from '@/components/motion/variants'
import MediaFrame from '@/components/primitives/MediaFrame'
import { cn } from '@/lib/utils'

export default function EditorialSection({
  eyebrow,
  title,
  lead,
  cta,
  mediaLabel,
  mediaSublabel,
  mediaSrc,
  mediaAlt,
  reverse = false,
  className,
}) {
  const copyVariants = reverse ? slideFromRight : slideFromLeft
  const mediaVariants = reverse ? slideFromLeft : slideFromRight

  return (
    <SectionReveal className={cn('section-padding', className)}>
      <div className="container-narrow editorial-grid">
        <FadeItem variants={copyVariants} className={cn('lg:col-span-5', reverse && 'lg:order-2')}>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-icon-accent">{eyebrow}</p>
          )}
          <h2 className="font-display text-display font-bold text-cream text-balance">{title}</h2>
          {lead && <p className="mt-5 text-lead text-theme-muted">{lead}</p>}
          {cta && (
            <Link
              to={cta.path}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-foreground"
            >
              {cta.label}
              <ArrowRight className="size-4" />
            </Link>
          )}
        </FadeItem>
        <FadeItem variants={mediaVariants} className={cn('lg:col-span-7', reverse && 'lg:order-1')}>
          <MediaFrame
            src={mediaSrc}
            alt={mediaAlt}
            label={mediaLabel}
            sublabel={mediaSublabel}
            showPlay={!!mediaLabel?.includes('video')}
          />
        </FadeItem>
      </div>
    </SectionReveal>
  )
}
