import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("formularioEditarTerreno");
const nuevasImagenesInput = document.getElementById("nuevasImagenes");
const previewNuevas = document.getElementById("previewNuevas");
const descripcionInput = form ? form.querySelector('textarea[name="descripcion"]') : null;
const imagenesActualesEl = document.getElementById("imagenes-actuales");

let imagenPortadaSeleccionada = null;
let indicePortadaNuevas = 0;

// Preview de nuevas imágenes
if (nuevasImagenesInput) {
  nuevasImagenesInput.addEventListener("change", function () {
    indicePortadaNuevas = 0;

    if (previewNuevas) {
      previewNuevas.innerHTML = "";
    }

    if (!nuevasImagenesInput.files || nuevasImagenesInput.files.length === 0) {
      return;
    }

    const archivosOrdenados = Array.from(nuevasImagenesInput.files).sort(
      function (a, b) {
        return a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      },
    );

    archivosOrdenados.forEach(function (archivo) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const wrapper = document.createElement("button");
        wrapper.type = "button";
        wrapper.className = "group relative overflow-hidden rounded-2xl text-left transition hover:scale-[1.03]";

        const img = document.createElement("img");
        const target = e && e.target ? e.target : null;

        img.src = target && target.result ? target.result : "";
        img.className =
          index === indicePortadaNuevas
            ? "h-32 w-full rounded-2xl border-4 border-sky-500 object-cover shadow-2xl"
            : "h-24 w-full rounded-2xl border border-slate-200 object-cover shadow-md opacity-80 group-hover:opacity-100";

        const badge = document.createElement("div");
        badge.className =
          index === indicePortadaNuevas
            ? "absolute left-2 top-2 rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur"
            : "absolute left-2 top-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100";

        badge.innerText = index === indicePortadaNuevas ? "Portada" : "Elegir portada";

        wrapper.addEventListener("click", () => {
          imagenPortadaSeleccionada = img.src;
          indicePortadaNuevas = index;
          renderizarNuevasPreviews();
        });

        wrapper.appendChild(img);
        wrapper.appendChild(badge);

        if (previewNuevas) {
          previewNuevas.appendChild(wrapper);
        }
      };

      reader.readAsDataURL(archivo);
    });
  });
}

function renderizarImagenesActuales() {
  if (!imagenesActualesEl) return;

  const botones = Array.from(imagenesActualesEl.querySelectorAll("button.imagen-actual"));

  botones.forEach((boton, index) => {
    const img = boton.querySelector("img");
    const badge = boton.querySelector(".badge-portada");

    if (!img) return;

    const esPortada = imagenPortadaSeleccionada
      ? img.src === imagenPortadaSeleccionada
      : index === 0;

    img.className = esPortada
      ? "h-32 w-full rounded-2xl border-4 border-sky-500 object-cover shadow-2xl"
      : "h-24 w-full rounded-2xl border border-slate-200 object-cover shadow-md opacity-80 group-hover:opacity-100";

    if (badge) {
      badge.className = esPortada
        ? "badge-portada absolute left-2 top-2 rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur"
        : "badge-portada absolute left-2 top-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100";

      badge.innerText = esPortada ? "Portada" : "Elegir portada";
    }
  });
}

function renderizarNuevasPreviews() {
  if (!previewNuevas) return;

  const archivos = Array.from(nuevasImagenesInput?.files || []);
  const archivosOrdenados = archivos.sort(function (a, b) {
    return a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  previewNuevas.innerHTML = "";

  archivosOrdenados.forEach(function (archivo, index) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const wrapper = document.createElement("button");
      wrapper.type = "button";
      wrapper.className = "group relative overflow-hidden rounded-2xl text-left transition hover:scale-[1.03]";

      const img = document.createElement("img");
      const target = e && e.target ? e.target : null;

      img.src = target && target.result ? target.result : "";
      img.className =
        index === indicePortadaNuevas
          ? "h-32 w-full rounded-2xl border-4 border-sky-500 object-cover shadow-2xl"
          : "h-24 w-full rounded-2xl border border-slate-200 object-cover shadow-md opacity-80 group-hover:opacity-100";

      const badge = document.createElement("div");
      badge.className =
        index === indicePortadaNuevas
          ? "absolute left-2 top-2 rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur"
          : "absolute left-2 top-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100";

      badge.innerText = index === indicePortadaNuevas ? "Portada" : "Elegir portada";

      wrapper.addEventListener("click", () => {
        imagenPortadaSeleccionada = img.src;
        indicePortadaNuevas = index;
        renderizarNuevasPreviews();
      });

      wrapper.appendChild(img);
      wrapper.appendChild(badge);
      previewNuevas.appendChild(wrapper);
    };

    reader.readAsDataURL(archivo);
  });
}

