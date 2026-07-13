"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SECTIONS } from "./sections-meta";
import { useResumeStore } from "@/lib/resume-store";
import type { ResumeData } from "@/lib/types";

interface EditorSidebarProps {
  activeSection: string;
  onSelect: (id: string) => void;
  /** "vertical" for desktop sidebar, "horizontal" for mobile tab bar. */
  orientation?: "vertical" | "horizontal";
}

/**
 * Determines whether a section has been "started" — meaning it has at least
 * one non-empty item (or, for personal, a non-empty key field).
 */
function isSectionStarted(data: ResumeData, id: string): boolean {
  switch (id) {
    case "personal":
      return Boolean(
        data.personal.fullName ||
          data.personal.jobTitle ||
          data.personal.email ||
          data.personal.summary
      );
    case "experience":
      return data.experience.some(
        (e) => e.company || e.position || e.description
      );
    case "education":
      return data.education.some(
        (e) => e.institution || e.degree || e.field
      );
    case "skills":
      return data.skillCategories.some(
        (c) => c.name || c.skills.some((s) => s.name)
      );
    case "projects":
      return data.projects.some((p) => p.name || p.description);
    case "certifications":
      return data.certifications.some((c) => c.name || c.issuer);
    case "languages":
      return data.languages.some((l) => l.name);
    case "courses":
      return data.courses.some((c) => c.name || c.institution);
    default:
      return false;
  }
}

export function EditorSidebar({
  activeSection,
  onSelect,
  orientation = "vertical",
}: EditorSidebarProps) {
  const data = useResumeStore((s) => s.data);

  const startedCount = React.useMemo(
    () => SECTIONS.filter((s) => isSectionStarted(data, s.id)).length,
    [data]
  );
  const progress = Math.round((startedCount / SECTIONS.length) * 100);

  if (orientation === "horizontal") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {startedCount} / {SECTIONS.length} sections started
          </span>
          <span className="tabular-nums">{progress}%</span>
        </div>
        <div
          className="flex gap-1 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Editor sections"
        >
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            const isStarted = isSectionStarted(data, section.id);
            return (
              <Button
                key={section.id}
                type="button"
                variant="ghost"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelect(section.id)}
                className={cn(
                  "shrink-0 gap-1.5 rounded-full border",
                  isActive
                    ? "border-border bg-accent text-accent-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="size-4" />
                {section.label}
                {isStarted ? (
                  <Check className="size-3 text-emerald-600 dark:text-emerald-400" />
                ) : null}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <nav className="flex flex-col gap-1" aria-label="Editor sections">
      <div className="rounded-lg border bg-muted/40 p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-foreground">Progress</span>
          <span className="text-muted-foreground tabular-nums">
            {startedCount} / {SECTIONS.length}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">
          {startedCount === SECTIONS.length
            ? "All sections started!"
            : "Fill in each section to complete your resume."}
        </p>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          const isStarted = isSectionStarted(data, section.id);
          return (
            <Button
              key={section.id}
              type="button"
              variant="ghost"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(section.id)}
              className={cn(
                "justify-start gap-2 px-3 font-normal",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              <span className="flex-1 text-left">{section.label}</span>
              {isStarted ? (
                <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              ) : null}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
