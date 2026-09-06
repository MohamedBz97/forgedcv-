import { Suspense } from "react";
import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { HomeClient } from "@/components/resume/HomeClient";

export const metadata: Metadata = {
  title: {
    default: "forgedCV — Free Online Resume Builder | CV Maker",
    template: "%s | forgedCV",
  },
  description:
    "Create a professional resume in minutes with forgedCV's free resume builder. 32 ATS-friendly templates, instant PDF downloads, zero watermarks, no signup.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "forgedCV — Free Online Resume Builder | CV Maker",
    description:
      "Create a professional resume in minutes — 32 ATS-friendly templates, instant PDF downloads, zero watermarks, no signup.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "forgedCV — Free Online Resume Builder",
    description:
      "Create a professional resume in minutes — 32 ATS-friendly templates, instant PDF downloads, zero watermarks, no signup.",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ blog?: string; examples?: string; tool?: string }>;
}) {
  const { blog, examples, tool } = await searchParams;

  // Legacy query-param URLs → 301 to the new clean paths
  if (tool === "resume-score") permanentRedirect("/tools/resume-score-checker");
  if (tool === "cover-letter") permanentRedirect("/tools/cover-letter-builder");
  if (examples === "list") permanentRedirect("/resume-examples");
  if (examples) permanentRedirect(`/resume-examples/${examples}`);
  if (blog === "list") permanentRedirect("/blog");
  if (blog) permanentRedirect(`/blog/${blog}`);

  // Default: the client-side resume builder app
  return (
    <Suspense fallback={null}>
      <HomeClient />
    </Suspense>
  );
}