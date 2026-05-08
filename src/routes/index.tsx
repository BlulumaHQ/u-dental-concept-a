import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Phone, Calendar, ShieldCheck, Languages, Stethoscope,
  Microscope, Cpu, Building2, Heart, MapPin, Clock, Mail, CheckCircle2,
} from "lucide-react";
import { SITE, HERO_IMAGES, FEATURED_TREATMENTS } from "@/lib/site";
import { useLocale, getSite, getServices, getDoctors, getFaqs, localePath, t } from "@/lib/i18n";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServiceCard } from "@/components/site/ServiceCard";
import { PageLoader } from "@/components/site/PageLoader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modern Dental Care in Kitsilano Vancouver | U-Dental Clinic" },
      { name: "description", content: "U-Dental Clinic provides advanced dental care in Kitsilano Vancouver with English and Mandarin-speaking dentists, digital dentistry, implant technology, orthodontics, and comprehensive dental services." },
      { property: "og:title", content: "Modern Dental Care in Kitsilano Vancouver | U-Dental Clinic" },
      { property: "og:description", content: "Advanced dental care in English & Mandarin — implants, Invisalign, orthodontics, and more." },
      { property: "og:image", content: HERO_IMAGES[0] },
      { rel: "alternate", hrefLang: "en", href: "https://u-dental-concept-a.lovable.app/" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "https://u-dental-concept-a.lovable.app/zh-hant" },
    ],
    links: [
      { rel: "canonical", href: "https://u-dental-concept-a.lovable.app/" },
      { rel: "alternate", hrefLang: "en", href: "https://u-dental-concept-a.lovable.app/" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "https://u-dental-concept-a.lovable.app/zh-hant" },
      { rel: "alternate", hrefLang: "x-default", href: "https://u-dental-concept-a.lovable.app/" },
    ],
  }),
  component: HomePage,
});

