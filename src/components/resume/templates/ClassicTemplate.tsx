import React from "react";
import {
  SectionTitle,
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

const SERIF_STACK = "'Georgia', 'Times New Roman', serif";

export function ClassicTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);

  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        padding: `${sp.padY} ${sp.padX}`,
        fontFamily: SERIF_STACK,
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header — centered name */}
      <header style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#111827",
            margin: 0,
            letterSpacing: "0.02em",
            lineHeight: 1.1,
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p style={{ fontSize: "15px", color: accent, fontStyle: "italic", marginTop: "6px", marginBottom: 0 }}>
            {personal.jobTitle}
          </p>
        )}
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "6px 14px",
              fontSize: "12px",
              color: "#4b5563",
            }}
          >
            {contacts.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <span style={{ color: accent, display: "flex" }}>{c.icon}</span>
                {c.value}
              </span>
            ))}
          </div>
        )}
        <div
          style={{
            marginTop: "14px",
            height: "1px",
            backgroundColor: accent,
            opacity: 0.7,
          }}
        />
        <div style={{ marginTop: "2px", height: "1px", backgroundColor: "#d1d5db" }} />
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <SectionTitle accent={accent} variant="underline">
            Summary
          </SectionTitle>
          <p style={{ fontSize: "13.5px", lineHeight: 1.65, color: "#374151", margin: 0, textAlign: "justify" }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="underline">
            Experience
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{exp.company}</span>
                    {exp.position && (
                      <span style={{ fontSize: "13px", color: "#4b5563", fontStyle: "italic", marginLeft: "8px" }}>
                        &mdash; {exp.position}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#6b7280", whiteSpace: "nowrap" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                    {exp.location ? ` \u00b7 ${exp.location}` : ""}
                  </div>
                </div>
                {exp.description && (
                  <div style={{ marginTop: "5px", fontSize: "13px", color: "#374151" }}>
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
          <SectionTitle accent={accent} variant="underline">
            Education
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{ed.institution}</span>
                    {(ed.degree || ed.field) && (
                      <span style={{ fontSize: "13px", color: "#4b5563", fontStyle: "italic", marginLeft: "8px" }}>
                        &mdash; {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#6b7280", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                    {ed.location ? ` \u00b7 ${ed.location}` : ""}
                  </div>
                </div>
                {ed.description && (
                  <div style={{ marginTop: "5px", fontSize: "13px", color: "#374151" }}>
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
          <SectionTitle accent={accent} variant="underline">
            Skills
          </SectionTitle>
          <div style={{ fontSize: "13px", lineHeight: 1.7, color: "#374151" }}>
            {skillCategories.map((cat, i) => (
              <div key={cat.id} style={i > 0 ? { marginTop: "4px" } : undefined}>
                {cat.name && (
                  <span style={{ fontWeight: 700, color: "#111827" }}>{cat.name}: </span>
                )}
                {cat.skills.map((s) => s.name).join(", ")}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="underline">
            Projects
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11.5px", color: accent }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "13px", color: "#374151", margin: "3px 0 0", lineHeight: 1.55 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11.5px", color: "#6b7280", margin: "2px 0 0", fontStyle: "italic" }}>
                    {p.technologies}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="underline">
            Certifications
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {certifications.map((c) => (
              <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "13px", color: "#374151" }}>
                  <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                  {c.issuer && <span style={{ color: "#4b5563" }}> &mdash; {c.issuer}</span>}
                </span>
                {c.date && <span style={{ fontSize: "11.5px", color: "#6b7280" }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="underline">
            Languages
          </SectionTitle>
          <div style={{ fontSize: "13px", color: "#374151" }}>
            {languages.map((l, i) => (
              <span key={l.id}>
                {i > 0 && <span style={{ color: "#9ca3af", margin: "0 8px" }}>&bull;</span>}
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

export default ClassicTemplate;
