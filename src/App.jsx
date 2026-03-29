import React, { useState } from 'react';

const stats = [
  { label: 'USB', value: '~2ms', tone: 'green' },
  { label: 'Bluetooth', value: '~8ms', tone: 'blue' },
  { label: 'Wi-Fi', value: '~10ms', tone: 'amber' },
];

const frictionLeftRows = [
  'Find the bag',
  'Unpack',
  'Power supply',
  'Find the right USB cable',
  'Install / update drivers',
  'Configure MIDI routing',
  'Map parameters manually',
  'Finally making music',
];

const frictionRightRows = [
  { text: 'Already on your desk' },
  { text: 'Unlock' },
  { text: 'Done ✓', tone: 'success' },
];

const testimonials = [
  {
    quote: 'Replaced my Faderfox EC4. Same desk, fewer cables.',
    author: 'Alex M., Producer',
  },
  {
    quote: '14-bit CC on an iPhone. The smoothness is unreal.',
    author: 'Sam K., Sound Designer',
  },
  {
    quote: 'Blue Hand support alone is worth the download.',
    author: 'Jordan L., Ableton User',
  },
];

const valueProps = [
  {
    tone: 'green',
    title: 'For the producer who already owns hardware',
    body: '• No new desk space required\n• Complements existing gear\n• Zero cable clutter',
  },
  {
    tone: 'blue',
    title: 'For the Ableton user',
    body: '• Blue Hand integration\n• Auto-map to selected device\n• Instant parameter control',
  },
  {
    tone: 'amber',
    title: 'For the performer',
    body: '• Snapshots for instant recall\n• VCA grouping for mix control\n• Notes Mode for triggers',
  },
  {
    tone: 'pink',
    title: 'For the MPE player',
    body: '• Full MPE expression\n• Per-note pitch bend\n• Pressure and slide control',
  },
  {
    tone: 'red',
    title: 'Your first MIDI controller',
    body: '• No hardware to buy\n• Learn MIDI on your phone\n• Works with any DAW',
  },
  {
    tone: 'cyan',
    title: 'Built for the studio',
    body: '• Always-on display\n• Persistent presets\n• Low-latency connectivity',
  },
];

const deepDive = [
  {
    tone: 'green',
    tag: 'PRECISION',
    title: '14-bit resolution',
    body: '16,384 steps per knob instead of 128. Smooth, precise control over every parameter. No stepping, no zipper noise.',
    image: '/assets/precision.png',
    imageAlt: '14-bit versus 7-bit automation comparison',
  },
  {
    tone: 'pink',
    tag: 'EASY SETUP',
    title: 'MIDI Learn and Blue Hand',
    body: 'Ableton Live users get full mapping and labeled knobs automatically — just focus a device and play. Every other DAW and hardware setup assigns in seconds using MIDI Learn.',
    image: '/assets/bluehand.png',
    imageAlt: 'Knob16 Blue Hand integration visual',
    reverse: true,
  },
  {
    tone: 'cyan',
    tag: 'VCA GROUPING',
    title: 'Linked control groups',
    body: 'Group multiple knobs under a single master. Adjust relative levels while preserving the mix balance. Essential for live performance.',
    image: '/assets/vca.png',
    imageAlt: 'VCA grouping visualization',
  },
  {
    tone: 'green',
    tag: 'SNAPSHOTS',
    title: 'Save and recall instantly',
    body: 'Store complete knob configurations as snapshots. Switch between setups in a single tap. Perfect for A/B comparisons and live transitions.',
    image: '/assets/snapshots.png',
    imageAlt: 'Snapshots interface preview',
    reverse: true,
  },
  {
    tone: 'pink',
    tag: 'PRESETS',
    title: 'Your setup, your way',
    body: 'Create and manage presets for different projects, instruments, and workflows. Label every knob. Share presets with collaborators.',
    image: '/assets/presets.png',
    imageAlt: 'Preset management preview',
  },
  {
    tone: 'cyan',
    tag: 'CONNECTIVITY',
    title: 'USB, Bluetooth, Wi-Fi',
    body: 'Three ways to connect. USB for zero-latency studio work. Bluetooth for cable-free setups. Wi-Fi for network MIDI across the room.',
    image: '/assets/connectivity.png',
    imageAlt: 'Connectivity options visual',
    reverse: true,
  },
  {
    tone: 'green',
    tag: 'MPE',
    title: 'Expressive multitouch',
    body: 'MIDI Polyphonic Expression turns your screen into an expressive instrument. Per-note pitch, pressure, and slide. Compatible with MPE synths.',
    image: '/assets/mpe.png',
    imageAlt: 'MPE performance mode visual',
  },
];

