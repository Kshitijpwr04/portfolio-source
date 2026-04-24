import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import work from '@/data/resume/work';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  const currentRole = `${work[0].position} at ${work[0].name}`;

  return (
    <div
      style={{
        position: 'fixed',
        left: '20px',
        top: '20px',
        width: '18%',
        height: 'calc(100vh - 50px)',
        overflowY: 'auto',
        background: 'var(--color-bg)',
        border: '1px solid #c9a96a',
        padding: '40px 20px',
        borderRadius: '20px',
        textAlign: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', border: '2px solid #c9a96a' }}>
            <ThemePortrait width={180} height={180} />
          </div>
          <h2 style={{ marginTop: '15px', color: 'var(--color-fg-bold)', fontFamily: "'Times New Roman', Times, serif", fontWeight: 400, textAlign: 'center' }}>Kshitij Bhausaheb Pawar</h2>
          <p style={{ opacity: 0.8, color: 'var(--color-fg-light)', textAlign: 'center' }}>{currentRole}</p>
        </div>

        <div>
          <h4 style={{ marginBottom: '10px', color: 'var(--color-fg-bold)', fontFamily: "'Times New Roman', Times, serif", fontWeight: 400, textAlign: 'center' }}>Connect</h4>
          <ContactIcons />
        </div>
      </div>
    </div>
  );
}
