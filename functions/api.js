export async function onRequest(context) {
  
  let url = new URL(context.request.url)

    return new Response(context.request.url.split("/api")[1])
  }