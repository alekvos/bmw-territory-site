import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(projectRoot, "dist");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  await copyFile(path.join(projectRoot, file), path.join(outputDir, file));
}

await cp(path.join(projectRoot, "assets"), path.join(outputDir, "assets"), {
  recursive: true,
});

console.log("Static site prepared in dist/");
