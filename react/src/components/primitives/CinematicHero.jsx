import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { heroLine } from '@/components/motion/variants'
import GlowOrb from '@/components/primitives/GlowOrb'
import MediaFrame from '@/components/primitives/MediaFrame'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${6 + i * 6}%`,
  top: `${8 + (i % 6) * 14}%`,
  delay: `${i * 0.45}s`,
}))

export default function CinematicHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta = site.ctas.join,
  secondaryCta = site.ctas.vision,
  showMedia = true,
  compact = false,
}) {
  return (
    <section
      aria-labelledby="cinematic-hero-heading"
      className={cn(
        'relative flex overflow-hidden hero-gradient noise-overlay',
        compact ? 'min-h-[70vh] items-center pt-28' : 'min-h-screen items-center pt-24'
      )}
    >
      <GlowOrb className="left-[-10%] top-[10%] h-72 w-72" color="gold" />
      <GlowOrb className="right-[-5%] bottom-[20%] h-64 w-64" color="green" />

      <div className="particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{ left: p.left, top: p.top, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="container-narrow relative z-10 grid gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-20">
        <div>
          {eyebrow && (
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={heroLine}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            id="cinematic-hero-heading"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={heroLine}
            className="font-display text-display-xl font-extrabold leading-[1.05] text-cream"
          >
            {title}{' '}
            {highlight && <span className="text-gradient-gold">{highlight}</span>}
          </motion.h1>
          {description && (
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroLine}
              className="mt-6 max-w-xl text-lead text-cream/75"
            >
              {description}
            </motion.p>
          )}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroLine}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to={primaryCta.path}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button variant="outline-gold" size="lg" asChild>
                <Link to={secondaryCta.path}>{secondaryCta.label}</Link>
              </Button>
            )}
          </motion.div>
        </div>

        {showMedia && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <MediaFrame
              label="Movement visual"
              sublabel="Cinematic placeholder — brand media ready"
              showPlay
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
