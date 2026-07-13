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

export function MinimalTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        padding: `${sp.padY} ${sp.padX}`,
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header */}
      <header style={{ borderBottom: `1px solid ${accent}`, paddingBottom: "18px" }}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 300,
            color: "#111827",
            margin: 0,
            letterSpacing: "0.04em",
            lineHeight: 1.1,
          }}
        >
          {personal.fullName.toUpperCase()}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "12px",
              color: accent,
              fontWeight: 500,
              marginTop: "6px",
              marginBottom: 0,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {personal.jobTitle}
          </p>
        )}
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 16px",
              fontSize: "11.5px",
              color: "#6b7280",
            }}
          >
            {contacts.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <span style={{ color: "#9ca3af", display: "flex" }}>{c.icon}</span>
                {c.value}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <SectionTitle accent={accent} variant="minimal">
            Profile
          </SectionTitle>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#374151", margin: 0 }}>{personal.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="minimal">
            Experience
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px" }}>
                <div style={{ fontSize: "11px", color: "#9ca3af", paddingTop: "2px", letterSpacing: "0.04em" }}>
                  {dateRange(exp.startDate, exp.endDate)}
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#111827" }}>{exp.position}</div>
                  <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "1px" }}>
                    {exp.company}
                    {exp.location ? ` \u00b7 ${exp.location}` : ""}
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#4b5563" }}>
                      <BulletList text={exp.description} gap={sp.listItemGap} bulletColor={accent} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="minimal">
            Education
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px" }}>
                <div style={{ fontSize: "11px", color: "#9ca3af", paddingTop: "2px", letterSpacing: "0.04em" }}>
                  {dateRange(ed.startDate, ed.endDate)}
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#111827" }}>
                    {[ed.degree, ed.field].filter(Boolean).join(", ")}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "1px" }}>
                    {ed.institution}
                    {ed.location ? ` \u00b7 ${ed.location}` : ""}
                  </div>
                  {ed.description && (
                    <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#4b5563" }}>
                      <BulletList text={ed.description} gap={sp.listItemGap} bulletColor={accent} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {allSkills.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="minimal">
            Skills
          </SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "8px 16px", fontSize: "12.5px", color: "#374151" }}>
            {skillCategories.map((cat) => (
              <React.Fragment key={cat.id}>
                <div style={{ fontSize: "11px", color: "#9ca3af", paddingTop: "1px", letterSpacing: "0.04em" }}>{cat.name}</div>
                <div>{cat.skills.map((s) => s.name).join(", ")}</div>
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="minimal">
            Projects
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#4b5563", margin: "3px 0 0", lineHeight: 1.55 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11px", color: "#9ca3af", margin: "2px 0 0" }}>{p.technologies}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="minimal">
            Certifications
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "12.5px", color: "#374151" }}>
            {certifications.map((c) => (
              <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                <span>
                  <span style={{ fontWeight: 600, color: "#111827" }}>{c.name}</span>
                  {c.issuer && <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>}
                </span>
                {c.date && <span style={{ fontSize: "11px", color: "#9ca3af" }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="minimal">
            Languages
          </SectionTitle>
          <div style={{ fontSize: "12.5px", color: "#374151" }}>
            {languages.map((l, i) => (
              <span key={l.id}>
                {i > 0 && <span style={{ color: "#d1d5db", margin: "0 8px" }}>|</span>}
                <span style={{ color: "#111827" }}>{l.name}</span>
                <span style={{ color: "#9ca3af" }}> {l.level.toLowerCase()}</span>
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default MinimalTemplate;
