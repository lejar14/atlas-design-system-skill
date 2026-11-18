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
| `skills/atlas-design-system/SKILL.md` | Instructions: install `@asyst/atlas`, CSS setup (`@source` is mandatory), read `llms.txt`, import components, checklist |
| `references/foundations/*.md`, `changelog.md` | Typography, sizing, elevation, icons, avatar, site changelog |
| `scripts/check.mjs` | Node checker (works on Linux, macOS, Windows) run before finishing: package installed and wired, raw controls, hex and palette colors, unknown token names |

No component code lives here. Components, tokens and `llms.txt` ship in the package `@asyst/atlas` (repo `lejar14/atlas-design-system`), installed from GitHub: `npm i github:lejar14/atlas-design-system#semver:^0.1.0`.

## Update

- Instructions or foundations changed: edit `skills/atlas-design-system/`, commit, push. Projects rerun `npx skills add lejar14/atlas-design-system-skill`.
- Components or tokens changed: nothing here. Release the package; projects bump it.
