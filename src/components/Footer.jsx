import { Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  About: [
    { label: 'Our Story', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Timeline', href: '#storytelling' },
  ],
  Mission: [
    { label: 'Ownership Model', href: '#ownership' },
    { label: 'R370 Concept', href: '#r370' },
    { label: 'Impact', href: '#impact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Governance', href: '#' },
  ],
}

const values = [
  'Community Ownership',
  'Economic Dignity',
  'African Excellence',
  'Collective Action',
]

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gold/10 bg-black/50 section-padding pb-10">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#" className="font-display text-2xl font-bold text-cream">
              Isinkwa Sethu
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              A digital economic movement for community ownership — building township empowerment
              through collective investment and shared futures.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => {
                const SocialIcon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded-lg border border-gold/20 p-2 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <SocialIcon className="size-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-gold" />
                <a href="mailto:hello@isinkwasethu.org" className="hover:text-gold">
                  hello@isinkwasethu.org
                </a>
              </li>
              <li>South Africa</li>
            </ul>
            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Community Values
            </h3>
            <ul className="mt-4 space-y-2">
              {values.map((value) => (
                <li key={value} className="text-sm text-cream/55">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/45">
            &copy; {new Date().getFullYear()} Isinkwa Sethu. All rights reserved.
          </p>
          <p className="text-xs text-cream/45">Built by communities. Owned by communities.</p>
        </div>
      </div>
    </footer>
  )
}
