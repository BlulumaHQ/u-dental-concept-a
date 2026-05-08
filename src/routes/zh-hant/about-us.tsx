import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../about-us";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/about-us")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/about-us",
    title: "關於 U-Dental｜溫哥華中英雙語牙醫團隊",
    description: "認識 U-Dental 溫哥華 Kitsilano 牙醫診所——七位專業中英雙語醫師、現代化診療空間，與以病患為中心的優質牙科照護。",
  }),
  component: AboutPage,
});
