import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";  

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("formularioTerreno");
const inputImagen = document.getElementById("imagen");
const previewContainer = document.getElementById("previewContainer");
const boton = document.getElementById("botonSubmit");

const inputs = form
  ? Array.from(form.querySelectorAll("input, textarea, select"))
  : [];

let archivosSeleccionados = [];
let indicePortada = 0;

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

function renderizarPreviews() {
  if (!previewContainer) return;

  previewContainer.innerHTML = "";

  archivosSeleccionados.forEach((archivo, index) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const wrapper = document.createElement("button");
      wrapper.type = "button";
      wrapper.className =
        "group relative overflow-hidden rounded-2xl text-left transition hover:scale-[1.03]";

      const img = document.createElement("img");
      img.src = e.target?.result;

      img.className =
        index === indicePortada
          ? "h-32 w-full rounded-2xl border-4 border-sky-500 object-cover shadow-2xl"
          : "h-24 w-full rounded-2xl border border-slate-200 object-cover shadow-md opacity-80 group-hover:opacity-100";

      wrapper.appendChild(img);

      const badge = document.createElement("div");
      badge.className =
        index === indicePortada
          ? "absolute left-2 top-2 rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur"
          : "absolute left-2 top-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100";

      badge.innerText = index === indicePortada ? "Portada" : "Elegir portada";
      wrapper.appendChild(badge);

      wrapper.addEventListener("click", () => {
        indicePortada = index;
        renderizarPreviews();
      });

      previewContainer.appendChild(wrapper);
    };

    reader.readAsDataURL(archivo);
  });
}

inputImagen?.addEventListener("change", () => {
  archivosSeleccionados = inputImagen.files
    ? Array.from(inputImagen.files)
    : [];

  indicePortada = 0;

  renderizarPreviews();
  verificarCampos();
});

function verificarCampos() {
  const todosLlenos = inputs.every((input) => {
    if (input.type === "file") {
      return input.files && input.files.length > 0;
    }

    if (input.name === "googleMaps") {
      return true;
    }

    return input.value.trim() !== "";
  });

  if (!boton) return;

  if (todosLlenos) {
    boton.disabled = false;
    boton.classList.remove("opacity-50", "cursor-not-allowed");
    boton.classList.add("cursor-pointer");
  } else {
    boton.disabled = true;
    boton.classList.add("opacity-50", "cursor-not-allowed");
    boton.classList.remove("cursor-pointer");
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", verificarCampos);

  if (input.type === "file") {
    input.addEventListener("change", verificarCampos);
  }
});

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
                { type: "image/webp" }
              );

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

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const tipo = formData.get("tipo");

  if (!tipo) {
    mostrarAlerta({
      titulo: "Falta información",
      mensaje: "Por favor selecciona un tipo de propiedad.",
      tipo: "error",
    });
    return;
  }

  if (!archivosSeleccionados || archivosSeleccionados.length === 0) {
    mostrarAlerta({
      titulo: "Faltan imágenes",
      mensaje: "Selecciona al menos una imagen para publicar el terreno.",
      tipo: "error",
    });
    return;
  }

  boton.disabled = true;
  boton.textContent = "Subiendo terreno...";

  const archivosOrdenadosParaSubir = [
    archivosSeleccionados[indicePortada],
    ...archivosSeleccionados.filter((_, index) => index !== indicePortada),
  ];

  const urls = [];

  for (let i = 0; i < archivosOrdenadosParaSubir.length; i++) {
    const file = archivosOrdenadosParaSubir[i];

    let webpFile;

    try {
      webpFile = await convertirAWebP(file);
    } catch (err) {
      mostrarAlerta({
        titulo: "Error con la imagen",
        mensaje: "No se pudo convertir una imagen a formato WEBP.",
        tipo: "error",
      });

      console.error(err);

      boton.disabled = false;
      boton.textContent = "Subir terreno";
      return;
    }

    const { data, error } = await supabase.storage
      .from("terrenos-imagenes")
      .upload(`terrenos/${Date.now()}-${i}-${webpFile.name}`, webpFile);

    if (error) {
      mostrarAlerta({
        titulo: "Error al subir imagen",
        mensaje: "No se pudo subir una de las imágenes. Intenta de nuevo.",
        tipo: "error",
      });

      console.error(error);

      boton.disabled = false;
      boton.textContent = "Subir terreno";
      return;
    }

    if (data?.path) {
      const { data: publicUrlData } = supabase.storage
        .from("terrenos-imagenes")
        .getPublicUrl(data.path);

      if (publicUrlData?.publicUrl) {
        urls.push(publicUrlData.publicUrl);
      }
    }
  }

  const { error: insertError } = await supabase.from("Terrenos").insert({
    titulo: formData.get("titulo"),
    descripcion: formData.get("descripcion"),
    precio: Number(formData.get("precio")),
    medidas: formData.get("medidas"),
    ubicacion: formData.get("ubicacion"),
    google_maps: formData.get("googleMaps"),
    tipo: formData.get("tipo"),
    fecha: new Date().toISOString(),
    imagenes: urls,
  });

  if (insertError) {
    mostrarAlerta({
      titulo: "Error al guardar",
      mensaje: "No se pudo guardar el terreno en la base de datos.",
      tipo: "error",
    });

    console.error(insertError);

    boton.disabled = false;
    boton.textContent = "Subir terreno";
    return;
  }

  mostrarAlerta({
    titulo: "Terreno publicado",
    mensaje: `El terreno se guardó correctamente con ${urls.length} imagen${
      urls.length !== 1 ? "es" : ""
    }.`,
    tipo: "success",
  });

  form.reset();
  archivosSeleccionados = [];
  indicePortada = 0;

  if (previewContainer) previewContainer.innerHTML = "";

  boton.textContent = "Subir terreno";
  verificarCampos();
});