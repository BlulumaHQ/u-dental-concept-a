import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, Clock, Languages } from "lucide-react";

type Slide = { image: string; eyebrow?: string; title: string; subtitle?: string };

const HOURS = [
  { d: "Mon – Wed", t: "9:30am – 5:30pm" },
  { d: "Friday", t: "9:30am – 5:30pm" },
  { d: "Saturday", t: "9am – 5pm" },
];

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[88vh] min-h-[600px] max-h-[860px] overflow-hidden bg-charcoal">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-charcoal/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 container-x h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 w-full items-center">
          <div className="lg:col-span-8 text-white">
            {slides[i].eyebrow && (
              <p className="text-primary font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
                {slides[i].eyebrow}
              </p>
            )}
            <h1 className="mt-4 font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
              {slides[i].title}
            </h1>
            {slides[i].subtitle && (
              <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
                {slides[i].subtitle}
              </p>
            )}
            <div className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:bg-white hover:text-primary transition shadow-elevated"
              >
                <Calendar className="h-5 w-5" /> Book an Appointment
              </Link>
            </div>
          </div>

          {/* Office hours — premium glass panel */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 text-white shadow-elevated">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="h-4 w-4" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]">Office Hours</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {HOURS.map((h) => (
                  <li key={h.d} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="font-semibold">{h.d}</span>
                    <span className="text-white/80">{h.t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/85">
                <Languages className="h-3.5 w-3.5 text-primary" />
                <span>English &amp; Mandarin Care</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-10 bg-primary" : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
