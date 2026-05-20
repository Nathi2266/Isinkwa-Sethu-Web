import PageHero from '@/components/PageHero'
import Testimonials from '@/components/Testimonials'
import CommunityGallery from '@/components/CommunityGallery'
import { images } from '@/config/images'

export default function Community() {
  return (
    <main>
      <PageHero
        backgroundImage={images.community.heroBg}
        eyebrow="Community"
        title="Voices Of The Movement"
        description="Real stories from members building ownership, jobs, and futures in their townships."
      />
      <Testimonials />
      <CommunityGallery />
    </main>
  )
}
