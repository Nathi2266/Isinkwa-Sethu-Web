import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'

export default function ContactSection() {
  return (
    <SectionReveal className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeItem>
            <div className="glass rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-cream">Get In Touch</h2>
              <p className="mt-4 text-cream/70">
                Whether you want to join, partner, or learn more — we would love to hear from you.
              </p>
              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3 text-cream/75">
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cream">Email</p>
                    <a href="mailto:hello@isinkwasethu.org" className="text-sm hover:text-gold">
                      hello@isinkwasethu.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-cream/75">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cream">Location</p>
                    <p className="text-sm">South Africa</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-cream/75">
                  <MessageSquare className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
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
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <h2 className="font-display text-2xl font-bold text-cream">Send A Message</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-cream/80">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gold/20 bg-black/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-cream/80">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gold/20 bg-black/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-cream/80">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y rounded-lg border border-gold/20 bg-black/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              <Button type="submit" variant="gold" className="mt-6 w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </FadeItem>
        </div>
      </div>
    </SectionReveal>
  )
}
