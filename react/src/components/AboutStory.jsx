import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { images } from '@/config/images'

export default function AboutStory() {
  const { origin } = images.about

  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow editorial-grid">
        <FadeItem className="lg:col-span-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-icon-accent">Our Origin</p>
          <h2 className="font-display text-display font-bold text-cream text-balance">Not Charity. Ownership.</h2>
          <p className="mt-5 text-lead text-theme-muted">
            Isinkwa Sethu was born from a simple truth: wealth created in townships must stay owned by the people
            who build it. We mobilize collective capital for manufacturing, jobs, and long-term dignity.
          </p>
          <Link
            to="/vision"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-foreground"
          >
            Read our vision
            <ArrowRight className="size-4" />
          </Link>
        </FadeItem>
        <FadeItem className="lg:col-span-7">
          <div className="glass relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={origin.src}
              alt={origin.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}
