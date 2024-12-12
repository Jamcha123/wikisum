import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    proxy: {
      "/create-checkout-session": {
        target: "", 
        changeOrigin: true, 
      }
    },
    cors: {
      origin: ["https://obj-288814584965.us-central1.run.app"], 
      methods: "GET",
      credentials: true
    }
  }
})
