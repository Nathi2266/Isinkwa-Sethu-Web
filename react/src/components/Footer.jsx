import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  About: [
    { label: 'Our Story', path: '/about' },
    { label: 'Vision', path: '/vision' },
    { label: 'Timeline', path: '/vision' },
  ],
  Mission: [
    { label: 'Ownership Model', path: '/ownership' },
    { label: 'R370 Concept', path: '/ownership' },
    { label: 'Impact', path: '/impact' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Use', path: '#' },
    { label: 'Governance', path: '#' },
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
    <footer className="border-t border-gold/10 bg-footer section-padding pb-10">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="font-display text-2xl font-bold text-cream">
              Isinkwa Sethu
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-theme-muted">
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
                    className="rounded-lg border border-gold/20 p-2 text-theme-muted transition-colors hover:border-gold hover:text-icon-accent"
                  >
                    <SocialIcon className="size-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-icon-accent">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.path.startsWith('/') ? (
                      <Link
                        to={link.path}
                        className="text-sm text-theme-muted transition-colors hover:text-icon-accent"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.path}
                        className="text-sm text-theme-muted transition-colors hover:text-icon-accent"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-icon-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-theme-muted">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-icon-accent" />
                <a href="mailto:hello@isinkwasethu.org" className="hover:text-icon-accent">
                  hello@isinkwasethu.org
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-icon-accent">
                  Contact page
                </Link>
              </li>
              <li>South Africa</li>
            </ul>
            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-icon-accent">
              Community Values
            </h3>
            <ul className="mt-4 space-y-2">
              {values.map((value) => (
                <li key={value} className="text-sm text-theme-subtle">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-xs text-theme-subtle">
            &copy; {new Date().getFullYear()} Isinkwa Sethu. All rights reserved.
          </p>
          <p className="text-xs text-theme-subtle">Built by communities. Owned by communities.</p>
        </div>
      </div>
    </footer>
  )
}
