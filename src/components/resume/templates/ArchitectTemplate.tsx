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

const MONO = "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

function ArchitectHeading({ index, children, accent }: { index: string; children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "10px",
        margin: "0 0 12px",
        fontFamily: MONO,
        fontSize: "10px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        color: accent,
      }}
    >
      <span aria-hidden style={{ color: hexToRgba(accent, 0.5) }}>[{index}]</span>
      <span>{children}</span>
      <span aria-hidden style={{ flex: 1, height: "1px", backgroundColor: "#d6d3d1" }} />
    </h3>
  );
}

export function ArchitectTemplate({ data, settings }: TemplateProps) {
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
        color: "#1c1917",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
        borderLeft: "1px solid #d6d3d1",
        position: "relative",
      }}
    >
      {/* Header */}
      <header style={{ borderBottom: "1px solid #d6d3d1", paddingBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
          <div>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#1c1917",
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontFamily: MONO,
              }}
            >
              {personal.fullName}
            </h1>
            {personal.jobTitle && (
              <p
                style={{
                  fontSize: "12.5px",
                  color: accent,
                  fontWeight: 600,
                  margin: "8px 0 0",
                  letterSpacing: "0.04em",
                }}
              >
                {personal.jobTitle}
              </p>
            )}
          </div>
          <span
            style={{
              fontFamily: MONO,
              fontSize: "9px",
              fontWeight: 500,
              color: "#a8a29e",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              paddingTop: "3px",
            }}
          >
            rsum_01
          </span>
        </div>

        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "14px",
              display: "flex",
              flexWrap: "wrap",
              gap: "5px 0",
              fontFamily: MONO,
              fontSize: "10.5px",
              color: "#57534e",
            }}
          >
            {contacts.map((c, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  paddingRight: "18px",
                  marginRight: "18px",
                  borderRight: i === contacts.length - 1 ? "none" : "1px solid #e7e5e4",
                }}
              >
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
          <ArchitectHeading index="01" accent={accent}>
            Summary
          </ArchitectHeading>
          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#44403c", margin: 0 }}>{personal.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <ArchitectHeading index="02" accent={accent}>
            Experience
          </ArchitectHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#1c1917" }}>{exp.position}</span>
                    <span style={{ fontFamily: MONO, fontSize: "10.5px", color: accent, marginLeft: "8px" }}>
                      {exp.company.toUpperCase()}
                    </span>
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: "10px", color: "#a8a29e", whiteSpace: "nowrap" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                    {exp.location ? ` / ${exp.location}` : ""}
                  </span>
                </div>
                {exp.description && (
                  <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#44403c" }}>
                    <BulletList text={exp.description} gap={sp.listItemGap} bulletColor={accent} />
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
          <ArchitectHeading index="03" accent={accent}>
            Skills
          </ArchitectHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {skillCategories.map((cat) =>
              cat.skills.length === 0 ? null : (
                <div key={cat.id} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "10px", alignItems: "baseline" }}>
                  <span style={{ fontFamily: MONO, fontSize: "9.5px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a8a29e" }}>
                    {cat.name || "Skills"}
                  </span>
                  <span style={{ fontSize: "12px", color: "#44403c" }}>
                    {cat.skills.map((s) => s.name).join("  /  ")}
                  </span>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section>
          <ArchitectHeading index="04" accent={accent}>
            Education
          </ArchitectHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#1c1917" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: "10.5px", color: accent, marginLeft: "8px" }}>
                      {ed.institution.toUpperCase()}
                    </span>
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: "10px", color: "#a8a29e", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <ArchitectHeading index="05" accent={accent}>
            Projects
          </ArchitectHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#1c1917" }}>{p.name}</span>
                  {p.url && <span style={{ fontFamily: MONO, fontSize: "10px", color: accent }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#44403c", margin: "3px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontFamily: MONO, fontSize: "10px", color: "#a8a29e", margin: "3px 0 0" }}>{p.technologies}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications + Languages */}
      {(certifications.length > 0 || languages.length > 0) && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
          {certifications.length > 0 && (
            <section>
              <ArchitectHeading index="06" accent={accent}>
                Certifications
              </ArchitectHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {certifications.map((c) => (
                  <div key={c.id} style={{ fontSize: "11.5px", color: "#44403c" }}>
                    <span style={{ fontWeight: 700 }}>{c.name}</span>
                    {c.issuer && <span style={{ color: "#78716c" }}> &mdash; {c.issuer}</span>}
                    {c.date && <span style={{ color: "#a8a29e" }}> ({c.date})</span>}
                  </div>
                ))}
              </div>
            </section>
          )}
          {languages.length > 0 && (
            <section>
              <ArchitectHeading index="07" accent={accent}>
                Languages
              </ArchitectHeading>
              <div style={{ fontSize: "12px", color: "#44403c" }}>
                {languages.map((l, i) => (
                  <span key={l.id}>
                    {i > 0 && <span style={{ color: "#d6d3d1", margin: "0 8px" }}>/</span>}
                    <span style={{ fontWeight: 700 }}>{l.name}</span>
                    <span style={{ color: "#78716c" }}> ({l.level})</span>
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default ArchitectTemplate;