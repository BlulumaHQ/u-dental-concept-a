import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/term-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | U-Dental Clinic" },
      { name: "description", content: "Terms of Service for U-Dental Clinic — please read these terms carefully before using our website." },
      { property: "og:title", content: "Terms of Service | U-Dental Clinic" },
      { property: "og:description", content: "Terms governing the use of U-Dental Clinic's website and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="Please read these terms carefully before using our website." image="/about/about-banner.jpg" />
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="text-muted-foreground">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using the U-Dental Clinic website, you accept and agree to be bound by these Terms of Service and our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Use of Website</h2>
          <p className="text-muted-foreground leading-relaxed">
            The content on this website is provided for general information about our dental services. It does not constitute medical or dental advice. Please consult with one of our dentists for diagnosis or treatment recommendations.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this website, including text, images, logos, and graphics, is the property of U-Dental Clinic or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or modify any content without prior written consent.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. Appointments &amp; Communications</h2>
          <p className="text-muted-foreground leading-relaxed">
            Appointment requests submitted through this website are not confirmed until our team contacts you directly. Please do not include sensitive medical information in online forms or unsecured email.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to third-party websites. U-Dental Clinic is not responsible for the content or practices of those external sites.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free of viruses.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            U-Dental Clinic shall not be liable for any damages arising from the use of, or the inability to use, this website.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to update or modify these Terms of Service at any time without prior notice. Continued use of the website constitutes acceptance of any changes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">9. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions regarding these terms, please contact U-Dental Clinic at info@u-dental.ca or 604-423-3839.
          </p>
        </div>
      </section>
    </>
  );
}
