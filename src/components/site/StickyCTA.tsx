import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCTA() {
  return (
    <>
      {/* Desktop: slim vertical right-edge tab — upper area, aligned with chatbot margin */}
      <Link
        to="/contact-us"
        aria-label="Book Appointment"
        className="hidden lg:flex fixed right-6 top-32 z-30 items-center gap-2 bg-primary text-primary-foreground px-3 py-5 rounded-xl shadow-elevated hover:bg-charcoal transition-colors"
        style={{ writingMode: "vertical-rl" as const }}
      >
        <Calendar className="h-4 w-4 rotate-90" />
        <span className="text-xs font-bold uppercase tracking-widest">Book Appointment</span>
      </Link>

      {/* Mobile: compact bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 gap-2 p-2.5 bg-background/95 backdrop-blur border-t border-border">
        <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-border py-2.5 font-semibold text-sm">
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link to="/contact-us" className="flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-2.5 font-semibold text-sm">
          <Calendar className="h-4 w-4" /> Book
        </Link>
      </div>
      <div className="lg:hidden h-16" />
    </>
  );
}
