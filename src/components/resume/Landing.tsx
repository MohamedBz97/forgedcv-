"use client";

import {
  ArrowRight,
  ArrowUpRight,
  PenLine,
  ScanSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  Reveal,
  TiltCard,
  Stagger,
  StaggerItem,
} from "@/components/ui/motion";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES } from "@/lib/templates";
import { defaultResumeData, defaultSettings } from "@/lib/default-data";
import { heroResumeData, heroResumeSettings } from "@/lib/hero-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { ScaledResume } from "@/components/resume/ScaledResume";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Is forgedCV really free?",
    a: "Yes. Build and download resumes without a trial, payment, or watermark.",
  },
  {
    q: "Are the templates ATS-friendly?",
    a: "Templates use selectable text and standard section names. Single-column layouts are the safest choice for ATS parsing.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. Your draft saves in this browser; there is no account or cross-device sync.",
  },
  {
    q: "Is my data safe?",
    a: "The resume draft stays in this browser. Export a backup before changing devices or clearing browser data.",
  },
];

const FEATURED_TEMPLATES = TEMPLATES.filter((template) =>
  ["modern", "classic", "minimal", "tech"].includes(template.id),
);

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "forgedCV",
  url: "https://forgedcv.com",
  description:
    "Free online resume builder with customizable ATS-aware layouts, live preview, and instant PDF downloads — no watermarks, no signup.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Resume Builder",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Customizable resume templates",
    "Live side-by-side preview while you type",
    "Instant PDF download, no watermark",
    "Switch templates without losing content",
    "Ten font families and custom accent colors",
    "Privacy-first: resume drafts stay in your browser",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export function Landing() {
  const setView = useResumeStore((s) => s.setView);
  const loadSample = useResumeStore((s) => s.loadSample);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader onNavigate={setView} onStart={() => setView("templates")} />

      <main className="flex-1">
        {/* ---------------------------------------------------------- HERO */}
        <section className="relative overflow-hidden">
          <div className="section-shell grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
            {/* Copy */}
            <div className="flex flex-col items-start">
              <FadeUp delay={0.05}>
                <p className="eyebrow">Free CV builder — no signup, no watermark</p>
              </FadeUp>

              <h1 className="display-heading mt-5 text-[clamp(2.75rem,6vw,4.25rem)]">
                <Reveal as="span" className="block" delay={0.1}>
                  Free resume builder that
                </Reveal>
                <Reveal as="span" className="block" delay={0.2}>
                  <span className="accent-underline text-forge-700">gets you hired.</span>
                </Reveal>
              </h1>

              <FadeUp delay={0.3} className="mt-6 max-w-xl">
                <p className="text-lg leading-relaxed text-ink-2">
                  Write it once, tailor it for each application. forgedCV keeps a live
                  preview beside every edit and exports a clean PDF with no watermark.
                </p>
              </FadeUp>

              <FadeUp delay={0.4} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="xl" onClick={() => setView("templates")}>
                  Start building — it&apos;s free
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="xl" variant="outline" onClick={loadSample}>
                  Try a sample resume
                </Button>
              </FadeUp>

              <FadeUp delay={0.5} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-steel">
                <span>Free PDF downloads</span>
                <span className="size-1 rounded-full bg-line-strong" aria-hidden="true" />
                <span>No account required</span>
                <span className="size-1 rounded-full bg-line-strong" aria-hidden="true" />
                <span>Saved in this browser</span>
              </FadeUp>
            </div>

            {/* Workbench visual */}
            <FadeUp delay={0.25} y={28} className="relative mx-auto w-full max-w-[560px]">
              <div className="pointer-events-none absolute -right-8 -top-10 size-72 rounded-full bg-forge/15 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-12 -left-10 size-64 rounded-full bg-forge/10 blur-3xl" aria-hidden="true" />

              <TiltCard className="relative" maxTilt={5}>
                <div className="relative overflow-hidden rounded-lg bg-white shadow-[var(--shadow-pop)] ring-1 ring-line">
                  <ScaledResume data={heroResumeData} settings={heroResumeSettings} width={520} />
                </div>
              </TiltCard>

            </FadeUp>
          </div>
        </section>

        {/* ------------------------------------------- TEMPLATES SHOWCASE */}
        <section id="templates" className="border-y border-line bg-surface-2/40">
          <div className="section-shell py-12 lg:py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <p className="eyebrow">Templates</p>
                <h2 className="display-heading mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
                  Choose a starting point.
                </h2>
                <p className="mt-3 max-w-lg text-steel">
                  Editable layouts, made for clean and readable resumes.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Button variant="outline" onClick={() => setView("templates")}>
                  Browse all templates
                  <ArrowRight className="size-4" />
                </Button>
              </Reveal>
            </div>

            <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.04}>
              {FEATURED_TEMPLATES.map((t) => (
                <StaggerItem key={t.id}>
                  <button
                    onClick={() => setView("templates")}
                    className="group w-full text-left"
                  >
                    <div className="relative aspect-[1/1.414] overflow-hidden rounded-lg bg-white shadow-[var(--shadow-card)] ring-1 ring-line transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:ring-forge/40">
                      <div
                        className="absolute left-0 top-0 origin-top-left"
                        style={{ transform: "scale(0.32)", width: "312.5%" }}
                      >
                        <ResumeDocument
                          data={defaultResumeData}
                          settings={{ ...defaultSettings, templateId: t.id, accentColor: t.accent }}
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-all duration-[var(--dur-short)] ease-[var(--ease-out)] group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="text-xs font-semibold text-white">{t.name}</span>
                        <ArrowUpRight className="size-4 text-white" />
                      </div>
                    </div>
                    <p className="mt-2.5 px-0.5 text-sm font-medium text-ink-2 transition-colors group-hover:text-ink">
                      {t.name}
                    </p>
                  </button>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-7 flex justify-center" delay={0.1}>
              <Button size="lg" onClick={() => setView("templates")}>
                Browse all templates
                <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>
        </section>

        {/* --------------------------------------------------------- TOOLS */}
        <section className="border-y border-line bg-surface-2/40">
          <div className="section-shell py-12 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="eyebrow justify-center">Free tools</p>
                <h2 className="display-heading mt-4 text-3xl text-ink sm:text-4xl">
                  Check your work before you send it
                </h2>
                <p className="mt-4 text-lg text-ink-2">
                  Two free tools that catch the mistakes that get resumes
                  rejected. No signup, no upload, no limits.
                </p>
              </Reveal>
            </div>

            <Stagger className="mt-8 grid gap-4 md:grid-cols-2" stagger={0.1}>
              {/* Resume score */}
              <StaggerItem>
                <a
                  href="/tools/resume-score-checker"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)] transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-forge/30 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-forge/10 text-forge">
                      <ScanSearch className="size-6" />
                    </span>
                    <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-steel">
                      Free
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-ink">
                    Resume Score Checker
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
                    Paste your resume for a score across six categories — impact,
                    ATS-readiness, contact info, sections, keywords, and format —
                    plus a prioritized fix list.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forge">
                    Check my resume
                    <ArrowRight className="size-4 transition-transform duration-[var(--dur-short)] group-hover:translate-x-0.5" />
                  </span>
                </a>
              </StaggerItem>

              {/* Cover letter */}
              <StaggerItem>
                <a
                  href="/tools/cover-letter-builder"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)] transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-forge/30 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-forge/10 text-forge">
                      <PenLine className="size-6" />
                    </span>
                    <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-steel">
                      Free
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-ink">
                    Cover Letter Builder + Scanner
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
                    Build from a proven template or paste one in to score it.
                    Checks length, specificity, clichés, and whether you named the
                    company and the role.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forge">
                    Build my cover letter
                    <ArrowRight className="size-4 transition-transform duration-[var(--dur-short)] group-hover:translate-x-0.5" />
                  </span>
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* ------------------------------------------------------------ FAQ */}
        <section id="faq" className="border-y border-line bg-surface-2/40">
          <div className="section-shell py-12 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <Reveal>
                  <p className="eyebrow justify-center">FAQ</p>
                  <h2 className="display-heading mt-4 text-3xl text-ink sm:text-4xl">
                    A few quick answers
                  </h2>
                </Reveal>
              </div>
              <Accordion type="single" collapsible className="mt-6">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-line"
                  >
                    <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-ink hover:no-underline data-[state=open]:text-forge">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 leading-relaxed text-steel">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}