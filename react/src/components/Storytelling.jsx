import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { images } from '@/config/images'

const { featured, stories } = images.vision

export default function Storytelling() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow">
        <FadeItem className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-icon-accent">Storytelling</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            The Story Behind The Movement
          </h2>
          <p className="mt-4 text-theme-muted">
            Cinematic narratives of ownership, resilience, and collective action — told by the people
            building the future.
          </p>
        </FadeItem>

        <FadeItem>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="glass group relative mb-10 aspect-video overflow-hidden rounded-2xl"
          >
            <img
              src={featured.src}
              alt={featured.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm transition-colors group-hover:bg-gold/20">
                  <Play className="size-8 text-icon-accent" fill="currentColor" />
                </div>
                <p className="text-sm text-cream drop-shadow-sm">Movement explainer</p>
              </div>
            </div>
          </motion.div>
        </FadeItem>

        <div className="grid gap-6 sm:grid-cols-3">
          {stories.map((story) => (
            <FadeItem key={story.title}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass glow-gold-hover overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={story.src}
                    alt={story.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-cream">{story.title}</h3>
                </div>
              </motion.article>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
