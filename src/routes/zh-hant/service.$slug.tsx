import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../service.$slug";
import { localizedHead } from "@/lib/seo";
import { SERVICES_ZH } from "@/lib/site.zh";

export const Route = createFileRoute("/zh-hant/service/$slug")({
  head: ({ params }) => {
    const svc = SERVICES_ZH.find((s) => s.slug === params.slug);
    return localizedHead({
      locale: "zh-Hant",
      enPath: `/service/${params.slug}`,
      title: svc ? `${svc.name}｜U-Dental 溫哥華牙醫` : "U-Dental 牙科服務",
      description: svc?.short ?? "U-Dental 提供中英雙語的進階牙科治療。",
      image: svc?.image,
    });
  },
  component: ServicePage,
});
