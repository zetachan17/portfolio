import { mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import sharp from "sharp";

const inputDir = process.argv[2];

if (!inputDir) {
  console.error("Usage: node scripts/optimize-images.mjs <input-dir>");
  process.exit(1);
}

const outDir = resolve("public/images");
mkdirSync(outDir, { recursive: true });

const jobs = [
  ["aboutme.jpg", "about.webp", 900],
  ["jumpinjazzcats.jpg", "jumpinjazzcats.webp", 1600],
  ["IronMan.jpg", "ironman.webp", 1600],
  ["Imminent.png", "imminent.webp", 1600],
  ["spacerider2.jpg", "spaceriders.webp", 1600],
  ["spacerider1.png", "spaceriders-1.webp", 1600],
  ["rootin4yacover.png", "rootin4ya.webp", 1600],
  ["rootin4yagroup.jpg", "rootin4ya-team.webp", 1200],
  ["shadows.png", "shadows.webp", 1600],
  ["kittyandkaty.png", "kittyandkaty.webp", 1600],
];

for (const [src, dest, width] of jobs) {
  const sourcePath = resolve(inputDir, src);
  const destPath = join(outDir, dest);
  const info = await sharp(sourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);
  console.log(`${dest}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB`);
}

console.log(`\nDone. Optimized images written to ${outDir}`);
