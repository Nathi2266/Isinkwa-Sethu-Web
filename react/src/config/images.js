/** Curated Unsplash stock imagery — swap for brand assets when available. */

export function imageUrl(photoId, { w = 1200, h, q = 80 } = {}) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    q: String(q),
  })
  if (h) params.set('h', String(h))
  return `https://images.unsplash.com/${photoId}?${params}`
}

export const images = {
  home: {
    heroVisuals: [
      {
        src: imageUrl('photo-1509440159596-0249088772ff', { w: 900, h: 675 }),
        alt: 'Fresh bread loaves representing shared ownership',
        label: 'African innovation',
      },
      {
        src: imageUrl('photo-1581091226825-a6a2a5aee158', { w: 900, h: 675 }),
        alt: 'Workers on a manufacturing production line',
        label: 'Manufacturing vision',
      },
      {
        src: imageUrl('photo-1522202176988-66273c2fd55f', { w: 900, h: 675 }),
        alt: 'Diverse team collaborating together',
        label: 'Community collective',
      },
    ],
  },

  vision: {
    heroBg: imageUrl('photo-1509440159596-0249088772ff', { w: 1920, h: 1080 }),
    featured: {
      src: imageUrl('photo-1558618666-fcd25c85cd64', { w: 1400, h: 788 }),
      alt: 'Baker shaping dough in a community bakery',
    },
    stories: [
      {
        src: imageUrl('photo-1560250097-0b93528c311a', { w: 600, h: 375 }),
        alt: 'Leader sharing the movement vision',
        title: 'Founder Vision',
      },
      {
        src: imageUrl('photo-1581091226825-a6a2a5aee158', { w: 600, h: 375 }),
        alt: 'Manufacturing floor and production',
        title: 'Movement Explainer',
      },
      {
        src: imageUrl('photo-1522202176988-66273c2fd55f', { w: 600, h: 375 }),
        alt: 'Community members working as a team',
        title: 'Community Voices',
      },
    ],
  },

  about: {
    heroBg: imageUrl('photo-1547471080-7cc2caa01a7e', { w: 1920, h: 1080 }),
    origin: {
      src: imageUrl('photo-1488521787991-ed7bbaae773c', { w: 1200, h: 900 }),
      alt: 'Community members united in collective action',
    },
  },

  impact: {
    heroBg: imageUrl('photo-1460925895917-afdab827c52f', { w: 1920, h: 1080 }),
    banner: {
      src: imageUrl('photo-1554224155-6726b3ff858f', { w: 1400, h: 900 }),
      alt: 'Local business growth and economic circulation',
    },
    growth: imageUrl('photo-1542744173-8e7e53415bb0', { w: 600, h: 400 }),
  },

  community: {
    heroBg: imageUrl('photo-1511632765486-a01980e01a18', { w: 1920, h: 1080 }),
    featuredAvatar: imageUrl('photo-1507003211169-0a1dd7228f2d', { w: 200, h: 200 }),
    gallery: [
      { src: imageUrl('photo-1522202176988-66273c2fd55f', { w: 800, h: 1000 }), alt: 'Team planning session' },
      { src: imageUrl('photo-1517245386807-bb43a82c33c4', { w: 600, h: 600 }), alt: 'Community workshop' },
      { src: imageUrl('photo-1521737711867-e3b97375f902', { w: 600, h: 600 }), alt: 'Collaborative workspace' },
      { src: imageUrl('photo-1552664730-d307ca884978', { w: 600, h: 600 }), alt: 'Group discussion' },
      { src: imageUrl('photo-1488521787991-ed7bbaae773c', { w: 600, h: 600 }), alt: 'Volunteers stacking hands' },
      { src: imageUrl('photo-1547471080-7cc2caa01a7e', { w: 600, h: 600 }), alt: 'African urban skyline at dusk' },
    ],
    avatars: [
      imageUrl('photo-1507003211169-0a1dd7228f2d', { w: 96, h: 96 }),
      imageUrl('photo-1494790108377-be9c29b29330', { w: 96, h: 96 }),
      imageUrl('photo-1438761681033-6461ffad8d80', { w: 96, h: 96 }),
      imageUrl('photo-1500648767791-00dcc994a43e', { w: 96, h: 96 }),
      imageUrl('photo-1534528741775-53994a69daeb', { w: 96, h: 96 }),
      imageUrl('photo-1472099645785-5658abf4ff4e', { w: 96, h: 96 }),
    ],
  },

  explore: {
    About: imageUrl('photo-1547471080-7cc2caa01a7e', { w: 600, h: 400 }),
    Vision: imageUrl('photo-1509440159596-0249088772ff', { w: 600, h: 400 }),
    Ownership: imageUrl('photo-1601925260368-ae2f83cf8b7f', { w: 600, h: 400 }),
    Impact: imageUrl('photo-1460925895917-afdab827c52f', { w: 600, h: 400 }),
    Community: imageUrl('photo-1511632765486-a01980e01a18', { w: 600, h: 400 }),
    Contact: imageUrl('photo-1573164713714-d95e436ab8d6', { w: 600, h: 400 }),
  },
}
