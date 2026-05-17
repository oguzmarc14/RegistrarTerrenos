
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const lista = document.getElementById("admin-terrenos-lista");

async function cargarTerrenosAdmin() {
  lista.innerHTML = "<p class='col-span-full text-center'>Cargando terrenos...</p>";
  const { data, error } = await supabase.from("Terrenos").select("*").order("fecha", { ascending: false });
  if (error || !data || data.length === 0) {
    lista.innerHTML = `<p class='col-span-full text-center text-red-500'>${error ? "❌ Error al cargar terrenos" : "No hay terrenos aún."}</p>`;
    return;
  }
  lista.innerHTML = "";
  data.forEach((terreno) => {
    const card = document.createElement("article");
    card.className = "relative flex flex-col overflow-hidden rounded-[1.8rem] border border-slate-200/70 bg-white/95 shadow-[0_22px_54px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_74px_rgba(15,23,42,0.18)] sm:min-h-[40rem]";
    card.innerHTML = `
      <div class='w-full h-48 sm:h-[22rem] bg-slate-100 flex items-center justify-center'>
        ${terreno.imagenes && terreno.imagenes.length > 0 ? `<img src='${terreno.imagenes[0]}' alt='${terreno.titulo}' class='w-full h-48 sm:h-[22rem] object-cover rounded-t-[1.8rem]'/>` : `<div class='w-full h-48 sm:h-[22rem] flex items-center justify-center text-slate-400'>Sin imagen</div>`}
      </div>
      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3">
            ${terreno.tipo ? `<span class="inline-flex rounded-full bg-sky-900/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-black">${terreno.tipo}</span>` : "<span></span>"}
            <p class="text-sm font-bold text-emerald-700">$${Number(terreno.precio).toLocaleString()} MXN</p>
          </div>
          <h2 class="text-lg font-semibold tracking-tight text-slate-950">${terreno.titulo}</h2>
          <p class="text-sm leading-6 text-slate-600 overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">${terreno.descripcion ?? ""}</p>

          <div class="grid gap-2 sm:grid-cols-2 pt-1">
            ${terreno.medidas ? `<div class="rounded-2xl border border-slate-300/70 bg-slate-100 p-3 text-sm font-medium text-slate-700">Medidas<br/><span class="font-semibold text-slate-900">${terreno.medidas}</span></div>` : ""}
            ${terreno.ubicacion ? `<div class="rounded-2xl border border-slate-300/70 bg-slate-100 p-3 text-sm font-medium text-slate-700">Ubicación<br/><span class="font-semibold text-slate-900">${terreno.ubicacion}</span></div>` : ""}
          </div>
        </div>

        <div class="mt-auto mb-3 grid grid-cols-2 gap-3 pt-5">
          <button class="editarTerrenoBtn inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky-900/20 bg-sky-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-800" data-id="${terreno.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.33H5v-.92l9.06-9.06.92.92-9.06 9.06zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.33-2.33a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            Editar
          </button>
          <button class="eliminarTerrenoBtn inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-500/20 bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/20 transition hover:bg-rose-500" data-id="${terreno.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M9 3.75A2.25 2.25 0 0 1 11.25 1.5h1.5A2.25 2.25 0 0 1 15 3.75V4.5h4.5a.75.75 0 0 1 0 1.5h-1.02l-.6 11.02A2.25 2.25 0 0 1 15.64 19.5H8.36a2.25 2.25 0 0 1-2.24-2.48L5.52 6H4.5a.75.75 0 0 1 0-1.5H9v-.75zM10.5 4.5h3V3.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v.75zm-2.46 1.5.54 10.93a.75.75 0 0 0 .75.72h7.12a.75.75 0 0 0 .75-.72L17.74 6h-9.7z"/></svg>
            Eliminar
          </button>
        </div>
      </div>
    `;
    lista.appendChild(card);
  });
}

cargarTerrenosAdmin();

// Delegación de eventos para editar/eliminar
lista.addEventListener("click", async (e) => {
  const editarBtn = e.target.closest(".editarTerrenoBtn");
  const eliminarBtn = e.target.closest(".eliminarTerrenoBtn");
  if (editarBtn) {
    const id = editarBtn.dataset.id;
    window.location.href = `/EditarTerrenoId/?id=${id}`;
  }
  if (eliminarBtn) {
    const id = eliminarBtn.dataset.id;
    if (!confirm("¿Seguro que deseas eliminar este terreno?")) return;
    const res = await fetch("/api/editarTerreno-api", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      alert("✅ Terreno eliminado");
      cargarTerrenosAdmin();
    } else {
      alert("❌ Error al eliminar");
    }
  }
});
