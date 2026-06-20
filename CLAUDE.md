# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project summary

**AI 入门指南 (ai-rumen)** — a Chinese-language AI tutorial website built with Astro 6 + Starlight. The site contains step-by-step tutorials teaching non-technical Chinese users how to use AI tools (ChatGPT, Claude Code, Cursor, DeepSeek, Kimi). Target audience: people anxious about AI who need detailed, screenshot-heavy, zero-prerequisite walkthroughs.

## Commands

```bash
npm run dev        # Dev server at localhost:4321
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Architecture

Gateway pages (custom Astro pages, outside Starlight docs):
- `src/pages/index.astro` — Custom homepage (hero, category cards, use-case grid, footer). This is NOT a Starlight doc page — it's a standalone Astro page with its own layout.

Tutorials & content (Starlight docs, auto-routed from folder structure):
- `src/content/docs/` — All documentation pages in Starlight's content collection.
  - `tutorials/{tool}/index.mdx` — Series overview page (sidebar `order: 0`)
  - `tutorials/{tool}/NN-slug.mdx` — Individual tutorials numbered for order
  - `resources/` — Glossary and FAQ
  - `about.mdx`, `contact.mdx` — Standalone pages referenced in sidebar

Custom Astro components (reusable across MDX pages):
- `src/components/` — `Screenshot.astro`, `WarningCallout.astro`, `PrereqChecklist.astro`, `NextSteps.astro`, `FAQItem.astro`, `CategoryCard.astro`, `DifficultyBadge.astro`, `WeChatQR.astro`

Configuration:
- `astro.config.mjs` — Starlight sidebar config (zh-CN default locale, sidebar groups with autogenerate directories, badges, collapsed states)
- `src/content.config.ts` — Extended docs schema with custom frontmatter fields: `series`, `seriesOrder`, `difficulty`, `estimatedTime`, `tools`, `screenshotCount`, `updatedAt`
- `src/styles/custom.css` — Design system: CSS custom properties (design tokens), glassmorphism cards, backdrop-filter blur, entrance animations (fadeInUp/staggered), gradient text, floating decorative orbs, responsive breakpoints. All component styles are defined here — `.astro` component files use class names only, no inline styles.

## Tutorial page conventions

Every tutorial `.mdx` follows this structure:
1. Frontmatter: `title`, `description`, `sidebar.order`, `series`, `seriesOrder`, `difficulty`, `estimatedTime`, `tools`, `screenshotCount`, `updatedAt`
2. Imports from `../../../../components/` (4 levels up from `src/content/docs/tutorials/{tool}/` — this is critical, `../../../../components/` not `../../../components/`)
3. Sections: 本教程目标 → 准备工作 (with `<PrereqChecklist>`) → Step-by-step content → 常见问题 (with `<FAQItem>`) → 下一步 (with `<NextSteps>`)
4. Screenshots use `<Screenshot>` component with placeholder display in dev mode, real images in production

## Starlight version notes

Using Starlight ~0.40. Sidebar items must use the pattern: `{ label, collapsed, items: [{ autogenerate: { directory } }] }`. Do NOT put `autogenerate` directly on the group — it goes inside `items`. The `social` config is an array of objects, not an object.
