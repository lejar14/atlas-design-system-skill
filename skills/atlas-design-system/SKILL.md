---
name: atlas-design-system
description: "Atlas, the ASYST design system (PT. Aero Systems Indonesia). Use for any frontend UI work (React/Next.js components, pages, forms, dashboards, landing pages, mockups, demos) when the user mentions Atlas, ASYST, Aero Systems, or asks for buttons, inputs, badges, alerts, etc. in the project's brand style. Builds UI exactly as the Atlas site (https://atlas-design-system-theta.vercel.app) specifies it."
---

# Atlas (ASYST design system)

This skill is a translation of the Atlas site into instructions for you. The site is the authority: `references/` holds its content page by page (anatomy, states, props, Do and Don't lists, accessibility notes), `assets/` holds its official source. Build what they say. If something is not covered there, say so to the user instead of inventing an Atlas rule, and never present a deviation as "an adaptation".

Atlas is not an npm package. Components are source files copied into the user's project, shadcn-style.

## Deliverable

Atlas needs Next.js (App Router) with TypeScript and Tailwind CSS v4. Mockups, prototypes, demos and landing pages are real pages under `src/app/`, not static HTML, unless the user explicitly asks for plain HTML. If the project already uses another stack, ask the user once whether to keep it; if they do, keep the tokens and the rules and say the components are an adaptation.

## Setup (once per project; skip what already exists; this is the site's Getting started)

1. `npm install clsx tailwind-merge lucide-react`
2. Copy `assets/tokens.css` to `src/styles/tokens.css`. Import it before Tailwind in the global stylesheet: `@import '../styles/tokens.css'; @import "tailwindcss";` (adjust the relative path). Every component reads colors and radii from these CSS variables, so this comes before any component.
3. Copy `assets/utils.ts` to `src/lib/utils.ts` (`cn()`).
4. Copy `assets/button.tsx` verbatim to `src/components/ui/button.tsx`. It is the site's exact Button source.
5. Fonts: tokens refer to the families by name (`Inter`, `Manrope`). Load them so the names stay exactly that (a Google Fonts `<link>`); `next/font` renames families and breaks the tokens.

## Workflow for every task

1. List the Atlas components and foundations the task needs.
2. Read `references/components/<name>.md` for each component before writing it, and the matching `references/foundations/*.md`. Follow its anatomy, props, Do, Don't and Accessibility sections exactly.
3. Use the real component for every control. Only Button has official source; for the others (the site publishes the spec but not the code) build them to the spec in their reference, with the prop names listed there, reusing Button's structure (`cn()`, color/variant/size props, `focus-visible` ring), and tell the user they are Atlas-style, not official source.
4. Before saying it is done, run the checklist below.

## Foundations the site states (details in `references/foundations/`)

- **Color**: use color purposefully; only tokens, as CSS variables (`var(--primary500)`, semantic aliases like `--surface-neutral-strong`). Palettes: neutral, primary (brand), secondary, info, success, warning, danger. Names and values: `assets/tokens.css`; full tables: `references/colors-and-tokens.md`.
- **Typography**: Inter for UI and body, Manrope only for the Display styles. Use the type-style tokens (`--displayXl/Lg/Md`, `--headingLg/Md/Sm`, `--titleMd/Sm`, `--bodyLg/Md/Sm`, `--labelMd/Sm`, `--captionMd/Sm`), e.g. `[font:var(--bodySm)]`.
- **Sizing, spacing, radius**: a size scale (`--size*`) and spacing tokens on an 8pt grid (`--spacing4xs` … `--spacing9xl`) "for padding, margins, gaps and sizing across all components"; radius from `--radius-md`.
- **Elevation**: `--level1` cards and panels, `--level2` dropdowns and hovercards, `--level3` popovers and tooltips, `--level4` modals and dialogs; level 0 is flat.
- **Icons**: Lucide (`lucide-react`) with `size` and `strokeWidth` props, sized with the size tokens. Flags are SVGs, never Unicode flag emoji.
- **Dark theme**: the tokens switch on `:root[data-theme=dark]`; use semantic aliases and do not add per-component dark colors.
- **Principles**: clarity, consistency, scalability, accessibility. One Brand Primary button per view.

The site's own Button source uses plain Tailwind utilities for sizes and `text-white`, so that single file is kept verbatim. In new code follow the foundations text: spacing, type and color through the tokens.

## Components (read the reference first)

Button, Input/Text Area, Dropdown, Checkbox, Radio Button, Tooltip, Alert & Toast, Chips, Badge, Switch, Breadcrumbs, Date Picker, Progress, Spinner, Uploader: `references/components/<name>.md` (file names: `button`, `input`, `dropdown`, `checkbox`, `radio-button`, `tooltip`, `alert-toast`, `chips`, `badge`, `switch`, `breadcrumbs`, `date-picker`, `progress`, `spinner`, `uploader`). Foundations: `typography`, `sizing`, `elevation`, `icons`, `avatar`. What changed on the site and when: `references/changelog.md`. Several components are built on Radix primitives (Dropdown: DropdownMenu, Toast: Toast, Date Picker: Popover); their references say how.

## Before you say it is done

1. Run `sh <this skill's folder>/scripts/check.sh` from the project root. It catches setup mistakes and token bypasses (hex or Tailwind palette colors, static HTML, wrong Button or tokens file, wrong import order). Fix everything it lists until it prints `OK`.
2. For every component you used, re-read its Don't and Accessibility lists in `references/components/` and confirm none is violated (a script cannot see these). Also check: one Brand Primary per view, real links instead of `href="#"`, focus ring on every interactive element.
3. In the final message say that the check passed and list anything you could not satisfy, with the reason. Never claim "follows Atlas" without that.

## Limits

Tokens come from the live site CSS (2026-11-12). The site publishes source only for Button. Re-extract tokens from `/_next/static/chunks/*.css` and refresh `references/` from the site when it changes.
