# Zephyr — Portfolio

Personal portfolio and blog built with Next.js, Tailwind CSS, and MDX.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — Pages (home, projects, blog, contact)
- `components/` — Reusable UI components
- `content/blog/` — MDX blog posts
- `data/` — Project data
- `lib/` — Utilities (MDX parsing)

## Adding Content

**Blog posts:** Create a `.mdx` file in `content/blog/` with frontmatter:

```yaml
---
title: "Post Title"
date: "2026-03-27"
description: "A short description"
tags: ["tag1", "tag2"]
---
```

**Projects:** Edit `data/projects.ts` to add or update projects.
