import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B2zy3T1P.mjs';
import 'clsx';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_98v3p14c.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://noeaguilera.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    isGhost = false,
    text,
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "group relative inline-flex items-center justify-center overflow-hidden",
    "rounded-2xl",
    "px-6",
    "py-3.5",
    "text-sm",
    "font-bold",
    "tracking-wide",
    "transition-all",
    "duration-300",
    "backdrop-blur-md",
    "shadow-xl",
    "hover:-translate-y-1",
    "hover:shadow-2xl",
    "w-full",
    "sm:w-auto",
    "min-w-[190px]",
    className,
    // BOTON PRINCIPAL
    isGhost ? [
      "border border-white/10",
      "bg-white",
      "text-sky-950",
      "hover:bg-sky-100",
      "hover:text-sky-950",
      "shadow-white/10"
    ] : [
      "border border-white/15",
      "bg-sky-800",
      "text-white",
      "hover:bg-white/15",
      "hover:border-white/30",
      "shadow-black/30"
    ]
  ], "class:list")}> <!-- Glow --> <span${addAttribute([
    "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
    isGhost ? "bg-gradient-to-r from-white/30 via-white/10 to-white/30" : "bg-gradient-to-r from-sky-400/20 via-white/10 to-sky-400/20"
  ], "class:list")}></span> <!-- Texto --> <span class="relative z-10 flex items-center gap-2"> ${text} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </span> </a>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/Button.astro", void 0);

