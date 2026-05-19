import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'

const stories = [
  { title: 'Founder Vision', type: 'Interview placeholder' },
  { title: 'Movement Explainer', type: 'Documentary placeholder' },
  { title: 'Community Voices', type: 'Testimonial series placeholder' },
]

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
            <motion.div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brown/30 to-gold/10">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <Play className="size-8 text-icon-accent" fill="currentColor" />
                </div>
                <p className="text-sm text-theme-muted">Movement explainer video placeholder</p>
              </div>
            </motion.div>
          </motion.div>
        </FadeItem>

        <div className="grid gap-6 sm:grid-cols-3">
          {stories.map((story) => (
            <FadeItem key={story.title}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass glow-gold-hover rounded-2xl p-6"
              >
                <div className="mb-4 aspect-[16/10] rounded-lg bg-gradient-to-br from-gold/10 to-green/10" />
                <h3 className="font-display text-lg font-semibold text-cream">{story.title}</h3>
                <p className="mt-2 text-sm text-theme-subtle">{story.type}</p>
              </motion.article>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
