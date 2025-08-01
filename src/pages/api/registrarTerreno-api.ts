// src/pages/api/registrarTerreno.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  // Import dinámico para evitar error en Vercel
  const { v4: uuidv4 } = await import('uuid');

  const response = await fetch(`${import.meta.env.PUBLIC_SUPABASE_URL}/rest/v1/Terrenos`, {
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
