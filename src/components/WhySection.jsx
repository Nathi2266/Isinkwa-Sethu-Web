import { motion } from 'framer-motion'
import { Users, Factory, TrendingUp, Wallet } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'

const cards = [
  {
    icon: Users,
    title: 'Community Ownership',
    description:
      'Wealth stays where it is created. Every member holds a stake in the economic future we build together.',
  },
  {
    icon: Factory,
    title: 'Township Manufacturing',
    description:
      'Production rooted in our communities — creating jobs, skills, and industrial capacity from within.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Independence',
    description:
      'Breaking dependency cycles through owned infrastructure and locally controlled value chains.',
  },
  {
    icon: Wallet,
    title: 'Smart Money Decisions',
    description:
      'Transparent, collective capital deployment designed for long-term community returns — not extraction.',
  },
]

export default function WhySection() {
  return (
    <SectionReveal className="section-padding bg-black/30" id="ownership">
      <div className="container-narrow">
        <FadeItem className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Why Isinkwa Sethu</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            Built For Ownership, Not Charity
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            A revolutionary model of township empowerment — dignity through shared economic power.
          </p>
        </FadeItem>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const CardIcon = card.icon
            return (
              <FadeItem key={card.title}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="glass glow-gold-hover group h-full rounded-2xl p-8 transition-all duration-300"
                >
                  <div className="mb-5 inline-flex rounded-xl border border-gold/20 bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold/20">
                    <CardIcon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-cream">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{card.description}</p>
                </motion.article>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}
