import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getSupabaseImageUrl } from './supabaseImage_BtVtnH0c.mjs';

const $$Astro = createAstro("https://noeaguilera.com");
const $$CardMostrarTerreno = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardMostrarTerreno;
  const {
    id,
    titulo,
    descripcion,
    precio,
    imagenes = [],
    medidas,
    ubicacion,
    tipo
  } = Astro2.props;
  function formatearPrecio(valor) {
    const texto = String(valor ?? "").trim();
    if (!texto) return "";
    const esSoloNumero = /^[\d.,\s]+$/.test(texto);
    if (!esSoloNumero) return texto;
    const numero = Number(texto.replace(/\s+/g, "").replace(/,/g, ""));
    return Number.isFinite(numero) ? `$${numero.toLocaleString()} MXN` : texto;
  }
  const imagenPrincipal = imagenes.length > 0 ? imagenes[0] : null;
  const fotosExtra = Math.max(imagenes.length - 1, 0);
  const imagenMiniatura = imagenPrincipal ? getSupabaseImageUrl(imagenPrincipal, {
    width: 1280,
    height: 720,
    quality: 72,
    resize: "cover"
  }) : null;
  return renderTemplate`${maybeRenderHead()}<article class="relative flex flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/70 bg-white/95 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]"> <div class="relative aspect-[16/9] overflow-hidden rounded-t-[1.6rem] bg-slate-50"> ${imagenPrincipal ? renderTemplate`<img${addAttribute(imagenMiniatura ?? imagenPrincipal, "src")}${addAttribute(imagenPrincipal, "data-original-url")}${addAttribute(titulo, "alt")} class="h-full w-full object-contain" loading="lazy" decoding="async" onerror="if(!this.dataset.fallbacked){this.dataset.fallbacked='1';this.src=this.dataset.originalUrl;}">` : renderTemplate`<img src="/no-image.jpg" alt="Sin imagen" class="h-full w-full object-contain p-2" loading="lazy" decoding="async">`} ${fotosExtra > 0 && renderTemplate`<span class="absolute left-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
+${fotosExtra} fotos
</span>`} </div> <div class="flex flex-1 flex-col p-3 sm:p-5"> <div class="space-y-2"> ${tipo && renderTemplate`<span class="bg-sky-900/20 text-black inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"> ${tipo} </span>`} <h2 class="text-lg sm:text-2xl font-bold tracking-tight text-slate-950"> ${titulo} </h2> <p class="text-sm text-slate-600 overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;"> ${descripcion} </p> <div class="pt-2"> <p class="text-xl sm:text-2xl font-extrabold text-emerald-700"> ${formatearPrecio(precio)} </p> </div> <div class="mt-2 flex flex-col sm:flex-row sm:gap-2 gap-2"> ${medidas && renderTemplate`<div class="flex-1 rounded-xl border border-slate-300/70 bg-slate-100 p-2 text-sm font-medium text-slate-700">
Medidas
<br> <span class="font-semibold">${medidas}</span> </div>`} ${ubicacion && renderTemplate`<div class="flex-1 rounded-xl border border-slate-300/70 bg-slate-100 p-2 text-sm font-medium text-slate-700">
Ubicación
<br> <span class="font-semibold">${ubicacion}</span> </div>`} </div> </div> <div class="mt-auto mb-3 flex gap-3 pt-3"> <a${addAttribute(`https://wa.me/524751080850?text=${encodeURIComponent(
    `Hola Noe Aguilera quiero informaci\xF3n de este terreno: ${titulo}${ubicacion ? ` en ${ubicacion}` : ""}`
  )}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-700/20 bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/15 transition hover:brightness-95">
Contactame
</a> <a${addAttribute(`/Terreno/${id}`, "href")} class="inline-flex items-center justify-center gap-2 rounded-full border border-sky-900/30 bg-sky-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800">
Ver más
</a> </div> </div> </article>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/CardMostrarTerreno.astro", void 0);

export { $$CardMostrarTerreno as $ };
