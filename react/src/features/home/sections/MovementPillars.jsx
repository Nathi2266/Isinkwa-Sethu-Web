import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import GlassCard from '@/components/primitives/GlassCard'
import { movementPillars } from '@/config/site'

export default function MovementPillars() {
  return (
    <SectionReveal className="section-padding-lg ambient-gradient">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="The Movement"
          title="Three Pillars Of Collective Power"
          lead="Ownership, vision, and equal stakes — the foundation of township economic liberation."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {movementPillars.map((pillar, i) => (
            <FadeItem key={pillar.title}>
              <Link to={pillar.path} className="block h-full">
                <GlassCard className="flex h-full flex-col p-8 lg:p-10">
                  <span className="font-display text-5xl font-bold text-gold/30">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-cream">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-theme-muted">{pillar.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-icon-accent">
                    Explore <ArrowRight className="size-4" />
                  </span>
                </GlassCard>
              </Link>
            </FadeItem>
          ))}
        </div>
        </div>
    </SectionReveal>
  )
}
