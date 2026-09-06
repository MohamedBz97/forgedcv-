import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { OGCard } from "@/components/og/OGCard";
import { getPostBySlug } from "@/lib/blog/posts";

export const alt = "Article from the forgedCV career blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function fitTitle(title: string, max = 74): string {
  return title.length > max ? `${title.slice(0, max - 1).trimEnd()}…` : title;
}

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return new ImageResponse(
    <OGCard
      eyebrow="Career & job search blog"
      title={fitTitle(post.title)}
      subline={`${post.category} · ${post.readTime} read · by ${post.author}`}
      chips={post.keywords.slice(0, 3)}
    />,
    size
  );
}