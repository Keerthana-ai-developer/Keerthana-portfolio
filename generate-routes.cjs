const fs = require("fs");

const source = "dist/index.html";

for (const route of ["cuddle-nest", "clario", "noir-crumb"]) {
  fs.mkdirSync(`dist/${route}`, { recursive: true });
  fs.copyFileSync(source, `dist/${route}/index.html`);
}