"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Search, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES } from "@/lib/templates";
import { defaultResumeData, defaultSettings } from "@/lib/default-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

const TAGS = ["All", "Simple", "Sidebar", "ATS-friendly", "Modern", "Creative", "Minimal"];

export function TemplateGallery() {
  const setView = useResumeStore((s) => s.setView);
  const setTemplate = useResumeStore((s) => s.setTemplate);
  const loadSample = useResumeStore((s) => s.loadSample);
  const currentTemplateId = useResumeStore((s) => s.settings.templateId);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = TEMPLATES.filter((t) => {
    const matchesTag = filter === "All" || t.tags.includes(filter);
    const matchesQuery =
      !query ||
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  const handleSelect = (id: typeof TEMPLATES[number]["id"]) => {
    setTemplate(id);
    const data = useResumeStore.getState().data;
    if (!data.personal.fullName && data.experience.length === 0) {
      loadSample();
      useResumeStore.getState().setTemplate(id);
    } else {
      setView("editor");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setView("landing")}
            className="flex items-center gap-1.5 text-xl font-bold tracking-tight"
          >
            <span className="text-foreground">cvforge</span>
            <span className="size-1.5 rounded-full bg-coral translate-y-2" />
          </button>
          <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/70 md:flex">
            <button onClick={() => setView("landing")} className="transition-colors hover:text-foreground">
              Resume Builder
            </button>
            <span className="font-semibold text-foreground">Resume Templates</span>
            <a href="/?blog=list" className="transition-colors hover:text-foreground">
              Blog
            </a>
          </nav>
          <Button
            size="sm"
            className="h-10 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground hover:opacity-90"
            onClick={() => setView("landing")}
          >
            Start now
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Free resume templates</p>
            <h1 className="display-heading mt-3 text-4xl text-foreground sm:text-5xl">
              100+ ways to present yourself
            </h1>
            <p className="mt-4 text-foreground/65">
              Eight hand-crafted, ATS-friendly resume templates — from clean and
              minimal to bold and creative. Pick one and start editing. Switch
              anytime without losing your content.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
              <Input
                placeholder="Search templates..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-11 rounded-xl border-black/10 bg-card pl-10"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    filter === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground/60 ring-1 ring-black/5 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((t, i) => {
              const selected = currentTemplateId === t.id;
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group text-left"
                >
                  <button
                    onClick={() => handleSelect(t.id)}
                    className="block w-full text-left"
                  >
                    <div className="relative aspect-[1/1.414] overflow-hidden rounded-lg bg-card shadow-[0_4px_20px_-8px_rgba(32,14,50,0.18)] ring-1 ring-black/5 transition-all group-hover:-translate-y-1 group-hover:shadow-[0_14px_34px_-10px_rgba(32,14,50,0.28)]">
                      <div
                        className="absolute left-0 top-0 origin-top-left transition-transform duration-300 group-hover:scale-[1.03]"
                        style={{ transform: "scale(0.32)", width: "312.5%" }}
                      >
                        <ResumeDocument
                          data={defaultResumeData}
                          settings={{ ...defaultSettings, templateId: t.id, accentColor: t.accent }}
                        />
                      </div>
                      {selected && (
                        <div className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-emerald2 text-white shadow">
                          <Check className="size-3.5" />
                        </div>
                      )}
                    </div>
                  </button>
                  <div className="mt-3 flex items-center justify-between px-0.5">
                    <div>
                      <p className="text-sm font-bold text-foreground">{t.name}</p>
                      <p className="mt-0.5 line-clamp-1 text-xs text-foreground/55">
                        {t.description}
                      </p>
                    </div>
                    <div
                      className="size-4 shrink-0 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: t.accent }}
                      title="Default accent"
                    />
                  </div>
                  <button
                    onClick={() => handleSelect(t.id)}
                    className="mt-1.5 px-0.5 text-xs font-medium text-foreground/70 underline-offset-2 transition-colors hover:text-primary hover:underline"
                  >
                    See template →
                  </button>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center text-foreground/55">
              <p>No templates match your search.</p>
              <Button
                variant="link"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <div className="flex items-center gap-1.5 text-base font-bold">
            <span>cvforge</span>
            <span className="size-1.5 rounded-full bg-coral translate-y-1.5" />
          </div>
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} CVForge. No watermarks. No hidden fees.
          </p>
          <button
            onClick={() => setView("landing")}
            className="flex items-center gap-1 text-xs text-primary-foreground/80 hover:text-primary-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back home
          </button>
        </div>
      </footer>
    </div>
  );
}
