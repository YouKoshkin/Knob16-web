export const faqItems = [
  {
    question: 'How many presets can I store?',
    answer: 'Unlimited.',
  },
  {
    question: "What's the actual BLE MIDI latency floor?",
    answer:
      'Around 10–15 ms best case on modern hardware, 15–25 ms realistic average, with 2–12 ms jitter. For CC control — filter sweeps, macro knobs, mixer automation — this is imperceptible. Jitter matters more than raw latency anyway. USB is the right choice if timing is critical.',
  },
  {
    question: 'Does it work in Airplane Mode over USB?',
    answer:
      'Yes. USB MIDI is entirely local — no network, no Wi-Fi needed. Airplane Mode has zero effect on the USB connection.',
  },
  {
    question: 'Can I assign different MIDI channels per knob?',
    answer:
      'Yes. Every knob has its own MIDI channel assignment. Drive a synth on ch1, a drum machine on ch10, and a reverb unit on ch16 — all from a single bank, simultaneously.',
  },
  {
    question: 'Is USB MIDI class-compliant — no driver needed?',
    answer:
      'Yes. USB MIDI is class-compliant. Plug into Mac, iPad, or any class-compliant host and it works immediately — no driver installation.',
  },
  {
    question: 'Can I export/import presets to share with others?',
    answer:
      'Yes. Export and import preset files to back up your mappings or share them with other Knob16 users.',
  },
  {
    question: 'Can knobs receive MIDI — for DAW feedback and sync?',
    answer:
      'Yes. Knob16 receives CC feedback from your DAW, keeping every knob display in sync with the actual parameter value. The knob is always where the DAW says it is.',
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
    answer:
      'Yes. Set a custom min/max range per knob anywhere within 0–127. Inversion is available when the knob is part of a group.',
  },
  {
    question: 'Can I run multiple instances — two iPhones in the same session?',
    answer: 'Yes — multiple devices work in the same session simultaneously.',
  },
  {
    question: 'Does Blue Hand work with return tracks and sends, or macro knobs only?',
    answer:
      'Blue Hand is part of Live Mode — a dedicated Ableton control surface built into Knob16. It covers three modes: Device (Blue Hand, follows the selected device), Mixer (volume, pan, sends across tracks, including return tracks), and Macros (Rack macro parameters across tracks in configurable layouts).',
  },
  {
    question: 'Does it work with hardware synths directly, no Mac in the middle?',
    answer:
      'Yes. Connect over Bluetooth LE MIDI directly to any BLE MIDI-capable synth or groovebox. USB works too via a Lightning or USB-C adapter to a class-compliant host. No computer required.',
  },
];
