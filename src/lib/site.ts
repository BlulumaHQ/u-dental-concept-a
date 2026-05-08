export const SITE = {
  name: "U-Dental Clinic",
  phone: "604-423-3839",
  phoneHref: "tel:+16044233839",
  email: "info@u-dental.ca",
  emailHref: "mailto:info@u-dental.ca",
  address: "2933 West Broadway, Vancouver",
  area: "Kitsilano, Vancouver",
  hours: [
    { d: "Mon – Wed", t: "9:30am – 5:30pm" },
    { d: "Thursday", t: "Closed" },
    { d: "Friday", t: "9:30am – 5:30pm" },
    { d: "Saturday", t: "9am – 5pm" },
    { d: "Sunday", t: "Closed" },
  ],
} as const;

export type ServiceItem = {
  slug: string;
  name: string;
  short: string;
  category: "general" | "advanced" | "cosmetic" | "replacement";
  image?: string;
  intro: string;
  benefits: string[];
  when: string[];
  tech?: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "Premium tooth replacement using advanced 3D-guided implant technology.",
    category: "replacement",
    image: "https://u-dental.ca/wp-content/uploads/2020/10/Dental-Implants-img-left.png",
    intro: "Dental implants are a long-lasting option for replacing missing teeth, restoring both function and the natural look of your smile. At U-Dental Clinic we plan implant treatment digitally for precision and comfort.",
    benefits: ["Natural-looking restoration", "Designed to support comfort and function", "Digitally planned for accuracy", "Helps preserve bone and adjacent teeth"],
    when: ["Single or multiple missing teeth", "Loose or failing dentures", "Patients seeking a permanent solution"],
    tech: "Planned with digital scans and supported by X-guide real-time 3D guidance during placement.",
  },
  {
    slug: "all-on-4",
    name: "All-on-4",
    short: "Full-arch tooth replacement supported by four strategically placed implants.",
    category: "replacement",
    intro: "All-on-4 is a full-arch restoration concept that replaces a full set of upper or lower teeth using four implants. It can offer a stable, fixed alternative to traditional dentures.",
    benefits: ["Fixed full-arch restoration", "Designed to support chewing function", "May reduce the need for bone grafting", "Aesthetic, natural-looking result"],
    when: ["Multiple missing teeth in an arch", "Currently wearing loose dentures", "Looking for a fixed long-term solution"],
    tech: "Treatment is planned digitally and supported by guided surgical workflows.",
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    short: "Clear, removable aligners for discreet teeth straightening.",
    category: "cosmetic",
    intro: "Invisalign uses a series of clear, custom aligners to gradually move teeth into a more aligned position — a discreet alternative to traditional braces.",
    benefits: ["Clear and removable", "Designed for comfort", "Easier to clean teeth during treatment", "Custom-planned with digital scans"],
    when: ["Crowded or spaced teeth", "Bite concerns", "Patients wanting a discreet option"],
    tech: "Treatment plans are designed using digital impressions and 3D modeling.",
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    short: "Alignment and bite improvement using modern orthodontic technology.",
    category: "cosmetic",
    intro: "Orthodontic treatment focuses on improving the alignment of teeth and the relationship of the upper and lower jaws.",
    benefits: ["Helps improve bite and alignment", "Supports easier cleaning", "Custom treatment planning"],
    when: ["Crowded teeth", "Spacing issues", "Bite irregularities"],
  },
  {
    slug: "x-guide-real-time-3d-guidance-surgery",
    name: "X-guide Real-time 3D Guidance Surgery",
    short: "Real-time 3D navigation during dental implant placement.",
    category: "advanced",
    intro: "X-guide is a real-time 3D navigation system used during dental implant surgery. It helps the surgical team visualize the planned implant position with greater precision.",
    benefits: ["Real-time 3D navigation", "Helps improve accuracy of placement", "Supports a more controlled surgical workflow"],
    when: ["Patients undergoing dental implant placement", "Complex implant cases requiring precise planning"],
    tech: "Combines pre-surgical digital planning with intra-operative guidance.",
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    short: "Advanced surgical care for the mouth, face, and jaw.",
    category: "advanced",
    intro: "Our exclusive surgical room is designed to provide a medical center-class environment in asepsis quality, supporting a wide range of oral surgical needs.",
    benefits: ["Dedicated surgical room", "Designed to support patient comfort", "Modern surgical workflows"],
    when: ["Complex extractions", "Implant-related surgery", "Other oral surgical needs"],
  },
  {
    slug: "wisdom-tooth-extraction",
    name: "Wisdom Tooth Extraction",
    short: "Care for problematic third molars with a comfort-focused approach.",
    category: "advanced",
    image: "https://u-dental.ca/wp-content/uploads/2020/10/Wisdom-Tooth-Extraction-img-left.png",
    intro: "Wisdom teeth can cause discomfort, crowding, or infection when they don't have enough room to emerge properly. Our team provides careful evaluation and removal when needed.",
    benefits: ["Helps relieve crowding-related discomfort", "Designed to support comfortable recovery", "Modern surgical environment"],
    when: ["Pain or pressure at the back of the mouth", "Impacted wisdom teeth", "Recurring infection or swelling"],
  },
  {
    slug: "cosmetics-and-comprehensive-dentistry",
    name: "Cosmetic & Comprehensive Dentistry",
    short: "Digital smile planning and comprehensive treatment design.",
    category: "cosmetic",
    image: "https://u-dental.ca/wp-content/uploads/2020/10/Cosmetics-and-Comprehensive-img-left.png",
    intro: "Cosmetic and comprehensive dentistry combines aesthetic improvements with functional treatment planning, supported by digital workflows.",
    benefits: ["Digital smile planning", "Coordinated treatment approach", "Aesthetic and functional balance"],
    when: ["Patients seeking smile improvement", "Multiple treatment needs", "Long-term planning"],
  },
  {
    slug: "dental-cleaning",
    name: "Dental Cleaning",
    short: "Preventive care and periodontal health support.",
    category: "general",
    image: "https://u-dental.ca/wp-content/uploads/2020/10/Dental-Cleaning-img-left.png",
    intro: "Regular cleanings help support healthy teeth and gums by removing plaque and tartar that brushing alone may miss.",
    benefits: ["Helps support gum health", "Removes plaque and tartar", "Opportunity for early issue detection"],
    when: ["Routine preventive visits", "Gum health concerns"],
  },
  {
    slug: "emergency",
    name: "Emergency",
    short: "Pain relief and dental trauma support when you need it most.",
    category: "general",
    image: "https://u-dental.ca/wp-content/uploads/2020/10/Emergency-img-left.png",
    intro: "Dental emergencies can happen unexpectedly. Contact our clinic to discuss urgent dental concerns.",
    benefits: ["Prompt evaluation", "Focus on pain relief and stabilization", "Treatment planning for next steps"],
    when: ["Sudden dental pain", "Dental trauma or injury", "Lost or broken restoration"],
  },
  {
    slug: "restorations",
    name: "Restorations",
    short: "Repairing function and esthetics with modern restorative dentistry.",
    category: "general",
    image: "https://u-dental.ca/wp-content/uploads/2020/10/Restorations-img-left.png",
    intro: "Restorations help repair teeth affected by decay, wear, or damage, restoring both form and function.",
    benefits: ["Restores tooth function", "Aesthetic, tooth-colored options", "Supports long-term oral health"],
    when: ["Cavities or decay", "Worn or chipped teeth", "Replacing old restorations"],
  },
  {
    slug: "crown-and-bridges",
    name: "Crown and Bridges",
    short: "Restoring damaged or missing tooth structure.",
    category: "general",
    image: "https://u-dental.ca/wp-content/uploads/2020/10/Crown-and-Bridges-img-left.png",
    intro: "Crowns and bridges are restorative options that help rebuild damaged teeth or replace missing teeth using natural-looking materials.",
    benefits: ["Restores tooth structure", "Bridges replace missing teeth", "Designed to support function and esthetics"],
    when: ["Heavily damaged tooth", "Following root canal treatment", "Missing teeth needing fixed replacement"],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    short: "Treatment when a tooth's pulp is damaged or infected.",
    category: "general",
    intro: "Root canal treatment helps preserve a natural tooth when its inner pulp tissue has become damaged or infected.",
    benefits: ["Helps preserve the natural tooth", "Designed to support comfort", "Modern endodontic techniques"],
    when: ["Severe tooth pain", "Sensitivity that lingers", "Deep decay or trauma"],
  },
  {
    slug: "denture",
    name: "Denture",
    short: "Tooth replacement for multiple missing teeth.",
    category: "replacement",
    intro: "Dentures are removable prosthetics that replace missing teeth and the surrounding tissues, helping restore appearance and oral function.",
    benefits: ["Restores chewing and speaking function", "Custom-made for fit", "Aesthetic appearance"],
    when: ["Multiple missing teeth", "Looking for a removable option"],
  },
  {
    slug: "botox",
    name: "Botox",
    short: "Targeted treatment provided in a clinical dental setting.",
    category: "cosmetic",
    intro: "Botox treatments may be provided in a dental setting for select clinical purposes. Recommendations depend on individual needs — speak with our team for more information.",
    benefits: ["Provided in a clinical environment", "Personalized assessment"],
    when: ["Patients seeking information about clinical treatment options"],
  },
];

export const SERVICE_CATEGORIES = {
  advanced: "Advanced Treatments",
  cosmetic: "Cosmetic & Orthodontic",
  general: "General Dentistry",
  replacement: "Tooth Replacement",
} as const;

export const HIGH_VALUE_SLUGS = [
  "dental-implants",
  "all-on-4",
  "invisalign",
  "x-guide-real-time-3d-guidance-surgery",
  "cosmetics-and-comprehensive-dentistry",
] as const;

export const HERO_IMAGES = [
  "https://u-dental.ca/wp-content/uploads/2020/10/Dark3-1.jpg",
  "https://u-dental.ca/wp-content/uploads/2020/10/Dark3-2-2.jpg",
  "https://u-dental.ca/wp-content/uploads/2020/10/Dark3-3.jpg",
  "https://u-dental.ca/wp-content/uploads/2020/10/Dark3-4-1.jpg",
  "https://u-dental.ca/wp-content/uploads/2020/10/Dark3-5.jpg",
];
