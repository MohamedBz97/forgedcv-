import React from "react";
import type {
  PersonalInfo,
  ResumeData,
  ResumeSettings,
} from "@/lib/types";

// Re-export types so templates only need to import from "./shared"
export type {
  PersonalInfo,
  ResumeData,
  ResumeSettings,
};

// ---------------------------------------------------------------------------
// Color helper — convert hex (#rrggbb) to rgba string with alpha
// ---------------------------------------------------------------------------
export function hexToRgba(hex: string, alpha: number): string {
  let h = (hex || "").replace("#", "").trim();
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (h.length !== 6) return hex; // graceful fallback for non-hex colors
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  if ([r, g, b].some((n) => Number.isNaN(n))) return hex;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ---------------------------------------------------------------------------
// Font size mapping — root font size in px for the resume page
// ---------------------------------------------------------------------------
export function fontSizeClass(fontSize: ResumeSettings["fontSize"]): string {
  switch (fontSize) {
    case "sm":
      return "13px";
    case "lg":
      return "17px";
    default:
      return "15px";
  }
}

// ---------------------------------------------------------------------------
// Spacing mapping — returns concrete spacing tokens used across templates
// ---------------------------------------------------------------------------
export interface SpacingTokens {
  sectionGap: string;
  itemGap: string;
  pad: string;
  padX: string;
  padY: string;
  listItemGap: string;
}

export function spacingClass(spacing: ResumeSettings["spacing"]): SpacingTokens {
  switch (spacing) {
    case "compact":
      return {
        sectionGap: "0.7rem",
        itemGap: "0.45rem",
        pad: "30px",
        padX: "36px",
        padY: "30px",
        listItemGap: "0.18rem",
      };
    case "relaxed":
      return {
        sectionGap: "1.6rem",
        itemGap: "0.95rem",
        pad: "60px",
        padX: "64px",
        padY: "56px",
        listItemGap: "0.42rem",
      };
    default:
      return {
        sectionGap: "1.1rem",
        itemGap: "0.65rem",
        pad: "44px",
        padX: "48px",
        padY: "44px",
        listItemGap: "0.3rem",
      };
  }
}

// ---------------------------------------------------------------------------
// Initials helper for photo placeholder
// ---------------------------------------------------------------------------
export function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// ---------------------------------------------------------------------------
// Date range helper — uses en-dash
// ---------------------------------------------------------------------------
export function dateRange(start?: string, end?: string): string {
  const s = (start || "").trim();
  const e = (end || "").trim();
  if (!s && !e) return "";
  if (!s) return e;
  if (!e) return s;
  return `${s} \u2013 ${e}`;
}

// ---------------------------------------------------------------------------
// Bullet list — renders a multiline string as bullet points
// ---------------------------------------------------------------------------
interface BulletListProps {
  text: string;
  className?: string;
  bulletColor?: string;
  style?: React.CSSProperties;
  gap?: string;
}

export function BulletList({
  text,
  className = "",
  bulletColor,
  style = {},
  gap = "0.28rem",
}: BulletListProps) {
  const lines = (text || "")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  if (lines.length === 0) return null;
  return (
    <ul
      className={className}
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap,
        ...style,
      }}
    >
      {lines.map((line, i) => (
        <li
          key={i}
          style={{
            position: "relative",
            paddingLeft: "14px",
            lineHeight: 1.5,
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: "0.55em",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: bulletColor || "currentColor",
              opacity: bulletColor ? 1 : 0.7,
            }}
          />
          {line}
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Section title — flexible heading with variants
// ---------------------------------------------------------------------------
interface SectionTitleProps {
  children: React.ReactNode;
  accent?: string;
  variant?: "default" | "underline" | "caps" | "centered" | "minimal" | "double" | "bar";
  className?: string;
  style?: React.CSSProperties;
}

export function SectionTitle({
  children,
  accent,
  variant = "default",
  className = "",
  style = {},
}: SectionTitleProps) {
  const accentColor = accent || "var(--accent)";

  if (variant === "underline") {
    return (
      <h3
        className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${className}`}
        style={{ color: "#111827", marginBottom: "10px", ...style }}
      >
        {children}
        <div
          style={{
            height: "1px",
            backgroundColor: accentColor,
            marginTop: "6px",
            opacity: 0.85,
          }}
        />
      </h3>
    );
  }

  if (variant === "double") {
    return (
      <div className={className} style={{ marginBottom: "12px", ...style }}>
        <div style={{ borderTop: `1px solid ${accentColor}` }} />
        <div style={{ borderTop: `1px solid ${accentColor}`, marginTop: "2px" }} />
        <h3
          className="text-[12px] font-semibold uppercase"
          style={{ letterSpacing: "0.22em", color: "#1f2937", marginTop: "7px" }}
        >
          {children}
        </h3>
      </div>
    );
  }

  if (variant === "caps") {
    return (
      <h3
        className={`text-[12px] font-semibold uppercase ${className}`}
        style={{
          letterSpacing: "0.22em",
          color: accentColor,
          marginBottom: "10px",
          ...style,
        }}
      >
        {children}
      </h3>
    );
  }

  if (variant === "minimal") {
    return (
      <h3
        className={`text-[11px] font-semibold uppercase ${className}`}
        style={{
          letterSpacing: "0.28em",
          color: "#374151",
          marginBottom: "12px",
          ...style,
        }}
      >
        {children}
      </h3>
    );
  }

  if (variant === "centered") {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "14px",
          ...style,
        }}
      >
        <span
          aria-hidden
          style={{
            flex: "1 1 0",
            maxWidth: "80px",
            height: "1px",
            backgroundColor: accentColor,
            opacity: 0.7,
          }}
        />
        <h3
          className="text-[12px] font-semibold uppercase"
          style={{ letterSpacing: "0.28em", color: "#1f2937", whiteSpace: "nowrap" }}
        >
          {children}
        </h3>
        <span
          aria-hidden
          style={{
            flex: "1 1 0",
            maxWidth: "80px",
            height: "1px",
            backgroundColor: accentColor,
            opacity: 0.7,
          }}
        />
      </div>
    );
  }

  if (variant === "bar") {
    return (
      <h3
        className={`text-[13px] font-semibold uppercase ${className}`}
        style={{
          letterSpacing: "0.1em",
          color: "#111827",
          marginBottom: "10px",
          paddingLeft: "10px",
          borderLeft: `3px solid ${accentColor}`,
          ...style,
        }}
      >
        {children}
      </h3>
    );
  }

  // default
  return (
    <h3
      className={`text-[14px] font-semibold uppercase ${className}`}
      style={{ letterSpacing: "0.08em", color: accentColor, marginBottom: "10px", ...style }}
    >
      {children}
    </h3>
  );
}

// ---------------------------------------------------------------------------
// Inline SVG icons (12-14px) — print-safe, no external deps
// ---------------------------------------------------------------------------
type IconProps = { size?: number; className?: string };

const IconEmail = ({ size = 13, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconPhone = ({ size = 13, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const IconLocation = ({ size = 13, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconGlobe = ({ size = 13, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);
const IconLinkedin = ({ size = 13, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.2h.05c.53-1 1.84-2.2 3.8-2.2C22 8 24 9.5 24 13.6V24h-4v-9.4c0-2.24-.8-3.77-2.8-3.77-1.53 0-2.44 1.03-2.84 2.03-.15.36-.18.86-.18 1.36V24h-4V8z" />
  </svg>
);
const IconGithub = ({ size = 13, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

export interface ContactItem {
  icon: React.ReactNode;
  value: string;
}

// Returns array of available contact items (icon + value)
export function contactItems(personal: PersonalInfo): ContactItem[] {
  const items: ContactItem[] = [];
  if (personal.email) items.push({ icon: <IconEmail />, value: personal.email });
  if (personal.phone) items.push({ icon: <IconPhone />, value: personal.phone });
  if (personal.location)
    items.push({ icon: <IconLocation />, value: personal.location });
  if (personal.website)
    items.push({ icon: <IconGlobe />, value: personal.website });
  if (personal.linkedin)
    items.push({ icon: <IconLinkedin />, value: personal.linkedin });
  if (personal.github)
    items.push({ icon: <IconGithub />, value: personal.github });
  return items;
}

// ---------------------------------------------------------------------------
// Photo — circular image or initials placeholder
// ---------------------------------------------------------------------------
interface PhotoProps {
  personal: PersonalInfo;
  showPhoto: boolean;
  size?: number;
  ringColor?: string;
  backgroundColor?: string; // for initials placeholder
  textColor?: string;
  style?: React.CSSProperties;
}

export function Photo({
  personal,
  showPhoto,
  size = 100,
  ringColor,
  backgroundColor,
  textColor = "#ffffff",
  style = {},
}: PhotoProps) {
  if (!showPhoto) return null;
  const baseStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    flexShrink: 0,
    ...style,
  };
  if (ringColor) {
    baseStyle.boxShadow = `0 0 0 3px ${ringColor}`;
  }
  if (personal.photo) {
    return (
      <img
        src={personal.photo}
        alt={personal.fullName || "Profile photo"}
        style={baseStyle}
      />
    );
  }
  const initials = getInitials(personal.fullName);
  return (
    <div
      style={{
        ...baseStyle,
        backgroundColor: backgroundColor || "var(--accent)",
        color: textColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: Math.round(size * 0.38),
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
    >
      {initials || "?"}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Skill level bar — 5 segments filled to level
// ---------------------------------------------------------------------------
interface SkillBarsProps {
  level: number; // 1-5
  color?: string;
  size?: "sm" | "md";
}

export function SkillBars({ level, color, size = "md" }: SkillBarsProps) {
  const accent = color || "var(--accent)";
  const segWidth = size === "sm" ? 6 : 10;
  const segHeight = size === "sm" ? 6 : 4;
  const trackColor = accent.startsWith("var")
    ? "rgba(156, 163, 175, 0.35)"
    : hexToRgba(accent, 0.2);
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          aria-hidden
          style={{
            width: segWidth,
            height: segHeight,
            borderRadius: "1px",
            backgroundColor: n <= level ? accent : trackColor,
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Resume data utilities
// ---------------------------------------------------------------------------
export function hasSkills(data: ResumeData): boolean {
  return data.skillCategories.some((c) => c.skills.length > 0);
}

export function flattenSkills(data: ResumeData) {
  return data.skillCategories.flatMap((c) => c.skills);
}
