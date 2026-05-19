import PageHero from '@/components/PageHero'
import Stats from '@/components/Stats'

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Our Story & Movement"
        description="Isinkwa Sethu is a digital economic movement — uniting communities to build shared ownership, not dependency."
      />
      <Stats />
    </main>
  )
}
