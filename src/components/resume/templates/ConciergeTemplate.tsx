import React from "react";
import {
  BulletList,
  Photo,
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

const WARM_INK = "#44403C";
const WARM_MUTED = "#78716C";

function ConciergeHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 12px",
        borderRadius: "999px",
        border: `1px solid ${hexToRgba(accent, 0.45)}`,
        color: accent,
        fontSize: "10.5px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        margin: "0 0 12px",
        backgroundColor: hexToRgba(accent, 0.06),
      }}
    >
      {children}
    </h3>
  );
}

export function ConciergeTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        fontFamily: "inherit",
        color: WARM_INK,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Header — warm tint */}
      <header
        style={{
          backgroundColor: hexToRgba(accent, 0.1),
          padding: `${sp.padY} ${sp.padX}`,
          display: "flex",
          alignItems: "center",
          gap: "26px",
          borderBottom: `3px solid ${accent}`,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "#292524",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: accent,
                margin: "6px 0 0",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              {personal.jobTitle}
            </p>
          )}
          {personal.summary && (
            <p
              style={{
                fontSize: "12px",
                lineHeight: 1.6,
                color: WARM_MUTED,
                margin: "12px 0 0",
                maxWidth: "520px",
              }}
            >
              {personal.summary}
            </p>
          )}
          {contacts.length > 0 && (
            <div
              style={{
                marginTop: "14px",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              {contacts.map((c, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "11px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    border: `1px solid ${hexToRgba(accent, 0.3)}`,
                    backgroundColor: "rgba(255,255,255,0.6)",
                    color: "#57534E",
                  }}
                >
                  <span style={{ color: accent, display: "flex" }}>{c.icon}</span>
                  {c.value}
                </span>
              ))}
            </div>
          )}
        </div>
        {settings.showPhoto && (
          <Photo
            personal={personal}
            showPhoto
            size={104}
            ringColor={accent}
          />
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
        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <ConciergeHeading accent={accent}>Experience</ConciergeHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#292524" }}>{exp.position}</div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 600, fontStyle: "italic" }}>
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: WARM_MUTED, whiteSpace: "nowrap" }}>
                      {dateRange(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: "5px", fontSize: "12.5px", color: WARM_INK }}>
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
            <ConciergeHeading accent={accent}>Core Strengths</ConciergeHeading>
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
                          color: WARM_MUTED,
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
                            backgroundColor: hexToRgba(accent, 0.09),
                            border: `1px solid ${hexToRgba(accent, 0.2)}`,
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

        {/* Education */}
        {education.length > 0 && (
          <section>
            <ConciergeHeading accent={accent}>Education</ConciergeHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#292524" }}>{ed.institution}</span>
                      {(ed.degree || ed.field) && (
                        <span style={{ fontSize: "12px", color: accent, fontStyle: "italic", marginLeft: "8px" }}>
                          &mdash; {[ed.degree, ed.field].filter(Boolean).join(", ")}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "11px", color: WARM_MUTED, whiteSpace: "nowrap" }}>
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
            <ConciergeHeading accent={accent}>Special Projects</ConciergeHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#292524" }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "11px", color: accent }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: WARM_INK, margin: "3px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                  )}
                  {p.technologies && (
                    <p style={{ fontSize: "11px", color: WARM_MUTED, margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
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
                <ConciergeHeading accent={accent}>Certifications</ConciergeHeading>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {certifications.map((c) => (
                    <div key={c.id} style={{ fontSize: "12px", color: WARM_INK }}>
                      <span style={{ fontWeight: 700, color: "#292524" }}>{c.name}</span>
                      {c.issuer && <span style={{ color: WARM_MUTED }}> &mdash; {c.issuer}</span>}
                      {c.date && <span style={{ color: "#a8a29e" }}> ({c.date})</span>}
                    </div>
                  ))}
                </div>
              </section>
            )}
            {languages.length > 0 && (
              <section>
                <ConciergeHeading accent={accent}>Languages</ConciergeHeading>
                <div style={{ fontSize: "12.5px", color: WARM_INK }}>
                  {languages.map((l, i) => (
                    <span key={l.id}>
                      {i > 0 && <span style={{ color: "#a8a29e", margin: "0 8px" }}>&bull;</span>}
                      <span style={{ fontWeight: 700, color: "#292524" }}>{l.name}</span>
                      <span style={{ color: WARM_MUTED }}> ({l.level})</span>
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ConciergeTemplate;