# Atlas Design System skill

Teaches AI coding agents (Claude Code, Cursor, Codex, Windsurf, Gemini, Copilot...) to build UI in [Atlas](https://atlas-design-system-theta.vercel.app), the ASYST design system: colors, type, spacing, dark mode, the official Button, and the style for every other component.

## Install (one line, open a terminal in your project folder)

```bash
npx skills add lejar14/atlas-design-system-skill
```

Needs Node 18+. It asks which agent you use; press Enter. Without Node:

```bash
curl -fsSL https://raw.githubusercontent.com/lejar14/atlas-design-system-skill/main/install.sh | sh
```

Add `-g` after `sh -s --` for all your projects instead of this one.

## Use

Just ask your agent in plain words. It sets up the tokens on first use.

- "Bikin halaman login pakai Atlas"
- "Buatkan dashboard admin dengan design system Atlas"
- "Tambah komponen badge dan alert sesuai Atlas"

## What is included

| File | What |
|---|---|
| `skills/atlas-design-system/SKILL.md` | The skill: setup, workflow, foundations summary, completion checklist |
| `assets/tokens.css` | All Atlas variables (color, type, spacing, dark theme) |
| `assets/button.tsx`, `utils.ts` | Official Button and the `cn()` helper |
| `references/components/*.md` | One page per Atlas component, copied from the site: anatomy, states, props, Do/Don't, accessibility |
| `references/foundations/*.md`, `changelog.md` | Typography, sizing and spacing, elevation, icons, avatar, and the site changelog |
| `references/colors-and-tokens.md` | Full color tables, read only when needed |
| `scripts/check.sh` | Checker the agent runs before finishing: setup, Button and tokens files, token bypasses, static HTML |

Only Button has official source on the Atlas site. The other components are built by the agent from their spec pages in `references/components/`.

## Update the skill (maintainers)

Refresh `references/` from the live site (components, foundations, changelog): `node skills/atlas-design-system/scripts/sync-from-site.mjs`, then review the diff.

1. Edit files in `skills/atlas-design-system/`. If the site changed, re-extract tokens from its CSS (`/_next/static/chunks/*.css`) into `tokens.css` and `colors-and-tokens.md`.
2. `git add -A && git commit -m "What changed and why" && git push`
3. Users run `npx skills update` (or the install command again).
