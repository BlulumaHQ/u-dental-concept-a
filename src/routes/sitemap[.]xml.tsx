import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/i18n";
import { SERVICES, DOCTORS } from "@/lib/site";
import { INSIGHTS } from "@/lib/insights";

const STATIC_PATHS = [
  "/",
  "/about-us",
  "/services",
  "/technology",
  "/insights",
  "/faq",
  "/contact-us",
  "/privacy-policy",
  "/term-of-service",
];

function urlEntry(enPath: string) {
  const zhPath = enPath === "/" ? "/zh-hant" : "/zh-hant" + enPath;
  return `  <url>
    <loc>${SITE_ORIGIN}${enPath}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_ORIGIN}${enPath}" />
    <xhtml:link rel="alternate" hreflang="zh-Hant" href="${SITE_ORIGIN}${zhPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${enPath}" />
  </url>
  <url>
    <loc>${SITE_ORIGIN}${zhPath}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_ORIGIN}${enPath}" />
    <xhtml:link rel="alternate" hreflang="zh-Hant" href="${SITE_ORIGIN}${zhPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${enPath}" />
  </url>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          ...STATIC_PATHS,
          ...SERVICES.map((s) => `/service/${s.slug}`),
          ...DOCTORS.map((d) => `/doctor/${d.slug}`),
          ...INSIGHTS.map((i) => `/insights/${i.slug}`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths.map(urlEntry).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
