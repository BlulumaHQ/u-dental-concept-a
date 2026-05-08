import { Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope } from "lucide-react";
import type { ServiceItem } from "@/lib/site";

export function ServiceCard({ service, variant = "horizontal" }: { service: ServiceItem; variant?: "horizontal" | "stacked" }) {
  if (variant === "stacked") {
    return (
      <Link
        to="/service/$slug"
        params={{ slug: service.slug }}
        className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-elevated transition flex flex-col"
      >
        <div className="aspect-[4/3] bg-soft overflow-hidden p-4">
          {service.image ? (
            <img src={service.image} alt={service.name} className="h-full w-full object-cover object-left-top group-hover:scale-105 transition duration-500" />
          ) : (
            <Stethoscope className="h-14 w-14 text-primary/40" />
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold leading-tight group-hover:text-primary">{service.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{service.short}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
            See More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/service/$slug"
      params={{ slug: service.slug }}
      className="group rounded-2xl bg-card border border-border p-5 hover:border-primary hover:shadow-elevated transition flex gap-4 items-start"
    >
      <div className="h-20 w-20 rounded-xl bg-soft grid place-items-center shrink-0 overflow-hidden">
        {service.image ? (
          <img src={service.image} alt="" className="h-12 w-12 object-contain" />
        ) : (
          <Stethoscope className="h-8 w-8 text-primary/60" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-base leading-tight group-hover:text-primary">{service.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{service.short}</p>
        <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-primary">
          Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
        </span>
      </div>
    </Link>
  );
}
