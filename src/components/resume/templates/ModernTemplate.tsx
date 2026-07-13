import React from "react";
import {
  SectionTitle,
  BulletList,
  Photo,
  SkillBars,
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

export function ModernTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const sidebarBg = hexToRgba(accent, 0.07);

  const contacts = contactItems(personal);

  const sidebarSectionGap = sp.sectionGap;

  return (
    <div style={{ display: "flex", minHeight: "100%", fontFamily: "inherit", color: "#1f2937" }}>
      {/* Left sidebar */}
      <aside
        style={{
          width: "35%",
          backgroundColor: sidebarBg,
          padding: `${sp.padY} 26px`,
          display: "flex",
          flexDirection: "column",
          gap: sidebarSectionGap,
          borderRight: `1px solid ${hexToRgba(accent, 0.12)}`,
        }}
      >
        {settings.showPhoto && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "4px" }}>
            <Photo
              personal={personal}
              showPhoto
              size={110}
              ringColor={accent}
            />
          </div>
        )}

        {/* Contact */}
        {contacts.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="default">
              Contact
            </SectionTitle>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {contacts.map((c, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", lineHeight: 1.4, color: "#374151", wordBreak: "break-word" }}>
                  <span style={{ color: accent, flexShrink: 0, marginTop: "1px", display: "flex" }}>{c.icon}</span>
                  <span style={{ flex: 1 }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {skillCategories.length > 0 && skillCategories.some((c) => c.skills.length > 0) && (
          <section>
            <SectionTitle accent={accent} variant="default">
              Skills
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {skillCategories.map((cat) =>
                cat.skills.length === 0 ? null : (
                  <div key={cat.id}>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: "#6b7280", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {cat.name}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      {cat.skills.map((s) => (
                        <div key={s.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <span style={{ fontSize: "12px", color: "#374151" }}>{s.name}</span>
                          <SkillBars level={s.level} color={accent} size="sm" />
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
            <SectionTitle accent={accent} variant="default">
              Languages
            </SectionTitle>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
              {languages.map((l) => (
                <li key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#374151" }}>
                  <span>{l.name}</span>
                  <span style={{ color: "#9ca3af" }}>{l.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </aside>

      {/* Main column */}
      <main style={{ flex: 1, padding: `${sp.padY} ${sp.padX}`, display: "flex", flexDirection: "column", gap: sp.sectionGap }}>
        {/* Header */}
        <header>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#111827", lineHeight: 1.1, margin: 0, letterSpacing: "-0.01em" }}>
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontSize: "15px", color: accent, fontWeight: 500, marginTop: "4px", marginBottom: 0 }}>
              {personal.jobTitle}
            </p>
          )}
        </header>

        {/* Summary */}
        {personal.summary && (
          <section>
            <SectionTitle accent={accent} variant="default">
              Profile
            </SectionTitle>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="default">
              Experience
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>{exp.position}</div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 500 }}>
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap" }}>
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
            <SectionTitle accent={accent} variant="default">
              Education
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>
                        {ed.degree}
                        {ed.field ? `, ${ed.field}` : ""}
                      </div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 500 }}>
                        {ed.institution}
                        {ed.location ? ` \u00b7 ${ed.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap" }}>
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

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <SectionTitle accent={accent} variant="default">
              Projects
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>{p.name}</div>
                    {p.url && (
                      <div style={{ fontSize: "11px", color: accent }}>{p.url}</div>
                    )}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.5 }}>{p.description}</p>
                  )}
                  {p.technologies && (
                    <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "3px" }}>
                      <span style={{ color: "#9ca3af" }}>Tech:</span> {p.technologies}
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
            <SectionTitle accent={accent} variant="default">
              Certifications
            </SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>{c.name}</span>
                    {c.issuer && (
                      <span style={{ fontSize: "12px", color: accent, marginLeft: "6px" }}>&mdash; {c.issuer}</span>
                    )}
                  </div>
                  {c.date && <div style={{ fontSize: "11px", color: "#6b7280" }}>{c.date}</div>}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default ModernTemplate;
