
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
    card.className = "relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl duration-300 h-160 hover:scale-102 duration-300 flex flex-col";
    card.innerHTML = `
      <div class='w-full h-60 bg-gray-200 flex items-center justify-center'>
        ${terreno.imagenes && terreno.imagenes.length > 0 ? `<img src='${terreno.imagenes[0]}' alt='${terreno.titulo}' class='w-full h-60 object-cover'/>` : `<span class='text-gray-400'>Sin imagen</span>`}
      </div>
      <div class="p-4 space-y-2 flex-1">
        <h2 class="text-2xl font-bold text-black">${terreno.titulo}</h2>
        <p class="text-sm text-gray-700">${terreno.descripcion ?? ""}</p>
        <p class="text-green-700 font-semibold">$${Number(terreno.precio).toLocaleString()} MXN</p>
        ${terreno.medidas ? `<p class="text-sm text-gray-500">Medidas: ${terreno.medidas}</p>` : ""}
        ${terreno.ubicacion ? `<p class="text-sm text-gray-500">Ubicación: ${terreno.ubicacion}</p>` : ""}
        ${terreno.fecha ? `<p class="text-xs text-gray-400">Publicado: ${new Date(terreno.fecha).toLocaleDateString()}</p>` : ""}
      </div>
      <div class="flex gap-2 p-4 pt-0">
        <button class="editarTerrenoBtn bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded flex-1" data-id="${terreno.id}">Editar</button>
        <button class="eliminarTerrenoBtn bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex-1" data-id="${terreno.id}">Eliminar</button>
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
    window.location.href = `/EditarTerreno?id=${id}&modo=editar`;
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
