// Core resume data types

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  photo: string; // data URL or empty
  summary: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string; // e.g. "Jan 2022"
  endDate: string; // e.g. "Present"
  current: boolean;
  description: string; // bullet points separated by \n
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  url: string;
  technologies: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface LanguageItem {
  id: string;
  name: string;
  level: string; // Native, Fluent, Intermediate, Basic
}

export interface CourseItem {
  id: string;
  name: string;
  institution: string;
  date: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  courses: CourseItem[];
}

export type TemplateId =
  | "modern"
  | "classic"
  | "minimal"
  | "creative"
  | "professional"
  | "executive"
  | "tech"
  | "elegant";

export interface TemplateMeta {
  id: TemplateId;
  name: string;
  description: string;
  tags: string[];
  accent: string; // default accent color hex
  layout: "single" | "sidebar-left" | "sidebar-right" | "header";
}

export interface ResumeSettings {
  templateId: TemplateId;
  accentColor: string;
  fontFamily: string;
  fontSize: "sm" | "base" | "lg";
  spacing: "compact" | "normal" | "relaxed";
  showPhoto: boolean;
  sectionOrder: string[];
}

export interface ResumeDocument {
  id: string;
  title: string;
  data: ResumeData;
  settings: ResumeSettings;
  createdAt: string;
  updatedAt: string;
}

export type View = "landing" | "templates" | "editor";
