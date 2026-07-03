import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PageWrapper from '@/components/Template/PageWrapper';
import { getBlogPostBySlug, getBlogSlugs } from '@/lib/blog';
import { createPageMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper>
      <article className="blog-page font-mono">
        <header className="blog-post-header">
          <time className="blog-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-description">{post.description}</p>
        </header>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </PageWrapper>
  );
}
