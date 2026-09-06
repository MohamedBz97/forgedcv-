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

function RegentHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        margin: "0 0 12px",
      }}
    >
      <span
        style={{
          fontSize: "10.5px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#6b7280",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <span aria-hidden style={{ flex: 1, height: "1px", backgroundColor: "#e5e7eb" }} />
    </h3>
  );
}

export function RegentTemplate({ data, settings }: TemplateProps) {
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
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header */}
      <header>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: "#111827",
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.015em",
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "13.5px",
              color: accent,
              fontStyle: "italic",
              fontWeight: 500,
              margin: "10px 0 0",
              letterSpacing: "0.06em",
            }}
          >
            {personal.jobTitle}
          </p>
        )}
        <div style={{ marginTop: "16px", borderTop: "1px solid #d1d5db" }} />
        <div style={{ marginTop: "3px", borderTop: "1px solid #e5e7eb" }} />
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "14px",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 18px",
              fontSize: "11.5px",
              color: "#4b5563",
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
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <RegentHeading>Summary</RegentHeading>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#374151", margin: 0, textAlign: "justify" }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <RegentHeading>Experience</RegentHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{exp.company}</span>
                    {exp.position && (
                      <span style={{ fontSize: "12.5px", color: accent, fontStyle: "italic", marginLeft: "8px" }}>
                        &mdash; {exp.position}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280", fontStyle: "italic", whiteSpace: "nowrap" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                    {exp.location ? ` \u00b7 ${exp.location}` : ""}
                  </div>
                </div>
                {exp.description && (
                  <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#374151" }}>
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
          <RegentHeading>Education</RegentHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{ed.institution}</span>
                    {(ed.degree || ed.field) && (
                      <span style={{ fontSize: "12.5px", color: accent, fontStyle: "italic", marginLeft: "8px" }}>
                        &mdash; {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280", fontStyle: "italic", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                </div>
                {ed.description && (
                  <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#374151" }}>
                    <BulletList text={ed.description} gap={sp.listItemGap} bulletColor={accent} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {allSkills.length > 0 && (
        <section>
          <RegentHeading>Expertise</RegentHeading>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 28px", fontSize: "12.5px", color: "#374151" }}>
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
          <RegentHeading>Selected Work</RegentHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11.5px", color: "#6b7280", margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <RegentHeading>Accreditations</RegentHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {certifications.map((c) => (
              <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap", fontSize: "12.5px" }}>
                <span>
                  <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                  {c.issuer && <span style={{ color: "#4b5563" }}> &mdash; {c.issuer}</span>}
                </span>
                {c.date && <span style={{ fontSize: "11px", color: "#6b7280", fontStyle: "italic" }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <RegentHeading>Languages</RegentHeading>
          <div style={{ fontSize: "12.5px", color: "#374151" }}>
            {languages.map((l, i) => (
              <span key={l.id}>
                {i > 0 && <span style={{ color: "#9ca3af", margin: "0 12px" }}>&bull;</span>}
                <span style={{ fontWeight: 700, color: "#111827" }}>{l.name}</span>
                <span style={{ color: "#6b7280" }}> ({l.level})</span>
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default RegentTemplate;