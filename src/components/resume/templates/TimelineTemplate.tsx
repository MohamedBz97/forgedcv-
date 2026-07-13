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

export function TimelineTemplate({ data, settings }: TemplateProps) {
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

  const tlHeading = (label: string) => (
    <h3
      style={{
        fontSize: "12px",
        fontWeight: 700,
        color: "#111827",
        margin: "0 0 14px",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span aria-hidden style={{ width: "8px", height: "8px", backgroundColor: accent, transform: "rotate(45deg)" }} />
      {label}
    </h3>
  );

  return (
    <div
      style={{
        fontFamily: "inherit",
        color: "#1f2937",
        padding: `${sp.padY} ${sp.padX}`,
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
      >
      {/* Header */}
      <header style={{ paddingBottom: "16px", borderBottom: `2px solid ${accent}` }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
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
              fontSize: "14px",
              color: accent,
              fontWeight: 600,
              margin: "4px 0 0",
              letterSpacing: "0.04em",
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
              gap: "4px 20px",
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

      {/* Summary */}
      {personal.summary && (
        <section>
          {tlHeading("Profile")}
          <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
        </section>
      )}

      {/* Experience — vertical timeline */}
      {experience.length > 0 && (
        <section>
          {tlHeading("Experience")}
          <div style={{ position: "relative", paddingLeft: "26px" }}>
            {/* vertical line */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: "6px",
                top: "4px",
                bottom: "4px",
                width: "2px",
                backgroundColor: hexToRgba(accent, 0.35),
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ position: "relative" }}>
                  {/* dot */}
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: "-26px",
                      top: "4px",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      border: `3px solid ${accent}`,
                      boxShadow: `0 0 0 3px ${hexToRgba(accent, 0.12)}`,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "10px",
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
                        fontSize: "10.5px",
                        color: "#ffffff",
                        backgroundColor: accent,
                        padding: "2px 9px",
                        borderRadius: "999px",
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
          </div>
        </section>
      )}

      {/* Education — vertical timeline */}
      {education.length > 0 && (
        <section>
          {tlHeading("Education")}
          <div style={{ position: "relative", paddingLeft: "26px" }}>
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: "6px",
                top: "4px",
                bottom: "4px",
                width: "2px",
                backgroundColor: hexToRgba(accent, 0.35),
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id} style={{ position: "relative" }}>
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: "-26px",
                      top: "4px",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      border: `3px solid ${accent}`,
                      boxShadow: `0 0 0 3px ${hexToRgba(accent, 0.12)}`,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "10px",
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
                    <div style={{ fontSize: "10.5px", color: "#6b7280", whiteSpace: "nowrap" }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills — pill tags */}
      {allSkills.length > 0 && (
        <section>
          {tlHeading("Skills")}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {allSkills.map((s) => (
              <span
                key={s.id}
                style={{
                  fontSize: "11.5px",
                  padding: "4px 11px",
                  borderRadius: "4px",
                  backgroundColor: hexToRgba(accent, 0.08),
                  border: `1px solid ${hexToRgba(accent, 0.3)}`,
                  color: "#1f2937",
                  fontWeight: 600,
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          {tlHeading("Projects")}
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11px", color: accent, fontWeight: 600 }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.55 }}>
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

      {/* Certifications + Languages + Courses */}
      {(certifications.length > 0 || languages.length > 0 || courses.length > 0) && (
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
          {certifications.length > 0 && (
            <div>
              {tlHeading("Certifications")}
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {certifications.map((c) => (
                  <div key={c.id} style={{ fontSize: "11.5px", color: "#374151" }}>
                    <div style={{ fontWeight: 700, color: "#111827" }}>{c.name}</div>
                    <div style={{ color: "#6b7280" }}>
                      {c.issuer}
                      {c.date ? ` \u00b7 ${c.date}` : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {languages.length > 0 && (
            <div>
              {tlHeading("Languages")}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {languages.map((l) => (
                  <div
                    key={l.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11.5px",
                      color: "#374151",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "#111827" }}>{l.name}</span>
                    <span style={{ color: accent }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {courses.length > 0 && (
            <div>
              {tlHeading("Courses")}
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {courses.map((c) => (
                  <div key={c.id} style={{ fontSize: "11.5px", color: "#374151" }}>
                    <div style={{ fontWeight: 700, color: "#111827" }}>{c.name}</div>
                    <div style={{ color: "#6b7280" }}>
                      {c.institution}
                      {c.date ? ` \u00b7 ${c.date}` : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default TimelineTemplate;
