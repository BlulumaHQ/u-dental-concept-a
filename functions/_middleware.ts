import { applyHostnameNoindex } from "../src/lib/hostname-indexing.ts";

type PagesContext = { request: Request; next: () => Promise<Response> };

/** Cloudflare Pages: covers static files and nested SPA fallback responses. */
export async function onRequest(context: PagesContext) {
  return applyHostnameNoindex(context.request, await context.next());
}