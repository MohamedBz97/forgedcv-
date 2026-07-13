import type { LucideIcon } from "lucide-react";
import {
  User,
  Briefcase,
  GraduationCap,
  Sparkles,
  FolderGit2,
  Award,
  Languages,
  BookOpen,
} from "lucide-react";

export interface SectionMeta {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

/** Ordered list of editor sections. Shared by the sidebar and the form. */
export const SECTIONS: SectionMeta[] = [
  {
    id: "personal",
    label: "Personal",
    description: "Your contact details and summary.",
    icon: User,
  },
  {
    id: "experience",
    label: "Experience",
    description: "Your work history and achievements.",
    icon: Briefcase,
  },
  {
    id: "education",
    label: "Education",
    description: "Schools, degrees, and coursework.",
    icon: GraduationCap,
  },
  {
    id: "skills",
    label: "Skills",
    description: "Grouped skill categories with levels.",
    icon: Sparkles,
  },
  {
    id: "projects",
    label: "Projects",
    description: "Notable side projects and builds.",
    icon: FolderGit2,
  },
  {
    id: "certifications",
    label: "Certifications",
    description: "Licenses and professional credentials.",
    icon: Award,
  },
  {
    id: "languages",
    label: "Languages",
    description: "Languages you speak and proficiency.",
    icon: Languages,
  },
  {
    id: "courses",
    label: "Courses",
    description: "Online courses and training.",
    icon: BookOpen,
  },
];

export const SECTION_COUNT = SECTIONS.length;
