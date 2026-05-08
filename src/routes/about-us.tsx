import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Languages, ShieldCheck, Cpu, Heart, Building2, Microscope } from "lucide-react";
import { HERO_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About U-Dental Clinic | Bilingual Dentists in Kitsilano Vancouver" },
      { name: "description", content: "Meet the U-Dental team — professional dentists fluent in English and Mandarin, providing advanced digital dentistry in Kitsilano Vancouver." },
      { property: "og:title", content: "About U-Dental Clinic" },
      { property: "og:description", content: "Bilingual dentists, decades of experience, modern digital dentistry in Kitsilano Vancouver." },
      { property: "og:image", content: HERO_IMAGES[3] },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Languages, title: "Bilingual Care", body: "English & Mandarin-speaking team for clear, comfortable communication." },
  { icon: Cpu, title: "Digital Dentistry", body: "Modern scanning, planning, and 3D-guided treatment workflows." },
  { icon: Building2, title: "Exclusive Surgical Room", body: "A dedicated environment designed for high-standard asepsis." },
  { icon: Heart, title: "Patient Comfort", body: "A calm, considered patient experience from first call to follow-up." },
  { icon: ShieldCheck, title: "Decades of Experience", body: "An experienced team committed to thoughtful, modern care." },
  { icon: Microscope, title: "Precision Approach", body: "Advanced visualization tools support detail-oriented dentistry." },
];

function AboutPage() {
  return (
    <>
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGES[3]})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-charcoal/60" />
        <div className="container-x relative section-y">
          <p className="text-primary font-bold uppercase text-sm tracking-wider">About</p>
          <h1 className="mt-3 text-5xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl">
            A modern dental clinic, designed around the patient.
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl">
            U-Dental Clinic combines advanced digital dentistry, bilingual care, and a comfortable, technology-forward experience in Kitsilano Vancouver.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={HERO_IMAGES[2]} alt="U-Dental clinic" className="rounded-3xl shadow-elevated aspect-[4/3] object-cover w-full" />
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Our Story</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Experienced bilingual dentists in Kitsilano</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                U-Dental Clinic is a team of professional dentists fluent in both English and Mandarin, with decades of dental experience.
              </p>
              <p>
                We offer the highest quality facilities in digital dentistry, dental implant technology, and orthodontics — and our exclusive surgical room is designed to provide a medical center-class experience in asepsis quality and patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">What we stand for</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Care designed around clarity, comfort, and precision</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-7 shadow-card">
                <div className="h-12 w-12 rounded-xl gradient-accent text-primary-foreground grid place-items-center mb-5">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="u-dental-team" className="section-y">
        <div className="container-x text-center max-w-3xl mx-auto">
          <p className="text-primary font-bold text-sm uppercase tracking-wider">Our Team</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Meet the U-Dental Team</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A team of professional dentists fluent in English and Mandarin, supported by experienced clinical and front-desk staff dedicated to making your visit comfortable.
          </p>
          <Link to="/contact-us" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold shadow-glow">
            Book a visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
