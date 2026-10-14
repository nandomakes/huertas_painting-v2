// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical domain — must match SITE.url in src/consts.ts and the Sitemap:
  // line in public/robots.txt. The live site serves the apex (no www).
  site: 'https://huertaspaintingllc.com',
  // The WordPress site used trailing slashes (/about/, /contact-us/); keeping
  // them means every indexed URL survives the redesign unchanged.
  trailingSlash: 'ignore',
  integrations: [
    tailwind(),
    sitemap({
      // The review funnel is reached from texts/QR codes and is noindex.
      filter: (page) => !/\/(we-value-our-clients|thanks-for-responding|thanks-for-your-feedback)\/?$/.test(page),
      // Static brochure site with no per-page content dates — the build date
      // is the honest lastmod signal.
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
