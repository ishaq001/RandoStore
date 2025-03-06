import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/items": "http://localhost:3000",
    },
  },
  build: {
    outDir: "static",
    emptyOutDir: true,
  },
})
