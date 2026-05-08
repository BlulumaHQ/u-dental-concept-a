import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | U-Dental Clinic" },
      { name: "description", content: "Privacy Policy for U-Dental Clinic — how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy | U-Dental Clinic" },
      { property: "og:description", content: "How U-Dental Clinic collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we collect, use, and protect your personal information." />
      <section className="section-y">
        <div className="container-x max-w-3xl prose-style">
          <p className="text-muted-foreground">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            U-Dental Clinic ("we", "our", "us") is committed to protecting the privacy and confidentiality of personal information collected from our patients and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may collect personal information including your name, contact details, date of birth, dental and medical history, insurance information, and any other information you choose to provide when scheduling an appointment, completing forms, or communicating with us.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information is used to provide dental care, communicate appointment reminders, process insurance claims, comply with legal and regulatory requirements, and to improve our services. We do not sell your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. Disclosure of Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Personal information may be disclosed to dental specialists involved in your care, insurance providers (with consent), or as required by law. All third parties are expected to maintain confidentiality consistent with applicable privacy legislation.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. Safeguards</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use physical, organizational, and technological safeguards to protect personal information against loss, theft, unauthorized access, disclosure, copying, use, or modification.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to access and request corrections to your personal information held by U-Dental Clinic. To make a request, please contact our office.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">7. Website &amp; Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may use cookies and analytics tools to understand how visitors use the site and to improve user experience. You may disable cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions or concerns about this Privacy Policy, please contact U-Dental Clinic at info@u-dental.ca or 604-423-3839.
          </p>
        </div>
      </section>
    </>
  );
}
