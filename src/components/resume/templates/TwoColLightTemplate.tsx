import React from "react";
import {
  BulletList,
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

export function TwoColLightTemplate({ data, settings }: TemplateProps) {
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
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        fontFamily: "inherit",
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      {/* Header — centered, full width */}
      <header
        style={{
          padding: `${sp.padY} ${sp.padX}`,
          textAlign: "center",
          borderBottom: `1px solid ${hexToRgba(accent, 0.3)}`,
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#111827",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "13px",
              color: accent,
              fontWeight: 600,
              margin: "4px 0 0",
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
              justifyContent: "center",
              gap: "2px 18px",
              fontSize: "11.5px",
              color: "#6b7280",
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

      {/* Optional summary as a band right under header */}
      {personal.summary && (
        <div
          style={{
            padding: `${sp.padY} ${sp.padX} 0`,
          }}
        >
          <p
            style={{
              fontSize: "12.5px",
              lineHeight: 1.65,
              color: "#374151",
              margin: 0,
              textAlign: "center",
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {personal.summary}
          </p>
        </div>
      )}

      {/* Body — 50/50 split */}
      <div
        style={{
          padding: `${sp.padY} ${sp.padX}`,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "36px",
          flex: 1,
        }}
      >
        {/* Left column: experience + education */}
        <div style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <ColHeading label="Experience" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                        <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                          {exp.company}
                          {exp.location ? ` \u00b7 ${exp.location}` : ""}
                        </div>
                      </div>
                      <div style={{ fontSize: "10.5px", color: "#9ca3af", whiteSpace: "nowrap" }}>
                        {dateRange(exp.startDate, exp.endDate)}
                      </div>
                    </div>
                    {exp.description && (
                      <div style={{ marginTop: "4px", fontSize: "12px", color: "#374151" }}>
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
              <ColHeading label="Education" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
                {education.map((ed) => (
                  <div
                    key={ed.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>
                        {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>{ed.institution}</div>
                    </div>
                    <div style={{ fontSize: "10.5px", color: "#9ca3af", whiteSpace: "nowrap" }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right column: skills + projects + certifications + languages */}
        <div style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Skills */}
          {allSkills.length > 0 && (
            <section>
              <ColHeading label="Skills" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {skillCategories.map((cat) =>
                  cat.skills.length === 0 ? null : (
                    <div key={cat.id}>
                      {cat.name && (
                        <div
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#6b7280",
                            marginBottom: "4px",
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.08em",
                          }}
                        >
                          {cat.name}
                        </div>
                      )}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                        {cat.skills.map((s) => (
                          <span
                            key={s.id}
                            style={{
                              fontSize: "11px",
                              padding: "3px 9px",
                              borderRadius: "4px",
                              backgroundColor: hexToRgba(accent, 0.08),
                              border: `1px solid ${hexToRgba(accent, 0.25)}`,
                              color: "#1f2937",
                              fontWeight: 500,
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

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <ColHeading label="Projects" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
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
                      <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                      {p.url && <span style={{ fontSize: "10.5px", color: accent }}>{p.url}</span>}
                    </div>
                    {p.description && (
                      <p style={{ fontSize: "11.5px", color: "#4b5563", margin: "2px 0 0", lineHeight: 1.5 }}>
                        {p.description}
                      </p>
                    )}
                    {p.technologies && (
                      <p style={{ fontSize: "10.5px", color: "#9ca3af", margin: "1px 0 0" }}>{p.technologies}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <ColHeading label="Certifications" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {certifications.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "8px",
                      flexWrap: "wrap",
                      fontSize: "12px",
                      color: "#374151",
                    }}
                  >
                    <span>
                      <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                      {c.issuer && <span style={{ color: "#6b7280" }}> — {c.issuer}</span>}
                    </span>
                    {c.date && <span style={{ fontSize: "10.5px", color: "#9ca3af" }}>{c.date}</span>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <ColHeading label="Languages" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {languages.map((l) => (
                  <div
                    key={l.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      color: "#374151",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "#111827" }}>{l.name}</span>
                    <span style={{ color: accent }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Courses */}
          {courses.length > 0 && (
            <section>
              <ColHeading label="Courses" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {courses.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "8px",
                      flexWrap: "wrap",
                      fontSize: "11.5px",
                      color: "#374151",
                    }}
                  >
                    <span>
                      <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                      {c.institution && <span style={{ color: "#6b7280" }}> — {c.institution}</span>}
                    </span>
                    {c.date && <span style={{ fontSize: "10.5px", color: "#9ca3af" }}>{c.date}</span>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function ColHeading({ label, accent }: { label: string; accent: string }) {
  return (
    <h3
      style={{
        fontSize: "12px",
        fontWeight: 700,
        color: "#111827",
        margin: "0 0 12px",
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        paddingBottom: "6px",
        borderBottom: `1px solid ${hexToRgba(accent, 0.4)}`,
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span aria-hidden style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: accent }} />
      {label}
    </h3>
  );
}

export default TwoColLightTemplate;
