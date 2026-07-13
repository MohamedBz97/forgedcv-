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
  {
    id: "bold",
    name: "Bold Statement",
    description: "Magazine-style layout with a massive name and solid accent section bars. Unapologetic.",
    tags: ["Creative", "Header", "Colorful"],
    accent: "#EA580C",
    layout: "single",
  },
  {
    id: "compact",
    name: "Compact Pro",
    description: "Dense two-column layout that fits maximum content on a single page. For seasoned pros.",
    tags: ["Compact", "Sidebar", "ATS-friendly"],
    accent: "#1C1917",
    layout: "sidebar-left",
  },
  {
    id: "academic",
    name: "Academic",
    description: "Conservative serif layout with numbered section headings and publications formatting.",
    tags: ["Simple", "Single-column", "Elegant"],
    accent: "#475569",
    layout: "single",
  },
  {
    id: "designer",
    name: "Designer Portfolio",
    description: "Project-forward layout with colored cards and pill skill tags. Built for creatives.",
    tags: ["Creative", "Colorful", "Modern"],
    accent: "#7C3AED",
    layout: "header",
  },
  {
    id: "corporate-blue",
    name: "Corporate Blue",
    description: "Traditional banking-style layout with a dark navy header band and two-column body.",
    tags: ["Header", "Two-column", "ATS-friendly"],
    accent: "#1e3a5f",
    layout: "header",
  },
  {
    id: "fresh",
    name: "Fresh Start",
    description: "Friendly rounded layout with soft tints. Approachable and welcoming for entry-level.",
    tags: ["Modern", "Colorful", "Simple"],
    accent: "#14B8A6",
    layout: "sidebar-right",
  },
  {
    id: "mono",
    name: "Monochrome",
    description: "Pure black and white Swiss-grid layout with strong typographic hierarchy.",
    tags: ["Minimal", "Single-column", "ATS-friendly"],
    accent: "#000000",
    layout: "single",
  },
  {
    id: "sidebar-dark",
    name: "Midnight Sidebar",
    description: "Dark left sidebar with amber highlights and a clean white main column. Universal and bold.",
    tags: ["Sidebar", "Modern", "Colorful"],
    accent: "#F59E0B",
    layout: "sidebar-left",
  },
  {
    id: "two-col-light",
    name: "Balanced Two-Column",
    description: "Equal 50/50 split with a centered top header. Light, airy and balanced.",
    tags: ["Two-column", "Simple", "ATS-friendly"],
    accent: "#10B981",
    layout: "single",
  },
  {
    id: "banner-photo",
    name: "Banner Photo",
    description: "Full-width colored banner with a circular photo. Ideal for international and creative roles.",
    tags: ["Header", "Photo", "Colorful"],
    accent: "#BE185D",
    layout: "header",
  },
  {
    id: "timeline",
    name: "Timeline",
    description: "Experience rendered as a vertical timeline with accent dots. Distinctive and visual.",
    tags: ["Modern", "Single-column", "Creative"],
    accent: "#0891B2",
    layout: "single",
  },
  {
    id: "grid-skills",
    name: "Skills Grid",
    description: "Skills shown as a prominent 3-column card grid high in the layout. For skills-heavy roles.",
    tags: ["Modern", "Colorful", "Single-column"],
    accent: "#059669",
    layout: "single",
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
