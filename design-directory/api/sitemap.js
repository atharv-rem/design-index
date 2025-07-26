// /api/sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');

  const sitemap = new SitemapStream({ hostname: 'https://www.designindex.xyz' });

  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/colours', changefreq: 'weekly', priority: 0.8 },
    { url: '/mockups', changefreq: 'weekly', priority: 0.8 },
    { url: '/fonts', changefreq: 'weekly', priority: 0.8 },
    { url: '/design-inspirations', changefreq: 'weekly', priority: 0.8 },
    { url: '/icons', changefreq: 'weekly', priority: 0.8 },
    { url: '/illustrations', changefreq: 'weekly', priority: 0.8 },
    { url: '/Submit-a-Tool', changefreq: 'monthly', priority: 0.5 },
    { url: '/Privacy-Policy', changefreq: 'yearly', priority: 0.3 },
    { url: '/Terms-and-Conditions', changefreq: 'yearly', priority: 0.3 },
    { url: '/About', changefreq: 'yearly', priority: 0.3 },
    { url: '/Feedback', changefreq: 'monthly', priority: 0.4 },
    { url: '/Search', changefreq: 'daily', priority: 0.6 },
    { url: '/Search-Results', changefreq: 'daily', priority: 0.6 },
  ];

  for (const route of routes) {
    sitemap.write(route);
  }

  sitemap.end();

  const xml = await streamToPromise(sitemap);
  res.status(200).send(xml.toString());
}
