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
    image: "/services/dental-implants.png",
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
    image: "/services/orthodontics.png",
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
    image: "/services/wisdom-tooth.png",
    intro: "Wisdom teeth can cause discomfort, crowding, or infection when they don't have enough room to emerge properly. Our team provides careful evaluation and removal when needed.",
    benefits: ["Helps relieve crowding-related discomfort", "Designed to support comfortable recovery", "Modern surgical environment"],
    when: ["Pain or pressure at the back of the mouth", "Impacted wisdom teeth", "Recurring infection or swelling"],
  },
  {
    slug: "cosmetics-and-comprehensive-dentistry",
    name: "Cosmetic & Comprehensive Dentistry",
    short: "Digital smile planning and comprehensive treatment design.",
    category: "cosmetic",
    image: "/services/cosmetics.png",
    intro: "Cosmetic and comprehensive dentistry combines aesthetic improvements with functional treatment planning, supported by digital workflows.",
    benefits: ["Digital smile planning", "Coordinated treatment approach", "Aesthetic and functional balance"],
    when: ["Patients seeking smile improvement", "Multiple treatment needs", "Long-term planning"],
  },
  {
    slug: "dental-cleaning",
    name: "Dental Cleaning",
    short: "Preventive care and periodontal health support.",
    category: "general",
    image: "/services/dental-cleaning.png",
    intro: "Regular cleanings help support healthy teeth and gums by removing plaque and tartar that brushing alone may miss.",
    benefits: ["Helps support gum health", "Removes plaque and tartar", "Opportunity for early issue detection"],
    when: ["Routine preventive visits", "Gum health concerns"],
  },
  {
    slug: "emergency",
    name: "Emergency",
    short: "Pain relief and dental trauma support when you need it most.",
    category: "general",
    image: "/services/emergency.png",
    intro: "Dental emergencies can happen unexpectedly. Contact our clinic to discuss urgent dental concerns.",
    benefits: ["Prompt evaluation", "Focus on pain relief and stabilization", "Treatment planning for next steps"],
    when: ["Sudden dental pain", "Dental trauma or injury", "Lost or broken restoration"],
  },
  {
    slug: "restorations",
    name: "Restorations",
    short: "Repairing function and esthetics with modern restorative dentistry.",
    category: "general",
    image: "/services/restorations.png",
    intro: "Restorations help repair teeth affected by decay, wear, or damage, restoring both form and function.",
    benefits: ["Restores tooth function", "Aesthetic, tooth-colored options", "Supports long-term oral health"],
    when: ["Cavities or decay", "Worn or chipped teeth", "Replacing old restorations"],
  },
  {
    slug: "crown-and-bridges",
    name: "Crown and Bridges",
    short: "Restoring damaged or missing tooth structure.",
    category: "general",
    image: "/services/crown-bridges.png",
    intro: "Crowns and bridges are restorative options that help rebuild damaged teeth or replace missing teeth using natural-looking materials.",
    benefits: ["Restores tooth structure", "Bridges replace missing teeth", "Designed to support function and esthetics"],
    when: ["Heavily damaged tooth", "Following root canal treatment", "Missing teeth needing fixed replacement"],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    short: "Treatment when a tooth's pulp is damaged or infected.",
    category: "general",
    image: "/services/root-canal.png",
    intro: "Root canal treatment helps preserve a natural tooth when its inner pulp tissue has become damaged or infected.",
    benefits: ["Helps preserve the natural tooth", "Designed to support comfort", "Modern endodontic techniques"],
    when: ["Severe tooth pain", "Sensitivity that lingers", "Deep decay or trauma"],
  },
  {
    slug: "denture",
    name: "Denture",
    short: "Tooth replacement for multiple missing teeth.",
    category: "replacement",
    image: "/services/denture.png",
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

export const FEATURED_TREATMENTS: { slug: string; title: string; image: string; tagline: string }[] = [
  { slug: "dental-implants", title: "Dental Implants", image: "/featured/dental-implants.jpg", tagline: "Digitally planned, precisely placed." },
  { slug: "all-on-4", title: "All-on-4", image: "/featured/all-on-4.jpg", tagline: "Full-arch restoration in a single workflow." },
  { slug: "invisalign", title: "Invisalign", image: "/featured/invisalign.jpg", tagline: "Discreet, custom-planned aligners." },
  { slug: "x-guide-real-time-3d-guidance-surgery", title: "X-Guide Implant Surgery", image: "/featured/x-guide.jpg", tagline: "Real-time 3D guided precision." },
  { slug: "cosmetics-and-comprehensive-dentistry", title: "Cosmetic & Comprehensive Dentistry", image: "/featured/cosmetics.jpg", tagline: "Smile design with a digital workflow." },
];

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

export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  photo: string;
  specialties: string[];
  summary: string;
  bio: string[];
  related: string[]; // service slugs
};

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-joyce-wu",
    name: "Dr. Joyce Wu",
    credentials: "DDS",
    photo: "https://u-dental.ca/wp-content/uploads/2018/12/Dr.-Joyce-Wu-3.jpg",
    specialties: ["General Dentistry", "Orthodontics & Invisalign", "Botox"],
    summary: "Certified in both Taiwan and Canada, with decades of considerate, comprehensive general and orthodontic care in Vancouver.",
    bio: [
      "Dr. Joyce Wu graduated from National Yang-Ming Medical University in Taipei, Taiwan in 1992 and completed her general dentistry training at Taipei Veteran General Hospital. During her time at VGHTPE, she mastered her clinical dentistry skills and became a certified clinical instructor at the VGHTPE Faculty of Dentistry.",
      "Dr. Wu immigrated to Canada in 1997, bringing with her an extensive skill set in general dentistry. She passed the Canadian National Dental Examining Board soon after. As one of the few dentists certified in both Taiwan and Canada, Dr. Wu has since established her reputation in Vancouver through considerate care and exceptional clinical skills. For the past 20 years, “Joyce Wu Dental” has become the first choice of many patients in Metro Vancouver, with her patient loyalty transcending the physical distance of her offices. With Dr. Joyce Wu in U-Dental group, we will surely provide comprehensive and high quality care for people in Vancouver.",
    ],
    related: ["orthodontics", "invisalign", "botox", "dental-cleaning"],
  },
  {
    slug: "dr-lo-lin-tsai",
    name: "Dr. Lo-Lin Tsai",
    credentials: "DDS, M Sc, PhD",
    photo: "/doctors/lo-lin-tsai.webp",
    specialties: ["Oral Surgery", "Dental Implants", "Wisdom Tooth Extraction"],
    summary: "Oral & maxillofacial surgery specialist with 20,000+ wisdom tooth extractions and 5,000+ implant cases.",
    bio: [
      "Dr. Lo-Lin Tsai graduated dental school in 2000, completed the 3-year-period oral maxillofacial surgery training at Taiwan’s top medical center, and became the youngest oral maxillofacial surgery specialist in Taiwan’s history. Over the years, he has strived to make progress in his career and in the field of dentistry as a whole. In 2014, Dr. Tsai was promoted to be an associate professor at dental school, and he was also honored as an instructor of PhD students in 2017.",
      "Dr. Tsai is renowned for his superb surgical skill. To this day, Dr. Tsai has executed more than 20,000 cases of wisdom teeth extraction and over 5,000 cases of dental implant surgeries. Dr. Tsai was also the pioneering surgeon of All-on-4 zygoma implant full arch reconstruction in Taiwan in 2012. With extraordinary achievement in clinical practice, he immigrated to Canada in 2015 and passed the National Dental Examining Board of Canada. Now, he is committed to providing exceptional service and care for his patients in Taiwan and Metro Vancouver alike.",
    ],
    related: ["oral-surgery", "dental-implants", "all-on-4", "wisdom-tooth-extraction"],
  },
  {
    slug: "dr-clair-wang",
    name: "Dr. Claire Wang",
    credentials: "DDS",
    photo: "/doctors/clair-wang.webp",
    specialties: ["Family Dentistry", "Cosmetic Dentistry", "Prosthodontics", "Invisalign"],
    summary: "Warm, gentle family dentist and Invisalign Preferred Provider, certified in conscious sedation and laser dentistry.",
    bio: [
      "Dr. Claire Wang is the doctor in charge of “Just Smiles”, a well-known dental clinic in Surrey. After obtaining her Bachelor of Science degree with Honours in Biochemistry at the University of British Columbia, she earned her Doctor of Dental Surgery at the University of Western Ontario, and graduated with Dean’s Honours.",
      "Dr. Wang provides full-service family dentistry for patients of all ages. She has a warm, caring and gentle personality which puts children and anxious patients at ease. She understands the importance of open communication and is always driven to deliver the highest quality of care. Dr. Wang maintains her skills by spending countless hours in continuous education. She has obtained an Associate Fellowship at the World Clinical Laser Institute, she is certified in conscious sedation and she is a Preferred Provider of Invisalign. Dr. Wang is also a part-time clinical instructor at the UBC Faculty of Dentistry.",
    ],
    related: ["cosmetics-and-comprehensive-dentistry", "invisalign", "crown-and-bridges", "dental-cleaning"],
  },
  {
    slug: "dr-edward-cheng",
    name: "Dr. Edward Cheng",
    credentials: "DMD",
    photo: "/doctors/edward-cheng.webp",
    specialties: ["General Dentistry", "Dental Emergency", "Prosthodontics", "Treatment under General Anesthesia"],
    summary: "UBC graduate known for affable service and experienced in dental treatment under general anesthesia for anxious or pediatric patients.",
    bio: [
      "Dr. Edward Cheng graduated from University of British Columbia, followed by his residency in New York’s St. Barnabas hospital, and now practices as a general dentist in metro Vancouver, centered in Burnaby. For many years, Dr. Cheng is well known for his affable service and smooth communication with patients.",
      "For children with dental phobia or those who exhibit uncooperative behavior, Dr. Cheng is experienced in performing dental treatment under general anesthesia in conjunction with the anesthetic team. Today, Dr. Cheng is one of our core members in U-Dental, providing friendly and top quality dental services to all his patients.",
    ],
    related: ["emergency", "crown-and-bridges", "restorations", "dental-cleaning"],
  },
  {
    slug: "dr-yu-ting-liao-dds",
    name: "Dr. Yu-Ting Liao",
    credentials: "DDS",
    photo: "https://u-dental.ca/wp-content/uploads/2018/12/fig7.png",
    specialties: ["Microscopic Dentistry", "Cosmetic Dentistry", "Bioclear", "Root Canal Treatment"],
    summary: "Microscope-enhanced cosmetic dentist specializing in restoration, root canal therapy and digital smile design.",
    bio: [
      "Dr. Liao graduated from Taipei Medical University in 2015. She has great passion on cosmetic dentistry and restoration. After many advanced international courses, she became a member of the Taiwan Academy of Aesthetics Dentistry and the Taiwan Academy of Microscopes-enhanced Aesthetic Dentistry.",
      "With her own dental microscope, she specializes in dental restoration and root canal therapy, which makes precise treatment in details possible. Dr. Liao also has a great sense of aesthetic and is well experienced in digital flow for smile design. Her passion in dental learning continues keeping her skill and knowledge progressing.",
    ],
    related: ["root-canal-treatment", "restorations", "cosmetics-and-comprehensive-dentistry"],
  },
  {
    slug: "dr-ivan-kahn-dds",
    name: "Dr. Ivan Kahn",
    credentials: "DDS",
    photo: "/doctors/ivan-kahn.webp",
    specialties: ["Aesthetic Dentistry", "Prosthodontics"],
    summary: "Practicing in Canada since 1998 with advanced training in soft-tissue diode laser, smile design, Invisalign and Botox.",
    bio: [
      "Dr. Ivan Kahn grew up in South Africa, receiving his dental training in Johannesburg. He has been practicing in Canada since 1998. He enjoys all aspects of dentistry, and has done additional studies, such as the use of a soft-tissue diode laser and Aesthetic Dentistry and Smile Design. He was a preferred provider for Invisalign Treatment and did his Botox certification.",
      "Dr. Kahn also has extensive knowledge regarding dental solutions for snoring and sleep apnea through multiple continued education seminars. His extensive experience in the dental industry has given him a unique perspective on the challenges and concerns faced by dental patients.",
    ],
    related: ["cosmetics-and-comprehensive-dentistry", "crown-and-bridges", "invisalign", "botox"],
  },
  {
    slug: "dr-suzanne-carlisle-dmd",
    name: "Dr. Suzanne Carlisle",
    credentials: "DMD",
    photo: "/doctors/suzanne-carlisle.webp",
    specialties: ["General Dentistry", "Oral Oncology Dentistry"],
    summary: "Award-winning UBC Faculty of Dentistry educator providing clinical supervision for the UBC/VGH residency program.",
    bio: [
      "Dr. Suzanne Carlisle is a general dentist who has been honored with several teaching awards from UBC Faculty of Dentistry. She provides clinical supervision for the UBC/VGH residency program every year.",
    ],
    related: ["dental-cleaning", "restorations", "crown-and-bridges"],
  },
];

export const TEAM_INTRO =
  "We are a team of professional dentists fluent in both English and Mandarin, with decades of combined experience. U-Dental brings together advanced digital dentistry, implant and orthodontic technology, and an exclusive surgical room designed to deliver a medical center-class experience.";

