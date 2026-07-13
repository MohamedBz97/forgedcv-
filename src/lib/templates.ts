import type { TemplateMeta } from "./types";

export const TEMPLATES: TemplateMeta[] = [
  {
    id: "modern",
    name: "Atlantic Blue",
    description: "Clean two-column layout with a refined sidebar. A versatile all-rounder for most industries.",
    tags: ["Popular", "Sidebar", "ATS-friendly"],
    accent: "#200E32",
    layout: "sidebar-left",
  },
  {
    id: "classic",
    name: "Classic Clear",
    description: "Timeless single-column design with elegant serif typography. Quietly confident.",
    tags: ["Simple", "Single-column", "ATS-friendly"],
    accent: "#1f2937",
    layout: "single",
  },
  {
    id: "minimal",
    name: "Pure Baseline",
    description: "Ultra-clean design with generous whitespace and subtle hairline rules.",
    tags: ["Minimal", "Single-column", "ATS-friendly"],
    accent: "#111827",
    layout: "single",
  },
  {
    id: "creative",
    name: "Coral Navy",
    description: "Bold sidebar with a vibrant coral accent. Made for designers and creatives.",
    tags: ["Creative", "Sidebar", "Colorful"],
    accent: "#FF5F64",
    layout: "sidebar-right",
  },
  {
    id: "professional",
    name: "Corporate Panel",
    description: "Structured corporate layout with a strong header band. Boardroom-ready.",
    tags: ["Simple", "Header", "ATS-friendly"],
    accent: "#200E32",
    layout: "header",
  },
  {
    id: "executive",
    name: "Executive Serif",
    description: "Sophisticated layout for senior leaders with a serif headline and double rules.",
    tags: ["Simple", "Elegant", "Single-column"],
    accent: "#3a2a50",
    layout: "single",
  },
  {
    id: "tech",
    name: "Web Worker",
    description: "Developer-focused design with a dark sidebar, skills grid and monospace touches.",
    tags: ["Modern", "Sidebar", "Developer"],
    accent: "#28AE7B",
    layout: "sidebar-left",
  },
  {
    id: "elegant",
    name: "Editorial Rule",
    description: "Refined centered typography with delicate rules and a flourish. Quietly elegant.",
    tags: ["Creative", "Centered", "Refined"],
    accent: "#917CBA",
    layout: "header",
  },
];

export function getTemplate(id: string): TemplateMeta | undefined {
  return TEMPLATES.find((t) => t.id === id);
}

export const FONT_OPTIONS = [
  { name: "DM Sans", stack: "var(--font-dm-sans), system-ui, sans-serif" },
  { name: "Inter", stack: "'Inter', system-ui, sans-serif" },
  { name: "Calibri", stack: "'Calibri', 'Segoe UI', system-ui, sans-serif" },
  { name: "Georgia", stack: "'Georgia', 'Times New Roman', serif" },
  { name: "Helvetica", stack: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
  { name: "Garamond", stack: "'EB Garamond', 'Garamond', serif" },
  { name: "Poppins", stack: "'Poppins', sans-serif" },
  { name: "Roboto", stack: "'Roboto', sans-serif" },
  { name: "Lora", stack: "'Lora', serif" },
];

export const ACCENT_PRESETS = [
  "#200E32", // aubergine (flowcv signature)
  "#1f2937", // near-black slate
  "#FF5F64", // coral
  "#28AE7B", // emerald
  "#61B9B3", // teal
  "#62449B", // purple
  "#9499B7", // stormy periwinkle
  "#1E40AF", // blue
  "#9d174d", // rose
  "#7c2d12", // brown
];
