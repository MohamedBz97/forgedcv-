import { z } from "zod";
import type { ResumeData, ResumeSettings } from "@/lib/types";

const MAX_BACKUP_BYTES = 8 * 1024 * 1024;
const shortText = z.string().max(500);
const longText = z.string().max(12_000);

const resumeDataSchema = z.object({
  personal: z.object({
    fullName: shortText,
    jobTitle: shortText,
    email: shortText,
    phone: shortText,
    location: shortText,
    website: shortText,
    linkedin: shortText,
    github: shortText,
    photo: z.string().max(6_000_000),
    summary: longText,
  }),
  experience: z.array(z.object({
    id: shortText,
    company: shortText,
    position: shortText,
    location: shortText,
    startDate: shortText,
    endDate: shortText,
    current: z.boolean(),
    description: longText,
  })).max(50),
  education: z.array(z.object({
    id: shortText,
    institution: shortText,
    degree: shortText,
    field: shortText,
    location: shortText,
    startDate: shortText,
    endDate: shortText,
    current: z.boolean(),
    description: longText,
  })).max(50),
  skillCategories: z.array(z.object({
    id: shortText,
    name: shortText,
    skills: z.array(z.object({ id: shortText, name: shortText, level: z.number().int().min(1).max(5) })).max(100),
  })).max(50),
  projects: z.array(z.object({ id: shortText, name: shortText, description: longText, url: shortText, technologies: shortText })).max(50),
  certifications: z.array(z.object({ id: shortText, name: shortText, issuer: shortText, date: shortText, url: shortText })).max(50),
  languages: z.array(z.object({ id: shortText, name: shortText, level: shortText })).max(50),
  courses: z.array(z.object({ id: shortText, name: shortText, institution: shortText, date: shortText })).max(50),
});

const templateIds = [
  "modern", "classic", "minimal", "creative", "professional", "executive", "tech", "elegant",
  "bold", "compact", "academic", "designer", "corporate-blue", "fresh", "mono", "sidebar-dark",
  "two-col-light", "banner-photo", "timeline", "grid-skills", "aurora", "regent", "nordic",
  "meridian", "signal", "federal", "concierge", "architect", "ivory", "precise", "atelier", "tides",
] as const;

const resumeSettingsSchema = z.object({
  templateId: z.enum(templateIds),
  accentColor: z.string().regex(/^#[\da-f]{6}$/i),
  fontFamily: shortText,
  fontSize: z.enum(["sm", "base", "lg"]),
  spacing: z.enum(["compact", "normal", "relaxed"]),
  showPhoto: z.boolean(),
  sectionOrder: z.array(shortText).max(20),
});

const backupSchema = z.object({
  format: z.literal("forgedcv-resume"),
  version: z.literal(1),
  exportedAt: z.string().datetime().optional(),
  title: shortText,
  data: resumeDataSchema,
  settings: resumeSettingsSchema,
});

export interface ResumeBackup {
  format: "forgedcv-resume";
  version: 1;
  exportedAt: string;
  title: string;
  data: ResumeData;
  settings: ResumeSettings;
}

export function createResumeBackup(title: string, data: ResumeData, settings: ResumeSettings): ResumeBackup {
  return { format: "forgedcv-resume", version: 1, exportedAt: new Date().toISOString(), title, data, settings };
}

export function parseResumeBackup(value: unknown): ResumeBackup {
  const parsed = backupSchema.parse(value);
  return {
    ...parsed,
    exportedAt: parsed.exportedAt ?? new Date().toISOString(),
    data: parsed.data as ResumeData,
    settings: parsed.settings as ResumeSettings,
  };
}

export function isResumeBackupFileSizeAllowed(size: number): boolean {
  return size > 0 && size <= MAX_BACKUP_BYTES;
}