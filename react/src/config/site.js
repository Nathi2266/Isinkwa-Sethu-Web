export const site = {
  name: 'Isinkwa Sethu',
  tagline: 'A Digital Economic Movement For Community Ownership',
  mission:
    'Uniting communities to build shared manufacturing infrastructure, dignified employment, and wealth that stays in the township.',
  ctas: {
    join: { label: 'Join The Movement', path: '/contact' },
    contribute: { label: 'Contribute R370', path: '/ownership' },
    vision: { label: 'Explore The Vision', path: '/vision' },
  },
  values: ['Community Ownership', 'Economic Dignity', 'African Excellence', 'Collective Action'],
  contact: {
    email: 'hello@isinkwasethu.org',
    location: 'South Africa',
  },
  socials: [
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
}

export const homeStats = [
  { end: 2.4, decimals: 1, prefix: 'R', suffix: 'M', label: 'Collective Vision Target' },
  { end: 10000, suffix: '+', label: 'Movement Members' },
  { end: 500, suffix: '+', label: 'Future Jobs' },
  { end: 100, suffix: '%', label: 'Community-Led Governance' },
]

export const movementPillars = [
  {
    title: 'Ownership Over Dependency',
    description: 'Wealth created in townships must be owned by the people who build it.',
    path: '/about',
  },
  {
    title: 'Visionary Manufacturing',
    description: 'A future factory ecosystem rooted in African innovation and collective capital.',
    path: '/vision',
  },
  {
    title: 'The R370 Stake',
    description: 'Equal entry. Shared infrastructure. Long-term returns for every member.',
    path: '/ownership',
  },
]

export const timelineSteps = [
  { step: 1, title: 'Community Mobilization', description: 'Uniting members around shared ownership.' },
  { step: 2, title: 'Raising Capital', description: 'Collective R370 contributions building the base.' },
  { step: 3, title: 'Building the Factory', description: 'Township manufacturing infrastructure.' },
  { step: 4, title: 'Creating Jobs', description: 'Employment and skills for local residents.' },
  { step: 5, title: 'Township Distribution', description: 'Value circulating within communities.' },
  { step: 6, title: 'Owned Expansion', description: 'Scaling ownership-driven growth.' },
]

export const faqs = [
  {
    question: 'What is Isinkwa Sethu?',
    answer:
      'A digital economic movement for community ownership — building shared manufacturing and long-term wealth, not dependency.',
  },
  {
    question: 'How does ownership work?',
    answer:
      'Members contribute collectively and hold a stake in community-owned assets governed transparently by the movement.',
  },
  {
    question: 'Why R370?',
    answer:
      'An accessible, equal entry point so many can participate at the same level and unlock large-scale capital together.',
  },
  {
    question: 'Is this a cooperative?',
    answer:
      'Built on cooperative principles with a modern digital platform for mobilization and accountable governance.',
  },
  {
    question: 'How will funds be managed?',
    answer:
      'Through transparent, community-aligned structures with reporting designed for accountability as the platform scales.',
  },
  {
    question: 'How will jobs be created?',
    answer:
      'Manufacturing and distribution create direct employment, skills pathways, and supplier opportunities in townships.',
  },
]

export const contactFaqs = faqs.slice(0, 4)
