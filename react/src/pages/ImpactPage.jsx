import PageHero from '@/components/PageHero'
import Impact from '@/components/Impact'
import { images } from '@/config/images'

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        backgroundImage={images.impact.heroBg}
        eyebrow="Impact"
        title="Keeping Wealth Inside The Community"
        description="We are building an economic engine where profits, jobs, and ownership circulate locally."
      />
      <Impact />
    </main>
  )
}
