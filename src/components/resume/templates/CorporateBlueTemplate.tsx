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

// For corporate-blue the header band uses navy regardless of user accent,
// but accents inside the body still use settings.accentColor. However, since
// the default accent for this template is the same navy, we use accent for both.
export function CorporateBlueTemplate({ data, settings }: TemplateProps) {
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
    <div style={{ fontFamily: "inherit", color: "#1f2937", display: "flex", flexDirection: "column" }}>
      {/* Full-width header band in dark navy */}
      <header
        style={{
          backgroundColor: accent,
          color: "#ffffff",
          padding: "26px 44px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.005em",
              }}
            >
              {personal.fullName}
            </h1>
            {personal.jobTitle && (
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.85)",
                  margin: "4px 0 0",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {personal.jobTitle}
              </p>
            )}
          </div>
          {contacts.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                fontSize: "11.5px",
                color: "rgba(255,255,255,0.92)",
                textAlign: "right",
                maxWidth: "260px",
              }}
            >
              {contacts.map((c, i) => (
                <span
                  key={i}
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px", justifyContent: "flex-end", wordBreak: "break-word" }}
                >
                  <span style={{ display: "flex", opacity: 0.85 }}>{c.icon}</span>
                  {c.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Body — two-column */}
      <div
        style={{
          padding: `${sp.padY} ${sp.padX}`,
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: "32px",
        }}
      >
        {/* Left main column */}
        <div style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Summary */}
          {personal.summary && (
            <section>
              <SectionHead label="Professional Summary" accent={accent} />
              <p style={{ fontSize: "12.5px", lineHeight: 1.6, color: "#374151", margin: 0 }}>{personal.summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <SectionHead label="Professional Experience" accent={accent} />
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
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{exp.position}</div>
                        <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                          {exp.company}
                          {exp.location ? ` \u00b7 ${exp.location}` : ""}
                        </div>
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748b", whiteSpace: "nowrap", fontWeight: 600 }}>
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
              <SectionHead label="Education" accent={accent} />
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
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>
                        {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                        {ed.institution}
                        {ed.location ? ` \u00b7 ${ed.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748b", whiteSpace: "nowrap" }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right rail */}
        <aside style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Skills — vertical list with bullet markers */}
          {allSkills.length > 0 && (
            <section>
              <SectionHead label="Core Competencies" accent={accent} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                {allSkills.map((s) => (
                  <li
                    key={s.id}
                    style={{
                      fontSize: "12px",
                      color: "#374151",
                      paddingLeft: "14px",
                      position: "relative",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.55em",
                        width: "5px",
                        height: "5px",
                        backgroundColor: accent,
                      }}
                    />
                    {s.name}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <SectionHead label="Certifications" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {certifications.map((c) => (
                  <div key={c.id}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a" }}>{c.name}</div>
                    <div style={{ fontSize: "11px", color: "#64748b" }}>
                      {c.issuer}
                      {c.date ? ` \u00b7 ${c.date}` : ""}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <SectionHead label="Languages" accent={accent} />
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
                    <span>{l.name}</span>
                    <span style={{ color: accent, fontWeight: 600 }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <SectionHead label="Selected Projects" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {projects.map((p) => (
                  <div key={p.id}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a" }}>{p.name}</div>
                    {p.description && (
                      <p style={{ fontSize: "11px", color: "#64748b", margin: "1px 0 0", lineHeight: 1.45 }}>
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
        </aside>
      </div>
    </div>
  );
}

function SectionHead({ label, accent }: { label: string; accent: string }) {
  return (
    <h3
      style={{
        fontSize: "12px",
        fontWeight: 700,
        color: "#0f172a",
        margin: "0 0 10px",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        paddingBottom: "5px",
        borderBottom: `2px solid ${hexToRgba(accent, 0.5)}`,
      }}
    >
      {label}
    </h3>
  );
}

export default CorporateBlueTemplate;
