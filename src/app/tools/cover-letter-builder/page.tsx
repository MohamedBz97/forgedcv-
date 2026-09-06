import type { Metadata } from "next";
import { CoverLetterPage } from "@/components/tools/CoverLetterPage";

export const metadata: Metadata = {
  title: "Free Cover Letter Builder & Checker | forgedCV",
  description:
    "Build a polished cover letter in seconds — fill in a few fields and get a ready-to-send letter. Or paste an existing one and get an instant score with specific fixes. 100% free, no signup.",
  alternates: { canonical: "/tools/cover-letter-builder" },
  openGraph: {
    title: "Free Cover Letter Builder & Checker | forgedCV",
    description:
      "Build a polished cover letter in seconds, or paste an existing one and get an instant score with specific fixes. 100% free, no signup.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Cover Letter Builder & Checker | forgedCV",
    description:
      "Build a polished cover letter in seconds, or paste one to get an instant score.",
  },
};

export default function CoverLetterRoute() {
  return <CoverLetterPage />;
}