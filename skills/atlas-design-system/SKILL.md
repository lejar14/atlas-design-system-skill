---
name: atlas-design-system
description: "Atlas, the ASYST design system (PT. Aero Systems Indonesia). Use for any frontend UI work (React/Next.js components, pages, forms, dashboards, landing pages) when the user mentions Atlas, ASYST, Aero Systems, or asks for buttons, inputs, badges, alerts, etc. in the project's brand style. Uses Atlas tokens, never invented colors."
---

# Atlas (ASYST design system)

Not an npm package. Components are source files copied into the user's project (shadcn-style). Never suggest `npm install atlas`.

Stack: Next.js App Router, TypeScript, Tailwind v4, `clsx` + `tailwind-merge`, `lucide-react`. Other stack: keep the tokens and look, and say it is an adaptation.

## Setup (once per project; skip what already exists)

1. Copy `assets/tokens.css` to `src/styles/tokens.css`; in the global CSS import it before Tailwind:
   `@import './styles/tokens.css'; @import "tailwindcss";`
2. `npm i clsx tailwind-merge lucide-react`
3. Copy `assets/utils.ts` to `src/lib/utils.ts` (`cn()`).
4. Wanted Button? Copy `assets/button.tsx` verbatim to `src/components/ui/button.tsx`.

## Rules

- Colors: only CSS vars, never hex. Scales `--{palette}{50..900}` with palettes primary, secondary, info, success, warning, danger, neutral. Meaning: primary = brand/CTA/links, success = positive, danger = error/destructive, warning = caution, info = neutral notice.
- Semantic aliases (`--surface-danger-weak`, `--text-neutral-strong`, `--border-primary-default`) exist in tokens.css; read `references/colors-and-tokens.md` only when you need an exact token name or value.
- Type: Inter for UI and body, Manrope only for Display headlines. Use `[font:var(--bodySm)]` (14px default), captions `--captionMd`. Spacing `--spacing*`, shadows `--level1`-`--level4`, radius `--radius-md`.
- Dark mode: `:root[data-theme=dark]` already handled by tokens; do not add per-component dark colors.
- Accessibility: keep the `focus-visible` ring, real `aria-*` and `disabled` semantics, no lighter shades for looks.

## Other components (only Button has official source)

Input/Textarea, Dropdown, Checkbox, Radio, Switch, Tooltip, Alert/Toast, Chip, Badge, Breadcrumbs, Date Picker, Progress, Spinner, Uploader: build them from the Button recipe and tell the user they are Atlas-style, not official.

- Props: `color` (brand|neutral|danger|warning|success), `variant` (primary|secondary|tertiary = filled|outline|text), `size` (sm|md|lg).
- Brand (uses `primary`), danger, warning, success: filled bg `{c}500`, hover `600`, active `700`, ring `300`, white text (warning too). Outline: border `{c}500`, text `{c}600`, hover bg `{c}50`, active `{c}100`. Text: as outline without border.
- Neutral: filled bg `neutral900`, hover `800`, active `950`, ring `400`, white text. Outline: border `neutral300`, text `neutral900`, hover bg `50`, active `100`. Text: as outline without border.
- Size: sm `px-3 py-1.5 text-sm` (icon 14), md `px-4 py-2 text-sm` (16), lg `px-5 py-2.5 text-base` (18).
- Shape: `rounded-[var(--radius-md)]`, `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`, `disabled:pointer-events-none disabled:opacity-40`, `cn()`, icons as component props.
- Errors/validation use danger, success states use success; form fields share one height per size.

## Pages

Use real Atlas components and tokens, one primary CTA per view, consistent spacing from `--spacing*`, clear hierarchy. Principles: clarity, consistency, scalability, accessibility.

## Limits

Tokens come from the live site CSS (2026-11-12); component pages other than Button publish no source. Re-extract from `/_next/static/chunks/*.css` if the site changes.
