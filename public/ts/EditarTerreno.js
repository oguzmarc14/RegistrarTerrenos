
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
    card.className = "relative flex flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/70 bg-white/95 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)] sm:min-h-[40rem]";
    card.innerHTML = `
      <div class='w-full h-48 sm:h-[22rem] bg-gray-200 flex items-center justify-center'>
        ${terreno.imagenes && terreno.imagenes.length > 0 ? `<img src='${terreno.imagenes[0]}' alt='${terreno.titulo}' class='w-full h-48 sm:h-[22rem] object-cover rounded-t-[1.6rem]'/>` : `<div class='w-full h-48 sm:h-[22rem] flex items-center justify-center text-gray-400'>Sin imagen</div>`}
      </div>
      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <div class="space-y-2">
          <h2 class="text-lg font-semibold tracking-tight text-slate-950">${terreno.titulo}</h2>
          <p class="text-sm leading-6 text-slate-600 overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">${terreno.descripcion ?? ""}</p>
          <div class="flex items-center justify-between gap-3 pt-1">
            <p class="text-base font-bold text-emerald-700">$${terreno.precio} MXN</p>
          </div>
          ${terreno.medidas ? `<p class="text-sm text-slate-500">Medidas: ${terreno.medidas}</p>` : ""}
          ${terreno.ubicacion ? `<p class="text-sm text-slate-500">Ubicación: ${terreno.ubicacion}</p>` : ""}
        </div>

        <div class="mt-auto mb-3 grid grid-cols-2 gap-2 pt-4">
          <button class="editarTerrenoBtn inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-600 bg-amber-600/95 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-95" data-id="${terreno.id}">Editar</button>
          <button class="eliminarTerrenoBtn inline-flex w-full items-center justify-center gap-2 rounded-full border border-red-600 bg-red-600/95 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-95" data-id="${terreno.id}">Eliminar</button>
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
