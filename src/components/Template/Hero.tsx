import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero" style={{ paddingTop: '0px' }}>
      <div
        className="hero-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          className="hero-avatar"
          style={{
            width: 'clamp(180px, 40vw, 280px)',
            height: 'clamp(180px, 40vw, 280px)',
          }}
        >
          <ThemePortrait width={250} height={250} priority />
        </div>

        <h1 className="hero-title" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>
          <span className="hero-name">Kshitij Bhausaheb Pawar</span>
        </h1>

        <p className="hero-tagline">
          Security Engineer working with Azure, AWS & GCP, Expert in Identity
          and Access Mangament, SIEM and DevSecOps and AI Security.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Rutgers Alum</span>
          <span className="hero-chip">IEEE Security Researcher</span>
          
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
