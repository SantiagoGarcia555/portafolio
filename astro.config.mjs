// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Cambiar si se conecta un dominio propio (y actualizar public/robots.txt y cv/generate.mjs).
  site: 'https://santiagogarcia.garcialondonosantiago.workers.dev',
  integrations: [sitemap()],
  i18n: {
    locales: ['es', 'en', 'de'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
