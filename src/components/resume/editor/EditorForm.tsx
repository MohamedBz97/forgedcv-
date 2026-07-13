"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EditorSidebar } from "./EditorSidebar";
import { SECTIONS } from "./sections-meta";
import { PersonalSection } from "./sections/PersonalSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { EducationSection } from "./sections/EducationSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { LanguagesSection } from "./sections/LanguagesSection";
import { CoursesSection } from "./sections/CoursesSection";

const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  personal: PersonalSection,
  experience: ExperienceSection,
  education: EducationSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  certifications: CertificationsSection,
  languages: LanguagesSection,
  courses: CoursesSection,
};

export function EditorForm() {
  const [activeSection, setActiveSection] = React.useState<string>("personal");
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const sectionRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  // Tracks whether the active section was changed by a user click, so we
  // can suppress the IntersectionObserver from immediately overriding it.
  const isClickScrolling = React.useRef(false);
  const clickTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = (id: string) => {
    setActiveSection(id);
    isClickScrolling.current = true;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Observe which section is most visible to keep the sidebar in sync.
  React.useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        // Pick the entry with the largest intersection ratio that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-section-id");
          if (id) setActiveSection(id);
        }
      },
      {
        root,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-full flex-col gap-4 lg:flex-row">
      {/* Desktop sidebar */}
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-4">
          <EditorSidebar
            activeSection={activeSection}
            onSelect={handleSelect}
            orientation="vertical"
          />
        </div>
      </aside>

      {/* Mobile horizontal tab bar */}
      <div className="lg:hidden">
        <EditorSidebar
          activeSection={activeSection}
          onSelect={handleSelect}
          orientation="horizontal"
        />
      </div>

      {/* Scrollable form area */}
      <div
        ref={scrollRef}
        className="min-h-0 flex-1 overflow-y-auto rounded-xl"
      >
        <div className="flex flex-col gap-6 pb-12">
          {SECTIONS.map((section) => {
            const Section = SECTION_COMPONENTS[section.id];
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                data-section-id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
              >
                <Card className="scroll-mt-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className="size-4 text-muted-foreground" />
                      {section.label}
                    </CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Section />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
