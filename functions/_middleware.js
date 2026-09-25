export async function onRequest(context) {
  const response = await context.next();

  const url = new URL(context.request.url);
  const path = url.pathname;

  let title = "Keerthana C. — AI Product Builder";
  let description =
    "Selected products, case studies and digital experiences built by Keerthana C.";

  if (path === "/cuddle-nest") {
    title = "Cuddle Nest — School Management Platform";
    description =
      "A multi-role school management platform connecting parents, teachers and administrators through one digital system.";
  }

  if (path === "/clario") {
    title = "Clario — AI Business Workspace";
    description =
      "An AI business workspace designed to help freelancers, creators and small businesses handle everyday work more efficiently.";
  }

  if (path === "/noir-crumb") {
    title = "NOIR & CRUMB — Café Website";
    description =
      "A premium café website concept designed to turn a physical café's atmosphere into a calm and memorable digital experience.";
  }

  const html = await response.text();

  const updatedHtml = html
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(
      /<meta property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${title}" />`
    )
    .replace(
      /<meta property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${description}" />`
    );

  return new Response(updatedHtml, {
    status: response.status,
    headers: response.headers,
  });
}