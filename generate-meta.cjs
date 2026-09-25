const fs = require("fs");

const source = fs.readFileSync("dist/index.html", "utf8");

const pages = {
  "cuddle-nest": {
    title: "Cuddle Nest — School Management Platform",
    description:
      "A multi-role school management platform connecting parents, teachers and administrators through one digital system.",
  },
  clario: {
    title: "Clario — AI Business Workspace",
    description:
      "An AI business workspace designed for freelancers, creators and small businesses.",
  },
  "noir-crumb": {
    title: "NOIR & CRUMB — Café Website",
    description:
      "A premium café website concept designed to turn a café atmosphere into a memorable digital experience.",
  },
};

for (const [route, data] of Object.entries(pages)) {
  let html = source;

  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${data.title}</title>`
  );

  html = html.replace(
    /<meta property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${data.title}" />`
  );

  html = html.replace(
    /<meta property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${data.description}" />`
  );

  html = html.replace(
    /<meta property="og:url"[^>]*>/i,
    `<meta property="og:url" content="https://keerthana-ai-dev.pages.dev/${route}" />`
  );

  fs.mkdirSync(`dist/${route}`, { recursive: true });
  fs.writeFileSync(`dist/${route}/index.html`, html);
}