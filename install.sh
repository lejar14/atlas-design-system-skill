#!/bin/sh
# Install the Atlas design-system skill without Node.
#   curl -fsSL https://raw.githubusercontent.com/lejar14/atlas-design-system-skill/main/install.sh | sh -s -- [agent...] [-g] [--dir PATH]
# agent: claude | antigravity | windsurf | agents (Codex, Cursor, Gemini CLI, Copilot, OpenCode, ...) | all
# Default: agents, in the current project. -g installs for your user instead. --dir copies into PATH.
set -eu

REPO="lejar14/atlas-design-system-skill"
NAME="atlas-design-system"
global=0
dirs=""
agents=""

while [ $# -gt 0 ]; do
    case "$1" in
        -g|--global) global=1 ;;
        --dir) [ $# -ge 2 ] || { echo "--dir needs a path" >&2; exit 1; }; dirs="$dirs
$2"; shift ;;
        -h|--help) echo "usage: install.sh [claude|antigravity|windsurf|agents|all ...] [-g] [--dir PATH]"; exit 0 ;;
        claude|antigravity|windsurf|agents|all) agents="$agents $1" ;;
        *) echo "Unknown option or agent: $1" >&2; exit 1 ;;
    esac
    shift
done
[ -n "$agents$dirs" ] || agents="agents"
case " $agents " in *" all "*) agents="claude antigravity windsurf agents" ;; esac

for a in $agents; do
    if [ "$global" = 1 ]; then
        case "$a" in
            claude) d="$HOME/.claude/skills" ;;
            antigravity) d="$HOME/.gemini/config/skills" ;;
            windsurf) d="$HOME/.codeium/windsurf/skills" ;;
            agents) d="$HOME/.agents/skills" ;;
        esac
    else
        case "$a" in
            claude) d=".claude/skills" ;;
            windsurf) d=".windsurf/skills" ;;
            antigravity|agents) d=".agents/skills" ;;
        esac
    fi
    dirs="$dirs
$d"
done

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
curl -fsSL "https://codeload.github.com/$REPO/tar.gz/refs/heads/main" | tar -xz -C "$tmp"
src="$tmp/atlas-design-system-skill-main/skills/$NAME"
[ -f "$src/SKILL.md" ] || { echo "Download did not contain $NAME/SKILL.md" >&2; exit 1; }

echo "$dirs" | sort -u | while IFS= read -r d; do
    [ -n "$d" ] || continue
    mkdir -p "$d"
    rm -rf "${d:?}/$NAME"
    cp -R "$src" "$d/$NAME"
    echo "Installed $d/$NAME"
done
