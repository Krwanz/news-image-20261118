// news-image-20261118 — copies the entry image to the output directory.
// Node 22, standard library only, no network. The image is a JPEG named
// entry.png (the rules let the file be a PNG or a JPEG, told apart by its
// first bytes, while the name stays entry.png).
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1048576;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const JPEG_MAGIC = Buffer.from([0xff, 0xd8, 0xff]);

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const bytes = readFileSync(source);
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
}
const isPng = bytes.subarray(0, 8).equals(PNG_MAGIC);
const isJpeg = bytes.subarray(0, 3).equals(JPEG_MAGIC);
if (!isPng && !isJpeg) {
  throw new Error("entry.png is neither a whole PNG nor a whole JPEG");
}
// Whole-image check, as the gate reads it: a PNG must end with its IEND
// chunk, a JPEG with its end-of-image marker.
if (isPng && !bytes.subarray(bytes.length - 12).includes(Buffer.from("IEND"))) {
  throw new Error("entry.png is a truncated PNG: no IEND chunk");
}
if (isJpeg && !bytes.subarray(bytes.length - 2).equals(Buffer.from([0xff, 0xd9]))) {
  throw new Error("entry.png is a truncated JPEG: no end-of-image marker");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
console.log(`wrote ${statSync(join(outDir, "entry.png")).size} bytes to ${outDir}/entry.png`);
