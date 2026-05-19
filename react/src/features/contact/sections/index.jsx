import { useState } from 'react'
import { Mail, MapPin, Building2 } from 'lucide-react'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import CinematicHero from '@/components/primitives/CinematicHero'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import GlassCard from '@/components/primitives/GlassCard'
import MovementCTA from '@/components/primitives/MovementCTA'
import FAQSection from '@/components/shared/FAQSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { contactFaqs, site } from '@/config/site'
import { addBreadcrumb, wrapHandler } from '@/lib/monitoring'
import { submitContactMessage } from '@/lib/api'

const socialIcons = { Twitter, Instagram, LinkedIn: Linkedin, YouTube: Youtube }

export function ContactHero() {
  return (
    <CinematicHero
      compact
      showMedia={false}
      eyebrow="Contact"
      title="Let's Build"
      highlight="Together"
      description="Join the movement, explore partnerships, or ask about community ownership."
      primaryCta={site.ctas.join}
      secondaryCta={site.ctas.contribute}
    />
  )
}

export function ContactExperience() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = wrapHandler(
    async (e) => {
      e.preventDefault()
      const form = e.currentTarget
      const name = form.elements.name.value.trim()
      const email = form.elements.email.value.trim()
      const message = form.elements.message.value.trim()

      setSubmitting(true)
      setStatus({ type: 'idle', message: '' })
      addBreadcrumb('contact_form_submit', { hasName: Boolean(name), hasEmail: Boolean(email) })

      try {
        await submitContactMessage({ name, email, message })
        form.reset()
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' })
      } catch (err) {
        setStatus({ type: 'error', message: err.message || 'Could not send your message.' })
      } finally {
        setSubmitting(false)
      }
    },
    { feature: 'contact_form' }
  )

  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-5">
          <FadeItem className="lg:col-span-2">
            <SectionHeader
              eyebrow="Reach Out"
              title="Start The Conversation"
              lead="We respond within 2–3 business days."
              align="left"
              className="mb-0"
            />
          </FadeItem>
          <FadeItem className="lg:col-span-3">
            <form
              className="glass rounded-2xl p-8 sm:p-10"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="How can we help?" required />
                </div>
              </div>
              {status.message && (
                <p
                  className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                  role="status"
                >
                  {status.message}
                </p>
              )}
              <Button
                type="submit"
                variant="gold"
                className="mt-8 w-full sm:w-auto"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </FadeItem>
        </div>
      </div>
    </SectionReveal>
  )
}

export function ContactChannels() {
  const channels = [
    { icon: Mail, title: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: MapPin, title: 'Location', value: site.contact.location },
    { icon: Building2, title: 'Movement Office', value: 'Community hub — details coming soon' },
  ]

  return (
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((ch) => {
            const Icon = ch.icon
            return (
              <FadeItem key={ch.title}>
                <GlassCard className="p-8">
                  <Icon className="mb-4 size-6 text-gold" />
                  <h3 className="font-display font-semibold text-cream">{ch.title}</h3>
                  {ch.href ? (
                    <a href={ch.href} className="mt-2 block text-sm text-cream/70 hover:text-gold">
                      {ch.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-cream/70">{ch.value}</p>
                  )}
                </GlassCard>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

export function SocialStrip() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow text-center">
        <SectionHeader eyebrow="Connect" title="Follow The Movement" />
        <div className="flex justify-center gap-4">
          {site.socials.map((social) => {
            const Icon = socialIcons[social.label] ?? Twitter
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-xl border border-gold/20 p-3 text-cream/70 transition-all hover:border-gold hover:text-gold hover:shadow-[var(--glow-gold-soft)]"
              >
                <Icon className="size-6" />
              </a>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

export function ContactFAQ() {
  return <FAQSection items={contactFaqs} title="Quick Answers" />
}

export function ContactCTA() {
  return (
    <MovementCTA
      title="Ready To Own Your Economic Future?"
      description="Partner with us or become a movement member today."
      primaryCta={site.ctas.join}
      secondaryCta={site.ctas.contribute}
    />
  )
}
