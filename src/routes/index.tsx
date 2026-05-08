import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Phone, Calendar, ShieldCheck, Languages, Stethoscope,
  Microscope, Cpu, Building2, Heart, MapPin, Clock, Mail, CheckCircle2,
} from "lucide-react";
import { SERVICES, SITE, HERO_IMAGES, DOCTORS, FEATURED_TREATMENTS } from "@/lib/site";
import { FAQS } from "@/lib/faqs";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServiceCard } from "@/components/site/ServiceCard";
import { PageLoader } from "@/components/site/PageLoader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const SLIDES = [
  {
    image: HERO_IMAGES[0],
    eyebrow: "U-Dental Clinic · Kitsilano Vancouver",
    title: "Modern Dental Care with a Human Touch",
    subtitle: "Advanced dental care in Kitsilano Vancouver — experienced bilingual dentists, English and Mandarin communication, and technology-supported treatment planning.",
  },
  {
    image: "/equipment/clinic-1.jpg",
    eyebrow: "Inside Our Clinic",
    title: "A Premium, Comfort-First Environment",
    subtitle: "Modern treatment rooms and an exclusive surgical suite — designed around hygiene, calm, and clinical precision.",
  },
  {
    image: HERO_IMAGES[1],
    eyebrow: "Digital Dentistry",
    title: "Precision Implant & Surgical Care",
    subtitle: "3D-guided implant planning, an exclusive surgical room, and a team that has performed thousands of procedures.",
  },
  {
    image: HERO_IMAGES[3],
    eyebrow: "Comprehensive Treatment",
    title: "Every Service, Under One Roof",
    subtitle: "From cleanings and Invisalign to All-on-4 and microscopic restorations — your full dental care, in one premium clinic.",
  },
];

function HomePage() {
  return (
    <>
      <PageLoader />
      <HeroSlider slides={SLIDES} />

      {/* TRUST BAR */}
      <section className="border-b border-border bg-white">
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

      {/* FEATURED TREATMENTS — photo cards */}
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
            {FEATURED_TREATMENTS.map((t) => (
              <Link
                key={t.slug}
                to="/service/$slug"
                params={{ slug: t.slug }}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition aspect-[4/5]"
              >
                <img src={t.image} alt={t.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-extrabold leading-tight">{t.title}</h3>
                  <p className="mt-2 text-sm text-white/85">{t.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary-foreground bg-primary px-3 py-1.5 rounded-full">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE U-DENTAL CLINIC */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Inside U-Dental Clinic</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">A modern dental environment</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Designed for comfort, precision, and care — featuring an exclusive surgical suite, advanced digital workflow, and treatment rooms built around the patient experience.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden shadow-elevated min-h-[300px] lg:min-h-[520px]">
              <img src="/interior/operatory.jpg" alt="U-Dental treatment operatory" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img src="/interior/lounge.jpg" alt="U-Dental patient lounge" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img src="/interior/details.jpg" alt="Clinic interior details" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              "Digital Dentistry Workflow",
              "Exclusive Surgical Room",
              "Advanced Implant Technology",
              "Comfort-Focused Environment",
              "English & Mandarin Care",
            ].map((f) => (
              <div key={f} className="rounded-xl bg-card border border-border px-4 py-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-semibold">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR DENTISTS */}
      <section id="team" className="section-y bg-cream">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">Meet Our Dentists</p>
              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">A team of experienced bilingual dentists</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Seven trusted dentists, certified across Canada and Taiwan, bringing decades of combined experience in surgery, implants, orthodontics, cosmetic and family dentistry.
              </p>
            </div>
            <Link to="/about-us" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              About the clinic <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Mobile: horizontal scroll */}
          <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {DOCTORS.map((d) => (
              <Link
                key={d.slug}
                to="/doctor/$slug"
                params={{ slug: d.slug }}
                className="group snap-start shrink-0 w-[78%] rounded-2xl bg-card border border-border overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/5] bg-cream overflow-hidden">
                  <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-bold leading-tight">{d.name}</h3>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5">{d.credentials}</p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{d.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    View profile <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* Tablet+ : grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                      <span key={s} className="text-[10px] font-semibold uppercase tracking-wide rounded-full bg-primary/10 text-primary px-2 py-0.5">
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

      {/* TECHNOLOGY */}
      <section className="section-y bg-charcoal text-charcoal-foreground">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/equipment/tech-cbct.jpg" alt="3D Cone Beam CT imaging at U-Dental" className="rounded-3xl shadow-elevated w-full object-cover aspect-[4/3]" />
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
              <ServiceCard key={s.slug} service={s} variant="horizontal" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Patient FAQ</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold">Answers to common questions</h2>
          </div>
          <Accordion type="single" collapsible defaultValue="home-faq-0" className="border-t border-border">
            {FAQS.slice(0, 3).map((f, i) => (
              <AccordionItem key={i} value={`home-faq-${i}`}>
                <AccordionTrigger className="text-left text-base lg:text-lg font-semibold py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl bg-charcoal text-charcoal-foreground p-10 lg:p-16 text-center shadow-elevated">
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
              Ready to schedule your visit?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Experience modern dental care in Kitsilano Vancouver — in English or Mandarin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact-us" className="rounded-full bg-primary text-primary-foreground px-7 py-4 font-bold inline-flex items-center gap-2 hover:bg-white hover:text-primary transition">
                <Calendar className="h-5 w-5" /> Book an Appointment
              </Link>
              <a href={SITE.phoneHref} className="rounded-full border-2 border-white/30 px-7 py-4 font-bold inline-flex items-center gap-2 hover:bg-white/10 transition">
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
