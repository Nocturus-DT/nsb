import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/nsb/", // 👈 importante para GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
  }
});
