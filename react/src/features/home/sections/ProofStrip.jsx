import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import StatCounter from '@/components/primitives/StatCounter'
import GlassCard from '@/components/primitives/GlassCard'
import { homeStats } from '@/config/site'

export default function ProofStrip() {
  return (
    <SectionReveal className="section-padding bg-black/40">
      <div className="container-narrow">
        <FadeItem className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Proof Of Vision</p>
        </FadeItem>
        <GlassCard hover={false} className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-12">
          {homeStats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </GlassCard>
      </div>
    </SectionReveal>
  )
}
