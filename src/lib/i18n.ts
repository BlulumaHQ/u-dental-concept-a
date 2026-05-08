import { useRouterState } from "@tanstack/react-router";

export type Locale = "en" | "zh-Hant";

export const SITE_ORIGIN = "https://u-dental-concept-a.lovable.app";

export function detectLocale(pathname: string): Locale {
  return pathname === "/zh-hant" || pathname.startsWith("/zh-hant/") ? "zh-Hant" : "en";
}

export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return detectLocale(pathname);
}

/** Strip /zh-hant prefix to get the canonical English path. */
export function toEnPath(pathname: string): string {
  if (pathname === "/zh-hant") return "/";
  if (pathname.startsWith("/zh-hant/")) return pathname.slice("/zh-hant".length);
  return pathname;
}

/** Pair the current path with its counterpart in the other locale. */
export function pairPath(pathname: string, target: Locale): string {
  const en = toEnPath(pathname);
  if (target === "en") return en;
  if (en === "/") return "/zh-hant";
  return "/zh-hant" + en;
}

/** Localize an English path for the given locale. */
export function localePath(enPath: string, locale: Locale): string {
  if (locale === "en") return enPath;
  if (enPath === "/") return "/zh-hant";
  return "/zh-hant" + enPath;
}

// ============= UI Dictionary =============
type Dict = Record<string, { en: string; zh: string }>;

