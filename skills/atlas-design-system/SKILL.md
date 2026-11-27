---
name: atlas-design-system
description: "Atlas, the ASYST (PT. Aero Systems Indonesia) design system. Use for frontend UI work (React/Next.js/Vite pages, components, forms, dashboards, mockups) when the user mentions Atlas, ASYST, Aero Systems, or wants UI in the project's brand style. Build by importing from the @asyst/atlas package."
---

# Atlas

Import components and tokens from `@asyst/atlas`. Never copy, rewrite or restyle an Atlas component, never add another UI library (shadcn, MUI, ...), never invent an Atlas rule.

## Setup (once per project, from the root; skip what exists)

Needs React, TypeScript, Tailwind v4, Next.js (App Router) or Vite.

1. `npm install github:lejar14/atlas-design-system#semver:^0.3.0` (import name `@asyst/atlas`). On failure, stop and tell the user; never loosen npm security flags.
2. Global CSS, in this order (`@source` path is relative to the CSS file; without it nothing is styled, silently):
   ```css
   @import "@asyst/atlas/tokens.css";
   @import "tailwindcss";
   @source "../node_modules/@asyst/atlas/dist";
   ```
3. Fonts `Inter` and `Manrope` via a Google Fonts `<link>` (not `next/font`, it renames families).
4. Dark theme: `data-theme="dark"` on `<html>`.

## Build

1. Read `node_modules/@asyst/atlas/dist/llms.txt` first: the authority on components, props and values. Do not guess props.
2. `import { Button, Input, ... } from "@asyst/atlas"`. No raw `<button>`, `<input>`, `<textarea>`, `<select>`. Icon props take icon components (`leadingIcon={Plus}`); for lucide icons, `npm install lucide-react` first (Atlas does not ship it). Use the package's `cn()`. `<Toaster>` for `useToast()`, `TooltipProvider` for tooltips. Next.js event handlers need `"use client"`.
   - Link as button: `<Link className={buttonClasses({ variant: "secondary" })}>`.
   - Toggles, tabs, filters, removable tags: `Chip`.
   - Labels: `label`/`helperText`/`error` props. Hints: `Tooltip`, not `title=`. Loading: `Spinner`/`Progress`. Dates: `DatePicker`.
3. Everything else: tokens as CSS variables (`var(--primary500)`, `[font:var(--bodySm)]`, `--spacing*`, `--level1..4`), only names in `tokens.css`. Never hex, `rgb()` or Tailwind palette colors. Values: `references/foundations.md`.

## Gaps

- Component exists in `llms.txt`: use it.
- Layout (grids, cards, tables, empty states): decide yourself with plain elements and tokens.
- Missing interactive component or brand choice (color, gradient, font, illustration): smallest accessible version / closest token, listed under "Needs UI/UX decision". Same gap 3+ times: raise it for the Atlas repo.
- Data-viz hex with no token: mark the line `atlas-ignore`.

## Done

1. `node <this skill's folder>/scripts/check.mjs` from the project root until `OK`. `atlas-ignore` only for data-viz hex or a documented exception.
2. By hand: one Brand Primary button per view, no `href="#"`, visible focus, every prop is in `llms.txt`.
3. Final message: check passed, what you could not satisfy and why, "Needs UI/UX decision" items.
