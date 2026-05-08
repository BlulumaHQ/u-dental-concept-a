import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight, Stethoscope, Sparkles, Smile, Layers, Crosshair, Scissors,
  Crown, AlertTriangle, Wrench, Syringe, Gem, ScanLine,
} from "lucide-react";
import type { ServiceItem } from "@/lib/site";
import { detectLocale, localePath, t } from "@/lib/i18n";

import type { LucideProps } from "lucide-react";

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  "dental-implants": Layers,
  "all-on-4": Layers,
  "invisalign": Smile,
  "orthodontics": Smile,
  "x-guide-real-time-3d-guidance-surgery": Crosshair,
  "oral-surgery": Scissors,
  "wisdom-tooth-extraction": Scissors,
  "cosmetics-and-comprehensive-dentistry": Sparkles,
  "dental-cleaning": Sparkles,
  "emergency": AlertTriangle,
  "restorations": Wrench,
  "crown-and-bridges": Crown,
  "root-canal-treatment": ScanLine,
  "denture": Gem,
  "botox": Syringe,
  "microscopic-dentistry": ScanLine,
  "bioclear": Sparkles,
  "galvosurge-for-peri-implantitis-treatment": Wrench,
};

function ServiceIcon({ slug, size = 36 }: { slug: string; size?: number }) {
  const Icon = ICONS[slug] ?? Stethoscope;
  return <Icon className="text-primary" strokeWidth={1.75} size={size} />;
}

export function ServiceCard({ service, variant = "horizontal" }: { service: ServiceItem; variant?: "horizontal" | "stacked" }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = detectLocale(pathname);
  const to = localePath(`/service/${service.slug}`, locale) as string;

  if (variant === "stacked") {
    return (
      <Link to={to} className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-elevated transition flex flex-col">
        <div className="aspect-[4/3] bg-soft grid place-items-center overflow-hidden p-8">
          {service.image ? (
            <img src={service.image} alt={service.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500" />
          ) : (
            <ServiceIcon slug={service.slug} size={72} />
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold leading-tight group-hover:text-primary">{service.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{service.short}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
            {t("cta.seeMore", locale)} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={to} className="group rounded-2xl bg-card border border-border p-5 hover:border-primary hover:shadow-elevated transition flex gap-4 items-start">
      <div className="h-20 w-20 rounded-xl bg-primary/10 grid place-items-center shrink-0">
        <ServiceIcon slug={service.slug} size={36} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-base leading-tight group-hover:text-primary">{service.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{service.short}</p>
        <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-primary">
          {t("cta.learnMore", locale)} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
        </span>
      </div>
    </Link>
  );
}
