import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6kDN2m-r.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://noeaguilera.com");
const $$PrimeroIniciarSesion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrimeroIniciarSesion;
  const returnTo = Astro2.url.searchParams.get("returnTo") ?? "/panelAdmin";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen overflow-hidden bg-gradient-to-b from-sky-950 via-sky-900 to-sky-950 text-white"> <div class="absolute inset-0 pointer-events-none"> <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div> <div class="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div> </div> <div class="relative mx-auto flex min-h-screen max-w-5xl items-center px-4 py-10 sm:px-6 lg:px-8"> <div class="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8 lg:p-10"> <span class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
Acceso restringido
</span> <h1 class="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
Primero necesitas iniciar sesión
</h1> <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-sky-100/80 sm:text-base">
Para entrar a esta sección administrativa debes autenticarte antes de continuar.
</p> <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"> <a${addAttribute(`/iniciarSesion?returnTo=${encodeURIComponent(returnTo)}`, "href")} class="inline-flex items-center justify-center rounded-2xl bg-sky-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800">
Ir a iniciar sesión
</a> <a href="/" class="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
Volver al inicio
</a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/primeroIniciarSesion.astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/primeroIniciarSesion.astro";
const $$url = "/primeroIniciarSesion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrimeroIniciarSesion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
