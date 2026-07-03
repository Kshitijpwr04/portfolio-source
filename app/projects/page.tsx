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

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="certification-card" key={cert.code}>
              <div className="certification-image-wrap">
                <img
                  src={cert.image}
                  alt={`${cert.issuer}: ${cert.title} (${cert.code})`}
                  className="certification-image"
                />
              </div>
              <div className="certification-content">
                <p className="certification-issuer">{cert.issuer}</p>
                <h2 className="certification-title">
                  {cert.title} ({cert.code})
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
