export type FAQ = { q: string; a: string; category: string };

export const FAQS: FAQ[] = [
  // Dental Implants
  { category: "Dental Implants", q: "How long do dental implants last?", a: "With proper care, dental implants can last decades. The titanium implant fuses with the jawbone (osseointegration), and the supporting crown is typically replaced after many years of normal wear." },
  { category: "Dental Implants", q: "Is dental implant surgery painful?", a: "Most patients report little discomfort. The procedure is performed under local anesthesia and at U-Dental we use X-Guide real-time 3D navigation, which supports precise, controlled placement and helps minimize tissue trauma." },
  { category: "Dental Implants", q: "Am I a candidate for dental implants?", a: "Most adults with adequate bone volume and healthy gums are candidates. We confirm this with a 3D CBCT scan and a comprehensive consultation before recommending a treatment plan." },

  // All-on-4
  { category: "All-on-4", q: "What is All-on-4?", a: "All-on-4 is a full-arch restoration concept that replaces an entire upper or lower set of teeth using just four strategically placed implants — providing a fixed, stable alternative to traditional dentures." },
  { category: "All-on-4", q: "How long does the All-on-4 process take?", a: "Most patients leave with a fixed temporary set of teeth on the day of surgery. The final prosthesis is delivered after healing, typically 3–6 months later." },

  // Invisalign
  { category: "Invisalign", q: "How long does Invisalign treatment take?", a: "Most cases complete in 6–18 months depending on complexity. We confirm the timeline with a digital ClinCheck plan during your consultation." },
  { category: "Invisalign", q: "Do I need attachments?", a: "Many cases benefit from small tooth-colored attachments that help the aligners apply more controlled forces. They are removed at the end of treatment." },
  { category: "Invisalign", q: "How many hours per day must I wear my aligners?", a: "20–22 hours per day for predictable results — only removing them to eat, drink anything other than water, and brush." },

  // Cosmetic
  { category: "Cosmetic Dentistry", q: "What is digital smile design?", a: "We use intraoral scans and digital previews so you can see a proposed smile before any treatment begins, allowing collaborative planning between you and your dentist." },
  { category: "Cosmetic Dentistry", q: "Veneers vs Bioclear — which is right for me?", a: "Veneers are excellent for full smile makeovers; Bioclear is a minimally invasive composite technique ideal for closing black triangles or rebuilding worn teeth without removing healthy structure." },

  // Recovery
  { category: "Recovery & Aftercare", q: "What should I expect after implant surgery?", a: "Mild swelling and tenderness for 2–3 days is normal. You'll receive detailed aftercare instructions and a follow-up plan to monitor healing." },
  { category: "Recovery & Aftercare", q: "When can I return to work after a procedure?", a: "Most patients return to work the next day. More complex surgeries may benefit from 1–2 days of rest." },

  // Sedation
  { category: "Sedation & Anxiety", q: "Do you offer sedation for anxious patients?", a: "Yes. We offer conscious sedation options and can coordinate treatment under general anesthesia for select cases. Speak with our team about your comfort needs." },

  // Insurance
  { category: "Insurance & Payment", q: "Do you accept dental insurance?", a: "We accept most major dental insurance plans and offer direct billing where available. Our front desk can help verify your coverage before treatment." },
  { category: "Insurance & Payment", q: "Are payment plans available?", a: "Yes — we offer flexible financing options for larger treatment plans. Please ask during your consultation." },

  // Emergency
  { category: "Emergency Dentistry", q: "What counts as a dental emergency?", a: "Severe pain, swelling, dental trauma, knocked-out teeth, or a lost restoration are all reasons to call us right away. We do our best to see urgent patients the same day." },

  // Consultation
  { category: "Consultation Process", q: "What happens at my first visit?", a: "A comprehensive exam with digital imaging, an honest discussion of your goals, and a tailored treatment plan with transparent cost estimates." },

  // Technology
  { category: "Technology", q: "What is X-Guide implant surgery?", a: "X-Guide is a real-time 3D navigation system — like GPS for implant placement — that guides the surgeon to the exact planned implant position with sub-millimeter accuracy." },
  { category: "Technology", q: "Why does digital dentistry matter?", a: "Digital scans, 3D imaging, and guided workflows improve accuracy, comfort, and predictability — and let you see your treatment plan before it begins." },
];

export const HOME_FAQS = FAQS.slice(0, 3).map((f, i) => ({ ...f, id: `faq-${i}` }));
