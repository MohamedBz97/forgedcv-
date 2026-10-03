import { cn } from "@/lib/utils";

/** forgedCV hammer, anvil, and resume mark. Server-component safe. */
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
      <path
        d="M4 20h8v-2h18l6 4v3h-7l-3 5H13l-3-5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 1-2Z"
        className="fill-foreground/65"
      />
      <path
        d="M14 30h14l2 5H12l2-5ZM8 35h27v3H8z"
        className="fill-foreground/65"
      />
      <path d="M15 20h10l2 2v7H15v-9Z" className="fill-card stroke-foreground" strokeWidth="0.9" strokeLinejoin="round" />
      <path d="M25 20v2h2M17 24h7M17 26h7M17 28h5" className="stroke-forge" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m28 9 3 3-10 10-3-3L28 9Z" className="fill-forge" stroke="var(--color-card)" strokeWidth="0.7" strokeLinejoin="round" />
      <path d="m23 3 13 8-3 5-13-8 3-5Z" className="fill-foreground" stroke="var(--color-card)" strokeWidth="0.8" strokeLinejoin="round" />
      <path d="m20 17-1.5-2.5M16 19l-2-.5M23 15l.5-2.5" className="stroke-forge" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
