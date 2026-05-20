import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeItem } from '@/components/motion/SectionReveal'

const visuals = [
  { label: 'African innovation', gradient: 'from-gold/20 to-green/10' },
  { label: 'Manufacturing vision', gradient: 'from-brown/30 to-gold/10' },
  { label: 'Community collective', gradient: 'from-green/15 to-gold/15' },
]

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + i * 7}%`,
  top: `${10 + (i % 5) * 18}%`,
  delay: `${i * 0.5}s`,
}))

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden hero-gradient pt-24"
    >
      <div className="particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{ left: p.left, top: p.top, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="container-narrow relative z-10 grid gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <FadeItem>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-icon-accent">
            Digital Economic Movement
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Our Bread.{' '}
            <span className="text-gradient-gold">Our Ownership.</span> Our Future.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-theme-muted leading-relaxed">
            A community-powered initiative building economic ownership through collective
            township investment.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Become Part of the Movement</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/vision" className="flex items-center gap-2">
                <Play className="size-4 fill-current" />
                Watch The Vision
              </Link>
            </Button>
          </div>
        </FadeItem>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
          {visuals.map((item, index) => (
            <motion.div
              key={item.label}
              className={`glass glow-gold-hover aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.4,
              }}
            >
              <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-3 h-16 w-16 rounded-full border border-gold/30 bg-gold/10" />
                <p className="text-sm font-medium text-theme-muted">{item.label}</p>
                <p className="mt-1 text-xs text-theme-subtle">Cinematic visual placeholder</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
