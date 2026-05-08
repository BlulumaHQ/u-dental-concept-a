import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { DOCTORS, SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About U-Dental Clinic | Bilingual Dentists in Kitsilano Vancouver" },
      { name: "description", content: "Meet the U-Dental team — bilingual dentists, advanced digital dentistry, an exclusive surgical room, and a calm, technology-supported environment in Kitsilano Vancouver." },
      { property: "og:title", content: "About U-Dental Clinic" },
      { property: "og:description", content: "Bilingual dentists, decades of experience, modern digital dentistry in Kitsilano Vancouver." },
      { property: "og:image", content: "/about/about-banner.jpg" },
    ],
  }),
  component: AboutPage,
});

const BRANDS = [
  { src: "/brands/all-on-4.png", alt: "All-on-4®" },
  { src: "/brands/invisalign.png", alt: "Invisalign®" },
  { src: "/brands/x-guide.png", alt: "X-Guide" },
  { src: "/brands/bioclear.png", alt: "Bioclear®" },
  { src: "/brands/galvosurge.png", alt: "GalvoSurge®" },
  { src: "/brands/botox.png", alt: "Botox® Cosmetic" },
  { src: "/brands/timan.png", alt: "Timan Dental" },
];

const ENVIRONMENT = [
  { src: "/equipment/clinic-1.jpg", alt: "U-Dental clinic interior" },
  { src: "/equipment/clinic-3.jpg", alt: "U-Dental treatment room" },
  { src: "/equipment/clinic-5.jpg", alt: "U-Dental reception area" },
  { src: "/equipment/clinic-7.jpg", alt: "U-Dental sterilization workflow" },
];

const TECH_PHOTOS = [
  { src: "/equipment/clinic-9.jpg", alt: "Surgical suite" },
  { src: "/equipment/clinic-11.jpg", alt: "Digital implant planning" },
  { src: "/equipment/clinic-13.jpg", alt: "Intra-oral scanning" },
  { src: "/equipment/clinic-15.jpg", alt: "Dental microscope" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About U-Dental"
        title="About U-Dental"
        subtitle="Advanced dental care in Kitsilano Vancouver with experienced English and Mandarin-speaking dentists."
        image="/about/about-banner.jpg"
      />

      {/* Section 2 — Philosophy / Story with artwork */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-cream -z-10" />
              <img
                src="/about/artwork-1.png"
                alt="Original U-Dental clinic artwork"
                className="rounded-2xl w-full object-contain shadow-elevated bg-white"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">Our Vision</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Designed around care, precision, and comfort.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-foreground/80 leading-relaxed">
              <p>
                The team here at U-Dental brings together members from well-established local clinics and specialists and professors from Taiwan. Our vision is captured in our name — the pronunciation of <em>“U”</em> is similar to <em>“Excellence”</em> in Mandarin.
              </p>
              <p>
                Our vision is to be the guardian of every healthy and bright smile in Metro Vancouver. We hold this core value in mind as we provide considered preventive care and high-quality treatment for our patients — with English and Mandarin spoken throughout the clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Modern Dental Environment */}
      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">A Modern Environment</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">A calm, comfortable, medical-class clinic</h2>
            <p className="mt-5 text-lg text-foreground/75">
              Our clinic was designed for clarity and comfort — quiet treatment rooms, a dedicated surgical suite, and modern infection-control workflows that meet a medical center-class standard of asepsis.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ENVIRONMENT.map((p) => (
              <div key={p.src} className="aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-card">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Equipment & Technology */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">Equipment & Technology</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Cutting-edge equipment, end-to-end digital workflow.
            </h2>
            <div className="mt-6 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                U-Dental is equipped with 3D Cone Beam CT (CBCT), the Medit i500 intra-oral scanner, and the X-Guide real-time surgical navigator — supporting a fully digital implant workflow, immediate implants with provisional crowns, All-on-4 full-mouth reconstruction, and Invisalign® orthodontic treatment.
              </p>
              <p>
                Our exclusive surgical room is equipped with the German DR.MACH surgical light, Sirona Diode LASER, Versah crestal sinus lift drill, COLTENE Perfect TSC II electrosurgery system, the Nobel Biocare OsseoSet 200 implant system, and A-dec / W&amp;H electronic motor handpieces.
              </p>
              <p>
                For restorative and microscopic dentistry we use the Leica M320D dental microscope, with Bioclear® matrix systems and GalvoSurge® implant surface care to support precise, predictable outcomes.
              </p>
            </div>
            <Link to="/technology" className="mt-8 inline-flex items-center gap-2 text-primary font-bold">
              See full technology list <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {TECH_PHOTOS.map((p) => (
              <div key={p.src} className="aspect-square overflow-hidden rounded-2xl shadow-card">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Brand Logo Grid */}
      <section className="section-y bg-soft">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">Trusted Systems</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Advanced Dental Technology &amp; Trusted Systems</h2>
            <p className="mt-5 text-foreground/75">
              U-Dental treatments are supported by clinically established technologies and systems used in modern digital dentistry.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {BRANDS.map((b) => (
              <div key={b.alt} className="bg-white rounded-2xl border border-border h-32 grid place-items-center p-6 hover:shadow-card transition">
                <img src={b.src} alt={b.alt} className="max-h-16 max-w-[80%] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Doctors */}
      <section id="team" className="section-y">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em]">Our Team</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">Meet our dentists</h2>
            <p className="mt-5 text-lg text-foreground/75">
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

          {/* Support team — group photo */}
          <div className="mt-16 rounded-3xl overflow-hidden bg-charcoal text-white shadow-elevated grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Behind Every Smile</p>
              <h3 className="mt-3 text-3xl lg:text-4xl font-extrabold leading-tight">Our clinical &amp; support team</h3>
              <p className="mt-5 text-white/80 leading-relaxed">
                Beyond our seven dentists, U-Dental is supported by a dedicated team of hygienists, dental assistants and front-desk coordinators — bilingual in English and Mandarin, and committed to making every visit comfortable, organized and personal.
              </p>
            </div>
            <div className="lg:col-span-3 min-h-[260px]">
              <img src="/about/team-wide.jpg" alt="The U-Dental clinical and support team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="section-y bg-charcoal text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold">Ready when you are.</h2>
          <p className="mt-5 text-lg text-white/80">
            Whether you're booking your first visit or planning a complex treatment, our team is here to help — in English or Mandarin.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold shadow-glow">
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold hover:bg-white/10">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
