import React from "react";
import {
  SectionTitle,
  BulletList,
  Photo,
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

export function ProfessionalTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  const headerBg = hexToRgba(accent, 0.08);

  return (
    <div style={{ fontFamily: "inherit", color: "#1f2937", display: "flex", flexDirection: "column" }}>
      {/* Header band */}
      <header
        style={{
          backgroundColor: headerBg,
          borderBottom: `3px solid ${accent}`,
          padding: `${sp.padY} ${sp.padX}`,
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {settings.showPhoto && (
          <Photo
            personal={personal}
            showPhoto
            size={92}
            ringColor={accent}
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontSize: "14px", color: accent, fontWeight: 600, marginTop: "3px", marginBottom: 0, letterSpacing: "0.04em" }}>
              {personal.jobTitle}
            </p>
          )}
          {contacts.length > 0 && (
            <div
              style={{
                marginTop: "10px",
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
        </div>
      </header>

      {/* Body */}
      <div style={{ padding: `${sp.padY} ${sp.padX}`, display: "flex", flexDirection: "column", gap: sp.sectionGap }}>
        {/* Summary */}
        {personal.summary && (
          <section>
            <SectionTitle accent={accent} variant="underline">
              Professional Summary
            </SectionTitle>
            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="underline">
              Professional Experience
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ borderLeft: `2px solid ${hexToRgba(accent, 0.25)}`, paddingLeft: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap", fontWeight: 500 }}>
                      {dateRange(exp.startDate, exp.endDate)}
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
            <SectionTitle accent={accent} variant="underline">
              Education
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </div>
                    <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                      {ed.institution}
                      {ed.location ? ` \u00b7 ${ed.location}` : ""}
                    </div>
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills — 2-col tag grid */}
        {allSkills.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="underline">
              Core Skills
            </SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px 14px" }}>
              {allSkills.map((s) => (
                <div
                  key={s.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    backgroundColor: hexToRgba(accent, 0.06),
                    borderLeft: `2px solid ${accent}`,
                    fontSize: "12.5px",
                    color: "#374151",
                  }}
                >
                  <span style={{ color: accent, fontWeight: 700 }}>&bull;</span>
                  <span style={{ fontWeight: 500 }}>{s.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="underline">
              Selected Projects
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.55 }}>{p.description}</p>
                  )}
                  {p.technologies && (
                    <div style={{ marginTop: "4px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {p.technologies.split(",").map((t, i) => (
                        <span key={i} style={{ fontSize: "10.5px", padding: "2px 8px", borderRadius: "3px", border: `1px solid ${hexToRgba(accent, 0.4)}`, color: accent, fontWeight: 600 }}>
                          {t.trim()}
                        </span>
                      ))}
                    </div>
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px 14px", fontSize: "12.5px", color: "#374151" }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                  <span>
                    <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                    {c.issuer && <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>}
                  </span>
                  {c.date && <span style={{ fontSize: "11px", color: "#9ca3af", whiteSpace: "nowrap" }}>{c.date}</span>}
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
            <div style={{ fontSize: "12.5px", color: "#374151" }}>
              {languages.map((l, i) => (
                <span key={l.id}>
                  {i > 0 && <span style={{ color: "#d1d5db", margin: "0 10px" }}>|</span>}
                  <span style={{ fontWeight: 600, color: "#111827" }}>{l.name}</span>
                  <span style={{ color: "#6b7280" }}> ({l.level})</span>
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProfessionalTemplate;
