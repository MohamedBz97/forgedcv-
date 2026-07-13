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
import { BoldTemplate } from "./templates/BoldTemplate";
import { CompactTemplate } from "./templates/CompactTemplate";
import { AcademicTemplate } from "./templates/AcademicTemplate";
import { DesignerTemplate } from "./templates/DesignerTemplate";
import { CorporateBlueTemplate } from "./templates/CorporateBlueTemplate";
import { FreshTemplate } from "./templates/FreshTemplate";
import { MonoTemplate } from "./templates/MonoTemplate";
import { SidebarDarkTemplate } from "./templates/SidebarDarkTemplate";
import { TwoColLightTemplate } from "./templates/TwoColLightTemplate";
import { BannerPhotoTemplate } from "./templates/BannerPhotoTemplate";
import { TimelineTemplate } from "./templates/TimelineTemplate";
import { GridSkillsTemplate } from "./templates/GridSkillsTemplate";

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
    case "bold":
      return <BoldTemplate data={data} settings={settings} />;
    case "compact":
      return <CompactTemplate data={data} settings={settings} />;
    case "academic":
      return <AcademicTemplate data={data} settings={settings} />;
    case "designer":
      return <DesignerTemplate data={data} settings={settings} />;
    case "corporate-blue":
      return <CorporateBlueTemplate data={data} settings={settings} />;
    case "fresh":
      return <FreshTemplate data={data} settings={settings} />;
    case "mono":
      return <MonoTemplate data={data} settings={settings} />;
    case "sidebar-dark":
      return <SidebarDarkTemplate data={data} settings={settings} />;
    case "two-col-light":
      return <TwoColLightTemplate data={data} settings={settings} />;
    case "banner-photo":
      return <BannerPhotoTemplate data={data} settings={settings} />;
    case "timeline":
      return <TimelineTemplate data={data} settings={settings} />;
    case "grid-skills":
      return <GridSkillsTemplate data={data} settings={settings} />;
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
