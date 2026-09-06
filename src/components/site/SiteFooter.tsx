import { BrandLockup } from "@/components/brand/BrandLockup";
import { TEMPLATES } from "@/lib/templates";
import { DONATE } from "@/lib/site-config";

const templateCount = TEMPLATES.length;

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Resume Builder", href: "/" },
      { label: "Resume Templates", href: "/" },
      { label: "Resume Examples", href: "/?examples=list" },
      { label: "Cover Letter Tool", href: "/?tool=cover-letter" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { label: "Resume Score Checker", href: "/?tool=resume-score" },
      { label: "Cover Letter Builder", href: "/?tool=cover-letter" },
      { label: "Career Resources", href: "/?blog=list" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/?blog=list" },
      { label: "Examples", href: "/?examples=list" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: `${DONATE.label} (${DONATE.amount})`, href: DONATE.url },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/" aria-label="forgedCV home" className="inline-block">
              <BrandLockup size="lg" onDark />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-400">
              The free resume builder for people who&apos;d rather be working than
              formatting. {templateCount} premium templates, live preview, unlimited PDF
              downloads — no watermarks, no paywalls, no signup.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-500">
              Forged for job seekers
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-500">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-charcoal-400 transition-colors hover:text-charcoal-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-charcoal-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} forgedCV. Forge a resume that gets you hired.</p>
          <p className="font-medium text-charcoal-500">
            {templateCount} templates · 100% free forever · 0 watermarks
          </p>
        </div>
      </div>
    </footer>
  );
}