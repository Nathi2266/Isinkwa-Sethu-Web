import Hero from '@/components/Hero'
import ExploreNav from '@/components/ExploreNav'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import SentryVerifyButton from '@/components/SentryVerifyButton'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container-narrow flex justify-center px-4 pb-8 sm:px-6 lg:px-8">
        <SentryVerifyButton />
      </div>
      <ExploreNav />
      <FAQ />
      <CTA />
    </main>
  )
}
