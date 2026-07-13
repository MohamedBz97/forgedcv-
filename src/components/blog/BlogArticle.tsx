import type { BlogPost, ContentBlock } from "@/lib/blog/posts";
import { getRelatedPosts } from "@/lib/blog/posts";
import { BlogFooter, BlogNav } from "./BlogNav";

/**
 * Single blog article page (server-rendered for SEO).
 *
 * flowcv.com aesthetic:
 *  - cream page background, white content card for readability
 *  - display-heading H1, lead excerpt, meta row with <time>
 *  - content rendered through .prose-flowcv (defined in globals.css)
 *  - JSON-LD Article + BreadcrumbList structured data
 *  - sticky footer (root flex-col, footer mt-auto)
 */

// --- helpers ----------------------------------------------------------------

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
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

// --- content block renderer -------------------------------------------------

function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;

    case "h2":
      return <h2>{block.text}</h2>;

    case "h3":
      return <h3>{block.text}</h3>;

    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-coral bg-secondary/40 py-3 pl-5 pr-4 text-lg italic leading-relaxed text-foreground">
          <p className="m-0">&ldquo;{block.text}&rdquo;</p>
          {block.cite ? (
            <footer className="mt-2 text-sm not-italic text-muted-foreground">
              &mdash; {block.cite}
            </footer>
          ) : null}
        </blockquote>
      );

    case "tip":
      return (
        <aside className="my-6 rounded-xl border border-primary/10 bg-primary/[0.04] p-5">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-primary">
            <span aria-hidden="true">&#128161;</span>
            {block.title}
          </p>
          <p className="mt-2 mb-0 text-sm leading-relaxed text-foreground/80">
            {block.text}
          </p>
        </aside>
      );

    default:
      // Exhaustive switch — if a new block type is added, TypeScript will
      // complain here.
      return null;
  }
}

// --- related card -----------------------------------------------------------

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/?blog=${post.slug}`}
      className="group flex h-full flex-col rounded-xl bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
        {post.category}
      </span>
      <h3 className="mt-3 text-base font-bold leading-snug tracking-tight text-foreground line-clamp-2">
        {post.title}
      </h3>
      <span className="mt-auto pt-4 text-sm font-semibold text-primary transition-colors group-hover:text-coral">
        Read &rarr;
      </span>
    </a>
  );
}

// --- JSON-LD ----------------------------------------------------------------

function buildArticleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "CVForge",
    },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/?blog=${post.slug}`,
    },
  };
}

function buildBreadcrumbJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "/?blog=list",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `/?blog=${post.slug}`,
      },
    ],
  };
}

// --- page -------------------------------------------------------------------

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug, 3);
  const categorySlug = slugifyCategory(post.category);

  const articleJsonLd = buildArticleJsonLd(post);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(post);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BlogNav />

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6"
        >
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a href="/?blog=list" className="hover:text-primary">
                Blog
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="truncate text-foreground" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Article header */}
        <header className="px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <a
              href={`/?blog=list#category-${categorySlug}`}
              className="inline-flex items-center rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-coral"
            >
              {post.category}
            </a>

            <h1 className="display-heading mt-5 text-4xl text-foreground sm:text-5xl">
              {post.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Article body — white card for readability */}
        <article className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-card p-6 shadow-sm sm:p-10 md:p-12">
              <div className="prose-flowcv mx-auto max-w-2xl">
                {post.content.map((block, i) => (
                  <ContentBlockView key={i} block={block} />
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Article CTA */}
        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="display-heading text-2xl sm:text-3xl">
              Ready to put this into practice?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/75">
              Build a resume that follows every rule in this article &mdash;
              in about 15 minutes.
            </p>
            <a
              href="/"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-background px-7 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              Build my resume &nbsp;✨
            </a>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 ? (
          <section
            className="px-4 pb-24 sm:px-6"
            aria-label="Related articles"
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-block h-6 w-1.5 rounded-full bg-primary"
                />
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Related articles
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <RelatedCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Back to blog */}
        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <a
              href="/?blog=list"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-coral"
            >
              <span aria-hidden="true">&larr;</span> Back to blog
            </a>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
}
