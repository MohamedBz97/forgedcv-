"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FieldProps {
  label: string;
  children: React.ReactNode;
  hint?: string;
  /** Optional content rendered on the right of the label (e.g. character count) */
  trailing?: React.ReactNode;
  className?: string;
}

/**
 * A small reusable labeled field wrapper.
 * Renders a Label + children + optional muted hint text.
 */
export function Field({ label, children, hint, trailing, className }: FieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between gap-2">
        <Label>{label}</Label>
        {trailing ? (
          <span className="text-xs text-muted-foreground tabular-nums">{trailing}</span>
        ) : null}
      </div>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
