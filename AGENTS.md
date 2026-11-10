# Deployment rules

- Keep hostname indexing policy in a shared response decorator used by the SSR entry, Netlify Edge Function, and Cloudflare Pages middleware; response-time checks protect platform hosts without contaminating a custom domain's shared static HTML.
- Keep the normal Lovable/Worker build and the existing static export separate; Netlify deploys the static export plus its edge middleware, while Cloudflare Pages deploys that export plus Pages Functions.
- Determine indexing from the request URL hostname, not forwarded headers or a fixed official-domain allowlist; spoofed headers and future custom domains must not change the decision.