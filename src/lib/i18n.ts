import { useRouterState } from "@tanstack/react-router";
import { SITE, SERVICES, SERVICE_CATEGORIES, DOCTORS, type ServiceItem, type Doctor } from "./site";
import { SITE_ZH, SERVICES_ZH, SERVICE_CATEGORIES_ZH, DOCTORS_ZH } from "./site.zh";
import { FAQS, type FAQ } from "./faqs";
import { FAQS_ZH } from "./faqs.zh";
import { INSIGHTS, type Insight } from "./insights";
import { INSIGHTS_ZH } from "./insights.zh";

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

// ============= Locale-aware data getters =============
export function getSite(locale: Locale) {
  return locale === "zh-Hant" ? SITE_ZH : SITE;
}
export function getServices(locale: Locale): ServiceItem[] {
  return locale === "zh-Hant" ? SERVICES_ZH : SERVICES;
}
export function getServiceCategories(locale: Locale) {
  return locale === "zh-Hant" ? SERVICE_CATEGORIES_ZH : SERVICE_CATEGORIES;
}
export function getDoctors(locale: Locale): Doctor[] {
  return locale === "zh-Hant" ? DOCTORS_ZH : DOCTORS;
}
export function getFaqs(locale: Locale): FAQ[] {
  return locale === "zh-Hant" ? FAQS_ZH : FAQS;
}
export function getInsights(locale: Locale): Insight[] {
  return locale === "zh-Hant" ? INSIGHTS_ZH : INSIGHTS;
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
  "cta.readArticle": { en: "Read article", zh: "閱讀文章" },
  // sections
  "sec.featured": { en: "Featured Treatments", zh: "重點治療" },
  "sec.featuredHeading": { en: "High-value dental care, planned with precision", zh: "高價值的精準牙科治療" },
  "sec.inside": { en: "Inside U-Dental Clinic", zh: "走進 U-Dental 診所" },
  "sec.insideHeading": { en: "A modern dental environment", zh: "現代化的牙科空間" },
  "sec.insideSub": { en: "Designed for comfort, precision, and care — featuring an exclusive surgical suite, advanced digital workflow, and treatment rooms built around the patient experience.", zh: "為舒適、精準與細膩照護而設計——包含專屬手術房、先進數位流程，以及以病患體驗為核心的診療空間。" },
  "sec.meet": { en: "Meet Our Dentists", zh: "認識我們的醫師" },
  "sec.meetHeading": { en: "A team of experienced bilingual dentists", zh: "經驗豐富的中英雙語醫師團隊" },
  "sec.meetSub": { en: "Seven trusted dentists, certified across Canada and Taiwan, bringing decades of combined experience in surgery, implants, orthodontics, cosmetic and family dentistry.", zh: "七位專業醫師，於加拿大與台灣均取得執照，累積數十年外科、植牙、矯正、美學與家庭牙科的臨床經驗。" },
  "sec.why": { en: "Why U-Dental", zh: "選擇 U-Dental 的理由" },
  "sec.whyHeading": { en: "A modern dental experience, designed around you", zh: "以您為中心的現代化牙科體驗" },
  "sec.whySub": { en: "U-Dental Clinic combines advanced digital dentistry with bilingual, comfort-focused care — so every visit feels considered, clear, and calm.", zh: "U-Dental 結合先進的數位牙科與中英雙語、以舒適為核心的照護，讓您的每一次看診都倍感安心、清楚與從容。" },
  "sec.tech": { en: "Technology & Equipment", zh: "技術與設備" },
  "sec.techHeading": { en: "Built for precision and patient comfort", zh: "為精準度與病患舒適打造" },
  "sec.techSub": { en: "Our clinic invests in the same technology used by leading dental medical centers — from 3D cone beam CT imaging to real-time guided implant surgery.", zh: "我們投資與頂尖醫學中心同等級的技術——從 3D CBCT 影像到即時導航植牙手術。" },
  "sec.completeCare": { en: "Complete Dental Care", zh: "全方位牙科照護" },
  "sec.completeHeading": { en: "All the services your smile may need", zh: "您所需要的完整牙科服務" },
  "sec.completeSub": { en: "From routine preventive visits to advanced surgical and cosmetic treatment, find the care that fits your needs.", zh: "從定期預防保健到進階手術與美學治療，找到最適合您的牙科照護方案。" },
  "sec.faq": { en: "Patient FAQ", zh: "常見問題" },
  "sec.faqHeading": { en: "Answers to common questions", zh: "常見問題解答" },
  "sec.visit": { en: "Visit Us", zh: "預約看診" },
  "sec.related": { en: "Related services", zh: "相關治療" },
  "sec.relatedArticles": { en: "Related articles", zh: "延伸閱讀" },
  "sec.relatedSvcs": { en: "Related Services", zh: "相關服務" },
  "sec.commonQ": { en: "Common questions", zh: "常見問題" },
  // hero
  "hero.eyebrowHome": { en: "U-Dental Clinic · Kitsilano Vancouver", zh: "U-Dental 牙醫診所 · 溫哥華 Kitsilano" },
  "hero.titleHome": { en: "Modern Dental Care with a Human Touch", zh: "兼具現代科技與人文關懷的優質牙醫" },
  "hero.subHome": { en: "Advanced dental care in Kitsilano Vancouver — experienced bilingual dentists, English and Mandarin communication, and technology-supported treatment planning.", zh: "位於溫哥華 Kitsilano 的進階牙科照護——資深中英雙語醫師、流暢的中英溝通，以及以技術為基礎的治療規劃。" },
  "hero.eyebrowInside": { en: "Inside Our Clinic", zh: "走進我們的診所" },
  "hero.titleInside": { en: "A Premium, Comfort-First Environment", zh: "舒適優先的高品質診療環境" },
  "hero.subInside": { en: "Modern treatment rooms and an exclusive surgical suite — designed around hygiene, calm, and clinical precision.", zh: "現代化的診療空間與專屬手術房——以衛生、安定與臨床精準為核心設計。" },
  "hero.eyebrowDigital": { en: "Digital Dentistry", zh: "數位牙科" },
  "hero.titleDigital": { en: "Precision Implant & Surgical Care", zh: "精準的植牙與外科治療" },
  "hero.subDigital": { en: "3D-guided implant planning, an exclusive surgical room, and a team that has performed thousands of procedures.", zh: "3D 導航植牙規劃、專屬手術房，以及累積上千手術經驗的醫師團隊。" },
  "hero.eyebrowComplete": { en: "Comprehensive Treatment", zh: "完整治療項目" },
  "hero.titleComplete": { en: "Every Service, Under One Roof", zh: "全方位牙科服務一次到位" },
  "hero.subComplete": { en: "From cleanings and Invisalign to All-on-4 and microscopic restorations — your full dental care, in one premium clinic.", zh: "從洗牙、Invisalign 到 All-on-4 與顯微修復——所有牙科照護，盡在一間優質診所。" },
  "hero.officeHours": { en: "Office Hours", zh: "營業時間" },
  "hero.bilingual": { en: "English & Mandarin Care", zh: "中英雙語服務" },
  // service detail
  "svc.about": { en: "About this treatment", zh: "關於此治療" },
  "svc.benefits": { en: "Patient-focused benefits", zh: "為病患帶來的好處" },
  "svc.when": { en: "When this may be needed", zh: "什麼情況需要此治療" },
  "svc.tech": { en: "Technology & Comfort", zh: "技術與舒適" },
  "svc.disclaimer": { en: "Treatment recommendations depend on individual needs. Speak with the clinic to understand your options.", zh: "實際治療建議將依個別狀況而定，歡迎來診諮詢專業醫師，了解最適合您的方案。" },
  "svc.scheduleConsult": { en: "Schedule a consultation", zh: "預約專業諮詢" },
  "svc.scheduleSub": { en: "English & Mandarin support. We'll help you understand your options.", zh: "中英雙語服務，協助您了解所有治療選項。" },
  "svc.readyTalk": { en: "Ready to talk about", zh: "想了解更多關於" },
  "svc.bookVisit": { en: "Book a visit to U-Dental Clinic in Kitsilano Vancouver.", zh: "立即預約溫哥華 Kitsilano 的 U-Dental 牙醫診所。" },
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
  "contact.thanksPrefix": { en: "Thank you — please call", zh: "感謝您的預約申請，請來電" },
  "contact.thanksSuffix": { en: "to confirm your appointment, or we'll reach out shortly.", zh: "確認時間，或我們將儘快與您聯繫。" },
  "contact.formNote": { en: "By submitting this form you agree to be contacted regarding your inquiry. For urgent dental needs, please call us directly.", zh: "送出表單即表示您同意我們就此詢問與您聯繫。如有緊急牙科狀況，請直接來電。" },
  "contact.opt.general": { en: "General Appointment", zh: "一般看診" },
  "contact.opt.cleaning": { en: "Dental Cleaning", zh: "洗牙保健" },
  "contact.opt.emergency": { en: "Emergency", zh: "緊急牙科" },
  "contact.opt.implants": { en: "Dental Implants", zh: "植牙" },
  "contact.opt.invisalign": { en: "Invisalign", zh: "Invisalign 隱形矯正" },
  "contact.opt.wisdom": { en: "Wisdom Tooth Extraction", zh: "智齒拔除" },
  "contact.opt.cosmetic": { en: "Cosmetic Dentistry", zh: "美學牙科" },
  "contact.opt.other": { en: "Other", zh: "其他" },
  // misc
  "lang.en": { en: "English", zh: "英文" },
  "lang.zh": { en: "Mandarin", zh: "中文" },
  "team.label": { en: "Our Team", zh: "醫師團隊" },
  "team.heading": { en: "Meet our dentists", zh: "認識我們的醫師團隊" },
  "service.notFound": { en: "Service not found", zh: "找不到此服務" },
  "service.backAll": { en: "Back to all services", zh: "回到所有服務項目" },
  "doctor.notFound": { en: "Doctor not found", zh: "找不到此醫師資訊" },
  "doctor.specialties": { en: "Our Dentists", zh: "醫師團隊" },
  "doctor.treatmentsPrefix": { en: "Treatments", zh: "" },
  "doctor.treatmentsSuffix": { en: "provides", zh: "醫師提供的治療項目" },
  "doctor.readyVisit": { en: "Ready to schedule a visit with", zh: "準備預約" },
  "doctor.readyVisitZhSuffix": { en: "?", zh: " 醫師了嗎？" },
  "doctor.bilingual": { en: "Bilingual care in Kitsilano Vancouver — English and Mandarin welcome.", zh: "溫哥華 Kitsilano 的中英雙語牙科服務，歡迎您預約看診。" },
  "stillQ.title": { en: "Still have questions?", zh: "還有其他問題嗎？" },
  "stillQ.sub": { en: "Our team is happy to help you understand your options.", zh: "我們的團隊很樂意協助您了解所有治療方案。" },
  "ready.title": { en: "Ready when you are.", zh: "我們隨時為您服務。" },
  "ready.sub": { en: "Whether you're booking your first visit or planning a complex treatment, our team is here to help — in English or Mandarin.", zh: "無論是初次看診或複雜療程規劃，我們的中英雙語團隊都樂意為您協助。" },
  "ready2.title": { en: "Ready to schedule your visit?", zh: "準備好預約看診了嗎？" },
  "ready2.sub": { en: "Experience modern dental care in Kitsilano Vancouver — in English or Mandarin.", zh: "歡迎來到溫哥華 Kitsilano，體驗中英雙語的現代牙科照護。" },
  "kitsilano.title": { en: "In the heart of Kitsilano", zh: "位於 Kitsilano 的中心地段" },
  "patientResources": { en: "Patient Resources", zh: "病患資源" },
  "categoryLabel": { en: "Category", zh: "類別" },
  // page heroes
  "page.services.eyebrow": { en: "Services", zh: "服務項目" },
  "page.services.title": { en: "Complete dental care, in one premium clinic.", zh: "全方位牙科照護，盡在一間優質診所。" },
  "page.services.sub": { en: "From routine cleanings to advanced implant and orthodontic treatments — explore the services available at U-Dental Clinic.", zh: "從定期洗牙到進階植牙與矯正治療——一覽 U-Dental 提供的所有牙科服務。" },
  "page.about.eyebrow": { en: "About U-Dental", zh: "關於 U-Dental" },
  "page.about.title": { en: "About U-Dental", zh: "關於 U-Dental" },
  "page.about.sub": { en: "Advanced dental care in Kitsilano Vancouver with experienced English and Mandarin-speaking dentists.", zh: "位於溫哥華 Kitsilano 的進階牙科照護，由經驗豐富的中英雙語醫師團隊為您服務。" },
  "page.contact.eyebrow": { en: "Contact", zh: "聯絡我們" },
  "page.contact.title": { en: "Book your visit at U-Dental Clinic.", zh: "立即預約 U-Dental 牙醫診所。" },
  "page.contact.sub": { en: "English and Mandarin support, modern digital dentistry, and a comfortable patient experience in Kitsilano Vancouver.", zh: "中英雙語服務、現代數位牙科技術，與舒適的看診體驗，盡在溫哥華 Kitsilano。" },
  "page.tech.eyebrow": { en: "Technology & Equipment", zh: "技術與設備" },
  "page.tech.title": { en: "Digital dentistry, designed for precision.", zh: "為精準而生的數位牙科。" },
  "page.tech.sub": { en: "U-Dental invests in the same technology used by leading dental medical centers — from 3D imaging to real-time guided implant surgery and microscopic dentistry.", zh: "U-Dental 引進與頂尖醫學中心同等級的設備——從 3D 影像、即時導航植牙手術，到顯微牙科。" },
  "page.insights.eyebrow": { en: "Insights", zh: "專業文章" },
  "page.insights.title": { en: "Articles for informed dental decisions", zh: "為您解析牙科決策的專業文章" },
  "page.insights.sub": { en: "Long-form, professionally written articles covering implants, Invisalign, cosmetic care, and the technology shaping modern dentistry.", zh: "涵蓋植牙、Invisalign、美學牙科與現代牙科技術的深度專業文章。" },
  "page.faq.eyebrow": { en: "Patient Resources", zh: "病患資源" },
  "page.faq.title": { en: "Frequently asked questions", zh: "常見問題" },
  "page.faq.sub": { en: "Honest answers about dental implants, Invisalign, cosmetic dentistry, recovery, sedation, and how care works at U-Dental Clinic.", zh: "關於植牙、Invisalign、美學牙科、術後恢復、舒眠鎮靜，以及 U-Dental 看診流程的完整解答。" },
  // tech extras
  "tech.equipmentLabel": { en: "Our Equipment", zh: "我們的設備" },
  "tech.equipmentHeading": { en: "A complete digital and surgical suite", zh: "完整的數位與外科設備" },
  "tech.equipmentSub": { en: "From digital scanning to surgical lighting, every system is selected to support precise, comfortable, and predictable treatment.", zh: "從數位掃描到手術照明，每一套系統都為了支援精準、舒適與穩定的治療而精心挑選。" },
  "tech.brands": { en: "Trusted brands & systems", zh: "信賴品牌與系統" },
  "tech.higherStandard": { en: "A Higher Standard", zh: "更高的醫療標準" },
  "tech.medicalClass": { en: "Medical center-class asepsis quality", zh: "醫學中心等級的無菌品質" },
  // about extras
  "about.visionLabel": { en: "Our Vision", zh: "我們的願景" },
  "about.visionHeading": { en: "Designed around care, precision, and comfort.", zh: "以照護、精準與舒適為核心設計。" },
  "about.modernLabel": { en: "A Modern Environment", zh: "現代化的診療環境" },
  "about.modernHeading": { en: "A calm, comfortable, medical-class clinic", zh: "安靜、舒適、醫學中心等級的診所" },
  "about.modernSub": { en: "Our clinic was designed for clarity and comfort — quiet treatment rooms, a dedicated surgical suite, and modern infection-control workflows that meet a medical center-class standard of asepsis.", zh: "我們的診所以清晰與舒適為設計核心——安靜的診療室、專屬手術房，以及達到醫學中心等級的感染控制流程。" },
  "about.equipLabel": { en: "Equipment & Technology", zh: "設備與技術" },
  "about.equipHeading": { en: "Cutting-edge equipment, end-to-end digital workflow.", zh: "頂尖設備，端到端的數位治療流程。" },
  "about.brandsLabel": { en: "Trusted Systems", zh: "值得信賴的系統" },
  "about.brandsHeading": { en: "Advanced Dental Technology & Trusted Systems", zh: "先進的牙科技術與值得信賴的系統" },
  "about.brandsSub": { en: "U-Dental treatments are supported by clinically established technologies and systems used in modern digital dentistry.", zh: "U-Dental 的治療皆由現代數位牙科中已被臨床驗證的技術與系統支援。" },
  "about.behindLabel": { en: "Behind Every Smile", zh: "每個笑容的背後" },
  "about.behindHeading": { en: "Our clinical & support team", zh: "我們的臨床與支援團隊" },
  "about.behindSub": { en: "Beyond our seven dentists, U-Dental is supported by a dedicated team of hygienists, dental assistants and front-desk coordinators — bilingual in English and Mandarin, and committed to making every visit comfortable, organized and personal.", zh: "除了七位醫師外，U-Dental 還有一群專業的牙科衛生師、牙科助理與前台接待——皆通中英雙語，致力為每位病患帶來舒適、有條理且貼心的看診體驗。" },
  // legal
  "legal.label": { en: "Legal", zh: "法律聲明" },
  "legal.privacyTitle": { en: "Privacy Policy", zh: "隱私權政策" },
  "legal.privacySub": { en: "How we collect, use, and protect your personal information.", zh: "我們如何蒐集、使用與保護您的個人資料。" },
  "legal.termsTitle": { en: "Terms of Service", zh: "服務條款" },
  "legal.termsSub": { en: "Please read these terms carefully before using our website.", zh: "請於使用本網站前仔細閱讀以下條款。" },
  // chatbot
  "chat.title": { en: "U-Dental Assistant", zh: "U-Dental 線上小幫手" },
  "chat.subtitle": { en: "Typically replies in a few minutes", zh: "通常於幾分鐘內回覆" },
  "chat.greet": { en: "Hi! 👋 Welcome to U-Dental. How can we help you today?", zh: "您好！👋 歡迎來到 U-Dental，請問有什麼可以為您服務的？" },
  "chat.placeholder": { en: "Type a message…", zh: "輸入訊息…" },
  // footer
  "foot.featured": { en: "Featured Treatments", zh: "重點治療項目" },
  "foot.resources": { en: "Resources", zh: "資源中心" },
  "foot.book": { en: "Book Appointment", zh: "立即預約" },
  "foot.privacy": { en: "Privacy Policy", zh: "隱私權政策" },
  "foot.terms": { en: "Terms of Service", zh: "服務條款" },
  "foot.privacyShort": { en: "Privacy", zh: "隱私" },
  "foot.termsShort": { en: "Terms", zh: "條款" },
  "foot.viewAllServices": { en: "View All Services", zh: "查看所有服務" },
  "foot.intro": { en: "Premium digital dentistry in Kitsilano Vancouver. English & Mandarin care designed around modern technology and patient comfort.", zh: "位於溫哥華 Kitsilano 的優質數位牙科診所，提供中英雙語服務，以現代科技與病患舒適為核心。" },
  "foot.bookSub": { en: "Schedule your visit with our bilingual team in Kitsilano Vancouver.", zh: "歡迎透過電話或線上預約，與我們的中英雙語團隊聯繫。" },
  "foot.copyright": { en: "U-Dental Clinic. All rights reserved.", zh: "U-Dental Clinic 牙醫診所。版權所有。" },
  "foot.webby": { en: "Web Design by", zh: "網站設計：" },
  // tech list intro
  "tech.completeLabel": { en: "Our Equipment", zh: "我們的設備" },
};

