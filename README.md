# Atlas Design System skill

Agent skill for [Atlas](https://atlas-design-system-theta.vercel.app), the ASYST design system (PT. Aero Systems Indonesia). It gives coding agents (Claude Code, Cursor, Codex, omp and others) Atlas's tokens, typography, dark mode and component APIs, so the UI they generate stays consistent with Atlas.

## Install

```bash
npx skills add lejar14/atlas-design-system-skill
```

Add `-g` to install for every project, or `-a claude-code` to choose the agent. Update later with `npx skills update`.

## Contents

- `skills/atlas-design-system/SKILL.md`: rules the agent follows
- `assets/tokens.css`: Atlas tokens (light + dark), copied from the live site
- `assets/button.tsx`, `assets/utils.ts`: official Button and `cn()`
- `references/`: color tables, type scale, spacing/radius/elevation, usage API for all 15 components
