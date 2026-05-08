import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";

type Slide = { image: string; eyebrow?: string; title: string; subtitle?: string };

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[88vh] min-h-[560px] max-h-[820px] overflow-hidden bg-charcoal">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/20" />
        </div>
      ))}

      <div className="relative z-10 container-x h-full flex items-center">
        <div className="max-w-2xl text-white">
          {slides[i].eyebrow && (
            <p className="text-primary font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
              {slides[i].eyebrow}
            </p>
          )}
          <h1 className="mt-4 font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
            {slides[i].title}
          </h1>
          {slides[i].subtitle && (
            <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-xl leading-relaxed">
              {slides[i].subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:bg-white hover:text-primary transition"
            >
              <Calendar className="h-5 w-5" /> Book an Appointment
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              View Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots */}
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
