"use client";

import * as React from "react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewName = "landing" | "templates" | "editor";

interface NavLink {
  label: string;
  href?: string;
  view?: ViewName;
}

const NAV_LINKS: NavLink[] = [
  { label: "Templates", view: "templates" },
  { label: "Examples", href: "/?examples=list" },
  { label: "Resume Score", href: "/?tool=resume-score" },
  { label: "Cover Letter", href: "/?tool=cover-letter" },
  { label: "Blog", href: "/?blog=list" },
];

/**
 * Shared forgedCV site header — glass, hairline, one charcoal CTA.
 * When `onNavigate` / `onStart` are provided the app jumps straight to a
 * store view (no reload); otherwise links behave like plain anchors.
 */
export function SiteHeader({
  active,
  onNavigate,
  onStart,
}: {
  active?: string;
  onNavigate?: (view: ViewName) => void;
  onStart?: () => void;
}) {
  const startBtn = onStart ? (
    <Button size="sm" onClick={onStart} className="h-9 px-4 sm:px-5">
      Start now — it&apos;s free
    </Button>
  ) : (
    <Button asChild size="sm" className="h-9 px-4 sm:px-5">
      <a href="/">Start now — it&apos;s free</a>
    </Button>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" aria-label="forgedCV home" className="shrink-0">
          <BrandLockup size="sm" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;
            const classes = cn(
              "text-sm transition-colors hover:text-ink",
              isActive ? "font-semibold text-ink" : "font-medium text-steel"
            );
            if (link.view && onNavigate) {
              return (
                <button key={link.label} onClick={() => onNavigate(link.view!)} className={classes}>
                  {link.label}
                </button>
              );
            }
            return (
              <a key={link.label} href={link.href ?? "/"} className={classes}>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">{startBtn}</div>
      </div>

      {/* Mobile link rail */}
      <div className="border-t border-line/70 bg-background/80 lg:hidden">
        <nav
          className="mx-auto flex w-full max-w-6xl items-center gap-6 overflow-x-auto px-5 py-2 sm:px-8"
          aria-label="Secondary"
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;
            const classes = cn(
              "whitespace-nowrap text-sm transition-colors hover:text-ink",
              isActive ? "font-semibold text-ink" : "font-medium text-steel"
            );
            if (link.view && onNavigate) {
              return (
                <button key={link.label} onClick={() => onNavigate(link.view!)} className={classes}>
                  {link.label}
                </button>
              );
            }
            return (
              <a key={link.label} href={link.href ?? "/"} className={classes}>
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export const SITE_VIEWS: ViewName[] = ["landing", "templates", "editor"];