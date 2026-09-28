// vite-plugin-sitemap strips trailing slashes from routes (path.parse), so align
// sitemap <loc> values with the trailing-slash canonical URLs after the build.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = path.join(root, "dist", "sitemap.xml");

const xml = await readFile(sitemapPath, "utf8");
const normalized = xml.replace(/<loc>([^<]+)<\/loc>/g, (_, loc) => {
  const url = new URL(loc);
  const isFile = /\.[a-z0-9]+$/i.test(url.pathname);
  if (!isFile && !url.pathname.endsWith("/")) url.pathname += "/";
  return `<loc>${url.href}</loc>`;
});

await writeFile(sitemapPath, normalized, "utf8");
