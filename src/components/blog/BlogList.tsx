import type { BlogPost } from "@/lib/blog/posts";
import { BLOG_CATEGORIES } from "@/lib/blog/posts";
import { BlogFooter, BlogNav } from "./BlogNav";

/**
 * Blog index page (server-rendered for SEO).
 *
 * Layout matches flowcv.com's design language:
 *  - cream page background
 *  - huge display-heading H1 with tight negative tracking
 *  - borderless white cards with subtle shadows, rounded-xl
 *  - aubergine primary, coral accent
 *  - generous whitespace, sticky footer
 */

// --- helpers ----------------------------------------------------------------

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// --- card -------------------------------------------------------------------

function PostCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/?blog=${post.slug}`}
      className="group flex h-full flex-col rounded-xl bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Category badge */}
      <span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
        {post.category}
      </span>

      {/* Title */}
      <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-foreground line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>

      {/* Meta row */}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readTime} min read</span>
      </div>

      {/* Read link pinned to bottom */}
      <span className="mt-auto pt-5 text-sm font-semibold text-primary transition-colors group-hover:text-coral">
        Read article &rarr;
      </span>
    </a>
  );
}

// --- page -------------------------------------------------------------------

export function BlogList({ posts }: { posts: BlogPost[] }) {
  // Group posts by category, preserving BLOG_CATEGORIES order.
  const grouped = BLOG_CATEGORIES.map((category) => ({
    category,
    slug: slugifyCategory(category),
    posts: posts.filter((p) => p.category === category),
  })).filter((g) => g.posts.length > 0);

  // Featured = newest 3 overall (for the top hero grid).
  const featured = [...posts].slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BlogNav active="blog" />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Career &amp; Job Search Blog</p>
            <h1 className="display-heading mt-4 text-5xl text-foreground sm:text-6xl">
              Resume tips that actually work
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              No fluff, no filler &mdash; just practical advice on resumes,
              cover letters, interviews, and landing the job you want.
            </p>
          </div>
        </section>

        {/* Category pills (anchor links to category sections) */}
        <section
          className="px-4 sm:px-6"
          aria-label="Browse by category"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
            <a
              href="#top"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              All
            </a>
            {grouped.map((g) => (
              <a
                key={g.slug}
                href={`#category-${g.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {g.category}
              </a>
            ))}
          </div>
        </section>

        {/* Featured (newest 3) */}
        {featured.length > 0 && (
          <section
            id="top"
            className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
            aria-label="Latest articles"
          >
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="eyebrow">Fresh off the press</p>
                  <h2 className="display-heading mt-2 text-3xl text-foreground sm:text-4xl">
                    Latest articles
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Per-category sections */}
        {grouped.map((g) => (
          <section
            key={g.slug}
            id={`category-${g.slug}`}
            className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16"
            aria-label={`${g.category} articles`}
          >
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-block h-6 w-1.5 rounded-full bg-primary"
                />
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {g.category}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {g.posts.length}{" "}
                  {g.posts.length === 1 ? "article" : "articles"}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {g.posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA band */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="display-heading text-3xl sm:text-4xl">
              Build your resume while you&apos;re here
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
              Turn what you just read into a resume you&apos;ll actually send.
              Free to start, no credit card, no fluff.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-background px-7 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              Start for free &nbsp;✨
            </a>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
}
