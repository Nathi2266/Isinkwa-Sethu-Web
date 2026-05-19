import {
  ContactHero,
  ContactExperience,
  ContactChannels,
  SocialStrip,
  ContactFAQ,
  ContactCTA,
} from '@/features/contact/sections'

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactExperience />
      <ContactChannels />
      <SocialStrip />
      <ContactFAQ />
      <ContactCTA />
    </main>
  )
}
