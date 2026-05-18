import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const lista = document.getElementById("admin-terrenos-lista");

function mostrarAlerta({ titulo = "Mensaje", mensaje = "", tipo = "success" }) {
  const existente = document.getElementById("custom-alert");
  if (existente) existente.remove();

  const estilos = {
    success: {
      icono: "✅",
      fondo: "from-emerald-500 to-emerald-600",
      borde: "border-emerald-400/30",
    },
    error: {
      icono: "❌",
      fondo: "from-rose-500 to-rose-600",
      borde: "border-rose-400/30",
    },
    warning: {
      icono: "⚠️",
      fondo: "from-amber-500 to-orange-600",
      borde: "border-amber-400/30",
    },
  };

  const estilo = estilos[tipo] || estilos.success;

  const modal = document.createElement("div");
  modal.id = "custom-alert";
  modal.className =
    "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm";

  modal.innerHTML = `
    <div class="w-full max-w-md overflow-hidden rounded-[2rem] border ${estilo.borde} bg-slate-950 text-white shadow-2xl">
      <div class="bg-gradient-to-r ${estilo.fondo} p-5 text-center">
        <div class="text-5xl">${estilo.icono}</div>
        <h2 class="mt-3 text-2xl font-black tracking-tight">${titulo}</h2>
      </div>

      <div class="p-6 text-center">
        <p class="text-sm leading-7 text-slate-300">${mensaje}</p>

        <button
          id="cerrar-alerta"
          class="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:scale-105 hover:bg-slate-200"
        >
          Continuar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("cerrar-alerta")?.addEventListener("click", () => {
    modal.remove();
  });
}

function confirmarEliminar({ titulo, mensaje, onConfirm }) {
  const existente = document.getElementById("custom-confirm");
  if (existente) existente.remove();

  const modal = document.createElement("div");
  modal.id = "custom-confirm";
  modal.className =
    "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm";

  modal.innerHTML = `
    <div class="w-full max-w-md overflow-hidden rounded-[2rem] border border-rose-400/30 bg-slate-950 text-white shadow-2xl">
      <div class="bg-gradient-to-r from-rose-500 to-rose-600 p-5 text-center">
        <div class="text-5xl">🗑️</div>
        <h2 class="mt-3 text-2xl font-black tracking-tight">${titulo}</h2>
      </div>

      <div class="p-6 text-center">
        <p class="text-sm leading-7 text-slate-300">${mensaje}</p>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <button
            id="cancelar-eliminar"
            class="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
          >
            Cancelar
          </button>

          <button
            id="confirmar-eliminar"
            class="rounded-2xl bg-rose-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-500"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("cancelar-eliminar")?.addEventListener("click", () => {
    modal.remove();
  });

  document.getElementById("confirmar-eliminar")?.addEventListener("click", async () => {
    modal.remove();
    await onConfirm();
  });
}

