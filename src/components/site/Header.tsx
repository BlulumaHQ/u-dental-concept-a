import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Phone, ChevronDown, Calendar } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/technology", label: "Technology" },
  { to: "/insights", label: "Insights" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact-us", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

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
          <Link to="/" aria-label="U-Dental Clinic home" className="flex shrink-0 items-center">
            <Logo variant="dark" />
          </Link>

          <div className="ml-auto flex items-center gap-3 self-center min-[1180px]:hidden">
            <div className="flex items-center gap-1.5 text-sm font-semibold">
              <button type="button" aria-current="true" className="text-primary">EN</button>
              <span className="text-muted-foreground">/</span>
              <button type="button" className="text-foreground hover:text-primary transition-colors" title="Coming soon">中文</button>
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

        <nav className="absolute inset-y-0 left-[330px] right-[184px] hidden items-center justify-end gap-0 overflow-hidden min-[1180px]:flex min-[1360px]:left-[360px]">
          {NAV.map((item) =>
            item.hasMenu ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setSvcOpen(true)}
                onMouseLeave={() => setSvcOpen(false)}
              >
                <Link
                  to={item.to}
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
                      {(
                        Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>
                      ).map((cat) => (
                        <div key={cat}>
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                            {SERVICE_CATEGORIES[cat]}
                          </p>
                          <ul className="space-y-1.5">
                            {SERVICES.filter((s) => s.category === cat).map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to="/service/$slug"
                                  params={{ slug: s.slug }}
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
                to={item.to}
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

          <div className="flex shrink-0 items-center gap-1.5 px-1.5 text-xs font-semibold whitespace-nowrap min-[1360px]:px-3 min-[1360px]:text-sm">
            <button type="button" aria-current="true" className="text-primary">
              EN
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors"
              title="Coming soon"
            >
              中文
            </button>
          </div>

          <a
            href={SITE.phoneHref}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap px-2.5 text-xs font-semibold text-foreground transition-colors hover:text-primary min-[1360px]:px-3 min-[1360px]:text-sm"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span>{SITE.phone}</span>
          </a>
        </nav>

        <Link
          to="/contact-us"
          className="absolute inset-y-0 right-0 hidden w-[184px] items-center justify-center gap-2 bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-charcoal min-[1180px]:flex"
        >
          <Calendar className="h-4 w-4 shrink-0" />
          <span className="whitespace-nowrap">Book Appointment</span>
        </Link>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background overflow-y-auto">
          <div className="container-x flex items-center justify-between h-[88px]">
            <Logo variant="dark" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="container-x pb-12 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-lg font-semibold text-foreground border-b border-border"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                All Services
              </p>
              <div className="grid grid-cols-1 gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/service/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="px-2 py-2 text-sm text-foreground hover:text-primary"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-8 flex flex-col gap-3">
              <Link
                to="/contact-us"
                onClick={() => setOpen(false)}
                className="w-full text-center rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                Book Appointment
              </Link>
              <a
                href={SITE.phoneHref}
                className="w-full text-center rounded-full border border-border px-5 py-3 font-semibold"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
