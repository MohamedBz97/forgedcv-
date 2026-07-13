import type { ReactNode } from "react";
import { LogoMark } from "@/components/brand/LogoMark";

/**
 * Shared chrome (top nav + footer) for the forgedCV blog + examples.
 *
 * Server component — uses plain <a> tags so it stays SEO-friendly and
 * works without any client JS. Links to the resume builder app root
 * (href="/") reload the landing view; blog links use ?blog=.
 */

interface NavLink {
  label: string;
  href: string;
  /** when true, renders as bold/active */
  active?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Resume Builder", href: "/" },
  { label: "Templates", href: "/" },
  { label: "Examples", href: "/?examples=list" },
  { label: "Blog", href: "/?blog=list" },
];

export function BlogNav({ active }: { active?: "blog" }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-transparent bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Primary"
      >
        {/* Wordmark + logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="forgedCV home"
        >
          <LogoMark className="size-7" />
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-primary">forged</span>
            <span className="text-forge">CV</span>
          </span>
        </a>

        {/* Center nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  link.label === "Blog" && active === "blog"
                    ? "font-bold text-primary"
                    : "font-medium text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start now
        </a>
      </nav>

      {/* Mobile nav row */}
      <div className="border-t border-border/60 bg-background/80 md:hidden">
        <ul className="mx-auto flex w-full max-w-6xl items-center gap-5 overflow-x-auto px-4 py-2 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="shrink-0">
              <a
                href={link.href}
                className={`text-sm whitespace-nowrap transition-colors hover:text-primary ${
                  link.label === "Blog" && active === "blog"
                    ? "font-bold text-primary"
                    : "font-medium text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Resume Builder", href: "/" },
      { label: "Templates", href: "/" },
      { label: "Examples", href: "/?examples=list" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/?blog=list" },
      { label: "About", href: "/" },
    ],
  },
];

export function BlogFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Wordmark + tagline */}
          <div className="col-span-2 sm:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2"
              aria-label="forgedCV home"
            >
              <LogoMark className="size-8" />
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-primary-foreground">forged</span>
                <span className="text-forge">CV</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
              100% free resume builder. Forge a resume that actually gets read.
              20 templates, unlimited PDFs, no watermarks.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6">
          <p className="text-sm text-primary-foreground/60">
            &copy; 2026 CVForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Convenience wrapper that lays out a blog page with the sticky-footer rule:
 * root flex-col, footer pushed to bottom via mt-auto.
 */
export function BlogShell({
  children,
  active,
}: {
  children: ReactNode;
  active?: "blog";
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BlogNav active={active} />
      <main className="flex-1">{children}</main>
      <BlogFooter />
    </div>
  );
}
