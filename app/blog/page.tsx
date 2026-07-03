import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';
import { getAllBlogPostsMeta } from '@/lib/blog';
import { createPageMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog',
  description: 'Short posts on cloud security, IAM, and whatever I’m building.',
  path: '/blog/',
});

export default function BlogPage() {
  const posts = getAllBlogPostsMeta();

  return (
    <PageWrapper>
      <section className="blog-page font-mono">
        <header className="blog-header">
          <h1 className="page-title">Blog</h1>
        </header>

        <div className="blog-list">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-item"
            >
              <time className="blog-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <h2 className="blog-item-title">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
