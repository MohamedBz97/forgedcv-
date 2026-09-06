"use client";

import { ArrowRight, ArrowUpRight, Check, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES } from "@/lib/templates";
import { defaultResumeData, defaultSettings } from "@/lib/default-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

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
      <SiteHeader
        active="Templates"
        onNavigate={(v) => setView(v)}
        onStart={() => setView("templates")}
      />

      <main className="flex-1">
        <div className="section-shell py-16 lg:py-24">
          {/* Heading */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Resume templates</p>
              <h1 className="display-heading mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">
                Find the layout that says{" "}
                <span className="accent-underline text-forge-700">you&apos;re the one</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-ink-2">
                {TEMPLATES.length} hand-tuned, ATS-friendly designs. Pick one and start
                editing — switch anytime without losing a single word.
              </p>
            </div>
            <div className="flex items-center gap-6 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="font-mono text-2xl font-semibold text-ink">{TEMPLATES.length}</p>
                <p className="text-xs text-steel">templates</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-semibold text-ink">100%</p>
                <p className="text-xs text-steel">free, every one</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-semibold text-ink">0</p>
                <p className="text-xs text-steel">watermarks</p>
              </div>
            </div>
          </div>

          {/* Filter bar */}
          <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)]",
                    filter === tag
                      ? "bg-charcoal-900 text-paper shadow-sm"
                      : "border border-line bg-surface text-steel hover:border-line-strong hover:text-ink"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-steel" />
              <Input
                placeholder="Search templates…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-10 rounded-lg border-line bg-surface pl-10 text-sm shadow-xs focus-visible:ring-forge/30"
              />
            </div>
          </div>

          {/* Grid */}
          <Stagger
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            stagger={0.03}
          >
            {filtered.map((t) => {
              const selected = currentTemplateId === t.id;
              return (
                <StaggerItem key={t.id}>
                  <button
                    onClick={() => handleSelect(t.id)}
                    className="group block w-full text-left"
                  >
                    <div
                      className={cn(
                        "relative aspect-[1/1.414] overflow-hidden rounded-lg bg-white shadow-[var(--shadow-card)] transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]",
                        selected
                          ? "ring-2 ring-forge/60"
                          : "ring-1 ring-line hover:ring-forge/40"
                      )}
                    >
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
                        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-charcoal-900/90 px-2.5 py-1 text-[11px] font-semibold text-paper backdrop-blur">
                          <Check className="size-3" strokeWidth={3} />
                          In use
                        </span>
                      )}
                      <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-all duration-[var(--dur-short)] ease-[var(--ease-out)] group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="text-xs font-semibold text-white">{t.name}</span>
                        <ArrowUpRight className="size-4 text-white" />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between px-0.5">
                      <div>
                        <p className="text-sm font-semibold text-ink">{t.name}</p>
                        <p className="mt-0.5 line-clamp-1 text-xs text-steel">
                          {t.description}
                        </p>
                      </div>
                      <span
                        className="size-3.5 shrink-0 rounded-full ring-2 ring-white shadow-sm"
                        style={{ backgroundColor: t.accent }}
                        title="Default accent color"
                      />
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </Stagger>

          {filtered.length === 0 && (
            <div className="mt-16 flex flex-col items-center gap-4 text-center">
              <p className="text-steel">No templates match that search.</p>
              <Button
                variant="ghost"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}

          <div className="mt-12 flex items-center justify-between border-t border-line pt-8">
            <p className="text-sm text-steel">
              Can&apos;t decide? Start with <span className="font-semibold text-ink">Modern</span> — the safest choice for most roles.
            </p>
            <Button size="lg" onClick={() => setView("editor")}>
              Open the builder
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}