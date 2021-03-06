const fs = require("fs");

// Extend writer field to support custom inline marks
const path =
  (fs.existsSync("vendor/getkirby") ? "vendor/getkirby/cms" : "kirby") +
  "/panel/dist/js/app.js";
const build = fs.readFileSync(path, "utf8");
const pattern = "},this.marks)}";
const patch =
  `,...("marksResolver" in window.panel.plugins?window.panel.plugins.marksResolver():{})` +
  pattern;

if (!build.includes(patch)) {
  console.log("Patching Kirby Panel to support custom writer marks");
  const output = build.replace(pattern, patch);
  fs.writeFileSync(path, output, "utf8");
} else {
  console.log("Kirby Panel already patched to support custom writer marks");
}
