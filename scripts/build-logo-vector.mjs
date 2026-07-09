import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import potrace from "potrace";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const SOURCE_PNG =
  "C:/Users/info/.cursor/projects/c-Users-info-project2/assets/c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_image-1f389f93-2216-49a4-bc4d-c3bb87ae6144.png";

const RATIO = 876 / 460;
const TRACE_WIDTH = 3504;
const TRACE_HEIGHT = Math.round(TRACE_WIDTH / RATIO);

async function loadSource() {
  try {
    await fs.access(SOURCE_PNG);
    return sharp(SOURCE_PNG);
  } catch {
    return sharp(path.join(publicDir, "logo.webp"));
  }
}

async function prepareTraceBitmap(input) {
  const traceInput = path.join(publicDir, "_logo-trace-input.png");
  await input
    .resize(TRACE_WIDTH, TRACE_HEIGHT, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .flatten({ background: "#ffffff" })
    .trim({ threshold: 12 })
    .extend({
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
      background: "#ffffff",
    })
    .greyscale()
    .gamma(1.05)
    .linear(1.15, -20)
    .threshold(205)
    .png()
    .toFile(traceInput);

  const meta = await sharp(traceInput).metadata();
  return { traceInput, width: meta.width, height: meta.height };
}

function traceToSvg(traceInput, options) {
  return new Promise((resolve, reject) => {
    potrace.trace(traceInput, options, (err, svg) => {
      if (err) reject(err);
      else resolve(svg);
    });
  });
}

function finalizeSvg(rawSvg) {
  const width = Number(rawSvg.match(/width="(\d+)"/)?.[1] ?? TRACE_WIDTH);
  const height = Number(rawSvg.match(/height="(\d+)"/)?.[1] ?? TRACE_HEIGHT);
  const pathTag = rawSvg.match(/<path[\s\S]*?\/>/)?.[0] ?? "";

  const path = pathTag
    .replace(/fill="[^"]*"/i, "")
    .replace("<path", '<path fill="#111111"');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-labelledby="logoTitle logoDesc">
  <title id="logoTitle">Smiley's Sammy Smile Kennel</title>
  <desc id="logoDesc">Vector logo traced from official artwork</desc>
  <g id="logo-mark" fill="#111111" fill-rule="evenodd">
    ${path}
  </g>
</svg>`;
}

async function exportPng(svgPath, outPath, width) {
  const meta = await sharp(svgPath).metadata();
  const height = Math.round((width * meta.height) / meta.width);
  await sharp(svgPath, { density: 300 })
    .resize(width, height, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

async function main() {
  const input = await loadSource();
  const { traceInput, width, height } = await prepareTraceBitmap(input);

  const rawSvg = await traceToSvg(traceInput, {
    color: "#111111",
    background: "transparent",
    turdSize: 8,
    optCurve: true,
    optTolerance: 0.12,
    alphaMax: 1.0,
    threshold: 128,
    turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
  });

  const vectorSvg = path.join(publicDir, "logo-vector.svg");
  const finalSvg = finalizeSvg(rawSvg);
  await fs.writeFile(vectorSvg, finalSvg, "utf8");

  await exportPng(vectorSvg, path.join(publicDir, "logo-vector-print.png"), TRACE_WIDTH);
  await exportPng(vectorSvg, path.join(publicDir, "logo-vector-hires.png"), 2628);

  await fs.unlink(traceInput);

  const stats = await Promise.all([
    fs.stat(vectorSvg),
    fs.stat(path.join(publicDir, "logo-vector-print.png")),
    fs.stat(path.join(publicDir, "logo-vector-hires.png")),
  ]);

  console.log(
    JSON.stringify({
      traceSize: `${width}x${height}`,
      svgBytes: stats[0].size,
      printBytes: stats[1].size,
      hiresBytes: stats[2].size,
    }),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
