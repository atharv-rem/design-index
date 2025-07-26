import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

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

const sitemap = new SitemapStream({ hostname: 'https://designindex.xyz' });

streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap generated successfully!');
});

sitemap.pipe(createWriteStream('./public/sitemap.xml'));
routes.forEach((route) => sitemap.write(route));
sitemap.end();
