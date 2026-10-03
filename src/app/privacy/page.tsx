import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How forgedCV handles resume content, browser storage, and imported files.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <p className="eyebrow">Privacy</p>
        <h1 className="display-heading mt-3 text-4xl text-foreground sm:text-5xl">Your resume is yours.</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: September 26, 2026</p>
        <div className="prose-flowcv mt-10">
          <h2>Resume content and browser storage</h2>
          <p>forgedCV stores resume drafts in this browser using local browser storage. Resume content is not sent to a forgedCV resume database. Anyone with access to this browser profile may be able to access saved data, and clearing browser data may remove it. Download a JSON backup from the editor before changing devices or clearing browser data.</p>
          <h2>Files and analysis</h2>
          <p>Resume scoring, LinkedIn profile PDF extraction, and backup restoration run in your browser. Imported information becomes part of the current local draft. Downloading or printing creates a file on your device. Scanned PDFs without selectable text may not be readable.</p>
          <h2>Website requests</h2>
          <p>Loading the website requires requests to our hosting provider. Those requests may include technical information such as IP address, browser, and requested page, as handled by that provider. The service does not currently provide accounts, cloud resume storage, or cross-device synchronization.</p>
          <h2>Your choices</h2>
          <p>Use the editor's data menu to download a backup, restore a backup, or clear the current resume from this browser. You can also remove site data through your browser settings.</p>
          <h2>Changes</h2>
          <p>This notice may change as the service changes. The date above indicates the latest revision.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}