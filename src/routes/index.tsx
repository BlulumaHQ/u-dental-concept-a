import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Phone, Calendar, ShieldCheck, Languages, Stethoscope,
  Microscope, Cpu, Building2, Heart, MapPin, Clock, Mail,
  CheckCircle2, Users,
} from "lucide-react";
import { SERVICES, HIGH_VALUE_SLUGS, SITE, HERO_IMAGES, DOCTORS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modern Dental Care in Kitsilano Vancouver | U-Dental Clinic" },
      { name: "description", content: "U-Dental Clinic provides advanced dental care in Kitsilano Vancouver with English and Mandarin-speaking dentists, digital dentistry, implant technology, orthodontics, and comprehensive dental services." },
      { property: "og:title", content: "Modern Dental Care in Kitsilano Vancouver | U-Dental Clinic" },
      { property: "og:description", content: "Advanced dental care in English & Mandarin — implants, Invisalign, orthodontics, and more." },
      { property: "og:image", content: HERO_IMAGES[0] },
    ],
  }),
  component: HomePage,
});

const trustPoints = [
  { icon: MapPin, label: "Kitsilano Vancouver" },
  { icon: Languages, label: "English & Mandarin Care" },
  { icon: Cpu, label: "Advanced Digital Dentistry" },
  { icon: Stethoscope, label: "Experienced Dental Team" },
  { icon: Building2, label: "Exclusive Surgical Room" },
];

const whyPoints = [
  { icon: Heart, title: "Comfort-Focused Care", body: "A calm, modern environment built around the patient experience from check-in to follow-up." },
  { icon: Languages, title: "Bilingual Communication", body: "A team fluent in English and Mandarin so you can ask questions clearly and confidently." },
  { icon: Cpu, title: "Advanced Technology", body: "Digital scans, 3D-guided implant placement, and modern workflows that support precision." },
  { icon: Stethoscope, title: "Comprehensive Treatment", body: "From routine cleanings to complex surgical and implant cases — all under one roof." },
  { icon: ShieldCheck, title: "Medical-Class Asepsis", body: "An exclusive surgical room designed to deliver a high standard of clinical hygiene." },
  { icon: Microscope, title: "Microscopic Precision", body: "Advanced visualization tools support careful, detail-oriented dentistry." },
];

