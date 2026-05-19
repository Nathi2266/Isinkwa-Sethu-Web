import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CinematicHero from '@/components/primitives/CinematicHero'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import MediaFrame from '@/components/primitives/MediaFrame'
import GlassCard from '@/components/primitives/GlassCard'
import MovementCTA from '@/components/primitives/MovementCTA'
import EditorialSection from '@/components/primitives/EditorialSection'
import { timelineSteps, site } from '@/config/site'
export function VisionHero() {
  return (
    <CinematicHero
      compact
      eyebrow="Vision"
      title="Revolutionary"
      highlight="Township Futures"
      description="Manufacturing, collective capital, and owned ecosystems — the vision of economic liberation at scale."
      primaryCta={site.ctas.contribute}
      secondaryCta={site.ctas.join}
    />
  )
}

export function FutureNarrative() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <FadeItem className="mb-10">
          <MediaFrame
            label="Movement explainer"
            sublabel="Documentary placeholder"
            showPlay
            className="mb-10"
          />
        </FadeItem>
        <SectionHeader
          eyebrow="Storytelling"
          title="The Story Behind The Movement"
          lead="Cinematic narratives of ownership, resilience, and collective action."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {['Founder Vision', 'Movement Explainer', 'Community Voices'].map((title) => (
            <FadeItem key={title}>
              <GlassCard className="p-6">
                <div className="mb-4 aspect-[16/10] rounded-lg bg-gradient-to-br from-gold/10 to-green/10" />
                <h3 className="font-display text-lg font-semibold text-cream">{title}</h3>
              </GlassCard>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function HorizontalTimeline() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow">
        <SectionHeader eyebrow="Roadmap" title="The Movement Timeline" />
        <div className="hidden overflow-x-auto pb-4 md:block">
          <div className="flex min-w-[900px] gap-0">
            {timelineSteps.map((item, index) => (
              <FadeItem key={item.step} className="relative flex-1 px-3">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileInView={{ scale: [0.9, 1] }}
                    viewport={{ once: true }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-background font-display text-lg font-bold text-icon-accent"
                  >
                    {item.step}
                  </motion.div>
                  {index < timelineSteps.length - 1 && (
                    <span
                      className="absolute top-7 left-[calc(50%+28px)] h-0.5 w-[calc(100%-56px)] bg-gradient-to-r from-gold/60 to-gold/10"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="mt-4 font-display text-sm font-semibold text-cream">{item.title}</h3>
                  <p className="mt-2 text-xs text-theme-subtle">{item.description}</p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
        <div className="space-y-6 md:hidden">
          {timelineSteps.map((item) => (
            <FadeItem key={item.step}>
              <GlassCard className="flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold text-icon-accent">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-cream">{item.title}</h3>
                  <p className="mt-1 text-sm text-theme-muted">{item.description}</p>
                </div>
              </GlassCard>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function TownshipTransformation() {
  return (
    <EditorialSection
      reverse
      eyebrow="Transformation"
      title="From Dependency To Owned Infrastructure"
      lead="Townships become engines of production — not extraction points. Jobs, skills, and wealth circulate where they are created."
      mediaLabel="Township transformation"
      mediaSublabel="Before / after narrative"
      cta={{ label: 'See impact', path: '/impact' }}
    />
  )
}

const ecosystemNodes = [
  { label: 'Manufacturing', sub: 'Owned factory floor' },
  { label: 'Jobs & Skills', sub: 'Local employment' },
  { label: 'Distribution', sub: 'Township circulation' },
  { label: 'Returns', sub: 'Community wealth' },
]

export function FactoryEcosystem() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Ecosystem"
          title="The Owned Factory Model"
          lead="A connected system where every stage returns value to members."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemNodes.map((node, i) => (
            <FadeItem key={node.label}>
              <GlassCard className="relative p-6 text-center">
                <span className="text-xs font-semibold text-icon-accent">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-cream">{node.label}</h3>
                <p className="mt-1 text-xs text-theme-subtle">{node.sub}</p>
                {i < ecosystemNodes.length - 1 && (
                  <span
                    className="absolute -right-2 top-1/2 hidden h-0.5 w-4 bg-gold/40 lg:block"
                    aria-hidden="true"
                  />
                )}
              </GlassCard>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function OwnershipFuture() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow editorial-grid">
        <FadeItem className="lg:col-span-6">
          <SectionHeader
            eyebrow="Economic Ownership"
            title="Profits Belong To The Collective"
            lead="Governance, transparency, and shared stakes — the architecture of long-term township wealth."
            align="left"
            className="mb-0"
          />
          <Link to="/ownership" className="mt-6 inline-block text-sm font-semibold text-icon-accent">
            Explore ownership model →
          </Link>
        </FadeItem>
        <FadeItem className="lg:col-span-6">
          <GlassCard hover={false} className="p-8">
            <div className="space-y-4">
              {['Member stakes', 'Transparent capital', 'Local returns'].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-gold/15 bg-gold/5 px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-sm text-theme-muted">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

export function VisionCTA() {
  return (
    <MovementCTA
      title="Build The Future With Us."
      description="Contribute your stake. Own the vision. Power the movement."
      primaryCta={site.ctas.contribute}
      secondaryCta={site.ctas.join}
    />
  )
}
