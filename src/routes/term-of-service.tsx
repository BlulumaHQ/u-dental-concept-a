import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLocale, useT, TERMS_CONTENT } from "@/lib/i18n";

export const Route = createFileRoute("/term-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | U-Dental Clinic" },
      { name: "description", content: "Terms of Service for U-Dental Clinic — please read these terms carefully before using our website." },
      { property: "og:title", content: "Terms of Service | U-Dental Clinic" },
      { property: "og:description", content: "Terms governing the use of U-Dental Clinic's website and services." },
    ],
  }),
  component: TermsPage,
});

export function TermsPage() {
  const locale = useLocale();
  const t = useT();
  const c = TERMS_CONTENT[locale];
  return (
    <>
      <PageHero eyebrow={t("legal.label")} title={t("legal.termsTitle")} subtitle={t("legal.termsSub")} image="/about/about-banner.jpg" />
      <section className="section-y">
        <div className="container-x max-w-3xl">
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
