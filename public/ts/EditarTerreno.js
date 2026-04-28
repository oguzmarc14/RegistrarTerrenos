import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


// Obtener el id del terreno desde la URL (?id=123)
function getIdFromUrl() {
	const params = new URLSearchParams(window.location.search);
	return params.get("id");
}

const id = getIdFromUrl();
const camposEditar = document.getElementById("campos-editar-terreno");
const formEditar = document.getElementById("formularioEditarTerreno");
const btnEliminar = document.getElementById("eliminarTerreno");

async function cargarTerreno() {
	if (!id) {
		camposEditar.innerHTML = '<p class="text-red-500">No se encontró el terreno.</p>';
		formEditar.querySelector('button[type="submit"]').disabled = true;
		btnEliminar.disabled = true;
		return;
	}
	const { data, error } = await supabase.from("Terrenos").select("*").eq("id", id).single();
	if (error || !data) {
		camposEditar.innerHTML = '<p class="text-red-500">Error cargando terreno.</p>';
		formEditar.querySelector('button[type="submit"]').disabled = true;
		btnEliminar.disabled = true;
		return;
	}
	// Renderizar campos
	camposEditar.innerHTML = `
		<input name="titulo" value="${data.titulo ?? ''}" placeholder="Nombre del terreno" required class="border border-white/20 bg-white/10 text-white placeholder-white/60 p-3 rounded w-full mb-3" />
		<textarea name="descripcion" placeholder="Descripción" required class="h-28 border border-white/20 bg-white/10 text-white placeholder-white/60 p-3 rounded w-full mb-3">${data.descripcion ?? ''}</textarea>
		<input name="precio" value="${data.precio ?? ''}" placeholder="Precio" required class="border border-white/20 bg-white/10 text-white placeholder-white/60 p-3 rounded w-full mb-3" />
		<input name="medidas" value="${data.medidas ?? ''}" placeholder="Medidas (Ej. 120x60)" class="border border-white/20 bg-white/10 text-white placeholder-white/60 p-3 rounded w-full mb-3" />
		<input name="ubicacion" value="${data.ubicacion ?? ''}" placeholder="Ubicación" class="border border-white/20 bg-white/10 text-white placeholder-white/60 p-3 rounded w-full mb-3" />
		<select name="tipo" required class="border border-white/20 bg-gray-700 text-white p-3 rounded w-full mb-3">
			<option value="">Selecciona el tipo de propiedad</option>
			<option value="terreno" ${data.tipo === 'terreno' ? 'selected' : ''}>Terreno</option>
			<option value="casa" ${data.tipo === 'casa' ? 'selected' : ''}>Casa</option>
			<option value="comercial" ${data.tipo === 'comercial' ? 'selected' : ''}>Propiedad Comercial</option>
			<option value="departamento" ${data.tipo === 'departamento' ? 'selected' : ''}>Departamento</option>
			<option value="terreno-comercial" ${data.tipo === 'terreno-comercial' ? 'selected' : ''}>Terreno Comercial</option>
		</select>
		<div class="mb-3">
			<label class="block text-white/80 mb-1">Imágenes actuales:</label>
			<div id="imagenes-actuales" class="flex gap-2 flex-wrap mb-2"></div>
			<input type="file" id="nuevasImagenes" name="imagenes" accept="image/*" multiple class="block mt-2" />
			<div id="previewNuevas" class="flex gap-2 mt-2"></div>
		</div>
	`;
	// Mostrar imágenes actuales
	const imagenesActuales = document.getElementById("imagenes-actuales");
	if (Array.isArray(data.imagenes)) {
		data.imagenes.forEach((img, idx) => {
			const div = document.createElement("div");
			div.className = "relative";
			div.innerHTML = `<img src="${img}" alt="img${idx}" class="w-20 h-20 object-cover rounded" /><button type="button" data-idx="${idx}" class="borrar-img absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">×</button>`;
			imagenesActuales.appendChild(div);
		});
	}
	// Borrar imagen actual
	imagenesActuales.addEventListener("click", (e) => {
		if (e.target.classList.contains("borrar-img")) {
			const idx = Number(e.target.dataset.idx);
			data.imagenes.splice(idx, 1);
			e.target.parentElement.remove();
		}
	});
	// Previsualizar nuevas imágenes
	const nuevasImagenes = document.getElementById("nuevasImagenes");
	const previewNuevas = document.getElementById("previewNuevas");
	nuevasImagenes.addEventListener("change", () => {
		previewNuevas.innerHTML = "";
		const archivos = Array.from(nuevasImagenes.files).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
		archivos.forEach((archivo) => {
			const reader = new FileReader();
			reader.onload = function (e) {
				const img = document.createElement("img");
				img.src = e.target?.result;
				img.className = "w-20 h-20 object-cover rounded";
				previewNuevas.appendChild(img);
			};
			reader.readAsDataURL(archivo);
		});
	});
}

cargarTerreno();

// Editar terreno
formEditar?.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(formEditar);
	const campos = Object.fromEntries(formData.entries());
	// Obtener imágenes actuales (sin las borradas)
	const imagenesActuales = Array.from(document.querySelectorAll("#imagenes-actuales img")).map(img => img.src);
	// Subir nuevas imágenes si hay
	const nuevas = document.getElementById("nuevasImagenes").files;
	let nuevasUrls = [];
	if (nuevas && nuevas.length > 0) {
		for (let i = 0; i < nuevas.length; i++) {
			const file = nuevas[i];
			// Puedes subir a Supabase Storage aquí si lo usas, o convertir a base64
			// Por simplicidad, aquí solo se omite la subida real
			// nuevasUrls.push(urlSubida);
		}
	}
	const imagenes = [...imagenesActuales, ...nuevasUrls];
	const body = { ...campos, imagenes, id };
	const res = await fetch("/api/editarTerreno-api", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
	if (res.ok) {
		alert("✅ Terreno actualizado");
		window.location.href = "/Terrenos";
	} else {
		alert("❌ Error al actualizar");
	}
});

// Eliminar terreno
btnEliminar?.addEventListener("click", async () => {
	if (!confirm("¿Seguro que deseas eliminar este terreno?")) return;
	const res = await fetch("/api/editarTerreno-api", {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id }),
	});
	if (res.ok) {
		alert("✅ Terreno eliminado");
		window.location.href = "/Terrenos";
	} else {
		alert("❌ Error al eliminar");
	}
});
