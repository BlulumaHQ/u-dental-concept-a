/** Exact hostname boundaries; unrelated and future custom domains are untouched. */
const PLATFORM_SUFFIXES = ["lovable.app", "workers.dev", "pages.dev", "netlify.app"] as const;

export function isPlatformHostname(hostname: string): boolean {
  const normalized = hostname.toLowerCase().replace(/\.$/, "");
  return PLATFORM_SUFFIXES.some((suffix) => normalized.endsWith(`.${suffix}`));
}

/** Server/edge only: preserve the body, status, and all existing SEO headers. */
export function applyHostnameNoindex(request: Request, response: Response): Response {
  if (!isPlatformHostname(new URL(request.url).hostname)) return response;

  const contentType = response.headers.get("content-type") ?? "";
  if (!/^(text\/html|application\/xhtml\+xml)(?:\s*;|\s*$)/i.test(contentType)) {
    return response;
  }

  // Copy headers because upstream/asset responses may have immutable headers.
  const headers = new Headers(response.headers);
  headers.append("X-Robots-Tag", "noindex");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}