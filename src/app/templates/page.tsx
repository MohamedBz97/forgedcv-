import type { Metadata } from "next";
import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";
import { resumeForTemplate } from "@/lib/template-preview";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

export const metadata: Metadata = {
  title: "Free Resume Templates — ATS-Friendly Designs | forgedCV",
  description:
    "Browse free resume templates from forgedCV. Each design is made for readability and downloads to PDF with zero watermarks. Pick one and start editing in seconds.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Free Resume Templates — ATS-Friendly Designs | forgedCV",
    description:
      "Browse free resume templates. Readable layouts, PDF downloads with zero watermarks. No signup.",
    type: "website",
  },
};

export default function TemplatesIndexPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="section-shell py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Resume templates</p>
            <h1 className="display-heading mt-4 text-4xl text-ink sm:text-5xl">
              Free resume templates,{" "}
              <span className="accent-underline text-forge-700">every one ATS-friendly</span>
            </h1>
            <p className="mt-4 text-lg text-ink-2">
              Choose a design, edit it in seconds, and download a clean PDF — no
              watermark, no signup, no paywall. Switch templates anytime without
              losing a single word.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TEMPLATES.map((t) => (
              <Link
                key={t.id}
                href={`/templates/${t.id}`}
                className="group block text-left"
              >
                <div className="relative aspect-[1/1.414] overflow-hidden rounded-lg bg-white ring-1 ring-line transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:ring-forge/40">
                  <div
                    className="absolute left-0 top-0 origin-top-left"
                    style={{ transform: "scale(0.34)", width: "294.1176%" }}
                  >
                    <ResumeDocument {...resumeForTemplate(t.id)} autoHeight />
                  </div>
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold tracking-[-0.01em] text-ink">
                      {t.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-steel">{t.layout.replace("-", " ")}</p>
                  </div>
                  <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-forge opacity-0 transition-opacity group-hover:opacity-100">
                    Use it <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {t.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-steel"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}