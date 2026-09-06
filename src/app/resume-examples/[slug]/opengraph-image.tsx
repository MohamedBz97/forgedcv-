import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { OGCard } from "@/components/og/OGCard";
import { getExampleBySlug } from "@/lib/blog/examples";

export const alt = "Resume example — fully built sample you can edit for free";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ExampleOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const example = getExampleBySlug(slug);
  if (!example) notFound();

  return new ImageResponse(
    <OGCard
      eyebrow="Resume example"
      title={`${example.role}\nResume`}
      subline={example.excerpt}
      chips={[example.category, ...example.keywords.slice(0, 2)]}
    />,
    size
  );
}