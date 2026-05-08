import { Link, useRouterState } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight, Calendar } from "lucide-react";
import { Logo } from "./Logo";
import { detectLocale, getSite, localePath, t } from "@/lib/i18n";

const FEATURED_EN = [
  { slug: "dental-implants", name: "Dental Implants" },
  { slug: "all-on-4", name: "All-on-4" },
  { slug: "invisalign", name: "Invisalign" },
  { slug: "x-guide-real-time-3d-guidance-surgery", name: "X-Guide Implant Surgery" },
  { slug: "cosmetics-and-comprehensive-dentistry", name: "Cosmetic & Comprehensive Dentistry" },
];
const FEATURED_ZH = [
  { slug: "dental-implants", name: "植牙 (人工植牙)" },
  { slug: "all-on-4", name: "All-on-4 全口重建" },
  { slug: "invisalign", name: "Invisalign 隱形矯正" },
  { slug: "x-guide-real-time-3d-guidance-surgery", name: "X-Guide 即時導航植牙" },
  { slug: "cosmetics-and-comprehensive-dentistry", name: "美學與全方位牙科" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = detectLocale(pathname);
  const site = getSite(locale);
  const featured = locale === "zh-Hant" ? FEATURED_ZH : FEATURED_EN;
  const lp = (p: string) => localePath(p, locale) as string;

  return (
    <footer className="bg-charcoal text-charcoal-foreground pt-10 md:pt-20 pb-24 md:pb-8 mt-12">
      {/* MOBILE — compact */}
      <div className="container-x md:hidden">
        <Logo variant="light" className="h-9 mb-4" />
        <ul className="space-y-2 text-sm opacity-85">
          <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> {site.address}</li>
          <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={site.phoneHref} className="hover:text-primary">{site.phone}</a></li>
          <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={site.emailHref} className="hover:text-primary">{site.email}</a></li>
        </ul>
        <Link to={lp("/contact-us")} className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold">
          <Calendar className="h-4 w-4" /> {t("cta.book", locale)}
        </Link>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs opacity-80">
          <Link to={lp("/about-us")} className="hover:text-primary">{t("nav.about", locale)}</Link>
          <Link to={lp("/services")} className="hover:text-primary">{t("nav.services", locale)}</Link>
          <Link to={lp("/technology")} className="hover:text-primary">{t("nav.technology", locale)}</Link>
          <Link to={lp("/insights")} className="hover:text-primary">{t("nav.insights", locale)}</Link>
          <Link to={lp("/faq")} className="hover:text-primary">{t("nav.faq", locale)}</Link>
          <Link to={lp("/contact-us")} className="hover:text-primary">{t("nav.contact", locale)}</Link>
          <Link to={lp("/privacy-policy")} className="hover:text-primary">{t("foot.privacyShort", locale)}</Link>
          <Link to={lp("/term-of-service")} className="hover:text-primary">{t("foot.termsShort", locale)}</Link>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-[11px] opacity-70 flex flex-col gap-1">
          <span>© {year} {t("foot.copyright", locale)}</span>
          <span>{t("foot.webby", locale)} <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Bluluma</a></span>
        </div>
      </div>

      {/* DESKTOP / TABLET */}
      <div className="container-x hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo variant="light" className="h-10 mb-4" />
          <p className="text-sm opacity-75 leading-relaxed">{t("foot.intro", locale)}</p>
          <ul className="mt-5 space-y-2 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> {site.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={site.phoneHref} className="hover:text-primary">{site.phone}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <div>{site.hours.map((h) => (<div key={h.d}>{h.d}: {h.t}</div>))}</div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t("foot.featured", locale)}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link to={lp(`/service/${s.slug}`)} className="hover:text-primary">{s.name}</Link>
              </li>
            ))}
            <li className="pt-1">
              <Link to={lp("/services")} className="inline-flex items-center gap-1 text-primary font-semibold">
                {t("foot.viewAllServices", locale)} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t("foot.resources", locale)}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to={lp("/about-us")} className="hover:text-primary">{t("nav.about", locale)}</Link></li>
            <li><Link to={lp("/technology")} className="hover:text-primary">{t("nav.technology", locale)}</Link></li>
            <li><Link to={lp("/faq")} className="hover:text-primary">{t("nav.faq", locale)}</Link></li>
            <li><Link to={lp("/insights")} className="hover:text-primary">{t("nav.insights", locale)}</Link></li>
            <li><Link to={lp("/contact-us")} className="hover:text-primary">{t("nav.contact", locale)}</Link></li>
            <li><Link to={lp("/privacy-policy")} className="hover:text-primary">{t("foot.privacy", locale)}</Link></li>
            <li><Link to={lp("/term-of-service")} className="hover:text-primary">{t("foot.terms", locale)}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t("foot.book", locale)}</h4>
          <p className="text-sm opacity-80 leading-relaxed">{t("foot.bookSub", locale)}</p>
          <a href={site.phoneHref} className="mt-4 flex items-center gap-2 text-base font-bold text-primary hover:opacity-90">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <a href={site.emailHref} className="mt-2 flex items-center gap-2 text-sm opacity-80 hover:text-primary">
            <Mail className="h-4 w-4" /> {site.email}
          </a>
          <Link to={lp("/contact-us")} className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:opacity-90 transition">
            <Calendar className="h-4 w-4" /> {t("cta.book", locale)}
          </Link>
        </div>
      </div>
      <div className="container-x mt-14 pt-6 border-t border-white/10 text-xs opacity-70 hidden md:flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center text-center">
        <span>© {year} {t("foot.copyright", locale)}</span>
        <span className="hidden sm:inline opacity-40">|</span>
        <span>{t("foot.webby", locale)}{" "}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Bluluma</a>
        </span>
      </div>
    </footer>
  );
}
