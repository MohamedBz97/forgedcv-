import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using forgedCV's resume builder and career tools.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <p className="eyebrow">Terms</p>
        <h1 className="display-heading mt-3 text-4xl text-foreground sm:text-5xl">Terms of use</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: September 26, 2026</p>
        <div className="prose-flowcv mt-10">
          <h2>Using forgedCV</h2>
          <p>You may use forgedCV to create, edit, import, and export your own resume and career materials. You are responsible for the accuracy and lawful use of content you provide. Do not upload content you do not have the right to use or interfere with the service.</p>
          <h2>Local data and backups</h2>
          <p>Resume drafts are stored in your browser and are not a cloud backup. You are responsible for exporting and protecting backup files. We cannot restore data after it is cleared from your browser or device.</p>
          <h2>Career tools and results</h2>
          <p>Resume scores, writing suggestions, template labels, and imported details are general guidance. They do not predict hiring outcomes or guarantee that an employer or applicant tracking system will accept or rank a resume in a particular way. Review all content before use.</p>
          <h2>Availability and changes</h2>
          <p>Features may be updated, suspended, or discontinued as the service evolves. The service is provided without a promise of uninterrupted availability. These terms may be updated; the date above indicates the latest revision.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact the forgedCV site operator through the published support channel.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}