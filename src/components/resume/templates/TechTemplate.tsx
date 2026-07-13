import React from "react";
import {
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

const MONO = "'SF Mono', 'JetBrains Mono', 'Fira Code', Menlo, Consolas, monospace";
const SIDEBAR_BG = "#1e293b";

export function TechTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);

  const sidebarLabel = {
    fontFamily: MONO,
    fontSize: "11px",
    color: accent,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const sidebarText = "#cbd5e1";

  return (
    <div style={{ display: "flex", minHeight: "100%", fontFamily: "inherit", color: "#1f2937" }}>
      {/* Left sidebar — dark slate */}
      <aside
        style={{
          width: "32%",
          backgroundColor: SIDEBAR_BG,
          color: sidebarText,
          padding: `${sp.padY} 22px`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
        }}
      >
        {settings.showPhoto && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2px" }}>
            <Photo
              personal={personal}
              showPhoto
              size={100}
              ringColor={accent}
              backgroundColor={SIDEBAR_BG}
            />
          </div>
        )}

        {/* Name + title in sidebar */}
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontFamily: MONO, fontSize: "11.5px", color: accent, marginTop: "4px", marginBottom: 0 }}>
              {`> `}{personal.jobTitle}
            </p>
          )}
        </div>

        {/* Contact */}
        {contacts.length > 0 && (
          <section>
            <div style={sidebarLabel}>
              <span style={{ color: accent }}>{"//"}</span> contact
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {contacts.map((c, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "11.5px", lineHeight: 1.4, color: sidebarText, wordBreak: "break-word" }}>
                  <span style={{ color: accent, flexShrink: 0, marginTop: "1px", display: "flex" }}>{c.icon}</span>
                  <span style={{ flex: 1, fontFamily: MONO }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills as pills */}
        {skillCategories.some((c) => c.skills.length > 0) && (
          <section>
            <div style={sidebarLabel}>
              <span style={{ color: accent }}>{"//"}</span> skills
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {skillCategories.map((cat) =>
                cat.skills.length === 0 ? null : (
                  <div key={cat.id}>
                    {cat.name && (
                      <div style={{ fontFamily: MONO, fontSize: "10px", color: "#94a3b8", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {`# `}{cat.name}
                      </div>
                    )}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {cat.skills.map((s) => (
                        <span
                          key={s.id}
                          style={{
                            fontSize: "10.5px",
                            padding: "3px 8px",
                            borderRadius: "3px",
                            border: `1px solid ${accent}`,
                            color: accent,
                            fontFamily: MONO,
                            backgroundColor: hexToRgba(accent, 0.08),
                          }}
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section>
            <div style={sidebarLabel}>
              <span style={{ color: accent }}>{"//"}</span> languages
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
              {languages.map((l) => (
                <li key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", fontFamily: MONO }}>
                  <span style={{ color: "#e2e8f0" }}>{l.name}</span>
                  <span style={{ color: "#64748b" }}>{l.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </aside>

      {/* Main column */}
      <main style={{ flex: 1, padding: `${sp.padY} ${sp.padX}`, display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
        {/* Summary */}
        {personal.summary && (
          <section>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "12px",
                color: accent,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: accent }}>{"//"}</span> profile
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "12px",
                color: accent,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: accent }}>{"//"}</span> experience
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 500, fontFamily: MONO }}>
                        @{exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap", fontFamily: MONO }}>
                      {dateRange(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#4b5563" }}>
                      <BulletList text={exp.description} gap={sp.listItemGap} bulletColor={accent} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "12px",
                color: accent,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: accent }}>{"//"}</span> projects
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id} style={{ borderLeft: `2px solid ${hexToRgba(accent, 0.3)}`, paddingLeft: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827", fontFamily: MONO }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "11px", color: accent, fontFamily: MONO }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: "#4b5563", margin: "4px 0 0", lineHeight: 1.55 }}>{p.description}</p>
                  )}
                  {p.technologies && (
                    <div style={{ marginTop: "5px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {p.technologies.split(",").map((t, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: "10px",
                            padding: "2px 7px",
                            borderRadius: "3px",
                            backgroundColor: "#f1f5f9",
                            color: "#475569",
                            fontFamily: MONO,
                            border: `1px solid ${hexToRgba(accent, 0.25)}`,
                          }}
                        >
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

        {/* Education */}
        {education.length > 0 && (
          <section>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "12px",
                color: accent,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: accent }}>{"//"}</span> education
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>
                        {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 500, fontFamily: MONO }}>
                        {ed.institution}
                        {ed.location ? ` \u00b7 ${ed.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap", fontFamily: MONO }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                  {ed.description && (
                    <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#4b5563" }}>
                      <BulletList text={ed.description} gap={sp.listItemGap} bulletColor={accent} />
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
            <div
              style={{
                fontFamily: MONO,
                fontSize: "12px",
                color: accent,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: accent }}>{"//"}</span> certifications
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12.5px", color: "#374151" }}>
                    <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                    {c.issuer && <span style={{ color: "#6b7280", fontFamily: MONO, fontSize: "11.5px" }}> &mdash; {c.issuer}</span>}
                  </span>
                  {c.date && <span style={{ fontSize: "11px", color: "#6b7280", fontFamily: MONO }}>{c.date}</span>}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default TechTemplate;
