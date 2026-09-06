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

const INK = "#44403C";
const MUTED = "#78716C";
const LINE = "#E7E5E4";

function NordicHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "12px",
        margin: "0 0 14px",
      }}
    >
      <span
        style={{
          fontSize: "10.5px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: accent,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <span aria-hidden style={{ flex: 1, height: "1px", backgroundColor: LINE }} />
    </h3>
  );
}

export function NordicTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  const text = "#44403C";

  return (
    <div
      style={{
        padding: `${sp.padY} ${sp.padX}`,
        fontFamily: "inherit",
        color: INK,
        backgroundColor: "#FCFAF7",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header */}
      <header style={{ paddingBottom: "18px", borderBottom: `1px solid ${LINE}` }}>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "10.5px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: accent,
          }}
        >
          {personal.jobTitle || "Resume"}
        </p>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#292524",
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {personal.fullName}
        </h1>
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "14px",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 18px",
              fontSize: "11.5px",
              color: MUTED,
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
          <NordicHeading accent={accent}>Profile</NordicHeading>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: text, margin: 0 }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <NordicHeading accent={accent}>Experience</NordicHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#292524" }}>{exp.position}</div>
                    <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                      {exp.company}
                      {exp.location ? ` \u00b7 ${exp.location}` : ""}
                    </div>
                  </div>
                  <div style={{ fontSize: "11px", color: MUTED, whiteSpace: "nowrap" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <div style={{ marginTop: "5px", fontSize: "12.5px", color: text }}>
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
          <NordicHeading accent={accent}>Education</NordicHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#292524" }}>
                      {ed.degree}
                      {ed.field ? `, ${ed.field}` : ""}
                    </div>
                    <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>
                      {ed.institution}
                      {ed.location ? ` \u00b7 ${ed.location}` : ""}
                    </div>
                  </div>
                  <div style={{ fontSize: "11px", color: MUTED, whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                </div>
                {ed.description && (
                  <div style={{ marginTop: "5px", fontSize: "12.5px", color: text }}>
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
          <NordicHeading accent={accent}>Skills</NordicHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {skillCategories.map((cat) =>
              cat.skills.length === 0 ? null : (
                <div key={cat.id}>
                  {cat.name && (
                    <div
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: MUTED,
                        marginBottom: "6px",
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
                          padding: "4px 12px",
                          borderRadius: "999px",
                          backgroundColor: hexToRgba(accent, 0.08),
                          color: "#292524",
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
          <NordicHeading accent={accent}>Projects</NordicHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#292524" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: text, margin: "3px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11px", color: MUTED, margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <NordicHeading accent={accent}>Certifications</NordicHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {certifications.map((c) => (
              <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap", fontSize: "12.5px" }}>
                <span>
                  <span style={{ fontWeight: 700, color: "#292524" }}>{c.name}</span>
                  {c.issuer && <span style={{ color: MUTED }}> &mdash; {c.issuer}</span>}
                </span>
                {c.date && <span style={{ fontSize: "11px", color: MUTED }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <NordicHeading accent={accent}>Languages</NordicHeading>
          <div style={{ fontSize: "12.5px", color: text }}>
            {languages.map((l, i) => (
              <span key={l.id}>
                {i > 0 && <span style={{ color: "#a8a29e", margin: "0 10px" }}>&bull;</span>}
                <span style={{ fontWeight: 700, color: "#292524" }}>{l.name}</span>
                <span style={{ color: MUTED }}> ({l.level})</span>
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default NordicTemplate;