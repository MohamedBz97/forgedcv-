import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog/posts";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Career & Job Search Blog — Resume Tips, Interviews & More",
  description:
    "Practical, no-fluff advice on resumes, cover letters, interviews, salary negotiation and career changes. 100% free to read.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Career & Job Search Blog — Resume Tips, Interviews & More",
    description:
      "Practical, no-fluff advice on resumes, cover letters, interviews, salary negotiation and career changes.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
