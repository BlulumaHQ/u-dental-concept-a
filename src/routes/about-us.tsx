import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Languages, ShieldCheck, Cpu, Heart, Building2, Microscope } from "lucide-react";
import { HERO_IMAGES, DOCTORS } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

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
      <PageHero
        eyebrow="About"
        title="A modern dental clinic, designed around the patient."
        subtitle="U-Dental Clinic combines advanced digital dentistry, bilingual care, and a comfortable, technology-forward experience in Kitsilano Vancouver."
        image={HERO_IMAGES[3]}
      />

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

      <section id="team" className="section-y">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Our Team</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Meet the U-Dental Team</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Seven trusted dentists, certified across Canada and Taiwan, with decades of combined experience in surgery, implants, orthodontics, cosmetic and family dentistry.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
          <div className="mt-12 text-center">
            <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold shadow-glow">
              Book a visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
