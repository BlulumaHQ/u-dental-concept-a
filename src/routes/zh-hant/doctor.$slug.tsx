import { createFileRoute } from "@tanstack/react-router";
import { DoctorPage } from "../doctor.$slug";
import { localizedHead } from "@/lib/seo";
import { DOCTORS_ZH } from "@/lib/site.zh";

export const Route = createFileRoute("/zh-hant/doctor/$slug")({
  head: ({ params }) => {
    const doc = DOCTORS_ZH.find((d) => d.slug === params.slug);
    return localizedHead({
      locale: "zh-Hant",
      enPath: `/doctor/${params.slug}`,
      title: doc ? `${doc.name}｜U-Dental 溫哥華牙醫團隊` : "U-Dental 醫師團隊",
      description: doc?.summary ?? "U-Dental 中英雙語牙醫師團隊。",
      image: doc?.photo,
    });
  },
  component: DoctorPage,
});
