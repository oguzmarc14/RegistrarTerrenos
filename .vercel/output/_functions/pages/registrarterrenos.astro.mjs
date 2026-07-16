import { a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B2zy3T1P.mjs';
import 'clsx';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CardRegistrarTerreno = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="relative min-h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('/header1.webp')"> <div class="absolute inset-0 bg-sky-950/80 backdrop-blur-sm"></div> <div class="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8"> <div class="w-full"> <div class="mb-8 text-center"> <span class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
Panel privado
</span> <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
Registrar nuevo terreno
</h1> <p class="mx-auto mt-3 max-w-2xl text-sm leading-7 text-sky-100/80 sm:text-base">
Agrega la informaci\xF3n principal de la propiedad y sube las im\xE1genes que se mostrar\xE1n en la p\xE1gina.
</p> <div class="mt-6 flex flex-wrap justify-center gap-3"> <a href="/panelAdmin" class="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
Volver al panel
</a> <a href="/Terrenos" class="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-950 transition hover:bg-sky-100">
Ir a mis terrenos
</a> <a href="/EditarTerreno" class="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-950 transition hover:bg-sky-100">
Editar terrenos
</a> </div> </div> <form id="formularioTerreno" enctype="multipart/form-data" class="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10"> <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"> <!-- IZQUIERDA --> <div class="rounded-[1.5rem] border border-white/10 bg-sky-950/40 p-5 sm:p-6"> <h2 class="mb-5 text-xl font-bold text-white">
Informaci\xF3n del terreno
</h2> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"> <input name="titulo" placeholder="Nombre del terreno" required class="md:col-span-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <textarea name="descripcion" placeholder="Descripci\xF3n" required class="md:col-span-2 h-32 resize-none rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"></textarea> <input type="text" name="precio" placeholder="Precio ej. 50000, Consultar, A negociar" required class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <input name="medidas" placeholder="Medidas Ej. 120x60" class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <input name="ubicacion" placeholder="Ubicaci\xF3n" class="md:col-span-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-amber-400"> <!-- GOOGLE MAPS --> <input name="googleMaps" placeholder="Link de Google Maps" class="md:col-span-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-white outline-none placeholder:text-cyan-100/50 focus:border-cyan-400"> <select name="tipo" required class="md:col-span-2 rounded-2xl border border-white/15 bg-sky-950/80 px-4 py-3 text-white outline-none focus:border-amber-400"> <option value="">Selecciona el tipo de propiedad</option> <option value="terreno">Terreno</option> <option value="casa">Casa</option> <option value="comercial">Propiedad Comercial</option> <option value="departamento">Departamento</option> <option value="terreno-comercial">Terreno Comercial</option> </select> </div> </div> <!-- DERECHA --> <div class="rounded-[1.5rem] border border-white/10 bg-white/80 p-5 text-sky-900 shadow-xl sm:p-6"> <h2 class="text-xl font-bold">
Im\xE1genes del terreno
</h2> <p class="mt-2 text-sm leading-6 text-sky-950">
Selecciona una o varias im\xE1genes. La vista previa se acomodar\xE1 autom\xE1ticamente.
</p> <div class="mt-5 flex justify-center"> <div class="flex min-h-48 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-sky-900/20 bg-slate-50 p-6 text-center transition hover:border-sky-800 hover:bg-sky-50"> <input type="file" id="imagen" name="imagenes" accept="image/*" required multiple class="hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="mb-3 h-11 w-11 text-sky-900/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6"></path> </svg> <label for="imagen" class="cursor-pointer rounded-2xl bg-sky-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800">
Seleccionar im\xE1genes
</label> <p class="mt-3 text-xs text-slate-500">
Formatos recomendados: WEBP, JPG o PNG
</p> </div> </div> <!-- PREVIEW --> <div class="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4"> <h3 class="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-800">
Vista previa
</h3> <div id="previewContainer" class="grid max-h-72 grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-4"></div> </div> <!-- TIPS --> <div class="mt-6 rounded-3xl border border-sky-900/10 bg-sky-50 p-4"> <h3 class="font-semibold text-sky-900">
Tips r\xE1pidos
</h3> <ul class="mt-3 space-y-2 text-sm text-slate-600"> <li>Usa fotos claras y bien iluminadas.</li> <li>No utilizar fotos con t\xEDtulos que contengan "\xF1" o acentos.</li> <li>Agrega m\xEDnimo 3 im\xE1genes.</li> <li>La primera imagen que se seleccione sera la imagen que aparezca como principal</li> <li>Incluye fachada, terreno completo y ubicaci\xF3n.</li> <li>Puedes pegar directamente un link de Google Maps.</li> </ul> </div> </div> </div> <!-- BOTON --> <div class="mt-8 flex justify-center"> <button type="submit" id="botonSubmit" disabled class="rounded-2xl bg-emerald-700 px-8 py-3.5 text-sm font-bold text-white opacity-50 shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-600 disabled:cursor-not-allowed">
Subir terreno
</button> </div> </form> </div> </div> </div> <script type="module" src="/ts/RegistrarTerreno.js"><\/script>`])), maybeRenderHead());
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/CardRegistrarTerreno.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RegistrarTerrenos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  document.documentElement.classList.add("auth-loading");\n<\/script> ', '<script type="module" src="/ts/authGuard.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CardRegistrarTerreno", $$CardRegistrarTerreno, {})}` }));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/RegistrarTerrenos.astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/RegistrarTerrenos.astro";
const $$url = "/RegistrarTerrenos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RegistrarTerrenos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
