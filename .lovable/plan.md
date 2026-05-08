# Traditional Chinese Bilingual Site — Implementation Plan

A complete localized Chinese layer over the existing English site, with proper multilingual SEO, separate URLs, and naturally written Traditional Chinese copy (not machine translation).

## 1. URL Architecture

Mirror every English page under `/zh-hant/*`, preserving English slugs (which is what the live `u-dental.ca/zh-hant/services/dental-implants/` site already does — it does NOT use Chinese-character slugs). This preserves any indexed history.

```
/                        ↔  /zh-hant
/about-us                ↔  /zh-hant/about-us
/services                ↔  /zh-hant/services
/service/$slug           ↔  /zh-hant/service/$slug
/doctor/$slug            ↔  /zh-hant/doctor/$slug
/technology              ↔  /zh-hant/technology
/insights                ↔  /zh-hant/insights
/insights/$slug          ↔  /zh-hant/insights/$slug
/faq                     ↔  /zh-hant/faq
/contact-us              ↔  /zh-hant/contact-us
/privacy-policy          ↔  /zh-hant/privacy-policy
/term-of-service         ↔  /zh-hant/term-of-service
```

Each Chinese page is a real TanStack route file under `src/routes/zh-hant/` — no hash routing, no client-side translation, fully SSR/SSG-indexable HTML with its own `head()`.

## 2. Localized Content Layer

New files:

- `src/lib/site.zh.ts` — Chinese versions of `SITE`, `SERVICES`, `SERVICE_CATEGORIES`, `FEATURED_TREATMENTS`, `DOCTORS`
- `src/lib/insights.zh.ts` — every insight rewritten in natural Chinese (not translated line-by-line)
- `src/lib/faqs.zh.ts` — FAQs in natural Traditional Chinese
- `src/lib/i18n.ts` — `useLocale()` hook (reads `/zh-hant` prefix), `t()` UI dictionary (nav, buttons, footer, CTA, form labels), `localizedHref()` helper, `pairPath()` helper for the language switcher

## 3. Shared Components — Locale Aware

Refactor `Header`, `Footer`, `StickyCTA`, `HeroSlider`, `ServiceCard`, `PageHero`, `ChatbotWidget` to read `useLocale()` and render localized strings + locale-correct internal links. The components themselves are not duplicated — only the data/strings differ.

## 4. Language Switcher — `EN | 中文`

Subtle text switch placed in the desktop header (next to phone) and inside the mobile menu (next to the existing position). Each route exposes its counterpart path so the switcher always lands on the equivalent page, never the homepage.

## 5. SEO — hreflang, canonical, OG, schema

Helper `buildLocalizedHead({ enPath, zhPath, locale, title, description, image })` returns:

- localized `<title>`, `<meta name="description">`
- `og:title`, `og:description`, `og:locale` (`en_CA` or `zh_TW`), `og:image`
- `<link rel="canonical">` to the current locale URL
- `<link rel="alternate" hreflang="en">`, `hreflang="zh-Hant"`, `hreflang="x-default">` (English)
- localized JSON-LD (`Dentist` / `LocalBusiness` on home, `FAQPage` on FAQ, `Article` on insights, `BreadcrumbList` where appropriate)

Applied on every route — both English and Chinese — so existing English pages also gain hreflang to their Chinese counterparts.

## 6. Sitemap

Add `src/routes/sitemap[.]xml.tsx` that emits all English + Chinese URLs with `<xhtml:link rel="alternate" hreflang="...">` entries per URL.

## 7. Typography

- Add Noto Sans TC via `<link>` preconnect + stylesheet in root `head()`
- In `src/styles.css`, add `:lang(zh-Hant)` rules: font stack with `"Noto Sans TC"` first, `line-height: 1.75`, slightly looser `letter-spacing`, and `word-break: keep-all` for headings to prevent awkward Chinese line wraps
- The `<html lang>` attribute switches to `zh-Hant` on Chinese routes via root component logic

