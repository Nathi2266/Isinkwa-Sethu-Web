import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'

const steps = [
  { step: 1, title: 'Community Mobilization', description: 'Uniting members around a shared ownership vision.' },
  { step: 2, title: 'Raising Capital', description: 'Collective R370 contributions building the capital base.' },
  { step: 3, title: 'Building the Factory', description: 'Establishing township-based manufacturing infrastructure.' },
  { step: 4, title: 'Creating Jobs', description: 'Employment and skills development for local residents.' },
  { step: 5, title: 'Township Distribution', description: 'Products and value circulating within the community.' },
  { step: 6, title: 'Community-Owned Expansion', description: 'Scaling ownership-driven economic growth.' },
]

export default function Timeline() {
  return (
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow">
        <FadeItem className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Our Path Forward</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">The Movement Timeline</h2>
        </FadeItem>

        <div className="relative overflow-x-auto pb-4">
          <div className="flex min-w-[640px] gap-0 lg:min-w-0 lg:grid lg:grid-cols-6">
            {steps.map((item, index) => (
              <FadeItem key={item.step} className="relative flex-1 px-2 first:pl-0 last:pr-0">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-background font-display text-lg font-bold text-gold">
                    {item.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="absolute top-6 left-[calc(50%+24px)] hidden h-0.5 w-[calc(100%-48px)] bg-gradient-to-r from-gold/60 to-gold/20 lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="mt-4 font-display text-sm font-semibold text-cream">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-cream/55">{item.description}</p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
