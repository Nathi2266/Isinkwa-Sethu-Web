import { motion } from 'framer-motion'
import { Wallet, Shield, TrendingUp } from 'lucide-react'
import CinematicHero from '@/components/primitives/CinematicHero'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import GlassCard from '@/components/primitives/GlassCard'
import StatCounter from '@/components/primitives/StatCounter'
import MovementCTA from '@/components/primitives/MovementCTA'
import { site } from '@/config/site'

export function OwnershipHero() {
  return (
    <CinematicHero
      compact
      eyebrow="Ownership"
      title="Built For Ownership,"
      highlight="Not Charity"
      description="A revolutionary model of township empowerment — dignity through shared economic power and the R370 stake."
      primaryCta={site.ctas.contribute}
      secondaryCta={site.ctas.join}
    />
  )
}

export function OwnershipPhilosophy() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow editorial-grid">
        <FadeItem className="lg:col-span-5">
          <SectionHeader
            eyebrow="Philosophy"
            title="Wealth Stays Where It Is Created"
            lead="Every member holds a stake. Profits and decisions remain within community governance — not external extraction."
            align="left"
            className="mb-0"
          />
        </FadeItem>
        <FadeItem className="lg:col-span-7">
          <GlassCard hover={false} className="p-10">
            <p className="font-display text-2xl italic text-gold/90">
              &ldquo;Ownership is dignity. Collective action is power.&rdquo;
            </p>
            <p className="mt-6 text-theme-muted">
              Isinkwa Sethu mobilizes equal participation — transforming small consistent stakes into
              manufacturing capacity and long-term returns.
            </p>
          </GlassCard>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

const r370Layers = [
  { label: 'R370', size: 'h-12 w-12' },
  { label: 'R370', size: 'h-14 w-14' },
  { label: 'R370', size: 'h-16 w-16' },
  { label: 'Community Capital', size: 'h-14 w-full' },
  { label: 'Owned Factory', size: 'h-28 w-full' },
]

export function R370Experience() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
        <FadeItem>
          <SectionHeader
            eyebrow="R370 Model"
            title="Small Inputs. Massive Infrastructure."
            lead="R370 is a stake — not a donation. Thousands at the same level unlock owned manufacturing and jobs."
            align="left"
            className="mb-0"
          />
        </FadeItem>
        <FadeItem>
          <GlassCard hover={false} className="flex min-h-[380px] flex-col items-center justify-center gap-3 p-8">
            <div className="flex flex-wrap justify-center gap-2">
              {r370Layers.slice(0, 3).map((block, i) => (
                <motion.div
                  key={i}
                  className={`${block.size} flex items-center justify-center rounded-lg bg-gold/20 text-xs font-semibold text-gold`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  {block.label}
                </motion.div>
              ))}
            </div>
            <motion.div
              className="flex h-14 w-48 items-center justify-center rounded-xl bg-green/20 text-sm font-medium text-green"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {r370Layers[3].label}
            </motion.div>
            <motion.div
              className="flex h-24 w-full items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-brown/20 text-sm font-semibold text-cream"
            >
              {r370Layers[4].label}
            </motion.div>
          </GlassCard>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

const flowNodes = ['Members Contribute', 'Capital Pool', 'Factory Built', 'Jobs Created', 'Wealth Returns']

export function WealthCirculation() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <SectionHeader eyebrow="Circulation" title="Wealth Circulates Locally" />
        <div className="flex flex-wrap justify-center gap-3">
          {flowNodes.map((node, i) => (
            <FadeItem key={node}>
              <div className="flex items-center gap-3">
                <GlassCard className="px-5 py-4 text-center">
                  <p className="text-xs font-semibold text-icon-accent">0{i + 1}</p>
                  <p className="mt-1 text-sm font-medium text-cream">{node}</p>
                </GlassCard>
                {i < flowNodes.length - 1 && (
                  <span className="hidden text-gold/50 sm:inline" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

const education = [
  { icon: Shield, title: 'Transparent Governance', text: 'Reporting and accountability built for the collective.' },
  { icon: Wallet, title: 'Equal Entry', text: 'R370 — accessible stakes at the same level for all members.' },
  { icon: TrendingUp, title: 'Long-Term Returns', text: 'Capital deployed for community infrastructure, not extraction.' },
]

export function SmartMoney() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow">
        <SectionHeader eyebrow="Smart Money" title="Education For Collective Decisions" />
        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((item) => {
            const Icon = item.icon
            return (
              <FadeItem key={item.title}>
                <GlassCard className="h-full p-8">
                  <Icon className="mb-4 size-8 text-icon-accent" />
                  <h3 className="font-display text-lg font-semibold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm text-theme-muted">{item.text}</p>
                </GlassCard>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

export function EmpowermentGraphics() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeItem>
          <SectionHeader
            eyebrow="Empowerment"
            title="Economic Power At Member Scale"
            align="left"
            className="mb-0"
          />
        </FadeItem>
        <FadeItem className="grid grid-cols-2 gap-4">
          <StatCounter end={10000} suffix="+" label="Target Members" />
          <StatCounter end={370} prefix="R" label="Equal Stake" />
          <StatCounter end={500} suffix="+" label="Future Jobs" className="col-span-2" />
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

export function OwnershipCTA() {
  return (
    <MovementCTA
      title="Your R370 Stake Starts Here."
      description="Equal entry. Shared infrastructure. Ownership that lasts."
      primaryCta={site.ctas.contribute}
      secondaryCta={site.ctas.join}
    />
  )
}
