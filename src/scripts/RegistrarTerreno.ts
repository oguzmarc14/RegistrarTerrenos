import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// ✅ Define tus variables (directas o inyectadas por Astro)
const SUPABASE_URL = "https://ssrmztcxoijibjntrtqe.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI";

// ✅ Inicializa Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ✅ Elementos del formulario
const form = document.getElementById('formularioTerreno') as HTMLFormElement | null;
const inputImagen = document.getElementById('imagen') as HTMLInputElement | null;
const previewContainer = document.getElementById('previewContainer') as HTMLDivElement | null;
const boton = document.getElementById('botonSubmit') as HTMLButtonElement | null;

const inputs = form
  ? Array.from(form.querySelectorAll('input, textarea')) as (HTMLInputElement | HTMLTextAreaElement)[]
  : [];

// ✅ Mostrar miniaturas al seleccionar imágenes
inputImagen?.addEventListener('change', () => {
  if (previewContainer) previewContainer.innerHTML = '';

  if (inputImagen.files && inputImagen.files.length > 0) {
    Array.from(inputImagen.files).forEach((archivo) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target?.result as string;
        img.className = 'max-w-[100px] max-h-[100px] rounded shadow';
        previewContainer?.appendChild(img);
      };
      reader.readAsDataURL(archivo);
    });
  }

  verificarCampos();
});

// ✅ Verifica si todos los campos están completos
function verificarCampos() {
  const todosLlenos = inputs.every((input) => {
    if (input instanceof HTMLInputElement && input.type === 'file') {
      return input.files && input.files.length > 0;
    }
    return input.value.trim() !== '';
  });

  if (boton) {
    if (todosLlenos) {
      boton.disabled = false;
      boton.classList.remove('opacity-50', 'cursor-not-allowed');
      boton.classList.add('cursor-pointer');
    } else {
      boton.disabled = true;
      boton.classList.add('opacity-50', 'cursor-not-allowed');
      boton.classList.remove('cursor-pointer');
    }
  }
}

// ✅ Escuchar cambios en todos los inputs
inputs.forEach((input) => {
  input.addEventListener('input', verificarCampos);
  if (input.type === 'file') {
    input.addEventListener('change', verificarCampos);
  }
});

// ✅ Subir imagen y guardar datos
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const files = inputImagen?.files;

  if (!files || files.length === 0) {
    alert('❌ No hay imágenes seleccionadas');
    return;
  }

  const urls: string[] = [];

  for (let i = 0; i < Math.min(files.length, 5); i++) {
    const file = files[i];

    const { data, error } = await supabase.storage
      .from('terrenos-imagenes')
      .upload(`terrenos/${Date.now()}-${file.name}`, file);

    if (error) {
      alert('❌ Error subiendo imagen');
      console.error(error);
      return;
    }

    if (data?.path) {
      const { data: publicUrlData } = supabase.storage
        .from('terrenos-imagenes')
        .getPublicUrl(data.path);

      if (publicUrlData?.publicUrl) {
        urls.push(publicUrlData.publicUrl);
      }
    }
  }

  const { error: insertError } = await supabase.from('Terrenos').insert({
    titulo: formData.get('titulo'),
    descripcion: formData.get('descripcion'),
    precio: Number(formData.get('precio')),
    medidas: formData.get('medidas'),
    ubicacion: formData.get('ubicacion'),
    fecha: new Date().toISOString(),
    imagenes: urls,
  });

  if (insertError) {
    alert('❌ Error guardando terreno');
    console.error(insertError);
    return;
  }

  alert(`✅ Terreno guardado con ${urls.length} imagen${urls.length !== 1 ? 'es' : ''}`);
  form.reset();
  if (previewContainer) previewContainer.innerHTML = '';
  verificarCampos();
});
