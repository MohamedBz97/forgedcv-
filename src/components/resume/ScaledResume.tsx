"use client";

import { useEffect, useRef, useState } from "react";
import type { ResumeData, ResumeSettings } from "@/lib/types";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

/**
 * Renders a ResumeDocument scaled to fit a target width, with the container
 * sized to the EXACT scaled content height (measured via ResizeObserver).
 *
 * This solves the "not filled" problem: ResumeDocument has minHeight: 1123px
 * (full A4), but content may be shorter OR longer. We measure the real
 * rendered height and scale the container to match — no empty gaps, no
 * clipping, always exactly filled.
 *
 * The resume is natively 794px wide (A4 @ 96dpi). We scale it to `width`
 * and measure the inner content height, then set container height =
 * measuredHeight * scale.
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
  const innerRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const update = () => {
      const h = el.scrollHeight; // full content height incl. minHeight padding
      setMeasuredHeight(h);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [data, settings]);

  const containerHeight = measuredHeight ? measuredHeight * scale : undefined;

  return (
    <div
      className={className}
      style={{
        width,
        height: containerHeight,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: 794,
        }}
      >
        <ResumeDocument data={data} settings={settings} autoHeight />
      </div>
    </div>
  );
}
