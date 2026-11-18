# Atlas Design System skill

Teaches AI coding agents (Claude Code, Cursor, Codex, ...) to build UI with [Atlas](https://atlas-design-system-theta.vercel.app), the ASYST design system, by importing components from `@asyst/atlas`.

## Install (in your project folder, Node 18+)

```bash
npx skills add lejar14/atlas-design-system-skill
```

Use `-a claude-code` to target Claude Code, `-g` for all projects.

## Use

Ask in plain words: "Bikin halaman login pakai Atlas", "Tambah badge dan alert sesuai Atlas". The agent sets up tokens on first use.

## Contents

| File | What |
|---|---|
| `skills/atlas-design-system/SKILL.md` | Setup, workflow, rules for gaps, done-checklist |
| `references/foundations.md` | Type, spacing, radius, elevation, color, avatar, icons |
| `scripts/check.mjs` | Read-only Node checker run before finishing (no network, no writes) |

No component code lives here; components, tokens and `llms.txt` ship in `@asyst/atlas` (repo `lejar14/atlas-design-system`).

## Update

Edit `skills/atlas-design-system/`, commit, push; projects rerun `npx skills add`. Component or token changes belong in the package.
