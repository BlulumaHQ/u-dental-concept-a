import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Phone, Calendar, Sparkles, ShieldCheck, Languages, Stethoscope,
  Microscope, Cpu, Building2, Heart, MessageCircle, MapPin, Clock, Mail,
  CheckCircle2, Zap, AlertCircle,
} from "lucide-react";
import { SERVICES, HIGH_VALUE_SLUGS, SITE, HERO_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Digital Dentistry in Kitsilano Vancouver | U-Dental Clinic" },
      { name: "description", content: "U-Dental Clinic provides advanced dental care in Kitsilano Vancouver with English and Mandarin-speaking dentists, digital dentistry, implant technology, orthodontics, and comprehensive dental services." },
      { property: "og:title", content: "Premium Digital Dentistry in Kitsilano Vancouver | U-Dental Clinic" },
      { property: "og:description", content: "Advanced dental care in English & Mandarin — implants, Invisalign, orthodontics, and more." },
      { property: "og:image", content: HERO_IMAGES[0] },
    ],
  }),
  component: HomePage,
});

const trustPoints = [
  { icon: Languages, label: "English & Mandarin Care" },
  { icon: Cpu, label: "Digital Dentistry" },
  { icon: Building2, label: "Exclusive Surgical Room" },
  { icon: MapPin, label: "Kitsilano Vancouver" },
  { icon: ShieldCheck, label: "Decades of Experience" },
];

const whyPoints = [
  { icon: Cpu, title: "Advanced Technology", body: "Digital scans, 3D-guided implant placement, and modern workflows designed to support precision." },
  { icon: Heart, title: "Comfort-Focused Care", body: "A calm, modern environment built around the patient experience from check-in to follow-up." },
  { icon: Languages, title: "Bilingual Communication", body: "A team fluent in both English and Mandarin so you can ask questions clearly and confidently." },
  { icon: Stethoscope, title: "Comprehensive Treatment", body: "From routine cleanings to complex surgical and implant cases — all under one roof." },
  { icon: ShieldCheck, title: "Medical Center-Class Asepsis", body: "An exclusive surgical room designed to deliver a high standard of clinical hygiene." },
  { icon: Microscope, title: "Microscopic Precision", body: "Advanced visualization tools support careful, detail-oriented dentistry." },
];

const aiActions = [
  { icon: Calendar, label: "Book an Appointment", to: "/contact-us" },
  { icon: Sparkles, label: "Ask About Implants", to: "/service/dental-implants" },
  { icon: Zap, label: "Ask About Invisalign", to: "/service/invisalign" },
  { icon: AlertCircle, label: "Emergency Dental Help", to: "/service/emergency" },
  { icon: Languages, label: "Mandarin-Speaking Support", to: "/contact-us" },
];

