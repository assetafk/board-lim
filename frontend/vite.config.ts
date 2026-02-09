import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore - Node.js built-in module
import path from 'path'
// @ts-ignore - Node.js built-in modules
import { fileURLToPath } from 'url'

// @ts-ignore - __dirname is not available in ESM, need to define it
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@' будет ссылаться на папку src
    },
  },
})
