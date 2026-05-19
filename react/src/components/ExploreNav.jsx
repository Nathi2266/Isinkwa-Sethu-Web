import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { navLinks } from '@/config/navigation'

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
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow">
        <FadeItem className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Explore</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            Discover The Movement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/65">
            Each part of Isinkwa Sethu has its own space — dive into what matters most to you.
          </p>
        </FadeItem>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navLinks.map((link) => (
            <FadeItem key={link.path}>
              <Link
                to={link.path}
                className="glass glow-gold-hover group flex h-full flex-col rounded-2xl p-6 transition-colors"
              >
                <h3 className="font-display text-lg font-semibold text-cream group-hover:text-gold">
                  {link.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">
                  {descriptions[link.label]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
