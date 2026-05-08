import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "../services";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/services")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/services",
    title: "牙科服務項目｜溫哥華 U-Dental 牙醫診所",
    description: "U-Dental 提供完整牙科服務：植牙、All-on-4、Invisalign 隱適美、矯正、根管、美學牙科、洗牙保健、智齒拔除等中英雙語牙科治療。",
  }),
  component: ServicesPage,
});
