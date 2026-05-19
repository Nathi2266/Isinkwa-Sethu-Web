import { Link } from 'react-router-dom'
import { Users, Factory, TrendingUp } from 'lucide-react'
import CinematicHero from '@/components/primitives/CinematicHero'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import StatCounter from '@/components/primitives/StatCounter'
import GlassCard from '@/components/primitives/GlassCard'
import EditorialSection from '@/components/primitives/EditorialSection'
import MovementCTA from '@/components/primitives/MovementCTA'
import MediaFrame from '@/components/primitives/MediaFrame'
import { homeStats, site } from '@/config/site'

export function AboutHero() {
  return (
    <CinematicHero
      compact
      eyebrow="About"
      title="A Movement For"
      highlight="Community Ownership"
      description="We unite townships to build shared economic power — ownership, dignity, and African excellence at scale."
      primaryCta={site.ctas.join}
      secondaryCta={{ label: 'Our Impact', path: '/impact' }}
    />
  )
}

export function MovementStats() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="By The Numbers"
          title="Collective Power, Measured"
          lead="Vision, people, and impact — the scale of what we build together."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((stat) => (
            <FadeItem key={stat.label}>
              <GlassCard className="p-8 text-center">
                <StatCounter {...stat} size="lg" />
              </GlassCard>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function OriginStory() {
  return (
    <EditorialSection
      eyebrow="Our Origin"
      title="Not Charity. Ownership."
      lead="Isinkwa Sethu was born from a simple truth: wealth created in townships must stay owned by the people who build it. We are a digital economic movement — mobilizing collective capital for manufacturing, jobs, and long-term dignity."
      mediaLabel="Community mobilization"
      mediaSublabel="Movement origin story"
      cta={{ label: 'Read our vision', path: '/vision' }}
    />
  )
}

export function VisionStatement() {
  return (
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow">
        <FadeItem className="mx-auto max-w-4xl text-center">
          <blockquote className="font-display text-3xl font-bold leading-snug text-cream sm:text-4xl lg:text-5xl">
            &ldquo;The future belongs to communities that{' '}
            <span className="text-gradient-gold">own together</span>.&rdquo;
          </blockquote>
          <p className="mt-8 text-lead text-cream/60">
            Economic liberation starts when ownership replaces dependency.
          </p>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

const pillars = [
  {
    icon: Users,
    title: 'Community Ownership',
    description: 'Every member holds a stake in the economic future we build together.',
  },
  {
    icon: Factory,
    title: 'Township Manufacturing',
    description: 'Production rooted in our communities — jobs and capacity from within.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Independence',
    description: 'Breaking dependency through owned infrastructure and local value chains.',
  },
]

export function WhyOwnership() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Why Ownership"
          title="Dignity Through Shared Economic Power"
          align="left"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <FadeItem key={p.title}>
                <GlassCard className="h-full p-8">
                  <div className="mb-5 inline-flex rounded-xl border border-gold/20 bg-gold/10 p-3 text-gold">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm text-cream/65">{p.description}</p>
                </GlassCard>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

export function ImpactPreview() {
  return (
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow editorial-grid">
        <FadeItem className="lg:col-span-5">
          <SectionHeader
            eyebrow="Impact"
            title="Wealth That Stays Local"
            lead="See how the movement retains value, creates jobs, and scales township growth."
            align="left"
            className="mb-0"
          />
          <Link
            to="/impact"
            className="mt-6 inline-block text-sm font-semibold text-gold hover:text-cream"
          >
            Explore impact →
          </Link>
        </FadeItem>
        <FadeItem className="lg:col-span-7">
          <MediaFrame label="Impact visualization" sublabel="Economic circulation model" />
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

export function AboutCTA() {
  return (
    <MovementCTA
      title="Become Part Of The Ownership Movement."
      description="Join thousands building a shared economic future — starting with dignity and collective action."
    />
  )
}
