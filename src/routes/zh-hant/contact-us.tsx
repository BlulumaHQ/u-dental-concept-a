import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../contact-us";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/contact-us")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/contact-us",
    title: "聯絡 U-Dental｜溫哥華 Kitsilano 牙醫預約",
    description: "立即預約 U-Dental 溫哥華 Kitsilano 牙醫診所——中英雙語接待、現代數位牙科、舒適看診體驗。電話：604-423-3839。",
  }),
  component: ContactPage,
});