const $$Astro$1 = createAstro("https://noeaguilera.com");
const $$ImagenPrincipal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImagenPrincipal;
  const {
    h2Title,
    srcImage,
    description,
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["relative min-h-screen overflow-hidden bg-sky-950", className], "class:list")}> <!-- Imagen fondo --> <img${addAttribute(srcImage, "src")} alt="Imagen de fondo" class="absolute inset-0 h-full w-full scale-105 object-cover"> <!-- Overlays --> <div class="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-950/80 to-sky-950/30"></div> <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40"></div> <!-- Navbar --> ${renderComponent($$result, "Navbar", $$Navbar, { "isOverlay": true })} <!-- Hero --> <div class="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-8 pt-44 sm:px-8 sm:pt-40 lg:px-12"> <div class="grid w-full items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]"> <!-- TEXTO --> <div class="mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"> <!-- Badge --> <span class="inline-flex rounded-full border border-white/15 bg-sky-700/40 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md sm:px-4 sm:text-xs">
Bienes raíces · Encarnación de Díaz
</span> <!-- Título --> <h1 class="mt-4 max-w-md text-[2.2rem] font-black leading-[1] tracking-tight text-white drop-shadow-2xl sm:mt-6 sm:text-5xl lg:max-w-3xl lg:text-7xl"> ${h2Title} </h1> <!-- Descripción --> <p class="mt-4 max-w-sm text-[15px] leading-7 text-sky-50/85 drop-shadow sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8 lg:text-xl"> ${description} </p> <!-- Botones --> <div class="mt-6 flex w-full max-w-xs flex-col items-center justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:gap-4 lg:justify-start"> ${renderComponent($$result, "Button", $$Button, { "href": "/Terrenos", "text": "Ver terrenos", "isGhost": false })} ${renderComponent($$result, "Button", $$Button, { "href": "#Video-Terrenos", "text": "Ver video", "isGhost": true })} </div> <!-- Stats --> <div class="mt-10 grid w-full max-w-xs grid-cols-3 gap-3 sm:max-w-xl"> <div class="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"> <p class="text-2xl font-semibold text-white">+30</p> <p class="mt-1 text-xs text-white/55">Propiedades</p> </div> <div class="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"> <p class="text-2xl font-semibold text-white">24/7</p> <p class="mt-1 text-xs text-white/55">Atención</p> </div> <div class="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"> <p class="text-2xl font-semibold text-white">Local</p> <p class="mt-1 text-xs text-white/55">Asesoría</p> </div> </div> </div> <!-- CARD --> <div class="mt-2 flex justify-center lg:mt-0 lg:justify-end"> <div class="w-full max-w-[320px] rounded-[1.7rem] border border-white/10 bg-white/10 p-3 text-white shadow-2xl shadow-black/40 backdrop-blur-xl sm:max-w-sm sm:p-5"> <!-- Imagen --> <div class="overflow-hidden rounded-[1.2rem]"> <img${addAttribute(srcImage, "src")} alt="Propiedad destacada" class="h-44 w-full rounded-[1.2rem] object-cover sm:h-56"> </div> <!-- Texto --> <div class="mt-4"> <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-100/70 sm:text-xs">
Propiedad destacada
</p> <h3 class="mt-2 text-2xl font-black leading-tight">
Encuentra tu próxima inversión
</h3> <p class="mt-3 text-sm leading-6 text-white/70">
Casas, terrenos y oportunidades listas para conocer.
</p> <!-- Botón --> <a href="/Terrenos" class="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-sky-950 transition hover:bg-sky-100">
Explorar catálogo
</a> </div> </div> </div> </div> </div> </article>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/ImagenPrincipal.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "ImagenPrincipal", $$ImagenPrincipal, { "h2Title": "Encuentra la propiedad perfecta para tu pr\xF3ximo paso", "srcImage": "/header1.webp", "description": "Tenemos casas, terrenos listos para construir, puedes ver nuestro catalogo." })} </section>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/sections/Header.astro", void 0);

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const phone = "524751080850";
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="relative overflow-hidden pt-20 pb-12 bg-gradient-to-b from-[#010D15] via-[#021c2e] to-[#06233A]"> <div class="absolute inset-0 pointer-events-none"> <div class="absolute left-1/2 top-[55%] h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C4766]/20 blur-[180px]"></div> </div> <div class="relative z-10 mx-auto max-w-7xl px-4"> <div class="mb-14 text-center"> <span class="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-white/75 backdrop-blur-md">
Servicios inmobiliarios
</span> <h2 class="mt-6 text-3xl md:text-5xl font-semibold text-white">
¿Qué necesitas hacer con tu propiedad?
</h2> <p class="mx-auto mt-5 max-w-2xl text-lg text-white/65">
Elige una opción y recibe asesoría directa por WhatsApp.
</p> </div> <div class="grid gap-6 lg:grid-cols-2"> <a${addAttribute(`https://wa.me/${phone}?text=${encodeURIComponent("Hola, Noe Aguilera quiero informes para escriturar mi terreno")}`, "href")} target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 md:p-10 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.09]"> <div class="absolute inset-x-0 top-0 h-1 bg-white/30"></div> <span class="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
Servicio legal
</span> <h3 class="mt-5 text-3xl md:text-4xl font-semibold text-white">
Escriturar terreno
</h3> <div class="mt-8 space-y-4 border-y border-white/10 py-6"> <div class="flex items-center gap-4"> <span class="h-2 w-2 rounded-full bg-white/70"></span> <p class="text-white/70">Revisión de documentos</p> </div> <div class="flex items-center gap-4"> <span class="h-2 w-2 rounded-full bg-white/70"></span> <p class="text-white/70">Orientación paso a paso</p> </div> <div class="flex items-center gap-4"> <span class="h-2 w-2 rounded-full bg-white/70"></span> <p class="text-white/70">Proceso más claro y seguro</p> </div> </div> <div class="mt-8 flex items-center justify-between gap-4"> <span class="font-semibold text-white">
Solicitar asesoría
</span> <span class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#021c2e] transition group-hover:translate-x-1">
→
</span> </div> </a> <a${addAttribute(`https://wa.me/${phone}?text=${encodeURIComponent("Hola, Noe Aguilera quiero publicar mi terreno en tu p\xE1gina")}`, "href")} target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 md:p-10 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.09]"> <div class="absolute inset-x-0 top-0 h-1 bg-white/30"></div> <span class="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
Venta de propiedad
</span> <h3 class="mt-5 text-3xl md:text-4xl font-semibold text-white">
Publicar terreno
</h3> <div class="mt-8 space-y-4 border-y border-white/10 py-6"> <div class="flex items-center gap-4"> <span class="h-2 w-2 rounded-full bg-white/70"></span> <p class="text-white/70">Fotos e información clara</p> </div> <div class="flex items-center gap-4"> <span class="h-2 w-2 rounded-full bg-white/70"></span> <p class="text-white/70">Mayor visibilidad para compradores</p> </div> <div class="flex items-center gap-4"> <span class="h-2 w-2 rounded-full bg-white/70"></span> <p class="text-white/70">Contacto directo con interesados</p> </div> </div> <div class="mt-8 flex items-center justify-between gap-4"> <span class="font-semibold text-white">
Publicar propiedad
</span> <span class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#021c2e] transition group-hover:translate-x-1">
→
</span> </div> </a> </div> </div> </section>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/sections/Servicios.astro", void 0);

