import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import certifications from '@/data/certifications';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Certifications',
  description:
    'Professional certifications in cloud security, identity, and DevSecOps.',
  path: '/projects/',
});

export default function CertificationsPage() {
  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Certifications</h1>
          <p className="page-subtitle">
            Professional certifications in cloud security, identity, and
            DevSecOps.
          </p>
        </header>

        <div className="projects-grid" style={{ width: '100%' }}>
          {certifications.map((cert) => (
            <div key={cert.code} style={{ width: '100%', maxWidth: '100%' }}>
              <img
                src={cert.image}
                alt={`${cert.issuer}: ${cert.title} (${cert.code})`}
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
              <h2
                style={{
                  marginTop: '15px',
                  fontSize: '18px',
                  fontFamily: 'Courier New, Courier, monospace',
                  fontWeight: 'bold',
                }}
              >
                {cert.title} ({cert.code})
              </h2>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
