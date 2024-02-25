import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/
const port = process.env.PORT || 3000;

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: `https://0.0.0.0:${port}`,
        // changeOrigin: true,
        secure: true,
        // ws: true,
      },
    },
  },
  plugins: [react()],
})
