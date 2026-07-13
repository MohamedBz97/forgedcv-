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

export function DesignerTemplate({ data, settings }: TemplateProps) {
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

  const tagPill = (text: string, key?: React.Key) => (
    <span
      key={key}
      style={{
        display: "inline-block",
        fontSize: "10.5px",
        padding: "3px 10px",
        borderRadius: "999px",
        backgroundColor: accent,
        color: "#ffffff",
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
    >
      {text}
    </span>
  );

  return (
    <div
      style={{
        fontFamily: "inherit",
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Asymmetric header — colored block with name top-left */}
      <header
        style={{
          backgroundColor: accent,
          color: "#ffffff",
          padding: `${sp.padY} ${sp.padX}`,
          display: "flex",
          alignItems: "center",
          gap: "22px",
        }}
      >
        {settings.showPhoto && (
          <Photo
            personal={personal}
            showPhoto
            size={84}
            ringColor="rgba(255,255,255,0.9)"
            backgroundColor="rgba(255,255,255,0.2)"
            textColor="#ffffff"
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.78)",
              marginBottom: "4px",
            }}
          >
            Portfolio
          </div>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.92)", marginTop: "5px", marginBottom: 0, fontWeight: 500 }}>
              {personal.jobTitle}
            </p>
          )}
        </div>
        {contacts.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.92)",
              maxWidth: "200px",
            }}
          >
            {contacts.slice(0, 4).map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px", wordBreak: "break-word" }}>
                <span style={{ display: "flex", opacity: 0.9 }}>{c.icon}</span>
                {c.value}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Body — main + side rail */}
      <div
        style={{
          padding: `${sp.padY} ${sp.padX}`,
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "28px",
        }}
      >
        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Summary */}
          {personal.summary && (
            <section>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  marginBottom: "8px",
                }}
              >
                About
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: 1.6, color: "#374151", margin: 0 }}>{personal.summary}</p>
            </section>
          )}

          {/* Projects — large colored cards */}
          {projects.length > 0 && (
            <section>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  marginBottom: "10px",
                }}
              >
                Selected Work
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {projects.map((p, i) => (
                  <div
                    key={p.id}
                    style={{
                      backgroundColor: i % 2 === 0 ? hexToRgba(accent, 0.08) : "#f8fafc",
                      border: `1px solid ${hexToRgba(accent, 0.18)}`,
                      borderLeft: `4px solid ${accent}`,
                      borderRadius: "8px",
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 800, color: "#111827", letterSpacing: "-0.01em" }}>
                        {p.name}
                      </span>
                      {p.url && (
                        <span style={{ fontSize: "10.5px", color: accent, fontWeight: 700 }}>{p.url}</span>
                      )}
                    </div>
                    {p.description && (
                      <p style={{ fontSize: "12px", color: "#4b5563", margin: "5px 0 0", lineHeight: 1.5 }}>
                        {p.description}
                      </p>
                    )}
                    {p.technologies && (
                      <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                        {p.technologies
                          .split(",")
                          .map((t) => t.trim())
                          .filter(Boolean)
                          .map((t, j) => tagPill(t, j))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  marginBottom: "10px",
                }}
              >
                Experience
              </h3>
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
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                        <div style={{ fontSize: "11.5px", color: accent, fontWeight: 600 }}>
                          {exp.company}
                          {exp.location ? ` \u00b7 ${exp.location}` : ""}
                        </div>
                      </div>
                      <div style={{ fontSize: "10.5px", color: "#6b7280", whiteSpace: "nowrap" }}>
                        {dateRange(exp.startDate, exp.endDate)}
                      </div>
                    </div>
                    {exp.description && (
                      <div style={{ marginTop: "4px", fontSize: "12px", color: "#4b5563" }}>
                        <BulletList text={exp.description} gap={sp.listItemGap} bulletColor={accent} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Side rail */}
        <aside style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Skills as pill tags */}
          {allSkills.length > 0 && (
            <section
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "14px",
              }}
            >
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  marginBottom: "10px",
                }}
              >
                Skills
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {allSkills.map((s) => (
                  <span
                    key={s.id}
                    style={{
                      fontSize: "10.5px",
                      padding: "3px 9px",
                      borderRadius: "999px",
                      backgroundColor: "#ffffff",
                      border: `1px solid ${hexToRgba(accent, 0.45)}`,
                      color: "#374151",
                      fontWeight: 600,
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "14px",
              }}
            >
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  marginBottom: "10px",
                }}
              >
                Education
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {education.map((ed) => (
                  <div key={ed.id}>
                    <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#111827" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </div>
                    <div style={{ fontSize: "11.5px", color: accent, fontWeight: 600 }}>{ed.institution}</div>
                    <div style={{ fontSize: "10.5px", color: "#9ca3af" }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "14px",
              }}
            >
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  marginBottom: "10px",
                }}
              >
                Certifications
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {certifications.map((c) => (
                  <div key={c.id}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>{c.name}</div>
                    <div style={{ fontSize: "11px", color: "#6b7280" }}>
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
            <section
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "14px",
              }}
            >
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  marginBottom: "10px",
                }}
              >
                Languages
              </h3>
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
                    <span>{l.name}</span>
                    <span style={{ color: accent, fontWeight: 600 }}>{l.level}</span>
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

export default DesignerTemplate;
