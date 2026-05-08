import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact U-Dental Clinic | Book an Appointment in Kitsilano Vancouver" },
      { name: "description", content: "Contact U-Dental Clinic to book your visit. English and Mandarin support. Call 604-423-3839 or send us a message." },
      { property: "og:title", content: "Contact U-Dental Clinic" },
      { property: "og:description", content: "Book your appointment in Kitsilano Vancouver — English & Mandarin support." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="gradient-hero text-white">
        <div className="container-x section-y">
          <p className="text-primary font-bold uppercase text-sm tracking-wider">Contact</p>
          <h1 className="mt-3 text-5xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl">Book your visit at U-Dental Clinic.</h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl">
            English and Mandarin support, modern digital dentistry, and a comfortable patient experience in Kitsilano Vancouver.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold">Get in touch</h2>
              <p className="mt-3 text-muted-foreground">We typically respond within one business day.</p>
            </div>
            <div className="space-y-5 text-lg">
              <div className="flex gap-4"><MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" /><span>{SITE.address}</span></div>
              <div className="flex gap-4"><Phone className="h-6 w-6 text-primary shrink-0 mt-0.5" /><a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></div>
              <div className="flex gap-4"><Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" /><a href={SITE.emailHref} className="hover:text-primary">{SITE.email}</a></div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1 text-base">
                  {SITE.hours.map((h) => (
                    <div key={h.d}><span className="font-semibold">{h.d}:</span> <span className="text-muted-foreground">{h.t}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                title="U-Dental Clinic Map"
                src="https://www.google.com/maps?q=2933+West+Broadway+Vancouver&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl bg-card border border-border shadow-elevated p-7 lg:p-10 space-y-5"
            >
              <h2 className="text-2xl font-extrabold">Request an appointment</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" required><input required className="input" /></Field>
                <Field label="Your Email" required><input required type="email" className="input" /></Field>
                <Field label="Phone"><input className="input" type="tel" /></Field>
                <Field label="Preferred Language">
                  <select className="input">
                    <option>English</option>
                    <option>Mandarin</option>
                  </select>
                </Field>
              </div>
              <Field label="Treatment Interest">
                <select className="input">
                  <option>General Appointment</option>
                  <option>Dental Cleaning</option>
                  <option>Emergency</option>
                  <option>Dental Implants</option>
                  <option>Invisalign</option>
                  <option>Wisdom Tooth Extraction</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Your Message">
                <textarea rows={5} className="input resize-none" />
              </Field>
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full gradient-accent text-primary-foreground px-7 py-4 font-semibold shadow-glow hover:scale-[1.01] transition">
                <Send className="h-4 w-4" /> Send Request
              </button>
              {submitted && (
                <p className="text-sm text-primary font-semibold">
                  Thank you — please call {SITE.phone} to confirm your appointment, or we'll reach out shortly.
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                By submitting this form you agree to be contacted regarding your inquiry. For urgent dental needs, please call us directly.
              </p>
            </form>
          </div>
        </div>
      </section>

      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.95rem;outline:none;transition:border-color .15s;}.input:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in oklab, var(--primary) 15%, transparent);}`}</style>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold mb-1.5 block">{label}{required && <span className="text-primary"> *</span>}</span>
      {children}
    </label>
  );
}
