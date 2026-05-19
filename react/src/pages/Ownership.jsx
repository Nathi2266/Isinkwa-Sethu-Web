import PageHero from '@/components/PageHero'
import WhySection from '@/components/WhySection'
import R370Concept from '@/components/R370Concept'

export default function Ownership() {
  return (
    <main>
      <PageHero
        eyebrow="Ownership"
        title="Built For Ownership, Not Charity"
        description="A revolutionary model of township empowerment — dignity through shared economic power and the R370 stake."
      />
      <WhySection />
      <R370Concept />
    </main>
  )
}
