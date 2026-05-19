import CinematicHero from '@/components/primitives/CinematicHero'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import GlassCard from '@/components/primitives/GlassCard'
import MovementCTA from '@/components/primitives/MovementCTA'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { site } from '@/config/site'

const featured = {
  quote:
    'This is not charity — it is ownership. For the first time, I see a path where our township keeps the value we create.',
  name: 'Thabo M.',
  role: 'Entrepreneur, Soweto',
}

const testimonials = [
  { quote: 'R370 feels accessible but powerful. We are building our own factory.', name: 'Lerato K.', role: 'Student', category: 'Student' },
  { quote: 'I want my children to grow up in an economy we own.', name: 'Nomsa D.', role: 'Resident', category: 'Resident' },
  { quote: 'Manufacturing jobs change everything for our community.', name: 'Sipho N.', role: 'Production', category: 'Worker' },
  { quote: 'Futuristic African innovation — collective and bold.', name: 'Ayanda T.', role: 'Youth Leader', category: 'Youth' },
]

const profiles = [
  { name: 'Thabo M.', role: 'Entrepreneur', tag: 'Soweto' },
  { name: 'Lerato K.', role: 'Student Member', tag: 'Youth' },
  { name: 'Nomsa D.', role: 'Community Investor', tag: 'Resident' },
  { name: 'David P.', role: 'Collective Stakeholder', tag: 'Investor' },
]

const photos = Array.from({ length: 6 }, (_, i) => ({ id: i, label: `Community ${i + 1}` }))

export function CommunityHero() {
  return (
    <CinematicHero
      compact
      eyebrow="Community"
      title="Voices Of"
      highlight="The Movement"
      description="Real stories from members building ownership, jobs, and futures in their townships."
      primaryCta={site.ctas.join}
      secondaryCta={{ label: 'Share your story', path: '/contact' }}
    />
  )
}

export function FeaturedStory() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <FadeItem>
          <GlassCard hover={false} className="p-10 sm:p-16 lg:p-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Featured Story</p>
            <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <footer className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gold/30 to-brown/40" />
              <div>
                <cite className="font-display font-semibold not-italic text-cream">{featured.name}</cite>
                <p className="text-sm text-cream/50">{featured.role}</p>
              </div>
            </footer>
          </GlassCard>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}

export function StoriesCarousel() {
  return (
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow">
        <SectionHeader eyebrow="Stories" title="Members Building The Future" />
        <Carousel className="px-12">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <GlassCard className="flex h-full flex-col p-8">
                  <span className="text-xs font-semibold uppercase text-gold">{t.category}</span>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/80">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-6 font-display text-sm font-semibold text-cream">{t.name}</p>
                  <p className="text-xs text-cream/50">{t.role}</p>
                </GlassCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </SectionReveal>
  )
}

export function ProfileGrid() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <SectionHeader eyebrow="Profiles" title="Entrepreneurs & Changemakers" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => (
            <FadeItem key={p.name}>
              <GlassCard className="p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-gold/20 to-green/10" />
                <h3 className="mt-4 font-display font-semibold text-cream">{p.name}</h3>
                <p className="text-sm text-cream/60">{p.role}</p>
                <span className="mt-2 inline-block rounded-full border border-gold/20 px-2 py-0.5 text-xs text-gold">
                  {p.tag}
                </span>
              </GlassCard>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function PhotoGrid() {
  return (
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow">
        <SectionHeader eyebrow="Gallery" title="The Movement In Motion" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {photos.map((photo, i) => (
            <FadeItem
              key={photo.id}
              className={i === 0 ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-1' : ''}
            >
              <div
                className={`glass flex items-end rounded-xl p-4 ${
                  i === 0 ? 'aspect-square md:aspect-[4/5]' : 'aspect-square'
                } bg-gradient-to-br from-brown/20 to-gold/10`}
              >
                <span className="text-xs text-cream/50">{photo.label}</span>
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function CommunityValues() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow text-center">
        <SectionHeader eyebrow="Values" title="What Unites Us" />
        <div className="flex flex-wrap justify-center gap-3">
          {site.values.map((value) => (
            <FadeItem key={value}>
              <span className="rounded-full border border-gold/25 bg-gold/5 px-5 py-2 text-sm font-medium text-cream">
                {value}
              </span>
            </FadeItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export function CommunityCTA() {
  return (
    <MovementCTA
      title="Your Story Belongs In This Movement."
      description="Share your voice. Join the collective. Build ownership with us."
      primaryCta={{ label: 'Share your story', path: '/contact' }}
      secondaryCta={site.ctas.join}
    />
  )
}
