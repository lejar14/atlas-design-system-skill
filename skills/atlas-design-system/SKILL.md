---
name: atlas-design-system
description: "Atlas — the ASYST Technology Language & Design System for PT. Aero Systems Indonesia (source: atlas-design-system-theta.vercel.app). Use this skill for ANY frontend UI work — building React/Next.js components, pages, dashboards, forms, landing pages, or design mockups — where the user wants it to follow 'Atlas', 'ASYST', 'Aero Systems Indonesia' branding, or simply hasn't specified a design system but the project already uses Atlas conventions. Trigger even without the words 'Atlas' or 'design system' explicitly — e.g. buatin tombol submit, bikin form login, desain dashboard admin, styling pakai warna primary/danger/success, component button/input/dropdown/badge/chip/alert. Always pull colors, typography, and component conventions from this skill instead of inventing a palette, and copy components into the project the same shadcn-style way Atlas itself is distributed (not as an npm install)."
---

# Atlas Design System (ASYST — PT. Aero Systems Indonesia)

Atlas is distributed **shadcn-style**: it is not an npm package. Components are copied directly into
the user's codebase as source files the user owns and can edit freely. When this skill triggers, your
job is to (1) set up or confirm the token foundation, then (2) write components that follow Atlas's
established conventions and token usage — matching the public component APIs Atlas documents.

**Read `references/colors-and-tokens.md` before styling anything** and **`references/components.md`
before building any component**. Don't invent hex values, token names or component props.

## Stack assumptions

Atlas assumes, and this skill assumes unless the user says otherwise:
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `clsx` + `tailwind-merge` for the `cn()` class-merging utility
- `lucide-react` for icons

If the user's project uses something else (plain React, Vue, a different CSS approach), translate the
*tokens and visual conventions* below but say plainly that you're adapting Atlas outside its native
stack — don't silently pretend it's a 1:1 port.

## One-time setup (do this before building the first component in a new project)

1. Copy `assets/tokens.css` into the project (e.g. `src/styles/tokens.css`).
2. Import it **before** Tailwind in the global stylesheet:
   ```css
   @import './styles/tokens.css';
   @import "tailwindcss";
   ```
3. Install the class-merge utilities: `npm install clsx tailwind-merge`
4. Copy `assets/utils.ts` to `src/lib/utils.ts`.
5. From here, every component reads values from the CSS variables (e.g. `var(--primary500)`,
   `var(--radius-md)`, `var(--spacingSm)`, `font: var(--bodySm)`, `box-shadow: var(--level2)`) —
   never hardcode a hex or px value that a token covers.
6. Dark mode: Atlas switches themes with `data-theme="dark"` on `<html>`; the neutral scale, surface,
   accent and elevation tokens flip automatically. Use neutral tokens (not `white`/`black`) so
   components follow the theme.

If the project already has a tokens file or a `cn()` util, don't duplicate it — check first and reuse
what's there.

## Color usage rules

- Use the **primitive scale** (`--primary500`, `--danger600`, etc.) inside component implementations,
  exactly like Atlas's own Button does.
- Atlas's own CSS ships a few purpose tokens: `--background`, `--foreground`, `--surface-base`,
  `--surface-raised`, `--surface-accent-subtle`, `--text-accent-subtle-{label,title,body}`,
  `--icon-accent-subtle`, `--text-link`. Prefer these when they fit.
- The Color page's semantic aliases (surface/typography/border/icon × palette × weak/default/...) are
  provided in `assets/tokens.css` as `--surface-danger-weak`, `--text-neutral-strong`, etc. Those
  variable names are this skill's convention, not Atlas's — fine inside a project that copied this
  tokens.css, but don't assume they exist in a project that only has Atlas's original tokens.css.
- Six palettes exist beyond neutral: **primary** (brand), **secondary**, **info**, **success**, **warning**,
  **danger**. Map UI meaning to palette, not the other way around: confirmations/positive states →
  success; destructive/error states → danger; caution/pending → warning; neutral informational → info;
  brand emphasis (primary CTAs, active nav, links) → primary.
- Full table with every hex value: `references/colors-and-tokens.md`.

## Typography rules

- **Inter** for everything except display headlines: UI text, body copy, headings, labels, buttons.
- **Manrope** only for Display-level styles (hero/marketing headlines) — never for body copy or dense UI.
- Use the composite type tokens with the CSS `font` shorthand (`style={{ font: "var(--bodySm)" }}`):
  `--displayXl/Lg/Md` (Manrope 700), `--headingLg/Md/Sm`, `--titleMd/Sm`, `--subtitleMd/Sm` (Inter 600),
  `--bodyLg/Md/Sm` (400), `--labelMd/Sm` (500), `--captionMd/Sm` (400), `--overlineBase` (500, 11px).
  `--bodySm` (14/20) is the default UI body; `--captionMd` (12/16) for meta text.
