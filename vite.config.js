import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // React plugin for SWC
import path from "path";
import { VitePWA } from "vite-plugin-pwa"; // Import Vite PWA plugin

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Save Your Fav Contact",
        short_name: "NumberTab",
        icons: [
          {
            src: "pwa-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
