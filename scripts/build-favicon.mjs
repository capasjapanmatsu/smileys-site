import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const source =
  "C:/Users/info/.cursor/projects/c-Users-info-project2/assets/c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_______-861ef03d-ed45-45a7-aec7-d2b598c3cd70.png";

const INK = 90;

async function cropSquare() {
  const { data, info } = await sharp(source).greyscale().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[y * w + x] < INK) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }
  const pad = Math.max(2, Math.round(Math.max(maxX - minX, maxY - minY) * 0.01));
  let left = Math.max(0, minX - pad);
  let top = Math.max(0, minY - pad);
  let right = Math.min(w - 1, maxX + pad);
  let bottom = Math.min(h - 1, maxY + pad);
  const cropW = right - left + 1;
  const cropH = bottom - top + 1;
  const size = Math.max(cropW, cropH);
  left = Math.max(0, Math.min(left - Math.floor((size - cropW) / 2), w - size));
  top = Math.max(0, Math.min(top - Math.floor((size - cropH) / 2), h - size));
  return { left, top, size };
}

/** Mild dilate: only expand already-dark pixels one step (won't blob like radius 2). */
function mildThicken(gray, w, h) {
  const out = Buffer.from(gray);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      if (gray[y * w + x] < 140) {
        out[y * w + x] = 0;
        continue;
      }
      // If adjacent to ink, become soft-dark
      let near = false;
      for (let dy = -1; dy <= 1 && !near; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (gray[(y + dy) * w + (x + dx)] < 100) near = true;
        }
      }
      if (near) out[y * w + x] = 40;
    }
  }
  return out;
}

function toRgbaOnWhite(gray, w, h) {
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    const g = gray[i];
    // Strong black on white: anything mid-gray becomes near-black
    const ink = g < 200 ? Math.round(g * 0.15) : 255;
    rgba[i * 4] = ink;
    rgba[i * 4 + 1] = ink;
    rgba[i * 4 + 2] = ink;
    rgba[i * 4 + 3] = 255;
  }
  return rgba;
}

function circleMask(rgba, size) {
  const cx = (size - 1) / 2;
  const cy = (size - 1) / 2;
  const radius = size / 2 - 0.35;
  const out = Buffer.from(rgba);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dist = Math.hypot(x - cx, y - cy);
      const o = (y * size + x) * 4;
      if (dist > radius + 0.6) {
        out[o + 3] = 0;
      } else if (dist > radius - 0.6) {
        const t = (radius + 0.6 - dist) / 1.2;
        out[o + 3] = Math.round(Math.min(255, Math.max(0, t * 255)));
      }
    }
  }
  return out;
}

async function exportIcon(masterRgba, masterSize, outSize, outPath, { thicken = false, opaque = false } = {}) {
  let gray = await sharp(masterRgba, {
    raw: { width: masterSize, height: masterSize, channels: 4 },
  })
    .resize(outSize, outSize, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .greyscale()
    .raw()
    .toBuffer();

  if (thicken) gray = mildThicken(gray, outSize, outSize);

  let rgba = toRgbaOnWhite(gray, outSize, outSize);
  if (!opaque) rgba = circleMask(rgba, outSize);

  let pipeline = sharp(rgba, { raw: { width: outSize, height: outSize, channels: 4 } });
  if (opaque) pipeline = pipeline.flatten({ background: "#ffffff" });
  await pipeline.png({ compressionLevel: 9 }).toFile(outPath);
}

async function main() {
  const { left, top, size } = await cropSquare();

  // High-contrast master (black lines on white)
  const { data, info } = await sharp(source)
    .extract({ left, top, width: size, height: size })
    .resize(1024, 1024, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .greyscale()
    .normalize()
    .linear(1.4, -30)
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Force near-binary contrast while keeping slight antialias
  const masterGray = Buffer.alloc(info.width * info.height);
  for (let i = 0; i < masterGray.length; i++) {
    const g = data[i];
    if (g < 150) masterGray[i] = Math.round(g * 0.2);
    else if (g < 210) masterGray[i] = Math.round(40 + (g - 150) * 0.5);
    else masterGray[i] = 255;
  }

  const masterRgba = toRgbaOnWhite(masterGray, info.width, info.height);
  const masterMasked = circleMask(masterRgba, info.width);

  await sharp(masterMasked, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, "favicon-master.png"));

  // Large sizes: contrast only
  await exportIcon(masterMasked, info.width, 192, path.join(publicDir, "favicon-192.png"));
  await exportIcon(masterMasked, info.width, 96, path.join(publicDir, "favicon-96.png"));
  // Small sizes: mild thicken for tab/SERP
  await exportIcon(masterMasked, info.width, 48, path.join(publicDir, "favicon-48.png"), { thicken: true });
  await exportIcon(masterMasked, info.width, 32, path.join(publicDir, "favicon.png"), { thicken: true });
  await exportIcon(masterMasked, info.width, 180, path.join(publicDir, "apple-touch-icon.png"), {
    opaque: true,
  });

  console.log("favicon contrast rebuild ok");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
