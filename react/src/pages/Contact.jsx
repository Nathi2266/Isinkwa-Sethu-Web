import PageHero from '@/components/PageHero'
import ContactSection from '@/components/ContactSection'

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Together"
        description="Reach out to join the movement, explore partnerships, or ask questions about community ownership."
      />
      <ContactSection />
    </main>
  )
}
