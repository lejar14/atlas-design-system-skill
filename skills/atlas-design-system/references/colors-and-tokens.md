# Atlas — Color & Token Reference

Source: https://atlas-design-system-theta.vercel.app/foundations/color (fetched live). The full primitive and semantic color set as published on the site. The exact CSS variable names (primitives such as `--primary500` and the semantic `--surface-*`, `--text-*`, `--border-*`, `--icon-*` aliases) are in `../assets/tokens.css`, extracted from the live site CSS: when a name here and that file differ, the file wins.

## Neutral

| Token | Hex | RGB |
|---|---|---|
| neutral950 | #101218 | 16, 18, 24 |
| neutral900 | #1C1E26 | 28, 30, 38 |
| neutral800 | #2A2C32 | 42, 44, 50 |
| neutral700 | #404145 | 64, 65, 69 |
| neutral600 | #565961 | 86, 89, 97 |
| neutral500 | #70727B | 112, 114, 123 |
| neutral400 | #898C94 | 137, 140, 148 |
| neutral300 | #A2A6AE | 162, 166, 174 |
| neutral200 | #BCC0C7 | 188, 192, 199 |
| neutral150 | #D2D5DC | 210, 213, 220 |
| neutral100 | #E1E4EA | 225, 228, 234 |
| neutral50  | #EFF1F8 | 239, 241, 248 |
| neutral25  | #F8F9FD | 248, 249, 253 |
| neutral0   | #FFFFFF | 255, 255, 255 |

## Primary (brand)

The brand color — primary buttons, active states, links.

| Step | Hex | Role label |
|---|---|---|
| 50  | #EBF5FF | Primary bg |
| 100 | #C2CBE4 | Primary light |
| 200 | #A5B2D7 | Primary border |
| 300 | #7C8FC4 | Primary accent |
| 400 | #6279B9 | Primary indicator |
| 500 | #3B58A7 | Primary default |
| 600 | #365098 | Primary strong |
| 700 | #2A3E77 | Primary text |
| 800 | #20305C | Primary dark |
| 900 | #192546 | Primary darkest |
| 950 | #10182D | Primary near-black |

## Secondary

Complements primary for accents, charts, secondary emphasis.

| Step | Hex | Role label |
|---|---|---|
| 50  | #E6F5F3 | Secondary bg |
| 100 | #B0DEDA | Secondary light |
| 200 | #8ACFC8 | Secondary border |
| 300 | #54B9AF | Secondary accent |
| 400 | #33ABA0 | Secondary indicator |
| 500 | #009688 | Secondary default |
| 600 | #00897C | Secondary strong |
| 700 | #006B61 | Secondary text |
| 800 | #00534B | Secondary dark |
| 900 | #003F39 | Secondary darkest |
| 950 | #00332E | Secondary near-black |

## Info

| Step | Hex | Role label |
|---|---|---|
| 50  | #F0F7FF | Info bg |
| 100 | #D6EAFF | Info light |
| 200 | #ADD4FF | Info border |
| 300 | #75B8FF | Info accent |
| 400 | #3D9BFF | Info indicator |
| 500 | #0A7AFF | Info default |
| 600 | #0062DB | Info strong |
| 700 | #004DB3 | Info text |
| 800 | #003A8A | Info dark |
| 900 | #002966 | Info darkest |
| 950 | #001A42 | Info near-black |

## Success

| Step | Hex | Role label |
|---|---|---|
| 50  | #F0FDF4 | Success bg |
| 100 | #DCFCE7 | Success light |
| 200 | #BBF7D0 | Success border |
| 300 | #86EFAC | Success accent |
| 400 | #4ADE80 | Success indicator |
| 500 | #22C55E | Success default |
| 600 | #16A34A | Success strong |
| 700 | #15803D | Success text |
| 800 | #166534 | Success dark |
| 900 | #14532D | Success darkest |
| 950 | #052E16 | Success near-black |

## Warning

| Step | Hex | Role label |
|---|---|---|
| 50  | #FFFBEB | Warning bg |
| 100 | #FEF3C7 | Warning light |
| 200 | #FDE68A | Warning border |
| 300 | #FCD34D | Warning accent |
| 400 | #FBBF24 | Warning indicator |
| 500 | #F59E0B | Warning default |
| 600 | #D97706 | Warning strong |
| 700 | #B45309 | Warning text |
| 800 | #92400E | Warning dark |
| 900 | #78350F | Warning darkest |
| 950 | #451A03 | Warning near-black |

