import HomeHero from '@/features/home/sections/HomeHero'
import ProofStrip from '@/features/home/sections/ProofStrip'
import MovementPillars from '@/features/home/sections/MovementPillars'
import CinematicTeaser from '@/features/home/sections/CinematicTeaser'
import FAQSection from '@/components/shared/FAQSection'
import MovementCTA from '@/components/primitives/MovementCTA'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ProofStrip />
      <MovementPillars />
      <CinematicTeaser />
      <FAQSection />
      <MovementCTA />
    </main>
  )
}
