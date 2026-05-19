import HomeHero from '@/features/home/sections/HomeHero'
import MovementPillars from '@/features/home/sections/MovementPillars'
import ProofStrip from '@/features/home/sections/ProofStrip'
import CinematicTeaser from '@/features/home/sections/CinematicTeaser'
import FAQSection from '@/components/shared/FAQSection'
import MovementCTA from '@/components/primitives/MovementCTA'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <MovementPillars />
      <ProofStrip />
      <CinematicTeaser />
      <FAQSection />
      <MovementCTA />
    </main>
  )
}
