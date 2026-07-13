"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Palette,
  Download,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  LayoutTemplate,
  MousePointerClick,
  PencilLine,
  ChevronDown,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES } from "@/lib/templates";
import { defaultResumeData, defaultSettings } from "@/lib/default-data";
import { heroResumeData, heroResumeSettings } from "@/lib/hero-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { ScaledResume } from "@/components/resume/ScaledResume";
import { BrandLockup } from "@/components/brand/BrandLockup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const STEPS = [
  {
    icon: LayoutTemplate,
    title: "Choose a template",
    desc: "Pick from eight professionally designed, ATS-friendly resume templates. Switch anytime — your content stays put.",
  },
  {
    icon: PencilLine,
    title: "Add your experience",
    desc: "Fill your resume with content using the guided editor. We'll help you along the way with helpful hints and examples.",
  },
  {
    icon: Palette,
    title: "Customize layout & design",
    desc: "Adjust colors, fonts, spacing, and structure until your resume feels like you. Live preview, every step.",
  },
  {
    icon: Download,
    title: "Download unlimited PDFs",
    desc: "Your draft is automatically saved. Export a polished, ATS-ready PDF whenever you're ready. No watermarks.",
  },
];

const FREE_PLAN = [
  {
    icon: Sparkles,
    title: "100% free, no catches",
    desc: "Not a free trial. Not freemium. Every template, every download, every feature — free forever. No credit card, ever.",
  },
  {
    icon: ShieldCheck,
    title: "Just you on your resume",
    desc: "No forgedCV logo. No watermarks. No \"built with\" badges. Your resume looks 100% yours.",
  },
  {
    icon: Download,
    title: "Unlimited PDF downloads",
    desc: "No download limits, no daily caps, no paywalls. Download a fresh PDF every time you tweak a word.",
  },
  {
    icon: LayoutTemplate,
    title: "20 customizable templates",
    desc: "ATS-friendly templates spanning single-column, sidebar, creative, and corporate styles. Fully customizable colors, fonts, and spacing.",
  },
  {
    icon: MousePointerClick,
    title: "Start from scratch or sample",
    desc: "Begin with a blank canvas or load realistic sample data to see how a great resume comes together.",
  },
  {
    icon: ShieldCheck,
    title: "We respect your privacy",
    desc: "Privacy-first. Your data saves locally in your browser by default. No tracking, no selling, no nonsense.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I needed a resume by Monday and every other site wanted $25 to download. Found this, picked the Corporate Blue template, had a clean PDF in 20 minutes. Got the interview.",
    name: "Marcus T.",
    role: "Software Engineer · Austin, TX",
    rating: 5,
  },
  {
    quote:
      "The live preview sold me. I could see exactly what the recruiter would see as I typed. Switched templates three times without losing a word of content.",
    name: "Priya S.",
    role: "Data Analyst · Bangalore",
    rating: 5,
  },
  {
    quote:
      "Honestly skeptical at first because it's free — figured there'd be a catch. There isn't. Downloaded two versions (one for each role I was applying to) and it cost me nothing.",
    name: "Elena R.",
    role: "Marketing Manager · Madrid",
    rating: 4,
  },
  {
    quote:
      "Career changer here. The resume examples section was genuinely useful — I loaded the project manager example, studied how the bullets were written, then rewrote my own. Landed the role 5 weeks later.",
    name: "David K.",
    role: "Project Coordinator · Toronto",
    rating: 5,
  },
  {
    quote:
      "Clean, fast, no watermark. My one nit: I wish there were more serif font options. But the Garamond one worked fine for the executive template I used.",
    name: "Sofia L.",
    role: "Operations Lead · Lisbon",
    rating: 4,
  },
  {
    quote:
      "Used it to help my college-age daughter write her first resume. The sample data showed her what good bullet points look like — she went from 'responsible for social media' to actual metrics. Huge difference.",
    name: "James W.",
    role: "Parent / first-time user · Denver",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "Is forgedCV really free?",
    a: "Yes. Build, customize, and download as many resume PDFs as you want — no credit card, no trial, no watermark. We keep forgedCV free because we believe everyone deserves a fair shot at a job application.",
  },
  {
    q: "Are the templates ATS-friendly?",
    a: "All eight templates are designed to be parsed cleanly by Applicant Tracking Systems. Text is selectable (not images), headings use standard labels, and the layout keeps your content in a logical reading order. The cleaner single-column templates are the most ATS-safe, but all of them pass typical parsers.",
  },
  {
    q: "Will there be a watermark on my resume?",
    a: "Never. Your downloaded PDF contains zero forgedCV branding — no logos, no \"built with\" footer, no watermarks of any kind. The resume is entirely yours.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account required to start. Your work auto-saves to your browser, so you can close the tab and come back later. If you want to sync across devices, you can save a resume to our servers — but it's optional.",
  },
  {
    q: "Can I switch templates after I've written my content?",
    a: "Absolutely. Your content and your template choice are separate, so you can switch templates anytime without losing a single word. Many people try two or three before settling on one.",
  },
  {
    q: "What file format do I download?",
    a: "PDF — the universally accepted format for job applications. When you click Download, your browser's print dialog opens with the resume ready to save as a high-quality PDF. It works on every operating system.",
  },
  {
    q: "Can I customize colors and fonts?",
    a: "Yes. Pick from ten accent colors (including a custom color picker), nine font families, three font sizes, and three spacing modes. You can also toggle a profile photo on or off.",
  },
  {
    q: "Is my data safe?",
    a: "Your resume data is stored locally in your browser by default — it never leaves your device unless you explicitly hit Save to sync. We don't track what you type, and we never sell data. Privacy-first, always.",
  },
];

