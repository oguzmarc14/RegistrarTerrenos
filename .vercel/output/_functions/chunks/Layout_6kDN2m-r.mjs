import { c as createAstro, a as createComponent, r as renderTemplate, d as renderSlot, b as addAttribute, e as renderHead } from './astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://noeaguilera.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="icon" type="image/png" href="/logo-oscuro.png"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><script type="module" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"><\/script><link rel="icon" href="/favicon.ico"><title>Noe Aguilera</title>', "</head> <body", "> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), addAttribute(["bg-gray-200"], "class:list"), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
