import { describe, expect, test } from "bun:test";
import { applyHostnameNoindex, isPlatformHostname } from "../src/lib/hostname-indexing";
import netlifyHandler from "../netlify/edge-functions/hostname-noindex";
import { onRequest as pagesHandler } from "../functions/_middleware";

const platformHosts = [
  "u-dental-concept-a.lovable.app",
  "id-preview--99c19a71-60e2-4d27-83d3-24c5ec78bcc3.lovable.app",
  "site.account.workers.dev",
  "preview.site.pages.dev",
  "deploy-preview-42--site.netlify.app",
];

describe("hostname-based indexing policy", () => {
  for (const hostname of platformHosts) {
    test(`${hostname}: every root/nested HTML response is noindex`, () => {
      for (const pathname of ["/", "/zh-hant/", "/zh-hant/service/dental-implants/", "/missing"]) {
        const response = applyHostnameNoindex(
          new Request(`https://${hostname}${pathname}`),
          new Response("page", { headers: { "content-type": "text/html; charset=utf-8" } }),
        );
        expect(response.headers.get("x-robots-tag")).toBe("noindex");
        expect(response.status).toBe(200);
      }
    });
  }

  test("current or future custom domains and suffix lookalikes remain untouched", () => {
    // Reserved example domains represent arbitrary future official domains, not configured domains.
    for (const host of ["clinic.example", "www.clinic.example", "lovable.app.example", "notlovable.app", "netlify.app.example", "notworkers.dev", "notpages.dev", "localhost"]) {
      const original = new Response("page", { headers: { "content-type": "text/html" } });
      const response = applyHostnameNoindex(new Request(`https://${host}/nested/route`), original);
      expect(response).toBe(original);
      expect(response.headers.has("x-robots-tag")).toBe(false);
      expect(isPlatformHostname(host)).toBe(false);
    }
  });

  test("hostname matching is case-insensitive and accepts a trailing DNS dot", () => {
    expect(isPlatformHostname("SITE.NETLIFY.APP.")).toBe(true);
  });

  test("forwarded headers cannot opt a custom domain out of indexing", () => {
    const request = new Request("https://clinic.example/", {
      headers: { "x-forwarded-host": "site.netlify.app", host: "site.pages.dev" },
    });
    const original = new Response("page", { headers: { "content-type": "text/html" } });
    expect(applyHostnameNoindex(request, original)).toBe(original);
  });

  test("non-HTML sitemap, robots, APIs and assets are unchanged", () => {
    for (const contentType of ["application/xml", "text/plain", "application/json", "text/css", "text/javascript", "image/svg+xml"]) {
      const original = new Response("content", { headers: { "content-type": contentType } });
      expect(applyHostnameNoindex(new Request("https://site.netlify.app/sitemap.xml"), original)).toBe(original);
    }
  });

  test("HTML errors, XHTML and HEAD responses receive the same policy", () => {
    for (const status of [200, 404, 500]) {
      const request = new Request("https://site.workers.dev/nested", { method: "HEAD" });
      const original = new Response(null, { status, headers: { "content-type": "application/xhtml+xml" } });
      const response = applyHostnameNoindex(request, original);
      expect(response.headers.get("x-robots-tag")).toBe("noindex");
      expect(response.status).toBe(status);
      expect(response.body).toBe(null);
    }
  });

  test("body, status, cookies, canonical and existing headers survive", async () => {
    const html = '<html><head><link rel="canonical" href="https://clinic.example/"></head><body>unchanged</body></html>';
    const original = new Response(html, {
      status: 404,
      headers: { "content-type": "text/html", "x-robots-tag": "nofollow", "set-cookie": "layout=unchanged; Path=/", "cache-control": "public, max-age=60" },
    });
    const response = applyHostnameNoindex(new Request("https://site.lovable.app/nested"), original);
    expect(await response.text()).toBe(html);
    expect(response.status).toBe(404);
    expect(response.headers.get("x-robots-tag")).toBe("nofollow, noindex");
    expect(response.headers.get("set-cookie")).toBe("layout=unchanged; Path=/");
    expect(response.headers.get("cache-control")).toBe("public, max-age=60");
  });

  for (const hosting of ["netlify", "pages"] as const) {
    test(`${hosting}: downstream SPA fallback HTML is decorated without redirects`, async () => {
      for (const hostname of ["site.netlify.app", "preview.site.pages.dev", "clinic.example"]) {
        const request = new Request(`https://${hostname}/zh-hant/service/dental-implants/`);
        let calls = 0;
        const context = {
          request,
          next: async () => {
            calls++;
            return new Response("SPA fallback", { headers: { "content-type": "text/html" } });
          },
        };
        const response = hosting === "netlify" ? await netlifyHandler(request, context) : await pagesHandler(context);
        expect(calls).toBe(1);
        expect(response.headers.get("x-robots-tag")).toBe(hostname === "clinic.example" ? null : "noindex");
        expect(response.status).toBe(200);
        expect(response.headers.has("location")).toBe(false);
        expect(await response.text()).toBe("SPA fallback");
      }
    });
  }
});