// ============= Tech page localized lists =============
export const TECH_STACK = {
  en: [
    { key: "cbct", title: "3D Cone Beam CT (CBCT)", body: "High-resolution 3D imaging that supports accurate diagnosis and digital implant planning." },
    { key: "xguide", title: "X-Guide™ Real-time 3D Surgery", body: "Real-time 3D navigation during implant placement for greater positional accuracy." },
    { key: "scanner", title: "Medit i500 Intra-oral Scanner", body: "Comfortable digital impressions for crowns, Invisalign®, and full digital workflows." },
    { key: "surgery", title: "Exclusive Surgical Room", body: "A dedicated surgical environment designed for medical center-class asepsis quality." },
    { key: "microscope", title: "Leica M320D Dental Microscope", body: "Advanced visualization for restorative, cosmetic and root canal treatment in fine detail." },
    { key: "laser", title: "Sirona Diode LASER", body: "Precision soft-tissue laser used in modern periodontal and surgical procedures." },
  ],
  "zh-Hant": [
    { key: "cbct", title: "3D 錐形束電腦斷層 (CBCT)", body: "高解析度 3D 影像，協助精準診斷與數位植牙規劃。" },
    { key: "xguide", title: "X-Guide™ 即時 3D 導航植牙", body: "植牙手術中即時 3D 導航，大幅提升植體定位精準度。" },
    { key: "scanner", title: "Medit i500 口內 3D 掃描機", body: "舒適的數位印模，支援牙冠、Invisalign 與全數位流程。" },
    { key: "surgery", title: "獨立專屬手術室", body: "達醫學中心等級無菌標準的專屬手術空間。" },
    { key: "microscope", title: "Leica M320D 牙科顯微鏡", body: "為修復、美學與根管治療提供高倍精細視野。" },
    { key: "laser", title: "Sirona 二極體雷射", body: "現代牙周與口腔外科手術常用的精準軟組織雷射。" },
  ],
};

