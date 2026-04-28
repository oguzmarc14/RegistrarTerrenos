import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ✅ Elementos del formulario
const form = document.getElementById("formularioTerreno");
const inputImagen = document.getElementById("imagen");
const previewContainer = document.getElementById("previewContainer");
const boton = document.getElementById("botonSubmit");
const selectTipo = document.getElementById("tipo");

const inputs = form ? Array.from(form.querySelectorAll("input, textarea")) : [];

// ✅ Mostrar miniaturas
inputImagen?.addEventListener("change", () => {
  if (previewContainer) previewContainer.innerHTML = "";

  if (inputImagen.files && inputImagen.files.length > 0) {
    // Ordenar archivos por nombre antes de mostrarlos
    const archivosOrdenados = Array.from(inputImagen.files).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    archivosOrdenados.forEach((archivo) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target?.result;
        img.className = "max-w-[100px] max-h-[100px] rounded shadow";
        previewContainer?.appendChild(img);
      };
      reader.readAsDataURL(archivo);
    });
  }

  verificarCampos();
});

function verificarCampos() {
  const todosLlenos = inputs.every((input) => {
    if (input.type === "file") {
      return input.files && input.files.length > 0;
    }
    return input.value.trim() !== "";
  });

  if (boton) {
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
}

inputs.forEach((input) => {
  input.addEventListener("input", verificarCampos);
  if (input.type === "file") {
    input.addEventListener("change", verificarCampos);
  }
});


// Función para convertir un archivo de imagen a WebP usando canvas
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
              // Renombrar archivo a .webp
              const webpFile = new File([blob], file.name.replace(/\.[^.]+$/, ".webp"), { type: "image/webp" });
              resolve(webpFile);
            } else {
              reject(new Error("No se pudo convertir a WebP"));
            }
          },
          "image/webp",
          0.9 // calidad
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
  const files = inputImagen?.files;

  if (!files || files.length === 0) {
    alert("❌ No hay imágenes seleccionadas");
    return;
  }

  const urls = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let webpFile;
    try {
      webpFile = await convertirAWebP(file);
    } catch (err) {
      alert("❌ Error convirtiendo imagen a WebP");
      console.error(err);
      return;
    }

    const { data, error } = await supabase.storage
      .from("terrenos-imagenes")
      .upload(`terrenos/${Date.now()}-${webpFile.name}`, webpFile);

    if (error) {
      alert("❌ Error subiendo imagen");
      console.error(error);
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
    tipo: formData.get("tipo"),
    fecha: new Date().toISOString(),
    imagenes: urls,
  });

  const tipo = formData.get("tipo");
  if (!tipo) {
    alert("❌ Por favor selecciona un tipo de propiedad");
    return;
  }

  if (insertError) {
    alert("❌ Error guardando terreno");
    console.error(insertError);
    return;
  }

  alert(
    `✅ Terreno guardado con ${urls.length} imagen${
      urls.length !== 1 ? "es" : ""
    }`
  );
  form.reset();
  if (previewContainer) previewContainer.innerHTML = "";
  verificarCampos();
});
