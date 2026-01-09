# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website built with Astro, featuring blog posts, projects, publications, and work experience. Uses shadcn/ui components (React) with Tailwind CSS v4.

## Commands

```bash
npm run dev      # Start development server (http://localhost:4321)
npm run build    # Build for production (outputs to ./dist)
npm run preview  # Preview production build locally
npm run lint     # Check for linting issues
npm run lint:fix # Auto-fix linting issues
```

## Tech Stack

- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite)
- **UI Components**: shadcn/ui (React components used as Astro islands)
- **Content**: Astro Content Collections with MDX
- **Images**: Astro Image component with `image()` schema helper
- **Math**: KaTeX (remark-math + rehype-katex)
- **Code Highlighting**: Shiki (built-in)
- **Linting**: ESLint with Astro, React, and TypeScript plugins
- **Deployment**: GitHub Pages via GitHub Actions

## Architecture

### Site Configuration (`src/data/site.ts`)
Centralized site-wide constants: author name, title, description, and social links. Import this when adding author info or social links to avoid duplication.

### Content Collections (`src/content/`)
Content uses Astro's Content Collections with MDX. Schemas defined in `src/content.config.ts` using function syntax with `image()` helper:

- **blog/**: title, description, pubDate, tags, heroImage (optimized), heroImageAlt, draft
- **projects/**: title, description, tags, image (optimized), imageAlt, github/live links, featured
- **publications/**: title, authors, venue, year, doi, type

### Components (`src/components/`)
- **ui/**: shadcn/ui components (Button, Card, Badge, Sheet, Separator)
- **layout/**: Header.tsx (client:load for mobile menu) and Footer.tsx (static, no hydration)

### Pages (`src/pages/`)
- `index.astro` - Homepage with hero, featured projects, recent posts
- `experience.astro` - Work timeline (data in `src/data/experience.ts`)
- `projects/` - Project listing and `[...slug].astro` for details
- `publications.astro` - Grouped by year
- `blog/` - Post listing and `[...slug].astro` for articles

### Styling (`src/styles/globals.css`)
- Tailwind v4 with @theme for CSS variables
- Dark mode only (green accent: oklch(0.696 0.17 162.48))
- Prose styles for MDX content
- KaTeX styling integration

## Key Files

- `astro.config.mjs` - Astro config with React, MDX, sitemap integrations
- `src/content.config.ts` - Content collection schemas with image() helper
- `src/data/site.ts` - Centralized site config (author, social links)
- `src/layouts/BaseLayout.astro` - Main layout with SEO meta tags
- `src/lib/utils.ts` - cn() helper for className merging (shadcn pattern)

## Adding Content

### Blog Post
Create `src/content/blog/my-post.mdx`. For optimized images, place them in `src/assets/` and reference with relative path:
```mdx
---
title: "Post Title"
description: "Brief description"
pubDate: 2024-01-15
tags: ["tag1", "tag2"]
heroImage: "../../assets/images/my-image.jpg"
heroImageAlt: "Description of the image"
---

Content with **markdown**, code blocks, and math: $E = mc^2$
```

### Project
Create `src/content/projects/my-project.mdx`:
```mdx
---
title: "Project Name"
description: "What it does"
tags: ["Python", "React"]
image: "../../assets/images/project-screenshot.jpg"
imageAlt: "Screenshot of the project"
github: "https://github.com/..."
featured: true
order: 1
---

Detailed description...
```

### Publication
Create `src/content/publications/paper-name.mdx`:
```mdx
---
title: "Paper Title"
authors: ["Author One", "Author Two"]
venue: "Conference Name"
year: 2024
doi: "10.1234/example"
type: "conference"
---
```

### Work Experience
Edit `src/data/experience.ts` to add/modify entries.

## SEO

All page titles follow the pattern `{Page/Content Title} | {siteConfig.author}` for consistent branding. Default description comes from `siteConfig.description`.

## Deployment

Automatic deployment to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`. Ensure GitHub Pages is configured to use GitHub Actions as the source.
