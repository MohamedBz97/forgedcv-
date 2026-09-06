import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

/**
 * Shared chrome for blog / examples pages — thin wrapper over the sitewide
 * SiteHeader + SiteFooter so every page shares one premium header/footer.
 */

export { SiteFooter as BlogFooter };

export function BlogNav({ active }: { active?: "blog" }) {
  return <SiteHeader active={active === "blog" ? "Blog" : undefined} />;
}

/**
 * Convenience wrapper that lays out a page with the sticky-footer rule.
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
      <SiteFooter />
    </div>
  );
}