import { cn } from "@/lib/utils";

/**
 * forgedCV wordmark — "forged" in charcoal + "CV" in forge orange.
 * Server-component safe (no "use client").
 */
export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";
  return (
    <span className={cn("flex items-baseline font-bold tracking-tight", sizeClass, className)}>
      <span className="text-foreground">forged</span>
      <span className="text-forge">CV</span>
    </span>
  );
}