export function Landing() {
  const setView = useResumeStore((s) => s.setView);
  const loadSample = useResumeStore((s) => s.loadSample);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" aria-label="forgedCV home">
            <BrandLockup />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/70 md:flex">
            <button onClick={() => setView("templates")} className="transition-colors hover:text-foreground">
              Resume Builder
            </button>
            <button onClick={() => setView("templates")} className="transition-colors hover:text-foreground">
              Templates
            </button>
            <a href="/?examples=list" className="transition-colors hover:text-foreground">
              Examples
            </a>
            <a href="/?tool=resume-score" className="transition-colors hover:text-foreground">
              Resume Score
            </a>
            <a href="/?tool=cover-letter" className="transition-colors hover:text-foreground">
              Cover Letter
            </a>
            <a href="/?blog=list" className="transition-colors hover:text-foreground">
              Blog
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden h-10 rounded-xl border-2 border-foreground/70 bg-transparent text-foreground hover:bg-foreground/5 sm:inline-flex"
              onClick={() => setView("templates")}
            >
              Login
            </Button>
            <Button
              size="sm"
              className="h-10 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground hover:opacity-90"
              onClick={() => setView("templates")}
            >
              Start now
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start gap-6"
            >
              <p className="eyebrow">Free online resume builder</p>
              <h1 className="display-heading text-5xl text-foreground sm:text-6xl lg:text-7xl">
                Forge a resume that gets you hired
              </h1>
              <p className="max-w-xl text-lg text-foreground/70 text-pretty">
                Free resume builder with 20 ATS-friendly templates. Unlimited PDF
                downloads. No watermarks, no hidden fees. Forge yours in minutes 🔥
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground hover:opacity-90"
                  onClick={() => setView("templates")}
                >
                  Start forging for free ✨
                </Button>
                <a
                  href="/?tool=resume-score"
                  className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-foreground/70 bg-transparent px-6 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
                >
                  Check your resume score
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-foreground/60">
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-emerald2" />
                  1st resume, free forever
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-emerald2" />
                  Privacy & GDPR-friendly
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-emerald2" />
                  Professional templates
                </span>
              </div>
            </motion.div>

            {/* Right: resume mockup + floating testimonial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(28,25,23,0.28)] ring-1 ring-black/5">
                  <ScaledResume
                    data={heroResumeData}
                    settings={heroResumeSettings}
                    width={440}
                  />
                </div>
                {/* floating testimonial card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-5 -left-3 hidden max-w-[240px] rounded-xl bg-card p-3.5 shadow-lg ring-1 ring-black/5 sm:block"
                >
                  <div className="flex items-center gap-1 text-emerald2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">
                    &ldquo;Every other site wanted $25 to download. This one was
                    free and the PDF looked cleaner.&rdquo;
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold text-foreground">
                    Marcus T. — Software Engineer
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* trust bar */}
          <div className="border-y border-black/5 bg-foreground/[0.02]">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-4 sm:px-6 lg:px-8">
              {[
                { value: "20", label: "Pro templates" },
                { value: "100%", label: "Free, forever" },
                { value: "$0", label: "No hidden fees" },
                { value: "< 5 min", label: "To a finished CV" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="text-xs text-foreground/55 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-heading text-3xl text-foreground sm:text-4xl">
              Create a professional resume in minutes
            </h2>
            <p className="mt-3 text-foreground/65">
              forgedCV makes it easy to create and edit your resume (CV). Here&apos;s
              how it works:
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <step.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/65">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Templates showcase */}
        <section id="templates" className="border-y border-black/5 bg-foreground/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display-heading text-3xl text-foreground sm:text-4xl">
                Choose from 20 resume templates
              </h2>
              <p className="mt-3 text-foreground/65">
                Our free resume templates help you create a professional resume
                that stands out. Switch anytime without losing your content.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {TEMPLATES.map((t, i) => (
                <motion.button
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => setView("templates")}
                  className="group text-left"
                >
                  <div className="relative aspect-[1/1.414] overflow-hidden rounded-lg bg-card shadow-[0_4px_20px_-8px_rgba(32,14,50,0.18)] ring-1 ring-black/5 transition-all group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_-8px_rgba(32,14,50,0.25)]">
                    <div className="absolute left-0 top-0 origin-top-left" style={{ transform: "scale(0.32)", width: "312.5%" }}>
                      <ResumeDocument
                        data={defaultResumeData}
                        settings={{ ...defaultSettings, templateId: t.id, accentColor: t.accent }}
                      />
                    </div>
                  </div>
                  <p className="mt-2.5 px-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {t.name}
                  </p>
                </motion.button>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-2 border-foreground/70 bg-transparent px-6 font-semibold text-foreground hover:bg-foreground/5"
                onClick={() => setView("templates")}
              >
                All resume templates
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Free plan features */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-heading text-3xl text-foreground sm:text-4xl">
              What&apos;s included in the free plan
            </h2>
            <p className="mt-3 text-foreground/65">
              You won&apos;t find a more generous free plan among resume builders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FREE_PLAN.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-xl bg-card p-6 shadow-[0_2px_12px_-6px_rgba(32,14,50,0.12)] ring-1 ring-black/5"
              >
                <div className="flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/65">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Free tools section */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Free tools</p>
            <h2 className="display-heading mt-3 text-3xl text-foreground sm:text-4xl">
              Check your work before you send it
            </h2>
            <p className="mt-3 text-foreground/65">
              Two free tools that catch the mistakes that get resumes rejected.
              No signup, no upload, no limits.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <a
              href="/?tool=resume-score"
              className="group rounded-2xl bg-card p-7 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_-10px_rgba(28,25,23,0.22)]"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-forge/10 text-forge">
                <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 4-4 4 4 5-6" /></svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">Resume Score Checker</h3>
              <p className="mt-1.5 text-sm text-foreground/65">
                Paste your resume and get an instant score across 6 categories —
                impact, ATS readiness, contact info, sections, keywords, and format.
                Plus a prioritized fix list.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-forge">
                Check my resume →
              </span>
            </a>
            <a
              href="/?tool=cover-letter"
              className="group rounded-2xl bg-card p-7 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_-10px_rgba(28,25,23,0.22)]"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-forge/10 text-forge">
                <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13h6M9 17h6" /></svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">Cover Letter Builder</h3>
              <p className="mt-1.5 text-sm text-foreground/65">
                Build a polished cover letter from a proven template, or paste an
                existing one to score it. Checks length, specificity, clichés, and
                whether you named the company and role.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-forge">
                Build my cover letter →
              </span>
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-y border-black/5 bg-foreground/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display-heading text-3xl text-foreground sm:text-4xl">
                Built by people who actually hire
              </h2>
              <p className="mt-3 text-foreground/65">
                We&apos;ve been on both sides of the hiring table. forgedCV is the
                tool we wish we&apos;d had — no paywalls, no tricks, just a clean
                resume builder that works.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="rounded-xl bg-card p-6 shadow-[0_2px_12px_-6px_rgba(32,14,50,0.12)] ring-1 ring-black/5"
                >
                  <Quote className="size-6 text-forge/40" />
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {t.quote}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-emerald2">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-foreground/55">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="display-heading text-3xl text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-foreground/65">
              Everything you might want to know before getting started.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-foreground/70">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Pre-footer brand band */}
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-foreground/[0.03] px-6 py-10 text-center ring-1 ring-black/5 sm:px-12">
            <p className="text-sm text-foreground/70">
              We are a small team building tools to empower job seekers worldwide.
              Our mission: make your job hunt smoother, more enjoyable, and
              ultimately more successful. Mozart, not kangaroos 🎵
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute left-0 top-0 size-64 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 size-64 rounded-full bg-white blur-3xl" />
            </div>
            <h2 className="display-heading relative text-3xl sm:text-4xl">
              Ready to build your resume?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Pick a template and start editing. Your progress saves
              automatically. No signup, no credit card.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-primary-foreground px-7 text-base font-semibold text-primary hover:bg-primary-foreground/90"
                onClick={() => setView("templates")}
              >
                Get started for free ✨
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-2 border-primary-foreground/30 bg-transparent px-6 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                onClick={loadSample}
              >
                Start with sample data
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <BrandLockup size="lg" onDark />
              <p className="mt-3 max-w-xs text-sm text-primary-foreground/60">
                100% free resume builder. Forge a job-winning resume in minutes —
                20 templates, unlimited PDF downloads, no watermarks, no signup.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/50">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <button onClick={() => setView("templates")} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    Resume Builder
                  </button>
                </li>
                <li>
                  <button onClick={() => setView("templates")} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    Resume Templates
                  </button>
                </li>
                <li>
                  <a href="/?examples=list" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    Resume Examples
                  </a>
                </li>
                <li>
                  <a href="/?tool=resume-score" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    Resume Score Checker
                  </a>
                </li>
                <li>
                  <a href="/?tool=cover-letter" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    Cover Letter Tool
                  </a>
                </li>
                <li>
                  <a href="/?blog=list" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/50">
                Company
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#faq" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/?blog=list" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    Career Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} CVForge. Build a resume that gets you hired.
          </div>
        </div>
      </footer>
    </div>
  );
}
