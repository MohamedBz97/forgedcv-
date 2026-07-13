"use client";

import { useEffect, useRef, useState } from "react";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/lib/resume-store";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { cn } from "@/lib/utils";

export function PreviewPanel() {
  const data = useResumeStore((s) => s.data);
  const settings = useResumeStore((s) => s.settings);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(600);
  const [zoom, setZoom] = useState(1); // user zoom multiplier on top of fit
  const [fitMode, setFitMode] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // The resume is 794px wide. Compute a fit scale so it fits the container width.
  const fitScale = Math.min(containerWidth / 794, 1);
  const scale = fitMode ? fitScale * zoom : zoom;
  const pageWidth = 794 * scale;

  return (
    <div className="flex h-full flex-col">
      {/* Zoom toolbar */}
      <div className="flex items-center justify-between gap-2 border-b border-black/5 bg-background/60 px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Live preview</span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-7 text-foreground/60 hover:text-foreground"
            onClick={() => {
              setFitMode(false);
              setZoom((z) => Math.max(0.3, +(z - 0.1).toFixed(2)));
            }}
            disabled={!fitMode && zoom <= 0.3}
          >
            <ZoomOut className="size-4" />
          </Button>
          <span className="w-12 text-center text-xs tabular-nums text-foreground/50">
            {fitMode ? "Fit" : `${Math.round(zoom * 100)}%`}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="size-7 text-foreground/60 hover:text-foreground"
            onClick={() => {
              setFitMode(false);
              setZoom((z) => Math.min(2, +(z + 0.1).toFixed(2)));
            }}
            disabled={!fitMode && zoom >= 2}
          >
            <ZoomIn className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-7 text-foreground/60 hover:text-foreground"
            onClick={() => {
              setFitMode(true);
              setZoom(1);
            }}
            title="Fit to width"
          >
            <Maximize2 className="size-4" />
          </Button>
        </div>
      </div>

      {/* Preview area */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto bg-foreground/[0.04] p-4 sm:p-6"
      >
        <div
          className={cn("mx-auto transition-[width]")}
          style={{ width: pageWidth }}
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
      </div>
    </div>
  );
}
