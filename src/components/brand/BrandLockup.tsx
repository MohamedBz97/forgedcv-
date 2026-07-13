import { cn } from "@/lib/utils";
import { LogoMark } from "./LogoMark";

/**
 * Full forgedCV brand lockup: hammer logo mark + "forgedCV" wordmark.
 * Server-component safe.
 */
export function BrandLockup({
  className,
  size = "md",
  onDark = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
}) {
  const logoSize = size === "lg" ? "size-9" : size === "sm" ? "size-6" : "size-7";
  const textSize = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoMark className={logoSize} />
      <span className={cn("flex items-baseline font-bold tracking-tight", textSize)}>
        <span className={onDark ? "text-primary-foreground" : "text-foreground"}>forged</span>
        <span className="text-forge">CV</span>
      </span>
    </span>
  );
}
