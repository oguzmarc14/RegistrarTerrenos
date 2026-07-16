import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B2zy3T1P.mjs';
import 'clsx';
import { g as getSupabaseImageUrl } from '../chunks/supabaseImage_BtVtnH0c.mjs';
import { createClient } from '@supabase/supabase-js';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://noeaguilera.com");
const $$FormEditarTerreno = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormEditarTerreno;
  const { terreno } = Astro2.props;
  const imagenes = Array.isArray(terreno.imagenes) ? terreno.imagenes : [];
  const imagenesMiniatura = imagenes.map(
    (img) => getSupabaseImageUrl(img, {
      width: 1280,
      height: 720,
      quality: 72,
      resize: "contain"
    })
  );
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<form id="formularioEditarTerreno" class="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10"> <input type="hidden" name="id"', '> <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"> <div class="rounded-[1.5rem] border border-white/10 bg-sky-950/40 p-5 sm:p-6"> <h2 class="mb-5 text-xl font-bold text-white">Informaci\xF3n del terreno</h2> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"> <input name="titulo"', ' placeholder="Nombre del terreno" required class="md:col-span-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <textarea name="descripcion" placeholder="Descripci\xF3n" required class="md:col-span-2 h-40 resize-y rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400">', '</textarea> <input name="precio" type="text"', ' placeholder="Precio ej. 50000, Consultar, A negociar" required class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <input name="medidas"', ' placeholder="Medidas Ej. 120x60" class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <input name="ubicacion"', ' placeholder="Ubicaci\xF3n" class="md:col-span-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <input name="googleMaps"', ' placeholder="Link de Google Maps" class="md:col-span-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-white outline-none placeholder:text-cyan-100/50 focus:border-cyan-400"> <select name="tipo" required class="md:col-span-2 rounded-2xl border border-white/15 bg-sky-950/80 px-4 py-3 text-white outline-none focus:border-amber-400"> <option value="">Selecciona el tipo de propiedad</option> <option value="terreno"', '>Terreno</option> <option value="casa"', '>Casa</option> <option value="comercial"', '>Propiedad Comercial</option> <option value="departamento"', '>Departamento</option> <option value="terreno-comercial"', '>Terreno Comercial</option> </select> </div> </div> <div class="rounded-[1.5rem] border border-white/10 bg-white/80 p-5 text-sky-900 shadow-xl sm:p-6"> <h2 class="text-xl font-bold">Im\xE1genes del terreno</h2> <p class="mt-2 text-sm leading-6 text-sky-950">\nDa clic sobre una imagen para elegirla como portada principal.\n</p> <div class="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4"> <h3 class="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-800">\nIm\xE1genes actuales\n</h3> <div id="imagenes-actuales" class="grid max-h-72 grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-4"> ', ' </div> </div> <div class="mt-6 flex justify-center"> <div class="flex min-h-44 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-sky-900/20 bg-slate-50 p-6 text-center transition hover:border-sky-800 hover:bg-sky-50"> <input type="file" id="nuevasImagenes" name="nuevasImagenes" accept="image/*" multiple class="hidden"> <label for="nuevasImagenes" class="cursor-pointer rounded-2xl bg-sky-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800">\nAgregar nuevas im\xE1genes\n</label> <p class="mt-3 text-xs text-slate-500">\nPuedes elegir una nueva imagen como portada.\n</p> </div> </div> <div class="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4"> <h3 class="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-800">\nNuevas im\xE1genes\n</h3> <div id="previewNuevas" class="grid max-h-72 grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-4"></div> </div> </div> </div> <div class="mt-8 flex justify-center"> <button type="submit" id="botonEditarTerrenoId" class="rounded-2xl bg-emerald-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-600">\nGuardar cambios\n</button> </div> </form> <script type="module" src="/ts/EditarTerrenoForm.js"><\/script>'])), maybeRenderHead(), addAttribute(terreno.id, "value"), addAttribute(terreno.titulo || "", "value"), terreno.descripcion || "", addAttribute(terreno.precio || "", "value"), addAttribute(terreno.medidas || "", "value"), addAttribute(terreno.ubicacion || "", "value"), addAttribute(terreno.google_maps || "", "value"), addAttribute(terreno.tipo === "terreno", "selected"), addAttribute(terreno.tipo === "casa", "selected"), addAttribute(terreno.tipo === "comercial", "selected"), addAttribute(terreno.tipo === "departamento", "selected"), addAttribute(terreno.tipo === "terreno-comercial", "selected"), imagenes.map((img, index) => {
    const miniatura = imagenesMiniatura[index] ?? img;
    return renderTemplate`<button type="button" class="imagen-actual group relative overflow-hidden rounded-2xl text-left transition hover:scale-[1.03]"${addAttribute(img, "data-url")}> <img${addAttribute(miniatura, "src")}${addAttribute(img, "data-original-url")}${addAttribute(`Imagen ${index + 1}`, "alt")}${addAttribute(
      index === 0 ? "h-32 w-full rounded-2xl border-4 border-sky-500 object-cover shadow-2xl" : "h-24 w-full rounded-2xl border border-slate-200 object-cover shadow-md opacity-80 group-hover:opacity-100",
      "class"
    )} onload="if(this.naturalWidth>this.naturalHeight){this.classList.add('scale-[1.18]');}" onerror="if(!this.dataset.fallbacked){this.dataset.fallbacked='1';this.src=this.dataset.originalUrl;}"> <span${addAttribute(
      index === 0 ? "badge-portada absolute left-2 top-2 rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur" : "badge-portada absolute left-2 top-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100",
      "class"
    )}> ${index === 0 ? "Portada" : "Elegir portada"} </span> </button>`;
  }));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/FormEditarTerreno.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://noeaguilera.com");
const $$EditarTerrenoId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EditarTerrenoId;
  const supabase = createClient(
    "https://ssrmztcxoijibjntrtqe.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI"
  );
  const id = Astro2.url.searchParams.get("id");
  let terreno = null;
  if (id) {
    const { data } = await supabase.from("Terrenos").select("id, titulo, descripcion, precio, imagenes, medidas, ubicacion, tipo, fecha, google_maps").eq("id", id).single();
    terreno = data;
  }
  return renderTemplate(_a || (_a = __template(['<script>\n  document.documentElement.classList.add("auth-loading");\n</script> ', '<script type="module" src="/ts/authGuard.js"></script>'])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<section class="min-h-screen bg-gradient-to-b from-sky-950 via-sky-800 to-sky-950 text-white"><div class="mx-auto max-w-7xl px-4 py-10 sm:py-12 lg:py-14"><div class="mb-8 text-center"><span class="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
Edición individual
</span><h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
Editar terreno
</h1><p class="mx-auto mt-3 max-w-3xl text-sm leading-7 text-sky-100/80 sm:text-base">
Ajusta la información de la propiedad con una vista más elegante y clara.
</p></div>${terreno ? renderTemplate`${renderComponent($$result2, "FormEditarTerreno", $$FormEditarTerreno, { "terreno": terreno })}` : renderTemplate`<p class="text-center text-red-200">No se encontró el terreno.</p>`}</div></section>` }));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/EditarTerrenoId.astro", void 0);
const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/EditarTerrenoId.astro";
const $$url = "/EditarTerrenoId";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EditarTerrenoId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
