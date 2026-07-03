---
title: "Hello, World"
date: "2026-07-03"
slug: "hello-world"
description: "The first post on this blog, and a quick note on why it exists."
---

This is the first post on the new blog. It's built from a single Markdown
file in `content/blog/`, parsed at build time with `gray-matter` and
`remark`, and exported statically — no server, no database, no CMS.

## Why a blog

I wanted a place to write short, informal notes on cloud security, IAM,
and whatever I'm building — separate from the curated `/writing` page,
which links out to longer external pieces.

## How it works

Every post is a Markdown file with frontmatter:

```md
---
title: "Hello, World"
date: "2026-07-03"
slug: "hello-world"
description: "The first post on this blog, and a quick note on why it exists."
---
```

`generateStaticParams` reads every slug in `content/blog/` at build time,
so each post gets its own statically exported HTML page — no manual
build step, no rebuild trigger beyond a normal `git push`.

To publish a new post, add a new `.md` file here and push to `main`.
That's it.
