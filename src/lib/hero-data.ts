import type { ResumeData, ResumeSettings } from "./types";
import { defaultResumeData, defaultSettings } from "./default-data";

/**
 * A trimmed-down resume dataset for the hero mockup that fits cleanly on ONE
 * A4 page (no overflow, no white-space gap). Uses 2 experience entries instead
 * of 3 so the content fills the page nicely.
 */
export const heroResumeData: ResumeData = {
  ...defaultResumeData,
  experience: defaultResumeData.experience.slice(0, 3),
  projects: defaultResumeData.projects.slice(0, 1),
  courses: [],
  certifications: defaultResumeData.certifications.slice(0, 1),
  skillCategories: defaultResumeData.skillCategories,
};

export const heroResumeSettings: ResumeSettings = {
  ...defaultSettings,
  templateId: "professional",
  accentColor: "#1C1917",
  fontFamily: "DM Sans",
  fontSize: "base",
  spacing: "normal",
};
