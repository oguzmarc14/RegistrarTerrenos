import { a as createComponent, f as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B2zy3T1P.mjs';
export { renderers } from '../renderers.mjs';

const $$Iniciarsesion = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative flex min-h-screen overflow-hidden bg-gradient-to-b from-sky-950 via-sky-900 to-sky-950 text-white"> <!-- EFECTOS DE FONDO --> <div class="pointer-events-none absolute inset-0"> <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div> <div class="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div> </div> <!-- CONTENEDOR --> <div class="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8"> <div class="w-full max-w-2xl"> <!-- CARD PRINCIPAL --> <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8 lg:p-10"> <!-- TAG --> <span class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
Acceso privado
</span> <!-- TITULO --> <h1 class="mb-8 mt-5 text-left text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
Inicia sesión para administrar tus terrenos
</h1> <!-- DESCRIPCION --> <p class="mt-4 max-w-xl text-sm leading-7 text-sky-100/80 sm:text-base">
Ingresa con tu correo y contraseña para acceder a la zona
            administrativa, editar terrenos y gestionar publicaciones.
</p> <!-- FORMULARIO --> <div class="mt-8 rounded-[2rem] border border-slate-200/70 bg-black/10 p-6 text-slate-900 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"> <div class="mb-6"> <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
Bienvenido de nuevo
</h2> <p class="mt-2 text-sm leading-6 text-slate-400">
Usa tus credenciales para continuar.
</p> </div> <form id="login-form" class="space-y-4"> <!-- EMAIL --> <div> <label for="email" class="mb-2 block text-sm font-semibold text-gray-400">
Correo electrónico
</label> <input id="email" name="email" type="email" autocomplete="email" required placeholder="tu-correo@ejemplo.com" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-900/40 focus:bg-white"> </div> <!-- PASSWORD --> <div class="relative"> <label for="password" class="mb-2 block text-sm font-semibold text-gray-400">
Contraseña
</label> <input id="password" name="password" type="password" autocomplete="current-password" required placeholder="Tu contraseña" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-16 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-900/40 focus:bg-white"> <!-- BOTON VER --> <button type="button" id="toggle-password" class="absolute right-4 top-[46px] text-sm font-semibold text-slate-500 transition hover:text-sky-700">
Ver
</button> </div> <!-- BOTON --> <button type="submit" class="inline-flex w-full items-center justify-center rounded-2xl bg-sky-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60">
Iniciar sesión
</button> <!-- MENSAJE --> <p id="login-message" class="min-h-5 text-sm font-medium text-slate-500"></p> </form> </div> </div> </div> </div> </section> ` })} ${renderScript($$result, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/iniciarsesion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/iniciarsesion.astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/iniciarsesion.astro";
const $$url = "/iniciarsesion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Iniciarsesion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
