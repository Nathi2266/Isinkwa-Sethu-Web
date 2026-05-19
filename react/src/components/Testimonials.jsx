import { motion } from 'framer-motion'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'

const testimonials = [
  {
    quote:
      'This is not charity — it is ownership. For the first time, I see a path where our township keeps the value we create.',
    name: 'Thabo M.',
    role: 'Entrepreneur, Soweto',
  },
  {
    quote:
      'R370 feels accessible but powerful. We are not waiting for handouts — we are building our own factory.',
    name: 'Lerato K.',
    role: 'Student & Community Member',
  },
  {
    quote:
      'I want my children to grow up in an economy we own. Isinkwa Sethu represents that future.',
    name: 'Nomsa D.',
    role: 'Township Resident',
  },
  {
    quote:
      'Manufacturing jobs in our community change everything. This movement puts dignity back in our hands.',
    name: 'Sipho N.',
    role: 'Production Worker',
  },
  {
    quote:
      'The vision is futuristic African innovation — collective, bold, and built from the ground up.',
    name: 'Ayanda T.',
    role: 'Youth Leader',
  },
  {
    quote:
      'Smart money decisions, shared governance, real returns. This is how economic independence starts.',
    name: 'David P.',
    role: 'Community Investor',
  },
]

export default function Testimonials() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <FadeItem className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-icon-accent">Testimonials</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">Voices Of The Movement</h2>
        </FadeItem>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <FadeItem key={item.name}>
              <motion.blockquote
                whileHover={{ y: -4 }}
                className="glass glow-gold-hover flex h-full flex-col rounded-2xl p-8"
              >
                <p className="flex-1 text-sm leading-relaxed text-theme-muted">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-4 border-t border-gold/10 pt-6">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-gold/30 to-brown/40" />
                  <div>
                    <cite className="font-display text-sm font-semibold not-italic text-cream">
                      {item.name}
                    </cite>
                    <p className="text-xs text-theme-subtle">{item.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
