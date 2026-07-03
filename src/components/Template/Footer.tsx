'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';
import ContactIcons from '@/components/Contact/ContactIcons';
import work from '@/data/resume/work';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  const currentRole = `${work[0].position} at ${work[0].name}`;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1200);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div
      className="sidebar-container"
      style={{
        display: isMobile ? 'none' : 'block',
        position: 'fixed',
        left: '20px',
        top: '20px',
        width: '300px',
        maxWidth: '90vw',
        height: 'calc(100vh - 50px)',
        overflowY: 'auto',
        background: 'var(--color-bg)',
        border: '1px solid #c9a96a',
        padding: '40px 20px',
        borderRadius: '20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', border: '2px solid #c9a96a' }}>
            <ThemePortrait width={180} height={180} />
          </div>
          <h2 style={{ marginTop: '15px', color: 'var(--color-fg-bold)', fontFamily: "'Times New Roman', Times, serif", fontWeight: 400, textAlign: 'center', fontSize: '30px' }}>Kshitij Bhausaheb Pawar</h2>
          <p style={{ opacity: 0.8, color: 'var(--color-fg-light)', textAlign: 'center', fontSize: '18px' }}>{currentRole}</p>
          <p
            style={{
              marginTop: '12px',
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--color-fg-light)',
              maxWidth: '240px',
              textAlign: 'center',
            }}
          >
            Cybersecurity engineer specializing in cloud security and IAM across Azure, AWS, and GCP.
            Focused on building secure, scalable architectures and automating threat detection.
            Passionate about Zero Trust, DevSecOps, and modern security engineering.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '10px', color: 'var(--color-fg-bold)', fontFamily: "'Times New Roman', Times, serif", fontWeight: 400, textAlign: 'center', fontSize: '20px' }}>Connect</h4>
          <ContactIcons />
        </div>
      </div>
    </div>
  );
}
