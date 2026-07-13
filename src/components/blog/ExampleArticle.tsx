import { BlogNav, BlogFooter, BlogShell } from "@/components/blog/BlogNav";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { LoadExampleButton } from "@/components/blog/LoadExampleButton";
import { getExampleBySlug, getRelatedExamples, type ResumeExample } from "@/lib/blog/examples";
import { TEMPLATES } from "@/lib/templates";
import { ArrowRight, ArrowLeft, Check, X, Lightbulb } from "lucide-react";

/**
 * Single resume example page — server-rendered for SEO.
 * Renders the live sample resume + SEO copy + JSON-LD.
 */
export function ExampleArticle({ example }: { example: ResumeExample }) {
  const related = getRelatedExamples(example.slug, 3);
  const relatedTemplateObjs = (example.relatedTemplates || [])
    .map((id) => TEMPLATES.find((t) => t.id === id))
    .filter(Boolean)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: example.title,
    description: example.metaDescription,
    keywords: example.keywords.join(", "),
    author: { "@type": "Organization", name: "forgedCV" },
    publisher: { "@type": "Organization", name: "forgedCV" },
    mainEntityOfPage: `https://forgedcv.com/?examples=${example.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://forgedcv.com/" },
      { "@type": "ListItem", position: 2, name: "Examples", item: "https://forgedcv.com/?examples=list" },
      { "@type": "ListItem", position: 3, name: example.role },
    ],
  };

  return (
    <BlogShell>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <BlogNav />
      <main className="flex-1">
        <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-foreground/50">
              <li><a href="/" className="hover:text-foreground">Home</a></li>
              <li aria-hidden>/</li>
              <li><a href="/?examples=list" className="hover:text-foreground">Examples</a></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-medium text-foreground">{example.role}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="text-center">
            <span className="inline-flex rounded-full bg-forge/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge">
              {example.category}
            </span>
            <h1 className="display-heading mt-4 text-4xl text-foreground sm:text-5xl">
              {example.role} Resume Example
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/65">
              {example.excerpt}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LoadExampleButton
                data={example.data}
                settings={example.settings}
                title={`${example.role} Resume`}
              />
              <a
                href="/?examples=list"
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-foreground/15 px-6 font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                <ArrowLeft className="mr-1.5 size-4" />
                All examples
              </a>
            </div>
          </header>

          {/* Live resume preview */}
          <section className="mt-12" aria-label="Resume preview">
            <div className="overflow-auto rounded-2xl bg-foreground/[0.04] p-4 sm:p-8">
              <div className="mx-auto" style={{ width: 794 }}>
                <ResumeDocument data={example.data} settings={example.settings} />
              </div>
            </div>
          </section>

          {/* SEO copy */}
          <section className="prose-flowcv mt-12 max-w-3xl">
            <h2>What to include in a {example.role.toLowerCase()} resume</h2>
            <p>{example.intro}</p>
            <ul>
              {example.whatToInclude.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>

            {/* Key skills */}
            <h2>Top {example.role.toLowerCase()} skills to list</h2>
            <p>
              These are the skills hiring managers and ATS look for most. Weave
              them naturally into your experience bullets and skills section — don&apos;t
              just list them in a block.
            </p>
            <div className="not-prose my-6 flex flex-wrap gap-2">
              {example.keySkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground ring-1 ring-black/5"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bullet examples */}
            <h2>{example.role} resume bullet point examples</h2>
            <p>
              The single biggest resume mistake? Vague bullets. Here are{" "}
              {example.bulletExamples.length} rewrites that turn weak bullets into
              strong ones. Notice how the strong versions add a metric, a scope, or
              a concrete outcome.
            </p>
            <div className="not-prose my-6 space-y-4">
              {example.bulletExamples.map((b, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-border">
                  <div className="flex items-start gap-3 border-b border-border bg-destructive/5 p-4">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-destructive">Weak</p>
                      <p className="mt-0.5 text-sm text-foreground/70">{b.weak}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-emerald2/5 p-4">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald2" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald2">Strong</p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">{b.strong}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tip */}
            <div className="not-prose my-6 rounded-xl bg-forge/[0.06] p-5">
              <div className="flex items-center gap-2">
                <Lightbulb className="size-5 text-forge" />
                <p className="font-semibold text-foreground">Quick tip</p>
              </div>
              <p className="mt-2 text-sm text-foreground/75">
                Load the example above into the builder with one click, then swap
                in your own details. You keep the structure and proven layout — you
                just personalize the content. It&apos;s the fastest way to a
                polished resume.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-12">
            <h2 className="display-heading text-2xl sm:text-3xl">
              Ready to make it yours?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/75">
              Load this {example.role.toLowerCase()} example into the builder and
              customize every detail. Free, no signup, unlimited PDF downloads.
            </p>
            <div className="mt-6 flex justify-center">
              <LoadExampleButton
                data={example.data}
                settings={example.settings}
                title={`${example.role} Resume`}
              />
            </div>
          </section>

          {/* Related templates */}
          {relatedTemplateObjs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Templates that work well for {example.role.toLowerCase()}s
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {relatedTemplateObjs.map((t) => (
                  <a
                    key={t!.id}
                    href="/"
                    className="group text-left"
                  >
                    <div className="aspect-[1/1.414] overflow-hidden rounded-lg bg-card shadow-sm ring-1 ring-black/5 transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
                      <div className="origin-top-left" style={{ transform: "scale(0.26)", width: "384.6%" }}>
                        <ResumeDocument data={example.data} settings={{ ...example.settings, templateId: t!.id }} />
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium text-foreground group-hover:text-forge">{t!.name}</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Related examples */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Other resume examples
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {related.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`/?examples=${rel.slug}`}
                    className="group flex flex-col rounded-xl bg-card p-4 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-forge">
                      {rel.category}
                    </span>
                    <p className="mt-1 font-bold text-foreground">{rel.role}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-foreground/60">{rel.excerpt}</p>
                    <span className="mt-auto pt-3 text-sm font-semibold text-primary group-hover:text-forge">
                      View <ArrowRight className="inline size-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <BlogFooter />
    </BlogShell>
  );
}
