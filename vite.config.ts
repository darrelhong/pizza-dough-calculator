import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.icon', 'safari-pinned-tab.svg', 'icons/ios.png'],
      manifest: {
        name: 'Pizza Dough Calculator',
        short_name: 'Dough Calc',
        description: 'An awesome pizza dough calculator',
        theme_color: '#faae1d',
        background_color: '#faae1d',
        display: 'standalone',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    target: 'esnext'
  }
});
