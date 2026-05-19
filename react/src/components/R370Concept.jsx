import { motion } from 'framer-motion'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'

const blocks = [
  { size: 'h-12 w-12', label: 'R370' },
  { size: 'h-14 w-14', label: 'R370' },
  { size: 'h-16 w-16', label: 'R370' },
  { size: 'h-24 w-full max-w-xs', label: 'Community Capital' },
  { size: 'h-32 w-full', label: 'Owned Factory & Ecosystem' },
]

export default function R370Concept() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeItem>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-icon-accent">The R370 Concept</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            Small Inputs. Massive Infrastructure.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-theme-muted">
            R370 is not a donation — it is a stake in collective ownership. When thousands contribute
            at the same level, we unlock manufacturing capacity, jobs, and long-term wealth that stays
            in the township.
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-xl italic text-gold/90">
            &ldquo;Small contributions become massive community infrastructure when ownership is
            shared.&rdquo;
          </blockquote>
        </FadeItem>

        <FadeItem>
          <motion.div
            className="glass relative flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-2xl p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-end justify-center gap-3">
              {blocks.slice(0, 3).map((block, i) => (
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
              {blocks[3].label}
            </motion.div>
            <motion.div
              className="flex h-28 w-full items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-brown/20 text-sm font-semibold text-cream"
              whileHover={{ scale: 1.02 }}
            >
              {blocks[4].label}
            </motion.div>
            <p className="text-center text-xs text-theme-subtle">Animated ecosystem placeholder</p>
          </motion.div>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}
