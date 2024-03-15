import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import path from "node:path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    TanStackRouterVite(),
    VitePWA({
      registerType: "prompt",
      injectRegister: "auto",
      base: "/",
      includeAssets: ["favicon.ico"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
