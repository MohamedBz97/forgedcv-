import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog/posts";
import { BlogList } from "@/components/blog/BlogList";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { HomeClient } from "@/components/resume/HomeClient";

// Generate metadata based on the blog article being viewed (for SEO)
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ blog?: string }>;
}): Promise<Metadata> {
  const { blog } = await searchParams;

  // No blog param → landing/home page (use the default metadata from layout)
  if (!blog) {
    return {
      title: {
        default: "CVForge — Free Online Resume Builder | CV Maker",
        template: "%s | CVForge",
      },
      alternates: { canonical: "/" },
    };
  }

  // Blog list page
  if (blog === "list") {
    return {
      title: "Career & Job Search Blog — Resume Tips, Interviews & More",
      description:
        "Practical, no-fluff advice on resumes, cover letters, interviews, salary negotiation and career changes. Written by career experts, free to read.",
      alternates: { canonical: "/?blog=list" },
    };
  }

  const post = getPostBySlug(blog);
  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

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

// Sitemap for blog posts (helps crawlers discover them)
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ blog?: string }>;
}) {
  const { blog } = await searchParams;

  // Blog article view (server-rendered for SEO)
  if (blog && blog !== "list") {
    const post = getPostBySlug(blog);
    if (!post) {
      return <BlogNotFound />;
    }
    return (
      <Suspense fallback={null}>
        <BlogArticle post={post} />
      </Suspense>
    );
  }

  // Blog list view (server-rendered for SEO)
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

function BlogNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="display-heading text-4xl sm:text-5xl">Article not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        We couldn&apos;t find that article. It may have moved or been renamed.
      </p>
      <a
        href="/?blog=list"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Back to blog
      </a>
    </div>
  );
}
