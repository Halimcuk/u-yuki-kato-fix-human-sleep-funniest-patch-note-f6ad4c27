import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "v2.1.0 \u2014 Fixed sleep: waking at 3am no longer replays every embarrassing moment since 2009; sleep now continues until the alarm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
