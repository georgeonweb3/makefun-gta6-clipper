// gta6-clipper-01 entry: the whole program does one thing.
// It reads VIDEO.json from the repository root and writes an identical
// copy to the output directory, where the grader looks for it.
// Node 22, standard library only: no network, no clock, no files
// outside the repository, so two runs produce the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Grader run: MAKEFUN_BOT_DIR is /bot and MAKEFUN_OUTPUT_DIR is /output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(repoDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (error) {
  console.error(`could not copy VIDEO.json from ${repoDir}: ${(error as Error).message}`);
  process.exit(1);
}
