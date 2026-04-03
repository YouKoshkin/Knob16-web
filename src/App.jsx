import React, { useState } from 'react';

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
    quote: 'Four sends mapped to a group. One knob controls the wet mix, everything moves together.',
    author: 'Alex M., Producer',
  },
  {
    quote: 'Finished a track on a flight. Had my laptop, had my phone. That was enough.',
    author: 'Sam K., Touring Musician',
  },
  {
    quote: 'Still use my hardware for the big stuff. Knob16 handles everything else.',
    author: 'Jordan L., Producer',
  },
];

const valueProps = [
  {
    tone: 'green',
    title: 'Fine-Tune Mode',
    body: 'Double-tap any knob and it slows down. Same gesture, fraction of the movement. For the moments when a single step is too much.',
  },
  {
    tone: 'blue',
    title: 'Bidirectional MIDI',
    body: 'Knobs follow your DAW, not just the other way around. Move a parameter in Ableton, the knob moves with it. Always in sync, never out of position.',
  },
  {
    tone: 'amber',
    title: 'Per-Knob Configuration',
    body: 'Every knob has its own CC number, MIDI channel, label, and range. 64 knobs, 64 independent setups. Nothing is global unless you want it to be.',
  },
  {
    tone: 'pink',
    title: 'Output Curves',
    body: 'Linear, Exponential, or Logarithmic scaling per follower. The same physical movement, completely different response. Dial in exactly how the control feels.',
  },
  {
    tone: 'red',
    title: 'Notes Mode',
    body: '16 pads per bank with 29 scales and per-octave transpose. Drag for velocity, pitch bend, or full MPE expression. A playable instrument, not just a controller.',
  },
  {
    tone: 'cyan',
    title: 'Auto-Save',
    body: 'Everything saves automatically, every time. Close the app, switch presets, put the phone in your pocket — nothing is lost. Touch it again exactly where you left it.',
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
    image: '/assets/EasySetup-Preview.jpg',
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
    image: '/assets/Snapshots-Preview.jpg',
    imageAlt: 'Snapshots interface preview',
    reverse: true,
  },
  {
    tone: 'pink',
    tag: 'PRESETS',
    title: 'Your setup, your way',
    body: 'Create and manage presets for different projects, instruments, and workflows. Label every knob. Share presets with collaborators.',
    image: '/assets/Presets-Preview.jpg',
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

const heroImages = [
  '/assets/hero-new-1.jpg',
  '/assets/hero-new-2.jpg',
  '/assets/hero-new-3.jpg',
];

const heroIndex = (() => {
  const key = 'heroImageIndex';
  const next = (parseInt(localStorage.getItem(key) || '0', 10) + 1) % heroImages.length;
  localStorage.setItem(key, next);
  return next;
})();

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
            Physical control
            <br />
            over your DAW
          </h1>
          <p className="hero-kicker">10 seconds to MIDI</p>
          <p className="hero-kicker">Already in your pocket</p>
          <p className="hero-copy">
            Works with Ableton Live&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Logic Pro&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;FL Studio&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Traktor&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;and everything else
          </p>
          <div className="hero-actions">
            <a className="button" href="#pricing">
              Get Knob16 — 19.99
            </a>
            <a className="text-link" href="#demo">
              See it in action →
            </a>
          </div>
          <div className="hero-visual">
            <img src={heroImages[heroIndex]} alt="Knob16 running on an iPhone on a studio desk" />
          </div>
        </section>

        <section className="section section-setup" id="setup">
          <SectionHeader title="10 seconds to MIDI" />
          <div className="comparison-table">
            <div className="comparison-group">
              <div className="comparison-title">The gear you love</div>
              <div className="comparison-column">
                {frictionLeftRows.map((left) => (
                  <div className="comparison-row" key={left}>
                    {left}
                  </div>
                ))}
              </div>
            </div>
            <div className="comparison-group">
              <div className="comparison-title comparison-title-accent">Knob16</div>
              <div className="comparison-column comparison-column-accent">
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
          </div>
        </section>

        <section className="section section-divider" id="features">
          <SectionHeader eyebrow="SERIOUS TOOLS" title="Runs deeper than it looks" />
          <div className="card-grid">
            {valueProps.map((item) => (
              <article className={`feature-card tone-${item.tone}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
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
              <span>Traktor Pro</span>
              <span>Serato DJ</span>
              <span>Rekordbox</span>
            </div>
            <div className="rating-text">If it speaks MIDI, it works</div>
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
              19<span className="price-dot">.</span><span className="price-decimals">99</span>
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
            Your iPhone is already
            <br />
            a MIDI controller
          </h2>
          <p className="cta-copy">This just turns it on</p>
          <div className="hero-actions">
            <a className="button" href="#pricing">
              Turn it on
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
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Contact</a>
          <a href="#demo">Press Kit</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
