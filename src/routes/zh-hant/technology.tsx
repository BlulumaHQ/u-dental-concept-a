import { createFileRoute } from "@tanstack/react-router";
import { TechPage } from "../technology";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/technology")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/technology",
    title: "牙科技術與設備｜數位植牙 X-Guide CBCT｜U-Dental",
    description: "U-Dental 引進與頂尖醫學中心同等級的牙科技術——3D CBCT 影像、X-Guide 即時導航植牙、Medit 數位口掃、Leica 顯微鏡等先進設備。",
  }),
  component: TechPage,
});