if (imagenesActualesEl) {
  const primeraImagen = imagenesActualesEl.querySelector("img");
  imagenPortadaSeleccionada = primeraImagen ? primeraImagen.src : null;

  imagenesActualesEl.addEventListener("click", function (e) {
    const boton = e.target.closest("button.imagen-actual");
    if (!boton) return;

    const img = boton.querySelector("img");
    if (!img) return;

    imagenPortadaSeleccionada = img.src;
    renderizarImagenesActuales();
  });

  renderizarImagenesActuales();
}

// Convertir imagen a WebP
async function convertirAWebP(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const webpFile = new File([blob], file.name.replace(/\.[^.]+$/, ".webp"), { type: "image/webp" });
              resolve(webpFile);
            } else {
              reject(new Error("No se pudo convertir a WebP"));
            }
          },
          "image/webp",
          0.9
        );
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Subir imagen a Supabase
async function subirImagenASupabase(file) {
  const nombreArchivo = `${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from("terrenos")
    .upload(`imagenes/${nombreArchivo}`, file);
  if (error) throw error;
  const { data: publicData } = supabase.storage
    .from("terrenos")
    .getPublicUrl(`imagenes/${nombreArchivo}`);
  return publicData.publicUrl;
}

function normalizarPrecio(valor) {
  const texto = String(valor ?? "").trim();

  if (!texto) {
    return NaN;
  }

  const sinEspacios = texto.replace(/\s+/g, "");
  const sinSeparadoresMiles = sinEspacios.replace(/,/g, "");
  const soloNumero = sinSeparadoresMiles.replace(/[^\d.-]/g, "");

  return Number(soloNumero);
}

// Manejar envío del formulario
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = form.querySelector('input[name="id"]').value;
    const titulo = form.querySelector('input[name="titulo"]').value;
    const descripcion = form.querySelector('textarea[name="descripcion"]').value;
    const precio = form.querySelector('input[name="precio"]').value;
    const medidas = form.querySelector('input[name="medidas"]').value;
    const ubicacion = form.querySelector('input[name="ubicacion"]').value;
    const googleMaps = form.querySelector('input[name="googleMaps"]').value;
    const tipo = form.querySelector('select[name="tipo"]').value;

    const precioNormalizado = normalizarPrecio(precio);

    if (Number.isNaN(precioNormalizado)) {
      alert("❌ Ingresa un precio válido.");
      return;
    }

    try {
      // Obtener imágenes actuales
      let imagenes = [];
      if (imagenesActualesEl) {
        const imgs = imagenesActualesEl.querySelectorAll("img");
        imagenes = Array.from(imgs).map(img => img.src);
      }

      // Procesar y subir nuevas imágenes
      if (nuevasImagenesInput && nuevasImagenesInput.files.length > 0) {
        for (const file of Array.from(nuevasImagenesInput.files)) {
          try {
            const webpFile = await convertirAWebP(file);
            const url = await subirImagenASupabase(webpFile);
            imagenes.push(url);

            if (!imagenPortadaSeleccionada) {
              imagenPortadaSeleccionada = url;
            }
          } catch (error) {
            console.error("Error al procesar imagen:", error);
          }
        }
      }

      if (imagenPortadaSeleccionada && imagenes.length > 0) {
        const indicePortada = imagenes.findIndex((url) => url === imagenPortadaSeleccionada);

        if (indicePortada > 0) {
          const portada = imagenes.splice(indicePortada, 1)[0];
          imagenes.unshift(portada);
        }
      }

      // Enviar actualización a la API
      const datosEnvio = {
        id,
        titulo,
        descripcion,
        precio: precioNormalizado,
        medidas,
        ubicacion,
        google_maps: googleMaps,
        tipo,
      };
      
      // Solo agregar imágenes si hay al menos una
      if (imagenes.length > 0) {
        datosEnvio.imagenes = imagenes;
      }
      
      console.log("Datos a enviar:", datosEnvio);
      
      const response = await fetch("/api/editarTerreno-api", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosEnvio),
      });

      const responseData = await response.json();
      console.log("Respuesta de la API:", responseData);

      if (response.ok) {
        alert("✅ Terreno actualizado correctamente");
        setTimeout(() => {
          window.location.href = "/EditarTerreno";
        }, 500);
      } else {
        console.error("Error en la respuesta:", responseData);
        alert("❌ Error al actualizar: " + (responseData.error || "Error desconocido"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error: " + error.message);
    }
  });
}
