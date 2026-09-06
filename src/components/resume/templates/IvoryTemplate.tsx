import React from "react";
import {
  BulletList,
  contactItems,
  spacingClass,
  dateRange,
  type ResumeData,
  type ResumeSettings,
} from "./shared";

interface TemplateProps {
  data: ResumeData;
  settings: ResumeSettings;
}

const SERIF = "'Georgia', 'Times New Roman', serif";

function IvoryHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: "10.5px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.28em",
        color: "#57534E",
        margin: "0 0 12px",
      }}
    >
      {children}
    </h3>
  );
}

export function IvoryTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        padding: `${sp.padY} ${sp.padX}`,
        fontFamily: SERIF,
        color: "#292524",
        backgroundColor: "#FAF8F3",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
        minHeight: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header style={{ display: "flex", gap: "22px" }}>
        <span aria-hidden style={{ width: "3px", alignSelf: "stretch", backgroundColor: accent }} />
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#1c1917",
              margin: 0,
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p
              style={{
                fontSize: "14px",
                color: accent,
                fontStyle: "italic",
                fontWeight: 500,
                margin: "12px 0 0",
                letterSpacing: "0.05em",
              }}
            >
              {personal.jobTitle}
            </p>
          )}
          {contacts.length > 0 && (
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                flexWrap: "wrap",
                gap: "4px 18px",
                fontSize: "11.5px",
                color: "#78716C",
              }}
            >
              {contacts.map((c, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: accent, display: "flex" }}>{c.icon}</span>
                  {c.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <IvoryHeading>Profile</IvoryHeading>
          <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#44403C", margin: 0, textAlign: "justify" }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <IvoryHeading>Experience</IvoryHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#1c1917" }}>{exp.company}</span>
                    {exp.position && (
                      <span style={{ fontSize: "12.5px", color: accent, fontStyle: "italic", marginLeft: "8px" }}>
                        &mdash; {exp.position}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "11px", color: "#A8A29E", fontStyle: "italic", whiteSpace: "nowrap" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                    {exp.location ? ` \u00b7 ${exp.location}` : ""}
                  </div>
                </div>
                {exp.description && (
                  <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#44403C" }}>
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
          <IvoryHeading>Education</IvoryHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#1c1917" }}>{ed.institution}</span>
                    {(ed.degree || ed.field) && (
                      <span style={{ fontSize: "12.5px", color: accent, fontStyle: "italic", marginLeft: "8px" }}>
                        &mdash; {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "11px", color: "#A8A29E", fontStyle: "italic", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {allSkills.length > 0 && (
        <section>
          <IvoryHeading>Strengths</IvoryHeading>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 28px", fontSize: "12.5px", color: "#44403C" }}>
            {allSkills.map((s) => (
              <div key={s.id} style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ color: accent, fontWeight: 700 }}>&bull;</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <IvoryHeading>Selected Work</IvoryHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#1c1917" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#44403C", margin: "3px 0 0", lineHeight: 1.7 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11.5px", color: "#A8A29E", margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications + Languages */}
      {(certifications.length > 0 || languages.length > 0) && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
          {certifications.length > 0 && (
            <section>
              <IvoryHeading>Recognition</IvoryHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {certifications.map((c) => (
                  <div key={c.id} style={{ fontSize: "12.5px", color: "#44403C" }}>
                    <span style={{ fontWeight: 700, color: "#1c1917" }}>{c.name}</span>
                    {c.issuer && <span style={{ color: "#78716C" }}> &mdash; {c.issuer}</span>}
                    {c.date && <span style={{ color: "#A8A29E" }}> ({c.date})</span>}
                  </div>
                ))}
              </div>
            </section>
          )}
          {languages.length > 0 && (
            <section>
              <IvoryHeading>Languages</IvoryHeading>
              <div style={{ fontSize: "12.5px", color: "#44403C" }}>
                {languages.map((l, i) => (
                  <span key={l.id}>
                    {i > 0 && <span style={{ color: "#C8C2B8", margin: "0 10px" }}>&bull;</span>}
                    <span style={{ fontWeight: 700, color: "#1c1917" }}>{l.name}</span>
                    <span style={{ color: "#78716C" }}> ({l.level})</span>
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default IvoryTemplate;