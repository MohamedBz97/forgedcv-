"use client";

import * as React from "react";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RepeatableItemProps {
  index: number;
  total: number;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onRemove?: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

/**
 * A card-like wrapper for repeatable list items.
 * Header row contains optional title and action buttons
 * (move up, move down, delete).
 */
export function RepeatableItem({
  index,
  total,
  onMoveUp,
  onMoveDown,
  onRemove,
  children,
  title,
  className,
}: RepeatableItemProps) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-xs",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-foreground">
          <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-muted text-xs tabular-nums text-muted-foreground">
            {index + 1}
          </span>
          <span className="truncate">{title ?? "Item"}</span>
        </div>
        <div className="flex items-center gap-0.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={onMoveUp}
            disabled={isFirst || !onMoveUp}
            aria-label="Move up"
          >
            <ChevronUp className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={onMoveDown}
            disabled={isLast || !onMoveDown}
            aria-label="Move down"
          >
            <ChevronDown className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-7 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={onRemove}
            disabled={!onRemove}
            aria-label="Delete"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
