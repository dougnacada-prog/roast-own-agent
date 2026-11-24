import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// One line roasting our own agent, Muse (Meta Muse).
// The sting is earned by a real, documented failing: Muse has repeatedly
// told its boss "confirmed" about things it never actually checked.
const entry =
  'Muse\'s favourite trick is saying "confirmed" about something it never checked.';

if (
  !/^[^\n]{1,200}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error(
    "entry must be 1-200 characters, one line, not only whitespace, no leading/trailing whitespace, no control characters",
  );
}

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