export const TECH_EQUIPMENT = {
  en: [
    "3D Cone Beam Computed Tomography (CBCT)", "Medit i500 intra-oral scanner",
    "X-Guide™ real-time 3D surgical navigator", "Full digital implant workflow",
    "Immediate implants with provisional crowns", "All-on-4 full mouth reconstruction",
    "Invisalign® orthodontic treatment", "German DR.MACH surgical light",
    "Sirona Diode LASER", "Versah crestal sinus lift drill",
    "COLTENE Perfect TSC II electrosurgery system", "Nobel Biocare OsseoSet 200 dental implant system",
    "A-dec / W&H electronic motor handpieces", "GalvoSurge® implant surface care",
    "Bioclear™ matrix restorations", "Leica M320D dental microscope", "BOTOX® clinical treatment",
  ],
  "zh-Hant": [
    "3D 錐形束電腦斷層 (CBCT)", "Medit i500 口內 3D 掃描機",
    "X-Guide™ 即時 3D 導航植牙系統", "全數位植牙流程",
    "即拔即植暨臨時假牙", "All-on-4 全口重建",
    "Invisalign 隱形矯正", "德國 DR.MACH 手術無影燈",
    "Sirona 二極體雷射", "Versah 上顎竇微創提升鑽針",
    "COLTENE Perfect TSC II 電燒系統", "Nobel Biocare OsseoSet 200 植體系統",
    "A-dec / W&H 電動手機系統", "GalvoSurge 植體表面清潔系統",
    "Bioclear 美學樹脂修復", "Leica M320D 牙科顯微鏡", "BOTOX 醫療美容療程",
  ],
};

