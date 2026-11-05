// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Cambiar por el dominio definitivo cuando exista.
  site: 'https://santiagogarcia.pages.dev',
  integrations: [sitemap()],
  i18n: {
    locales: ['es', 'en', 'de'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
