import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeItem } from '@/components/motion/SectionReveal'
import { images } from '@/config/images'

const visuals = images.home.heroVisuals

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
              <Link to="/join-us">Become Part of the Movement</Link>
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
              className={`glass glow-gold-hover relative aspect-[4/3] overflow-hidden rounded-2xl ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.4,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col items-end justify-end p-5 text-left">
                <p className="text-sm font-medium text-cream drop-shadow-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
