import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../index";
import { localizedHead } from "@/lib/seo";
import { HERO_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/zh-hant/")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/",
    title: "溫哥華 Kitsilano 優質牙醫診所｜U-Dental 牙科",
    description: "U-Dental 位於溫哥華 Kitsilano，提供中英雙語的進階牙科照護，包含植牙、Invisalign 隱形矯正、All-on-4 全口重建、美學牙科與數位牙科服務。",
    image: HERO_IMAGES[0],
  }),
  component: HomePage,
});
