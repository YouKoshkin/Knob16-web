import React, { useState } from 'react';
import { trackEvent } from './analytics';

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
    body: '16,384 steps per knob instead of 128. Smooth, precise control over every parameter. No stepping, no zipper noise. Includes NRPN support.',
    image: '/assets/14bit.jpg',
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
    image: '/assets/VCA-Preview.jpg',
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
    title: 'USB, Bluetooth MIDI, Wi-Fi',
    body: 'Three ways to connect. USB for zero-latency studio work. Bluetooth MIDI for cable-free setups. Wi-Fi for network MIDI across the room.',
    image: '/assets/Connection-preview.jpg',
    imageAlt: 'Connectivity options visual',
    reverse: true,
  },
  {
    tone: 'green',
    tag: 'MPE',
    title: 'Expressive multitouch',
    body: 'MIDI Polyphonic Expression turns your screen into an expressive instrument. Per-note pitch, pressure, and slide. Compatible with MPE synths.',
    image: '/assets/MPE-Preview.jpg',
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
    body: 'Hotel room, rehearsal space, train with a laptop. No controller in the bag. But the phone is in your pocket. Wi-Fi or Bluetooth MIDI, no cables needed.',
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
    question: 'How many presets can I store?',
    answer: 'Unlimited.',
  },
  {
    question: "What's the actual BLE MIDI latency floor?",
    answer: 'Around 10–15 ms best case on modern hardware, 15–25 ms realistic average, with 2–12 ms jitter. For CC control — filter sweeps, macro knobs, mixer automation — this is imperceptible. Jitter matters more than raw latency anyway. USB is the right choice if timing is critical.',
  },
  {
    question: 'Does it work in Airplane Mode over USB?',
    answer: 'Yes. USB MIDI is entirely local — no network, no Wi-Fi needed. Airplane Mode has zero effect on the USB connection.',
  },
  {
    question: 'Can I assign different MIDI channels per knob?',
    answer: 'Yes. Every knob has its own MIDI channel assignment. Drive a synth on ch1, a drum machine on ch10, and a reverb unit on ch16 — all from a single bank, simultaneously.',
  },
  {
    question: 'Is USB MIDI class-compliant — no driver needed?',
    answer: 'Yes. USB MIDI is class-compliant. Plug into Mac, iPad, or any class-compliant host and it works immediately — no driver installation.',
  },
  {
    question: 'Can I export/import presets to share with others?',
    answer: 'Yes. Export and import preset files to back up your mappings or share them with other Knob16 users.',
  },
  {
    question: 'Can knobs receive MIDI — for DAW feedback and sync?',
    answer: 'Yes. Knob16 receives CC feedback from your DAW, keeping every knob display in sync with the actual parameter value. The knob is always where the DAW says it is.',
  },
  {
    question: 'Can I map one knob to multiple CC numbers simultaneously?',
    answer: 'Not directly. Use a group to link multiple knobs and control them in unison.',
  },
  {
    question: 'Does it send CC values on connect, or only on movement?',
    answer: 'Only on movement. Use a snapshot to push the full bank state at any point.',
  },
  {
    question: "What's the CC range — can I invert or limit it per knob?",
    answer: 'Yes. Set a custom min/max range per knob anywhere within 0–127. Inversion is available when the knob is part of a group.',
  },
  {
    question: 'Can I run multiple instances — two iPhones in the same session?',
    answer: 'Yes — multiple devices work in the same session simultaneously.',
  },
  {
    question: 'Does Blue Hand work with return tracks and sends, or macro knobs only?',
    answer: 'Currently macro knobs only. Return tracks and sends are on the roadmap.',
  },
  {
    question: 'Does it work with hardware synths directly, no Mac in the middle?',
    answer: 'Yes. Connect over Bluetooth LE MIDI directly to any BLE MIDI-capable synth or groovebox. USB works too via a Lightning or USB-C adapter to a class-compliant host. No computer required.',
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
  const [earlyAccessEmail, setEarlyAccessEmail] = useState('');
  const [earlyAccessStatus, setEarlyAccessStatus] = useState('idle');
  const [earlyAccessError, setEarlyAccessError] = useState('');

  const handleFaqToggle = (index, question) => {
    const nextOpen = openFaq !== index;
    setOpenFaq(nextOpen ? index : -1);
    trackEvent('faq_toggle', {
      question,
      state: nextOpen ? 'open' : 'close',
      page_path: '/',
    });
  };

  const handleEarlyAccessSubmit = async (event) => {
    event.preventDefault();

    const normalizedEmail = earlyAccessEmail.trim().toLowerCase();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!isValidEmail) {
      setEarlyAccessStatus('error');
      setEarlyAccessError('Enter a valid email address.');
      return;
    }

    setEarlyAccessStatus('submitting');
    setEarlyAccessError('');

    try {
      const response = await fetch('/subscribe.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: normalizedEmail,
          company: '',
        }),
      });

      const data = await response.json().catch(() => ({ success: false, error: 'server_error' }));

      if (response.ok && data.success) {
        setEarlyAccessStatus('success');
        trackEvent('email_capture_submit', {
          location: 'early_access',
          outcome: 'success',
          page_path: '/',
        });
        return;
      }

      if (data.error === 'already_subscribed') {
        setEarlyAccessStatus('duplicate');
        return;
      }

      if (data.error === 'invalid_email') {
        setEarlyAccessStatus('error');
        setEarlyAccessError('Enter a valid email address.');
        return;
      }

      setEarlyAccessStatus('error');
      setEarlyAccessError('Something went wrong. Try again.');
    } catch {
      setEarlyAccessStatus('error');
      setEarlyAccessError('Something went wrong. Try again.');
    }
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#hero"
          aria-label="Knob16 home"
          data-analytics-event="cta_click"
          data-analytics-location="header"
          data-analytics-label="Knob16 home"
          data-analytics-target-path="#hero"
        >
          <img src="/assets/DjpXB.png" alt="Knob16" />
        </a>
        <nav className="topnav">
          <a href="#features" data-analytics-event="cta_click" data-analytics-location="header" data-analytics-label="Features" data-analytics-target-path="#features">Features</a>
          <a href="#demo" data-analytics-event="cta_click" data-analytics-location="header" data-analytics-label="Demo" data-analytics-target-path="#demo">Demo</a>
          <a href="#pricing" data-analytics-event="cta_click" data-analytics-location="header" data-analytics-label="Pricing" data-analytics-target-path="#pricing">Pricing</a>
          <a href="#faq" data-analytics-event="cta_click" data-analytics-location="header" data-analytics-label="FAQ" data-analytics-target-path="#faq">FAQ</a>
          <a
            className="button button-small"
            href="#early-access"
            data-analytics-event="cta_click"
            data-analytics-location="header"
            data-analytics-label="Get early access"
            data-analytics-target-path="#early-access"
          >
            Get early access
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
            <a
              className="button"
              href="#early-access"
              data-analytics-event="cta_click"
              data-analytics-location="hero"
              data-analytics-label="Get early access"
              data-analytics-target-path="#early-access"
            >
              Get early access
            </a>
            <a
              className="text-link"
              href="#demo"
              data-analytics-event="cta_click"
              data-analytics-location="hero"
              data-analytics-label="See it in action"
              data-analytics-target-path="#demo"
            >
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
          <div className="card-grid card-grid-2col">
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

        <section className="section section-alt" id="demo">
          <SectionHeader
            eyebrow="SEE IT IN ACTION"
            title="Product demos"
            subcopy="Short loops&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No narration&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Just the app doing its thing"
          />
          <div className="demo-grid">
            {demos.map((item) => (
              <article
                className="demo-card"
                key={item.title}
                data-analytics-event="demo_click"
                data-analytics-demo-title={item.title}
                data-analytics-section="demo"
              >
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
            <p className="hero-copy">If it speaks MIDI, it works</p>
          </div>
        </section>

        <section className="section section-divider standalone-header-section">
          <SectionHeader title="Stop clicking, start controlling" subcopy="Unlock. Connect. Play." />
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
          <a
            className="button"
            href="#early-access"
            data-analytics-event="cta_click"
            data-analytics-location="pricing"
            data-analytics-label="Get early access"
            data-analytics-target-path="#early-access"
          >
            Get early access
          </a>
          <small className="trust-copy">
            30-day money-back guarantee&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No account required
          </small>
        </section>

        <section className="section section-divider section-specs" id="specs">
          <SectionHeader eyebrow="WHAT YOU GET" title="Everything included." subcopy="No tiers. No add-ons. Full control from day one." />
          <div className="specs-grid">
            {[
              { title: 'Knobs', desc: '64 total · 16 per bank<br/>Per-knob mode: 7-bit CC, 14-bit CC or NRPN' },
              { title: 'Resolution', desc: '7-bit: 128 steps<br/>14-bit: 16,384 steps' },
              { title: 'Groups', desc: 'Up to 16 groups · 4 per bank<br/>Linear, Exponential, Logarithmic curves' },
              { title: 'Snapshots', desc: '4 per bank · 16 total' },
              { title: 'Notes Mode', desc: '16 pads per bank<br/>29 scales · Transpose ±12 semitones' },
              { title: 'MPE', desc: 'Up to 5 simultaneous touches<br/>Pitch Bend · Pressure · CC74' },
              { title: 'Connectivity', desc: 'USB · Bluetooth MIDI · Network MIDI (Wi-Fi)' },
              { title: 'Platforms', desc: 'iPhone · iPad · iOS 18.6+' },
              { title: 'Compatibility', desc: 'If it speaks MIDI, it works' },
            ].map((item) => (
              <div className="spec-card" key={item.title}>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </section>

        <section className="section section-divider section-early-access" id="early-access">
          <div className="early-access-inner">
            <h2>Want in before the public launch?</h2>
            {earlyAccessStatus === 'success' ? (
              <p className="early-access-message early-access-message-success">
                Check your inbox to confirm your spot.
              </p>
            ) : earlyAccessStatus === 'duplicate' ? (
              <p className="early-access-message early-access-message-success">
                You're already on the list.
              </p>
            ) : (
              <>
                <form className="early-access-form" onSubmit={handleEarlyAccessSubmit}>
                  <label className="sr-only" htmlFor="early-access-email">
                    Email address
                  </label>
                  <input
                    className="early-access-honeypot"
                    type="text"
                    name="company"
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <input
                    id="early-access-email"
                    className="early-access-input"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={earlyAccessEmail}
                    onChange={(event) => {
                      setEarlyAccessEmail(event.target.value);
                      if (earlyAccessStatus === 'error' || earlyAccessStatus === 'duplicate') {
                        setEarlyAccessStatus('idle');
                        setEarlyAccessError('');
                      }
                    }}
                    aria-invalid={earlyAccessStatus === 'error'}
                    disabled={earlyAccessStatus === 'submitting'}
                  />
                  <button className="early-access-button" type="submit" disabled={earlyAccessStatus === 'submitting'}>
                    {earlyAccessStatus === 'submitting' ? 'Sending...' : 'Get early access'}
                  </button>
                </form>
                <p className="early-access-subcopy">No spam. We'll reach out personally.</p>
                {earlyAccessStatus === 'error' ? (
                  <p className="early-access-message">{earlyAccessError}</p>
                ) : null}
              </>
            )}
          </div>
        </section>

        <section className="section section-divider section-cta">
          <h2>
            Your iPhone is already
            <br />
            a MIDI controller
          </h2>
          <p className="cta-copy">This just turns it on</p>
          <div className="hero-actions">
            <a
              className="button"
              href="#pricing"
              data-analytics-event="cta_click"
              data-analytics-location="final_cta"
              data-analytics-label="Turn it on"
              data-analytics-target-path="#pricing"
            >
              Turn it on
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
                    onClick={() => handleFaqToggle(index, item.question)}
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
          <a href="/privacy" data-analytics-event="cta_click" data-analytics-location="footer" data-analytics-label="Privacy" data-analytics-target-path="/privacy">Privacy</a>
          <a href="/terms" data-analytics-event="cta_click" data-analytics-location="footer" data-analytics-label="Terms" data-analytics-target-path="/terms">Terms</a>
          <a href="/support" data-analytics-event="cta_click" data-analytics-location="footer" data-analytics-label="Contact" data-analytics-target-path="/support">Contact</a>
          <a href="#demo" data-analytics-event="cta_click" data-analytics-location="footer" data-analytics-label="Press Kit" data-analytics-target-path="#demo">Press Kit</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
