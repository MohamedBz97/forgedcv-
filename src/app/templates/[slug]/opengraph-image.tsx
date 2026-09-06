import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { OGCard } from "@/components/og/OGCard";
import { getTemplate } from "@/lib/templates";

export const alt = "Free resume template — editable and ATS-friendly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function fit(text: string, max = 96): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export default async function TemplateOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTemplate(slug);
  if (!t) notFound();

  return new ImageResponse(
    <OGCard
      eyebrow="Free resume template"
      title={`${t.name}\nTemplate`}
      subline={fit(t.description)}
      chips={t.tags}
    />,
    size
  );
}