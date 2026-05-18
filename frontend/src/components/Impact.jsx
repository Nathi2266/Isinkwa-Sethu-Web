import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { useCountUp } from '@/hooks/useCountUp'

function Metric({ end, suffix, label }) {
  const { ref, display } = useCountUp(end, { suffix })
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-gold sm:text-5xl">{display}</p>
      <p className="mt-2 text-sm text-cream/60">{label}</p>
    </div>
  )
}

export default function Impact() {
  return (
    <SectionReveal className="section-padding" id="impact">
      <div className="container-narrow">
        <div className="glass overflow-hidden rounded-3xl border border-gold/15 p-10 sm:p-16 lg:p-20">
          <FadeItem>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Impact</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
              Keeping wealth inside the community.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-cream/70">
              We are building an economic engine where profits, jobs, and ownership circulate locally —
              powering dignity, independence, and African excellence at scale.
            </p>
          </FadeItem>

          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            <FadeItem>
              <Metric end={85} suffix="%" label="Wealth Retained Locally (Target)" />
            </FadeItem>
            <FadeItem>
              <Metric end={12} suffix="+" label="Township Partners (Planned)" />
            </FadeItem>
            <FadeItem>
              <Metric end={100} suffix="%" label="Community-Led Governance" />
            </FadeItem>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
