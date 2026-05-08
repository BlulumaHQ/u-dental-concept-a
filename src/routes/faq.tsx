import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HERO_IMAGES } from "@/lib/site";
import { useLocale, getFaqs, localePath, t } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | U-Dental Clinic Vancouver" },
      { name: "description", content: "Answers to common questions about dental implants, All-on-4, Invisalign, cosmetic dentistry, sedation, insurance, and emergency dental care at U-Dental Clinic in Kitsilano Vancouver." },
      { property: "og:title", content: "FAQ | U-Dental Clinic" },
      { property: "og:description", content: "Patient FAQs covering implants, Invisalign, recovery, sedation, insurance, and more." },
    ],
  }),
  component: FaqPage,
});

export function FaqPage() {
  const locale = useLocale();
  const faqs = getFaqs(locale);
  const categories = Array.from(new Set(faqs.map((f) => f.category)));
  return (
    <>
      <PageHero
        eyebrow={t("page.faq.eyebrow", locale)}
        title={t("page.faq.title", locale)}
        subtitle={t("page.faq.sub", locale)}
        image={HERO_IMAGES[2]}
      />
      <section className="section-y">
        <div className="container-x max-w-4xl">
          {categories.map((cat) => (
            <div key={cat} className="mb-14">
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">{cat}</h2>
              <Accordion type="single" collapsible className="border-t border-border">
                {faqs.filter((f) => f.category === cat).map((f, i) => (
                  <AccordionItem key={i} value={`${cat}-${i}`}>
                    <AccordionTrigger className="text-left text-base lg:text-lg font-semibold py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          <div className="mt-12 rounded-3xl bg-cream border border-border p-8 text-center">
            <h3 className="text-2xl font-extrabold">{t("stillQ.title", locale)}</h3>
            <p className="mt-2 text-muted-foreground">{t("stillQ.sub", locale)}</p>
            <Link to={localePath("/contact-us", locale) as string} className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">
              {t("cta.contactUs", locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
