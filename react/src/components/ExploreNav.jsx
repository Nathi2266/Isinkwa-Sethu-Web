import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { navLinks } from '@/config/navigation'
import { images } from '@/config/images'

const descriptions = {
  About: 'Our story, purpose, and movement by the numbers.',
  Vision: 'The future we are building together — timeline and storytelling.',
  Ownership: 'Community ownership model and the R370 concept.',
  Impact: 'How wealth stays in the township and scales locally.',
  Community: 'Voices from members building the movement.',
  Contact: 'Reach the team and join the conversation.',
}

export default function ExploreNav() {
  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow">
        <FadeItem className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-icon-accent">Explore</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            Discover The Movement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-muted">
            Each part of Isinkwa Sethu has its own space — dive into what matters most to you.
          </p>
        </FadeItem>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navLinks.map((link) => (
            <FadeItem key={link.path}>
              <Link
                to={link.path}
                className="glass glow-gold-hover group flex h-full flex-col overflow-hidden rounded-2xl transition-colors"
              >
                {images.explore[link.label] && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={images.explore[link.label]}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-cream group-hover:text-icon-accent">
                  {link.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-theme-muted">
                  {descriptions[link.label]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-icon-accent">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                </div>
              </Link>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
