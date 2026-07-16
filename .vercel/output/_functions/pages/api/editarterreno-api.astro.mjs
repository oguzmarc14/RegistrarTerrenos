import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabase = createClient(
  "https://ssrmztcxoijibjntrtqe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcm16dGN4b2lqaWJqbnRydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTA3NDQsImV4cCI6MjA2ODk2Njc0NH0.Wg9rToI2VzpKrnNmAvRVIlky7bSRjCDfFZ4OuZIaesI"
);
function extraerCoordenadasGoogleMaps(url) {
  if (!url) return { latitud: null, longitud: null };
  const texto = decodeURIComponent(String(url));
  const patrones = [
    /@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/,
    /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/,
    /maps\/search\/(-?\d+(?:\.\d+)?),\+?(-?\d+(?:\.\d+)?)/,
    /[?&]q=(-?\d+(?:\.\d+)?),\+?(-?\d+(?:\.\d+)?)/
  ];
  for (const patron of patrones) {
    const match = texto.match(patron);
    if (match) {
      return {
        latitud: Number(match[1]),
        longitud: Number(match[2])
      };
    }
  }
  return { latitud: null, longitud: null };
}
const PUT = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, googleMaps, google_maps, ...campos } = body;
    if (!id) {
      return new Response(JSON.stringify({ error: "ID es requerido" }), {
        status: 400
      });
    }
    const precio = typeof campos.precio === "string" ? campos.precio.trim() : String(campos.precio ?? "").trim();
    if (!precio) {
      return new Response(JSON.stringify({ error: "El precio es requerido" }), {
        status: 400
      });
    }
    const googleMapsFinal = google_maps || googleMaps || "";
    const { latitud, longitud } = extraerCoordenadasGoogleMaps(googleMapsFinal);
    const datosActualizacion = {
      ...campos,
      precio,
      google_maps: googleMapsFinal,
      latitud,
      longitud
    };
    const { data: updateData, error: updateError } = await supabase.from("Terrenos").update(datosActualizacion).eq("id", id).select(
      "id, titulo, descripcion, precio, imagenes, medidas, ubicacion, tipo, fecha, google_maps, latitud, longitud"
    );
    if (updateError) {
      return new Response(
        JSON.stringify({ error: "Error al actualizar: " + updateError.message }),
        { status: 500 }
      );
    }
    if (!updateData || updateData.length === 0) {
      return new Response(JSON.stringify({ error: "Terreno no encontrado" }), {
        status: 404
      });
    }
    return new Response(
      JSON.stringify({
        data: updateData[0],
        success: true,
        message: "Terreno actualizado correctamente"
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
};
const DELETE = async ({ request }) => {
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
    return new Response(JSON.stringify({ error: "ID es requerido" }), {
      status: 400
    });
  }
  const { error } = await supabase.from("Terrenos").delete().eq("id", id);
  if (error) {
    return new Response(
      JSON.stringify({ error: error.message ?? "No se pudo eliminar el terreno" }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
