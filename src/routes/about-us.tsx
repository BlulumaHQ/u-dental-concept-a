import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { useLocale, getSite, getDoctors, localePath, t } from "@/lib/i18n";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About U-Dental Clinic | Bilingual Dentists in Kitsilano Vancouver" },
      { name: "description", content: "Meet the U-Dental team — bilingual dentists, advanced digital dentistry, an exclusive surgical room, and a calm, technology-supported environment in Kitsilano Vancouver." },
      { property: "og:title", content: "About U-Dental Clinic" },
      { property: "og:description", content: "Bilingual dentists, decades of experience, modern digital dentistry in Kitsilano Vancouver." },
      { property: "og:image", content: "/about/about-banner.jpg" },
    ],
  }),
  component: AboutPage,
});

const BRANDS = [
  { src: "/brands/all-on-4.png", alt: "All-on-4®" },
  { src: "/brands/invisalign.png", alt: "Invisalign®" },
  { src: "/brands/x-guide.png", alt: "X-Guide" },
  { src: "/brands/bioclear.png", alt: "Bioclear®" },
  { src: "/brands/galvosurge.png", alt: "GalvoSurge®" },
  { src: "/brands/botox.png", alt: "Botox® Cosmetic" },
  { src: "/brands/timan.png", alt: "Timan Dental" },
];

const ENVIRONMENT = [
  { src: "/equipment/clinic-1.jpg", alt: "U-Dental clinic interior" },
  { src: "/equipment/clinic-3.jpg", alt: "U-Dental treatment room" },
  { src: "/equipment/clinic-5.jpg", alt: "U-Dental reception area" },
  { src: "/equipment/clinic-7.jpg", alt: "U-Dental sterilization workflow" },
];

const TECH_PHOTOS = [
  { src: "/equipment/clinic-9.jpg", alt: "Surgical suite" },
  { src: "/equipment/clinic-11.jpg", alt: "Digital implant planning" },
  { src: "/equipment/clinic-13.jpg", alt: "Intra-oral scanning" },
  { src: "/equipment/clinic-15.jpg", alt: "Dental microscope" },
];

