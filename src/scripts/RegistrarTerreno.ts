import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// Inicializa Supabase
const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_KEY
);

// Elementos del formulario
const form = document.getElementById('formularioTerreno') as HTMLFormElement | null;
const inputImagen = document.getElementById('imagen') as HTMLInputElement | null;
const previewImagen = document.getElementById('previewImagen') as HTMLImageElement | null;
const boton = document.getElementById('botonSubmit') as HTMLButtonElement | null;

const inputs = form
  ? Array.from(form.querySelectorAll('input, textarea')) as (HTMLInputElement | HTMLTextAreaElement)[]
  : [];

// ✅ Mostrar miniatura al seleccionar imagen
inputImagen?.addEventListener('change', () => {
  if (inputImagen.files && inputImagen.files.length > 0) {
    const archivo = inputImagen.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImagen!.src = e.target?.result as string;
      previewImagen!.classList.remove('hidden');
    };

    reader.readAsDataURL(archivo);
  } else {
    previewImagen!.classList.add('hidden');
    previewImagen!.src = '';
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
      boton.classList.add('cursor-pointer'); // 👈 Agregar esto
    } else {
      boton.disabled = true;
      boton.classList.add('opacity-50', 'cursor-not-allowed');
      boton.classList.remove('cursor-pointer'); // 👈 Quitar cuando no esté activo
    }
  }
}

// Escuchar cambios en todos los inputs
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
  const file = formData.get('imagen') as File;

  // Subir imagen a Supabase Storage
  const { data: imageData, error: imageError } = await supabase.storage
    .from('terrenos-imagenes')
    .upload(`terrenos/${Date.now()}-${file.name}`, file);

  if (imageError) {
    alert('❌ Error subiendo imagen');
    console.error(imageError);
    return;
  }

  // Insertar registro en la tabla
  const { error } = await supabase.from('Terrenos').insert({
    titulo: formData.get('titulo'),
    descripcion: formData.get('descripcion'),
    precio: Number(formData.get('precio')),
    src_imagen: imageData?.path,
    medidas: formData.get('medidas'),
    ubicacion: formData.get('ubicacion'),
    fecha: new Date().toISOString(),
  });

  if (error) {
    alert('❌ Error guardando terreno');
    console.error(error);
    return;
  }

  alert('✅ Terreno guardado correctamente');

  // Limpiar formulario
  form.reset();
  previewImagen?.classList.add('hidden');
  previewImagen!.src = '';
  verificarCampos();
});
