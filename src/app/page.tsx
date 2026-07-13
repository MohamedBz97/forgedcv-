import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog/posts";
import { getAllExamples, getExampleBySlug } from "@/lib/blog/examples";
import { BlogList } from "@/components/blog/BlogList";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { ExamplesList } from "@/components/blog/ExamplesList";
import { ExampleArticle } from "@/components/blog/ExampleArticle";
import { HomeClient } from "@/components/resume/HomeClient";

// Generate metadata based on what's being viewed (blog article / example / list)
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ blog?: string; examples?: string }>;
}): Promise<Metadata> {
  const { blog, examples } = await searchParams;

  // No param → landing/home page
  if (!blog && !examples) {
    return {
      title: {
        default: "forgedCV — Free Online Resume Builder | CV Maker",
        template: "%s | forgedCV",
      },
      alternates: { canonical: "/" },
    };
  }

  // Examples list
  if (examples === "list") {
    return {
      title: "Resume Examples for Every Job — Free to Edit & Download",
      description:
        "Browse free resume examples for software engineers, nurses, teachers, marketers and more. Each example is fully editable — load it, tweak it, download a PDF. No watermarks.",
      keywords: [
        "resume examples",
        "resume samples",
        "resume example",
        "software engineer resume",
        "nurse resume",
        "teacher resume",
      ],
      alternates: { canonical: "/?examples=list" },
    };
  }

  // Single example page
  if (examples) {
    const ex = getExampleBySlug(examples);
    if (!ex) {
      return { title: "Example Not Found", robots: { index: false, follow: false } };
    }
    return {
      title: ex.title,
      description: ex.metaDescription,
      keywords: ex.keywords,
      alternates: { canonical: `/?examples=${ex.slug}` },
      openGraph: {
        title: ex.title,
        description: ex.metaDescription,
        type: "article",
        tags: ex.keywords,
      },
      twitter: {
        card: "summary_large_image",
        title: ex.title,
        description: ex.metaDescription,
      },
    };
  }

  // Blog list
  if (blog === "list") {
    return {
      title: "Career & Job Search Blog — Resume Tips, Interviews & More",
      description:
        "Practical, no-fluff advice on resumes, cover letters, interviews, salary negotiation and career changes. Written by career experts, free to read.",
      alternates: { canonical: "/?blog=list" },
    };
  }

  // Single blog article
  const post = blog ? getPostBySlug(blog) : undefined;
  if (blog && !post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }
  if (post) {
    return {
      title: post.title,
      description: post.metaDescription,
      keywords: post.keywords,
      alternates: { canonical: `/?blog=${post.slug}` },
      openGraph: {
        title: post.title,
        description: post.metaDescription,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.updated || post.date,
        authors: [post.author],
        tags: post.keywords,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.metaDescription,
      },
    };
  }

  return {};
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ blog?: string; examples?: string }>;
}) {
  const { blog, examples } = await searchParams;

  // Example article (server-rendered for SEO)
  if (examples && examples !== "list") {
    const ex = getExampleBySlug(examples);
    if (!ex) return <NotFound what="example" />;
    return (
      <Suspense fallback={null}>
        <ExampleArticle example={ex} />
      </Suspense>
    );
  }

  // Examples list
  if (examples === "list") {
    const all = getAllExamples();
    return (
      <Suspense fallback={null}>
        <ExamplesList examples={all} />
      </Suspense>
    );
  }

  // Blog article
  if (blog && blog !== "list") {
    const post = getPostBySlug(blog);
    if (!post) return <NotFound what="article" />;
    return (
      <Suspense fallback={null}>
        <BlogArticle post={post} />
      </Suspense>
    );
  }

  // Blog list
  if (blog === "list") {
    const posts = getAllPosts();
    return (
      <Suspense fallback={null}>
        <BlogList posts={posts} />
      </Suspense>
    );
  }

  // Default: the client-side resume builder app
  return <HomeClient />;
}

function NotFound({ what }: { what: "article" | "example" }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="display-heading text-4xl sm:text-5xl">{what === "article" ? "Article" : "Example"} not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        We couldn&apos;t find that page. It may have moved or been renamed.
      </p>
      <a
        href={what === "article" ? "/?blog=list" : "/?examples=list"}
        className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Back to {what === "article" ? "blog" : "examples"}
      </a>
    </div>
  );
}
