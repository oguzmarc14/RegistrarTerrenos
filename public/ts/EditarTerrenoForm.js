import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("formularioEditarTerreno");
const nuevasImagenesInput = document.getElementById("nuevasImagenes");
const previewNuevas = document.getElementById("previewNuevas");
const descripcionInput = form ? form.querySelector('textarea[name="descripcion"]') : null;

const MAX_DESCRIPTION_WORDS = 47;
const MAX_DESCRIPTION_CHARS = 320;

// Preview de nuevas imágenes
if (nuevasImagenesInput) {
  nuevasImagenesInput.addEventListener("change", () => {
    previewNuevas.innerHTML = "";
    if (nuevasImagenesInput.files && nuevasImagenesInput.files.length > 0) {
      const archivosOrdenados = Array.from(nuevasImagenesInput.files).sort((a, b) => 
        a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
      );
      archivosOrdenados.forEach((archivo) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target?.result;
          img.className = "w-20 h-20 object-cover rounded";
          previewNuevas.appendChild(img);
        };
        reader.readAsDataURL(archivo);
      });
    }
  });
}

function limitarDescripcion() {
  if (!descripcionInput) return;

  const palabras = descripcionInput.value.trim().split(/\s+/).filter(Boolean);
  if (palabras.length > MAX_DESCRIPTION_WORDS) {
    descripcionInput.value = palabras.slice(0, MAX_DESCRIPTION_WORDS).join(" ");
  }

  if (descripcionInput.value.length > MAX_DESCRIPTION_CHARS) {
    descripcionInput.value = descripcionInput.value.slice(0, MAX_DESCRIPTION_CHARS);
  }
}

descripcionInput?.addEventListener("input", limitarDescripcion);

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
    const tipo = form.querySelector('select[name="tipo"]').value;
    const palabrasDescripcion = descripcion.trim().split(/\s+/).filter(Boolean);

    if (palabrasDescripcion.length > MAX_DESCRIPTION_WORDS) {
      alert(`❌ La descripción no puede tener más de ${MAX_DESCRIPTION_WORDS} palabras.`);
      return;
    }

    if (descripcion.length > MAX_DESCRIPTION_CHARS) {
      alert("❌ La descripción es demasiado larga.");
      return;
    }

    try {
      // Obtener imágenes actuales
      let imagenes = [];
      const imagenesActualesEl = document.getElementById("imagenes-actuales");
      if (imagenesActualesEl) {
        const imgs = imagenesActualesEl.querySelectorAll("img");
        imagenes = Array.from(imgs).map(img => img.src);
      }

      // Procesar y subir nuevas imágenes
      if (nuevasImagenesInput && nuevasImagenesInput.files.length > 0) {
        for (let file of nuevasImagenesInput.files) {
          try {
            const webpFile = await convertirAWebP(file);
            const url = await subirImagenASupabase(webpFile);
            imagenes.push(url);
          } catch (error) {
            console.error("Error al procesar imagen:", error);
          }
        }
      }

      // Enviar actualización a la API
      const datosEnvio = {
        id,
        titulo,
        descripcion,
        precio: parseFloat(precio),
        medidas,
        ubicacion,
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
