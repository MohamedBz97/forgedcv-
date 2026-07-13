"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES } from "@/lib/templates";
import { defaultResumeData, defaultSettings } from "@/lib/default-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { FileText } from "lucide-react";

const TAGS = ["All", "ATS-friendly", "Sidebar", "Single-column", "Creative", "Modern", "Elegant"];

export function TemplateGallery() {
  const setView = useResumeStore((s) => s.setView);
  const setTemplate = useResumeStore((s) => s.setTemplate);
  const loadSample = useResumeStore((s) => s.loadSample);
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
    // If the store has empty data (fresh), load sample so the editor isn't blank
    const data = useResumeStore.getState().data;
    if (!data.personal.fullName && data.experience.length === 0) {
      loadSample();
      // loadSample sets templateId to default; re-apply chosen template after
      useResumeStore.getState().setTemplate(id);
    } else {
      setView("editor");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setView("landing")}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FileText className="size-3.5" />
            </div>
            <span className="text-base font-semibold">
              CV<span className="text-primary">Forge</span>
            </span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your template
            </h1>
            <p className="mt-3 text-muted-foreground">
              Pick a starting point. You can switch templates anytime — your content
              stays the same.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    filter === tag
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((t, i) => {
              const selected = useResumeStore.getState().settings.templateId === t.id;
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Preview */}
                  <div className="relative aspect-[1/1.414] overflow-hidden bg-muted/40">
                    <div
                      className="absolute left-0 top-0 origin-top-left transition-transform group-hover:scale-[1.02]"
                      style={{ transform: "scale(0.32)", width: "312.5%" }}
                    >
                      <ResumeDocument
                        data={defaultResumeData}
                        settings={{ ...defaultSettings, templateId: t.id, accentColor: t.accent }}
                      />
                    </div>
                    {/* overlay on hover */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="w-full p-3">
                        <Button
                          size="sm"
                          className="w-full"
                          onClick={() => handleSelect(t.id)}
                        >
                          {selected ? (
                            <>
                              <Check className="size-4" />
                              Selected
                            </>
                          ) : (
                            <>
                              Use this template
                              <ArrowRight className="size-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Meta */}
                  <div className="border-t p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{t.name}</h3>
                      <div
                        className="size-4 rounded-full border"
                        style={{ backgroundColor: t.accent }}
                        title="Default accent"
                      />
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {t.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center text-muted-foreground">
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
    </div>
  );
}
