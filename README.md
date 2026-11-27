# Atlas Design System skill

Teaches AI coding agents (Claude Code, Cursor, Codex, ...) to build UI with [Atlas](https://atlas-design-system-theta.vercel.app), the ASYST design system, by importing components from `@asyst/atlas`.

## Install (Claude Code plugin, recommended)

In Claude Code, run:

```
/plugin marketplace add lejar14/atlas-design-system-skill
/plugin install atlas-design-system@atlas
```

Done in seconds: no Node, no `npx`, no script runs on install, nothing is written into your project. Plugin files only contain Markdown and a read-only checker. Install once, works in every project.

Update: `/plugin marketplace update atlas`. Remove: `/plugin uninstall atlas-design-system@atlas`.

### Other agents (Cursor, Codex, ...)

```bash
npx skills add lejar14/atlas-design-system-skill
```

## Use

Ask in plain words: "Bikin halaman login pakai Atlas", "Tambah badge dan alert sesuai Atlas". The agent sets up tokens on first use.

## Contents

| File | What |
|---|---|
| `skills/atlas-design-system/SKILL.md` | Setup, workflow, rules for gaps, done-checklist |
| `references/foundations.md` | Type, spacing, radius, elevation, color, avatar, icons |
| `.claude-plugin/` | Plugin + marketplace manifest |
| `scripts/check.mjs` | Read-only Node checker run before finishing (no network, no writes) |

No component code lives here; components, tokens and `llms.txt` ship in `@asyst/atlas` (repo `lejar14/atlas-design-system`).

## Update

Edit `skills/atlas-design-system/`, bump `version` in `.claude-plugin/plugin.json`, commit, push. Users run `/plugin marketplace update atlas` (or rerun `npx skills add`). Component or token changes belong in the package.
