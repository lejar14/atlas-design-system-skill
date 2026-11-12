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
| `skills/atlas-design-system/SKILL.md` | Short rules the agent always reads |
| `assets/tokens.css` | All Atlas variables (color, type, spacing, dark theme) |
| `assets/button.tsx`, `utils.ts` | Official Button and the `cn()` helper |
| `references/colors-and-tokens.md` | Full color tables, read only when needed |

Only Button has official source on the Atlas site. The other components are built by the agent in the same style.

## Update the skill (maintainers)

1. Edit files in `skills/atlas-design-system/`. If the site changed, re-extract tokens from its CSS (`/_next/static/chunks/*.css`) into `tokens.css` and `colors-and-tokens.md`.
2. `git add -A && git commit -m "What changed and why" && git push`
3. Users run `npx skills update` (or the install command again).
