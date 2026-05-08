import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { INSIGHTS } from "@/lib/insights";
import { HERO_IMAGES } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Articles | U-Dental Clinic Vancouver" },
      { name: "description", content: "In-depth articles on dental implants, Invisalign, cosmetic dentistry, X-Guide technology, and how to choose the right dentist in Vancouver — from the U-Dental Clinic team." },
      { property: "og:title", content: "Insights | U-Dental Clinic" },
      { property: "og:description", content: "Educational articles for patients on modern dentistry." },
    ],
  }),
  component: InsightsPage,
});

export function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Articles for informed dental decisions"
        subtitle="Long-form, professionally written articles covering implants, Invisalign, cosmetic care, and the technology shaping modern dentistry."
        image={HERO_IMAGES[3]}
      />
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS.map((p) => (
            <Link
              key={p.slug}
              to="/insights/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-elevated transition flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cream">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">{p.category} · {p.readMin} min read</p>
                <h2 className="mt-2 text-lg font-extrabold leading-snug group-hover:text-primary">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                  Read article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
