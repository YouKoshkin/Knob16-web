import React from 'react';

const sections = [
  {
    title: 'Contact',
    paragraphs: [
      'For support, questions, bug reports, or purchase issues, email support@knob16.com.',
      'We will do our best to respond as quickly as possible.',
    ],
  },
  {
    title: 'What to Include',
    paragraphs: ['To help us solve the issue faster, include:'],
    bullets: [
      'A short description of the problem',
      'What you were trying to do',
      'Your device model and iOS/iPadOS version',
      'Whether you were using USB, Bluetooth MIDI, or Wi-Fi MIDI',
      'Which app, DAW, or hardware you were connected to',
      'Any screenshots or screen recordings that show the issue',
    ],
  },
  {
    title: 'Compatibility Questions',
    paragraphs: [
      'Knob16 is designed to work with a wide range of MIDI hardware and software. If you are unsure whether your setup is supported, send us the exact gear or software you want to use and we will help you check it.',
    ],
  },
  {
    title: 'Bug Reports',
    paragraphs: [
      'If something is broken or behaving unexpectedly, please include clear reproduction steps. If the issue only happens in a specific preset or setup, mention that too.',
    ],
  },
  {
    title: 'Support Email',
    paragraphs: ['support@knob16.com'],
  },
];

export default function SupportPage() {
  return (
    <div className="terms-page">
      <div className="terms-wrap">
        <a className="terms-back" href="/">
          Back to site
        </a>
        <h1>Support – Knob16</h1>
        {sections.map((section) => (
          <section className="terms-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.title === 'Support Email' ? (
              <p>
                <a href="mailto:support@knob16.com">support@knob16.com</a>
              </p>
            ) : (
              section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            )}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
