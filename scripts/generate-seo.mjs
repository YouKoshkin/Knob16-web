import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitemapConfig, siteMetadata } from '../seo.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.resolve(projectRoot, process.argv[2] || 'public');

function trimTrailingSlash(value) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

function buildUrl(siteUrl, pagePath) {
  return pagePath === '/' ? `${siteUrl}/` : `${siteUrl}${pagePath}`;
}

async function main() {
  const siteUrl = trimTrailingSlash(siteMetadata.siteUrl);
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapConfig.pages
  .map(
    (page) => `  <url>
    <loc>${buildUrl(siteUrl, page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  await fs.mkdir(outputDir, { recursive: true });
  await Promise.all([
    fs.writeFile(path.join(outputDir, 'sitemap.xml'), sitemap, 'utf8'),
    fs.writeFile(path.join(outputDir, 'robots.txt'), robots, 'utf8'),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