const demos = [
  {
    tone: 'blue',
    title: 'Blue Hand Integration',
    text: 'Focused device changes. Labels update live from Ableton.',
    image: '/assets/demo-bluehand.png',
  },
  {
    tone: 'red',
    title: 'VCA Grouping',
    text: 'One leader knob, multiple followers with output curves.',
    image: '/assets/demo-vca.png',
  },
  {
    tone: 'amber',
    title: 'Snapshot Recall',
    text: 'Four snapshots. Knobs jump. Instant recall.',
    image: '/assets/demo-setup.png',
  },
  {
    tone: 'pink',
    title: 'MPE Multi-Pad',
    text: 'Multiple pads, pitch bend rings, per-note DAW lanes.',
    image: '/assets/demo-mpe.png',
  },
];

const useCases = [
  {
    tone: 'green',
    title: "\"The gear's not set up yet.\"",
    body: "The session starts before the hardware is out of the bag. Knob16 is already unlocked. You're sending CC before the audio interface finishes booting.",
  },
  {
    tone: 'blue',
    title: '"I need 16 more knobs."',
    body: 'Your controller has 8 knobs. The synth patch has 24 parameters. Knob16 gives you 64 more knobs across 4 banks — alongside what you already own.',
  },
  {
    tone: 'amber',
    title: "\"I'm not in the studio.\"",
    body: 'Hotel room, rehearsal space, train with a laptop. No controller in the bag. But the phone is in your pocket. Wi-Fi or Bluetooth, no cables needed.',
  },
  {
    tone: 'cyan',
    title: "\"I'm an Ableton user.\"",
    body: 'Blue Hand integration means Knob16 automatically maps to whatever device you select in Ableton. No MIDI Learn. Labels update in real time. It just works.',
  },
  {
    tone: 'red',
    title: "\"I've never owned a controller.\"",
    body: "You don't need to know what MIDI CC is. Connect your phone. Open the app. Move a knob. Something moves in your DAW. That's it. Learn as you go.",
  },
];

const faqItems = [
  {
    question: 'How low is the latency?',
    answer: 'Typical end-to-end response is around 2ms over USB, about 8ms over Bluetooth, and roughly 10ms over Wi-Fi on modern iPhone and iPad hardware.',
  },
  {
    question: 'Is this a subscription or a one-time purchase?',
    answer: 'One-time purchase. No subscription, no tiers, and every feature is included.',
  },
  {
    question: 'Will it work with my DAW?',
    answer: 'It works with Ableton Live, Logic Pro, FL Studio, Bitwig, MainStage, and a wide range of MIDI apps and hardware setups.',
  },
  {
    question: 'Does it work over Wi-Fi?',
    answer: 'Yes. Knob16 works over Wi-Fi in addition to USB and Bluetooth MIDI.',
  },
  {
    question: "What's 14-bit MIDI?",
    answer: 'Standard CC gives you 128 steps. 14-bit CC pairs MSB and LSB messages for 16,384 steps, which makes fine control noticeably smoother.',
  },
  {
    question: "What's MPE?",
    answer: 'MPE is MIDI Polyphonic Expression. Each note gets its own expressive lane for pitch, pressure, and slide, which is how touchscreen performance becomes playable.',
  },
  {
    question: 'iPhone or iPad?',
    answer: 'The product story is built around iPhone, and iPad is supported as a larger secondary surface.',
  },
  {
    question: 'Can I use it live without a laptop?',
    answer: 'Yes, if your destination hardware or app accepts MIDI input. Knob16 can drive synths and mobile setups directly.',
  },
];

