"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES } from "@/lib/templates";
import type { TemplateId } from "@/lib/types";
import { Landing } from "@/components/resume/Landing";

const TemplateGallery = dynamic(
  () => import("@/components/resume/TemplateGallery").then((m) => m.TemplateGallery),
  { ssr: true, loading: () => <div className="min-h-[60vh]" /> }
);

const ResumeEditor = dynamic(
  () => import("@/components/resume/ResumeEditor").then((m) => m.ResumeEditor),
  { ssr: true, loading: () => <div className="min-h-[60vh]" /> }
);

export function HomeClient() {
  const view = useResumeStore((s) => s.view);
  const setTemplate = useResumeStore((s) => s.setTemplate);
  const setView = useResumeStore((s) => s.setView);
  const searchParams = useSearchParams();

  useEffect(() => {
    const template = searchParams.get("template");
    if (template && TEMPLATES.some((t) => t.id === template)) {
      setTemplate(template as TemplateId);
      setView("editor");
    }
  }, [searchParams, setTemplate, setView]);

  if (view === "editor") return <ResumeEditor />;
  if (view === "templates") return <TemplateGallery />;
  return <Landing />;
}