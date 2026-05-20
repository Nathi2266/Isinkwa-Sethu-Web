import PageHero from '@/components/PageHero'
import Stats from '@/components/Stats'
import AboutStory from '@/components/AboutStory'
import { images } from '@/config/images'

export default function About() {
  return (
    <main>
      <PageHero
        backgroundImage={images.about.heroBg}
        eyebrow="About"
        title="Our Story & Movement"
        description="Isinkwa Sethu is a digital economic movement — uniting communities to build shared ownership, not dependency."
      />
      <AboutStory />
      <Stats />
    </main>
  )
}
