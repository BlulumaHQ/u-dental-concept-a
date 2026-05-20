// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
//
// SPA mode (spa.enabled) makes TanStack Start prerender a single index.html shell
// that the client router then hydrates. This produces a fully static build that
// Netlify (or any static host) can serve, while keeping the existing SSR entry
// intact for the Lovable preview / Lovable Publish / Cloudflare Workers build.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
