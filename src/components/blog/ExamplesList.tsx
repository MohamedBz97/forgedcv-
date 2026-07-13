import { BlogNav, BlogFooter, BlogShell } from "@/components/blog/BlogNav";
import type { ResumeExample } from "@/lib/blog/examples";
import { EXAMPLE_CATEGORIES } from "@/lib/blog/examples";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { ArrowRight } from "lucide-react";

/**
 * Resume examples index — server-rendered for SEO.
 * Shows a grid of role-specific resume examples, each with a live preview.
 */
export function ExamplesList({ examples }: { examples: ResumeExample[] }) {
  return (
    <BlogShell>
      <BlogNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow">Free resume examples</p>
          <h1 className="display-heading mt-3 text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Resume examples for every job
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/65">
            Real, fully-built resume examples for the most-searched roles. Each one
            is editable — load it into the builder, swap in your details, and
            download a polished PDF. No watermarks, no signup.
          </p>
        </section>

        {/* Examples grid grouped by category */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          {EXAMPLE_CATEGORIES.map((cat) => {
            const catExamples = examples.filter((e) => e.category === cat);
            if (catExamples.length === 0) return null;
            return (
              <div key={cat} className="mb-16 scroll-mt-20" id={`category-${cat.toLowerCase()}`}>
                <div className="mb-6 flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    {cat}
                  </h2>
                  <span className="text-sm text-foreground/50">
                    {catExamples.length} {catExamples.length === 1 ? "example" : "examples"}
                  </span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {catExamples.map((ex) => (
                    <ExampleCard key={ex.slug} example={ex} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="display-heading text-2xl sm:text-3xl">
              Don&apos;t see your role?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/75">
              Pick a template and build your own from scratch. Eight ATS-friendly
              designs, fully customizable.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-primary-foreground px-6 font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Start building for free ✨
            </a>
          </div>
        </section>
      </main>
      <BlogFooter />
    </BlogShell>
  );
}

function ExampleCard({ example }: { example: ResumeExample }) {
  return (
    <a
      href={`/?examples=${example.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_-10px_rgba(28,25,23,0.22)]"
    >
      {/* Live preview thumbnail */}
      <div className="relative aspect-[1/1.3] overflow-hidden bg-foreground/[0.03]">
        <div
          className="absolute left-0 top-0 origin-top-left transition-transform duration-300 group-hover:scale-[1.03]"
          style={{ transform: "scale(0.26)", width: "384.6%" }}
        >
          <ResumeDocument data={example.data} settings={example.settings} />
        </div>
      </div>
      {/* Meta */}
      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex w-fit rounded-full bg-forge/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forge">
          {example.category}
        </span>
        <h3 className="mt-3 text-base font-bold leading-snug text-foreground">
          {example.role} Resume
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-foreground/60">
          {example.excerpt}
        </p>
        <span className="mt-auto pt-4 text-sm font-semibold text-primary transition-colors group-hover:text-forge">
          View example
          <ArrowRight className="ml-1 inline size-3.5" />
        </span>
      </div>
    </a>
  );
}
