export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMin: number;
  image: string;
  date: string;
  body: { heading?: string; paragraphs?: string[]; list?: string[] }[];
  faqs?: { q: string; a: string }[];
  related?: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "all-on-4-vs-traditional-implants",
    title: "All-on-4 vs Traditional Dental Implants: Which Option Is Right for You?",
    excerpt: "A clear, side-by-side look at All-on-4 full-arch restoration and traditional individual implants — costs, timelines, candidacy, and outcomes.",
    category: "Dental Implants",
    readMin: 8,
    image: "/featured/all-on-4.jpg",
    date: "2026-04-12",
    body: [
      { paragraphs: ["For patients facing the loss of multiple teeth, modern dentistry offers two leading paths: All-on-4 full-arch restoration or a series of individual dental implants. Both options can deliver a permanent, natural-feeling smile — but they take different routes to get there."] },
      { heading: "What is All-on-4?", paragraphs: ["All-on-4 is a full-arch restoration concept that replaces an entire upper or lower set of teeth using just four strategically angled implants. The technique was developed to maximize bone contact while minimizing the need for grafting."] },
      { heading: "What are traditional individual implants?", paragraphs: ["Traditional implant treatment places one titanium implant per missing tooth (or one implant supporting a small bridge). It is the gold standard when only a few teeth are missing and the surrounding bone is healthy."] },
      { heading: "Comparing the two approaches", list: [
        "Number of implants: All-on-4 uses 4 implants per arch; traditional uses 6–8+.",
        "Treatment time: All-on-4 often delivers a same-day fixed temporary; traditional may take several months per implant.",
        "Bone requirement: All-on-4 angled posterior implants often avoid bone grafting; traditional may require it.",
        "Cost: All-on-4 has a higher upfront cost than a single implant but is typically less than restoring an entire arch tooth-by-tooth.",
        "Maintenance: Both require excellent home care and regular professional cleanings.",
      ]},
      { heading: "Who is the ideal candidate?", paragraphs: ["All-on-4 suits patients missing most or all teeth in an arch, or those whose remaining teeth have a poor long-term prognosis. Traditional implants are ideal when only one or a few teeth are missing and the bite is otherwise stable."] },
      { heading: "Recovery expectations", paragraphs: ["Most All-on-4 patients leave with fixed temporary teeth the same day and resume soft-food eating within a week. Single implants typically heal for 3–6 months before a final crown is placed."] },
    ],
    faqs: [
      { q: "Is All-on-4 permanent?", a: "Yes — the implants are designed to be permanent. The prosthesis attached to them may be refreshed after years of wear." },
      { q: "Can All-on-4 fail?", a: "Implant failure is uncommon but possible. Smoking, uncontrolled diabetes, and poor home care are the main risk factors." },
    ],
    related: ["x-guide-implant-accuracy", "implant-vs-bridge"],
  },
  {
    slug: "what-to-expect-during-invisalign",
    title: "What to Expect During Invisalign Treatment: Timeline, Attachments, and Results",
    excerpt: "A complete walkthrough of the Invisalign journey — from your first scan to retainers — including timelines, attachments, and how to maximize results.",
    category: "Invisalign",
    readMin: 7,
    image: "/featured/invisalign.jpg",
    date: "2026-03-28",
    body: [
      { paragraphs: ["Invisalign has become the most popular discreet alternative to traditional braces. But what does treatment actually look like, week by week?"] },
      { heading: "Step 1 — Digital scan & ClinCheck", paragraphs: ["We capture a 3D intraoral scan and design your full tooth movement plan. You'll preview your final smile before treatment begins."] },
      { heading: "Step 2 — Attachments", paragraphs: ["Most cases use small tooth-colored attachments bonded to specific teeth. They give the aligners precise grip to perform rotations and extrusions that aligners alone cannot achieve."] },
      { heading: "Step 3 — Aligner wear", paragraphs: ["Each set is worn 20–22 hours per day, typically changed every 7–10 days. You only remove them to eat, drink anything other than water, and brush."] },
      { heading: "Step 4 — Refinements", paragraphs: ["Around the end of your initial trays, we re-scan and order a short series of refinement aligners to perfect the final result."] },
      { heading: "Step 5 — Retainers", paragraphs: ["Retention is forever. Nightly retainer wear protects your investment for life."] },
    ],
    faqs: [
      { q: "How long does Invisalign take?", a: "Most cases finish in 6–18 months depending on complexity." },
      { q: "Will I have a lisp?", a: "Some patients notice a brief adaptation period of a few days." },
    ],
    related: ["choose-cosmetic-dentist-vancouver"],
  },
  {
    slug: "x-guide-implant-accuracy",
    title: "How X-Guide Technology Improves Implant Accuracy",
    excerpt: "X-Guide brings real-time 3D navigation — like GPS — to dental implant surgery. Here's how it changes outcomes for patients.",
    category: "Technology",
    readMin: 6,
    image: "/featured/x-guide.jpg",
    date: "2026-03-10",
    body: [
      { paragraphs: ["Traditionally, implant surgeons relied on freehand placement guided by experience and 2D X-rays. X-Guide adds a real-time 3D navigation layer — essentially a GPS for implant surgery."] },
      { heading: "How it works", paragraphs: ["A pre-surgical CBCT scan is used to plan the exact implant position. During surgery, the X-Guide system tracks the drill in real time and overlays its position on the 3D plan, with sub-millimeter feedback."] },
      { heading: "Why accuracy matters", list: [
        "Better aesthetic outcomes — implants emerge exactly where the future crown should be.",
        "Avoidance of vital structures like nerves and sinuses.",
        "Smaller, less invasive surgical access.",
        "Faster healing and predictable restoration design.",
      ]},
      { heading: "Who benefits most?", paragraphs: ["Patients receiving multiple implants, anterior (front) implants, full-arch reconstructions, or those with limited bone volume see the largest benefits from guided surgery."] },
    ],
    related: ["all-on-4-vs-traditional-implants", "benefits-of-digital-dentistry"],
  },
  {
    slug: "benefits-of-digital-dentistry",
    title: "The Benefits of Digital Dentistry for Modern Patients",
    excerpt: "From intraoral scanners to 3D-printed restorations, digital workflows are quietly transforming the patient experience.",
    category: "Technology",
    readMin: 6,
    image: "/equipment/tech-cbct.jpg",
    date: "2026-02-22",
    body: [
      { paragraphs: ["Digital dentistry replaces many uncomfortable analog steps — gooey impression materials, guesswork, repeat visits — with precise, fast, and visual workflows."] },
      { heading: "Intraoral scanning", paragraphs: ["A small wand captures a 3D model of your teeth in minutes. No trays, no gagging, and far better accuracy."] },
      { heading: "3D imaging (CBCT)", paragraphs: ["Cone-beam CT lets us visualize bone, nerves, and sinuses in three dimensions before any surgical planning."] },
      { heading: "Guided surgery", paragraphs: ["Treatment plans designed in software are executed in the mouth using surgical guides or X-Guide navigation."] },
      { heading: "What patients notice", list: [
        "Shorter, more comfortable visits.",
        "Fewer revisions and remakes.",
        "Predictable, previewable outcomes.",
      ]},
    ],
    related: ["x-guide-implant-accuracy"],
  },
  {
    slug: "implant-vs-bridge",
    title: "When Is a Dental Implant Better Than a Bridge?",
    excerpt: "Both replace missing teeth — but they age very differently. Here's how to choose between an implant and a fixed bridge.",
    category: "Dental Implants",
    readMin: 5,
    image: "/featured/dental-implants.jpg",
    date: "2026-02-05",
    body: [
      { paragraphs: ["For a single missing tooth, dentists usually present two options: a dental implant or a traditional fixed bridge. Both restore chewing function — but the long-term picture is very different."] },
      { heading: "How a bridge works", paragraphs: ["The two adjacent teeth are reduced to support crowns connected to a fake tooth in the middle. Treatment is completed in a few weeks."] },
      { heading: "How an implant works", paragraphs: ["A titanium post is placed into the jawbone, healed for several months, then restored with a single crown — without touching the neighboring teeth."] },
      { heading: "Why implants usually win long-term", list: [
        "Adjacent healthy teeth are preserved.",
        "Bone is preserved through implant stimulation.",
        "Easier to clean — floss normally between teeth.",
        "Often outlasts bridges by decades.",
      ]},
      { heading: "When a bridge still makes sense", paragraphs: ["When neighboring teeth already need crowns, when bone volume is severely deficient and grafting is declined, or when speed is the priority, a bridge can still be the right choice."] },
    ],
    related: ["all-on-4-vs-traditional-implants"],
  },
  {
    slug: "choose-cosmetic-dentist-vancouver",
    title: "How to Choose the Right Cosmetic Dentist in Vancouver",
    excerpt: "Cosmetic dentistry is part artistry, part precision engineering. Here's what to look for when choosing a clinic for your smile.",
    category: "Cosmetic Dentistry",
    readMin: 6,
    image: "/featured/cosmetics.jpg",
    date: "2026-01-18",
    body: [
      { paragraphs: ["Cosmetic dentistry is one of the most personal investments you can make. Here are the questions that matter when choosing a clinic in Vancouver."] },
      { heading: "1. Look for a digital workflow", paragraphs: ["A modern cosmetic clinic should offer digital smile design, intraoral scanning, and a clear visual preview of the proposed result."] },
      { heading: "2. Ask about technique breadth", paragraphs: ["Veneers, Bioclear, microscopic dentistry, and orthodontics each solve different problems. The right dentist will recommend the most conservative option that meets your goals."] },
      { heading: "3. Review before-and-after work", paragraphs: ["Look for cases similar to your own — the same age range, tooth shape, and complexity."] },
      { heading: "4. Confirm continuity of care", paragraphs: ["Make sure the same clinic can handle hygiene, restorations, and any future needs — not just the cosmetic procedure."] },
      { heading: "5. Trust the consultation", paragraphs: ["A premium clinic will take the time to listen first, then recommend treatment — never the other way around."] },
    ],
    related: ["what-to-expect-during-invisalign", "benefits-of-digital-dentistry"],
  },
];
