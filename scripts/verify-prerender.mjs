// Netlify serves 404.html for any path without a static file (no SPA fallback),
// so every sitemap route must be prerendered or it becomes a hard 404 in production.
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const sitemap = readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]));

const errors = [];
for (const loc of locs) {
  const file = path.join(dist, decodeURIComponent(loc.pathname), "index.html");
  if (!existsSync(file)) {
    errors.push(`missing prerendered HTML for ${loc.pathname}`);
    continue;
  }
  const canonicalTag = readFileSync(file, "utf8").match(/<link[^>]*rel="canonical"[^>]*>/)?.[0] ?? "";
  if (!canonicalTag.includes(`href="${loc.href}"`)) {
    errors.push(`canonical mismatch in ${loc.pathname}`);
  }
}

const notFound = path.join(dist, "404.html");
if (!existsSync(notFound) || !readFileSync(notFound, "utf8").includes("ページが見つかりません")) {
  errors.push("404.html is missing or was not prerendered with NotFoundPage");
}

if (errors.length) {
  console.error(`verify-prerender: ${errors.length} problem(s)\n` + errors.join("\n"));
  process.exit(1);
}
console.log(`verify-prerender: ${locs.length} routes + 404.html OK`);
