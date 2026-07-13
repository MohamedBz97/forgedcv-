import { cn } from "@/lib/utils";

/**
 * forgedCV logo mark — a hammer striking a document, refined and professional.
 *
 * Design: a clean document/page with a folded corner and text lines, struck
 * by a hammer coming from the upper-right. The hammer head + handle form a
 * strong diagonal. A small spark marks the impact point. Geometric, balanced,
 * readable at 16px. The hammer is forge-orange (the brand fire); the document
 * is charcoal (the forged steel/result).
 *
 * Server-component safe (no "use client").
 */
export function LogoMark({
  className,
  title = "forgedCV",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("size-8", className)}
    >
      <title>{title}</title>
      {/* Document / page — the resume being forged, with a folded corner */}
      <path
        d="M8 7h13l5 5v21a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
        className="fill-card stroke-foreground"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Folded corner of the page */}
      <path
        d="M21 7v5h5"
        className="stroke-foreground"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Text lines on the document */}
      <rect x="9.5" y="16" width="8" height="1.6" rx="0.4" className="fill-foreground" />
      <rect x="9.5" y="20" width="13" height="1.3" rx="0.4" className="fill-foreground/55" />
      <rect x="9.5" y="23" width="11" height="1.3" rx="0.4" className="fill-foreground/55" />
      <rect x="9.5" y="26" width="13" height="1.3" rx="0.4" className="fill-foreground/55" />
      <rect x="9.5" y="29" width="9" height="1.3" rx="0.4" className="fill-foreground/55" />

      {/* Hammer — striking down from upper-right */}
      {/* Handle */}
      <rect
        x="30.2"
        y="4"
        width="2.4"
        height="13"
        rx="1.2"
        transform="rotate(42 31.4 10.5)"
        className="fill-forge"
      />
      {/* Hammer head */}
      <rect
        x="23.5"
        y="2.5"
        width="9"
        height="6"
        rx="1.3"
        transform="rotate(42 28 5.5)"
        className="fill-forge"
      />
      {/* Highlight on hammer head for a polished look */}
      <rect
        x="24.5"
        y="3.6"
        width="3"
        height="1.2"
        rx="0.4"
        transform="rotate(42 26 4.2)"
        className="fill-white/35"
      />

      {/* Impact spark where hammer meets document */}
      <g className="fill-forge">
        <path d="M24.5 16.5 L25.8 18 L24.5 19.5 L23.2 18 Z" />
        <circle cx="28" cy="13" r="1.1" />
        <circle cx="20.5" cy="20.5" r="0.9" className="fill-forge/70" />
      </g>
    </svg>
  );
}
