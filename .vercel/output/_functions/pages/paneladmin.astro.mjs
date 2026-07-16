import { a as createComponent, r as renderTemplate, g as renderScript, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B2zy3T1P.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PanelAdmin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  document.documentElement.classList.add("auth-loading");\n<\/script> ', '<script type="module" src="/ts/authGuard.js"><\/script>', ""])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="flex min-h-screen items-center bg-gradient-to-b from-sky-950 via-sky-800 to-sky-950 px-4 py-12 text-white"><div class="mx-auto max-w-4xl"><div class="mb-8 text-center"><span class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
Panel privado
</span><h1 class="mt-4 text-3xl font-bold sm:text-4xl">
Administración de terrenos
</h1><p class="mt-3 text-sm text-sky-100/80">
Selecciona qué acción deseas realizar.
</p></div><div class="grid gap-4 sm:grid-cols-3"><a href="/RegistrarTerrenos" class="rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-xl transition hover:-translate-y-1 hover:bg-white/15"><p class="text-3xl">➕</p><h2 class="mt-3 text-lg font-bold">Registrar terreno</h2><p class="mt-2 text-sm text-sky-100/70">
Agregar una nueva propiedad.
</p></a><a href="/EditarTerreno" class="rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-xl transition hover:-translate-y-1 hover:bg-white/15"><p class="text-3xl">✏️</p><h2 class="mt-3 text-lg font-bold">Editar terrenos</h2><p class="mt-2 text-sm text-sky-100/70">
Modificar o eliminar propiedades.
</p></a><a href="/Terrenos" class="rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-xl transition hover:-translate-y-1 hover:bg-white/15"><p class="text-3xl">🏡</p><h2 class="mt-3 text-lg font-bold">Mis terrenos</h2><p class="mt-2 text-sm text-sky-100/70">
Ver terrenos publicados.
</p></a></div><div class="mt-8 text-center"><button id="logout-button" class="rounded-2xl bg-sky-950 px-6 py-3 text-sm font-bold text-sky-900 transition hover:bg-sky-100">
Cerrar sesión
</button></div></div></section>` }), renderScript($$result, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/panelAdmin.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/panelAdmin.astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/panelAdmin.astro";
const $$url = "/panelAdmin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PanelAdmin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
