import React from 'react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'By downloading, installing, or using Knob16 ("the App"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, do not use the App.',
      'These terms apply to all users of the App.',
    ],
  },
  {
    title: '2. Description of the App',
    paragraphs: [
      'Knob16 is a professional MIDI controller application for iOS and iPadOS.',
      'The App communicates directly with MIDI-compliant hardware and software on your device and local network. It does not connect to any proprietary backend or external server.',
    ],
  },
  {
    title: '3. Purchase',
    paragraphs: [
      'Knob16 is a paid application available as a one-time purchase. The price is displayed in the App Store at the time of purchase in your local currency.',
    ],
    bullets: [
      'Payment is charged to your Apple ID account at confirmation of purchase',
      'The license is valid indefinitely — there are no recurring charges or subscriptions',
      'All purchases are processed by Apple. For billing disputes or refund requests, contact Apple Support or visit reportaproblem.apple.com',
    ],
  },
  {
    title: '4. Age and Device Requirements',
    paragraphs: [
      'The App is rated 4+ and may be used by anyone. The App requires iOS 18.6 or later on a compatible iPhone or iPad. We are not responsible for issues arising from use on unsupported devices or operating system versions.',
    ],
  },
  {
    title: '5. License Grant',
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
    title: '6. MIDI Hardware and Software Compatibility',
    paragraphs: [
      'The App sends standard MIDI messages to connected hardware and software. You are solely responsible for:',
      'We are not affiliated with any MIDI hardware manufacturer. Compatibility with specific devices is not guaranteed.',
    ],
    bullets: [
      'Ensuring your MIDI hardware and software are configured correctly',
      'Any unintended parameter changes on connected instruments, DAWs, or hardware caused by MIDI messages sent from the App',
      'Proper USB, Bluetooth MIDI, or Network MIDI setup on your device',
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
      'The App collects no personal information. All settings and presets are stored locally on your device. We do not use analytics, crash reporting, advertising frameworks, or any third-party tracking tools.',
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
      '"MIDI" is a standard specification owned by the MIDI Manufacturers Association. Use of MIDI within this App is for interoperability purposes only.',
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
    ],
    bullets: [
      'Loss of data or presets',
      'Damage to connected hardware or software caused by MIDI messages',
      'Loss of income or business interruption',
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
      'Your license to use the App terminates automatically if you violate any provision of these Terms. Upon termination, you must cease all use of the App.',
    ],
  },
  {
    title: '14. Governing Law',
    paragraphs: [
      'These Terms are governed by and construed in accordance with the laws of the Republic of Latvia. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Latvia, unless otherwise required by consumer protection law in your region.',
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
          <div><strong>Knob16 — 64-Knob MIDI Controller</strong></div>
          <div><strong>Last Updated:</strong> March 31, 2026</div>
        </div>
        {sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
        <section className="terms-section">
          <p>
            <strong>Support:</strong>{' '}
            <a href="mailto:support@knob16.com">support@knob16.com</a>
          </p>
        </section>
        <p className="terms-note">
          These Terms &amp; Conditions were last updated on March 31, 2026.
        </p>
      </div>
    </div>
  );
}
