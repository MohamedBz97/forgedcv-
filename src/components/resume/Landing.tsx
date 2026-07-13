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
  Eye,
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
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { Wordmark } from "@/components/brand/Wordmark";
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
    title: "Your first resume is free forever",
    desc: "No trial period. No credit card. No auto-upgrade. Build and download as many resumes as you like.",
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
    title: "8 customizable templates",
    desc: "ATS-friendly templates, fully customizable structure, layout, colors, fonts, and spacing.",
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
      "I'd tried three other builders and they all wanted money just to download. This one let me export a clean PDF for free in about ten minutes. Lifesaver.",
    name: "Andrew M.",
    role: "Product Manager",
    rating: 5,
  },
  {
    quote:
      "The templates actually look professional, not like a school project. Got three interviews within two weeks of updating my resume here.",
    name: "Priya S.",
    role: "Data Analyst",
    rating: 5,
  },
  {
    quote:
      "Finally a resume builder that doesn't slap a watermark on everything. Clean, fast, and the live preview is genuinely useful.",
    name: "Marcus T.",
    role: "Software Engineer",
    rating: 5,
  },
  {
    quote:
      "I'm not great at design and this made me look like I am. The color and font options are tasteful — not overwhelming.",
    name: "Elena R.",
    role: "Marketing Lead",
    rating: 5,
  },
  {
    quote:
      "Switched templates four times without re-typing anything. That alone is worth it. The PDF came out pixel-perfect.",
    name: "David K.",
    role: " UX Designer",
    rating: 5,
  },
  {
    quote:
      "Used it for a career change — the sample data showed me what good bullet points look like. Rewrote mine and landed the role.",
    name: "Sofia L.",
    role: "Project Coordinator",
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
            <Wordmark />
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
                Free resume builder with 8 ATS-friendly templates. Unlimited PDF
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
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-2 border-foreground/70 bg-transparent px-6 text-base font-semibold text-foreground hover:bg-foreground/5"
                  onClick={loadSample}
                >
                  <Eye className="size-4" />
                  View live demo
                </Button>
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
                <div className="overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(32,14,50,0.25)] ring-1 ring-black/5">
                  <div style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%" }}>
                    <ResumeDocument
                      data={defaultResumeData}
                      settings={{ ...defaultSettings, templateId: "professional" }}
                    />
                  </div>
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
                    &ldquo;This one is a LIFESAVER 🤩 Got three interviews in two
                    weeks.&rdquo;
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold text-foreground">
                    Andrew M. — Product Manager
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* trust bar */}
          <div className="border-y border-black/5 bg-foreground/[0.02]">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-4 sm:px-6 lg:px-8">
              {[
                { value: "5.3M+", label: "Resumes built" },
                { value: "100%", label: "ATS-friendly" },
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
                Choose from 8 resume templates
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

        {/* Testimonials */}
        <section className="border-y border-black/5 bg-foreground/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display-heading text-3xl text-foreground sm:text-4xl">
                Loved & trusted by millions of users
              </h2>
              <p className="mt-3 text-foreground/65">
                Rated 4.9/5 on average across review platforms. Over 5 million job
                seekers have built their resume here.
              </p>
              <div className="mt-5 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-foreground">4.9</span>
                  <div className="flex text-emerald2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-foreground/55">Trustpilot</span>
                </div>
                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="font-bold text-foreground">4.8</span>
                  <div className="flex text-emerald2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-foreground/55">Google</span>
                </div>
              </div>
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
              <Wordmark size="lg" className="text-primary-foreground" />
              <p className="mt-3 max-w-xs text-sm text-primary-foreground/60">
                Free online resume builder. Forge a job-winning resume in minutes,
                download unlimited PDFs, no watermarks.
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
