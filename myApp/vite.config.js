import {defineConfig} from 'vite'

export default defineConfig({
    server: {
        proxy: {
            "/api/": {
                secure: false,
                changeOrigin: true,
                target: "https://obj-6ezwxbgcda-uc.a.run.app?names",
                rewrite: (path) => path("/^\/api/", '')
                
            }
        },
        cors: {
            origin: false
        }
    }
})