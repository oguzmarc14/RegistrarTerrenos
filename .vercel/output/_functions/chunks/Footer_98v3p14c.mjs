import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead } from './astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://noeaguilera.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { class: className = "", isOverlay = false } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<nav", '> <div> <div class="flex items-center justify-between gap-4 px-4 py-3"> <a href="/"> <img src="/logo.png" class="w-28 duration-300 hover:scale-105 sm:w-40" alt="Logo del sitio"> </a> <div class="flex items-center gap-3"> <ul class="flex gap-3"> <li class="duration-300 hover:scale-110"> <a href="https://www.facebook.com/noe.aguilera.3133" aria-label="Facebook"> <img src="/facebook.png" class="w-8 sm:w-12" alt="Facebook"> </a> </li> <li class="duration-300 hover:scale-110"> <a href="https://www.instagram.com/noeaguilera30/" aria-label="Instagram"> <img src="/instagram.png" class="w-8 sm:w-12" alt="Instagram"> </a> </li> <li class="duration-300 hover:scale-110"> <a href="https://www.tiktok.com/@noeaguileratrader" aria-label="TikTok"> <img src="/tik-tok.png" class="w-8 sm:w-12" alt="TikTok"> </a> </li> </ul> <button id="logout-button" type="button" class="hidden rounded-full border border-white/10 bg-sky-900 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800 sm:text-sm">\nCerrar sesi\xF3n\n</button> </div> </div> <div class="mx-6 border-t border-white/15"></div> <ul class="flex justify-center gap-8 pb-3 pt-3 text-[10px] font-bold uppercase tracking-wide text-white sm:text-sm"> <li class="duration-300 hover:scale-110 hover:text-sky-300"> <a href="/">Home</a> </li> <li class="duration-300 hover:scale-110 hover:text-sky-300"> <a href="/Terrenos">Terrenos</a> </li> <li class="duration-300 hover:scale-110 hover:text-sky-300"> <a href="/MapaTerrenos">Mapa De Terrenos</a> </li> <li class="duration-300 hover:scale-110 hover:text-sky-300"> <a href="/#Video-Terrenos">Con\xF3ceme</a> </li> </ul> </div> </nav> <script type="module">\n  const AUTH_SESSION_KEY = "admin_session_active";\n  const LOGIN_PATH = "/iniciarsesion";\n\n  const logoutButton = document.getElementById("logout-button");\n\n  if (logoutButton) {\n    const refreshVisibility = () => {\n      const hasSession =\n        window.sessionStorage.getItem(AUTH_SESSION_KEY) === "true";\n\n      logoutButton.classList.toggle("hidden", !hasSession);\n    };\n\n    refreshVisibility();\n\n    logoutButton.addEventListener("click", () => {\n      window.sessionStorage.removeItem(AUTH_SESSION_KEY);\n      window.location.href = LOGIN_PATH;\n    });\n\n    window.addEventListener("storage", refreshVisibility);\n    window.addEventListener("pageshow", refreshVisibility);\n  }\n<\/script>'])), maybeRenderHead(), addAttribute([
    "z-30",
    "w-full",
    "border-b",
    "border-white/15",
    "bg-sky-950/80",
    "backdrop-blur-md",
    "backdrop-saturate-150",
    "shadow-lg",
    isOverlay ? "absolute left-0 top-0" : "relative",
    className
  ], "class:list"));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-b from-[#06233A] via-[#041F33] to-[#010D15] text-white py-12"> <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"> <!-- Columna 1: Logo y descripción --> <div> <h2 class="text-2xl font-bold mb-3">Noé Aguilera</h2> <p class="text-sm text-gray-300 leading-relaxed">
Publicación y gestión de terrenos. Te ayudamos a vender o rentar más rápido con un servicio profesional.
</p> </div> <!-- Columna 2: Enlaces --> <div> <h3 class="text-xl font-semibold mb-3">Enlaces</h3> <ul class="space-y-2"> <li><a href="/" class="hover:text-sky-400">Inicio</a></li> <li><a href="/Terrenos" class="hover:text-sky-400">Terrenos</a></li> <li><a href="/#servicios" class="hover:text-sky-400">Servicios</a></li> <li><a href="https://wa.me/524751080850" class="hover:text-sky-400">Contactame</a></li> </ul> </div> <!-- Columna 3: Redes sociales --> <div> <h3 class="text-xl font-semibold mb-3">Conéctate</h3> <div class="flex justify-center gap-4"> <a href="https://facebook.com/noeaguilera11" target="_blank" class="hover:text-sky-400"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg> </a> <a href="https://wa.me/524751080850" target="_blank" class="hover:text-sky-400"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c0 2.117.674 4.073 1.812 5.677L2 22l4.479-1.754C8.034 21.327 9.965 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zM7.449 17.047l-.293-.176-2.653.976.949-2.493-.19-.311A8.019 8.019 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8a7.96 7.96 0 0 1-4.551-1.953zM16.48 14.7c-.198-.099-1.173-.578-1.354-.643-.181-.066-.314-.099-.447.099-.132.198-.513.643-.628.776-.115.132-.231.149-.429.05-.198-.099-.835-.308-1.59-.983-.588-.525-.985-1.173-1.1-1.371-.115-.198-.012-.305.087-.403.089-.088.198-.231.297-.347.1-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.077-.611-1.476-.16-.383-.323-.33-.447-.337-.115-.007-.248-.009-.381-.009-.132 0-.347.05-.529.248s-.694.678-.694 1.654.711 1.918.81 2.051c.099.132 1.397 2.135 3.389 2.993.474.204.842.326 1.13.418.475.151.908.13 1.25.079.381-.057 1.173-.48 1.339-.943.165-.463.165-.859.115-.943-.05-.082-.181-.132-.38-.231z"></path></svg> </a> </div> </div> </div> <!-- Línea final --> <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Noé Aguilera. Todos los derechos reservados.
</div> </footer>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/sections/Footer.astro", void 0);

export { $$Footer as $, $$Navbar as a };
