import { useState } from 'react'
import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import { submitContactMessage } from '@/lib/api'
import { wrapHandler } from '@/lib/monitoring'
import { site } from '@/config/site'

export default function ContactSection() {
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
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeItem>
            <div className="glass rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-cream">Get In Touch</h2>
              <p className="mt-4 text-theme-muted">
                Whether you want to join, partner, or learn more — we would love to hear from you.
              </p>
              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3 text-theme-muted">
                  <Mail className="mt-0.5 size-5 shrink-0 text-icon-accent" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cream">Email</p>
                    <a href={`mailto:${site.contact.email}`} className="text-sm hover:text-icon-accent">
                      {site.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-theme-muted">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-icon-accent" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cream">Location</p>
                    <p className="text-sm">{site.contact.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-theme-muted">
                  <MessageSquare className="mt-0.5 size-5 shrink-0 text-icon-accent" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cream">Response time</p>
                    <p className="text-sm">We aim to reply within 2–3 business days.</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeItem>

          <FadeItem>
            <form
              className="glass rounded-2xl p-8 sm:p-10"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <h2 className="font-display text-2xl font-bold text-cream">Send A Message</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-theme-muted">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gold/20 bg-input px-4 py-3 text-sm text-foreground placeholder:text-theme-subtle focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-theme-muted">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gold/20 bg-input px-4 py-3 text-sm text-foreground placeholder:text-theme-subtle focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-theme-muted">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y rounded-lg border border-gold/20 bg-input px-4 py-3 text-sm text-foreground placeholder:text-theme-subtle focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              {status.message ? (
                <p
                  className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                  role="status"
                >
                  {status.message}
                </p>
              ) : null}
              <Button type="submit" variant="gold" className="mt-6 w-full sm:w-auto" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </FadeItem>
        </div>
      </div>
    </SectionReveal>
  )
}
