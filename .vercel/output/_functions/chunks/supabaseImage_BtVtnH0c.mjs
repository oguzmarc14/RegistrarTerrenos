const PUBLIC_PATH = "/storage/v1/object/public/";
const RENDER_PATH = "/storage/v1/render/image/public/";
function getSupabaseImageUrl(url, transform) {
  if (!url || !transform) return url;
  try {
    const parsedUrl = new URL(url);
    if (!parsedUrl.pathname.includes(PUBLIC_PATH)) {
      return url;
    }
    parsedUrl.pathname = parsedUrl.pathname.replace(PUBLIC_PATH, RENDER_PATH);
    parsedUrl.searchParams.delete("download");
    if (transform.width) parsedUrl.searchParams.set("width", String(transform.width));
    if (transform.height) parsedUrl.searchParams.set("height", String(transform.height));
    if (transform.quality) parsedUrl.searchParams.set("quality", String(transform.quality));
    if (transform.resize) parsedUrl.searchParams.set("resize", transform.resize);
    return parsedUrl.toString();
  } catch {
    return url;
  }
}

export { getSupabaseImageUrl as g };
