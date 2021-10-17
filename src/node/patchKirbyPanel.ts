import fs from "fs";
import { green, red } from "colorette";

// Extend writer field to support custom inline marks
const path =
  (fs.existsSync("vendor/getkirby") ? "vendor/getkirby/cms" : "kirby") +
  "/panel/dist/js/app.js";
const build = fs.readFileSync(path, "utf8");
const pattern = "},this.marks)}";
const patch =
  // Global `window.panel.plugins.marks` array or fallback
  ",...(window.panel.plugins.marks||[])" +
  // Reduce array to object
  ".reduce(" +
  // Reducer callback
  "(a,[n,f])=>({...a,n:new f()})" +
  // Reducer initial value
  ",{})" +
  pattern;

async function main() {
  if (build.includes(patch)) {
    console.log(
      `${green(
        "✓"
      )} Kirby Panel already patched to support custom writer marks.`
    );

    return;
  }

  console.log(green("Patching Kirby Panel to support custom writer marks..."));

  const output = build.replace(pattern, patch);
  fs.writeFileSync(path, output, "utf8");

  console.log(`${green("✓")} Kirby Panel successfully patched.`);
}

main().catch((err) => console.error(red(err)));
