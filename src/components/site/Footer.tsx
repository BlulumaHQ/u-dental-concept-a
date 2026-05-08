import { Link } from "@tanstack/react-router";
import { SERVICES, SITE } from "@/lib/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-charcoal-foreground pt-20 pb-8 mt-12">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <Logo variant="light" className="h-10 mb-4" />
          <p className="text-sm opacity-75 leading-relaxed">
            Premium digital dentistry in Kitsilano Vancouver. English &amp; Mandarin care designed around modern technology and patient comfort.
          </p>
        </div>
        <div className="hidden lg:block" aria-hidden="true" />
        <div>
          <h4 className="font-bold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 hover:text-primary">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/technology" className="hover:text-primary">Technology</Link></li>
            <li><Link to="/contact-us" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/service/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <a href={SITE.emailHref} className="hover:text-primary">{SITE.email}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <div>
                {SITE.hours.map((h) => (
                  <div key={h.d}>{h.d}: {h.t}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-14 pt-6 border-t border-white/10 text-xs opacity-70 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center text-center">
        <span>© {year} U-Dental Clinic. All rights reserved.</span>
        <span className="hidden sm:inline opacity-40">|</span>
        <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
        <span className="hidden sm:inline opacity-40">|</span>
        <Link to="/term-of-service" className="hover:text-primary">Terms of Service</Link>
        <span className="hidden sm:inline opacity-40">|</span>
        <span>Web Design by{" "}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Bluluma</a>
        </span>
      </div>
    </footer>
  );
}
