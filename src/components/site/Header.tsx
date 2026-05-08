import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
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
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm" : "bg-background/60 backdrop-blur"
      )}
    >
      <div className="container-x flex items-center justify-between py-2 lg:py-3 min-h-[88px] lg:min-h-[104px]">
        <Link to="/" aria-label="U-Dental Clinic home">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
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
                  className="px-4 py-2 rounded-md text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  activeProps={{ className: "px-4 py-2 rounded-md text-sm font-semibold text-primary flex items-center gap-1" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {svcOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[760px]">
                    <div className="bg-card rounded-2xl shadow-elevated border border-border p-6 grid grid-cols-2 gap-x-8 gap-y-5">
                      {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map((cat) => (
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
                className="px-4 py-2 rounded-md text-sm font-semibold text-foreground hover:text-primary transition-colors"
                activeProps={{ className: "px-4 py-2 rounded-md text-sm font-semibold text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.phoneHref} className="text-sm font-semibold text-foreground hover:text-primary flex items-center gap-2">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
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
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">All Services</p>
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
              <a href={SITE.phoneHref} className="w-full text-center rounded-full border border-border px-5 py-3 font-semibold">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
