import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'

export default function CTA() {
  return (
    <SectionReveal className="section-padding" id="cta">
      <div className="container-narrow">
        <FadeItem>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/10 via-background to-green/10 p-12 text-center sm:p-16 lg:p-20"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.12),transparent_70%)]" />
            <h2 className="relative font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
              The Future Will Be Built By Communities That Own Together.
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-cream/70">
              Join a movement redefining township economics — with dignity, ownership, and African
              excellence at its core.
            </p>
            <div className="relative mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="gold" size="lg" asChild>
                <a href="#contact">Join The Movement</a>
              </Button>
              <Button variant="outline-gold" size="lg" asChild>
                <a href="#ownership">Contribute Now</a>
              </Button>
            </div>
          </motion.div>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}
