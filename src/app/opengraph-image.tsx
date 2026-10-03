import { ImageResponse } from "next/og";
import { OGCard } from "@/components/og/OGCard";

export const alt = "forgedCV — Free online resume builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <OGCard
      eyebrow="Free resume builder"
      title={"Forge a resume\nthat gets you hired."}
      subline="Customizable layouts, live preview, instant PDF export. No watermark, no signup."
      chips={["100% free", "No watermarks", "ATS-friendly"]}
    />,
    size
  );
}