function HomePage() {
  const highValue = HIGH_VALUE_SLUGS.map((slug) => SERVICES.find((s) => s.slug === slug)!);

  return (
    <>
      {/* HERO — warm, dental, human */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-dental/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground/80 shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Now Welcoming New Patients · Kitsilano Vancouver
            </div>
            <h1 className="mt-6 font-extrabold text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02] text-charcoal">
              Modern Dental Care with a <span className="text-primary">Human Touch</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-relaxed">
              U-Dental Clinic provides advanced dental care in Kitsilano Vancouver with experienced dentists, English and Mandarin communication, and technology-supported treatment planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition">
                <Calendar className="h-5 w-5" /> Book an Appointment
              </Link>
              <a href="#team" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-7 py-4 font-semibold hover:border-primary hover:text-primary transition">
                <Users className="h-5 w-5" /> Meet Our Dentists
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 px-4 py-4 font-semibold text-foreground/70 hover:text-primary">
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-foreground/70">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {SITE.address}
              </span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src={HERO_IMAGES[0]}
                alt="U-Dental Clinic — modern dental care in Kitsilano Vancouver"
                className="rounded-[2rem] w-full object-cover aspect-[4/5] lg:aspect-[5/6] shadow-elevated"
              />
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elevated border border-border p-5 max-w-[260px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary">
                    <Languages className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">English & Mandarin</p>
                    <p className="text-xs text-muted-foreground">Bilingual care, every visit</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute -top-5 -right-5 bg-white rounded-2xl shadow-card border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-dental/15 grid place-items-center text-dental">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">3D Guided Implants</p>
                    <p className="text-xs text-muted-foreground">X-Guide™ navigation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-white">
        <div className="container-x py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {trustPoints.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary shrink-0">
                <t.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR DENTISTS */}
      <section id="team" className="section-y">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">Meet Our Dentists</p>
              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">A team of experienced bilingual dentists</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Seven trusted dentists, certified across Canada and Taiwan, bringing decades of combined experience in surgery, implants, orthodontics, cosmetic and family dentistry.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {DOCTORS.map((d) => (
              <Link
                key={d.slug}
                to="/doctor/$slug"
                params={{ slug: d.slug }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-elevated transition flex flex-col"
              >
                <div className="aspect-[4/5] bg-cream overflow-hidden">
                  <img src={d.photo} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary">{d.name}</h3>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5">{d.credentials}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {d.specialties.slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] font-semibold uppercase tracking-wide rounded-full bg-primary/8 text-primary px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">{d.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    View profile <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">Featured Treatments</p>
              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">High-value dental care, planned with precision</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highValue.map((s, i) => (
              <Link
                key={s.slug}
                to="/service/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl bg-white border border-border overflow-hidden hover:border-primary hover:shadow-elevated transition"
              >
                {s.image && (
                  <div className="aspect-[4/3] bg-soft overflow-hidden">
                    <img src={s.image} alt={s.name} className="w-full h-full object-contain p-6 group-hover:scale-105 transition duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-xs font-bold text-primary mb-2">0{i + 1}</div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
              <div key={w.title} className="rounded-2xl p-7 bg-card border border-border hover:shadow-card transition">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & EQUIPMENT */}
      <section className="section-y bg-charcoal text-charcoal-foreground">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://u-dental.ca/wp-content/uploads/2025/05/fig0.jpg" alt="Digital dentistry technology" className="rounded-3xl shadow-elevated w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-white text-foreground rounded-2xl shadow-elevated border border-border p-5 max-w-xs">
              <p className="text-xs font-bold text-primary uppercase tracking-wider">Surgical Room</p>
              <p className="mt-1 font-bold">Medical center-class asepsis</p>
            </div>
          </div>
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Technology &amp; Equipment</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Built for precision and patient comfort</h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              Our clinic invests in the same technology used by leading dental medical centers — from 3D cone beam CT imaging to real-time guided implant surgery.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/85">
              {[
                "3D Cone Beam CT (CBCT)",
                "X-Guide™ Real-time 3D Surgery",
                "Medit i500 Intra-oral Scanner",
                "Nobel Biocare OsseoSet 200",
                "Leica M320D Dental Microscope",
                "Sirona Diode LASER",
                "Invisalign® Orthodontics",
                "Bioclear™ Restorations",
                "GalvoSurge® Implant Care",
                "BOTOX® Clinical Treatment",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{t}</span>
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
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={HERO_IMAGES[3]} alt="U-Dental clinic interior" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-elevated" />
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">About U-Dental</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Comprehensive dental care, all in one place</h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              U-Dental Clinic is a team of professional dentists fluent in both English and Mandarin, with decades of dental experience. We offer advanced digital dentistry, implant technology, orthodontics, and an exclusive surgical room designed to provide a medical center-class experience in asepsis quality and patient care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about-us" className="inline-flex items-center gap-2 rounded-full bg-charcoal text-charcoal-foreground px-6 py-3 font-semibold hover:opacity-90">
                About the Clinic <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#team" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:border-primary hover:text-primary transition">
                Meet the Team
              </a>
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
                className="group rounded-2xl bg-white border border-border p-6 hover:border-primary hover:shadow-card transition flex gap-4 items-start"
              >
                {s.image ? (
                  <div className="h-14 w-14 rounded-xl bg-soft grid place-items-center shrink-0 overflow-hidden">
                    <img src={s.image} alt="" className="h-12 w-12 object-contain" />
                  </div>
                ) : (
                  <div className="h-14 w-14 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-base group-hover:text-primary">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.5_0.2_22)] text-primary-foreground p-10 lg:p-16 text-center shadow-elevated">
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
