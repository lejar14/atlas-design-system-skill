#!/bin/sh
# Atlas rule checker. Run from the project root: sh <skill folder>/scripts/check.sh [project-root]
# Prints every violation as file:line: [rule] text and exits 1; prints OK and exits 0 when clean.
# Checks only what the Atlas site makes objective: setup, tokens and Button files, token bypasses.
# The Do/Don't and accessibility lists in references/components/ are checked by hand (see SKILL.md).
set -u
skill_dir=$(cd "$(dirname "$0")/.." && pwd)
cd "${1:-.}" || exit 2
out=$(mktemp)
trap 'rm -f "$out"' EXIT

files=$(find . \( -path ./node_modules -o -path ./.next -o -path ./.git -o -path ./.agents -o -path ./.claude -o -path ./dist -o -path ./out -o -path ./coverage \) -prune -o \
    -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.css' -o -name '*.html' \) -print |
    grep -v -e '/src/styles/tokens\.css$' -e '/src/components/ui/button\.tsx$' -e '\.d\.ts$' | sort)

# scan <rule> <grep -E pattern>; href attributes are blanked first so "#section" anchors are not read as hex colors
scan() {
    [ -n "$files" ] || return 0
    printf '%s\n' "$files" | tr '\n' '\0' | xargs -0 grep -nH '' 2>/dev/null |
        sed -E "s/href=\{?[\"'][^\"']*[\"']//g" | grep -E -e "$2" |
        sed "s|^\./||; s|^\([^:]*:[0-9]*\):\(.*\)|\1: [$1] \2|" | cut -c1-200 >>"$out"
}

scan color-hex '#[0-9A-Fa-f]{3,8}([^0-9A-Za-z_-]|$)'
scan color-fn '(rgba?|hsla?|oklch|oklab)\('
scan color-palette '(^|[^A-Za-z0-9_-])(bg|text|border|ring|fill|stroke|from|to|via|divide|outline|decoration|accent|caret)-(white|black|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)([-/][0-9]+)?'
# Emoji as UTF-8 bytes in the C locale: U+1F000-1FFFF (F0 9F ..) and U+2600-27BF (E2 98..9E ..); locale-independent.
( LC_ALL=C; export LC_ALL; scan emoji-icon "$(printf '\360\237')|$(printf '\342')[$(printf '\230')-$(printf '\236')]" )

for f in $(printf '%s\n' "$files" | grep '\.html$'); do
    printf '%s: [static-html] deliverable must be a Next.js page, not a static HTML file\n' "${f#./}" >>"$out"
done

[ -f src/styles/tokens.css ] || echo "src/styles/tokens.css: [setup] missing, copy assets/tokens.css" >>"$out"
[ -f src/lib/utils.ts ] || echo "src/lib/utils.ts: [setup] missing, copy assets/utils.ts" >>"$out"
if [ -f src/components/ui/button.tsx ]; then
    cmp -s src/components/ui/button.tsx "$skill_dir/assets/button.tsx" ||
        echo "src/components/ui/button.tsx: [setup] differs from assets/button.tsx, it must be verbatim" >>"$out"
else
    echo "src/components/ui/button.tsx: [setup] missing, copy assets/button.tsx" >>"$out"
fi
[ -f src/styles/tokens.css ] && ! cmp -s src/styles/tokens.css "$skill_dir/assets/tokens.css" &&
    echo "src/styles/tokens.css: [setup] differs from assets/tokens.css, do not edit tokens" >>"$out"
for dep in '"next"' '"tailwindcss"' '"clsx"' '"tailwind-merge"' '"lucide-react"'; do
    grep -q "$dep" package.json 2>/dev/null || echo "package.json: [setup] dependency $dep missing" >>"$out"
done
for f in $(printf '%s\n' "$files" | grep '\.css$'); do
    if grep -q '@import.*tailwindcss' "$f"; then
        t=$(grep -n 'tokens\.css' "$f" | head -1 | cut -d: -f1)
        w=$(grep -n '@import.*tailwindcss' "$f" | head -1 | cut -d: -f1)
        { [ -n "$t" ] && [ "$t" -lt "$w" ]; } || echo "${f#./}: [setup] import tokens.css before tailwindcss" >>"$out"
    fi
done

if [ -s "$out" ]; then
    sort -u "$out"
    printf '\n%s violation(s). Fix them and run this check again.\n' "$(sort -u "$out" | wc -l | tr -d ' ')"
    exit 1
fi
echo OK
