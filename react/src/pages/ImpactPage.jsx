import {
  ImpactHero,
  ImpactMetrics,
  YouthEmployment,
  WomenEmpowerment,
  TownshipGrowth,
  LocalEcosystem,
  ImpactStory,
  ImpactCTA,
} from '@/features/impact/sections'

export default function ImpactPage() {
  return (
    <main>
      <ImpactHero />
      <ImpactMetrics />
      <YouthEmployment />
      <WomenEmpowerment />
      <TownshipGrowth />
      <LocalEcosystem />
      <ImpactStory />
      <ImpactCTA />
    </main>
  )
}
