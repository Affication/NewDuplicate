import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "spa-src"),
  plugins: [react()],
  base: "/spa/",
  publicDir: path.resolve(__dirname, "public/assets"),
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    outDir: path.resolve(__dirname, "spa"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