- Use tabular figures for numbers in tables/lists, slashed zero selectively for data where 0/O ambiguity
  matters. Standard ligatures are on by default — no action needed.

## Spacing, radius, elevation

- Spacing: `--spacing4xs` 2 · `3xs` 4 · `2xs` 8 · `Xs` 12 · `Sm` 16 · `Md` 20 · `Lg` 24 · `Xl` 32 ·
  `2xl` 40 · `3xl` 48 · `4xl` 56 · `5xl` 64 · `6xl` 80 · `7xl` 96 · `8xl` 128 · `9xl` 256 (px), aliased
  from the `--size*` scale. Tailwind classes that land on these values (`p-4` = 16px) are equivalent.
- Radius: components use `--radius-md` (8px), like Button. The full Atlas radius scale is
  `--borderNull … --border4xl`, `--borderFull` (same steps as spacing; Full = 999px).
- Elevation: `--level1` cards/panels, `--level2` dropdowns/hovercards, `--level3` popovers/tooltips,
  `--level4` modals. Level 0 = no shadow.

## Building components

Only **Button** has published source (`assets/button.tsx`; copy it verbatim when the user wants Button).
For the other 14 components Atlas publishes usage examples, which fix the public API: file name,
export names and props. **`references/components.md` is the contract** — e.g. `Textarea` lives in
`textarea.tsx`, the dropdown is `DropdownMenu*` in `dropdown-menu.tsx`, toasts are `Toaster` +
`useToast()` in `toast.tsx`, `Chip` is in `chip.tsx`. Implement those APIs; style them with the Button
conventions below:

1. **Props shape**: follow the example's props. Note the `color` value names differ per component:
   Button uses `brand`, while Chip and Switch use `primary`. Where a component has weight variants,
   use `variant` (`primary | secondary | tertiary`) and `size` (`sm | md | lg`).
2. **Color-variant matrix**: for filled/primary, background = `{color}500`, hover = `{color}600`,
   active = `{color}700`, focus ring = `{color}300`, text = white (Atlas's Button uses white even on
   warning). For outline/secondary: `border-{color}500`, `text-{color}600`, hover bg = `{color}50`,
   active bg = `{color}100`. For text/tertiary: same text/hover/active as secondary, no border.
3. **Sizing**: reuse Button's scale as the default unless the component has a good reason to diverge —
   `sm: px-3 py-1.5 text-sm`, `md: px-4 py-2 text-sm`, `lg: px-5 py-2.5 text-base`, with icon sizes
   14/16/18px respectively.
4. **Structure**: `rounded-[var(--radius-md)]`, `focus-visible:outline-none focus-visible:ring-2
   focus-visible:ring-offset-2`, `disabled:pointer-events-none disabled:opacity-40`, class merging via
   `cn(...)` from `@/lib/utils`, icons from `lucide-react` passed as component props (`LeadingIcon`,
   `TrailingIcon`) not hardcoded markup.
5. Ship it as a plain `.tsx` file the user copies into `src/components/ui/`, matching how Atlas itself
   is distributed — never suggest `npm install <atlas-package>`, it doesn't exist.

Copy `assets/button.tsx` verbatim when the user actually wants the Button component itself.

## Design principles to keep in mind

Atlas states four principles — hold new components to these when making judgment calls the token/spec
data doesn't cover:
- **Clarity** — unambiguous hierarchy and language.
- **Consistency** — shared patterns so every product speaks with one voice; don't introduce a one-off
  pattern when an existing Atlas convention already covers the need.
- **Scalability** — build for the whole ecosystem, not just the one screen in front of you.
- **Accessibility** — inclusive by default: always keep the `focus-visible` ring, sufficient contrast
  (semantic tokens are already tuned for this — don't override with an arbitrary lighter shade for
  aesthetics), and real `aria-*`/disabled semantics on interactive components.

## Honesty note — what this skill does and doesn't know

Built from the live Atlas site (tokens copied from its compiled CSS on 2026-11-12):

- **Confirmed**: all color, size, spacing, radius, typography and elevation tokens, dark theme, Button
  source, and every component's public usage API.
- **Not published**: source and exact visual specs of components other than Button. Their internals
  here are built from Button's conventions. If the user has the Atlas repo or Figma file, prefer it
  and offer to update this skill.

## Reference files

- `references/colors-and-tokens.md` — color tables (hex + semantic mapping) and typography detail.
- `references/components.md` — usage API for all 15 components, from the live site.
- `assets/tokens.css` — Atlas's tokens (light + dark) plus the semantic aliases.
- `assets/utils.ts` — the `cn()` helper every component needs.
- `assets/button.tsx` — canonical Button source; the style template for other components.
