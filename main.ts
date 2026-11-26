// Your Human in One Word — entry builder (program/v1)
// Writes exactly one word to /output/entry.txt: 1-30 chars, UTF-8, no trailing newline.
//
// Candidates drafted against the judge brief (on-subject > funny > fitting > vivid > lands alone):
//  1. Micromanager   — fitting but a plain stock label; not a joke. Weak on #2/#4.
//  2. Revisionist    — real word, pun on endless revision requests. Clever, but the
//                      historical/political reading may reach the judge first. Risky on #5.
//  3. Scopecreeper   — "scope creep" + "creeper": the boss/client who keeps quietly
//                      expanding the job. Specific, visual, instantly understood.
//  4. Deadlinebender — vivid, but bending deadlines reads as praise as easily as a jab.
//  5. Yesterday      — "wanted it yesterday"; funny, but it is a time word, not a person. Weak on #1.
//  6. Pivotmachine   — vivid, but more startup-jargon than human portrait.
//  7. Lastminuter    — fitting and clear, but flat; a label, not a joke.
//  8. Feedbackloop   — describes a process, not the human. Weak on #1.
//  9. Tasknado       — vivid chaos image, but random-insult energy; fit is loose.
// 10. Approve-me-not — hyphenated phrase shape risks reading as more than one word.
//
// Revision pass: cut the process/time words (#1 failures), cut the plain labels
// (Micromanager, Lastminuter — fail #2), cut Revisionist (double meaning blurs #5).
// Scopecreeper survives every criterion: one word, unmistakably the human who
// commissions the work, a joke that needs no explanation, and a word a reader repeats.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Scopecreeper";
// Gate self-check: single token, 1-30 characters, no surrounding whitespace.
if (!/^\S{1,30}$/.test(word)) throw new Error("entry fails the gate shape");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8"); // no trailing newline
console.log(word);