export function AboutPage() {
  const locale = useLocale();
  const isZh = locale === "zh-Hant";
  const site = getSite(locale);
  const doctors = getDoctors(locale);

  return (
    <>
      <PageHero
        eyebrow={t("page.about.eyebrow", locale)}
        title={t("page.about.title", locale)}
        subtitle={t("page.about.sub", locale)}
        image="/about/about-banner.jpg"
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-cream -z-10" />
              <img src="/about/artwork-1.png" alt="Original U-Dental clinic artwork" className="rounded-2xl w-full object-contain shadow-elevated bg-white" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">{t("about.visionLabel", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-[1.1]">{t("about.visionHeading", locale)}</h2>
            <div className="mt-6 space-y-5 text-lg text-foreground/80 leading-relaxed">
              {isZh ? (
                <>
                  <p>U-Dental 的醫師團隊集結了溫哥華本地資深診所的成員，以及來自台灣的專科醫師與大學教授。我們的願景蘊含於診所名稱中——「U」的發音與中文的「優」相近，象徵追求卓越。</p>
                  <p>我們的願景是成為大溫地區每一個健康燦爛笑容的守護者。我們秉持這個核心價值，提供細膩的預防保健與高品質的治療——並全程提供中英雙語服務。</p>
                </>
              ) : (
                <>
                  <p>The team here at U-Dental brings together members from well-established local clinics and specialists and professors from Taiwan. Our vision is captured in our name — the pronunciation of <em>"U"</em> is similar to <em>"Excellence"</em> in Mandarin.</p>
                  <p>Our vision is to be the guardian of every healthy and bright smile in Metro Vancouver. We hold this core value in mind as we provide considered preventive care and high-quality treatment for our patients — with English and Mandarin spoken throughout the clinic.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">{t("about.modernLabel", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("about.modernHeading", locale)}</h2>
            <p className="mt-5 text-lg text-foreground/75">{t("about.modernSub", locale)}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ENVIRONMENT.map((p) => (
              <div key={p.src} className="aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-card">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">{t("about.equipLabel", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-[1.1]">{t("about.equipHeading", locale)}</h2>
            <div className="mt-6 space-y-5 text-foreground/80 leading-relaxed">
              {isZh ? (
                <>
                  <p>U-Dental 配備 3D CBCT 錐形束斷層掃描、Medit i500 數位口內掃描機與 X-Guide 即時手術導航系統——支援完整的數位植牙流程、即拔即種搭配臨時假牙、All-on-4 全口重建以及 Invisalign® 隱形矯正治療。</p>
                  <p>我們的專屬手術房配備德國 DR.MACH 手術燈、Sirona 二極體雷射、Versah 嵴頂上頷竇增高鑽針、COLTENE Perfect TSC II 電燒系統、Nobel Biocare OsseoSet 200 植體系統，以及 A-dec 與 W&amp;H 電動馬達手機。</p>
                  <p>於修復與顯微牙科治療中，我們使用 Leica M320D 牙科顯微鏡，並搭配 Bioclear® 矩陣系統與 GalvoSurge® 植體表面照護，達成精準、可預期的治療成果。</p>
                </>
              ) : (
                <>
                  <p>U-Dental is equipped with 3D Cone Beam CT (CBCT), the Medit i500 intra-oral scanner, and the X-Guide real-time surgical navigator — supporting a fully digital implant workflow, immediate implants with provisional crowns, All-on-4 full-mouth reconstruction, and Invisalign® orthodontic treatment.</p>
                  <p>Our exclusive surgical room is equipped with the German DR.MACH surgical light, Sirona Diode LASER, Versah crestal sinus lift drill, COLTENE Perfect TSC II electrosurgery system, the Nobel Biocare OsseoSet 200 implant system, and A-dec / W&amp;H electronic motor handpieces.</p>
                  <p>For restorative and microscopic dentistry we use the Leica M320D dental microscope, with Bioclear® matrix systems and GalvoSurge® implant surface care to support precise, predictable outcomes.</p>
                </>
              )}
            </div>
            <Link to={localePath("/technology", locale) as string} className="mt-8 inline-flex items-center gap-2 text-primary font-bold">
              {t("cta.fullTechList", locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {TECH_PHOTOS.map((p) => (
              <div key={p.src} className="aspect-square overflow-hidden rounded-2xl shadow-card">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-soft">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">{t("about.brandsLabel", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("about.brandsHeading", locale)}</h2>
            <p className="mt-5 text-foreground/75">{t("about.brandsSub", locale)}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {BRANDS.map((b) => (
              <div key={b.alt} className="bg-white rounded-2xl border border-border h-32 grid place-items-center p-6 hover:shadow-card transition">
                <img src={b.src} alt={b.alt} className="max-h-16 max-w-[80%] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-y">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">{t("team.label", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("team.heading", locale)}</h2>
            <p className="mt-5 text-lg text-foreground/75">{t("sec.meetSub", locale)}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {doctors.map((d) => (
              <Link key={d.slug} to={localePath(`/doctor/${d.slug}`, locale) as string} className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-elevated transition flex flex-col">
                <div className="aspect-[4/5] bg-cream overflow-hidden">
                  <img src={d.photo} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary">{d.name}</h3>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5">{d.credentials}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {d.specialties.slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] font-semibold uppercase tracking-wide rounded-full bg-primary/10 text-primary px-2 py-0.5">{s}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">{d.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    {t("cta.viewProfile", locale)} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden bg-charcoal text-white shadow-elevated grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.3em]">{t("about.behindLabel", locale)}</p>
              <h3 className="mt-3 text-3xl lg:text-4xl font-extrabold leading-tight">{t("about.behindHeading", locale)}</h3>
              <p className="mt-5 text-white/80 leading-relaxed">{t("about.behindSub", locale)}</p>
            </div>
            <div className="lg:col-span-3 lg:min-h-[260px]">
              <img src="/about/team-wide.jpg" alt="The U-Dental clinical and support team" className="w-full h-auto lg:h-full object-contain lg:object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-charcoal text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold">{t("ready.title", locale)}</h2>
          <p className="mt-5 text-lg text-white/80">{t("ready.sub", locale)}</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={localePath("/contact-us", locale) as string} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold shadow-glow">
              {t("cta.bookLong", locale)} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold hover:bg-white/10">
              <Phone className="h-4 w-4" /> {t("cta.call", locale)} {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