export function HomePage() {
  const locale = useLocale();
  const isZh = locale === "zh-Hant";
  const site = getSite(locale);
  const services = getServices(locale);
  const doctors = getDoctors(locale);
  const faqs = getFaqs(locale);
  const lp = (p: string) => localePath(p, locale) as string;

  const trustPoints = [
    { icon: MapPin, label: isZh ? "溫哥華 Kitsilano" : "Kitsilano Vancouver" },
    { icon: Languages, label: t("hero.bilingual", locale) },
    { icon: Cpu, label: isZh ? "進階數位牙科" : "Advanced Digital Dentistry" },
    { icon: Stethoscope, label: isZh ? "經驗豐富的醫師團隊" : "Experienced Dental Team" },
    { icon: Building2, label: isZh ? "專屬手術房" : "Exclusive Surgical Room" },
  ];

  const whyPoints = isZh ? [
    { icon: Heart, title: "舒適為核心的照護", body: "從報到到回診，皆於安靜現代化的環境中，圍繞著您的看診體驗精心設計。" },
    { icon: Languages, title: "中英雙語溝通", body: "團隊精通中文與英文，讓您能清楚、安心地提出疑問。" },
    { icon: Cpu, title: "先進牙科技術", body: "數位口掃、3D 導航植牙與現代化流程，全力支援精準治療。" },
    { icon: Stethoscope, title: "完整治療項目", body: "從定期洗牙到複雜的外科與植牙案例——所有服務一次到位。" },
    { icon: ShieldCheck, title: "醫學中心等級無菌", body: "專屬手術房，提供高標準的臨床衛生與感染控制。" },
    { icon: Microscope, title: "顯微鏡精準治療", body: "進階視覺工具支援細膩、注重細節的牙科治療。" },
  ] : [
    { icon: Heart, title: "Comfort-Focused Care", body: "A calm, modern environment built around the patient experience from check-in to follow-up." },
    { icon: Languages, title: "Bilingual Communication", body: "A team fluent in English and Mandarin so you can ask questions clearly and confidently." },
    { icon: Cpu, title: "Advanced Technology", body: "Digital scans, 3D-guided implant placement, and modern workflows that support precision." },
    { icon: Stethoscope, title: "Comprehensive Treatment", body: "From routine cleanings to complex surgical and implant cases — all under one roof." },
    { icon: ShieldCheck, title: "Medical-Class Asepsis", body: "An exclusive surgical room designed to deliver a high standard of clinical hygiene." },
    { icon: Microscope, title: "Microscopic Precision", body: "Advanced visualization tools support careful, detail-oriented dentistry." },
  ];

  const SLIDES = [
    { image: HERO_IMAGES[0], eyebrow: t("hero.eyebrowHome", locale), title: t("hero.titleHome", locale), subtitle: t("hero.subHome", locale) },
    { image: "/equipment/clinic-1.jpg", eyebrow: t("hero.eyebrowInside", locale), title: t("hero.titleInside", locale), subtitle: t("hero.subInside", locale) },
    { image: HERO_IMAGES[1], eyebrow: t("hero.eyebrowDigital", locale), title: t("hero.titleDigital", locale), subtitle: t("hero.subDigital", locale) },
    { image: HERO_IMAGES[3], eyebrow: t("hero.eyebrowComplete", locale), title: t("hero.titleComplete", locale), subtitle: t("hero.subComplete", locale) },
  ];

  const insideFeatures = isZh ? [
    "數位牙科治療流程", "專屬手術房", "進階植牙技術", "舒適為核心的環境", "中英雙語服務",
  ] : [
    "Digital Dentistry Workflow", "Exclusive Surgical Room", "Advanced Implant Technology", "Comfort-Focused Environment", "English & Mandarin Care",
  ];

  const techList = isZh ? [
    "3D 錐形束斷層掃描 (CBCT)", "X-Guide™ 即時 3D 導航植牙", "Medit i500 數位口內掃描",
    "Nobel Biocare OsseoSet 200", "Leica M320D 牙科顯微鏡", "Sirona 二極體雷射",
    "Invisalign® 隱形矯正", "Bioclear™ 美學修復", "GalvoSurge® 植體照護", "BOTOX® 臨床治療",
  ] : [
    "3D Cone Beam CT (CBCT)", "X-Guide™ Real-time 3D Surgery", "Medit i500 Intra-oral Scanner",
    "Nobel Biocare OsseoSet 200", "Leica M320D Dental Microscope", "Sirona Diode LASER",
    "Invisalign® Orthodontics", "Bioclear™ Restorations", "GalvoSurge® Implant Care", "BOTOX® Clinical Treatment",
  ];

  return (
    <>
      <PageLoader />
      <HeroSlider slides={SLIDES} />

      {/* TRUST BAR */}
      <section className="border-b border-border bg-white">
        <div className="container-x py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {trustPoints.map((tp) => (
            <div key={tp.label} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary shrink-0">
                <tp.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold">{tp.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED TREATMENTS */}
      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.featured", locale)}</p>
              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("sec.featuredHeading", locale)}</h2>
            </div>
            <Link to={lp("/services")} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {t("cta.viewAll", locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_TREATMENTS.map((ft) => {
              const localized = services.find((s) => s.slug === ft.slug);
              return (
                <Link
                  key={ft.slug}
                  to={lp(`/service/${ft.slug}`)}
                  className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition aspect-[4/5]"
                >
                  <img src={ft.image} alt={localized?.name ?? ft.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-extrabold leading-tight">{localized?.name ?? ft.title}</h3>
                    <p className="mt-2 text-sm text-white/85">{localized?.short ?? ft.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary-foreground bg-primary px-3 py-1.5 rounded-full">
                      {t("cta.learnMore", locale)} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSIDE U-DENTAL CLINIC */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.inside", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("sec.insideHeading", locale)}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t("sec.insideSub", locale)}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden shadow-elevated min-h-[300px] lg:min-h-[520px]">
              <img src="/interior/operatory.jpg" alt="U-Dental treatment operatory" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img src="/interior/lounge.jpg" alt="U-Dental patient lounge" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img src="/interior/details.jpg" alt="Clinic interior details" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {insideFeatures.map((f) => (
              <div key={f} className="rounded-xl bg-card border border-border px-4 py-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-semibold">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR DENTISTS */}
      <section id="team" className="section-y bg-cream">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.meet", locale)}</p>
              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("sec.meetHeading", locale)}</h2>
              <p className="mt-5 text-lg text-muted-foreground">{t("sec.meetSub", locale)}</p>
            </div>
            <Link to={lp("/about-us")} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {t("cta.aboutClinic", locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Mobile horizontal scroll */}
          <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {doctors.map((d) => (
              <Link key={d.slug} to={lp(`/doctor/${d.slug}`)} className="group snap-start shrink-0 w-[78%] rounded-2xl bg-card border border-border overflow-hidden flex flex-col">
                <div className="aspect-[4/5] bg-cream overflow-hidden">
                  <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-bold leading-tight">{d.name}</h3>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5">{d.credentials}</p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{d.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    {t("cta.viewProfile", locale)} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {doctors.map((d) => (
              <Link key={d.slug} to={lp(`/doctor/${d.slug}`)} className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-elevated transition flex flex-col">
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
        </div>
      </section>

      {/* WHY U-DENTAL */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.why", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("sec.whyHeading", locale)}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t("sec.whySub", locale)}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((w) => (
              <div key={w.title} className="rounded-2xl p-7 bg-card border border-border hover:shadow-card transition">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section-y bg-charcoal text-charcoal-foreground">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/equipment/tech-cbct.jpg" alt="3D Cone Beam CT imaging at U-Dental" className="rounded-3xl shadow-elevated w-full object-cover aspect-[4/3]" />
          </div>
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.tech", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("sec.techHeading", locale)}</h2>
            <p className="mt-5 text-white/75 leading-relaxed">{t("sec.techSub", locale)}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/85">
              {techList.map((tech) => (
                <li key={tech} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <Link to={lp("/technology")} className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
              {t("cta.exploreTech", locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FULL SERVICES GRID */}
      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.completeCare", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("sec.completeHeading", locale)}</h2>
            <p className="mt-5 text-muted-foreground text-lg">{t("sec.completeSub", locale)}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} variant="horizontal" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.faq", locale)}</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold">{t("sec.faqHeading", locale)}</h2>
          </div>
          <Accordion type="single" collapsible defaultValue="home-faq-0" className="border-t border-border">
            {faqs.slice(0, 3).map((f, i) => (
              <AccordionItem key={i} value={`home-faq-${i}`}>
                <AccordionTrigger className="text-left text-base lg:text-lg font-semibold py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Link to={lp("/faq")} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {t("cta.viewAllFaqs", locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl bg-charcoal text-charcoal-foreground p-10 lg:p-16 text-center shadow-elevated">
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">{t("ready2.title", locale)}</h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">{t("ready2.sub", locale)}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to={lp("/contact-us")} className="rounded-full bg-primary text-primary-foreground px-7 py-4 font-bold inline-flex items-center gap-2 hover:bg-white hover:text-primary transition">
                <Calendar className="h-5 w-5" /> {t("cta.bookLong", locale)}
              </Link>
              <a href={site.phoneHref} className="rounded-full border-2 border-white/30 px-7 py-4 font-bold inline-flex items-center gap-2 hover:bg-white/10 transition">
                <Phone className="h-5 w-5" /> {t("cta.call", locale)} {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section className="section-y bg-cream" id="contact">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.visit", locale)}</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">{t("kitsilano.title", locale)}</h2>
            <div className="mt-8 space-y-5 text-lg">
              <div className="flex gap-4"><MapPin className="h-6 w-6 text-primary shrink-0" /><span>{site.address}</span></div>
              <div className="flex gap-4"><Phone className="h-6 w-6 text-primary shrink-0" /><a href={site.phoneHref} className="hover:text-primary">{site.phone}</a></div>
              <div className="flex gap-4"><Mail className="h-6 w-6 text-primary shrink-0" /><a href={site.emailHref} className="hover:text-primary">{site.email}</a></div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0" />
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-base">
                  {site.hours.map((h) => (
                    <div key={h.d} className="contents"><span className="font-semibold">{h.d}</span><span className="text-muted-foreground">{h.t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elevated bg-card border border-border min-h-[400px]">
            <iframe
              title={isZh ? "U-Dental 牙醫診所地圖" : "U-Dental Clinic Map"}
              src="https://www.google.com/maps?q=2933+West+Broadway+Vancouver&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
