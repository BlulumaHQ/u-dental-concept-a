import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Cpu, Building2, Microscope, Zap, ArrowRight, ScanLine, Activity } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Dental Technology & Equipment | U-Dental Clinic" },
      { name: "description", content: "3D Cone Beam CT, X-Guide™ real-time guided implant surgery, Medit i500 scanner, Leica microscope, and an exclusive surgical room at U-Dental Clinic." },
      { property: "og:title", content: "Technology & Equipment | U-Dental Clinic" },
      { property: "og:description", content: "Modern digital dentistry, 3D-guided surgery, and an exclusive surgical room in Kitsilano Vancouver." },
      { property: "og:image", content: "/equipment/clinic-4.jpg" },
    ],
  }),
  component: TechPage,
});

const stack = [
  { icon: ScanLine, title: "3D Cone Beam CT (CBCT)", body: "High-resolution 3D imaging that supports accurate diagnosis and digital implant planning." },
  { icon: Zap, title: "X-Guide™ Real-time 3D Surgery", body: "Real-time 3D navigation during implant placement for greater positional accuracy." },
  { icon: Cpu, title: "Medit i500 Intra-oral Scanner", body: "Comfortable digital impressions for crowns, Invisalign®, and full digital workflows." },
  { icon: Building2, title: "Exclusive Surgical Room", body: "A dedicated surgical environment designed for medical center-class asepsis quality." },
  { icon: Microscope, title: "Leica M320D Dental Microscope", body: "Advanced visualization for restorative, cosmetic and root canal treatment in fine detail." },
  { icon: Activity, title: "Sirona Diode LASER", body: "Precision soft-tissue laser used in modern periodontal and surgical procedures." },
];

const equipment = [
  "3D Cone Beam Computed Tomography (CBCT)",
  "Medit i500 intra-oral scanner",
  "X-Guide™ real-time 3D surgical navigator",
  "Full digital implant workflow",
  "Immediate implants with provisional crowns",
  "All-on-4 full mouth reconstruction",
  "Invisalign® orthodontic treatment",
  "German DR.MACH surgical light",
  "Sirona Diode LASER",
  "Versah crestal sinus lift drill",
  "COLTENE Perfect TSC II electrosurgery system",
  "Nobel Biocare OsseoSet 200 dental implant system",
  "A-dec / W&H electronic motor handpieces",
  "GalvoSurge® implant surface care",
  "Bioclear™ matrix restorations",
  "Leica M320D dental microscope",
  "BOTOX® clinical treatment",
];

export function TechPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology & Equipment"
        title="Digital dentistry, designed for precision."
        subtitle="U-Dental invests in the same technology used by leading dental medical centers — from 3D imaging to real-time guided implant surgery and microscopic dentistry."
        image="/equipment/clinic-4.jpg"
      />

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((s) => (
            <div key={s.title} className="rounded-2xl bg-card border border-border p-7 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">Our Equipment</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">A complete digital and surgical suite</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              From digital scanning to surgical lighting, every system is selected to support precise, comfortable, and predictable treatment.
            </p>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {equipment.map((e) => (
              <li key={e} className="flex gap-3 text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{e}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">Trusted brands &amp; systems</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/brands/all-on-4.png", alt: "All-on-4®" },
                { src: "/brands/invisalign.png", alt: "Invisalign®" },
                { src: "/brands/x-guide.png", alt: "X-Guide" },
                { src: "/brands/bioclear.png", alt: "Bioclear®" },
                { src: "/brands/galvosurge.png", alt: "GalvoSurge®" },
                { src: "/brands/botox.png", alt: "Botox® Cosmetic" },
                { src: "/brands/timan.png", alt: "Timan Dental" },
              ].map((b) => (
                <div key={b.alt} className="bg-white rounded-2xl border border-border h-28 grid place-items-center p-5">
                  <img src={b.src} alt={b.alt} className="max-h-14 max-w-[80%] object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["clinic-2", "clinic-6", "clinic-10", "clinic-14"].map((n) => (
              <div key={n} className="aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                <img src={`/equipment/${n}.jpg`} alt="U-Dental equipment" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src="/equipment/clinic-8.jpg" alt="Surgical room" className="rounded-3xl shadow-elevated w-full aspect-[4/3] object-cover" />
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
