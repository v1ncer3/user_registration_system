import { fileURLToPath, URL } from 'node:url'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 3060 || 3001,

  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
