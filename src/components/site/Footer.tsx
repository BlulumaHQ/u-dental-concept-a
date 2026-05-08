import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { MapPin, Phone, Mail, Clock, ArrowRight, Calendar } from "lucide-react";
import { Logo } from "./Logo";

const FEATURED = [
  { slug: "dental-implants", name: "Dental Implants" },
  { slug: "all-on-4", name: "All-on-4" },
  { slug: "invisalign", name: "Invisalign" },
  { slug: "x-guide-real-time-3d-guidance-surgery", name: "X-Guide Implant Surgery" },
  { slug: "cosmetics-and-comprehensive-dentistry", name: "Cosmetic & Comprehensive Dentistry" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-charcoal-foreground pt-10 md:pt-20 pb-24 md:pb-8 mt-12">
      {/* MOBILE — compact */}
      <div className="container-x md:hidden">
        <Logo variant="light" className="h-9 mb-4" />
        <ul className="space-y-2 text-sm opacity-85">
          <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> {SITE.address}</li>
          <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></li>
          <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={SITE.emailHref} className="hover:text-primary">{SITE.email}</a></li>
        </ul>
        <Link
          to="/contact-us"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold"
        >
          <Calendar className="h-4 w-4" /> Book Appointment
        </Link>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs opacity-80">
          <Link to="/about-us" className="hover:text-primary">About</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/technology" className="hover:text-primary">Technology</Link>
          <Link to="/insights" className="hover:text-primary">Insights</Link>
          <Link to="/faq" className="hover:text-primary">FAQ</Link>
          <Link to="/contact-us" className="hover:text-primary">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-primary">Privacy</Link>
          <Link to="/term-of-service" className="hover:text-primary">Terms</Link>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-[11px] opacity-70 flex flex-col gap-1">
          <span>© {year} U-Dental Clinic. All rights reserved.</span>
          <span>Web Design by <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Bluluma</a></span>
        </div>
      </div>

      {/* DESKTOP / TABLET */}
      <div className="container-x hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
        {/* COL 1 — Clinic */}
        <div>
          <Logo variant="light" className="h-10 mb-4" />
          <p className="text-sm opacity-75 leading-relaxed">
            Premium digital dentistry in Kitsilano Vancouver. English &amp; Mandarin care designed around modern technology and patient comfort.
          </p>
          <ul className="mt-5 space-y-2 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <div>
                {SITE.hours.map((h) => (
                  <div key={h.d}>{h.d}: {h.t}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* COL 2 — Featured Treatments */}
        <div>
          <h4 className="font-bold mb-4">Featured Treatments</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {FEATURED.map((s) => (
              <li key={s.slug}>
                <Link to="/service/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {s.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link to="/services" className="inline-flex items-center gap-1 text-primary font-semibold">
                View All Services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        {/* COL 3 — Resources */}
        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about-us" className="hover:text-primary">About</Link></li>
            <li><Link to="/technology" className="hover:text-primary">Technology</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/insights" className="hover:text-primary">Insights</Link></li>
            <li><Link to="/contact-us" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/term-of-service" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>

        {/* COL 4 — Book */}
        <div>
          <h4 className="font-bold mb-4">Book Appointment</h4>
          <p className="text-sm opacity-80 leading-relaxed">
            Schedule your visit with our bilingual team in Kitsilano Vancouver.
          </p>
          <a href={SITE.phoneHref} className="mt-4 flex items-center gap-2 text-base font-bold text-primary hover:opacity-90">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a href={SITE.emailHref} className="mt-2 flex items-center gap-2 text-sm opacity-80 hover:text-primary">
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
          <Link
            to="/contact-us"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:opacity-90 transition"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
        </div>
      </div>
      <div className="container-x mt-14 pt-6 border-t border-white/10 text-xs opacity-70 hidden md:flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center text-center">
        <span>© {year} U-Dental Clinic. All rights reserved.</span>
        <span className="hidden sm:inline opacity-40">|</span>
        <span>Web Design by{" "}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Bluluma</a>
        </span>
      </div>
    </footer>
  );
}
