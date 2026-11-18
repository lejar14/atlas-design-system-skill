---
name: atlas-design-system
description: "Atlas, the ASYST design system (PT. Aero Systems Indonesia). Use for any frontend UI work (React/Next.js components, pages, forms, dashboards, landing pages, mockups, demos) when the user mentions Atlas, ASYST, Aero Systems, or asks for buttons, inputs, badges, alerts, etc. in the project's brand style. UI is built by importing components from the @asyst/atlas package, never by rewriting them."
---

# Atlas (ASYST design system)

Atlas is a package, `@asyst/atlas`. Components and tokens live there. Import them; never copy, rewrite or restyle a component that the package already has. If the package lacks a component the task needs, tell the user it must be added to the Atlas repo first. Do not invent an Atlas rule or build a lookalike.

## Setup (once per project; skip what already exists)

Needs Next.js (App Router), TypeScript and Tailwind CSS v4. Mockups and demos are real pages under `src/app/`, not static HTML. Run everything from the project root (the folder with `package.json`).

1. Install from GitHub (no npm registry): `npm install github:lejar14/atlas-design-system#release`, then pin to the installed version: read `version` in `node_modules/@asyst/atlas/package.json` and reinstall with `#semver:^<that version>`. The import name is `@asyst/atlas`. The package's own `README.md` has the same steps. A private repo needs git access (SSH key or token). If install fails because no `release` branch or `v*` tag exists, stop and tell the user the package has not been released yet.
2. Global CSS, in this order. The `@source` line is mandatory: without it Tailwind v4 does not read the package's classes and everything renders unstyled with no error. The path is relative to the CSS file: `../node_modules/...` from `app/globals.css`, `../../node_modules/...` from `src/app/globals.css`.
   ```css
   @import "@asyst/atlas/tokens.css";
   @import "tailwindcss";
   @source "../node_modules/@asyst/atlas/dist";
   ```
3. Fonts: tokens refer to `Inter` and `Manrope` by name. Load them with a Google Fonts `<link>`; `next/font` renames families and breaks the tokens.
4. Dark theme: set `data-theme="dark"` on `<html>`.

## Workflow for every task

1. Read `node_modules/@asyst/atlas/dist/llms.txt`. It lists every component with its props, valid values and an example, for the installed version. It is the authority; do not guess props.
2. Build with `import { Button, Input, ... } from "@asyst/atlas"`. Never use raw `<button>`, `<input>`, `<textarea>` or `<select>`. Icon props take a lucide-react component (`leadingIcon={Plus}`). Use the package's `cn()` for class merging. Interactive components are client components; a Server Component page that passes event handlers (`onClick`, `onChange`) must be marked `"use client"`. Some components need a provider: wrap the app in `<Toaster>` before calling `useToast()`, and in `TooltipProvider` for tooltips (see `llms.txt`).
3. For layout and anything outside the components, use tokens as CSS variables (`var(--primary500)`, `var(--surface-raised)`, `var(--foreground)`, `[font:var(--bodySm)]`, spacing `--spacing*`). Use only names that exist in `tokens.css`; grep it before using one. Never hex, `rgb()` or Tailwind palette colors (`bg-blue-500`).
4. Token names and values (colors, type, spacing, radius, levels) come from `node_modules/@asyst/atlas/dist/tokens.css`, the only source; never take them from memory. For foundations guidance (typography, sizing, elevation, icons, avatar) read the matching page in `references/foundations/`. Site history: `references/changelog.md`.
5. Run the checklist below.

## Foundations in short

- **Typography**: Inter for UI and body, Manrope only for Display styles. Use the type tokens (`--displayXl/Lg/Md`, `--headingLg/Md/Sm`, `--titleMd/Sm`, `--bodyLg/Md/Sm`, `--labelMd/Sm`, `--captionMd/Sm`).
- **Spacing, sizing, radius**: 8pt grid via `--spacing4xs` to `--spacing9xl`, size scale `--size*`, radius `--radius-md`.
- **Elevation**: `--level1` cards, `--level2` dropdowns, `--level3` popovers and tooltips, `--level4` modals; level 0 is flat.
- **Icons**: lucide-react. Flags are SVGs, never emoji.
- **Principles**: clarity, consistency, scalability, accessibility. One Brand Primary button per view.

## Before you say it is done

1. Run `node <this skill's folder>/scripts/check.mjs` from the project root. It checks that the package is installed with its `llms.txt` and wired into the CSS (tokens import and `@source`), and flags raw controls, hex or palette colors, `var(--x)` names missing from `tokens.css`, emoji icons and static HTML. Fix everything until it prints `OK`.
2. By hand: one Brand Primary per view, real links instead of `href="#"`, visible focus on every interactive element, every prop and value used appears in `llms.txt`.
3. In the final message say that the check passed and list anything you could not satisfy, with the reason. Never claim "follows Atlas" without that.

## Updating

The skill holds instructions only. To get new components or fixes, bump the package (`npm install github:lejar14/atlas-design-system#semver:^X.Y.Z`); `llms.txt` updates with it. To get new instructions, rerun `npx skills add lejar14/atlas-design-system-skill`. While the package is 0.x, minor bumps can break; read its CHANGELOG before bumping.
