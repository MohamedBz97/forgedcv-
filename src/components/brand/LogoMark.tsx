import { cn } from "@/lib/utils";

/**
 * forgedCV logo mark — a hammer striking an anvil, forging a resume document.
 * Inline SVG so it inherits currentColor and scales crisply.
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("size-8", className)}
    >
      <title>{title}</title>
      {/* Anvil base (the resume being forged) — a document shape */}
      <rect
        x="4"
        y="20"
        width="24"
        height="3"
        rx="0.5"
        className="fill-foreground"
      />
      {/* Anvil support */}
      <path
        d="M12 23h8v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3Z"
        className="fill-foreground"
      />
      {/* Resume document sitting on the anvil */}
      <g className="fill-card">
        <rect x="9" y="11" width="14" height="9" rx="1" className="stroke-foreground stroke-[1.2]" />
        {/* text lines on the document */}
        <rect x="11" y="13.5" width="6" height="1" rx="0.3" className="fill-foreground" />
        <rect x="11" y="15.5" width="10" height="0.8" rx="0.3" className="fill-foreground/60" />
        <rect x="11" y="17" width="8" height="0.8" rx="0.3" className="fill-foreground/60" />
      </g>
      {/* Hammer — coming down from top-right, striking the document */}
      <g className="fill-forge">
        {/* hammer head */}
        <rect x="18" y="3" width="9" height="5" rx="1" transform="rotate(35 22.5 5.5)" />
        {/* hammer handle */}
        <rect
          x="23.5"
          y="6"
          width="1.6"
          height="9"
          rx="0.6"
          transform="rotate(35 24.3 10.5)"
        />
      </g>
      {/* spark / impact mark where hammer meets document */}
      <g className="fill-forge">
        <circle cx="15" cy="10.5" r="1.1" />
        <path d="M15 8.2v1.4M15 11.4v1.4M12.8 10.5h1.4M16.8 10.5h1.4" className="stroke-forge stroke-[1] stroke-linecap-round" />
      </g>
    </svg>
  );
}
