# Vicky — Portfolio

Personal portfolio and blog built with Next.js, TypeScript, Tailwind CSS, MDX, and ESLint.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

## Structure

- `app/` — Pages (home, projects, blog, contact)
- `components/` — Reusable UI components
- `content/blog/` — MDX blog posts
- `data/` — Project data
- `lib/` — Utilities (MDX parsing)
- `public/` — Static assets (images, profile photo)
- `release` — Release script (merges dev → main)

## Branch Workflow

All work is done on the `dev` branch. Changes are merged to `main` via the release script in `release/`.

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
