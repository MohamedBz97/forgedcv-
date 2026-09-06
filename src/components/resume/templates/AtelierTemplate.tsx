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

const SERIF_ITALIC = "'Georgia', 'Times New Roman', serif";

function AtelierHeading({ index, children, accent }: { index: number; children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "14px",
        margin: "0 0 12px",
      }}
    >
      <span
        aria-hidden
        style={{
          fontSize: "48px",
          fontWeight: 900,
          lineHeight: 0.7,
          color: hexToRgba(accent, 0.16),
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {String(index).padStart(2, "0")}
      </span>
      <span
        style={{
          fontSize: "12px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.24em",
          color: "#111827",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
    </h3>
  );
}

export function AtelierTemplate({ data, settings }: TemplateProps) {
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
        color: "#111827",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header */}
      <header>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: 900,
            color: "#111827",
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {personal.fullName}
        </h1>
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: "64px",
            height: "6px",
            backgroundColor: accent,
            marginTop: "12px",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", flexWrap: "wrap" }}>
          {personal.jobTitle && (
            <p
              style={{
                fontFamily: SERIF_ITALIC,
                fontSize: "16px",
                fontStyle: "italic",
                color: accent,
                margin: "12px 0 0",
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
                gap: "4px 18px",
                fontSize: "11.5px",
              }}
            >
              {contacts.map((c, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#4b5563" }}>
                  <span style={{ color: accent, display: "flex" }}>{c.icon}</span>
                  {c.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <AtelierHeading index={1} accent={accent}>
            Manifesto
          </AtelierHeading>
          <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: "#374151", margin: 0 }}>{personal.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <AtelierHeading index={2} accent={accent}>
            Experience
          </AtelierHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 800, color: "#111827" }}>{exp.position}</span>
                    <span
                      style={{
                        fontFamily: SERIF_ITALIC,
                        fontSize: "13px",
                        fontStyle: "italic",
                        color: accent,
                        marginLeft: "10px",
                      }}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#9ca3af", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                    {exp.location ? ` \u00b7 ${exp.location}` : ""}
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

      {/* Skills */}
      {allSkills.length > 0 && (
        <section>
          <AtelierHeading index={3} accent={accent}>
            Toolkit
          </AtelierHeading>
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
                        letterSpacing: "0.14em",
                        color: "#6b7280",
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
                          fontWeight: 600,
                          padding: "4px 11px",
                          border: `1px solid ${hexToRgba(accent, 0.4)}`,
                          borderRadius: "2px",
                          color: "#1f2937",
                          backgroundColor: hexToRgba(accent, 0.04),
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

      {/* Education */}
      {education.length > 0 && (
        <section>
          <AtelierHeading index={4} accent={accent}>
            Education
          </AtelierHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#111827" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </span>
                    <span
                      style={{
                        fontFamily: SERIF_ITALIC,
                        fontSize: "13px",
                        fontStyle: "italic",
                        color: accent,
                        marginLeft: "10px",
                      }}
                    >
                      {ed.institution}
                    </span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#9ca3af", whiteSpace: "nowrap" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <AtelierHeading index={5} accent={accent}>
            Selected Work
          </AtelierHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#111827" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11px", color: "#9ca3af", margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
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
              <AtelierHeading index={6} accent={accent}>
                Honors
              </AtelierHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {certifications.map((c) => (
                  <div key={c.id} style={{ fontSize: "12.5px", color: "#374151" }}>
                    <span style={{ fontWeight: 800, color: "#111827" }}>{c.name}</span>
                    {c.issuer && <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>}
                    {c.date && <span style={{ color: "#9ca3af" }}> ({c.date})</span>}
                  </div>
                ))}
              </div>
            </section>
          )}
          {languages.length > 0 && (
            <section>
              <AtelierHeading index={7} accent={accent}>
                Languages
              </AtelierHeading>
              <div style={{ fontSize: "12.5px", color: "#374151" }}>
                {languages.map((l, i) => (
                  <span key={l.id}>
                    {i > 0 && <span style={{ color: "#d1d5db", margin: "0 10px" }}>/</span>}
                    <span style={{ fontWeight: 800 }}>{l.name}</span>
                    <span style={{ color: "#6b7280" }}> ({l.level})</span>
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

export default AtelierTemplate;