import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL!,
  import.meta.env.PUBLIC_SUPABASE_KEY!
);

export const PUT: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    console.log("=== INICIO PUT ===");
    console.log("Body recibido:", JSON.stringify(body, null, 2));
    
    const { id, ...campos } = body;
    
    if (!id) {
      console.error("ERROR: ID es requerido");
      return new Response(JSON.stringify({ error: "ID es requerido" }), { status: 400 });
    }
    
    console.log("ID:", id);
    console.log("Campos a actualizar:", campos);
    
    // Verificar que el registro existe
    const { data: verificar, error: errorVerif } = await supabase
      .from("Terrenos")
      .select("*")
      .eq("id", id)
      .single();
    
    console.log("Registro verificado:", verificar);
    if (errorVerif) {
      console.error("Error al verificar registro:", errorVerif);
      return new Response(JSON.stringify({ error: "Terreno no encontrado: " + errorVerif.message }), { status: 400 });
    }
    
    // Actualizar
    const { data: updateData, error: updateError, count } = await supabase
      .from("Terrenos")
      .update(campos)
      .eq("id", id)
      .select();
    
    console.log("Resultado update - Count:", count, "Error:", updateError, "Data:", updateData);
    
    if (updateError) {
      console.error("Error de Supabase al actualizar:", updateError);
      return new Response(JSON.stringify({ error: "Error al actualizar: " + updateError.message }), { status: 500 });
    }
    
    // Verificar que se actualizó
    const { data: verificarFinal, error: errorFinal } = await supabase
      .from("Terrenos")
      .select("*")
      .eq("id", id)
      .single();
    
    console.log("Datos finales después del update:", verificarFinal);
    console.log("=== FIN PUT ===");
    
    return new Response(JSON.stringify({ 
      data: verificarFinal, 
      success: true,
      message: "Terreno actualizado correctamente"
    }), { status: 200 });
    
  } catch (err: any) {
    console.error("Error en PUT:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { id } = body;
  const { error } = await supabase
    .from("Terrenos")
    .delete()
    .eq("id", id);
  if (error) return new Response(JSON.stringify({ error }), { status: 500 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
