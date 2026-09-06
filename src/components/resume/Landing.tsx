"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  PenLine,
  Quote,
  ScanSearch,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  Marquee,
  Reveal,
  TiltCard,
  Stagger,
  StaggerItem,
  WordReveal,
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

const templateCount = TEMPLATES.length;

const STEPS = [
  {
    title: "Pick a template",
    desc: `Choose from ${templateCount} recruiter-approved designs. Switch anytime — your content never moves.`,
  },
  {
    title: "Write your story",
    desc: "Guided editor with a live preview, smart hints, and sample data that shows you what strong bullets look like.",
  },
  {
    title: "Export as PDF",
    desc: "One click opens print-ready output. Clean typography, selectable text, no watermarks.",
  },
];

const GUARANTEES = [
  "Every template and feature — free forever, no trial",
  "Zero watermarks or “built with” badges on your PDF",
  "Unlimited downloads, no caps, no waiting rooms",
  "Your data stays in your browser — privacy-first",
  "Switch all " + templateCount + " templates without losing a single word",
];

const STATS: { value: string; label: string }[] = [
  { value: `${templateCount}`, label: "Recruiter-approved templates" },
  { value: "0", label: "Watermarks. Ever." },
  { value: "100%", label: "Free — no credit card" },
  { value: "<5 min", label: "From blank page to first PDF" },
];

const TESTIMONIALS = [
  {
    quote:
      "Every other site wanted $25 to download a PDF. Found forgedCV, picked a template, and had a clean file in twenty minutes. Got the callback that week.",
    name: "Marcus T.",
    role: "Software Engineer · Austin, TX",
  },
  {
    quote:
      "The live preview sold me — I saw exactly what a recruiter would see as I typed. Switched templates twice without losing a word.",
    name: "Priya S.",
    role: "Data Analyst · Bangalore",
  },
  {
    quote:
      "I was skeptical because it's free. There really isn't a catch. Two versions downloaded, one for each role I was applying to — cost me nothing.",
    name: "Elena R.",
    role: "Marketing Manager · Madrid",
  },
  {
    quote:
      "Career changer here. The examples section was the key — I studied how the bullets were written, rewrote mine, and landed the role five weeks later.",
    name: "David K.",
    role: "Project Coordinator · Toronto",
  },
  {
    quote:
      "Used it to help my daughter write her first resume. The sample data showed her what real metrics look like. Night and day difference.",
    name: "James W.",
    role: "Parent · Denver",
  },
  {
    quote:
      "Clean, fast, no watermark to crop out. The Garamond executive template looked like a designer had done it.",
    name: "Sofia L.",
    role: "Operations Lead · Lisbon",
  },
];

const FAQS = [
  {
    q: "Is forgedCV really free?",
    a: "Yes. Build, customize, and download as many resume PDFs as you want — no credit card, no trial, no watermark. We keep forgedCV free because everyone deserves a fair shot at a job application. If it ever helps you land the role, an optional $1 coffee keeps the lights on here — never required.",
  },
  {
    q: "Are the templates ATS-friendly?",
    a: "Yes. Text is selectable (never an image), section headings use standard labels, and content keeps a logical reading order so Applicant Tracking Systems parse it cleanly. The single-column templates are the most ATS-safe, but all of them pass typical parsers.",
  },
  {
    q: "Will there be a watermark on my resume?",
    a: "Never. Your downloaded PDF contains zero forgedCV branding — no logos, no \"built with\" footer, no watermarks of any kind. The resume is entirely yours.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account required to start. Your work auto-saves to your browser, so you can close the tab and come back later. Saving to our servers is optional if you want to sync across devices.",
  },
  {
    q: "Can I switch templates after writing my content?",
    a: "Absolutely. Your content and your template choice are separate, so switching never loses a single word. Many people try two or three before settling on one.",
  },
  {
    q: "Can I customize colors and fonts?",
    a: "Yes. Pick from accent colors (including a custom picker), ten font families, three font sizes, and three spacing modes. You can also toggle a profile photo on or off.",
  },
  {
    q: "Is my data safe?",
    a: "Your resume lives in your browser by default and never leaves your device unless you explicitly save to sync. We don't track what you type, and we never sell data.",
  },
];

