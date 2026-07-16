import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B2zy3T1P.mjs';
import { a as $$Navbar, $ as $$Footer } from '../../chunks/Footer_98v3p14c.mjs';
import { s as supabase } from '../../chunks/supabaseClient_RHDkaJtg.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://noeaguilera.com");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const formatearPrecio = (valor) => {
    const texto = String(valor ?? "").trim();
    if (!texto) return "";
    const esSoloNumero = /^[\d.,\s]+$/.test(texto);
    if (!esSoloNumero) return texto;
    const numero = Number(texto.replace(/\s+/g, "").replace(/,/g, ""));
    return Number.isFinite(numero) ? `$${numero.toLocaleString()} MXN` : texto;
  };
  const { id } = Astro2.params;
  const { data: terreno, error } = await supabase.from("Terrenos").select("id, titulo, descripcion, precio, imagenes, medidas, ubicacion, tipo, fecha, google_maps").eq("id", id).single();
  const imagenes = Array.isArray(terreno?.imagenes) ? terreno.imagenes : [];
  return renderTemplate(_a || (_a = __template(["", ' <script type="module">\n  // Hide/show navbar on scroll (only for this detail page)\n  const nav = document.querySelector("nav");\n  if (nav) {\n    nav.style.transition = "transform 280ms ease, opacity 220ms ease";\n    let lastY = window.scrollY;\n    let ticking = false;\n\n    const onScroll = () => {\n      const currentY = window.scrollY;\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          if (currentY > lastY && currentY > 60) {\n            // scrolling down\n            nav.style.transform = "translateY(-110%)";\n            nav.style.opacity = "0";\n            nav.style.pointerEvents = "none";\n          } else {\n            // scrolling up\n            nav.style.transform = "";\n            nav.style.opacity = "";\n            nav.style.pointerEvents = "";\n          }\n          lastY = currentY;\n          ticking = false;\n        });\n        ticking = true;\n      }\n    };\n\n    window.addEventListener("scroll", onScroll, { passive: true });\n    // ensure nav is visible when leaving the page or on load\n    window.addEventListener("pageshow", () => {\n      nav.style.transform = "";\n      nav.style.opacity = "";\n      nav.style.pointerEvents = "";\n    });\n  }\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-gradient-to-b from-sky-950 via-sky-900 to-sky-950 text-white"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <div class="mx-auto max-w-7xl px-4 mb-10"> ${error && renderTemplate`<div class="mt-8 rounded-2xl border border-red-400/30 bg-red-500/10 p-6 text-red-100">
No se pudo cargar la propiedad.
</div>`} ${!error && !terreno && renderTemplate`<div class="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
No se encontró la propiedad solicitada.
</div>`} ${terreno && renderTemplate`<article class="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/20 text-slate-900"> <div class="grid grid-cols-1 lg:grid-cols-2"> <div class="relative bg-slate-100"> ${renderComponent($$result2, "swiper-container", "swiper-container", { "class": "block h-52 sm:h-68 lg:h-full lg:min-h-[44rem]", "slides-per-view": "1", "pagination": "true", "navigation": "true", "loop": imagenes.length > 1 ? "true" : "false" }, { "default": () => renderTemplate` ${imagenes.length > 0 ? imagenes.map((img, index) => renderTemplate`${renderComponent($$result2, "swiper-slide", "swiper-slide", {}, { "default": () => renderTemplate` <img${addAttribute(img, "src")}${addAttribute(`${terreno.titulo} imagen ${index + 1}`, "alt")} class="h-52 w-full object-cover sm:h-68 lg:h-[44rem]"${addAttribute(index === 0 ? "eager" : "lazy", "loading")}${addAttribute(index === 0 ? "high" : "low", "fetchpriority")} decoding="async"> ` })}`) : renderTemplate`${renderComponent($$result2, "swiper-slide", "swiper-slide", {}, { "default": () => renderTemplate` <img src="/no-image.jpg" alt="Sin imagen" class="h-52 w-full object-cover sm:h-68 lg:h-[44rem]" loading="eager" fetchpriority="high" decoding="async"> ` })}`} ` })} </div> <div class="flex flex-col justify-between p-4 sm:p-5 lg:p-8 bg-sky-900/30"> <div> <div class="mb-3 flex flex-wrap items-center gap-3"> <span class="rounded-full bg-sky-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
Detalle de propiedad
</span> ${terreno.tipo && renderTemplate`<span class="rounded-full bg-sky-900/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black"> ${terreno.tipo} </span>`} </div> <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-sky-950"> ${terreno.titulo} </h1> <p class="mt-2 text-sm leading-7 text-slate-600 sm:text-base"> ${terreno.descripcion} </p> <div class="mt-3 flex flex-wrap items-end gap-4"> <p class="text-2xl font-bold text-emerald-700 sm:text-3xl"> ${formatearPrecio(terreno.precio)} </p> ${terreno.fecha && renderTemplate`<p class="text-sm text-slate-500">
Publicado:${" "} ${new Date(terreno.fecha).toLocaleDateString()} </p>`} </div> </div> <div class="mt-5 grid gap-3 sm:grid-cols-2"> ${terreno.medidas && renderTemplate`<div class="rounded-2xl bg-sky-700/20 p-3 ring-1 ring-slate-300"> <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
Medidas
</p> <p class="mt-1 text-base font-semibold text-slate-900"> ${terreno.medidas} </p> </div>`} ${terreno.ubicacion && renderTemplate`<div class="rounded-2xl bg-sky-700/20 p-3 ring-1 ring-slate-300"> <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
Ubicación
</p> <p class="mt-1 text-base font-semibold text-slate-900"> ${terreno.ubicacion} </p> ${terreno.google_maps && renderTemplate`<a${addAttribute(terreno.google_maps, "href")} target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-sky-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800">
📍 Ver en Google Maps
</a>`} </div>`} </div> <div class="mt-6 flex flex-col gap-3 sm:flex-row"> <a${addAttribute(`https://wa.me/524751080850?text=${encodeURIComponent(`Hola, quiero informaci\xF3n de esta propiedad: ${terreno.titulo}${terreno.ubicacion ? ` en ${terreno.ubicacion}` : ""}`)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700 hover:scale-105">
Contactar por WhatsApp
</a> <a href="/Terrenos" class="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-sky-900 px-5 py-3 font-semibold text-white transition hover:bg-sky-800 hover:scale-105">
Volver al listado
</a> </div> </div> </div> </article>`} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} </section> ` }));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/Terreno/[id].astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/Terreno/[id].astro";
const $$url = "/Terreno/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
