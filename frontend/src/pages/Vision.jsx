import PageHero from '@/components/PageHero'
import Storytelling from '@/components/Storytelling'
import Timeline from '@/components/Timeline'

export default function Vision() {
  return (
    <main>
      <PageHero
        eyebrow="Vision"
        title="Our Bread. Our Ownership. Our Future."
        description="A community-powered vision for township manufacturing, collective capital, and economic dignity."
      />
      <Storytelling />
      <Timeline />
    </main>
  )
}
