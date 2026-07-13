import React from "react";
import {
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

const SIDEBAR_BG = "#111827";
const SIDEBAR_TEXT = "#e5e7eb";
const SIDEBAR_MUTED = "rgba(229,231,235,0.6)";

export function SidebarDarkTemplate({ data, settings }: TemplateProps) {
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
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);

  const sidebarLabel = {
    fontSize: "11px",
    fontWeight: 700,
    color: accent,
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={{ display: "flex", minHeight: "100%", fontFamily: "inherit", color: "#1f2937" }}>
      {/* Dark left sidebar ~35% */}
      <aside
        style={{
          width: "35%",
          backgroundColor: SIDEBAR_BG,
          color: SIDEBAR_TEXT,
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
              size={110}
              ringColor={accent}
              backgroundColor={SIDEBAR_BG}
              textColor={accent}
            />
          </div>
        )}

        {/* Name + title block in sidebar */}
        <div>
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontSize: "12px", color: accent, marginTop: "4px", marginBottom: 0, fontWeight: 600 }}>
              {personal.jobTitle}
            </p>
          )}
        </div>

        {/* Contact */}
        {contacts.length > 0 && (
          <section>
            <div style={sidebarLabel}>
              <span aria-hidden style={{ width: "12px", height: "1px", backgroundColor: accent }} />
              Contact
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {contacts.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "11.5px",
                    lineHeight: 1.4,
                    color: SIDEBAR_TEXT,
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

        {/* Skills with bars */}
        {skillCategories.some((c) => c.skills.length > 0) && (
          <section>
            <div style={sidebarLabel}>
              <span aria-hidden style={{ width: "12px", height: "1px", backgroundColor: accent }} />
              Skills
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {skillCategories.map((cat) =>
                cat.skills.length === 0 ? null : (
                  <div key={cat.id}>
                    {cat.name && (
                      <div
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 700,
                          color: SIDEBAR_MUTED,
                          marginBottom: "5px",
                          textTransform: "uppercase" as const,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {cat.name}
                      </div>
                    )}
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      {cat.skills.map((s) => (
                        <div
                          key={s.id}
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}
                        >
                          <span style={{ fontSize: "11.5px", color: SIDEBAR_TEXT }}>{s.name}</span>
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
            <div style={sidebarLabel}>
              <span aria-hidden style={{ width: "12px", height: "1px", backgroundColor: accent }} />
              Languages
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
              {languages.map((l) => (
                <li
                  key={l.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11.5px",
                    color: SIDEBAR_TEXT,
                  }}
                >
                  <span>{l.name}</span>
                  <span style={{ color: accent, fontWeight: 600 }}>{l.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <div style={sidebarLabel}>
              <span aria-hidden style={{ width: "12px", height: "1px", backgroundColor: accent }} />
              Certifications
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ fontSize: "11.5px", color: SIDEBAR_TEXT }}>
                  <div style={{ fontWeight: 700, color: "#ffffff" }}>{c.name}</div>
                  <div style={{ color: SIDEBAR_MUTED }}>
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
            <div style={sidebarLabel}>
              <span aria-hidden style={{ width: "12px", height: "1px", backgroundColor: accent }} />
              Courses
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {courses.map((c) => (
                <div key={c.id} style={{ fontSize: "11.5px", color: SIDEBAR_TEXT }}>
                  <div style={{ fontWeight: 700, color: "#ffffff" }}>{c.name}</div>
                  <div style={{ color: SIDEBAR_MUTED }}>
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
          padding: `${sp.padY} ${sp.padX}`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
          minWidth: 0,
        }}
      >
        {/* Summary */}
        {personal.summary && (
          <section>
            <MainHeading label="Profile" accent={accent} />
            <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <MainHeading label="Experience" accent={accent} />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#ffffff",
                        backgroundColor: "#111827",
                        padding: "2px 9px",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
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
            <MainHeading label="Education" accent={accent} />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div
                  key={ed.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
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

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <MainHeading label="Projects" accent={accent} />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "11px", color: accent, fontWeight: 600 }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: "#4b5563", margin: "3px 0 0", lineHeight: 1.55 }}>
                      {p.description}
                    </p>
                  )}
                  {p.technologies && (
                    <p style={{ fontSize: "11px", color: "#6b7280", margin: "2px 0 0", fontWeight: 600 }}>
                      {p.technologies}
                    </p>
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

function MainHeading({ label, accent }: { label: string; accent: string }) {
  return (
    <h3
      style={{
        fontSize: "13px",
        fontWeight: 700,
        color: "#111827",
        margin: "0 0 10px",
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span aria-hidden style={{ width: "16px", height: "2px", backgroundColor: accent }} />
      {label}
    </h3>
  );
}

export default SidebarDarkTemplate;
