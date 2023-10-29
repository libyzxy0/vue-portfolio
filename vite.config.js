import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [
    vue(), 
    Sitemap({
      hostname: "https://libyzxy0.xyz", 
      dynamicRoutes: ["/about", "/projects"]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
