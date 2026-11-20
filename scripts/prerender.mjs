import { createReadStream } from "node:fs";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
const config = packageJson.prerender ?? {};
const dist = path.join(root, config.source ?? "dist");
const routes = [...new Set([...(config.include ?? []), "/404.html"])];
const puppeteerArgs = config.puppeteerArgs ?? [];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

const indexHtml = path.join(dist, "index.html");
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", "http://127.0.0.1");
    const pathname = decodeURIComponent(url.pathname);
    const requested = path.normalize(path.join(dist, pathname));

    if (!requested.startsWith(dist)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    let filePath = requested;
    const fileStat = await stat(filePath).catch(() => null);
    if (fileStat?.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    } else if (!fileStat && (!path.extname(pathname) || pathname === "/404.html")) {
      filePath = indexHtml;
    }

    let resolvedStat = await stat(filePath).catch(() => null);
    if (!resolvedStat && (!path.extname(pathname) || pathname === "/404.html")) {
      filePath = indexHtml;
      resolvedStat = await stat(filePath).catch(() => null);
    }
    if (!resolvedStat?.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] ?? "application/octet-stream",
    });
    createReadStream(filePath).pipe(res);
  } catch (error) {
    res.writeHead(500);
    res.end(error instanceof Error ? error.message : "Internal server error");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const address = server.address();
const origin = `http://127.0.0.1:${address.port}`;

const browser = await puppeteer.launch({ args: puppeteerArgs });
try {
  const page = await browser.newPage();
  page.setDefaultTimeout(30000);

  for (const route of routes) {
    const response = await page.goto(`${origin}${route}`, { waitUntil: "networkidle0" });
    if (!response?.ok()) {
      throw new Error(`failed to prerender ${route}: HTTP ${response?.status() ?? "unknown"}`);
    }

    await page.waitForFunction(() => document.querySelector("#root")?.textContent?.trim());
    const html = await page.content();
    const outputPath =
      route === "/404.html"
        ? path.join(dist, "404.html")
        : path.join(dist, route.replace(/^\/+/, ""), "index.html");

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, "utf8");
    console.log(`prerender: ${route}`);
  }
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