export const UI: Dict = {
  // nav
  "nav.home": { en: "Home", zh: "首頁" },
  "nav.about": { en: "About", zh: "關於我們" },
  "nav.services": { en: "Services", zh: "服務項目" },
  "nav.technology": { en: "Technology", zh: "技術設備" },
  "nav.insights": { en: "Insights", zh: "專業文章" },
  "nav.faq": { en: "FAQ", zh: "常見問題" },
  "nav.contact": { en: "Contact", zh: "聯絡我們" },
  // CTA
  "cta.book": { en: "Book Appointment", zh: "立即預約" },
  "cta.bookLong": { en: "Book an Appointment", zh: "預約看診" },
  "cta.call": { en: "Call", zh: "來電" },
  "cta.callShort": { en: "Call", zh: "來電" },
  "cta.bookShort": { en: "Book", zh: "預約" },
  "cta.viewAll": { en: "View all services", zh: "查看所有服務" },
  "cta.viewAllFaqs": { en: "View All FAQs", zh: "查看所有問題" },
  "cta.viewProfile": { en: "View profile", zh: "查看醫師簡介" },
  "cta.learnMore": { en: "Learn more", zh: "了解更多" },
  "cta.seeMore": { en: "See More", zh: "查看更多" },
  "cta.aboutClinic": { en: "About the clinic", zh: "認識診所" },
  "cta.exploreTech": { en: "Explore our technology", zh: "了解我們的技術" },
  "cta.contactUs": { en: "Contact us", zh: "聯絡我們" },
  "cta.bookConsult": { en: "Book a consultation", zh: "預約諮詢" },
  "cta.backTeam": { en: "Back to Our Team", zh: "返回醫師團隊" },
  "cta.backServices": { en: "← All services", zh: "← 所有服務" },
  "cta.backInsights": { en: "All insights", zh: "所有文章" },
  "cta.fullTechList": { en: "See full technology list", zh: "查看完整設備清單" },
  // sections
  "sec.featured": { en: "Featured Treatments", zh: "重點治療" },
  "sec.inside": { en: "Inside U-Dental Clinic", zh: "走進 U-Dental 診所" },
  "sec.meet": { en: "Meet Our Dentists", zh: "認識我們的醫師" },
  "sec.why": { en: "Why U-Dental", zh: "選擇 U-Dental 的理由" },
  "sec.tech": { en: "Technology & Equipment", zh: "技術與設備" },
  "sec.completeCare": { en: "Complete Dental Care", zh: "全方位牙科照護" },
  "sec.faq": { en: "Patient FAQ", zh: "常見問題" },
  "sec.visit": { en: "Visit Us", zh: "預約看診" },
  "sec.related": { en: "Related services", zh: "相關治療" },
  "sec.relatedArticles": { en: "Related articles", zh: "延伸閱讀" },
  // footer
  "foot.featured": { en: "Featured Treatments", zh: "重點治療項目" },
  "foot.resources": { en: "Resources", zh: "資源中心" },
  "foot.book": { en: "Book Appointment", zh: "立即預約" },
  "foot.privacy": { en: "Privacy Policy", zh: "隱私權政策" },
  "foot.terms": { en: "Terms of Service", zh: "服務條款" },
  "foot.privacyShort": { en: "Privacy", zh: "隱私" },
  "foot.termsShort": { en: "Terms", zh: "條款" },
  "foot.viewAllServices": { en: "View All Services", zh: "查看所有服務" },
  "foot.intro": {
    en: "Premium digital dentistry in Kitsilano Vancouver. English & Mandarin care designed around modern technology and patient comfort.",
    zh: "位於溫哥華 Kitsilano 的優質數位牙科診所，提供中英雙語服務，以現代科技與病患舒適為核心。",
  },
  "foot.bookSub": {
    en: "Schedule your visit with our bilingual team in Kitsilano Vancouver.",
    zh: "歡迎透過電話或線上預約，與我們的中英雙語團隊聯繫。",
  },
  "foot.copyright": {
    en: "U-Dental Clinic. All rights reserved.",
    zh: "U-Dental Clinic 牙醫診所。版權所有。",
  },
  "foot.webby": { en: "Web Design by", zh: "網站設計：" },
  // hero / generic
  "hero.officeHours": { en: "Office Hours", zh: "營業時間" },
  "hero.bilingual": { en: "English & Mandarin Care", zh: "中英雙語服務" },
  // service detail
  "svc.about": { en: "About this treatment", zh: "關於此治療" },
  "svc.benefits": { en: "Patient-focused benefits", zh: "為病患帶來的好處" },
  "svc.when": { en: "When this may be needed", zh: "什麼情況需要此治療" },
  "svc.tech": { en: "Technology & Comfort", zh: "技術與舒適" },
  "svc.disclaimer": {
    en: "Treatment recommendations depend on individual needs. Speak with the clinic to understand your options.",
    zh: "實際治療建議將依個別狀況而定，歡迎來診諮詢專業醫師，了解最適合您的方案。",
  },
  "svc.scheduleConsult": { en: "Schedule a consultation", zh: "預約專業諮詢" },
  "svc.scheduleSub": {
    en: "English & Mandarin support. We'll help you understand your options.",
    zh: "中英雙語服務，協助您了解所有治療選項。",
  },
  // contact
  "contact.title": { en: "Get in touch", zh: "與我們聯繫" },
  "contact.respond": { en: "We typically respond within one business day.", zh: "我們通常於一個工作日內回覆。" },
  "contact.request": { en: "Request an appointment", zh: "預約申請" },
  "contact.fName": { en: "Your Name", zh: "姓名" },
  "contact.fEmail": { en: "Your Email", zh: "電子郵件" },
  "contact.fPhone": { en: "Phone", zh: "電話" },
  "contact.fLang": { en: "Preferred Language", zh: "偏好語言" },
  "contact.fInterest": { en: "Treatment Interest", zh: "感興趣的治療項目" },
  "contact.fMsg": { en: "Your Message", zh: "訊息內容" },
  "contact.send": { en: "Send Request", zh: "送出預約" },
  "contact.thanks": {
    en: "Thank you — please call us to confirm your appointment, or we'll reach out shortly.",
    zh: "感謝您的預約申請，請來電確認時間，或我們將儘快與您聯繫。",
  },
  "contact.formNote": {
    en: "By submitting this form you agree to be contacted regarding your inquiry. For urgent dental needs, please call us directly.",
    zh: "送出表單即表示您同意我們就此詢問與您聯繫。如有緊急牙科狀況，請直接來電。",
  },
  // misc
  "lang.en": { en: "English", zh: "英文" },
  "lang.zh": { en: "Mandarin", zh: "中文" },
  "team.label": { en: "Our Team", zh: "醫師團隊" },
  "team.heading": { en: "Meet our dentists", zh: "認識我們的醫師團隊" },
  "service.notFound": { en: "Service not found", zh: "找不到此服務" },
  "service.backAll": { en: "Back to all services", zh: "回到所有服務項目" },
  "doctor.notFound": { en: "Doctor not found", zh: "找不到此醫師資訊" },
  "doctor.specialties": { en: "Our Dentists", zh: "醫師團隊" },
  "stillQ.title": { en: "Still have questions?", zh: "還有其他問題嗎？" },
  "stillQ.sub": { en: "Our team is happy to help you understand your options.", zh: "我們的團隊很樂意協助您了解所有治療方案。" },
  "ready.title": { en: "Ready when you are.", zh: "我們隨時為您服務。" },
  "ready.sub": {
    en: "Whether you're booking your first visit or planning a complex treatment, our team is here to help — in English or Mandarin.",
    zh: "無論是初次看診或複雜療程規劃，我們的中英雙語團隊都樂意為您協助。",
  },
  "ready2.title": { en: "Ready to schedule your visit?", zh: "準備好預約看診了嗎？" },
  "ready2.sub": {
    en: "Experience modern dental care in Kitsilano Vancouver — in English or Mandarin.",
    zh: "歡迎來到溫哥華 Kitsilano，體驗中英雙語的現代牙科照護。",
  },
  "kitsilano.title": { en: "In the heart of Kitsilano", zh: "位於 Kitsilano 的中心地段" },
  "patientResources": { en: "Patient Resources", zh: "病患資源" },
  "categoryLabel": { en: "Category", zh: "類別" },
};

export function t(key: keyof typeof UI | string, locale: Locale): string {
  const entry = (UI as Record<string, { en: string; zh: string } | undefined>)[key];
  if (!entry) return String(key);
  return locale === "zh-Hant" ? entry.zh : entry.en;
}

export function useT() {
  const locale = useLocale();
  return (key: keyof typeof UI | string) => t(key, locale);
}
