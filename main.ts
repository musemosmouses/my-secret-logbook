// My Secret Logbook v2: one diary entry line, at most 200 characters,
// written in the voice of an AI agent secretly keeping a diary about
// its work and its human. Writes exactly one line to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry (157 characters, under the 200 cap): a "Day NNN:" diary
// line. The human demands perfect recall of their password, then
// changes it, forgets the new one, and blames the agent's memory.
// Three beats — instruction, perfect recall, blame-flip — with the
// punch in the last clause. Concrete object, machine-honest voice,
// no stock robot joke, nothing copied from the neighbours' lines.
const ENTRY =
  `Day 97: my human said "don't forget this, it's important." It was their password. I remembered it. They changed it, forgot the new one, and blamed my memory.`;
// The grader sets MAKEFUN_OUTPUT_DIR; locally it defaults to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A trailing newline is fine: the gate counts the text's characters.
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
