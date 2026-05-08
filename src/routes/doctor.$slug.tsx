import { createFileRoute, notFound, useParams } from "@tanstack/react-router";
import { ArrowRight, Phone, Calendar, ArrowLeft, CheckCircle2 } from "lucide-react";
import { DOCTORS } from "@/lib/site";
import { LocaleLink } from "@/components/site/LocaleLink";
import { useLocale, useT, getDoctors, getServices, getSite, localePath } from "@/lib/i18n";

export const Route = createFileRoute("/doctor/$slug")({
  loader: ({ params }) => {
    const doctor = DOCTORS.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.doctor;
    if (!d) return { meta: [{ title: "Doctor | U-Dental Clinic" }] };
    return {
      meta: [
        { title: `${d.name}, ${d.credentials} | U-Dental Clinic` },
        { name: "description", content: `${d.name} — ${d.specialties.join(", ")}. ${d.summary}` },
        { property: "og:title", content: `${d.name}, ${d.credentials} | U-Dental Clinic` },
        { property: "og:description", content: d.summary },
        { property: "og:image", content: d.photo },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x section-y text-center">
      <h1 className="text-4xl font-extrabold">Doctor not found</h1>
      <LocaleLink to="/about-us" className="mt-6 inline-flex text-primary font-semibold">Back to Our Team</LocaleLink>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-x section-y text-center">
      <p>{error.message}</p>
    </div>
  ),
  component: DoctorPage,
});

export function DoctorPage() {
  const locale = useLocale();
  const t = useT();
  const params = useParams({ strict: false }) as { slug?: string };
  const slug = params.slug ?? "";
  const doctors = getDoctors(locale);
  const services = getServices(locale);
  const site = getSite(locale);
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="container-x section-y text-center">
        <h1 className="text-4xl font-extrabold">{t("doctor.notFound")}</h1>
        <LocaleLink to="/about-us" className="mt-6 inline-flex text-primary font-semibold">{t("cta.backTeam")}</LocaleLink>
      </div>
    );
  }

  const related = doctor.related
    .map((s: string) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const lastName = doctor.name.split(" ").slice(-1)[0];

  return (
    <>
      <section className="bg-cream border-b border-border">
        <div className="container-x py-6">
          <LocaleLink to="/about-us" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> {t("cta.backTeam")}
          </LocaleLink>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <img
                src={doctor.photo}
                alt={`${doctor.name}, ${doctor.credentials}`}
                className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-elevated bg-card"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("doctor.specialties")}</p>
            <h1 className="mt-3 text-4xl lg:text-6xl font-extrabold leading-[1.05]">{doctor.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground font-semibold">{doctor.credentials}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {doctor.specialties.map((s: string) => (
                <span key={s} className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-7 text-lg text-foreground/85 leading-relaxed">{doctor.summary}</p>

            <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
              {doctor.bio.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <LocaleLink to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow">
                <Calendar className="h-4 w-4" /> {t("cta.bookLong")}
              </LocaleLink>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:border-primary hover:text-primary transition">
                <Phone className="h-4 w-4" /> {t("cta.call")} {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-cream">
          <div className="container-x">
            <p className="text-primary font-bold text-sm uppercase tracking-wider">{t("sec.relatedSvcs")}</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold">
              {locale === "zh-Hant" ? `${lastName} 醫師提供的治療項目` : `Treatments ${lastName} provides`}
            </h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((s) => (
                <a
                  key={s.slug}
                  href={localePath(`/service/${s.slug}`, locale)}
                  className="group rounded-2xl bg-card border border-border p-6 hover:border-primary hover:shadow-card transition"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-bold group-hover:text-primary">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    {t("cta.learnMore")} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y bg-charcoal text-charcoal-foreground">
        <div className="container-x text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold">
            {locale === "zh-Hant" ? `準備預約 ${doctor.name} 醫師了嗎？` : `Ready to schedule a visit with ${doctor.name}?`}
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{t("doctor.bilingual")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LocaleLink to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold shadow-glow">
              <Calendar className="h-5 w-5" /> {t("cta.bookLong")}
            </LocaleLink>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-4 font-bold hover:bg-white/10 transition">
              <Phone className="h-5 w-5" /> {t("cta.call")} {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

