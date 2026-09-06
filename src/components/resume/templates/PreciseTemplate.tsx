import React from "react";
import {
  BulletList,
  contactItems,
  spacingClass,
  hexToRgba,
  dateRange,
  type ResumeData,
  type ResumeSettings,
} from "./shared";

interface TemplateProps {
  data: ResumeData;
  settings: ResumeSettings;
}

const MONO = "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

function PreciseHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        fontSize: "10.5px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: accent,
        margin: "0 0 12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span aria-hidden style={{ width: "18px", height: "2px", backgroundColor: accent, display: "inline-block" }} />
      {children}
    </h3>
  );
}

function DarkSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3
        style={{
          fontFamily: MONO,
          fontSize: "9.5px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.55)",
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

export function PreciseTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100%",
        fontFamily: "inherit",
        color: "#1f2937",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Main column */}
      <main
        style={{
          flex: 1,
          padding: `${sp.padY} ${sp.padX}`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
        }}
      >
        {/* Header */}
        <header style={{ borderBottom: "2px solid #111827", paddingBottom: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#0f172a",
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              {personal.fullName}
            </h1>
            {personal.jobTitle && (
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: "9px",
                  fontWeight: 500,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {personal.jobTitle}
              </p>
            )}
          </div>
        </header>

        {/* Summary */}
        {personal.summary && (
          <section>
            <PreciseHeading accent={accent}>Summary</PreciseHeading>
            <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#334155", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <PreciseHeading accent={accent}>Experience</PreciseHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a" }}>{exp.position}</div>
                      <div style={{ fontSize: "11.5px", color: accent, fontWeight: 600 }}>
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: "10px", color: "#64748b", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                      {dateRange(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: "5px", fontSize: "12px", color: "#475569" }}>
                      <BulletList text={exp.description} gap={sp.listItemGap} bulletColor={accent} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <PreciseHeading accent={accent}>Education</PreciseHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>
                        {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#64748b" }}>{ed.institution}</div>
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: "10px", color: "#64748b", whiteSpace: "nowrap" }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <PreciseHeading accent={accent}>Projects</PreciseHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{p.name}</span>
                    {p.url && <span style={{ fontFamily: MONO, fontSize: "9.5px", color: accent }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12px", color: "#475569", margin: "3px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                  )}
                  {p.technologies && (
                    <p style={{ fontFamily: MONO, fontSize: "9.5px", color: "#94a3b8", margin: "3px 0 0" }}>{p.technologies}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Dark sidebar */}
      <aside
        style={{
          width: "30%",
          backgroundColor: accent,
          color: "#ffffff",
          padding: `${sp.padY} 24px`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
        }}
      >
        {contacts.length > 0 && (
          <DarkSection title="Contact">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: sp.itemGap,
              }}
            >
              {contacts.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "11px",
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,0.92)",
                    wordBreak: "break-word",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.6)", flexShrink: 0, marginTop: "1px", display: "flex" }}>{c.icon}</span>
                  <span style={{ flex: 1 }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </DarkSection>
        )}

        {allSkills.length > 0 && (
          <DarkSection title="Expertise">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {allSkills.map((s) => (
                <div key={s.id} style={{ fontSize: "11px", color: "rgba(255,255,255,0.92)" }}>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontFamily: MONO }}>&gt; </span>
                  {s.name}
                </div>
              ))}
            </div>
          </DarkSection>
        )}

        {certifications.length > 0 && (
          <DarkSection title="Credentials">
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ fontSize: "11px", lineHeight: 1.4, color: "rgba(255,255,255,0.92)" }}>
                  <div style={{ fontWeight: 700 }}>{c.name}</div>
                  {c.issuer && <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px" }}>{c.issuer}</div>}
                  {c.date && <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: MONO, fontSize: "9px" }}>{c.date}</div>}
                </div>
              ))}
            </div>
          </DarkSection>
        )}

        {languages.length > 0 && (
          <DarkSection title="Languages">
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {languages.map((l) => (
                <div key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "rgba(255,255,255,0.92)" }}>
                  <span style={{ fontWeight: 600 }}>{l.name}</span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontFamily: MONO }}>{l.level}</span>
                </div>
              ))}
            </div>
          </DarkSection>
        )}
      </aside>
    </div>
  );
}

export default PreciseTemplate;