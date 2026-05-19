import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react'
import { navLinks } from '@/config/navigation'
import { site } from '@/config/site'

const socialIcons = {
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
}

const footerGroups = {
  Movement: navLinks,
  Legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Use', path: '#' },
    { label: 'Governance', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-black/60 section-padding-lg pb-12">
      <div className="container-narrow">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl font-bold leading-none text-cream sm:text-5xl">
              {site.name}
            </p>
            <p className="mt-6 max-w-md text-lead text-cream/60">{site.mission}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold">
              {site.tagline}
            </p>
            <div className="mt-8 flex gap-3">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label] ?? Twitter
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded-xl border border-gold/20 p-2.5 text-cream/70 transition-all hover:border-gold hover:text-gold hover:shadow-[var(--glow-gold-soft)]"
                  >
                    <Icon className="size-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerGroups).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
                {title}
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.path.startsWith('/') ? (
                      <Link
                        to={link.path}
                        className="text-sm text-cream/60 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.path}
                        className="text-sm text-cream/60 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                  {site.contact.email}
                </a>
              </li>
              <li>{site.contact.location}</li>
              <li>
                <Link to="/contact" className="font-medium text-gold hover:text-cream">
                  Get in touch →
                </Link>
              </li>
            </ul>
            <h3 className="mt-10 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Community Values
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-gold/15 bg-gold/5 px-3 py-1 text-xs text-cream/70"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/45">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/45">Built by communities. Owned by communities.</p>
        </div>
      </div>
    </footer>
  )
}
