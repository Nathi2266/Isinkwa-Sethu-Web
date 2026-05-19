import {
  AboutHero,
  MovementStats,
  OriginStory,
  VisionStatement,
  WhyOwnership,
  ImpactPreview,
  AboutCTA,
} from '@/features/about/sections'

export default function About() {
  return (
    <main>
      <AboutHero />
      <MovementStats />
      <OriginStory />
      <VisionStatement />
      <WhyOwnership />
      <ImpactPreview />
      <AboutCTA />
    </main>
  )
}
