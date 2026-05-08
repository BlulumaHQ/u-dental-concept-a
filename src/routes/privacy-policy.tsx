import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLocale, useT, PRIVACY_CONTENT } from "@/lib/i18n";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | U-Dental Clinic" },
      { name: "description", content: "Privacy Policy for U-Dental Clinic — how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy | U-Dental Clinic" },
      { property: "og:description", content: "How U-Dental Clinic collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

export function PrivacyPage() {
  const locale = useLocale();
  const t = useT();
  const c = PRIVACY_CONTENT[locale];
  return (
    <>
      <PageHero eyebrow={t("legal.label")} title={t("legal.privacyTitle")} subtitle={t("legal.privacySub")} image="/about/about-banner.jpg" />
      <section className="section-y">
        <div className="container-x max-w-3xl prose-style">
          <p className="text-muted-foreground">{c.updated}</p>
          {c.sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl font-bold mt-10 mb-4">{s.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
