export async function onRequest(context) {
  // Apni image ko fetch karo (project ke andar se)
  const imageUrl = new URL('/https://s5.ezgif.com/tmp/ezgif-5436dd200478d166.gif', context.request.url);
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/jpeg', // ya image/png
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

functions/thumb.js
