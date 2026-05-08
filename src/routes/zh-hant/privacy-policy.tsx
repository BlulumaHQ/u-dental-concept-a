import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "../privacy-policy";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/privacy-policy")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/privacy-policy",
    title: "隱私權政策｜U-Dental 溫哥華牙醫診所",
    description: "U-Dental 如何蒐集、使用與保護您的個人資料。",
  }),
  component: PrivacyPage,
});
