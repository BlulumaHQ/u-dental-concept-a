import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Cpu, Building2, Microscope, Zap, ArrowRight, ScanLine, Activity } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { LocaleLink } from "@/components/site/LocaleLink";
import { useLocale, useT, TECH_STACK, TECH_EQUIPMENT, TECH_HIGHER_LIST } from "@/lib/i18n";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Dental Technology & Equipment | U-Dental Clinic" },
      { name: "description", content: "3D Cone Beam CT, X-Guide™ real-time guided implant surgery, Medit i500 scanner, Leica microscope, and an exclusive surgical room at U-Dental Clinic." },
      { property: "og:title", content: "Technology & Equipment | U-Dental Clinic" },
      { property: "og:description", content: "Modern digital dentistry, 3D-guided surgery, and an exclusive surgical room in Kitsilano Vancouver." },
      { property: "og:image", content: "/equipment/clinic-4.jpg" },
    ],
  }),
  component: TechPage,
});

const ICONS: Record<string, typeof ScanLine> = {
  cbct: ScanLine, xguide: Zap, scanner: Cpu, surgery: Building2, microscope: Microscope, laser: Activity,
};

export function TechPage() {
  const locale = useLocale();
  const t = useT();
  const stack = TECH_STACK[locale];
  const equipment = TECH_EQUIPMENT[locale];
  const higher = TECH_HIGHER_LIST[locale];

  return (
    <>
      <PageHero
        eyebrow={t("page.tech.eyebrow")}
        title={t("page.tech.title")}
        subtitle={t("page.tech.sub")}
        image="/equipment/clinic-4.jpg"
      />

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((s) => {
            const Icon = ICONS[s.key] ?? ScanLine;
            return (
              <div key={s.key} className="rounded-2xl bg-card border border-border p-7 shadow-card">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("tech.equipmentLabel")}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("tech.equipmentHeading")}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t("tech.equipmentSub")}</p>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {equipment.map((e) => (
              <li key={e} className="flex gap-3 text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{e}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">{t("tech.brands")}</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/brands/all-on-4.png", alt: "All-on-4®" },
                { src: "/brands/invisalign.png", alt: "Invisalign®" },
                { src: "/brands/x-guide.png", alt: "X-Guide" },
                { src: "/brands/bioclear.png", alt: "Bioclear®" },
                { src: "/brands/galvosurge.png", alt: "GalvoSurge®" },
                { src: "/brands/botox.png", alt: "Botox® Cosmetic" },
                { src: "/brands/timan.png", alt: "Timan Dental" },
              ].map((b) => (
                <div key={b.alt} className="bg-white rounded-2xl border border-border h-28 grid place-items-center p-5">
                  <img src={b.src} alt={b.alt} className="max-h-14 max-w-[80%] object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["clinic-2", "clinic-6", "clinic-10", "clinic-14"].map((n) => (
              <div key={n} className="aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                <img src={`/equipment/${n}.jpg`} alt="U-Dental equipment" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src="/equipment/clinic-8.jpg" alt="Surgical room" className="rounded-3xl shadow-elevated w-full aspect-[4/3] object-cover" />
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("tech.higherStandard")}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("tech.medicalClass")}</h2>
            <ul className="mt-8 space-y-4">
              {higher.map((tx) => (
                <li key={tx} className="flex gap-3 text-foreground/90">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" /> {tx}
                </li>
              ))}
            </ul>
            <LocaleLink to="/contact-us" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">
              {t("cta.bookConsult")} <ArrowRight className="h-4 w-4" />
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
