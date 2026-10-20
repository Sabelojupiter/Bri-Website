import { photos } from '../data/photos';

export function AboutPage() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, padding: '48px 24px', maxWidth: 1100, margin: '0 auto', alignItems: 'center' }}>
      <img src="/photos/bri_mirror.png" alt="Bri behind the camera" style={{ width: '100%', borderRadius: 24 }} />
      <div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 56, margin: 0 }}>
          Hi, I'm <em style={{ color: 'var(--magenta)' }}>Bri</em>.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          [Her story goes here: where she shoots, what she chases, why "transient."]
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          For commissions or questions, email <a href="mailto:hello@example.com" style={{ color: 'var(--tangerine)', fontWeight: 700 }}>hello@example.com</a>.
        </p>
      </div>
    </section>
  );
}