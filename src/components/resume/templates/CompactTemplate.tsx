import React from "react";
import {
  BulletList,
  SkillBars,
  Photo,
  contactItems,
  hexToRgba,
  dateRange,
  type ResumeData,
  type ResumeSettings,
} from "./shared";

interface TemplateProps {
  data: ResumeData;
  settings: ResumeSettings;
}

export function CompactTemplate({ data, settings }: TemplateProps) {
  const {
    personal,
    experience,
    education,
    projects,
    certifications,
    skillCategories,
    languages,
    courses,
  } = data;
  const accent = settings.accentColor;
  const contacts = contactItems(personal);

  // Compact uses fixed smaller spacing regardless of settings
  const padX = 26;
  const padY = 24;
  const sectionGap = "0.6rem";
  const itemGap = "0.4rem";
  const listItemGap = "0.12rem";

  const sidebarTitle = {
    fontSize: "10px",
    fontWeight: 700,
    color: accent,
    textTransform: "uppercase" as const,
    letterSpacing: "0.14em",
    marginBottom: "5px",
    paddingBottom: "3px",
    borderBottom: `1px solid ${hexToRgba(accent, 0.3)}`,
  };

  return (
    <div style={{ display: "flex", minHeight: "100%", fontFamily: "inherit", color: "#1f2937", fontSize: "11.5px" }}>
      {/* Sidebar ~30% */}
      <aside
        style={{
          width: "30%",
          backgroundColor: hexToRgba(accent, 0.05),
          padding: `${padY}px 18px`,
          display: "flex",
          flexDirection: "column",
          gap: sectionGap,
          borderRight: `1px solid ${hexToRgba(accent, 0.15)}`,
        }}
      >
        {settings.showPhoto && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2px" }}>
            <Photo personal={personal} showPhoto size={70} ringColor={accent} />
          </div>
        )}

        {/* Contact */}
        {contacts.length > 0 && (
          <section>
            <div style={sidebarTitle}>Contact</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
              {contacts.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                    fontSize: "10.5px",
                    lineHeight: 1.35,
                    color: "#374151",
                    wordBreak: "break-word",
                  }}
                >
                  <span style={{ color: accent, flexShrink: 0, marginTop: "1px", display: "flex" }}>{c.icon}</span>
                  <span style={{ flex: 1 }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {skillCategories.some((c) => c.skills.length > 0) && (
          <section>
            <div style={sidebarTitle}>Skills</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {skillCategories.map((cat) =>
                cat.skills.length === 0 ? null : (
                  <div key={cat.id}>
                    {cat.name && (
                      <div
                        style={{
                          fontSize: "9.5px",
                          fontWeight: 700,
                          color: "#6b7280",
                          marginBottom: "3px",
                          textTransform: "uppercase" as const,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {cat.name}
                      </div>
                    )}
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      {cat.skills.map((s) => (
                        <div
                          key={s.id}
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}
                        >
                          <span style={{ fontSize: "10.5px", color: "#374151" }}>{s.name}</span>
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
            <div style={sidebarTitle}>Languages</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
              {languages.map((l) => (
                <li
                  key={l.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10.5px",
                    color: "#374151",
                  }}
                >
                  <span>{l.name}</span>
                  <span style={{ color: "#9ca3af" }}>{l.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <div style={sidebarTitle}>Certifications</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ fontSize: "10.5px", color: "#374151" }}>
                  <div style={{ fontWeight: 600, color: "#111827" }}>{c.name}</div>
                  <div style={{ color: "#6b7280" }}>
                    {c.issuer}
                    {c.date ? ` \u00b7 ${c.date}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Courses */}
        {courses.length > 0 && (
          <section>
            <div style={sidebarTitle}>Courses</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {courses.map((c) => (
                <div key={c.id} style={{ fontSize: "10.5px", color: "#374151" }}>
                  <div style={{ fontWeight: 600, color: "#111827" }}>{c.name}</div>
                  <div style={{ color: "#6b7280" }}>
                    {c.institution}
                    {c.date ? ` \u00b7 ${c.date}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* Main column */}
      <main
        style={{
          flex: 1,
          padding: `${padY}px ${padX}px`,
          display: "flex",
          flexDirection: "column",
          gap: sectionGap,
          minWidth: 0,
        }}
      >
        {/* Header */}
        <header style={{ paddingBottom: "8px", borderBottom: `2px solid ${accent}` }}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontSize: "12px", color: accent, fontWeight: 600, margin: "2px 0 0", letterSpacing: "0.04em" }}>
              {personal.jobTitle}
            </p>
          )}
        </header>

        {/* Summary */}
        {personal.summary && (
          <section>
            <div style={sidebarTitle}>Profile</div>
            <p style={{ fontSize: "11px", lineHeight: 1.5, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <div style={sidebarTitle}>Experience</div>
            <div style={{ display: "flex", flexDirection: "column", gap: itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>{exp.position}</span>
                      <span style={{ fontSize: "11px", color: accent, fontWeight: 600, marginLeft: "4px" }}>
                        {exp.company ? ` \u00b7 ${exp.company}` : ""}
                      </span>
                    </div>
                    <div style={{ fontSize: "10px", color: "#6b7280", whiteSpace: "nowrap" }}>
                      {dateRange(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                  {exp.location && (
                    <div style={{ fontSize: "10px", color: "#9ca3af" }}>{exp.location}</div>
                  )}
                  {exp.description && (
                    <div style={{ marginTop: "2px", fontSize: "10.5px", color: "#374151" }}>
                      <BulletList text={exp.description} gap={listItemGap} bulletColor={accent} />
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
            <div style={sidebarTitle}>Education</div>
            <div style={{ display: "flex", flexDirection: "column", gap: itemGap }}>
              {education.map((ed) => (
                <div
                  key={ed.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </div>
                    <div style={{ fontSize: "11px", color: accent, fontWeight: 600 }}>
                      {ed.institution}
                      {ed.location ? ` \u00b7 ${ed.location}` : ""}
                    </div>
                  </div>
                  <div style={{ fontSize: "10px", color: "#6b7280", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <div style={sidebarTitle}>Projects</div>
            <div style={{ display: "flex", flexDirection: "column", gap: itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "10px", color: accent }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "10.5px", color: "#374151", margin: "1px 0 0", lineHeight: 1.45 }}>
                      {p.description}
                    </p>
                  )}
                  {p.technologies && (
                    <p style={{ fontSize: "10px", color: "#9ca3af", margin: "1px 0 0" }}>{p.technologies}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default CompactTemplate;