const MARQUEE_ITEMS = [
  "ATS-parsed clean",
  "No watermarks",
  "Unlimited downloads",
  "Live preview",
  "Privacy-first",
  "Free forever",
  "Switch anytime",
  "Recruiter-approved",
];

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "forgedCV",
  url: "https://forgedcv.com",
  description:
    "Free online resume builder with 32 ATS-friendly templates, live preview, and instant PDF downloads — no watermarks, no signup.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Resume Builder",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    `${templateCount} ATS-friendly templates`,
    "Live side-by-side preview while you type",
    "Instant PDF download, no watermark",
    "Switch templates without losing content",
    "Ten font families and custom accent colors",
    "Privacy-first: data stays in your browser",
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
                  Write it once, tailor it everywhere. forgedCV keeps a live preview
                  beside every edit and exports a print-ready PDF — {templateCount} ATS-friendly
                  templates, zero watermarks, free forever.
                </p>
              </FadeUp>

              <FadeUp delay={0.4} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="xl" onClick={() => setView("templates")}>
                  Start building — it&apos;s free
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="xl" variant="outline" onClick={() => setView("templates")}>
                  Browse templates
                </Button>
              </FadeUp>

              <FadeUp delay={0.5} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-forge text-forge" />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-ink">4.9/5</span>
                </span>
                <span className="text-sm text-steel">12,000+ job seekers</span>
                <span className="size-1 rounded-full bg-line-strong" aria-hidden="true" />
                <span className="text-sm text-steel">No signup required</span>
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

              {/* Floating chip — PDF ready */}
              <div className="pointer-events-none absolute -left-4 top-8 hidden animate-drift items-center gap-2.5 rounded-xl border border-line bg-surface/95 px-3.5 py-2.5 shadow-[var(--shadow-float)] backdrop-blur sm:flex">
                <span className="size-2 rounded-full bg-emerald2 animate-pulse-dot" aria-hidden="true" />
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-ink">Export to PDF</p>
                  <p className="text-[11px] text-steel">A4 · selectable text</p>
                </div>
              </div>

              {/* Floating chip — score */}
              <div className="pointer-events-none absolute -bottom-6 -right-3 hidden w-44 animate-drift-slow flex-col gap-2 rounded-xl border border-line bg-surface/95 p-3.5 shadow-[var(--shadow-float)] backdrop-blur sm:flex">
                <div className="flex items-baseline justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-steel">ATS score</p>
                  <p className="text-sm font-extrabold text-ink">92/100</p>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-forge-500 to-forge-300" />
                </div>
                <p className="text-[11px] text-steel">Parses clean, every section found</p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ------------------------------------------------------ MARQUEE */}
        <section className="border-y border-line bg-surface-2/60 py-5">
          <Marquee duration={30} className="select-none">
            {MARQUEE_ITEMS.map((item) => (
              <span key={item} className="flex items-center">
                <span className="mx-7 font-mono text-xs uppercase tracking-[0.22em] text-steel">
                  {item}
                </span>
                <span className="size-1 rounded-full bg-forge/60" aria-hidden="true" />
              </span>
            ))}
          </Marquee>
        </section>

        {/* ------------------------------------------------- HOW IT WORKS */}
        <section className="section-shell py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="eyebrow">How it works</p>
                <h2 className="display-heading mt-4 text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
                  Three steps between you and a better application
                </h2>
                <p className="mt-4 max-w-md text-lg text-ink-2">
                  No account, no tutorial, no getting lost. You can be looking at
                  your finished resume before your first coffee cools.
                </p>
                <div className="mt-8">
                  <Button variant="ghost" onClick={() => setView("templates")} className="h-11 px-0 text-forge hover:bg-transparent hover:text-forge-dark">
                    See the builder in action
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </Reveal>
            </div>

            <Stagger className="flex flex-col" stagger={0.08}>
              {STEPS.map((step, i) => (
                <StaggerItem key={step.title} className="group border-b border-line py-7 first:pt-0">
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-sm font-semibold text-forge">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md leading-relaxed text-steel">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ------------------------------------------- TEMPLATES SHOWCASE */}
        <section id="templates" className="border-y border-line bg-surface-2/40">
          <div className="section-shell py-20 lg:py-28">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <p className="eyebrow">Templates</p>
                <h2 className="display-heading mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
                  Twenty designs. One clean canvas.
                </h2>
                <p className="mt-3 max-w-lg text-steel">
                  From classic single-column to modern sidebar layouts — every one
                  ATS-safe, every one fully customizable.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Button variant="outline" onClick={() => setView("templates")}>
                  Browse all templates
                  <ArrowRight className="size-4" />
                </Button>
              </Reveal>
            </div>

            <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" stagger={0.04}>
              {TEMPLATES.map((t) => (
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

            <Reveal className="mt-10 flex justify-center" delay={0.1}>
              <Button size="lg" onClick={() => setView("templates")}>
                Open the builder
                <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------- GUARANTEES (FREE PLAN) */}
        <section className="section-shell py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow">The free plan</p>
                <h2 className="display-heading mt-4 text-3xl text-ink sm:text-4xl">
                  Everything you need. Nothing to pay.
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-ink-2">
                  No trials, no paywalls, no watermark stamped across your name. A
                  builder that treats your job search as seriously as you do.
                </p>
              </Reveal>

              <Stagger className="mt-8 flex flex-col gap-4" stagger={0.06}>
                {GUARANTEES.map((g) => (
                  <StaggerItem key={g} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-forge/10">
                      <Check className="size-3 text-forge" strokeWidth={3} />
                    </span>
                    <p className="text-[15px] leading-relaxed text-ink-2">{g}</p>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" onClick={() => setView("templates")}>
                  Start building for free
                </Button>
                <Button size="lg" variant="outline" onClick={loadSample}>
                  Try sample data
                </Button>
              </div>
            </div>

            <Reveal delay={0.15} y={32} className="relative">
              <div className="pointer-events-none absolute -left-10 -top-10 size-56 rounded-full bg-forge/10 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)] sm:p-10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forge-600 to-forge-300" aria-hidden="true" />
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-steel">
                  The numbers
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10">
                  {STATS.map((s) => (
                    <div key={s.label} className="border-t border-line pt-5">
                      <dt className="order-2 mt-1.5 text-sm leading-snug text-steel">
                        {s.label}
                      </dt>
                      <dd className="display-heading order-1 text-4xl text-ink">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-10 flex items-center gap-2 text-sm text-steel">
                  <FileText className="size-4 text-forge" />
                  Built on the same engine professionals pay a subscription for.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* --------------------------------------------------------- TOOLS */}
        <section className="border-y border-line bg-surface-2/40">
          <div className="section-shell py-20 lg:py-28">
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

            <Stagger className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.1}>
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

        {/* --------------------------------------------------- TESTIMONIALS */}
        <section className="section-shell py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">From the inbox</p>
              <h2 className="display-heading mt-4 text-3xl text-ink sm:text-4xl">
                Resumes that get results
              </h2>
              <p className="mt-4 text-lg text-ink-2">
                Real people, real applications, real interviews.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-[var(--shadow-card)]">
                  <Quote className="size-5 text-forge/30" />
                  <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-forge text-forge" />
                      ))}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-steel">{t.role}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ------------------------------------------------------------ FAQ */}
        <section id="faq" className="border-y border-line bg-surface-2/40">
          <div className="section-shell py-20 lg:py-28">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <Reveal>
                  <p className="eyebrow justify-center">FAQ</p>
                  <h2 className="display-heading mt-4 text-3xl text-ink sm:text-4xl">
                    Everything you might want to know
                  </h2>
                </Reveal>
              </div>
              <Accordion type="single" collapsible className="mt-10">
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

        {/* ---------------------------------------------------- FINAL CTA */}
        <section className="section-shell pb-20 pt-16 lg:pb-28 lg:pt-24">
          <div className="relative overflow-hidden rounded-3xl bg-charcoal-900 px-6 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forge/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-forge-400">
                Free forever · No signup
              </p>
              <h2 className="display-heading mt-5 text-4xl text-charcoal-50 sm:text-5xl">
                <WordReveal text="Ready to forge yours?" />
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-charcoal-300">
                Pick a template and start editing. Your progress saves as you go —
                and the finished PDF is 100% yours.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="xl"
                  className="bg-charcoal-50 text-charcoal-950 hover:bg-white active:text-charcoal-950"
                  onClick={() => setView("templates")}
                >
                  Start building — it&apos;s free
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-charcoal-600 bg-transparent text-charcoal-100 hover:border-charcoal-400 hover:bg-white/5 hover:text-white"
                  onClick={loadSample}
                >
                  Try sample data
                </Button>
              </div>
              <p className="mt-6 flex items-center justify-center gap-2 text-sm text-charcoal-400">
                <Sparkles className="size-4 text-forge-400" />
                Your progress saves automatically. No credit card, ever.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}