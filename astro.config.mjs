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
    sitemap({
      filter: (page) =>
        !page.includes("/EditarTerreno") &&
        !page.includes("/EditarTerrenoId") &&
        !page.includes("/iniciarsesion") &&
        !page.includes("/panelAdmin") &&
        !page.includes("/primeroIniciarSesion") &&
        !page.includes("/RegistrarTerrenos")
    })
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