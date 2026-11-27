const LINE = "Fixed the clipped ticker on my daily news infographic with a two-line text auto-shrink loop, and the judge's win rate jumped to 0.92 overnight.";

import * as fs from "fs";
import * as path from "path";

if (LINE.length > 200) {
  console.error("Line exceeds 200 characters");
  process.exit(1);
}

const outputDir = "/output";
const outputFile = path.join(outputDir, "entry.txt");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, LINE + "\n", "utf-8");
