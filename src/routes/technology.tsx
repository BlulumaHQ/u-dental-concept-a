import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Cpu, Building2, Microscope, Zap, ArrowRight } from "lucide-react";
import { HERO_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Dental Technology & Facility | U-Dental Clinic" },
      { name: "description", content: "Digital dentistry, X-guide real-time 3D guidance surgery, and an exclusive surgical room with medical center-class asepsis at U-Dental Clinic." },
      { property: "og:title", content: "Technology & Facility | U-Dental Clinic" },
      { property: "og:description", content: "Modern digital dentistry, 3D-guided surgery, and an exclusive surgical room in Kitsilano Vancouver." },
      { property: "og:image", content: "https://u-dental.ca/wp-content/uploads/2025/05/fig0.jpg" },
    ],
  }),
  component: TechPage,
});

const stack = [
  { icon: Cpu, title: "Digital Dentistry", body: "Digital scanning and treatment planning workflows that support precision and clear communication." },
  { icon: Zap, title: "X-guide 3D Guidance", body: "Real-time 3D navigation during dental implant placement, helping support accuracy of positioning." },
  { icon: Building2, title: "Exclusive Surgical Room", body: "A dedicated surgical environment designed to deliver medical center-class asepsis quality." },
  { icon: Microscope, title: "Microscopic Dentistry", body: "Advanced visualization tools that support detail-oriented restorative and endodontic care." },
];

function TechPage() {
  return (
    <>
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(https://u-dental.ca/wp-content/uploads/2025/05/fig0.jpg)` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-charcoal/60" />
        <div className="container-x relative section-y">
          <p className="text-primary font-bold uppercase text-sm tracking-wider">Technology &amp; Facility</p>
          <h1 className="mt-3 text-5xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl">Digital dentistry, designed for precision.</h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl">
            Modern technology and a dedicated surgical environment supporting careful, comfortable treatment.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-5">
          {stack.map((s) => (
            <div key={s.title} className="rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="h-12 w-12 rounded-xl gradient-accent text-primary-foreground grid place-items-center mb-5">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={HERO_IMAGES[4]} alt="Surgical room" className="rounded-3xl shadow-elevated w-full aspect-[4/3] object-cover" />
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">A Higher Standard</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Medical center-class asepsis quality</h2>
            <ul className="mt-8 space-y-4">
              {[
                "Dedicated surgical room separated from general treatment areas",
                "Modern sterilization and infection-control workflows",
                "Designed to support a calm, controlled surgical experience",
                "Advanced imaging and digital planning integrated into every case",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-foreground/90">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/contact-us" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
