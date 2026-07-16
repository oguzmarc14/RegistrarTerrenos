import { a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B9knNAVK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_6kDN2m-r.mjs';
import { $ as $$CardMostrarTerreno } from '../../chunks/CardMostrarTerreno_44qPrEJW.mjs';
import { a as $$Navbar, $ as $$Footer } from '../../chunks/Footer_98v3p14c.mjs';
import { $ as $$TipoTerreno } from '../../chunks/TipoTerreno_THRMFlPy.mjs';
import { s as supabase } from '../../chunks/supabaseClient_RHDkaJtg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Departamentos = createComponent(async ($$result, $$props, $$slots) => {
  const { data: terrenos, error } = await supabase.from("Terrenos").select("id, titulo, descripcion, precio, imagenes, medidas, ubicacion, tipo, fecha").eq("tipo", "departamento").order("fecha", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gradient-to-b from-sky-950 via-sky-950 to-sky-950/90"> <div> ${renderComponent($$result2, "Navbar", $$Navbar, {})} </div> <div class="text-center px-6 mt-8"> <h2 class="text-4xl md:text-5xl text-white">
Departamentos en venta y renta en Encarnación de Díaz
</h2> <p class="text-sky-100/80 max-w-4xl mx-auto mt-4">
Encuentra departamentos ideales para inversión o vivienda. Consulta precios, ubicación y características actualizadas.
</p> <div class="mt-6"> ${renderComponent($$result2, "TipoTerreno", $$TipoTerreno, {})} </div> </div> <div class="text-center max-w-4xl mx-auto mb-12"> <p class="text-lg text-sky-100/80 leading-relaxed">
Aquí puedes ver todos los departamentos actualmente en venta o renta.
</p> </div> ${error && renderTemplate`<p class="text-red-500 text-center">Error al cargar departamentos</p>`} <div class="grid gap-10 sm:gap-12 md:gap-14 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 mx-auto px-4 md:px-8 mb-12"> ${Array.isArray(terrenos) && terrenos.map((terreno) => renderTemplate`${renderComponent($$result2, "CardMostrarTerreno", $$CardMostrarTerreno, { "id": terreno.id, "imagenes": terreno.imagenes, "titulo": terreno.titulo, "descripcion": terreno.descripcion, "precio": terreno.precio, "textBoton": "Ver m\xE1s", "hrefBoton": "#", "medidas": terreno.medidas, "ubicacion": terreno.ubicacion, "fecha": terreno.fecha, "tipo": terreno.tipo })}`)} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} </section> ` })}`;
}, "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/TipoTerreno/Departamentos.astro", void 0);

const $$file = "C:/Users/Oguzm/OneDrive/Documentos/GitHub/RegistrarTerrenos/src/pages/TipoTerreno/Departamentos.astro";
const $$url = "/TipoTerreno/Departamentos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Departamentos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
