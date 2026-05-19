import PageHero from '@/components/PageHero'
import Testimonials from '@/components/Testimonials'

export default function Community() {
  return (
    <main>
      <PageHero
        eyebrow="Community"
        title="Voices Of The Movement"
        description="Real stories from members building ownership, jobs, and futures in their townships."
      />
      <Testimonials />
    </main>
  )
}
