import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import MediaFrame from '@/components/primitives/MediaFrame'
import { Button } from '@/components/ui/button'

export default function CinematicTeaser() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow editorial-grid">
        <FadeItem className="lg:col-span-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-icon-accent">Cinematic Vision</p>
          <h2 className="font-display text-display font-bold text-cream">
            See The Future We Are Building Together
          </h2>
          <p className="mt-5 text-lead text-theme-muted">
            Township transformation, owned manufacturing, and collective capital — told through movement
            storytelling.
          </p>
          <Button variant="gold" className="mt-8" asChild>
            <Link to="/vision" className="gap-2">
              <Play className="size-4 fill-current" />
              Explore The Vision
            </Link>
          </Button>
        </FadeItem>
        <FadeItem className="lg:col-span-7">
          <MediaFrame
            label="Movement explainer"
            sublabel="Vision film placeholder"
            showPlay
          />
        </FadeItem>
      </div>
    </SectionReveal>
  )
}
