import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Grecia Group — greciagroup.com
// Spanish-first bilingual (es default at root, en at /en/)
export default defineConfig({
  site: 'https://greciagroup.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
