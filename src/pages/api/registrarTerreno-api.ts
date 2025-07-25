// src/pages/api/registrarTerreno.ts
import type { APIRoute } from 'astro';
import { v4 as uuidv4 } from 'uuid';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const response = await fetch('https://TU_PROYECTO.supabase.co/rest/v1/Terrenos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': import.meta.env.PUBLIC_SUPABASE_KEY,
      'Authorization': `Bearer ${import.meta.env.PUBLIC_SUPABASE_KEY}`,
    },
    body: JSON.stringify({
      identificacion: uuidv4(),
      ...body
    })
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' }
  });
};