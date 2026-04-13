import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildHomepageStructuredDataJson } from '../src/homepageStructuredData.js';
import { pages, siteMetadata, staticRoutePaths } from '../src/siteRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.resolve(projectRoot, process.argv[2] || 'dist');

function buildCanonicalUrl(routePath) {
  return routePath === '/' ? `${siteMetadata.siteUrl}/` : `${siteMetadata.siteUrl}${routePath}`;
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    return html;
  }

  pattern.lastIndex = 0;
  return html.replace(pattern, replacement);
}

function removeStructuredDataScript(html) {
  return html.replace(/\s*<script type="application\/ld\+json" data-structured-data="homepage">[\s\S]*?<\/script>/, '');
}

function upsertStructuredDataScript(html, json) {
  const scriptTag = `<script type="application/ld+json" data-structured-data="homepage">${json}</script>`;
  const pattern = /<script type="application\/ld\+json" data-structured-data="homepage">[\s\S]*?<\/script>/;

  if (pattern.test(html)) {
    return html.replace(pattern, scriptTag);
  }

  return html.replace('</head>', `    ${scriptTag}\n  </head>`);
}

function buildRouteHtml(html, routePath) {
  const page = pages[routePath];
  const canonicalUrl = buildCanonicalUrl(routePath);

  let updatedHtml = html;
  updatedHtml = replaceTag(updatedHtml, /<title>.*?<\/title>/s, `<title>${page.title}</title>`);
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+name="description"\s+content=".*?"\s*\/>/,
    `<meta name="description" content="${page.description}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<link\s+rel="canonical"\s+href=".*?"\s*\/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+property="og:title"\s+content=".*?"\s*\/>/,
    `<meta property="og:title" content="${page.title}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/,
    `<meta property="og:description" content="${page.description}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+property="og:url"\s+content=".*?"\s*\/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+property="og:image"\s+content=".*?"\s*\/>/,
    `<meta property="og:image" content="${page.ogImage}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/,
    `<meta name="twitter:title" content="${page.title}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/,
    `<meta name="twitter:description" content="${page.description}" />`,
  );
  updatedHtml = replaceTag(
    updatedHtml,
    /<meta\s+name="twitter:image"\s+content=".*?"\s*\/>/,
    `<meta name="twitter:image" content="${page.ogImage}" />`,
  );

  return updatedHtml;
}

async function main() {
  const indexPath = path.join(outputDir, 'index.html');
  const indexHtml = await fs.readFile(indexPath, 'utf8');
  const homepageStructuredDataJson = buildHomepageStructuredDataJson(siteMetadata);
  const homepageHtml = upsertStructuredDataScript(buildRouteHtml(indexHtml, '/'), homepageStructuredDataJson);

  await fs.writeFile(indexPath, homepageHtml, 'utf8');

  await Promise.all(
    staticRoutePaths
      .filter((routePath) => routePath !== '/')
      .map(async (routePath) => {
        const routeDir = path.join(outputDir, routePath.slice(1));
        const routeHtml = removeStructuredDataScript(buildRouteHtml(indexHtml, routePath));
        await fs.mkdir(routeDir, { recursive: true });
        await fs.writeFile(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
      }),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
