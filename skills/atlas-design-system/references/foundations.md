# Foundations (verify values in `node_modules/@asyst/atlas/dist/tokens.css`)

- **Type**: composite tokens, use as `[font:var(--bodySm)]`. Display (Manrope 700): `--displayXl/Lg/Md`. Inter 600: `--headingLg/Md/Sm`, `--titleMd/Sm`, `--subtitleMd/Sm`. Inter 400: `--bodyLg/Md/Sm`, `--captionMd/Sm`. Inter 500: `--labelMd/Sm`, `--overlineBase`. Sizes run 10, 11, 12, 14, 16, 18, 20, 24, 32, 40, 48, 56, 112px; Inter weights are only 400/500/600, so never `font-bold` outside Manrope Display.
- **Spacing** (8pt grid): `--spacing4xs`=2, `3xs`=4, `2xs`=8, `Xs`=12, `Sm`=16, `Md`=20, `Lg`=24, `Xl`=32, `2xl`=40 ... `9xl`=256px. Sizes: `--size*`.
- **Radius**: `--border3xs`=4, `--border2xs`=8 (component default, same as `--radius-md`), `--borderXs`=12, `--borderSm`=16, `--borderFull`=999px.
- **Elevation**: `--level1` cards/panels, `--level2` dropdowns, `--level3` popovers/tooltips, `--level4` modals/dialogs. Level 0 is flat. No other shadows.
- **Color**: prefer semantic tokens (`--surface-base`, `--surface-raised`, `--foreground`, `--text-link`) over raw steps. Status colors: info, success, warning, danger. White on filled surfaces is `--neutral0`. Atlas has no gradient tokens yet, so use solid `--primary500`.
- **Avatar**: "Initial" type is a filled circle, white semibold initials, background `--{neutral|primary|info|success|danger|warning}500`, sizes 16/20/24/32/40/48/56/64/72/80px with font 9/9/9/10/13/15/18/20/23/26px. Icon, Logo, Memoji and Picture types also exist.
- **Icons**: lucide-react (`size`, `strokeWidth` props). Flags are SVGs, never emoji.
