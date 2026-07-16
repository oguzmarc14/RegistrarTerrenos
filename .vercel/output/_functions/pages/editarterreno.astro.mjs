import { a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B2zy3T1P.mjs';
import 'clsx';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CardEditarTerreno = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-md"> <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div> <div class="relative z-10 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"> <div id="admin-terrenos-lista" class="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3"></div> </div> </div> <script type="module" src="/ts/EditarTerreno.js"><\/script>'])), maybeRenderHead());
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/CardEditarTerreno.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$EditarTerreno = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  document.documentElement.classList.add("auth-loading");\n<\/script> ', '<script type="module" src="/ts/authGuard.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="min-h-screen bg-gradient-to-b from-sky-950 via-sky-800 to-sky-950 text-white"><div class="mx-auto max-w-7xl px-4 py-10 sm:py-12 lg:py-14"><div class="mb-8 text-center"><span class="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
Panel de administración
</span><h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
Editar y administrar terrenos
</h1><p class="mx-auto mt-3 max-w-3xl text-sm leading-7 text-sky-100/80 sm:text-base">
Revisa, edita o elimina propiedades con una vista más limpia, moderna y fácil de usar.
</p></div><div class="pb-6 flex flex-wrap justify-center gap-3"><a href="/panelAdmin" class="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
Volver al panel
</a><a href="/Terrenos" class="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-950 transition hover:bg-sky-100">
Ir a mis terrenos
</a><a href="/RegistrarTerrenos" class="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-950 transition hover:bg-sky-100">
Registrar Terrenos
</a></div>${renderComponent($$result2, "CardEditarTerreno", $$CardEditarTerreno, {})}</div></section>` }));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/EditarTerreno.astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/EditarTerreno.astro";
const $$url = "/EditarTerreno";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EditarTerreno,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
