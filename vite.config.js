import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // Base path so assets resolve correctly on GitHub Pages
  base: '/Portfolio/',
  plugins: [vue()],
})
