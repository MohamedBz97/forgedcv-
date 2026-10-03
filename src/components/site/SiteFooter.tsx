import { BrandLockup } from "@/components/brand/BrandLockup";
import { DONATE } from "@/lib/site-config";

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Resume Builder", href: "/" },
      { label: "Resume Templates", href: "/templates" },
      { label: "Resume Examples", href: "/resume-examples" },
      { label: "Cover Letter Tool", href: "/tools/cover-letter-builder" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { label: "Resume Score Checker", href: "/tools/resume-score-checker" },
      { label: "Cover Letter Builder", href: "/tools/cover-letter-builder" },
      { label: "Career Resources", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Examples", href: "/resume-examples" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
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
              formatting. Edit with a live preview and download a clean PDF. Your
              resume stays in this browser unless you export or print it.
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
            Free to use · No watermarks
          </p>
        </div>
      </div>
    </footer>
  );
}