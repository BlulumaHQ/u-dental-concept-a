#!/usr/bin/env node
/**
 * Post-build: turns the Cloudflare Worker build into a static SPA in dist/.
 *
 * Why this exists: TanStack Start's built-in `spa: { enabled: true }` prerenderer
 * boots a vite preview server that hard-codes `dist/server/server.js`, but the
 * @cloudflare/vite-plugin bundled into this project's lovable config emits the
 * worker as `dist/server/index.js`. The mismatch makes the official SPA mode
 * crash during prerender. We work around it by:
 *   1) running the normal Cloudflare build
 *   2) aliasing index.js -> server.js
 *   3) spinning up `vite preview` ourselves, fetching `/`, and writing the
 *      rendered HTML as dist/index.html (SPA shell)
 *   4) flattening dist/client/* into dist/ and deleting dist/server/
 *
 * Result: `dist/` is a fully static folder Netlify (or any static host) can serve,
 * with `_redirects` already rewriting all paths to `/index.html` for the SPA router.
 */
import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const clientDir = path.join(distDir, "client");
const serverDir = path.join(distDir, "server");

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function waitForUrl(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function main() {
  if (!(await exists(clientDir)) || !(await exists(serverDir))) {
    throw new Error("Expected dist/client and dist/server from vite build. Run `vite build` first.");
  }

  // Alias so TanStack's preview-server-plugin can resolve dist/server/server.js.
  const indexJs = path.join(serverDir, "index.js");
  const serverJs = path.join(serverDir, "server.js");
  if (!(await exists(serverJs)) && (await exists(indexJs))) {
    await fs.copyFile(indexJs, serverJs);
  }

  // Start `vite preview` on a fixed port.
  const port = 4910;
  const child = spawn("npx", ["vite", "preview", "--port", String(port)], {
    cwd: root,
    stdio: ["ignore", "inherit", "inherit"],
    env: { ...process.env },
  });

  try {
    const res = await waitForUrl(`http://localhost:${port}/`);
    const html = await res.text();
    if (!html.includes("<html")) {
      throw new Error("Preview server did not return HTML for /");
    }
    await fs.writeFile(path.join(clientDir, "index.html"), html, "utf8");
    console.log(`✓ wrote dist/client/index.html (${html.length} bytes)`);
  } finally {
    child.kill("SIGTERM");
    await new Promise((r) => setTimeout(r, 200));
  }

  // Flatten dist/client/* into dist/ and drop dist/server/.
  for (const entry of await fs.readdir(clientDir)) {
    const src = path.join(clientDir, entry);
    const dest = path.join(distDir, entry);
    await fs.rm(dest, { recursive: true, force: true });
    await fs.rename(src, dest);
  }
  await fs.rm(clientDir, { recursive: true, force: true });
  await fs.rm(serverDir, { recursive: true, force: true });

  console.log("✓ dist/ is now a static SPA ready for Netlify");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
