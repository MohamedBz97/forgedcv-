import React from "react";
import {
  BulletList,
  SkillBars,
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

// Convert numeric level (1-5) to a short label
function levelLabel(level: number): string {
  switch (level) {
    case 5:
      return "Expert";
    case 4:
      return "Advanced";
    case 3:
      return "Intermediate";
    case 2:
      return "Basic";
    default:
      return "Beginner";
  }
}

export function GridSkillsTemplate({ data, settings }: TemplateProps) {
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

  // Flatten all skills across categories so we can render them as one big grid.
  // Keep a reference back to the category name so we can show it as a tiny tag.
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryName: cat.name }))
  );

  // Section heading — bold + small accent square marker, modern feel
  const heading = (label: string) => (
    <h3
      style={{
        fontSize: "13px",
        fontWeight: 800,
        color: "#111827",
        margin: "0 0 12px",
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span
        aria-hidden
        style={{
          width: "14px",
          height: "14px",
          backgroundColor: accent,
          borderRadius: "3px",
          display: "inline-block",
        }}
      />
      {label}
    </h3>
  );

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
      {/* Header — name + title + tinted contact strip */}
      <header style={{ padding: `${sp.padY} ${sp.padX} 0` }}>
        <h1
          style={{
            fontSize: "34px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "15px",
              color: accent,
              fontWeight: 700,
              marginTop: "4px",
              marginBottom: 0,
              letterSpacing: "0.01em",
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
              gap: "6px 20px",
              fontSize: "11.5px",
              color: "#374151",
              fontWeight: 500,
              backgroundColor: hexToRgba(accent, 0.06),
              borderLeft: `3px solid ${accent}`,
              padding: "8px 12px",
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
            {heading("Profile")}
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#374151",
                margin: 0,
              }}
            >
              {personal.summary}
            </p>
          </section>
        )}

        {/* SKILLS GRID — the prominent feature, high in the layout */}
        {allSkills.length > 0 && (
          <section>
            {heading("Skills")}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
              }}
            >
              {allSkills.map((s) => (
                <div
                  key={s.id}
                  style={{
                    border: `1px solid ${hexToRgba(accent, 0.25)}`,
                    borderRadius: "6px",
                    padding: "10px 12px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    position: "relative",
                  }}
                >
                  {/* Category tag in the top-right */}
                  {s.categoryName && (
                    <span
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "10px",
                        fontSize: "8.5px",
                        fontWeight: 700,
                        color: accent,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        backgroundColor: hexToRgba(accent, 0.1),
                        padding: "2px 6px",
                        borderRadius: "3px",
                      }}
                    >
                      {s.categoryName}
                    </span>
                  )}
                  {/* Skill name */}
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#111827",
                      paddingRight: s.categoryName ? "60px" : 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {s.name}
                  </div>
                  {/* Level bar + label */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    <SkillBars level={s.level} color={accent} size="sm" />
                    <span
                      style={{
                        fontSize: "9.5px",
                        color: "#6b7280",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {levelLabel(s.level)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            {heading("Experience")}
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  style={{
                    borderLeft: `2px solid ${hexToRgba(accent, 0.4)}`,
                    paddingLeft: "12px",
                  }}
                >
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
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>
                        {exp.position}
                      </div>
                      <div style={{ fontSize: "12.5px", color: accent, fontWeight: 600 }}>
                        {exp.company}
                        {exp.location ? ` \u00b7 ${exp.location}` : ""}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#ffffff",
                        backgroundColor: accent,
                        padding: "2px 8px",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                        borderRadius: "3px",
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
            {heading("Education")}
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div
                  key={ed.id}
                  style={{
                    borderLeft: `2px solid ${hexToRgba(accent, 0.4)}`,
                    paddingLeft: "12px",
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
                    <div style={{ fontSize: "12.5px", color: accent, fontWeight: 600 }}>
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
            {heading("Projects")}
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    borderLeft: `2px solid ${hexToRgba(accent, 0.4)}`,
                    paddingLeft: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>
                      {p.name}
                    </span>
                    {p.url && (
                      <span style={{ fontSize: "11px", color: accent, fontWeight: 600 }}>
                        {p.url}
                      </span>
                    )}
                  </div>
                  {p.description && (
                    <p
                      style={{
                        fontSize: "12.5px",
                        color: "#374151",
                        margin: "3px 0 0",
                        lineHeight: 1.5,
                      }}
                    >
                      {p.description}
                    </p>
                  )}
                  {p.technologies && (
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        margin: "2px 0 0",
                        fontWeight: 600,
                      }}
                    >
                      {p.technologies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications + Courses + Languages inline */}
        {(certifications.length > 0 || courses.length > 0 || languages.length > 0) && (
          <section style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            {certifications.length > 0 && (
              <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                {heading("Certifications")}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {certifications.map((c) => (
                    <div
                      key={c.id}
                      style={{
                        fontSize: "12px",
                        color: "#374151",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>
                        <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                        {c.issuer && (
                          <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>
                        )}
                      </span>
                      {c.date && (
                        <span style={{ fontSize: "10.5px", color: "#9ca3af" }}>{c.date}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {courses.length > 0 && (
              <div style={{ flex: "1 1 180px", minWidth: 0 }}>
                {heading("Courses")}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {courses.map((c) => (
                    <div
                      key={c.id}
                      style={{
                        fontSize: "12px",
                        color: "#374151",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: "#111827" }}>{c.name}</span>
                      {c.date && (
                        <span style={{ fontSize: "10.5px", color: "#9ca3af" }}>{c.date}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {languages.length > 0 && (
              <div style={{ flex: "1 1 160px", minWidth: 0 }}>
                {heading("Languages")}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {languages.map((l) => (
                    <div
                      key={l.id}
                      style={{
                        fontSize: "12px",
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

export default GridSkillsTemplate;
