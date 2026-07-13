"use client";

import type { ResumeData, ResumeSettings } from "@/lib/types";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

/**
 * Renders a ResumeDocument scaled to fit a target width, with the container
 * sized to the EXACT scaled dimensions (so there's no empty gap below).
 *
 * The resume is natively 794px wide (A4 @ 96dpi). We scale it down to `width`
 * and set the container height to 1123 * scale so the box matches the visual.
 *
 * Use this anywhere you need a thumbnail/preview of a resume at a custom size
 * (hero mockups, template gallery cards, example cards).
 */
export function ScaledResume({
  data,
  settings,
  width,
  className,
}: {
  data: ResumeData;
  settings: ResumeSettings;
  width: number;
  className?: string;
}) {
  const scale = width / 794;
  const height = 1123 * scale;
  return (
    <div
      className={className}
      style={{ width, height, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: 794,
        }}
      >
        <ResumeDocument data={data} settings={settings} />
      </div>
    </div>
  );
}