const $$Astro = createAstro("https://noeaguilera.com");
const $$UbicacionComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UbicacionComponent;
  const {
    lat,
    lon,
    zoom = 17
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<iframe class="w-full h-full" style="border:0;" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"${addAttribute(`https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=${zoom}&output=embed`, "src")}></iframe>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/ui/UbicacionComponent.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$UbicacionSeccion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="ubicacion" class="relative overflow-hidden py-24 bg-gradient-to-b from-[#06233A] via-[#041F33] to-[#010D15]"> <div class="absolute inset-0 pointer-events-none"> <div class="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C4766]/20 blur-[180px]"></div> </div> <div class="relative z-10 mx-auto max-w-7xl px-4"> <div class="mb-14 text-center"> <span class="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-white/75 backdrop-blur-md">\nAtenci\xF3n presencial\n</span> <h2 class="mt-6 text-3xl md:text-5xl font-semibold text-white">\nVis\xEDtame o agenda una cita\n</h2> <p class="mx-auto mt-5 max-w-2xl text-lg text-white/65">\nAgenda una asesor\xEDa directa y recibe atenci\xF3n personalizada.\n</p> </div> <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"> <!-- MAPA --> <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl"> <div class="aspect-video lg:aspect-auto lg:h-full min-h-[420px]"> ', ' </div> </div> <!-- FORMULARIO --> <div class="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl"> <span class="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">\nAgenda tu cita\n</span> <h3 class="mt-4 text-3xl font-semibold text-white">\nRecibe atenci\xF3n personalizada\n</h3> <form id="whatsapp-form" class="mt-8 space-y-4"> <input id="nombre" type="text" required placeholder="Tu nombre" class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <input id="fecha" type="date" required class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <select id="hora" required class="w-full appearance-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <option value="" disabled selected class="bg-[#183349] text-white">\nSelecciona horario aproximado\n</option> <option class="bg-[#183349] text-white">09:00 - 11:00</option> <option class="bg-[#183349] text-white">11:00 - 13:00</option> <option class="bg-[#183349] text-white">13:00 - 15:00</option> <option class="bg-[#183349] text-white">15:00 - 17:00</option> <option class="bg-[#183349] text-white">17:00 - 19:00</option> </select> <select id="motivo" required class="w-full appearance-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <option value="" disabled selected class="bg-[#183349] text-white">\nSelecciona el motivo de tu cita\n</option> <option value="Comprar un terreno" class="bg-[#183349] text-white">\nComprar un terreno\n</option> <option value="Vender o publicar mi propiedad" class="bg-[#183349] text-white">\nVender o publicar mi propiedad\n</option> <option value="Escriturar un terreno" class="bg-[#183349] text-white">\nEscriturar un terreno\n</option> <option value="Recibir asesor\xEDa personalizada" class="bg-[#183349] text-white">\nRecibir asesor\xEDa personalizada\n</option> </select> <textarea id="mensaje" rows="4" placeholder="Cu\xE9ntame brevemente en qu\xE9 puedo ayudarte" class="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.14]"></textarea> <button type="submit" class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-[#021c2e] transition hover:-translate-y-1 hover:bg-slate-100">\nEnviar por WhatsApp\n</button> </form> </div> </div> </div> </section> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const form = document.getElementById("whatsapp-form");\n\n    form?.addEventListener("submit", (e) => {\n      e.preventDefault();\n\n      const nombre = document.getElementById("nombre").value.trim();\n      const fecha = document.getElementById("fecha").value;\n      const hora = document.getElementById("hora").value;\n      const motivo = document.getElementById("motivo").value;\n      const mensaje = document.getElementById("mensaje").value.trim();\n\n      const texto = `Hola No\xE9, me gustar\xEDa agendar una cita para recibir asesor\xEDa personalizada.\n\nNombre: ${nombre}\nFecha deseada: ${fecha}\nHorario aproximado: ${hora}\nMotivo: ${motivo}\nMensaje: ${mensaje || "Me gustar\xEDa recibir orientaci\xF3n y resolver algunas dudas."}\n\nQuedo atento a tu confirmaci\xF3n.`;\n\n      const url = `https://wa.me/524751080850?text=${encodeURIComponent(texto)}`;\n      window.open(url, "_blank");\n    });\n  });\n<\/script>'], ["", '<section id="ubicacion" class="relative overflow-hidden py-24 bg-gradient-to-b from-[#06233A] via-[#041F33] to-[#010D15]"> <div class="absolute inset-0 pointer-events-none"> <div class="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C4766]/20 blur-[180px]"></div> </div> <div class="relative z-10 mx-auto max-w-7xl px-4"> <div class="mb-14 text-center"> <span class="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-white/75 backdrop-blur-md">\nAtenci\xF3n presencial\n</span> <h2 class="mt-6 text-3xl md:text-5xl font-semibold text-white">\nVis\xEDtame o agenda una cita\n</h2> <p class="mx-auto mt-5 max-w-2xl text-lg text-white/65">\nAgenda una asesor\xEDa directa y recibe atenci\xF3n personalizada.\n</p> </div> <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"> <!-- MAPA --> <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl"> <div class="aspect-video lg:aspect-auto lg:h-full min-h-[420px]"> ', ' </div> </div> <!-- FORMULARIO --> <div class="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl"> <span class="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">\nAgenda tu cita\n</span> <h3 class="mt-4 text-3xl font-semibold text-white">\nRecibe atenci\xF3n personalizada\n</h3> <form id="whatsapp-form" class="mt-8 space-y-4"> <input id="nombre" type="text" required placeholder="Tu nombre" class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <input id="fecha" type="date" required class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <select id="hora" required class="w-full appearance-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <option value="" disabled selected class="bg-[#183349] text-white">\nSelecciona horario aproximado\n</option> <option class="bg-[#183349] text-white">09:00 - 11:00</option> <option class="bg-[#183349] text-white">11:00 - 13:00</option> <option class="bg-[#183349] text-white">13:00 - 15:00</option> <option class="bg-[#183349] text-white">15:00 - 17:00</option> <option class="bg-[#183349] text-white">17:00 - 19:00</option> </select> <select id="motivo" required class="w-full appearance-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-white/30 focus:bg-white/[0.14]"> <option value="" disabled selected class="bg-[#183349] text-white">\nSelecciona el motivo de tu cita\n</option> <option value="Comprar un terreno" class="bg-[#183349] text-white">\nComprar un terreno\n</option> <option value="Vender o publicar mi propiedad" class="bg-[#183349] text-white">\nVender o publicar mi propiedad\n</option> <option value="Escriturar un terreno" class="bg-[#183349] text-white">\nEscriturar un terreno\n</option> <option value="Recibir asesor\xEDa personalizada" class="bg-[#183349] text-white">\nRecibir asesor\xEDa personalizada\n</option> </select> <textarea id="mensaje" rows="4" placeholder="Cu\xE9ntame brevemente en qu\xE9 puedo ayudarte" class="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:bg-white/[0.14]"></textarea> <button type="submit" class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-[#021c2e] transition hover:-translate-y-1 hover:bg-slate-100">\nEnviar por WhatsApp\n</button> </form> </div> </div> </div> </section> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const form = document.getElementById("whatsapp-form");\n\n    form?.addEventListener("submit", (e) => {\n      e.preventDefault();\n\n      const nombre = document.getElementById("nombre").value.trim();\n      const fecha = document.getElementById("fecha").value;\n      const hora = document.getElementById("hora").value;\n      const motivo = document.getElementById("motivo").value;\n      const mensaje = document.getElementById("mensaje").value.trim();\n\n      const texto = \\`Hola No\xE9, me gustar\xEDa agendar una cita para recibir asesor\xEDa personalizada.\n\nNombre: \\${nombre}\nFecha deseada: \\${fecha}\nHorario aproximado: \\${hora}\nMotivo: \\${motivo}\nMensaje: \\${mensaje || "Me gustar\xEDa recibir orientaci\xF3n y resolver algunas dudas."}\n\nQuedo atento a tu confirmaci\xF3n.\\`;\n\n      const url = \\`https://wa.me/524751080850?text=\\${encodeURIComponent(texto)}\\`;\n      window.open(url, "_blank");\n    });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "UbicacionComponent", $$UbicacionComponent, { "lat": 21.5209919, "lon": -102.2377808, "zoom": 17 }));
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/sections/UbicacionSeccion.astro", void 0);

const $$PresentacionNoe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Noe-Aguilera" class="relative overflow-hidden py-10 bg-gradient-to-b from-[#010D15] via-[#021c2e] to-[#06233A]"> <!-- Glow central --> <div class="absolute inset-0 pointer-events-none"> <div class="absolute left-[42%] top-[45%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C4766]/20 blur-[120px]"></div> <div class="absolute left-[60%] top-[55%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]"></div> </div> <div class="relative mx-auto max-w-7xl px-4"> <div class="mb-14 text-center"> <span class="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-white/80 backdrop-blur-md">
Asesoría inmobiliaria local
</span> <h2 class="mt-6 text-3xl md:text-5xl font-semibold text-white">
Experiencia local para invertir con confianza
</h2> <p class="mx-auto mt-5 max-w-2xl text-lg text-white/70">
Acompañamiento profesional para encontrar terrenos, casas y
        oportunidades de inversión en Encarnación de Díaz y sus alrededores.
</p> </div> <div class="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"> <div class="relative mx-auto w-full max-w-md lg:max-w-none"> <div class="absolute -inset-4 rounded-[2rem] bg-white/15 blur-3xl"></div> <img class="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl" src="/noe-aguilera.jpg" alt="Noé Aguilera, asesor en venta de terrenos en Encarnación de Díaz" loading="lazy"> </div> <div class="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 md:p-10 shadow-2xl backdrop-blur-xl"> <span class="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
Conoce a tu asesor
</span> <h3 class="mt-4 text-3xl md:text-5xl font-semibold text-white">
Soy Noé Aguilera
</h3> <p class="mt-5 text-lg leading-relaxed text-white/75">
Especialista en la venta de terrenos urbanos, rurales y comerciales.
          Mi enfoque es brindarte información clara, opciones confiables y
          acompañamiento personalizado durante todo el proceso.
</p> <div class="mt-8 space-y-4 border-y border-white/10 py-7"> <div class="group flex gap-5"> <div class="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70 transition group-hover:bg-white"></div> <div> <h4 class="text-lg font-semibold text-white">
Evaluación de propiedades
</h4> <p class="mt-1 text-sm leading-relaxed text-white/60">
Selección de opciones con ubicación, medidas y características
                claras para facilitar tu decisión.
</p> </div> </div> <div class="group flex gap-5"> <div class="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70 transition group-hover:bg-white"></div> <div> <h4 class="text-lg font-semibold text-white">
Acompañamiento personalizado
</h4> <p class="mt-1 text-sm leading-relaxed text-white/60">
Atención directa antes, durante y después de elegir una
                propiedad.
</p> </div> </div> <div class="group flex gap-5"> <div class="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70 transition group-hover:bg-white"></div> <div> <h4 class="text-lg font-semibold text-white">
Conocimiento del mercado local
</h4> <p class="mt-1 text-sm leading-relaxed text-white/60">
Experiencia en Encarnación de Díaz y zonas cercanas para
                identificar oportunidades reales.
</p> </div> </div> </div> <div class="mt-8 grid grid-cols-3 gap-4"> <div> <strong class="block text-2xl md:text-3xl font-semibold text-white">Local</strong> <span class="mt-1 block text-sm text-white/50">Atención cercana</span> </div> <div> <strong class="block text-2xl md:text-3xl font-semibold text-white">Directa</strong> <span class="mt-1 block text-sm text-white/50">Comunicación clara</span> </div> <div> <strong class="block text-2xl md:text-3xl font-semibold text-white">Segura</strong> <span class="mt-1 block text-sm text-white/50">Decisión informada</span> </div> </div> <div class="mt-8 flex flex-col gap-4 sm:flex-row"> <a href="https://wa.me/52XXXXXXXXXX" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-[#021c2e] shadow-lg shadow-white/10 transition hover:-translate-y-1 hover:bg-slate-100">
Contactar por WhatsApp
</a> <a href="#propiedades" class="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
Ver propiedades
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/sections/PresentacionNoe.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$VideoPresentacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section id="Video-Terrenos" class="relative overflow-hidden pt-24 pb-20 bg-gradient-to-b from-[#06233A] via-[#041F33] to-[#010D15]" data-astro-cid-kvdszbjt> <!-- Glow central --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-kvdszbjt> <div class="absolute left-1/2 top-[55%] h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[250px]" data-astro-cid-kvdszbjt></div> </div> <div class="relative z-10 mx-auto max-w-7xl px-4" data-astro-cid-kvdszbjt> <div class="mb-10 text-center" data-astro-cid-kvdszbjt> <span class="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-white/75 backdrop-blur-md" data-astro-cid-kvdszbjt>\nAtenci\xF3n presencial y a distancia\n</span> <h2 class="mt-6 text-3xl md:text-5xl font-semibold text-white leading-tight" data-astro-cid-kvdszbjt>\nCompra tu terreno aunque est\xE9s lejos\n</h2> <p class="mx-auto mt-5 max-w-2xl text-lg text-white/65" data-astro-cid-kvdszbjt>\nRecibe informaci\xF3n clara, fotos, videos y asesor\xEDa directa antes de\n        tomar una decisi\xF3n.\n</p> </div> <div class="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]" data-astro-cid-kvdszbjt> <!-- Video --> <div class="relative mx-auto w-full max-w-[430px]" data-astro-cid-kvdszbjt> <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl" data-astro-cid-kvdszbjt> <video id="video-presentacion" class="aspect-[9/16] w-full object-cover" autoplay muted loop playsinline preload="metadata" data-astro-cid-kvdszbjt> <source src="/noe-aguilera-terrenos.mp4" type="video/mp4" data-astro-cid-kvdszbjt>\nTu navegador no soporta el video.\n</video> <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5" data-astro-cid-kvdszbjt> <div class="flex flex-wrap items-center justify-between gap-3" data-astro-cid-kvdszbjt> <span class="text-sm font-medium text-white/85" data-astro-cid-kvdszbjt>\nRecorrido y asesor\xEDa personalizada\n</span> <div class="flex gap-2" data-astro-cid-kvdszbjt> <button id="playPauseBtn" type="button" class="video-control-btn" aria-label="Pausar video" data-astro-cid-kvdszbjt>\n\u23F8\n</button> <button id="muteBtn" type="button" class="video-control-btn" aria-label="Activar sonido" data-astro-cid-kvdszbjt>\n\u{1F507}\n</button> <button id="restartBtn" type="button" class="video-control-btn" aria-label="Reiniciar video" data-astro-cid-kvdszbjt>\n\u21BA\n</button> </div> </div> </div> </div> </div> <!-- Informaci\xF3n --> <div class="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 md:p-10 shadow-2xl backdrop-blur-xl" data-astro-cid-kvdszbjt> <span class="text-sm font-semibold uppercase tracking-[0.25em] text-white/50" data-astro-cid-kvdszbjt>\nInversi\xF3n a distancia\n</span> <h3 class="mt-4 text-3xl md:text-5xl font-semibold text-white" data-astro-cid-kvdszbjt>\nDecide con claridad antes de visitar\n</h3> <p class="mt-5 text-lg leading-relaxed text-white/70" data-astro-cid-kvdszbjt>\nIdeal para compradores que viven fuera de Encarnaci\xF3n de D\xEDaz y desean\n          revisar opciones reales antes de apartar o agendar una visita.\n</p> <div class="mt-8 space-y-5 border-y border-white/10 py-7" data-astro-cid-kvdszbjt> <div class="flex gap-5" data-astro-cid-kvdszbjt> <div class="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70" data-astro-cid-kvdszbjt></div> <div data-astro-cid-kvdszbjt> <h4 class="text-lg font-semibold text-white" data-astro-cid-kvdszbjt>\nRecorridos y material visual\n</h4> <p class="mt-1 text-sm leading-relaxed text-white/60" data-astro-cid-kvdszbjt>\nFotos y videos para conocer mejor cada propiedad.\n</p> </div> </div> <div class="flex gap-5" data-astro-cid-kvdszbjt> <div class="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70" data-astro-cid-kvdszbjt></div> <div data-astro-cid-kvdszbjt> <h4 class="text-lg font-semibold text-white" data-astro-cid-kvdszbjt>\nComunicaci\xF3n directa\n</h4> <p class="mt-1 text-sm leading-relaxed text-white/60" data-astro-cid-kvdszbjt>\nResuelve dudas de ubicaci\xF3n, precio, medidas y disponibilidad.\n</p> </div> </div> <div class="flex gap-5" data-astro-cid-kvdszbjt> <div class="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70" data-astro-cid-kvdszbjt></div> <div data-astro-cid-kvdszbjt> <h4 class="text-lg font-semibold text-white" data-astro-cid-kvdszbjt>\nAcompa\xF1amiento personalizado\n</h4> <p class="mt-1 text-sm leading-relaxed text-white/60" data-astro-cid-kvdszbjt>\nAsesor\xEDa clara para invertir con mayor seguridad.\n</p> </div> </div> </div> <div class="mt-8 flex flex-col gap-4 sm:flex-row" data-astro-cid-kvdszbjt> <a href="https://wa.me/524751080850" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-[#021c2e] transition hover:-translate-y-1 hover:bg-slate-100" data-astro-cid-kvdszbjt>\nSolicitar asesor\xEDa\n</a> <a href="#propiedades" class="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10" data-astro-cid-kvdszbjt>\nVer propiedades\n</a> </div> </div> </div> </div> </section> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const video = document.getElementById("video-presentacion");\n    const playPauseBtn = document.getElementById("playPauseBtn");\n    const muteBtn = document.getElementById("muteBtn");\n    const restartBtn = document.getElementById("restartBtn");\n\n    if (!video || !playPauseBtn || !muteBtn || !restartBtn) return;\n\n    playPauseBtn.addEventListener("click", () => {\n      if (video.paused) {\n        video.play();\n        playPauseBtn.textContent = "\u23F8";\n        playPauseBtn.setAttribute("aria-label", "Pausar video");\n      } else {\n        video.pause();\n        playPauseBtn.textContent = "\u25B6";\n        playPauseBtn.setAttribute("aria-label", "Reproducir video");\n      }\n    });\n\n    muteBtn.addEventListener("click", () => {\n      video.muted = !video.muted;\n      muteBtn.textContent = video.muted ? "\u{1F507}" : "\u{1F50A}";\n      muteBtn.setAttribute(\n        "aria-label",\n        video.muted ? "Activar sonido" : "Silenciar video"\n      );\n    });\n\n    restartBtn.addEventListener("click", () => {\n      video.currentTime = 0;\n      video.play();\n      playPauseBtn.textContent = "\u23F8";\n      playPauseBtn.setAttribute("aria-label", "Pausar video");\n    });\n  });\n<\/script> '])), maybeRenderHead());
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/sections/VideoPresentacion.astro", void 0);

const $$TerrenosCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="explorar-terrenos" class="relative overflow-hidden py- bg-gradient-to-b from-[#010D15] via-[#06233A] to-[#010D15]"> <div class="absolute inset-0 pointer-events-none"> <div class="absolute left-1/2 top-[55%] h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C4766]/20 blur-[190px]"></div> </div> <div class="relative z-10 mx-auto max-w-7xl px-4"> <!-- Encabezado --> <div class="mb-14 text-center"> <span class="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-white/75 backdrop-blur-md">
Explora propiedades
</span> <h2 class="mt-6 text-3xl md:text-5xl font-semibold text-white">
Encuentra tu próximo terreno
</h2> <p class="mx-auto mt-5 max-w-2xl text-lg text-white/65">
Explora propiedades disponibles o visualízalas directamente en el mapa.
</p> </div> <!-- Cards --> <div class="grid gap-6 lg:grid-cols-2"> <!-- TERRENOS --> <a href="/Terrenos" class="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"> <img src="/terrenos.webp" alt="Terrenos disponibles" class="aspect-[16/10] w-full rounded-[1.5rem] object-cover"> <div class="mt-6 flex items-center justify-between gap-4"> <div> <h3 class="text-2xl font-semibold text-white">
Ver todos los terrenos
</h3> <p class="mt-2 text-sm text-white/60">
Fotos, precio, medidas, ubicación y detalles de cada propiedad.
</p> </div> <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-[#021c2e] transition group-hover:translate-x-1">
→
</span> </div> </a> <!-- MAPA --> <a href="/MapaTerrenos" class="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"> <img src="/mapa.webp" alt="Mapa interactivo" class="aspect-[16/10] w-full rounded-[1.5rem] object-cover"> <div class="mt-6 flex items-center justify-between gap-4"> <div> <h3 class="text-2xl font-semibold text-white">
Explorar terrenos por ubicación
</h3> <p class="mt-2 text-sm text-white/60">
Encuentra propiedades directamente desde el mapa interactivo.
</p> </div> <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-[#021c2e] transition group-hover:translate-x-1">
→
</span> </div> </a> </div> </div> </section>`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/components/sections/TerrenosCTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout", $$Layout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, {})} ${renderComponent($$result3, "PresentacionNoe", $$PresentacionNoe, {})} ${renderComponent($$result3, "VideoPresentacion", $$VideoPresentacion, {})} ${renderComponent($$result3, "TerrenosCTA", $$TerrenosCTA, {})} ${renderComponent($$result3, "Servicios", $$Servicios, {})} ${renderComponent($$result3, "UbicacionSeccion", $$UbicacionSeccion, {})} ${renderComponent($$result3, "Footer", $$Footer, {})} ` })}` })}`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/index.astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
