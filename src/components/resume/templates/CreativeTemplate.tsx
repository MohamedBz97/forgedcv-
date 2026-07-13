import React from "react";
import {
  SectionTitle,
  BulletList,
  Photo,
  SkillBars,
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

export function CreativeTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);

  const sidebarTitleColor = "rgba(255,255,255,0.92)";
  const sidebarTextColor = "rgba(255,255,255,0.85)";

  return (
    <div style={{ display: "flex", minHeight: "100%", fontFamily: "inherit", color: "#1f2937" }}>
      {/* Main column (left) */}
      <main style={{ flex: 1, padding: `${sp.padY} ${sp.padX}`, display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
        {/* Header */}
        <header>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: 800,
              color: accent,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p
              style={{
                fontSize: "16px",
                color: "#4b5563",
                fontWeight: 500,
                marginTop: "6px",
                marginBottom: 0,
                letterSpacing: "0.02em",
              }}
            >
              {personal.jobTitle}
            </p>
          )}
          <div style={{ marginTop: "14px", height: "3px", width: "60px", backgroundColor: accent }} />
        </header>

        {/* Summary */}
        {personal.summary && (
          <section>
            <SectionTitle accent={accent} variant="bar">
              About
            </SectionTitle>
            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="bar">
              Experience
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ position: "relative", paddingLeft: "16px", borderLeft: `2px solid ${accent}22` }}>
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: "-5px",
                      top: "5px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: accent,
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap" }}>
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

        {/* Education */}
        {education.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="bar">
              Education
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
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

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="bar">
              Projects
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: "#4b5563", margin: "3px 0 0", lineHeight: 1.55 }}>{p.description}</p>
                  )}
                  {p.technologies && (
                    <div style={{ marginTop: "4px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {p.technologies.split(",").map((t, i) => (
                        <span key={i} style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "10px", backgroundColor: `${accent}14`, color: accent, fontWeight: 600 }}>
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
            <SectionTitle accent={accent} variant="bar">
              Certifications
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12.5px", color: "#374151" }}>
                    <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                    {c.issuer && <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>}
                  </span>
                  {c.date && <span style={{ fontSize: "11px", color: "#9ca3af" }}>{c.date}</span>}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Sidebar (right) — SOLID accent background, white text */}
      <aside
        style={{
          width: "38%",
          backgroundColor: accent,
          color: "#ffffff",
          padding: `${sp.padY} 24px`,
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
              size={120}
              ringColor="rgba(255,255,255,0.85)"
              backgroundColor="rgba(255,255,255,0.18)"
              textColor="#ffffff"
            />
          </div>
        )}

        {/* Contact */}
        {contacts.length > 0 && (
          <section>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: sidebarTitleColor,
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {contacts.map((c, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", lineHeight: 1.4, color: sidebarTextColor, wordBreak: "break-word" }}>
                  <span style={{ color: "#ffffff", flexShrink: 0, marginTop: "1px", display: "flex", opacity: 0.9 }}>{c.icon}</span>
                  <span style={{ flex: 1 }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {skillCategories.some((c) => c.skills.length > 0) && (
          <section>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: sidebarTitleColor,
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {skillCategories.map((cat) =>
                cat.skills.length === 0 ? null : (
                  <div key={cat.id}>
                    {cat.name && (
                      <div style={{ fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {cat.name}
                      </div>
                    )}
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      {cat.skills.map((s) => (
                        <div key={s.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <span style={{ fontSize: "12px", color: sidebarTextColor }}>{s.name}</span>
                          <SkillBars level={s.level} color="#ffffff" size="sm" />
                        </div>
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
            <h3
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: sidebarTitleColor,
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              Languages
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
              {languages.map((l) => (
                <li key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: sidebarTextColor }}>
                  <span>{l.name}</span>
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>{l.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </aside>
    </div>
  );
}

export default CreativeTemplate;
