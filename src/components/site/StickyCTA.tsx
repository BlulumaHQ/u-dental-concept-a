import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCTA() {
  return (
    <>
      {/* Desktop: right side floating */}
      <div className="hidden lg:flex fixed right-5 bottom-8 z-30 flex-col gap-2">
        <Link
          to="/contact-us"
          className="rounded-full gradient-accent text-primary-foreground px-5 py-3 font-semibold shadow-elevated flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Calendar className="h-4 w-4" /> Book Appointment
        </Link>
        <a
          href={SITE.phoneHref}
          className="rounded-full bg-charcoal text-charcoal-foreground px-5 py-2.5 font-medium text-sm shadow-card flex items-center gap-2 hover:opacity-90"
        >
          <Phone className="h-4 w-4" /> {SITE.phone}
        </a>
      </div>
      {/* Mobile: bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 gap-2 p-3 bg-background/95 backdrop-blur border-t border-border">
        <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-border py-3 font-semibold text-sm">
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link to="/contact-us" className="flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3 font-semibold text-sm shadow-glow">
          <Calendar className="h-4 w-4" /> Book
        </Link>
      </div>
      {/* Mobile spacer */}
      <div className="lg:hidden h-20" />
    </>
  );
}
