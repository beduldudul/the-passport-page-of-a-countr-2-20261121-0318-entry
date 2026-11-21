// The Passport Page of a Country That Isn't There.
// Entry program: copies the invented passport spread (entry.png) to the
// grader's output directory and verifies it byte for byte.
//
// The spread is the passport of Elín Margrét Sigurðardóttir, a fisheries
// inspector from Hrafnvik, capital of the Republic of Skarðey — a North
// Atlantic island that does not exist. Left page: the data page with her
// portrait, personal details and a machine-readable zone. Right page: the
// visa page, stamped with a travel history that agrees with the passport
// (issued 14 MAR 2021; every stamp after that date), and an Observations
// box recording her visa-free entry to the Faroe Islands and Svalbard
// under the North Atlantic Accord.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);

// The gate needs a whole PNG: check the PNG signature before writing.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

// Verify the copy byte for byte, so a partial write can never pass.
const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error("written entry.png differs from the source");
}

console.log(`Wrote ${target} (${bytes.length} bytes)`);
