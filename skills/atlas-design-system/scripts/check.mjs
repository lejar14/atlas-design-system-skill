#!/usr/bin/env node
// Atlas rule checker. Run from the project root: node <skill folder>/scripts/check.mjs [project-root]
// Prints each violation as file:line: [rule] text and exits 1; prints OK and exits 0 when clean.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.argv[2] || ".";
const skip = new Set(["node_modules", ".next", ".git", ".agents", ".claude", "dist", "out", "coverage"]);
const exts = /\.(tsx|ts|jsx|css|html)$/;
const files = [];
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!skip.has(e.name)) walk(join(d, e.name)); }
    else if (exts.test(e.name) && !e.name.endsWith(".d.ts")) files.push(join(d, e.name));
  }
})(root);

const palette = "white|black|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";
const rules = [
  ["color-hex", /#[0-9A-Fa-f]{3,8}(?![0-9A-Za-z_-])/],
  ["color-fn", /(rgba?|hsla?|oklch|oklab)\(/],
  ["color-palette", new RegExp(`(^|[^A-Za-z0-9_-])(bg|text|border|ring|fill|stroke|from|to|via|divide|outline|decoration|accent|caret)-(${palette})([-/][0-9]+)?`)],
  ["emoji-icon", /[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}]/u],
];
const rawControl = /<(button|input|textarea|select)([\s>/]|$)/;

const out = new Set();
const cssFiles = [];
// Token names that exist: the package's tokens.css plus any custom property the project defines itself.
const tokensPath = join(root, "node_modules/@asyst/atlas/dist/tokens.css");
const known = new Set(existsSync(tokensPath) ? readFileSync(tokensPath, "utf8").match(/--[\w-]+(?=\s*:)/g) : []);
const checkTokens = known.size > 0;
for (const f of files) {
  for (const m of readFileSync(f, "utf8").matchAll(/(--[\w-]+)\s*:/g)) known.add(m[1]);
}
for (const f of files) {
  const rel = relative(root, f);
  if (f.endsWith(".html")) out.add(`${rel}: [static-html] deliverable must be a Next.js page, not a static HTML file`);
  const text = readFileSync(f, "utf8");
  if (f.endsWith(".css")) cssFiles.push(text);
  text.split("\n").forEach((raw, i) => {
    const line = raw.replace(/href=\{?["'][^"']*["']/g, ""); // "#section" anchors are not colors
    const hit = (rule) => out.add(`${rel}:${i + 1}: [${rule}] ${raw.trim().slice(0, 160)}`);
    for (const [name, re] of rules) if (re.test(line)) hit(name);
    if (checkTokens) for (const m of line.matchAll(/var\((--[\w-]+)/g))
      if (!known.has(m[1]) && !m[1].startsWith("--tw-")) hit(`unknown-token ${m[1]}`);
    if (/\.(tsx|jsx|html)$/.test(f) && rawControl.test(line)) hit("raw-control");
  });
}

const pkgPath = join(root, "package.json");
if (!existsSync(pkgPath)) {
  out.add("package.json: [setup] not found here; run from the project root (the folder with package.json)");
} else {
  const pkg = readFileSync(pkgPath, "utf8");
  for (const dep of ["next", "tailwindcss", "@asyst/atlas"])
    if (!pkg.includes(`"${dep}"`)) out.add(`package.json: [setup] dependency ${dep} missing (see SKILL.md)`);
}
const atlas = join(root, "node_modules/@asyst/atlas");
if (!existsSync(join(atlas, "dist"))) out.add("node_modules/@asyst/atlas: [setup] not installed or has no dist/");
else if (!existsSync(join(atlas, "dist/llms.txt"))) out.add("node_modules/@asyst/atlas/dist/llms.txt: [setup] missing, package build is incomplete");
if (cssFiles.length) {
  if (!cssFiles.some((t) => t.includes("@asyst/atlas/tokens.css"))) out.add('global css: [setup] missing @import "@asyst/atlas/tokens.css" (before tailwindcss)');
  if (!cssFiles.some((t) => /@source.*@asyst\/atlas/.test(t))) out.add("global css: [setup] missing @source to node_modules/@asyst/atlas/dist, Tailwind will not see the package classes");
}

if (out.size) {
  console.log([...out].sort().join("\n") + `\n\n${out.size} violation(s). Fix them and run this check again.`);
  process.exit(1);
}
console.log("OK");