async function cargarTerrenosAdmin() {
  if (!lista) return;

  lista.innerHTML =
    "<p class='col-span-full text-center text-white'>Cargando terrenos...</p>";

  const { data, error } = await supabase
    .from("Terrenos")
    .select("*")
    .order("fecha", { ascending: false });

  if (error || !data || data.length === 0) {
    lista.innerHTML = `
      <p class='col-span-full text-center text-red-300'>
        ${error ? "❌ Error al cargar terrenos" : "No hay terrenos aún."}
      </p>
    `;
    return;
  }

  lista.innerHTML = "";

  function formatearPrecio(valor) {
    const texto = String(valor ?? "").trim();

    if (!texto) return "";

    const esSoloNumero = /^[\d.,\s]+$/.test(texto);
    if (!esSoloNumero) return texto;

    const numero = Number(texto.replace(/\s+/g, "").replace(/,/g, ""));
    return Number.isFinite(numero) ? `$${numero.toLocaleString()} MXN` : texto;
  }

  data.forEach((terreno) => {
    const imagenPrincipal =
      Array.isArray(terreno.imagenes) && terreno.imagenes.length > 0
        ? terreno.imagenes[0]
        : null;

    const precioFormateado = formatearPrecio(terreno.precio);

    const card = document.createElement("article");

    card.className =
      "relative flex flex-col overflow-hidden rounded-[1.8rem] border border-slate-200/70 bg-white/95 shadow-[0_22px_54px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_74px_rgba(15,23,42,0.18)] sm:min-h-[40rem]";

    card.innerHTML = `
      <div class="w-full h-48 sm:h-[22rem] bg-slate-100 flex items-center justify-center">
        ${
          imagenPrincipal
            ? `<img src="${imagenPrincipal}" alt="${terreno.titulo ?? "Terreno"}" class="w-full h-48 sm:h-[22rem] object-cover rounded-t-[1.8rem]" />`
            : `<div class="w-full h-48 sm:h-[22rem] flex items-center justify-center text-slate-400">Sin imagen</div>`
        }
      </div>

      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3">
            ${
              terreno.tipo
                ? `<span class="inline-flex rounded-full bg-sky-900/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-black">${terreno.tipo}</span>`
                : "<span></span>"
            }

            <p class="text-sm font-bold text-emerald-700">
              ${precioFormateado}
            </p>
          </div>

          <h2 class="text-lg font-semibold tracking-tight text-slate-950">
            ${terreno.titulo ?? ""}
          </h2>

          <p class="text-sm leading-6 text-slate-600 overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">
            ${terreno.descripcion ?? ""}
          </p>

          <div class="grid gap-2 sm:grid-cols-2 pt-1">
            ${
              terreno.medidas
                ? `
                  <div class="rounded-2xl border border-slate-300/70 bg-slate-100 p-3 text-sm font-medium text-slate-700">
                    Medidas<br/>
                    <span class="font-semibold text-slate-900">${terreno.medidas}</span>
                  </div>
                `
                : ""
            }

            ${
              terreno.ubicacion
                ? `
                  <div class="rounded-2xl border border-slate-300/70 bg-slate-100 p-3 text-sm font-medium text-slate-700">
                    Ubicación<br/>
                    <span class="font-semibold text-slate-900">${terreno.ubicacion}</span>
                  </div>
                `
                : ""
            }
          </div>

          ${
            terreno.google_maps
              ? `
                <a
                  href="${terreno.google_maps}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex w-full items-center justify-center rounded-2xl bg-sky-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800"
                >
                  📍 Ver ubicación en Google Maps
                </a>
              `
              : ""
          }
        </div>

        <div class="mt-auto mb-3 grid grid-cols-2 gap-3 pt-5">
          <button
            class="editarTerrenoBtn inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky-900/20 bg-sky-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800"
            data-id="${terreno.id}"
          >
            Editar
          </button>

          <button
            class="eliminarTerrenoBtn inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-500/20 bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/20 transition hover:bg-rose-500"
            data-id="${terreno.id}"
          >
            Eliminar
          </button>
        </div>
      </div>
    `;

    lista.appendChild(card);
  });
}

cargarTerrenosAdmin();

lista?.addEventListener("click", async (e) => {
  const editarBtn = e.target.closest(".editarTerrenoBtn");
  const eliminarBtn = e.target.closest(".eliminarTerrenoBtn");

  if (editarBtn) {
    const id = editarBtn.dataset.id;
    window.location.href = `/EditarTerrenoId?id=${encodeURIComponent(id)}`;
    return;
  }

  if (eliminarBtn) {
    const id = eliminarBtn.dataset.id;

    confirmarEliminar({
      titulo: "Eliminar terreno",
      mensaje: "¿Seguro que deseas eliminar este terreno? Esta acción no se puede deshacer.",
      onConfirm: async () => {
        const res = await fetch(
          `/api/editarTerreno-api?id=${encodeURIComponent(id)}`,
          {
            method: "DELETE",
          }
        );

        const payload = await res.json().catch(() => null);

        if (res.ok) {
          mostrarAlerta({
            titulo: "Terreno eliminado",
            mensaje: "El terreno se eliminó correctamente.",
            tipo: "success",
          });

          cargarTerrenosAdmin();
        } else {
          mostrarAlerta({
            titulo: "Error al eliminar",
            mensaje: payload?.error ?? "No se pudo eliminar el terreno.",
            tipo: "error",
          });
        }
      },
    });
  }
});