import { SITE_ORIGIN, type Locale } from "./i18n";

export type HreflangArgs = {
  enPath: string;
  zhPath?: string; // defaults to /zh-hant + enPath
};

export function buildAlternates({ enPath, zhPath }: HreflangArgs) {
  const zh = zhPath ?? (enPath === "/" ? "/zh-hant" : "/zh-hant" + enPath);
  return [
    { rel: "alternate", hrefLang: "en", href: SITE_ORIGIN + enPath },
    { rel: "alternate", hrefLang: "zh-Hant", href: SITE_ORIGIN + zh },
    { rel: "alternate", hrefLang: "x-default", href: SITE_ORIGIN + enPath },
  ];
}

export function canonical(path: string) {
  return { rel: "canonical", href: SITE_ORIGIN + path };
}

export function localizedHead({
  locale,
  enPath,
  zhPath,
  title,
  description,
  image,
  type = "website",
}: {
  locale: Locale;
  enPath: string;
  zhPath?: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}) {
  const path = locale === "zh-Hant" ? zhPath ?? (enPath === "/" ? "/zh-hant" : "/zh-hant" + enPath) : enPath;
  const ogLocale = locale === "zh-Hant" ? "zh_TW" : "en_CA";
  const ogLocaleAlt = locale === "zh-Hant" ? "en_CA" : "zh_TW";
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:locale", content: ogLocale },
    { property: "og:locale:alternate", content: ogLocaleAlt },
    { property: "og:url", content: SITE_ORIGIN + path },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return {
    meta,
    links: [canonical(path), ...buildAlternates({ enPath, zhPath })],
  };
}
