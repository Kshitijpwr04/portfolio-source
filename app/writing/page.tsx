import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import writing from '@/data/writing';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Writing',
    description:
      'Articles on AI security, LLM red teaming, and trust & safety.',
    path: '/writing/',
  }),
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};


export default function WritingPage() {
  return (
    <PageWrapper>
      <article
        className="writing-page"
        style={{ width: '100%', maxWidth: 'none' }}
      >
        <header className="writing-header">
          <div className="writing-header-row">
            <h1 className="page-title">Projects</h1>
            <a
              href="/feed.xml"
              className="writing-rss-link"
              title="RSS Feed"
              aria-label="RSS Feed"
            >
              RSS
            </a>
          </div>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
            width: '100%',
          }}
        >
          {writing.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '100%',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
                <h2 style={{ marginTop: '15px', fontSize: '18px', fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bold' }}>{project.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </article>
    </PageWrapper>
  );
}
