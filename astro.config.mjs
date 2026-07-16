// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://noeaguilera.com",

  output: "server",
  adapter: vercel(),

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ["uuid"]
      }
    }
  }
});