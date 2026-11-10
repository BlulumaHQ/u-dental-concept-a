import { applyHostnameNoindex } from "../../src/lib/hostname-indexing.ts";

type Context = { next: () => Promise<Response> };

/** Runs before redirects, then decorates the resulting static SPA HTML. */
export default async function hostnameNoindex(request: Request, context: Context) {
  return applyHostnameNoindex(request, await context.next());
}