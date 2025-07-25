import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_KEY
);

const form = document.getElementById('formularioTerreno') as HTMLFormElement | null;

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form!);
  const file = formData.get('imagen') as File;

  const { data: imageData, error: imageError } = await supabase.storage
    .from('terrenos-imagenes')
    .upload(`terrenos/${Date.now()}-${file.name}`, file);

  if (imageError) {
    alert('Error subiendo imagen');
    console.error(imageError);
    return;
  }

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
    alert('Error guardando terreno');
    console.error(error);
    return;
  }

  alert('Terreno guardado correctamente');
  form.reset();
});
