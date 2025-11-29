// src/scripts/optimize-images.mjs
//
// Whisperyn Image Optimizer – FIXED
// ----------------------------------
// This version works with glob@13 and properly scans WEBP source images.
//
// Run:
//   npm run optimize:images

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { glob } from "glob";

// DIRECTORIES WHERE YOUR IMAGES ACTUALLY LIVE
const INPUT_DIRS = ["src/assets/images", "src/creators/kara/assets"];

// ALLOWED SOURCE FORMATS (Option C)
const INPUT_EXTS = ["png", "jpg", "jpeg", "webp", "PNG", "JPG", "JPEG", "WEBP"];

// RESPONSIVE WIDTHS
const TARGET_WIDTHS = [1920, 1600, 1280, 1024, 768];

/* Utility */
function exists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function buildOutputPath(inputPath, width, ext) {
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, path.extname(inputPath));
  return path.join(dir, `${base}-${width}w${ext}`);
}

/* Process single image */
async function processImage(filePath) {
  console.log(`\nProcessing: ${filePath}`);

  const ext = path.extname(filePath).toLowerCase();

  // Skip AVIF originals
  if (ext === ".avif") {
    console.log("  · Skipped (AVIF originals not processed)");
    return;
  }

  const buffer = fs.readFileSync(filePath);
  const image = sharp(buffer);
  const metadata = await image.metadata();
  const originalWidth = metadata.width || 0;

  for (const width of TARGET_WIDTHS) {
    if (originalWidth && width > originalWidth) continue;

    // AVIF
    const avifOut = buildOutputPath(filePath, width, ".avif");
    if (!exists(avifOut)) {
      console.log(`  → AVIF  ${width}w`);
      await image
        .resize({ width })
        .avif({ quality: 45, effort: 4 })
        .toFile(avifOut);
    }

    // WEBP
    const webpOut = buildOutputPath(filePath, width, ".webp");
    if (!exists(webpOut)) {
      console.log(`  → WebP ${width}w`);
      await image.resize({ width }).webp({ quality: 70 }).toFile(webpOut);
    }
  }
}

/* Main */
async function main() {
  console.log("🖼 Whisperyn Image Optimizer (FIXED)\n");

  let allFiles = [];

  for (const dir of INPUT_DIRS) {
    const pattern = `${dir.replace(/\\/g, "/")}/**/*.{${INPUT_EXTS.join(",")}}`;

    console.log(`Scanning: ${pattern}`);

    const found = await glob(pattern, { nodir: true });

    if (found.length === 0) {
      console.log(`  ⚠ No images found in: ${dir}`);
    } else {
      console.log(`  ✔ Found ${found.length} file(s) in ${dir}`);
    }

    allFiles.push(...found);
  }

  if (allFiles.length === 0) {
    console.log("\n❗ No source images found anywhere.\n");
    return;
  }

  console.log(`\nTotal images to process: ${allFiles.length}`);

  for (const file of allFiles) {
    try {
      await processImage(file);
    } catch (err) {
      console.error(`  ✖ Error processing ${file}:`, err.message);
    }
  }

  console.log("\n✅ Done! Images optimized successfully.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
