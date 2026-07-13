"use client";

import { useResumeStore } from "@/lib/resume-store";
import { Landing } from "@/components/resume/Landing";
import { TemplateGallery } from "@/components/resume/TemplateGallery";
import { ResumeEditor } from "@/components/resume/ResumeEditor";

export function HomeClient() {
  const view = useResumeStore((s) => s.view);

  if (view === "editor") return <ResumeEditor />;
  if (view === "templates") return <TemplateGallery />;
  return <Landing />;
}
