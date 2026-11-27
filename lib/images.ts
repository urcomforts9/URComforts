import fs from "fs";
import path from "path";

const IMAGE_FILE = /\.(jpe?g|png|webp|avif|gif)$/i;

// Reads /public/images/<slug>/ and returns every image in it
export function getPropertyImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_FILE.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((file) => `/images/${slug}/${encodeURIComponent(file)}`);
  } catch {
    return []; // folder missing or empty
  }
}