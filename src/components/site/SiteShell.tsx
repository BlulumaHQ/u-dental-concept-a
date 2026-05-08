import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import { ChatbotWidget } from "./ChatbotWidget";
import { detectLocale } from "@/lib/i18n";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = detectLocale(pathname);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.lang = locale === "zh-Hant" ? "zh-Hant" : "en";
    }
  }, [pathname, locale]);
  return (
    <div lang={locale === "zh-Hant" ? "zh-Hant" : "en"} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCTA />
      <ChatbotWidget />
    </div>
  );
}