## Danger

| Step | Hex | Role label |
|---|---|---|
| 50  | #FEF2F2 | Danger bg |
| 100 | #FEE2E2 | Danger light |
| 200 | #FECACA | Danger border |
| 300 | #FCA5A5 | Danger accent |
| 400 | #F87171 | Danger indicator |
| 500 | #EF4444 | Danger default |
| 600 | #DC2626 | Danger strong |
| 700 | #B91C1C | Danger text |
| 800 | #991B1B | Danger dark |
| 900 | #7F1D1D | Danger darkest |
| 950 | #450A0A | Danger near-black |

## Semantic aliases

These map a purpose (surface/typography/border/icon × neutral/primary/secondary/success/info/warning/danger
× weak/default/medium/strong, or muted/weak/medium/strong/inverse for neutral) onto one of the primitive
steps above. Use these — not raw primitive hexes — whenever a design decision is about *purpose*
("this is a danger surface") rather than *brand identity* ("this is exactly primary.500").

### Background / surface

| Semantic token | Resolves to | Hex |
|---|---|---|
| surface.neutral.weak | neutral.25 | #F8F9FD |
| surface.neutral.default | neutral.50 | #EFF1F8 |
| surface.neutral.medium | neutral.150 | #D2D5DC |
| surface.neutral.muted | neutral.100 | #E1E4EA |
| surface.neutral.strong | neutral.900 | #1C1E26 |
| surface.neutral.inverse | neutral.0 | #FFFFFF |
| surface.primary.weak | primary.50 | #EBF5FF |
| surface.primary.default | primary.100 | #C2CBE4 |
| surface.primary.medium | primary.200 | #A5B2D7 |
| surface.primary.strong | primary.800 | #20305C |
| surface.secondary.weak | secondary.50 | #E6F5F3 |
| surface.secondary.default | secondary.100 | #B0DEDA |
| surface.secondary.medium | secondary.200 | #8ACFC8 |
| surface.secondary.strong | secondary.800 | #00534B |
| surface.info.weak | info.50 | #F0F7FF |
| surface.info.default | info.100 | #D6EAFF |
| surface.info.medium | info.200 | #ADD4FF |
| surface.info.strong | info.800 | #003A8A |
| surface.success.weak | success.50 | #F0FDF4 |
| surface.success.default | success.100 | #DCFCE7 |
| surface.success.medium | success.200 | #BBF7D0 |
| surface.success.strong | success.800 | #166534 |
| surface.warning.weak | warning.50 | #FFFBEB |
| surface.warning.default | warning.100 | #FEF3C7 |
| surface.warning.medium | warning.200 | #FDE68A |
| surface.warning.strong | warning.800 | #92400E |
| surface.danger.weak | danger.50 | #FEF2F2 |
| surface.danger.default | danger.100 | #FEE2E2 |
| surface.danger.medium | danger.200 | #FECACA |
| surface.danger.strong | danger.800 | #991B1B |

### Typography (text color)

| Semantic token | Resolves to | Hex |
|---|---|---|
| typography.neutral.weak | neutral.400 | #898C94 |
| typography.neutral.medium | neutral.600 | #565961 |
| typography.neutral.strong | neutral.900 | #1C1E26 |
| typography.neutral.muted | neutral.300 | #A2A6AE |
| typography.neutral.inverse | neutral.0 | #FFFFFF |
| typography.primary | primary.700 | #2A3E77 |
| typography.secondary | secondary.700 | #006B61 |
| typography.info | info.700 | #004DB3 |
| typography.success | success.700 | #15803D |
| typography.warning | warning.700 | #B45309 |
| typography.danger | danger.700 | #B91C1C |

### Border

