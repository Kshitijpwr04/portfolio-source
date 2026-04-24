import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero" style={{ paddingTop: '0px' }}>
      <div className="hero-content">
        <div className="hero-avatar" style={{ width: '280px', height: '280px' }}>
          <ThemePortrait width={250} height={250} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Kshitij Bhausaheb Pawar</span>
        </h1>

        <p className="hero-tagline">
          Security Engineer working with {' '}
          <a href="https://openai.com" className="hero-highlight">
            Azure, AWS & GCP
          </a>
          , Expert in Identity and Access Mangament, SIEM and DevSecOps{' '}
          <a href="https://promptfoo.dev" className="hero-highlight">
          </a>{' '}
          and AI Security.
          <br />
          
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
