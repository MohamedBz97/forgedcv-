import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TEMPLATES, getTemplate } from "@/lib/templates";
import { resumeForTemplate } from "@/lib/template-preview";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { CheckCircle2, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTemplate(slug);
  if (!t) return { title: "Template Not Found", robots: { index: false } };
  return {
    title: `${t.name} Resume Template — Free Download | forgedCV`,
    description: `${t.description} Free resume builder template, fully editable and ATS-friendly. Download a clean PDF with zero watermarks — no signup.`,
    keywords: [
      `${t.name.toLowerCase()} resume template`,
      "resume template",
      "ats friendly resume template",
      "free resume template download",
      ...t.tags,
    ],
    alternates: { canonical: `/templates/${t.id}` },
    openGraph: {
      title: `${t.name} Resume Template — Free Download | forgedCV`,
      description: t.description,
      type: "website",
      url: `/templates/${t.id}`,
    },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const t = getTemplate(slug);
  if (!t) notFound();

  const related = TEMPLATES.filter(
    (c) => c.id !== t.id && c.tags.some((tag) => t.tags.includes(tag))
  ).slice(0, 3);

  const { data, settings } = resumeForTemplate(t.id);

  const features = [
    "ATS-friendly layout, parsed cleanly by applicant tracking systems",
    "Edits instantly and downloads to a clean PDF, no watermark",
    "Switch to any other forgedCV template without losing a word",
    "Resize text, spacing, and accent color to match your style",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="section-shell py-12 lg:py-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-foreground/50">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/templates" className="hover:text-foreground">
                  Resume Templates
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-medium text-foreground">
                {t.name}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,460px)_1fr] lg:gap-16">
            {/* Preview */}
            <div>
              <div className="relative aspect-[1/1.414] overflow-hidden rounded-lg bg-white ring-1 ring-line shadow-[var(--shadow-card)]">
                <div
                  className="absolute left-0 top-0 origin-top-left"
                  style={{ transform: "scale(0.5)", width: "200%" }}
                >
                  <ResumeDocument {...{ data, settings }} autoHeight />
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="eyebrow">Free resume template</p>
              <h1 className="display-heading mt-3 text-4xl text-ink sm:text-5xl">
                {t.name}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-forge/10 px-3 py-1 text-xs font-semibold text-forge"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                {t.description}
              </p>

              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-forge" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/?template=${t.id}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-charcoal-900 px-7 text-sm font-semibold text-paper transition-colors hover:bg-charcoal-800"
                >
                  Use this template
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/templates"
                  className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-foreground/15 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
                >
                  View all templates
                </Link>
              </div>

              <p className="mt-4 text-xs text-steel">
                100% free forever · No signup · No watermarks
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 ? (
            <section className="mt-20">
              <h2 className="text-xl font-bold tracking-[-0.02em] text-ink">
                Similar templates
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/templates/${r.id}`}
                    className="group block text-left"
                  >
                    <div className="relative aspect-[1/1.414] overflow-hidden rounded-lg bg-white ring-1 ring-line transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:ring-forge/40">
                      <div
                        className="absolute left-0 top-0 origin-top-left"
                        style={{ transform: "scale(0.34)", width: "294.1176%" }}
                      >
                        <ResumeDocument {...resumeForTemplate(r.id)} autoHeight />
                      </div>
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-ink">{r.name}</h3>
                    <p className="mt-1 text-xs text-steel line-clamp-2">
                      {r.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  );
}