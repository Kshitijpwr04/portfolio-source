import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  slug: string;
  description: string;
  draft?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  contentHtml: string;
  draft?: boolean;
}

const blogDirectory = path.join(process.cwd(), 'content/blog');

function getBlogFilenames(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith('.md'));
}

function readFrontmatter(filename: string): {
  frontmatter: BlogPostFrontmatter;
  content: string;
} {
  const fullPath = path.join(blogDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data as BlogPostFrontmatter, content };
}

/** Route slugs come from frontmatter, not filenames, so posts can be renamed on disk. */
export function getBlogSlugs(): string[] {
  return getBlogFilenames().map(
    (filename) => readFrontmatter(filename).frontmatter.slug,
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const filename = getBlogFilenames().find(
    (file) => readFrontmatter(file).frontmatter.slug === slug,
  );

  if (!filename) {
    return null;
  }

  const { frontmatter, content } = readFrontmatter(filename);
  const processed = await remark().use(html).process(content);

  return {
    slug: frontmatter.slug,
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    contentHtml: processed.toString(),
    draft: frontmatter.draft,
  };
}

export function getAllBlogPostsMeta(): Omit<BlogPost, 'contentHtml'>[] {
  return getBlogFilenames()
    .map((filename) => readFrontmatter(filename).frontmatter)
    .filter((post) => !post.draft || process.env.NODE_ENV === 'development')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
