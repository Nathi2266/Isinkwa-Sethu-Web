import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import WhySection from '@/components/WhySection'
import R370Concept from '@/components/R370Concept'
import Timeline from '@/components/Timeline'
import Impact from '@/components/Impact'
import Storytelling from '@/components/Storytelling'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhySection />
        <R370Concept />
        <Timeline />
        <Impact />
        <Storytelling />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
