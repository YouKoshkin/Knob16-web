import { faqItems } from './homepageContent.js';

const SOFTWARE_FEATURES = [
  '64 MIDI knobs across 4 banks',
  '14-bit CC and NRPN support',
  'MPE multitouch performance controls',
  'Ableton Blue Hand integration',
  'Snapshots, presets, and bidirectional MIDI feedback',
];

const SOFTWARE_SCREENSHOTS = [
  '/assets/screen-1.jpg',
  '/assets/screen-2.jpg',
  '/assets/screen-3.jpg',
];

function escapeJsonForHtml(value) {
  return value.replace(/</g, '\\u003c');
}

export function buildHomepageStructuredData(siteMetadata) {
  const siteUrl = siteMetadata.siteUrl;
  const screenshots = SOFTWARE_SCREENSHOTS.map((path) => `${siteUrl}${path}`);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Knob16',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/assets/DjpXB.png`,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@knob16.com',
            url: `${siteUrl}/support`,
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#softwareapplication`,
        name: 'Knob16',
        url: `${siteUrl}/`,
        description: siteMetadata.defaultDescription,
        image: siteMetadata.defaultImage,
        screenshot: screenshots,
        operatingSystem: 'iOS',
        applicationCategory: 'MultimediaApplication',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        offers: {
          '@type': 'Offer',
          url: `${siteUrl}/#pricing`,
          price: '19.99',
          availability: 'https://schema.org/InStock',
        },
        featureList: SOFTWARE_FEATURES,
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildHomepageStructuredDataJson(siteMetadata) {
  return escapeJsonForHtml(JSON.stringify(buildHomepageStructuredData(siteMetadata)));
}
