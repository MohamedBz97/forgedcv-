"use client";

import * as React from "react";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/** Small dashed-border empty state shown when a repeatable list is empty. */
export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed py-10 text-center">
      <div className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