## 8. Chinese Copywriting Principles

Examples used throughout (natural Taiwan/HK Traditional Chinese style for Vancouver/Richmond audience):

- Tagline → 「溫哥華值得信賴的優質牙醫診所」
- Book Appointment → 「立即預約」
- Our Doctors → 「醫師團隊」
- Insights → 「專業文章」
- FAQ → 「常見問題」
- About Us → 「關於我們」
- Contact Us → 「聯絡我們」
- Cosmetic & Comprehensive Dentistry → 「美學牙科與全方位牙科治療」
- Dental Implants → 「植牙 (人工植牙)」
- All-on-4 → 「All-on-4 全口重建」
- Invisalign → 「Invisalign 隱適美隱形矯正」
- X-Guide Real-time 3D Guidance Surgery → 「X-Guide 即時 3D 導航植牙手術」
- Wisdom Tooth Extraction → 「智齒拔除」
- Microscopic Dentistry → 「顯微鏡精密牙科治療」
- Address phrasing → 「溫哥華 Kitsilano West Broadway 2933 號」

Doctor bios and insights are rewritten as natural Chinese editorial copy, not literal translations. SEO keywords (溫哥華植牙, Richmond Invisalign, 溫哥華牙醫診所, 數位植牙, 隱形牙套, 溫哥華美容牙科) are woven in naturally — not stuffed.

## 9. Implementation Order

1. Add Noto Sans TC + `:lang(zh-Hant)` styles + locale-aware `<html lang>`
2. Create `src/lib/i18n.ts`, `site.zh.ts`, `insights.zh.ts`, `faqs.zh.ts`
3. Create `buildLocalizedHead()` SEO helper
4. Refactor shared components to be locale-aware + add language switcher (header + mobile menu)
5. Create all 12 Chinese route files under `src/routes/zh-hant/`
6. Add sitemap with hreflang alternates
7. Apply hreflang/canonical to existing English routes
8. Verify build, then screenshot `/zh-hant`, `/zh-hant/services`, `/zh-hant/about-us`, `/zh-hant/insights`, plus mobile views, to QA Chinese typography and layout

## Technical Notes

- TanStack file-based routing: `src/routes/zh-hant/index.tsx`, `src/routes/zh-hant/about-us.tsx`, `src/routes/zh-hant/service.$slug.tsx`, etc. The route tree is auto-generated.
- Locale detection inline: `const locale = pathname.startsWith('/zh-hant') ? 'zh-Hant' : 'en'`
- All `<Link>`s remain type-safe (no string interpolation of params)
- No translation library; every Chinese page ships fully-rendered HTML
- Image assets and hero images are reused (visuals are universal); only text differs

## Scope

This adds ~12 new route files + a Chinese data layer roughly the same size as the English one + shared-component refactors. It is a substantial single-pass build. After approval I will execute end-to-end and report back with screenshots of the key Chinese pages (desktop + mobile).

CRITICAL:

Preserve ALL existing English pages exactly as they currently are.

We are ADDING a fully localized Traditional Chinese SEO layer on top of the completed English website.

Do NOT redesign the English site.

Do NOT modify existing English layouts.

Do NOT replace existing English copy.

Do NOT restructure existing English routing unless required for multilingual SEO compatibility only.

IMPORTANT:

When Chinese wording already exists on the original U-Dental Chinese website,

reuse the original wording whenever possible.

Do NOT unnecessarily rewrite existing Chinese medical terminology that already matches the clinic’s established branding and SEO history.

Priority:

1. Original U-Dental Chinese wording

2. Natural Vancouver Traditional Chinese localization

3. Only rewrite when original wording feels unnatural or outdated

CRITICAL:

Chinese Insight articles must NOT be direct machine-translated versions of the English articles.

They should be rewritten naturally for Traditional Chinese readers while preserving:

- medical accuracy

- SEO intent

- article structure

- professional tone

The Chinese blog should feel like a professionally written local Vancouver Chinese dental publication.

&nbsp;