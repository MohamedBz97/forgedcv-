import type { ResumeData, ResumeSettings } from "./types";
import { heroResumeData, heroResumeSettings } from "./hero-data";
import { getTemplate } from "./templates";

/**
 * Sample resume data + settings for a given template — used to render the
 * live SEO previews on the `/templates` index and `/templates/[id]` pages.
 */
export function resumeForTemplate(id: string): {
  data: ResumeData;
  settings: ResumeSettings;
} {
  const t = getTemplate(id);
  return {
    data: heroResumeData,
    settings: {
      ...heroResumeSettings,
      templateId: (t?.id ?? "modern") as ResumeSettings["templateId"],
      accentColor: t?.accent ?? heroResumeSettings.accentColor,
    },
  };
}