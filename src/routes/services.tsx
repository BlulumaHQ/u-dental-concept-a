import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, SERVICE_CATEGORIES, HERO_IMAGES } from "@/lib/site";
import { ServiceCard } from "@/components/site/ServiceCard";
import { PageHero } from "@/components/site/PageHero";

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
      <PageHero
        eyebrow="Services"
        title="Complete dental care, in one premium clinic."
        subtitle="From routine cleanings to advanced implant and orthodontic treatments — explore the services available at U-Dental Clinic."
        image={HERO_IMAGES[1]}
      />

      {cats.map((cat, idx) => (
        <section key={cat} className={idx % 2 ? "section-y bg-cream" : "section-y"}>
          <div className="container-x">
            <div className="mb-10">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">Category</p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold">{SERVICE_CATEGORIES[cat]}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.filter((s) => s.category === cat).map((s) => (
                <ServiceCard key={s.slug} service={s} variant="horizontal" />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
