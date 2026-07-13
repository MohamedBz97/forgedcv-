"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Palette,
  Zap,
  Download,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  LayoutTemplate,
  Eye,
  PencilLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES } from "@/lib/templates";
import { defaultResumeData, defaultSettings } from "@/lib/default-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

const FEATURES = [
  {
    icon: LayoutTemplate,
    title: "8 Diverse Templates",
    desc: "From modern two-column to elegant serif — find the perfect fit for any role or industry.",
  },
  {
    icon: Eye,
    title: "Live Preview",
    desc: "See your changes reflected instantly. What you see is exactly what you'll export.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    desc: "Tune accent colors, fonts, spacing, and photo visibility to match your personal brand.",
  },
  {
    icon: Zap,
    title: "Smart Editor",
    desc: "Organized sections with reorderable entries, skill levels, and helpful hints throughout.",
  },
  {
    icon: Download,
    title: "PDF Export",
    desc: "Export pixel-perfect, ATS-friendly PDFs ready to send to recruiters and hiring managers.",
  },
  {
    icon: ShieldCheck,
    title: "Auto-Saved",
    desc: "Your work is saved automatically in your browser. Sign in to sync across devices.",
  },
];

const STEPS = [
  {
    icon: LayoutTemplate,
    title: "Pick a template",
    desc: "Browse 8 professionally designed templates and choose the one that fits your story.",
  },
  {
    icon: PencilLine,
    title: "Fill in your details",
    desc: "Use the guided editor to add experience, skills, education, and more — with live preview.",
  },
  {
    icon: Download,
    title: "Export & apply",
    desc: "Download a polished PDF or share a link. Update anytime as your career grows.",
  },
];

export function Landing() {
  const setView = useResumeStore((s) => s.setView);
  const loadSample = useResumeStore((s) => s.loadSample);
  const startBlank = useResumeStore((s) => s.startBlank);

  const handleBuild = () => {
    setView("templates");
  };

  const handleSample = () => {
    loadSample();
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FileText className="size-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              CV<span className="text-primary">Forge</span>
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#templates" className="transition-colors hover:text-foreground">
              Templates
            </a>
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={handleSample}>
              Try a sample
            </Button>
            <Button size="sm" onClick={handleBuild}>
              Build my CV
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* decorative background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start gap-6"
            >
              <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                <Sparkles className="size-3 text-primary" />
                Free • No signup required to start
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Build a resume that
                <span className="text-primary"> gets you hired</span>
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground text-pretty">
                Choose from 8 professionally designed, ATS-friendly templates.
                Edit with a live preview, customize colors and fonts, and export a
                pixel-perfect PDF in minutes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="h-12 px-6 text-base" onClick={handleBuild}>
                  Choose a template
                  <ArrowRight className="size-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6 text-base" onClick={handleSample}>
                  <Eye className="size-5" />
                  View live demo
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-primary" />
                  ATS-friendly
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-primary" />
                  No watermark
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-primary" />
                  Unlimited exports
                </span>
              </div>
            </motion.div>

            {/* Right: floating resume mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative">
                {/* glow behind */}
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-amber-500/10 blur-2xl" />
                <div
                  className="overflow-hidden rounded-xl border border-border/60 shadow-2xl"
                  style={{ transform: "rotate(-1.5deg)" }}
                >
                  <div style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%" }}>
                    <ResumeDocument data={defaultResumeData} settings={{ ...defaultSettings, templateId: "modern" }} />
                  </div>
                </div>
                {/* floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-4 top-1/3 hidden rounded-lg border bg-background p-3 shadow-lg sm:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Palette className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">8 colors</p>
                      <p className="text-[10px] text-muted-foreground">Customizable</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-4 bottom-1/4 hidden rounded-lg border bg-background p-3 shadow-lg sm:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                      <Star className="size-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">ATS-ready</p>
                      <p className="text-[10px] text-muted-foreground">Recruiter approved</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* stats bar */}
          <div className="border-y bg-muted/30">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:px-6 lg:px-8">
              {[
                { value: "8", label: "Pro templates" },
                { value: "100%", label: "ATS-friendly" },
                { value: "Free", label: "No watermark" },
                { value: "<5 min", label: "To a finished CV" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-foreground sm:text-3xl">{s.value}</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates showcase */}
        <section id="templates" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-3 gap-1.5">
              <LayoutTemplate className="size-3" />
              Templates
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A template for every story
            </h2>
            <p className="mt-3 text-muted-foreground">
              Eight hand-crafted designs — from clean and minimal to bold and creative.
              Switch templates anytime without losing your content.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TEMPLATES.map((t, i) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={handleBuild}
                className="group relative overflow-hidden rounded-xl border bg-card text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[1/1.414] overflow-hidden bg-muted/40">
                  <div className="absolute left-0 top-0 origin-top-left" style={{ transform: "scale(0.32)", width: "312.5%" }}>
                    <ResumeDocument
                      data={defaultResumeData}
                      settings={{ ...defaultSettings, templateId: t.id, accentColor: t.accent }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center pb-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-background px-3 py-1.5 text-xs font-medium shadow-md">
                      Use this template
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="line-clamp-1 text-xs text-muted-foreground">{t.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" onClick={handleBuild}>
              Browse all templates
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-y bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-3 gap-1.5">
                <Sparkles className="size-3" />
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to land the interview
              </h2>
              <p className="mt-3 text-muted-foreground">
                Powerful, focused, and free. No upsells, no watermarks, no nonsense.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-3 gap-1.5">
              <Zap className="size-3" />
              How it works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From blank page to polished PDF
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three simple steps. Most people finish in under five minutes.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <step.icon className="size-7" />
                  <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-background text-xs font-bold text-foreground shadow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
              <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build your resume?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Pick a template and start editing. Your progress saves automatically.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" className="h-12 px-6 text-base" onClick={handleBuild}>
                Choose a template
                <ArrowRight className="size-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={handleSample}
              >
                Start with sample data
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FileText className="size-3.5" />
            </div>
            <span className="text-sm font-semibold">
              CV<span className="text-primary">Forge</span>
            </span>
          </div>
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} CVForge. Build a resume that gets you hired.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#templates" className="hover:text-foreground">Templates</a>
            <a href="#features" className="hover:text-foreground">Features</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