function HomePage() {
  const highValue = HIGH_VALUE_SLUGS.map((slug) => SERVICES.find((s) => s.slug === slug)!);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES[1]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/40" />
        <div className="container-x relative section-y grid lg:grid-cols-12 gap-10 items-center min-h-[88vh]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> KITSILANO · VANCOUVER · 中 / EN
            </div>
            <h1 className="mt-6 font-extrabold text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
              Premium Digital Dentistry in <span className="text-gradient">Kitsilano Vancouver</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
              Advanced dental care in English and Mandarin — combining modern technology, experienced dentists, and a comfortable patient experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold shadow-glow hover:scale-[1.02] transition">
                <Calendar className="h-5 w-5" /> Book an Appointment
              </Link>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-7 py-4 font-semibold hover:bg-white/20 transition">
                <Phone className="h-5 w-5" /> Call {SITE.phone}
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 px-4 py-4 font-semibold text-white/90 hover:text-white">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "EN / 中", v: "Bilingual Care" },
                { k: "3D", v: "Guided Surgery" },
                { k: "Decades", v: "of Experience" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-extrabold text-primary">{s.k}</div>
                  <div className="text-xs text-white/70 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-6 gradient-accent opacity-30 blur-3xl rounded-full" />
              <img src={HERO_IMAGES[2]} alt="Modern dental clinic" className="relative rounded-3xl shadow-elevated w-full object-cover aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-cream">
        <div className="container-x py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {trustPoints.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY U-DENTAL */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Why U-Dental</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">A modern dental experience, designed around you</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              U-Dental Clinic combines advanced digital dentistry with bilingual, comfort-focused care — so every visit feels considered, clear, and calm.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((w) => (
              <div key={w.title} className="rounded-2xl p-7 bg-card border border-border shadow-card hover:shadow-elevated transition group">
                <div className="h-12 w-12 rounded-xl gradient-accent text-primary-foreground grid place-items-center mb-5 group-hover:scale-110 transition">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGH-VALUE TREATMENTS */}
      <section className="section-y bg-charcoal text-charcoal-foreground relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">Featured Treatments</p>
              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">High-value dental care, planned with precision</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highValue.map((s, i) => (
              <Link
                key={s.slug}
                to="/service/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:bg-white/10 transition relative overflow-hidden"
              >
                <div className="text-xs font-bold text-primary mb-3">0{i + 1}</div>
                <h3 className="text-2xl font-bold leading-tight">{s.name}</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{s.short}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI / MODERN PATIENT SUPPORT */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="h-3.5 w-3.5" /> Modern Patient Support
            </div>
            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">
              Smarter, simpler patient communication
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Have questions about implants, Invisalign, emergency dental care, or your first visit? U-Dental Clinic is designed to make patient communication easier — with clear service information, simple booking options, and support for both English and Mandarin-speaking patients.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-card border border-border shadow-elevated p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full gradient-accent grid place-items-center text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">U-Dental Patient Support</p>
                  <p className="text-xs text-muted-foreground">Need help choosing a treatment? Pick a quick action below.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {aiActions.map((a) => (
                  <Link
                    key={a.label}
                    to={a.to}
                    className="flex items-center gap-3 rounded-xl border border-border bg-cream hover:border-primary hover:bg-primary/5 transition px-4 py-3"
                  >
                    <a.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-semibold text-sm">{a.label}</span>
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Designed for easier booking, clearer information, and faster patient communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL SERVICES GRID */}
      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Complete Dental Care</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">All the services your smile may need</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              From routine preventive visits to advanced surgical and cosmetic treatment, find the care that fits your needs.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/service/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl bg-card border border-border p-6 hover:border-primary hover:shadow-card transition"
              >
                <h3 className="font-bold text-lg group-hover:text-primary transition">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  Read more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://u-dental.ca/wp-content/uploads/2025/05/fig0.jpg" alt="Digital dentistry technology" className="rounded-3xl shadow-elevated w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 hidden md:flex bg-card rounded-2xl shadow-elevated border border-border p-5 max-w-xs">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Surgical Room</p>
                <p className="mt-1 font-bold">Medical center-class asepsis quality</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Technology &amp; Facility</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Built for precision and patient comfort</h2>
            <ul className="mt-8 space-y-4">
              {[
                "Digital dentistry workflows for accurate treatment planning",
                "Advanced dental implant technology",
                "Modern orthodontic technology",
                "Exclusive surgical room with high-standard asepsis",
                "X-guide real-time 3D guidance during implant surgery",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/technology" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
              Explore our technology <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y bg-charcoal text-charcoal-foreground">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">About U-Dental</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">A team of experienced bilingual dentists</h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              U-Dental Clinic is a team of professional dentists fluent in both English and Mandarin, with decades of dental experience. We offer advanced digital dentistry, implant technology, orthodontics, and an exclusive surgical room designed to provide a medical center-class experience in asepsis quality and patient care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about-us" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold">
                Meet the U-Dental Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <img src={HERO_IMAGES[3]} alt="U-Dental clinic interior" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-elevated" />
        </div>
      </section>

      {/* MID CTA */}
      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl gradient-accent text-primary-foreground p-10 lg:p-16 text-center shadow-elevated">
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
              Ready to schedule your visit?
            </h2>
            <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
              Experience modern dental care in Kitsilano Vancouver — in English or Mandarin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact-us" className="rounded-full bg-white text-primary px-7 py-4 font-bold shadow-card hover:scale-[1.02] transition inline-flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Book an Appointment
              </Link>
              <a href={SITE.phoneHref} className="rounded-full border-2 border-white/40 px-7 py-4 font-bold inline-flex items-center gap-2 hover:bg-white/10 transition">
                <Phone className="h-5 w-5" /> Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section className="section-y bg-cream" id="contact">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Visit Us</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">In the heart of Kitsilano</h2>
            <div className="mt-8 space-y-5 text-lg">
              <div className="flex gap-4"><MapPin className="h-6 w-6 text-primary shrink-0" /><span>{SITE.address}</span></div>
              <div className="flex gap-4"><Phone className="h-6 w-6 text-primary shrink-0" /><a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></div>
              <div className="flex gap-4"><Mail className="h-6 w-6 text-primary shrink-0" /><a href={SITE.emailHref} className="hover:text-primary">{SITE.email}</a></div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0" />
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-base">
                  {SITE.hours.map((h) => (
                    <div key={h.d} className="contents"><span className="font-semibold">{h.d}</span><span className="text-muted-foreground">{h.t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elevated bg-card border border-border min-h-[400px]">
            <iframe
              title="U-Dental Clinic Map"
              src="https://www.google.com/maps?q=2933+West+Broadway+Vancouver&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
