import React from 'react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'By downloading, installing, or using MSC ("the App"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, do not use the App.',
      'These terms apply to all users of the App, including users of the free tier and subscribers to the Pro plan.',
    ],
  },
  {
    title: '2. Description of the App',
    paragraphs: [
      'MSC is a professional MIDI controller application for iOS and iPadOS. It provides:',
      'The App communicates directly with MIDI-compliant hardware and software on your device and local network. It does not connect to any proprietary backend or external server.',
    ],
    bullets: [
      'Up to 64 configurable knobs (16 per bank × 4 banks) for sending MIDI Control Change (CC) messages',
      'Support for 7-bit and 14-bit MIDI resolution',
      'MIDI connectivity via USB, Bluetooth MIDI, and Network MIDI (Wi-Fi)',
      'Bidirectional MIDI: send and receive CC, with live knob sync',
      'Note Mode with MPE (MIDI Polyphonic Expression) support',
      'VCA-style knob grouping with configurable output curves',
      'MIDI Learn for automatic CC + channel detection',
      'Snapshots and Preset management with import/export (`.k16preset` files)',
      'Ableton Live Blue Hand integration via SysEx',
    ],
  },
  {
    title: '3. License Grant',
    paragraphs: [
      'Subject to your compliance with these Terms, Yuri Koshkin grants you a limited, non-exclusive, non-transferable, revocable license to download and use the App on Apple devices you own or control, solely for your personal or professional use.',
      'You may not:',
    ],
    bullets: [
      'Copy, modify, or distribute the App or its source code',
      'Reverse engineer, decompile, or disassemble the App',
      'Rent, lease, sublicense, or sell access to the App',
      'Use the App to develop a competing product or service',
      'Remove or alter any proprietary notices in the App',
    ],
  },
  {
    title: '4. Subscriptions and In-App Purchases',
    subSections: [
      {
        title: '4.1 Free Tier',
        paragraphs: ['The free tier provides access to core MIDI functionality with a limited number of saved presets.'],
      },
      {
        title: '4.2 Pro Subscription',
        paragraphs: [
          'A Pro subscription unlocks:',
          "Pro is available as a monthly or yearly auto-renewing subscription. Pricing is displayed in the App at the time of purchase and is set in your local currency via Apple's App Store.",
        ],
        bullets: [
          'Unlimited Presets — no limit on saved configurations',
          'Advanced Controls — all 128 MIDI CC controls per bank',
          'iCloud Sync — optional preset synchronization across devices via iCloud',
          'Future Pro Features — access to features added exclusively for Pro subscribers',
        ],
      },
      {
        title: '4.3 Free Trial',
        paragraphs: [
          'A free trial may be offered for new subscribers. The trial period and terms are displayed before confirmation. After the trial ends, your subscription automatically renews at the standard rate unless cancelled at least 24 hours before the renewal date.',
        ],
      },
      {
        title: '4.4 Billing and Cancellation',
        bullets: [
          'Payment is charged to your Apple ID account at confirmation of purchase',
          'Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period',
          "Manage or cancel subscriptions at any time in your device's App Store Settings → Subscriptions",
          "No refunds are provided for partial subscription periods, except as required by applicable law or Apple's policies",
          'All purchases are processed by Apple. For billing disputes, contact Apple Support',
        ],
      },
      {
        title: '4.5 Price Changes',
        paragraphs: [
          'Subscription prices may change. You will be notified in advance of any price change via the App Store. Continued use of the Pro subscription after a price change constitutes acceptance of the new price.',
        ],
      },
    ],
  },
  {
    title: '5. iCloud Sync (Pro Feature)',
    paragraphs: [
      'iCloud Sync is an optional Pro feature that stores your presets in your personal iCloud account (iCloud Drive). To use it:',
      "We do not have access to your iCloud data. All sync is managed directly between your device and Apple's iCloud infrastructure. We are not responsible for data loss caused by iCloud service interruptions or account issues.",
    ],
    bullets: [
      'You must be signed into iCloud on your device',
      'Your iCloud storage must have available space',
      "iCloud Sync is subject to Apple's iCloud Terms and Conditions",
    ],
  },
  {
    title: '6. MIDI Hardware and Software Compatibility',
    paragraphs: [
      'The App sends standard MIDI messages to connected hardware and software. You are solely responsible for:',
      'We are not affiliated with any MIDI hardware manufacturer. Compatibility with specific devices is not guaranteed.',
    ],
    bullets: [
      'Ensuring your MIDI hardware and software are configured correctly',
      'Any unintended parameter changes on connected instruments, DAWs, or hardware caused by MIDI messages sent from the App',
      'Proper USB, Bluetooth, or Network MIDI setup on your device',
    ],
    subSections: [
      {
        title: '6.1 Ableton Live Integration',
        paragraphs: [
          "The Blue Hand SysEx feature is designed for use with Ableton Live. Use of this feature is subject to Ableton's terms and the behavior of their software. We are not affiliated with Ableton AG.",
        ],
      },
    ],
  },
  {
    title: '7. User Data and Privacy',
    paragraphs: [
      'The App collects no personal information. All settings and presets are stored locally on your device or, if you enable iCloud Sync (Pro), in your personal iCloud account. We do not use analytics, crash reporting, advertising frameworks, or any third-party tracking tools.',
      'For full details, see the Privacy Policy accessible within the App.',
    ],
  },
  {
    title: '8. User Content (Presets)',
    paragraphs: [
      'Presets you create in the App are your own content. You retain all ownership and rights to your preset configurations. The `.k16preset` export format is provided for your data portability. We do not access, store, or transmit your presets to any server.',
    ],
  },
  {
    title: '9. Intellectual Property',
    paragraphs: [
      'The App, including its interface, code, graphics, and branding, is the intellectual property of Yuri Koshkin. All rights not expressly granted herein are reserved.',
      'MIDI is a standard specification owned by the MIDI Manufacturers Association. Use of MIDI within this App is for interoperability purposes only.',
    ],
  },
  {
    title: '10. Disclaimer of Warranties',
    paragraphs: [
      'The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:',
      'Use of the App in professional live performance or recording contexts is at your own risk.',
    ],
    bullets: [
      'Implied warranties of merchantability or fitness for a particular purpose',
      'Uninterrupted, error-free, or secure operation',
      'Accuracy of MIDI timing or transmission in all hardware and network configurations',
      'Compatibility with all MIDI hardware or software',
    ],
  },
  {
    title: '11. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by applicable law, Yuri Koshkin shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:',
      'Our total liability to you for any claim arising from these Terms or the App shall not exceed the amount you paid for your current subscription period.',
    ],
    bullets: [
      'Loss of data or presets',
      'Damage to connected hardware or software caused by MIDI messages',
      'Loss of income or business interruption',
      'Any damages arising from iCloud service failures',
    ],
  },
  {
    title: '12. Modifications to the App and Terms',
    paragraphs: [
      'We reserve the right to:',
      'Updated Terms will be posted within the App or on the App Store product page with a revised "Last Updated" date. Continued use of the App after changes constitute acceptance of the updated Terms.',
    ],
    bullets: [
      'Update, modify, or discontinue any feature or the App itself at any time',
      'Update these Terms at any time',
    ],
  },
  {
    title: '13. Termination',
    paragraphs: [
      'Your license to use the App terminates automatically if you:',
      'Upon termination, you must cease all use of the App. Termination does not entitle you to a refund except as required by applicable law.',
    ],
    bullets: [
      'Violate any provision of these Terms',
      'Fail to pay for a Pro subscription after the trial or grace period ends',
    ],
  },
  {
    title: '14. Governing Law',
    paragraphs: [
      "These Terms are governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the developer's jurisdiction, unless otherwise required by consumer protection law in your region.",
      'Nothing in these Terms limits rights you may have under applicable consumer protection laws in your country of residence.',
    ],
  },
  {
    title: '15. Apple App Store Terms',
    paragraphs: [
      "The App is distributed via the Apple App Store. Your use of the App Store is governed by Apple's Terms and Conditions. Apple is not a party to these Terms and has no obligation to provide any support or maintenance for the App.",
    ],
  },
  {
    title: '16. Contact',
    paragraphs: ['For questions about these Terms, support requests, or feedback:'],
    bullets: [
      'Support: Available via the App Store product page',
    ],
  },
];

function Section({ section }) {
  return (
    <section className="terms-section">
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.subSections?.map((subSection) => (
        <div className="terms-subsection" key={subSection.title}>
          <h3>{subSection.title}</h3>
          {subSection.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {subSection.bullets ? (
            <ul>
              {subSection.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-wrap">
        <a className="terms-back" href="/">
          Back to site
        </a>
        <h1>Terms &amp; Conditions</h1>
        <div className="terms-meta">
          <div><strong>MSC — MIDI System Controller</strong></div>
          <div><strong>Last Updated:</strong> March 31, 2026</div>
        </div>
        {sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
        <p className="terms-note">
          These Terms &amp; Conditions were last updated on March 31, 2026.
        </p>
      </div>
    </div>
  );
}
