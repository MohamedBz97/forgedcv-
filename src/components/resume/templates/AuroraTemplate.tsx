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

function AuroraHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "0 0 12px",
      }}
    >
      <span
        style={{
          fontSize: "11.5px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: accent,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <span aria-hidden style={{ flex: 1, height: "1px", backgroundColor: "#e5e7eb" }} />
    </h3>
  );
}

export function AuroraTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        padding: `${sp.padY} ${sp.padX}`,
        fontFamily: "inherit",
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header band */}
      <header
        style={{
          backgroundColor: hexToRgba(accent, 0.09),
          borderLeft: `4px solid ${accent}`,
          borderRadius: "3px",
          padding: "22px 26px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
            margin: 0,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "14px",
              color: accent,
              fontWeight: 600,
              margin: "6px 0 0",
              letterSpacing: "0.05em",
            }}
          >
            {personal.jobTitle}
          </p>
        )}
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "14px",
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 18px",
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
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <AuroraHeading accent={accent}>Profile</AuroraHeading>
          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#374151", margin: 0 }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <AuroraHeading accent={accent}>Experience</AuroraHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
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
          <AuroraHeading accent={accent}>Education</AuroraHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>
                      {ed.degree}
                      {ed.field ? `, ${ed.field}` : ""}
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
                  <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#374151" }}>
                    <BulletList text={ed.description} gap={sp.listItemGap} bulletColor={accent} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {allSkills.length > 0 && (
        <section>
          <AuroraHeading accent={accent}>Core Skills</AuroraHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {skillCategories.map((cat) =>
              cat.skills.length === 0 ? null : (
                <div key={cat.id}>
                  {cat.name && (
                    <div
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      {cat.name}
                    </div>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cat.skills.map((s) => (
                      <span
                        key={s.id}
                        style={{
                          fontSize: "11.5px",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          backgroundColor: hexToRgba(accent, 0.08),
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
          <AuroraHeading accent={accent}>Projects</AuroraHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{p.name}</div>
                  {p.url && <div style={{ fontSize: "11px", color: accent }}>{p.url}</div>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.55 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11px", color: "#6b7280", margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <AuroraHeading accent={accent}>Certifications</AuroraHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {certifications.map((c) => (
              <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap", fontSize: "12.5px" }}>
                <span>
                  <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                  {c.issuer && <span style={{ color: "#4b5563" }}> &mdash; {c.issuer}</span>}
                </span>
                {c.date && <span style={{ fontSize: "11px", color: "#6b7280" }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <AuroraHeading accent={accent}>Languages</AuroraHeading>
          <div style={{ fontSize: "12.5px", color: "#374151" }}>
            {languages.map((l, i) => (
              <span key={l.id}>
                {i > 0 && <span style={{ color: "#9ca3af", margin: "0 10px" }}>&bull;</span>}
                <span style={{ fontWeight: 700, color: "#111827" }}>{l.name}</span>
                <span style={{ color: "#6b7280" }}> ({l.level})</span>
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default AuroraTemplate;