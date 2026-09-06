import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllExamples, getExampleBySlug } from "@/lib/blog/examples";
import { ExampleArticle } from "@/components/blog/ExampleArticle";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllExamples().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const example = getExampleBySlug(slug);
  if (!example) return { title: "Example Not Found", robots: { index: false } };
  return {
    title: example.title,
    description: example.metaDescription,
    keywords: example.keywords,
    alternates: { canonical: `/resume-examples/${example.slug}` },
    openGraph: {
      title: example.title,
      description: example.metaDescription,
      type: "article",
      tags: example.keywords,
      url: `/resume-examples/${example.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: example.title,
      description: example.metaDescription,
    },
  };
}

export default async function ResumeExamplePage({ params }: Props) {
  const { slug } = await params;
  const example = getExampleBySlug(slug);
  if (!example) notFound();
  return <ExampleArticle example={example} />;
}