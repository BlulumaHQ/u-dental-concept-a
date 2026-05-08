import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "../insights";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/insights")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/insights",
    title: "牙科專業文章｜植牙、Invisalign、美學牙科｜U-Dental",
    description: "深入了解植牙、Invisalign 隱形矯正、美學牙科與現代數位牙科技術——由 U-Dental 溫哥華牙醫團隊撰寫的專業文章。",
  }),
  component: InsightsPage,
});
