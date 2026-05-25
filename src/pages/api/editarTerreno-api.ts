import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL!,
  import.meta.env.PUBLIC_SUPABASE_KEY!
);

export const PUT: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    const { id, googleMaps, ...campos } = body;
    const precio = typeof campos.precio === "string"
      ? campos.precio.trim()
      : String(campos.precio ?? "").trim();

    if (!precio) {
      return new Response(JSON.stringify({ error: "El precio es requerido" }), {
        status: 400,
      });
    }

    const datosActualizacion = {
      ...campos,
      precio,
      ...(googleMaps ? { google_maps: googleMaps } : {}),
    };
    
    if (!id) {
      return new Response(JSON.stringify({ error: "ID es requerido" }), { status: 400 });
    }
    
    const { data: updateData, error: updateError, count } = await supabase
      .from("Terrenos")
      .update(datosActualizacion)
      .eq("id", id)
      .select("id, titulo, descripcion, precio, imagenes, medidas, ubicacion, tipo, fecha, google_maps");
    
    if (updateError) {
      return new Response(JSON.stringify({ error: "Error al actualizar: " + updateError.message }), { status: 500 });
    }

    if (!updateData || updateData.length === 0) {
      return new Response(JSON.stringify({ error: "Terreno no encontrado" }), { status: 404 });
    }
    
    return new Response(JSON.stringify({ 
      data: updateData[0], 
      success: true,
      message: "Terreno actualizado correctamente"
    }), { status: 200 });
    
  } catch (err: any) {
    console.error("Error en PUT:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  let id = url.searchParams.get("id");

  if (!id) {
    try {
      const body = await request.json();
      id = body?.id ?? null;
    } catch {
      id = null;
    }
  }

  if (!id) {
    return new Response(JSON.stringify({ error: "ID es requerido" }), { status: 400 });
  }

  const { error } = await supabase
    .from("Terrenos")
    .delete()
    .eq("id", id);

  if (error) {
    return new Response(
      JSON.stringify({ error: error.message ?? "No se pudo eliminar el terreno" }),
      { status: 500 },
    );
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
