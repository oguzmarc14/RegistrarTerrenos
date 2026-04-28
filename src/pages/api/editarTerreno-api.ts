import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL!,
  import.meta.env.PUBLIC_SUPABASE_KEY!
);

export const PUT: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { id, ...campos } = body;
  const { data, error } = await supabase
    .from("Terrenos")
    .update(campos)
    .eq("id", id)
    .select();
  if (error) return new Response(JSON.stringify({ error }), { status: 500 });
  return new Response(JSON.stringify({ data }), { status: 200 });
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
