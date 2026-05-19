import CinematicHero from '@/components/primitives/CinematicHero'
import { site } from '@/config/site'

export default function HomeHero() {
  return (
    <CinematicHero
      eyebrow="Digital Economic Movement"
      title="Our Bread."
      highlight="Our Ownership. Our Future."
      description="A community-powered initiative building economic ownership through collective township investment — dignity, not dependency."
      primaryCta={site.ctas.join}
      secondaryCta={site.ctas.vision}
    />
  )
}
