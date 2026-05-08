import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Calendar, Sparkles } from "lucide-react";
import { SERVICES, SITE, HERO_IMAGES } from "@/lib/site";
import { ServiceCard } from "@/components/site/ServiceCard";

export const Route = createFileRoute("/service/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service | U-Dental Clinic" }] };
    return {
      meta: [
        { title: `${s.name} | U-Dental Clinic` },
        { name: "description", content: `${s.name} at U-Dental Clinic, Kitsilano Vancouver. ${s.short}` },
        { property: "og:title", content: `${s.name} | U-Dental Clinic` },
        { property: "og:description", content: s.short },
        ...(s.image ? [{ property: "og:image", content: s.image }] : []),
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="container-x section-y text-center">
      <h1 className="text-4xl font-extrabold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary font-semibold">Back to all services</Link>
    </div>
  ),
});

export function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-charcoal text-white">
        <img src={HERO_IMAGES[service.slug.length % HERO_IMAGES.length]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/40" />
        <div className="container-x relative py-20 lg:py-28">
          <Link to="/services" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1.5 mb-6">
            ← All services
          </Link>
          <p className="text-primary font-bold uppercase text-sm tracking-[0.25em]">U-Dental Clinic</p>
          <h1 className="mt-3 text-4xl lg:text-6xl font-extrabold leading-[1.05] max-w-4xl">{service.name}</h1>
          <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl">{service.short}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact-us" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-white hover:text-primary transition">
              <Calendar className="h-4 w-4" /> Book an Appointment
            </Link>
            <a href={SITE.phoneHref} className="rounded-full border border-white/30 px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-white/10">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold">About this treatment</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{service.intro}</p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold">Patient-focused benefits</h2>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {service.benefits.map((b: string) => (
                  <li key={b} className="flex gap-3 rounded-xl bg-cream border border-border p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold">When this may be needed</h2>
              <ul className="mt-6 space-y-3">
                {service.when.map((w: string) => (
                  <li key={w} className="flex gap-3 text-foreground/90">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1" /> {w}
                  </li>
                ))}
              </ul>
            </div>

            {service.tech && (
              <div className="rounded-2xl gradient-hero text-white p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" /> Technology &amp; Comfort
                </div>
                <p className="mt-3 text-lg leading-relaxed text-white/90">{service.tech}</p>
              </div>
            )}

            <p className="text-sm text-muted-foreground italic">
              Treatment recommendations depend on individual needs. Speak with the clinic to understand your options.
            </p>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-2xl bg-card border border-border shadow-elevated p-6">
                <h3 className="text-xl font-bold">Schedule a consultation</h3>
                <p className="mt-2 text-sm text-muted-foreground">English & Mandarin support. We'll help you understand your options.</p>
                <Link to="/contact-us" className="mt-5 w-full rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold inline-flex items-center justify-center gap-2 shadow-glow">
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Link>
                <a href={SITE.phoneHref} className="mt-2 w-full rounded-full border border-border px-5 py-3 font-semibold inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>
              <div className="rounded-2xl bg-cream border border-border p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Visit Us</p>
                <p className="text-sm font-semibold">{SITE.address}</p>
                <p className="mt-2 text-xs text-muted-foreground">Mon–Wed & Fri: 9:30am–5:30pm · Sat: 9am–5pm</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-cream">
          <div className="container-x">
            <h2 className="text-3xl lg:text-4xl font-extrabold">Related services</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {related.map((r) => (
                <ServiceCard key={r.slug} service={r} variant="horizontal" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl gradient-accent text-primary-foreground p-10 lg:p-16 text-center shadow-elevated">
            <h2 className="text-3xl lg:text-5xl font-extrabold max-w-3xl mx-auto">Ready to talk about {service.name.toLowerCase()}?</h2>
            <p className="mt-4 text-lg opacity-90">Book a visit to U-Dental Clinic in Kitsilano Vancouver.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact-us" className="rounded-full bg-white text-primary px-7 py-4 font-bold inline-flex items-center gap-2"><Calendar className="h-5 w-5" /> Book an Appointment</Link>
              <a href={SITE.phoneHref} className="rounded-full border-2 border-white/40 px-7 py-4 font-bold inline-flex items-center gap-2"><Phone className="h-5 w-5" /> {SITE.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
