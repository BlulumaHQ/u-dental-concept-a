import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { HERO_IMAGES } from "@/lib/site";
import { useLocale, getSite, t } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact U-Dental Clinic | Book an Appointment in Kitsilano Vancouver" },
      { name: "description", content: "Contact U-Dental Clinic to book your visit. English and Mandarin support. Call 604-423-3839 or send us a message." },
      { property: "og:title", content: "Contact U-Dental Clinic" },
      { property: "og:description", content: "Book your appointment in Kitsilano Vancouver — English & Mandarin support." },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const locale = useLocale();
  const site = getSite(locale);
  return (
    <>
      <PageHero
        eyebrow={t("page.contact.eyebrow", locale)}
        title={t("page.contact.title", locale)}
        subtitle={t("page.contact.sub", locale)}
        image={HERO_IMAGES[4]}
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold">{t("contact.title", locale)}</h2>
              <p className="mt-3 text-muted-foreground">{t("contact.respond", locale)}</p>
            </div>
            <div className="space-y-5 text-lg">
              <div className="flex gap-4"><MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" /><span>{site.address}</span></div>
              <div className="flex gap-4"><Phone className="h-6 w-6 text-primary shrink-0 mt-0.5" /><a href={site.phoneHref} className="hover:text-primary">{site.phone}</a></div>
              <div className="flex gap-4"><Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" /><a href={site.emailHref} className="hover:text-primary">{site.email}</a></div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1 text-base">
                  {site.hours.map((h) => (
                    <div key={h.d}><span className="font-semibold">{h.d}:</span> <span className="text-muted-foreground">{h.t}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                title={locale === "zh-Hant" ? "U-Dental 診所地圖" : "U-Dental Clinic Map"}
                src="https://www.google.com/maps?q=2933+West+Broadway+Vancouver&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-3xl bg-card border border-border shadow-elevated p-7 lg:p-10 space-y-5"
            >
              <h2 className="text-2xl font-extrabold">{t("contact.request", locale)}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t("contact.fName", locale)} required><input required className="input" /></Field>
                <Field label={t("contact.fEmail", locale)} required><input required type="email" className="input" /></Field>
                <Field label={t("contact.fPhone", locale)}><input className="input" type="tel" /></Field>
                <Field label={t("contact.fLang", locale)}>
                  <select className="input">
                    <option>{t("lang.en", locale)}</option>
                    <option>{t("lang.zh", locale)}</option>
                  </select>
                </Field>
              </div>
              <Field label={t("contact.fInterest", locale)}>
                <select className="input">
                  <option>{t("contact.opt.general", locale)}</option>
                  <option>{t("contact.opt.cleaning", locale)}</option>
                  <option>{t("contact.opt.emergency", locale)}</option>
                  <option>{t("contact.opt.implants", locale)}</option>
                  <option>{t("contact.opt.invisalign", locale)}</option>
                  <option>{t("contact.opt.wisdom", locale)}</option>
                  <option>{t("contact.opt.cosmetic", locale)}</option>
                  <option>{t("contact.opt.other", locale)}</option>
                </select>
              </Field>
              <Field label={t("contact.fMsg", locale)}>
                <textarea rows={5} className="input resize-none" />
              </Field>
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full gradient-accent text-primary-foreground px-7 py-4 font-semibold shadow-glow hover:scale-[1.01] transition">
                <Send className="h-4 w-4" /> {t("contact.send", locale)}
              </button>
              {submitted && (
                <p className="text-sm text-primary font-semibold">
                  {t("contact.thanksPrefix", locale)} {site.phone} {t("contact.thanksSuffix", locale)}
                </p>
              )}
              <p className="text-xs text-muted-foreground">{t("contact.formNote", locale)}</p>
            </form>
          </div>
        </div>
      </section>

      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.95rem;outline:none;transition:border-color .15s;}.input:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in oklab, var(--primary) 15%, transparent);}`}</style>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold mb-1.5 block">{label}{required && <span className="text-primary"> *</span>}</span>
      {children}
    </label>
  );
}