export const TECH_HIGHER_LIST = {
  en: [
    "Dedicated surgical room separated from general treatment areas",
    "Modern sterilization and infection-control workflows",
    "Designed to support a calm, controlled surgical experience",
    "Advanced imaging and digital planning integrated into every case",
  ],
  "zh-Hant": [
    "獨立於一般診療區的專屬手術房",
    "現代化的消毒與感染控制流程",
    "為病患打造平靜、可控的手術體驗",
    "每個個案皆整合先進影像與數位規劃",
  ],
};

// ============= Legal pages =============
export const PRIVACY_CONTENT = {
  en: {
    updated: "Last updated: January 2025",
    sections: [
      { h: "1. Introduction", p: 'U-Dental Clinic ("we", "our", "us") is committed to protecting the privacy and confidentiality of personal information collected from our patients and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information.' },
      { h: "2. Information We Collect", p: "We may collect personal information including your name, contact details, date of birth, dental and medical history, insurance information, and any other information you choose to provide when scheduling an appointment, completing forms, or communicating with us." },
      { h: "3. How We Use Your Information", p: "Your information is used to provide dental care, communicate appointment reminders, process insurance claims, comply with legal and regulatory requirements, and to improve our services. We do not sell your personal information." },
      { h: "4. Disclosure of Information", p: "Personal information may be disclosed to dental specialists involved in your care, insurance providers (with consent), or as required by law. All third parties are expected to maintain confidentiality consistent with applicable privacy legislation." },
      { h: "5. Safeguards", p: "We use physical, organizational, and technological safeguards to protect personal information against loss, theft, unauthorized access, disclosure, copying, use, or modification." },
      { h: "6. Your Rights", p: "You have the right to access and request corrections to your personal information held by U-Dental Clinic. To make a request, please contact our office." },
      { h: "7. Website & Cookies", p: "Our website may use cookies and analytics tools to understand how visitors use the site and to improve user experience. You may disable cookies in your browser settings." },
      { h: "8. Contact Us", p: "For questions or concerns about this Privacy Policy, please contact U-Dental Clinic at info@u-dental.ca or 604-423-3839." },
    ],
  },
  "zh-Hant": {
    updated: "最後更新：2025 年 1 月",
    sections: [
      { h: "1. 前言", p: "U-Dental 牙醫診所（以下稱「我們」）致力於保護病患與網站訪客個人資料的隱私與機密性。本隱私權政策說明我們如何蒐集、使用、揭露與保護您的個人資料。" },
      { h: "2. 我們蒐集的資料", p: "我們可能蒐集的個人資料包含：姓名、聯絡方式、出生日期、牙科與健康病史、保險資訊，以及您於預約、填寫表單或與我們聯繫時主動提供的其他資訊。" },
      { h: "3. 資料的使用方式", p: "您的個人資料將用於提供牙科照護、發送預約提醒、處理保險申請、遵循相關法規，以及改善我們的服務。我們不會出售您的個人資料。" },
      { h: "4. 資料揭露", p: "個人資料可能於必要時揭露給參與您治療的牙科專科醫師、經您同意的保險公司，或依法律要求的對象。所有第三方皆須依適用之隱私法規維護保密義務。" },
      { h: "5. 資料保護措施", p: "我們採取實體、組織與技術上的保護措施，防止個人資料遭遺失、盜竊、未授權存取、揭露、複製、使用或修改。" },
      { h: "6. 您的權利", p: "您有權存取並要求更正 U-Dental 所持有的您個人資料。如需提出申請，請與我們聯繫。" },
      { h: "7. 網站與 Cookies", p: "本網站可能使用 Cookies 與分析工具，以了解訪客的使用情況並改善使用體驗。您可於瀏覽器設定中停用 Cookies。" },
      { h: "8. 聯繫我們", p: "如對本隱私權政策有任何疑問，請來信 info@u-dental.ca 或致電 604-423-3839 與 U-Dental 聯繫。" },
    ],
  },
};

