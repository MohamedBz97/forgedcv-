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

// Numbered roman-ish badge for the header bar flourish
function BarHeading({ label, accent }: { label: string; accent: string }) {
  return (
    <div
      style={{
        backgroundColor: accent,
        color: "#ffffff",
        padding: "6px 14px",
        marginBottom: "12px",
        display: "inline-block",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        fontSize: "12px",
        fontWeight: 800,
      }}
    >
      {label}
    </div>
  );
}

export function BoldTemplate({ data, settings }: TemplateProps) {
  const {
    personal,
    experience,
    education,
    projects,
    certifications,
    skillCategories,
    languages,
  } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        fontFamily: "inherit",
        color: "#111827",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HUGE name + thick accent bar */}
      <header style={{ padding: `${sp.padY} ${sp.padX} 0` }}>
        {personal.jobTitle && (
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: accent,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            {personal.jobTitle}
          </div>
        )}
        <h1
          style={{
            fontSize: "62px",
            fontWeight: 900,
            color: "#111827",
            lineHeight: 0.98,
            margin: 0,
            letterSpacing: "-0.035em",
            wordBreak: "break-word",
          }}
        >
          {personal.fullName}
        </h1>
        {/* Thick accent bar */}
        <div
          style={{
            height: "10px",
            backgroundColor: accent,
            marginTop: "14px",
            width: "100%",
          }}
        />
        {/* Contact row below the bar */}
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 22px",
              fontSize: "12px",
              color: "#374151",
              fontWeight: 500,
            }}
          >
            {contacts.map((c, i) => (
              <span
                key={i}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <span style={{ color: accent, display: "flex" }}>{c.icon}</span>
                {c.value}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Body */}
      <div
        style={{
          padding: `${sp.padY} ${sp.padX}`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
        }}
      >
        {/* Summary */}
        {personal.summary && (
          <section>
            <BarHeading label="Profile" accent={accent} />
            <p
              style={{
                fontSize: "13.5px",
                lineHeight: 1.6,
                color: "#1f2937",
                margin: 0,
                fontWeight: 400,
              }}
            >
              {personal.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <BarHeading label="Experience" accent={accent} />
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
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 800,
                          color: "#111827",
                          letterSpacing: "-0.005em",
                        }}
                      >
                        {exp.position}
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: accent,
                          fontWeight: 700,
                          marginTop: "1px",
                        }}
                      >
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "11.5px",
                        color: "#ffffff",
                        backgroundColor: "#111827",
                        padding: "3px 9px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {dateRange(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#374151" }}>
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
            <BarHeading label="Education" accent={accent} />
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
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#111827" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </div>
                    <div style={{ fontSize: "12.5px", color: accent, fontWeight: 700 }}>
                      {ed.institution}
                      {ed.location ? ` \u00b7 ${ed.location}` : ""}
                    </div>
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#6b7280", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills — pill tags */}
        {allSkills.length > 0 && (
          <section>
            <BarHeading label="Skills" accent={accent} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 8px" }}>
              {allSkills.map((s) => (
                <span
                  key={s.id}
                  style={{
                    fontSize: "11.5px",
                    padding: "5px 11px",
                    borderRadius: "2px",
                    backgroundColor: hexToRgba(accent, 0.1),
                    color: "#111827",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    border: `1.5px solid ${accent}`,
                  }}
                >
                  {s.name.toUpperCase()}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <BarHeading label="Projects" accent={accent} />
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
                    <span style={{ fontSize: "14px", fontWeight: 800, color: "#111827" }}>
                      {p.name}
                    </span>
                    {p.url && <span style={{ fontSize: "11px", color: accent, fontWeight: 700 }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.5 }}>
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

        {/* Certifications + Languages inline */}
        {(certifications.length > 0 || languages.length > 0) && (
          <section style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {certifications.length > 0 && (
              <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                <BarHeading label="Certifications" accent={accent} />
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {certifications.map((c) => (
                    <div
                      key={c.id}
                      style={{
                        fontSize: "12.5px",
                        color: "#374151",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>
                        <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                        {c.issuer && <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>}
                      </span>
                      {c.date && <span style={{ fontSize: "11px", color: "#9ca3af" }}>{c.date}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {languages.length > 0 && (
              <div style={{ flex: "1 1 180px", minWidth: 0 }}>
                <BarHeading label="Languages" accent={accent} />
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {languages.map((l) => (
                    <div
                      key={l.id}
                      style={{
                        fontSize: "12.5px",
                        color: "#374151",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontWeight: 700, color: "#111827" }}>{l.name}</span>
                      <span style={{ color: "#6b7280" }}>{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default BoldTemplate;
