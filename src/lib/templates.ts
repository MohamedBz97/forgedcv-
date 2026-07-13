import type { TemplateMeta } from "./types";

export const TEMPLATES: TemplateMeta[] = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean two-column layout with a refined sidebar. Perfect for most industries.",
    tags: ["Popular", "Two-column", "ATS-friendly"],
    accent: "#0f766e",
    layout: "sidebar-left",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Timeless single-column design with elegant serif typography.",
    tags: ["Traditional", "Single-column", "ATS-friendly"],
    accent: "#1e293b",
    layout: "single",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Ultra-clean design with generous whitespace and subtle accents.",
    tags: ["Minimal", "Single-column", "ATS-friendly"],
    accent: "#171717",
    layout: "single",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold sidebar with vibrant accents. Made for designers and creatives.",
    tags: ["Creative", "Sidebar", "Colorful"],
    accent: "#db2777",
    layout: "sidebar-right",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Structured corporate layout with a strong header band.",
    tags: ["Corporate", "Header", "ATS-friendly"],
    accent: "#b45309",
    layout: "header",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Sophisticated layout for senior leaders with a serif headline.",
    tags: ["Senior", "Elegant", "Single-column"],
    accent: "#7c2d12",
    layout: "single",
  },
  {
    id: "tech",
    name: "Tech",
    description: "Developer-focused design with a skills grid and monospace touches.",
    tags: ["Developer", "Sidebar", "Modern"],
    accent: "#15803d",
    layout: "sidebar-left",
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Refined typography with a centered header and delicate rules.",
    tags: ["Elegant", "Centered", "Refined"],
    accent: "#9d174d",
    layout: "header",
  },
];

export function getTemplate(id: string): TemplateMeta | undefined {
  return TEMPLATES.find((t) => t.id === id);
}

export const FONT_OPTIONS = [
  { name: "Inter", stack: "var(--font-inter), system-ui, sans-serif" },
  { name: "Calibri", stack: "'Calibri', 'Segoe UI', system-ui, sans-serif" },
  { name: "Georgia", stack: "'Georgia', 'Times New Roman', serif" },
  { name: "Helvetica", stack: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
  { name: "Garamond", stack: "var(--font-garamond), 'Garamond', serif" },
  { name: "Poppins", stack: "var(--font-poppins), sans-serif" },
  { name: "Roboto", stack: "var(--font-roboto), sans-serif" },
  { name: "Lora", stack: "var(--font-lora), serif" },
];

export const ACCENT_PRESETS = [
  "#0f766e", // teal
  "#b45309", // amber
  "#db2777", // pink
  "#15803d", // green
  "#9d174d", // rose
  "#7c2d12", // brown
  "#1e293b", // slate
  "#171717", // near-black
  "#7e22ce", // purple
  "#0891b2", // cyan
];
