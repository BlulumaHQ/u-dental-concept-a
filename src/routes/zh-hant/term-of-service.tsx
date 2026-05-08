import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "../term-of-service";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/zh-hant/term-of-service")({
  head: () => localizedHead({
    locale: "zh-Hant",
    enPath: "/term-of-service",
    title: "服務條款｜U-Dental 溫哥華牙醫診所",
    description: "請於使用 U-Dental 網站前仔細閱讀服務條款。",
  }),
  component: TermsPage,
});
