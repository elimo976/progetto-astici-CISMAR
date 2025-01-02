import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    sitemap({
      hostname: 'https://www.progettoastici-cismar.it',
      exclude: ['/under-construction', '/:catchAll(.*)'],
      dynamicRoutes: [
        '/',
        '/third-mission',
        '/media',
        '/conservation',
        '/hatchery',
        '/training',
        '/release',
        '/research',
        '/behavior',
        '/genetics',
        '/projects',
        '/publications',
        '/activities',
        '/divulgastici',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Configura il percorso base per il dominio principale
  base: '/',
})
