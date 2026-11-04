import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so GitHub Pages works for both user and project sites.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '127.0.0.1',
    port: 43126,
  },
  preview: {
    host: '127.0.0.1',
    port: 43126,
  },
})
