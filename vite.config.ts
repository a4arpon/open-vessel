import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import path from "node:path"
import { defineConfig, splitVendorChunkPlugin } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