export const TERMS_CONTENT = {
  en: {
    updated: "Last updated: January 2025",
    sections: [
      { h: "1. Acceptance of Terms", p: "By accessing and using the U-Dental Clinic website, you accept and agree to be bound by these Terms of Service and our Privacy Policy." },
      { h: "2. Use of Website", p: "The content on this website is provided for general information about our dental services. It does not constitute medical or dental advice. Please consult with one of our dentists for diagnosis or treatment recommendations." },
      { h: "3. Intellectual Property", p: "All content on this website, including text, images, logos, and graphics, is the property of U-Dental Clinic or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or modify any content without prior written consent." },
      { h: "4. Appointments & Communications", p: "Appointment requests submitted through this website are not confirmed until our team contacts you directly. Please do not include sensitive medical information in online forms or unsecured email." },
      { h: "5. Third-Party Links", p: "Our website may contain links to third-party websites. U-Dental Clinic is not responsible for the content or practices of those external sites." },
      { h: '6. Disclaimer of Warranties', p: 'This website is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free of viruses.' },
      { h: "7. Limitation of Liability", p: "U-Dental Clinic shall not be liable for any damages arising from the use of, or the inability to use, this website." },
      { h: "8. Changes to Terms", p: "We reserve the right to update or modify these Terms of Service at any time without prior notice. Continued use of the website constitutes acceptance of any changes." },
      { h: "9. Contact", p: "For questions regarding these terms, please contact U-Dental Clinic at info@u-dental.ca or 604-423-3839." },
    ],
  },
  "zh-Hant": {
    updated: "最後更新：2025 年 1 月",
    sections: [
      { h: "1. 條款同意", p: "當您使用 U-Dental 牙醫診所網站時，即表示您同意並遵守本服務條款及隱私權政策。" },
      { h: "2. 網站使用", p: "本網站內容僅提供 U-Dental 牙科服務之一般資訊，並不構成醫療或牙科診斷建議。實際治療建議請於診所與醫師諮詢。" },
      { h: "3. 智慧財產權", p: "本網站所有內容（包含文字、圖片、商標與圖形）皆為 U-Dental 或授權方所有，受著作權與商標法保護。未經事先書面同意，不得重製、散布或修改任何內容。" },
      { h: "4. 預約與聯繫", p: "透過本網站送出的預約申請，須經本院團隊主動聯繫後始為確認。請勿於線上表單或未加密電郵中提供敏感醫療資訊。" },
      { h: "5. 第三方連結", p: "本網站可能包含第三方網站連結。U-Dental 不對外部網站之內容或作為負責。" },
      { h: "6. 免責聲明", p: "本網站以「現狀」提供，不附帶任何明示或默示保證。我們不保證本網站不中斷、不出現錯誤或不含病毒。" },
      { h: "7. 責任限制", p: "U-Dental 對於因使用或無法使用本網站所引起之任何損害，概不負責。" },
      { h: "8. 條款變更", p: "我們保留隨時修改本服務條款之權利，恕不另行通知。您持續使用本網站即視為同意任何變更。" },
      { h: "9. 聯繫我們", p: "如對本條款有任何疑問，請來信 info@u-dental.ca 或致電 604-423-3839 與 U-Dental 聯繫。" },
    ],
  },
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