function SectionHeader({ eyebrow, title, subcopy }) {
  return (
    <div className="section-header">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {subcopy ? <p>{subcopy}</p> : null}
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="Knob16 home">
          <img src="/assets/DjpXB.png" alt="Knob16" />
        </a>
        <nav className="topnav">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a className="button button-small" href="#pricing">
            Get Knob16
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="eyebrow eyebrow-live">
            <span className="status-dot" />
            KNOB16
          </div>
          <h1>
            Professional
            <br />
            MIDI Surface Control
            <br />
            in your pocket
          </h1>
          <p className="hero-kicker">10 seconds to MIDI</p>
          <p className="hero-copy">
            64 knobs&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;14-bit CC&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;MPE&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Ableton Blue Hand
          </p>
          <p className="hero-copy">
            Your iPhone&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Always on your desk&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Always in your pocket
          </p>
          <div className="hero-actions">
            <a className="button" href="#pricing">
              Get Knob16 — €19.99
            </a>
            <a className="text-link" href="#demo">
              See it in Ableton →
            </a>
          </div>
          <div className="hero-visual">
            <img src="/assets/hero-desk.png" alt="Knob16 running on an iPhone on a studio desk" />
          </div>
        </section>

        <section className="section section-divider" id="setup">
          <SectionHeader title="10 seconds to MIDI" />
          <div className="comparison-table">
            <div className="comparison-column">
              <div className="comparison-head">The gear you love</div>
              {frictionLeftRows.map((left) => (
                <div className="comparison-row" key={left}>
                  {left}
                </div>
              ))}
            </div>
            <div className="comparison-column comparison-column-accent">
              <div className="comparison-head">Knob16</div>
              {frictionRightRows.map((row) => (
                <div
                  className={`comparison-row${row.tone === 'success' ? ' comparison-row-success' : ''}`}
                  key={row.text}
                >
                  {row.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="numbers">
          <SectionHeader
            title="The numbers"
            subcopy="Direct MIDI&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No middleware"
          />
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className={`stat-card tone-${stat.tone}`} key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <small>latency</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-divider" id="proof">
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <article className={`quote-card tone-${['green', 'blue', 'cyan'][index]}`} key={item.author}>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <span>{item.author}</span>
              </article>
            ))}
          </div>
          <div className="proof-meta">
            <div className="rating-row">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-text">4.9 on the App Store</span>
            </div>
            <div className="logo-row">
              <span>Ableton Live</span>
              <span>Logic Pro</span>
              <span>FL Studio</span>
              <span>Bitwig</span>
              <span>MainStage</span>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="features">
          <SectionHeader eyebrow="WHO IT'S FOR" title="Built for how you work" />
          <div className="card-grid">
            {valueProps.map((item) => (
              <article className={`feature-card tone-${item.tone}`} key={item.title}>
                <h3>{item.title}</h3>
                <p className="multiline-copy">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-divider" id="deep-dive">
          <SectionHeader eyebrow="DEEP DIVE" title="Every detail, considered" />
          <div className="deep-dive-stack">
            {deepDive.map((item) => (
              <article
                className={`deep-dive-row ${item.reverse ? 'deep-dive-row-reverse' : ''}`}
                key={item.title}
              >
                <div className="deep-dive-copy">
                  <div className={`mini-tag tone-text-${item.tone}`}>{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="deep-dive-visual">
                  <img src={item.image} alt={item.imageAlt} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="demo">
          <SectionHeader
            eyebrow="SEE IT IN ACTION"
            title="Product demos"
            subcopy="Short loops&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No narration&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Just the app doing its thing"
          />
          <div className="demo-grid">
            {demos.map((item) => (
              <article className="demo-card" key={item.title}>
                <div className={`demo-image frame-${item.tone}`}>
                  <img src={item.image} alt={`${item.title} preview`} />
                  <span className="demo-badge">Loop</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-divider" id="use-cases">
          <SectionHeader eyebrow="USE CASES" title="When Knob16 makes sense" />
          <div className="use-case-stack">
            <div className="use-case-grid use-case-grid-top">
              {useCases.slice(0, 3).map((item) => (
                <article className={`use-case-card tone-${item.tone}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <div className="use-case-grid use-case-grid-bottom">
              {useCases.slice(3).map((item) => (
                <article className={`use-case-card tone-${item.tone}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-pricing" id="pricing">
          <div className="price-badge">LIFETIME LICENSE</div>
          <div className="price-lockup">
            <span className="price-amount">
              €19<span className="price-dot">.</span><span className="price-decimals">99</span>
            </span>
            <span className="price-accent">Once</span>
          </div>
          <p className="pricing-kicker">For the price of a patch cable</p>
          <p className="pricing-copy">
            No subscription&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No tiers&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Yours forever
          </p>
          <a className="button" href="#footer">
            Get Knob16
          </a>
          <small className="trust-copy">
            30-day money-back guarantee&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No account required
          </small>
        </section>

        <section className="section section-divider section-cta">
          <h2>
            Already on your desk
          </h2>
          <div className="hero-actions">
            <a className="button" href="#pricing">
              Buy
            </a>
            <a className="text-link" href="#demo">
              See demo →
            </a>
          </div>
        </section>

        <section className="section section-divider faq-section" id="faq">
          <SectionHeader eyebrow="FAQ" title="Questions before you buy?" />
          <div className="faq-list">
            {faqItems.map((item, index) => {
              const open = openFaq === index;
              return (
                <article className={`faq-item ${open ? 'faq-item-open' : ''}`} key={item.question}>
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span>{open ? '−' : '+'}</span>
                  </button>
                  {open ? <p className="faq-answer">{item.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div>
          <div className="footer-brand">Knob16</div>
          <div className="footer-copy footer-copy-muted">© 2026 Knob16. All rights reserved.</div>
          <div className="footer-copy footer-copy-bright">
            Secure checkout · Instant download · Support within 24h
          </div>
        </div>
        <div className="footer-links">
          <a href="#faq">Privacy</a>
          <a href="#faq">Terms</a>
          <a href="#faq">Contact</a>
          <a href="#demo">Press Kit</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
