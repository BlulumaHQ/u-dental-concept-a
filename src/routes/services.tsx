import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES, HERO_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services in Kitsilano Vancouver | U-Dental Clinic" },
      { name: "description", content: "Explore the full range of dental services at U-Dental Clinic — implants, Invisalign, orthodontics, oral surgery, cosmetic dentistry, and more, in English and Mandarin." },
      { property: "og:title", content: "Dental Services | U-Dental Clinic" },
      { property: "og:description", content: "Comprehensive dental care including implants, Invisalign, orthodontics, oral surgery and more." },
      { property: "og:image", content: HERO_IMAGES[1] },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const cats = Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>;
  return (
    <>
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGES[1]})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-charcoal/60" />
        <div className="container-x relative section-y">
          <p className="text-primary font-bold uppercase text-sm tracking-wider">Services</p>
          <h1 className="mt-3 text-5xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl">Complete dental care, in one premium clinic.</h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl">
            From routine cleanings to advanced implant and orthodontic treatments — explore the services available at U-Dental Clinic.
          </p>
        </div>
      </section>

      {cats.map((cat, idx) => (
        <section key={cat} className={idx % 2 ? "section-y bg-cream" : "section-y"}>
          <div className="container-x">
            <div className="flex items-baseline justify-between mb-10">
              <div>
                <p className="text-primary font-bold text-sm uppercase tracking-wider">{SERVICE_CATEGORIES[cat]}</p>
                <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold">{SERVICE_CATEGORIES[cat]}</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.filter((s) => s.category === cat).map((s) => (
                <Link
                  key={s.slug}
                  to="/service/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl bg-card border border-border p-7 hover:border-primary hover:shadow-elevated transition"
                >
                  <h3 className="text-xl font-bold group-hover:text-primary">{s.name}</h3>
                  <p className="mt-3 text-muted-foreground text-sm">{s.short}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
