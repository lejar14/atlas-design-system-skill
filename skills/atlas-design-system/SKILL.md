---
name: atlas-design-system
description: "Atlas, the ASYST design system (PT. Aero Systems Indonesia). Use for any frontend UI work (React/Next.js components, pages, forms, dashboards, landing pages, mockups) when the user mentions Atlas, ASYST, Aero Systems, or asks for buttons, inputs, badges, alerts, etc. in the project's brand style. UI is built by importing components from the @asyst/atlas package, never by rewriting them."
---

# Atlas (ASYST design system)

Atlas is a package, `@asyst/atlas`. Import its components and tokens; never copy, rewrite or restyle a component it already has, and never add another component library (shadcn, MUI, ...) for something Atlas can be composed to do. Never invent an Atlas rule.

## Setup (once per project; skip what exists)

Needs React, TypeScript, Tailwind CSS v4, in Next.js (App Router) or Vite. Run from the project root.

1. Install from GitHub Packages, aliased so the import name is `@asyst/atlas`:
   - `.npmrc` in the project root (create or append; keep `${GITHUB_TOKEN}` literal, never paste a token):
     ```ini
     @lejar14:registry=https://npm.pkg.github.com
     //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
     ```
   - `npm install @asyst/atlas@npm:@lejar14/atlas@^0.2.0`
   - If it fails with 401/403, `GITHUB_TOKEN` is missing: ask the user for a classic token with `read:packages` set as that env var, or fall back to `npm install github:lejar14/atlas-design-system#semver:^0.2.0`. Do not loosen npm security flags.
2. Global CSS, in this order. `@source` is mandatory or nothing is styled, with no error. Path is relative to the CSS file.
   ```css
   @import "@asyst/atlas/tokens.css";
   @import "tailwindcss";
   @source "../node_modules/@asyst/atlas/dist";
   ```
3. Fonts: `Inter` and `Manrope` by name via a Google Fonts `<link>` (`next/font` renames families and breaks the tokens).
4. Dark theme: `data-theme="dark"` on `<html>`.

## Workflow

1. Read `node_modules/@asyst/atlas/dist/llms.txt`: every component, prop and valid value for the installed version. It is the authority; do not guess props.
2. Build with `import { Button, Input, ... } from "@asyst/atlas"`. No raw `<button>`, `<input>`, `<textarea>`, `<select>`. Icon props take a lucide component (`leadingIcon={Plus}`). Use the package's `cn()`. Components needing a provider: `<Toaster>` for `useToast()`, `TooltipProvider` for tooltips. In Next.js, event handlers need `"use client"`.
   - Link styled as a button: `<Link className={buttonClasses({ variant: "secondary" })}>` (Button has no `asChild`/`href`).
   - Segmented toggles, tabs, filters, removable tags: `Chip` (`selected`, `onSelectedChange`, `onRemove`).
   - Field labels: the `label`/`helperText`/`error` props on Input/Textarea/Checkbox, not a separate label element.
   - Hints: `Tooltip`, not `title=`. Loading: `Spinner`/`Progress`. Dates: `DatePicker`.
3. Layout and anything else: tokens as CSS variables (`var(--primary500)`, `var(--surface-raised)`, `[font:var(--bodySm)]`, `--spacing*`, `--level1..4`). Only names that exist in `tokens.css`; grep before using one. Never hex, `rgb()` or Tailwind palette colors (`bg-blue-500`, `text-white`).
4. Foundations (type, spacing, radius, elevation, color, avatar, icons): `references/foundations.md`.

## When Atlas has no answer

1. **A component exists** in `llms.txt`: use it, no exceptions; map the need onto it first.
2. **Layout and structure** (grids, sections, cards, panels, tables, empty states): not governed by Atlas. Decide with good UI/UX sense using plain elements and Atlas tokens. Do not stop to ask.
3. **A missing interactive component** (dialog, select, table behavior, tabs, file input callback): build the smallest accessible thing with Atlas tokens and list it under "Needs UI/UX decision". If the same gap appears in three or more places, stop and raise it: it belongs in the Atlas repo.
4. **A brand-level choice** (new color, gradient, illustration, font, dark-mode behavior): do not decide alone. Use the closest token and list it under "Needs UI/UX decision".

Data-viz colors may be hex when no token fits; mark that line `atlas-ignore` and say so.

## Before you say it is done

1. Run `node <this skill's folder>/scripts/check.mjs` from the project root until it prints `OK`. It checks the package and CSS wiring, raw controls, hex/palette colors, unknown tokens, emoji icons, static HTML. `atlas-ignore` (same line or the line above) skips a line: only for data-viz hex or a documented exception, never to hide a real violation.
2. By hand: one Brand Primary button per view, real links not `href="#"`, visible focus everywhere, every prop used appears in `llms.txt`.
3. In the final message say the check passed, then list (a) what you could not satisfy and why, (b) "Needs UI/UX decision" items. Never claim "follows Atlas" without that.

## Updating

Instructions only live here. New components or fixes come from bumping the package (read its CHANGELOG first; 0.x minors can break); `llms.txt` updates with it. New instructions: `/plugin marketplace update atlas` (Claude Code plugin) or rerun `npx skills add lejar14/atlas-design-system-skill`.
