import React from "react";
import type { ResumeData, ResumeSettings, TemplateId } from "@/lib/types";
import { FONT_OPTIONS } from "@/lib/templates";
import { fontSizeClass } from "./templates/shared";

import { ModernTemplate } from "./templates/ModernTemplate";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { CreativeTemplate } from "./templates/CreativeTemplate";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { ExecutiveTemplate } from "./templates/ExecutiveTemplate";
import { TechTemplate } from "./templates/TechTemplate";
import { ElegantTemplate } from "./templates/ElegantTemplate";

interface ResumeDocumentProps {
  data: ResumeData;
  settings: ResumeSettings;
  className?: string;
}

function getFontStack(name: string): string {
  const found = FONT_OPTIONS.find((f) => f.name === name);
  return found ? found.stack : FONT_OPTIONS[0].stack;
}

function renderTemplate(id: TemplateId, data: ResumeData, settings: ResumeSettings) {
  switch (id) {
    case "modern":
      return <ModernTemplate data={data} settings={settings} />;
    case "classic":
      return <ClassicTemplate data={data} settings={settings} />;
    case "minimal":
      return <MinimalTemplate data={data} settings={settings} />;
    case "creative":
      return <CreativeTemplate data={data} settings={settings} />;
    case "professional":
      return <ProfessionalTemplate data={data} settings={settings} />;
    case "executive":
      return <ExecutiveTemplate data={data} settings={settings} />;
    case "tech":
      return <TechTemplate data={data} settings={settings} />;
    case "elegant":
      return <ElegantTemplate data={data} settings={settings} />;
    default:
      return <ModernTemplate data={data} settings={settings} />;
  }
}

export function ResumeDocument({ data, settings, className }: ResumeDocumentProps) {
  const fontStack = getFontStack(settings.fontFamily);
  const rootFontSize = fontSizeClass(settings.fontSize);

  return (
    <div
      className={`resume-page ${className || ""}`}
      style={
        {
          width: "794px",
          minHeight: "1123px",
          backgroundColor: "#ffffff",
          color: "#1f2937",
          fontFamily: fontStack,
          fontSize: rootFontSize,
          lineHeight: 1.5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
          overflow: "hidden",
          position: "relative",
          ["--accent" as string]: settings.accentColor,
        } as React.CSSProperties
      }
    >
      {renderTemplate(settings.templateId, data, settings)}
    </div>
  );
}

export default ResumeDocument;
