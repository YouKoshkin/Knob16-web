const defaultTitle = 'Knob16 | iPhone MIDI Controller for Ableton, Logic Pro, and More';
const defaultDescription =
  'Knob16 turns your iPhone into a professional MIDI controller with 64 knobs, 14-bit CC, MPE, snapshots, and Ableton Blue Hand integration.';
const defaultImage = 'https://www.knob16.com/assets/hero-desk.png';

const homepageSectionIds = [
  'hero',
  'setup',
  'features',
  'deep-dive',
  'demo',
  'use-cases',
  'pricing',
  'specs',
  'early-access',
  'faq',
  'footer',
];

const homepageSectionPages = [
  {
    path: '/features',
    sectionId: 'features',
    title: 'Knob16 Features | Fine Control, MIDI Feedback, and Flexible Setup',
    description:
      'Explore Knob16 features including per-knob configuration, bidirectional MIDI feedback, output curves, notes mode, and auto-save.',
  },
  {
    path: '/deep-dive',
    sectionId: 'deep-dive',
    title: 'Knob16 Deep Dive | 14-bit MIDI, Blue Hand, Snapshots, and MPE',
    description:
      'See what Knob16 can do with 14-bit resolution, Ableton Blue Hand integration, snapshots, presets, MPE, and flexible connectivity.',
  },
  {
    path: '/demo',
    sectionId: 'demo',
    title: 'Knob16 Demo | See the MIDI Controller App in Action',
    description:
      'Watch Knob16 in action with demos of Ableton Blue Hand integration, VCA grouping, snapshot recall, and MPE multi-pad control.',
  },
  {
    path: '/use-cases',
    sectionId: 'use-cases',
    title: 'Knob16 Use Cases | Studio, Travel, Ableton, and Live Control',
    description:
      'Learn when Knob16 makes sense, from fast studio sessions and mobile production to Ableton workflows and extra control on demand.',
  },
  {
    path: '/pricing',
    sectionId: 'pricing',
    title: 'Knob16 Pricing | Lifetime License for iPhone MIDI Control',
    description:
      'See Knob16 pricing, what is included in the lifetime license, and what you get for MIDI control on iPhone with no subscription.',
  },
  {
    path: '/specs',
    sectionId: 'specs',
    title: 'Knob16 Specs | Knobs, Resolution, Snapshots, MPE, and Connectivity',
    description:
      'Review Knob16 specifications including knob count, 14-bit resolution, groups, snapshots, notes mode, MPE, and connection options.',
  },
  {
    path: '/faq',
    sectionId: 'faq',
    title: 'Knob16 FAQ | Compatibility, MIDI Setup, Latency, and Presets',
    description:
      'Get answers about Knob16 compatibility, BLE MIDI latency, USB class compliance, presets, DAW feedback, and hardware support.',
  },
];

export const siteMetadata = {
  siteUrl: 'https://www.knob16.com',
  defaultTitle,
  defaultDescription,
  defaultImage,
};

export const pages = {
  '/': {
    component: 'home',
    title: defaultTitle,
    description: defaultDescription,
    ogImage: defaultImage,
    sectionIds: homepageSectionIds,
  },
  '/downloads': {
    component: 'downloads',
    title: 'Downloads | Knob16',
    description: 'Download Knob16 files and companion resources.',
    ogImage: defaultImage,
  },
  '/privacy': {
    component: 'privacy',
    title: 'Privacy Policy | Knob16',
    description: 'Read the Knob16 privacy policy.',
    ogImage: defaultImage,
  },
  '/support': {
    component: 'support',
    title: 'Support | Knob16',
    description: 'Contact Knob16 support and get help with setup or purchases.',
    ogImage: defaultImage,
  },
  '/terms': {
    component: 'terms',
    title: 'Terms & Conditions | Knob16',
    description: 'Read the Knob16 terms and conditions.',
    ogImage: defaultImage,
  },
};

for (const page of homepageSectionPages) {
  pages[page.path] = {
    component: 'home',
    title: page.title,
    description: page.description,
    ogImage: defaultImage,
    sectionIds: homepageSectionIds,
    initialSectionId: page.sectionId,
  };
}

export const sitemapPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/features', changefreq: 'weekly', priority: '0.9' },
  { path: '/deep-dive', changefreq: 'weekly', priority: '0.8' },
  { path: '/demo', changefreq: 'weekly', priority: '0.8' },
  { path: '/use-cases', changefreq: 'weekly', priority: '0.7' },
  { path: '/pricing', changefreq: 'weekly', priority: '0.9' },
  { path: '/specs', changefreq: 'weekly', priority: '0.7' },
  { path: '/faq', changefreq: 'weekly', priority: '0.7' },
  { path: '/downloads', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/support', changefreq: 'monthly', priority: '0.5' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

export const staticRoutePaths = Object.keys(pages);

export function normalizePathname(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}
