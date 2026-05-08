import { createFileRoute } from "@tanstack/react-router";
import { InsightArticle } from "../insights.$slug";
import { localizedHead } from "@/lib/seo";
import { INSIGHTS_ZH } from "@/lib/insights.zh";

export const Route = createFileRoute("/zh-hant/insights/$slug")({
  head: ({ params }) => {
    const article = INSIGHTS_ZH.find((i) => i.slug === params.slug);
    return localizedHead({
      locale: "zh-Hant",
      enPath: `/insights/${params.slug}`,
      title: article ? `${article.title}｜U-Dental 牙科專欄` : "U-Dental 牙科專欄",
      description: article?.excerpt ?? "U-Dental 牙科專業文章。",
      image: article?.cover,
      type: "article",
    });
  },
  component: InsightArticle,
});