| Semantic token | Resolves to | Hex |
|---|---|---|
| border.neutral.weak | neutral.50 | #EFF1F8 |
| border.neutral.default | neutral.100 | #E1E4EA |
| border.neutral.medium | neutral.200 | #BCC0C7 |
| border.neutral.muted | neutral.150 | #D2D5DC |
| border.neutral.strong | neutral.900 | #1C1E26 |
| border.neutral.inverse | neutral.0 | #FFFFFF |
| border.primary.weak | primary.100 | #C2CBE4 |
| border.primary.default | primary.200 | #A5B2D7 |
| border.primary.medium | primary.300 | #7C8FC4 |
| border.primary.strong | primary.800 | #20305C |
| border.secondary.weak | secondary.100 | #B0DEDA |
| border.secondary.default | secondary.200 | #8ACFC8 |
| border.secondary.medium | secondary.300 | #54B9AF |
| border.secondary.strong | secondary.800 | #00534B |
| border.info.weak | info.100 | #D6EAFF |
| border.info.default | info.200 | #ADD4FF |
| border.info.medium | info.300 | #75B8FF |
| border.info.strong | info.800 | #003A8A |
| border.success.weak | success.100 | #DCFCE7 |
| border.success.default | success.200 | #BBF7D0 |
| border.success.medium | success.300 | #86EFAC |
| border.success.strong | success.800 | #166534 |
| border.warning.weak | warning.100 | #FEF3C7 |
| border.warning.default | warning.200 | #FDE68A |
| border.warning.medium | warning.300 | #FCD34D |
| border.warning.strong | warning.800 | #92400E |
| border.danger.weak | danger.100 | #FEE2E2 |
| border.danger.default | danger.200 | #FECACA |
| border.danger.medium | danger.300 | #FCA5A5 |
| border.danger.strong | danger.800 | #991B1B |

### Icon

| Semantic token | Resolves to | Hex |
|---|---|---|
| icon.neutral.weak | neutral.400 | #898C94 |
| icon.neutral.medium | neutral.600 | #565961 |
| icon.neutral.strong | neutral.900 | #1C1E26 |
| icon.neutral.muted | neutral.300 | #A2A6AE |
| icon.neutral.inverse | neutral.0 | #FFFFFF |
| icon.primary | primary.500 | #3B58A7 |
| icon.secondary | secondary.500 | #009688 |
| icon.info | info.500 | #0A7AFF |
| icon.success | success.500 | #22C55E |
| icon.warning | warning.500 | #F59E0B |
| icon.danger | danger.500 | #EF4444 |

## Typography

Two typefaces, used for different jobs — don't mix their purpose:

- **Inter** — the workhorse. Use for UI, headings, and body copy. Legible at small sizes on screen.
- **Manrope** — display only. Use *only* for Display-level styles (marketing/hero headlines), never for
  body copy, form labels, or dense UI text.

Type styles (tokens in `assets/tokens.css`, `font` shorthand: weight size/line-height family):

| Token | Value |
|---|---|
| displayXl / displayLg / displayMd | 700 112/120, 56/64, 48/56 Manrope |
| headingLg / headingMd / headingSm | 600 40/56, 32/42, 24/34 Inter |
| titleMd / titleSm | 600 20/28, 18/25 Inter |
| subtitleMd / subtitleSm | 600 16/22, 14/20 Inter |
| bodyLg / bodyMd / bodySm | 400 20/28, 16/22, 14/20 Inter |
| labelMd / labelSm | 500 14/20, 12/17 Inter |
| captionMd / captionSm | 400 12/16, 10/14 Inter |
| overlineBase | 500 11/15 Inter |

OpenType features available in Inter (use selectively, not globally):

| Feature | Preview | When to use |
|---|---|---|
| Slashed zero | `10305` | Data points where 0 vs O ambiguity matters |
| Tabular figures | `1,234.50` | Tables, lists, anywhere numbers stack in columns |
| Standard ligatures | `fi fl ffi` | On by default, no action needed |

## Size, spacing, radius, elevation

Everything numeric is aliased from the `--size*` scale (2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72,
80, 96, 128, 160, 192, 224, 256, 320, 384, 512, 640, 768, `--sizeMax` 999).

| Group | Tokens | Maps to |
|---|---|---|
| Spacing | `--spacing4xs` … `--spacing9xl`, `--spacingMax` | 4xs=2, 3xs=4, 2xs=8, xs=12, sm=16, md=20, lg=24, xl=32, 2xl=40, 3xl=48, 4xl=56, 5xl=64, 6xl=80, 7xl=96, 8xl=128, 9xl=256 |
| Corner radius | `--border4xs` … `--border4xl`, `--borderFull` | 4xs=2, 3xs=4, 2xs=8, xs=12, sm=16, md=20, lg=24, xl=32, 2xl=40, 3xl=48, 4xl=56 |
| Component radius | `--radius-md` | 8px (what Button uses) |
| Elevation | `--level1` … `--level4` | soft shadows, 2/4/8/12px offset; white-alpha in dark theme |

Dark theme: set `data-theme="dark"` on `<html>`; neutrals invert and surface/link tokens switch.
