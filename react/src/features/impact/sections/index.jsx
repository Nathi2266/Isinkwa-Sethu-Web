import CinematicHero from '@/components/primitives/CinematicHero'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import StatCounter from '@/components/primitives/StatCounter'
import GlassCard from '@/components/primitives/GlassCard'
import MovementCTA from '@/components/primitives/MovementCTA'
import EditorialSection from '@/components/primitives/EditorialSection'
import { site } from '@/config/site'

export function ImpactHero() {
  return (
    <CinematicHero
      compact
      eyebrow="Impact"
      title="Hope Measured In"
      highlight="Local Wealth"
      description="An economic engine where profits, jobs, and ownership circulate in townships — powering dignity at scale."
      primaryCta={{ label: 'Meet the community', path: '/community' }}
      secondaryCta={site.ctas.join}
    />
  )
}

export function ImpactMetrics() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <GlassCard hover={false} className="p-10 sm:p-16 lg:p-20">
          <SectionHeader
            eyebrow="Metrics"
            title="Keeping Wealth Inside The Community"
            lead="Targets that reflect our commitment to local retention, partners, and governance."
          />
          <div className="grid gap-10 sm:grid-cols-3">
            <StatCounter end={85} suffix="%" label="Wealth Retained Locally (Target)" size="lg" />
            <StatCounter end={12} suffix="+" label="Township Partners (Planned)" size="lg" />
            <StatCounter end={100} suffix="%" label="Community-Led Governance" size="lg" />
          </div>
        </GlassCard>
      </div>
    </SectionReveal>
  )
}

export function YouthEmployment() {
  return (
    <EditorialSection
      eyebrow="Youth"
      title="Jobs Built From Within"
      lead="Manufacturing and skills pathways give young people ownership of their economic future — not handouts."
      mediaLabel="Youth employment"
      mediaSublabel="Skills & production"
    />
  )
}

export function WomenEmpowerment() {
  return (
    <EditorialSection
      reverse
      eyebrow="Women"
      title="Economic Dignity For Every Voice"
      lead="Women lead, invest, and govern within the movement — shaping returns that stay in the community."
      mediaLabel="Women empowerment"
      mediaSublabel="Leadership & ownership"
    />
  )
}

export function TownshipGrowth() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow">
        <SectionHeader eyebrow="Growth" title="Township Growth Statistics" />
        <div className="grid gap-6 sm:grid-cols-3">
          <FadeItem>
            <GlassCard className="p-8">
              <StatCounter end={24} suffix="%" label="Projected Local GDP Lift" />
            </GlassCard>
          </FadeItem>
          <FadeItem>
            <GlassCard className="p-8">
              <StatCounter end={150} suffix="+" label="Local Suppliers (Target)" />
            </GlassCard>
          </FadeItem>
          <FadeItem>
            <GlassCard className="p-8">
              <div className="h-24 rounded-lg bg-gradient-to-t from-gold/20 to-transparent" />
              <p className="mt-4 text-center text-xs text-theme-subtle">Growth chart placeholder</p>
            </GlassCard>
          </FadeItem>
        </div>
      </div>
    </SectionReveal>
  )
}

const ecosystem = [
  { title: 'Local Businesses', desc: 'Supplier networks rooted in townships' },
  { title: 'Production Jobs', desc: 'Factory-floor employment' },
  { title: 'Distribution', desc: 'Products sold within communities' },
]

export function LocalEcosystem() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <SectionHeader eyebrow="Ecosystem" title="Local Business Circulation" />
        <div className="grid gap-6 md:grid-cols-3">
          {ecosystem.map((item) => (
            <FadeItem key={item.title}>
              <GlassCard className="p-8 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-gold/30 bg-gold/10" />
                <h3 className="font-display font-semibold text-cream">{item.title}</h3>
                <p className="mt-2 text-sm text-theme-muted">{item.desc}</p>
              </GlassCard>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function ImpactStory() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow">
        <FadeItem className="mx-auto max-w-4xl rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-green/5 p-12 text-center sm:p-16">
          <p className="font-display text-2xl font-bold leading-snug text-cream sm:text-3xl">
            &ldquo;For the first time, I see a path where our township keeps the value we create.&rdquo;
          </p>
          <p className="mt-6 text-sm text-theme-subtle">— Movement member, Soweto</p>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

export function ImpactCTA() {
  return (
    <MovementCTA
      title="Impact Grows When Communities Own Together."
      primaryCta={{ label: 'Meet the community', path: '/community' }}
      secondaryCta={site.ctas.join}
    />
  )
}
