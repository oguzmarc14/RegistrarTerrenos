import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function getMiniatura(url) {
  if (!url) return url;

  try {
    const parsedUrl = new URL(url);
    const publicPath = "/storage/v1/object/public/";
    const renderPath = "/storage/v1/render/image/public/";

    if (!parsedUrl.pathname.includes(publicPath)) return url;

    parsedUrl.pathname = parsedUrl.pathname.replace(publicPath, renderPath);
    parsedUrl.searchParams.delete("download");
    parsedUrl.searchParams.set("width", "1280");
    parsedUrl.searchParams.set("height", "720");
    parsedUrl.searchParams.set("quality", "72");
    parsedUrl.searchParams.set("resize", "cover");

    return parsedUrl.toString();
  } catch {
    return url;
  }
}

const form = document.getElementById("formularioEditarTerreno");
const nuevasImagenesInput = document.getElementById("nuevasImagenes");
const previewNuevas = document.getElementById("previewNuevas");
const descripcionInput = form
  ? form.querySelector('textarea[name="descripcion"]')
  : null;
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

    archivosOrdenados.forEach(function (archivo, index) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const wrapper = document.createElement("button");
        wrapper.type = "button";
        wrapper.className =
          "group relative overflow-hidden rounded-2xl text-left transition hover:scale-[1.03]";

        const img = document.createElement("img");
        const target = e && e.target ? e.target : null;

        img.src = target && target.result ? target.result : "";
        img.className =
          index === indicePortadaNuevas
            ? "h-32 w-full rounded-2xl border-4 border-sky-500 object-cover shadow-2xl"
            : "h-24 w-full rounded-2xl border border-slate-200 object-cover shadow-md opacity-80 group-hover:opacity-100";
        img.onload = function () {
          if (img.naturalWidth > img.naturalHeight) {
            img.classList.add("scale-[1.18]");
          }
        };

        const badge = document.createElement("div");
        badge.className =
          index === indicePortadaNuevas
            ? "absolute left-2 top-2 rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur"
            : "absolute left-2 top-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100";

        badge.innerText =
          index === indicePortadaNuevas ? "Portada" : "Elegir portada";

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

  const botones = Array.from(
    imagenesActualesEl.querySelectorAll("button.imagen-actual"),
  );

  botones.forEach((boton, index) => {
    const img = boton.querySelector("img");
    const badge = boton.querySelector(".badge-portada");

    if (!img) return;

    const urlOriginal = boton.dataset.url || img.dataset.originalUrl || img.src;
    const esPortada = imagenPortadaSeleccionada
      ? urlOriginal === imagenPortadaSeleccionada
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
      wrapper.className =
        "group relative overflow-hidden rounded-2xl text-left transition hover:scale-[1.03]";

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

      badge.innerText =
        index === indicePortadaNuevas ? "Portada" : "Elegir portada";

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
  const primerBoton = imagenesActualesEl.querySelector("button.imagen-actual");
  imagenPortadaSeleccionada =
    primerBoton?.dataset.url || primeraImagen?.dataset.originalUrl || null;

  imagenesActualesEl.addEventListener("click", function (e) {
    const boton = e.target.closest("button.imagen-actual");
    if (!boton) return;

    const img = boton.querySelector("img");
    if (!img) return;

    imagenPortadaSeleccionada =
      boton.dataset.url || img.dataset.originalUrl || img.src;
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
              const webpFile = new File(
                [blob],
                file.name.replace(/\.[^.]+$/, ".webp"),
                { type: "image/webp" },
              );
              resolve(webpFile);
            } else {
              reject(new Error("No se pudo convertir a WebP"));
            }
          },
          "image/webp",
          0.9,
        );
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Función para mostrar alertas personalizadas
function mostrarAlerta({ titulo = "Mensaje", mensaje = "", tipo = "success" }) {
  const existente = document.getElementById("custom-alert");
  if (existente) existente.remove();

  const colores = {
    success: {
      borde: "border-emerald-400/30",
      fondo: "from-emerald-500 to-emerald-600",
      icono: "✅",
    },
    error: {
      borde: "border-rose-400/30",
      fondo: "from-rose-500 to-rose-600",
      icono: "❌",
    },
  };

  const estilo = colores[tipo] || colores.success;

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

function extraerCoordenadasGoogleMaps(url) {
  if (!url) {
    return {
      latitud: null,
      longitud: null,
    };
  }

  const texto = decodeURIComponent(String(url));

  const patrones = [
    /@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/,
    /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/,
    /maps\/search\/(-?\d+(?:\.\d+)?),\+?(-?\d+(?:\.\d+)?)/,
    /[?&]q=(-?\d+(?:\.\d+)?),\+?(-?\d+(?:\.\d+)?)/,
  ];

  for (const patron of patrones) {
    const match = texto.match(patron);

    if (match) {
      return {
        latitud: Number(match[1]),
        longitud: Number(match[2]),
      };
    }
  }

  return {
    latitud: null,
    longitud: null,
  };
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
    const descripcion = form.querySelector(
      'textarea[name="descripcion"]',
    ).value;
    const precio = form.querySelector('input[name="precio"]').value;
    const medidas = form.querySelector('input[name="medidas"]').value;
    const ubicacion = form.querySelector('input[name="ubicacion"]').value;
    const googleMaps = form.querySelector('input[name="googleMaps"]').value;
    const tipo = form.querySelector('select[name="tipo"]').value;
    const { latitud, longitud } = extraerCoordenadasGoogleMaps(googleMaps);

    console.log("Latitud:", latitud);
    console.log("Longitud:", longitud);

    // Validar que el precio no esté vacío
    const precioLimpio = precio?.trim();
    if (!precioLimpio) {
      mostrarAlerta({
        titulo: "Precio requerido",
        mensaje:
          "Por favor ingresa un precio. Puede ser un número (ej. 50000) o texto (ej. Consultar, A negociar).",
        tipo: "error",
      });
      return;
    }

    // Usar el precio como texto directamente
    const precioParaGuardar = precioLimpio;

    try {
      // Obtener imágenes actuales
      let imagenes = [];
      if (imagenesActualesEl) {
        const imgs = imagenesActualesEl.querySelectorAll("img");
        imagenes = Array.from(imgs).map((img) => img.src);
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
        const indicePortada = imagenes.findIndex(
          (url) => url === imagenPortadaSeleccionada,
        );

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
        precio: precioParaGuardar,
        medidas,
        ubicacion,
        google_maps: googleMaps,
        tipo,

        latitud,
        longitud,
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
        mostrarAlerta({
          titulo: "Terreno actualizado",
          mensaje: "El terreno se actualizó correctamente.",
          tipo: "success",
        });
        setTimeout(() => {
          window.location.href = "/EditarTerreno";
        }, 1500);
      } else {
        console.error("Error en la respuesta:", responseData);
        mostrarAlerta({
          titulo: "Error al actualizar",
          mensaje: responseData.error || "No se pudo actualizar el terreno.",
          tipo: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      mostrarAlerta({
        titulo: "Error",
        mensaje: error.message || "Ocurrió un error al actualizar el terreno.",
        tipo: "error",
      });
    }
  });
}
