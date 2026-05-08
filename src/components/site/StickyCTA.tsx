import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { detectLocale, getSite, localePath, t } from "@/lib/i18n";

export function StickyCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = detectLocale(pathname);
  const site = getSite(locale);
  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 gap-2 p-2.5 bg-background/95 backdrop-blur border-t border-border">
        <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-border py-2.5 font-semibold text-sm">
          <Phone className="h-4 w-4" /> {t("cta.callShort", locale)}
        </a>
        <Link to={localePath("/contact-us", locale) as string} className="flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-2.5 font-semibold text-sm">
          <Calendar className="h-4 w-4" /> {t("cta.bookShort", locale)}
        </Link>
      </div>
      <div className="lg:hidden h-16" />
    </>
  );
}
