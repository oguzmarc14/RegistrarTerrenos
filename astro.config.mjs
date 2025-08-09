// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless"; // 👈 NUEVO

export default defineConfig({
  output: "server",                 // 👈 Habilita SSR en Vercel
  adapter: vercel(),                // 👈 Usa serverless functions
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ["uuid"]          // (lo de antes, si lo sigues necesitando)
      }
    }
  }
});
