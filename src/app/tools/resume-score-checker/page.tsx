import type { Metadata } from "next";
import { ResumeScorePage } from "@/components/tools/ResumeScorePage";

export const metadata: Metadata = {
  title: "Free Resume Score Checker — Instant Resume Review | forgedCV",
  description:
    "Paste your resume and get an instant score with specific, actionable feedback. Checks length, impact, contact info, sections, ATS readiness, and keywords. 100% free, no signup.",
  alternates: { canonical: "/tools/resume-score-checker" },
  openGraph: {
    title: "Free Resume Score Checker — Instant Resume Review | forgedCV",
    description:
      "Paste your resume and get an instant score with specific, actionable feedback. 100% free, no signup, no upload required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Resume Score Checker | forgedCV",
    description:
      "Paste your resume and get an instant score with specific, actionable feedback.",
  },
};

export default function ResumeScoreRoute() {
  return <ResumeScorePage />;
}