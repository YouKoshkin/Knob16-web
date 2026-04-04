import React from 'react';

const sections = [
  {
    title: 'Your Privacy Matters',
    paragraphs: [
      'We are committed to protecting your privacy. This Privacy Policy explains how information is collected, used, and disclosed by this application.',
    ],
  },
  {
    title: 'Information Collection',
    paragraphs: [
      'This app does not collect, store, or transmit any personal information. All settings and presets are stored locally on your device.',
    ],
  },
  {
    title: 'MIDI Data',
    paragraphs: [
      'MIDI data is processed and transmitted directly between your device and connected MIDI hardware or software. We do not collect, store, or have access to any MIDI data you create or transmit.',
    ],
  },
  {
    title: 'Local Storage',
    paragraphs: [
      'The app stores your preferences, presets, and settings locally on your device. This information never leaves your device and is not shared with any third parties.',
    ],
  },
  {
    title: 'No Analytics or Tracking',
    paragraphs: [
      'We do not use any analytics, tracking, or crash reporting tools. Your usage of this app is completely private.',
    ],
  },
  {
    title: 'Bluetooth MIDI & Network',
    paragraphs: [
      'The app may use Bluetooth and local network connections to communicate with MIDI devices. These connections are direct and peer-to-peer; no data passes through our servers.',
    ],
  },
  {
    title: 'Third-Party Services',
    paragraphs: [
      'This app does not integrate with any third-party services that would have access to your information.',
    ],
  },
  {
    title: 'Data Security',
    paragraphs: [
      "Since all data remains on your device, security is managed through your device's standard security features, including passcodes and encryption.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'This app does not knowingly collect any information from anyone. The app is suitable for all ages.',
    ],
  },
  {
    title: 'Changes to Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Any changes will be reflected in the app with an updated date.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      "If you have any questions about this Privacy Policy, please contact us through the app's feedback feature.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="terms-page">
      <div className="terms-wrap">
        <a className="terms-back" href="/">
          Back to site
        </a>
        <h1>Privacy Policy – Knob16</h1>
        {sections.map((section) => (
          <section className="terms-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <p className="terms-note">Last updated: March 2026</p>
      </div>
    </div>
  );
}
