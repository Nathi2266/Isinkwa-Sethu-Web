import { FadeItem } from '@/components/motion/SectionReveal'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative overflow-hidden hero-gradient pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="container-narrow relative z-10 px-4 sm:px-6 lg:px-8">
        <FadeItem className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-icon-accent">{eyebrow}</p>
          )}
          <h1
            id="page-hero-heading"
            className="font-display text-4xl font-extrabold leading-tight text-cream sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-theme-muted">{description}</p>
          )}
        </FadeItem>
      </div>
    </section>
  )
}
