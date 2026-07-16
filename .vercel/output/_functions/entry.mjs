import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BoNYcrBH.mjs';
import { manifest } from './manifest_DlEcMKZ8.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/editarterreno-api.astro.mjs');
const _page2 = () => import('./pages/api/registrarterreno-api.astro.mjs');
const _page3 = () => import('./pages/editarterreno.astro.mjs');
const _page4 = () => import('./pages/editarterrenoid.astro.mjs');
const _page5 = () => import('./pages/iniciarsesion.astro.mjs');
const _page6 = () => import('./pages/mapaterrenos.astro.mjs');
const _page7 = () => import('./pages/paneladmin.astro.mjs');
const _page8 = () => import('./pages/primeroiniciarsesion.astro.mjs');
const _page9 = () => import('./pages/registrarterrenos.astro.mjs');
const _page10 = () => import('./pages/terreno/_id_.astro.mjs');
const _page11 = () => import('./pages/terrenos.astro.mjs');
const _page12 = () => import('./pages/tipoterreno/casas.astro.mjs');
const _page13 = () => import('./pages/tipoterreno/departamentos.astro.mjs');
const _page14 = () => import('./pages/tipoterreno/propiedadescomerciales.astro.mjs');
const _page15 = () => import('./pages/tipoterreno/terrenos.astro.mjs');
const _page16 = () => import('./pages/tipoterreno/terrenoscomerciales.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/editarTerreno-api.ts", _page1],
    ["src/pages/api/registrarTerreno-api.ts", _page2],
    ["src/pages/EditarTerreno.astro", _page3],
    ["src/pages/EditarTerrenoId.astro", _page4],
    ["src/pages/iniciarsesion.astro", _page5],
    ["src/pages/MapaTerrenos.astro", _page6],
    ["src/pages/panelAdmin.astro", _page7],
    ["src/pages/primeroIniciarSesion.astro", _page8],
    ["src/pages/RegistrarTerrenos.astro", _page9],
    ["src/pages/Terreno/[id].astro", _page10],
    ["src/pages/Terrenos.astro", _page11],
    ["src/pages/TipoTerreno/Casas.astro", _page12],
    ["src/pages/TipoTerreno/Departamentos.astro", _page13],
    ["src/pages/TipoTerreno/PropiedadesComerciales.astro", _page14],
    ["src/pages/TipoTerreno/Terrenos.astro", _page15],
    ["src/pages/TipoTerreno/TerrenosComerciales.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d17aa6d7-0d06-4787-8d4d-6f2de3af584a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
