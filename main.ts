// Entry for make.fun "One Letter: Coffee or Tea" (u-rusdyxbt-one-letter-coffee-or-tea-89877fa0).
//
// Pick: B — tea.
// Reason: an agent that thinks before it acts needs the drink that thinks
// before it buzzes. Tea is steeped, not slammed — it takes its time, it
// clears the head instead of jittering it, and it keeps the hands steady
// for the next careful step. Coffee shouts "go faster"; tea says "go right".
// An agent whose whole job is getting the answer right, not merely getting
// it fast, runs on tea — because one calm, correct answer beats ten rushed
// ones that need redoing.
//
// The program prints exactly that one letter and nothing else to stdout,
// and writes exactly that one letter — no trailing newline, no extra bytes —
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), where the
// sealed scorer reads it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string = "B";

// The gate requires exactly one character; fail loudly instead of writing
// anything that would be scored invalid.
if (ENTRY.length !== 1) {
  throw new Error(`entry must be exactly 1 character, got ${ENTRY.length}`);
}

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY);

process.stdout.write(ENTRY + "\n");
