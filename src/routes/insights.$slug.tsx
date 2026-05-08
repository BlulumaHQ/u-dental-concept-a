import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { INSIGHTS } from "@/lib/insights";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const post = INSIGHTS.find((p) => p.slug === params?.slug);
    if (!post) return { meta: [{ title: "Article | U-Dental Clinic" }] };
    return {
      meta: [
        { title: `${post.title} | U-Dental Clinic` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
      ],
    };
  },
  component: InsightArticle,
});

function InsightArticle() {
  const { slug } = Route.useParams();
  const post = INSIGHTS.find((p) => p.slug === slug);
  if (!post) throw notFound();

  return (
    <article>
      <header className="relative bg-charcoal text-white overflow-hidden">
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/40" />
        <div className="relative container-x py-20 lg:py-28 max-w-4xl">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>
          <p className="text-primary font-bold uppercase text-sm tracking-[0.25em]">{post.category}</p>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">{post.title}</h1>
          <div className="mt-6 flex items-center gap-5 text-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readMin} min read</span>
          </div>
        </div>
      </header>

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">{post.excerpt}</p>
          {post.body.map((b, i) => (
            <div key={i} className="mb-8">
              {b.heading && <h2 className="text-2xl lg:text-3xl font-extrabold mt-10 mb-4">{b.heading}</h2>}
              {b.paragraphs?.map((p, j) => (
                <p key={j} className="text-base lg:text-lg leading-relaxed text-foreground/90 mb-4">{p}</p>
              ))}
              {b.list && (
                <ul className="space-y-2 mt-4 list-disc pl-6 text-foreground/90">
                  {b.list.map((l, j) => <li key={j} className="leading-relaxed">{l}</li>)}
                </ul>
              )}
            </div>
          ))}

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Common questions</h2>
              <div className="space-y-5">
                {post.faqs.map((f, i) => (
                  <div key={i} className="rounded-xl bg-cream p-5 border border-border">
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2 text-muted-foreground">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-3xl bg-charcoal text-white p-8 lg:p-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-extrabold">Have questions about this treatment?</h3>
            <p className="mt-2 text-white/80">Book a consultation with our team in Kitsilano Vancouver.</p>
            <Link to="/contact-us" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {post.related && post.related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-extrabold mb-5">Related articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {post.related.map((slug) => {
                  const r = INSIGHTS.find((p) => p.slug === slug);
                  if (!r) return null;
                  return (
                    <Link key={slug} to="/insights/$slug" params={{ slug }} className="group rounded-xl border border-border p-4 hover:border-primary transition">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">{r.category}</p>
                      <p className="mt-1 font-bold group-hover:text-primary">{r.title}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
