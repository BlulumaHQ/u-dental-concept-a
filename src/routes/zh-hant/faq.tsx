import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "../faq";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/faq")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/faq",
    title: "常見問題｜植牙、Invisalign、美學牙科｜U-Dental",
    description: "關於植牙、Invisalign 隱形矯正、美學牙科、術後恢復、舒眠鎮靜，以及 U-Dental 溫哥華診所看診流程的完整解答。",
  }),
  component: FaqPage,
});
