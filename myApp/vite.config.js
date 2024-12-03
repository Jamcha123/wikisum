import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/index.html",
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5001/wikisum-a8c7c/us-central1/obj",
        changeOrigin: true
      }
    },
    cors: {
      origin: true, 
      credentials: true,
      methods: "GET"
    }
  }
})
