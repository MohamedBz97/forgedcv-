"use client";

import { useRouter } from "next/navigation";
import { useResumeStore } from "@/lib/resume-store";
import { Button } from "@/components/ui/button";
import type { ResumeData, ResumeSettings } from "@/lib/types";

/**
 * Client button that loads an example resume into the builder store
 * and navigates to the editor.
 */
export function LoadExampleButton({
  data,
  settings,
  title,
}: {
  data: ResumeData;
  settings: ResumeSettings;
  title: string;
}) {
  const router = useRouter();
  const loadDocument = useResumeStore((s) => s.loadDocument);

  const handleLoad = () => {
    loadDocument(data, settings, title);
    // Navigate to the bare URL (no query params) so the app renders
    router.push("/");
  };

  return (
    <Button
      size="lg"
      className="h-12 rounded-xl bg-forge px-7 text-base font-semibold text-white hover:bg-forge-dark"
      onClick={handleLoad}
    >
      Use this example ✨
    </Button>
  );
}
