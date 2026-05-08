import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Phone, ChevronDown, Calendar } from "lucide-react";
import { useLocale, getSite, getServices, getServiceCategories, localePath, pairPath, t } from "@/lib/i18n";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const locale = useLocale();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const site = getSite(locale);
  const services = getServices(locale);
  const cats = getServiceCategories(locale);

  const NAV = [
    { to: "/", label: t("nav.home", locale) },
    { to: "/about-us", label: t("nav.about", locale) },
    { to: "/services", label: t("nav.services", locale), hasMenu: true },
    { to: "/technology", label: t("nav.technology", locale) },
    { to: "/insights", label: t("nav.insights", locale) },
    { to: "/faq", label: t("nav.faq", locale) },
    { to: "/contact-us", label: t("nav.contact", locale) },
  ];

  const enHref = pairPath(pathname, "en");
  const zhHref = pairPath(pathname, "zh-Hant");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur",
      )}
    >
      <div className="relative flex min-h-[80px] items-stretch overflow-hidden lg:min-h-[96px]">
        <div className="container-x flex items-stretch gap-6 pr-5">
          <Link to={localePath("/", locale) as string} aria-label="U-Dental Clinic home" className="flex shrink-0 items-center">
            <Logo variant="dark" />
          </Link>

          <div className="ml-auto flex items-center gap-3 self-center min-[1180px]:hidden">
            <div className="flex items-center gap-1.5 text-sm font-semibold">
              <Link to={enHref as string} className={locale === "en" ? "text-primary" : "text-foreground hover:text-primary transition-colors"}>EN</Link>
              <span className="text-muted-foreground">/</span>
              <Link to={zhHref as string} className={locale === "zh-Hant" ? "text-primary" : "text-foreground hover:text-primary transition-colors"}>中文</Link>
            </div>
            <button
              aria-label="Open menu"
              className="p-2 text-foreground"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <nav className="absolute inset-y-0 left-[max(360px,calc((100vw-80rem)/2+360px))] right-[184px] hidden items-center justify-end gap-0 overflow-hidden min-[1180px]:flex min-[1360px]:left-[max(400px,calc((100vw-80rem)/2+400px))]">
          <div className="mx-auto flex items-center gap-0 pr-6 min-[1360px]:pr-10">
          {NAV.map((item) =>
            item.hasMenu ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setSvcOpen(true)}
                onMouseLeave={() => setSvcOpen(false)}
              >
                <Link
                  to={localePath(item.to, locale) as string}
                  className="flex items-center gap-1 rounded-md px-1.5 py-2 text-xs font-semibold text-foreground transition-colors hover:text-primary min-[1360px]:px-3 min-[1360px]:text-sm"
                  activeProps={{
                    className:
                      "flex items-center gap-1 rounded-md px-1.5 py-2 text-xs font-semibold text-primary min-[1360px]:px-3 min-[1360px]:text-sm",
                  }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {svcOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[760px]">
                    <div className="bg-card rounded-2xl shadow-elevated border border-border p-6 grid grid-cols-2 gap-x-8 gap-y-5">
                      {(Object.keys(cats) as Array<keyof typeof cats>).map((cat) => (
                        <div key={cat as string}>
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                            {cats[cat]}
                          </p>
                          <ul className="space-y-1.5">
                            {services.filter((s) => s.category === cat).map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to={localePath(`/service/${s.slug}`, locale) as string}
                                  className="text-sm text-foreground hover:text-primary transition-colors block"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={localePath(item.to, locale) as string}
                className="whitespace-nowrap rounded-md px-1.5 py-2 text-xs font-semibold text-foreground transition-colors hover:text-primary min-[1360px]:px-3 min-[1360px]:text-sm"
                activeProps={{
                  className:
                    "whitespace-nowrap rounded-md px-1.5 py-2 text-xs font-semibold text-primary min-[1360px]:px-3 min-[1360px]:text-sm",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
          </div>


          <div className="flex shrink-0 items-center gap-1.5 px-1.5 text-xs font-semibold whitespace-nowrap min-[1360px]:px-3 min-[1360px]:text-sm">
            <Link to={enHref as string} className={locale === "en" ? "text-primary" : "text-foreground hover:text-primary transition-colors"}>EN</Link>
            <span className="text-muted-foreground">/</span>
            <Link to={zhHref as string} className={locale === "zh-Hant" ? "text-primary" : "text-foreground hover:text-primary transition-colors"}>中文</Link>
          </div>

          <a
            href={site.phoneHref}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap pl-2.5 pr-5 text-xs font-semibold text-foreground transition-colors hover:text-primary min-[1360px]:pl-3 min-[1360px]:pr-6 min-[1360px]:text-sm"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span>{site.phone}</span>
          </a>
        </nav>

        <Link
          to={localePath("/contact-us", locale) as string}
          className="absolute inset-y-0 right-0 hidden w-[184px] items-center justify-center gap-2 bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-charcoal min-[1180px]:flex"
        >
          <Calendar className="h-4 w-4 shrink-0" />
          <span className="whitespace-nowrap">{t("cta.book", locale)}</span>
        </Link>
      </div>

      {open && typeof document !== "undefined" && createPortal(
        <div className="min-[1180px]:hidden fixed inset-0 z-[100] bg-background overflow-y-auto">
          <div className="container-x flex items-center justify-between h-[80px]">
            <Logo variant="dark" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="container-x pb-12 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={localePath(item.to, locale) as string}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-lg font-semibold text-foreground border-b border-border"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-8 flex flex-col gap-3">
              <Link
                to={localePath("/contact-us", locale) as string}
                onClick={() => setOpen(false)}
                className="w-full text-center rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                {t("cta.book", locale)}
              </Link>
              <a
                href={site.phoneHref}
                className="w-full text-center rounded-full border border-border px-5 py-3 font-semibold"
              >
                {t("cta.call", locale)} {site.phone}
              </a>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}
