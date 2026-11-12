// Refreshes references/ from the live Atlas site. Maintainers run: node scripts/sync-from-site.mjs
// The site renders its tab panels (anatomy, usage, accessibility) from the Next.js flight payload, so the text is read from there.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const base = "https://atlas-design-system-theta.vercel.app";
const out = join(dirname(fileURLToPath(import.meta.url)), "..", "references");
mkdirSync(join(out, "components"), { recursive: true });
mkdirSync(join(out, "foundations"), { recursive: true });
const pages = ["/", "/changelog", "/foundations/avatar", "/foundations/elevation", "/foundations/icons", "/foundations/sizing", "/foundations/typography", "/components/alert-toast", "/components/badge", "/components/breadcrumbs", "/components/button", "/components/checkbox", "/components/chips", "/components/date-picker", "/components/dropdown", "/components/input", "/components/progress", "/components/radio-button", "/components/spinner", "/components/switch", "/components/tooltip", "/components/uploader"];
const HEAD = new Set(["h1","h2","h3","h4"]);
const flights = new Map();
for (const p of pages) {
  const html = await (await fetch(base + p)).text();
  const chunks = [...html.matchAll(/self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g)].map((m) => JSON.parse(`"${m[1]}"`));
  const rows = new Map();
  for (const line of chunks.join("").split("\n")) {
    const m = /^([0-9a-f]+):(.*)$/.exec(line);
    if (!m) continue;
    try { rows.set(m[1], JSON.parse(m[2])); } catch {}
  }
  const out = [];
  const seen = new Set();
  const walk = (n, depth = 0) => {
    if (n == null || n === false || depth > 60) return;
    if (typeof n === "string") {
      const ref = /^\$L([0-9a-f]+)$/.exec(n);
      if (ref) { if (!seen.has(ref[1]) && rows.has(ref[1])) { seen.add(ref[1]); walk(rows.get(ref[1]), depth + 1); } return; }
      if (!n.startsWith("$")) out.push(n);
      return;
    }
    if (Array.isArray(n)) {
      if (n[0] === "$" && typeof n[1] === "string") {
        const [, tag, key, props] = n;
        if (HEAD.has(tag)) out.push("\n#".repeat(1) + "#".repeat(Number(tag[1])) + " ");
        if (tag === "li") out.push("\n- ");
        if (tag === "pre") out.push("\n```\n"); if (tag === "code") out.push("`");
        if (tag === "tr") out.push("\n| ");
        if (tag === "td" || tag === "th") out.push(" | ");
        if (["p","div","section","ul","figcaption"].includes(tag)) out.push("\n");
        if (props && typeof props === "object") {
          if (props["aria-label"]) out.push(` [aria-label: ${props["aria-label"]}] `);
          walk(props.children, depth + 1);
        }
        if (tag === "pre") out.push("\n```\n"); if (tag === "code") out.push("`");
      } else for (const c of n) walk(c, depth + 1);
      return;
    }
  };
  for (const [id, v] of rows) if (!seen.has(id)) { /* only walk roots reachable via refs */ }
  // walk every row so panels referenced anywhere are included, in id order of first appearance
  for (const [id, v] of rows) { if (!seen.has(id)) { seen.add(id); walk(v); } }
  const text = out.join("").replace(/[ \t]+/g, " ").replace(/\n\s*\n+/g, "\n").trim();
  flights.set(p === "/" ? "index" : p.slice(1).replace(/\//g, "__"), text);
}

const DROP = new Set(["Helper Text", "Atlas — ASYST Design System", "Components", "Foundations"]);
function sections(lines) {
  const o = [];
  let afterDont = false, a11y = false, anatomy = false;
  for (const l of lines) {
    if (!anatomy && l === "- 1") { o.push("## Anatomy"); anatomy = true; }
    if (l === "Do") { o.push("## Usage guidelines", "### Do"); continue; }
    if (l === "Don't") { o.push("### Don't"); afterDont = true; continue; }
    if (afterDont && !a11y && l.startsWith("- ") && !l.startsWith("- Don't")) { o.push("## Accessibility"); a11y = true; }
    o.push(l);
  }
  return o;
}
function collapse(lines) {
  const out = [];
  const isDemo = (l) => l.length < 32 && !/[.:—]/.test(l) && !l.startsWith("#") && !l.startsWith("- ") && l !== "Do" && l !== "Don't";
  for (let i = 0; i < lines.length;) {
    let j = i;
    while (j < lines.length && isDemo(lines[j])) j++;
    if (j - i >= 5) { out.push(`[state demo omitted: ${(() => { const u = [...new Set(lines.slice(i, j))]; return u.length > 24 ? `${u.slice(0, 24).join(" / ")} / (+${u.length - 24} more)` : u.join(" / "); })()}]`); i = j; } else { out.push(lines[i]); i++; }
  }
  return out;
}
for (const [name, flightText] of flights) {
  if (!/^(components__|foundations__|changelog)/.test(name) || name === "foundations__color") continue;
  const lines = flightText.split("\n");
  const start = lines.findIndex((l) => /^## /.test(l) && !/could not be found/.test(l));
  const body = lines.slice(start === -1 ? 0 : start).filter((l) => !DROP.has(l.trim())).filter((l, i, a) => l !== a[i - 1]);
  const dest = name === "changelog" ? `${out}/changelog.md` : `${out}/${name.replace("__", "/")}.md`;
  const text = sections(collapse(body)).join("\n").replace(/^## /, "# ").replace(/\n{3,}/g, "\n\n").trim();
  writeFileSync(dest, `${text}\n`);
  console.log(dest.replace(out + "/", ""), text.length);
}
