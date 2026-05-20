import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { images } from '@/config/images'

export default function CommunityGallery() {
  const { gallery } = images.community

  return (
    <SectionReveal className="section-padding bg-section-muted">
      <div className="container-narrow">
        <FadeItem className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-icon-accent">Gallery</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">The Movement In Motion</h2>
        </FadeItem>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((photo, i) => (
            <FadeItem
              key={photo.alt}
              className={i === 0 ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-1' : ''}
            >
              <div
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? 'aspect-square md:aspect-[4/5]' : 'aspect-square'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
