import { motion } from 'framer-motion'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { useCountUp } from '@/hooks/useCountUp'

function StatCard({ end, prefix, suffix, label, decimals = 0 }) {
  const { ref, display } = useCountUp(end, { prefix, suffix, decimals })

  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -4 }}
      className="glass glow-gold-hover rounded-2xl p-8 text-center transition-shadow duration-300"
    >
      <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{display}</p>
      <p className="mt-3 text-sm text-cream/70">{label}</p>
    </motion.article>
  )
}

export default function Stats() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <FadeItem className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            Movement By The Numbers
          </h2>
          <p className="mt-4 text-cream/65">Collective power measured in vision, people, and impact.</p>
        </FadeItem>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FadeItem>
            <StatCard end={2.4} decimals={1} prefix="R" suffix="M" label="Vision Target" />
          </FadeItem>
          <FadeItem>
            <StatCard end={10000} suffix="+" label="Community Members" />
          </FadeItem>
          <FadeItem>
            <StatCard end={500} suffix="+" label="Future Jobs" />
          </FadeItem>
          <FadeItem>
            <StatCard end={1} label="Shared Economic Vision" />
          </FadeItem>
        </div>
      </div>
    </SectionReveal>
  )
}
