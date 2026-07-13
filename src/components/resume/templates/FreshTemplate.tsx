import React from "react";
import {
  BulletList,
  SkillBars,
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

// Friendly dot bullet
function Dot({ color, size = 6 }: { color: string; size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  );
}

export function FreshTemplate({ data, settings }: TemplateProps) {
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

  const tinted = hexToRgba(accent, 0.1);
  const tintedStrong = hexToRgba(accent, 0.16);

  return (
    <div
      style={{
        fontFamily: "inherit",
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        backgroundColor: hexToRgba(accent, 0.03),
        minHeight: "100%",
      }}
    >
      {/* Soft rounded header card */}
      <header
        style={{
          margin: `${sp.padY} ${sp.padX} 0`,
          backgroundColor: "#ffffff",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: `0 4px 20px ${hexToRgba(accent, 0.12)}`,
          border: `1px solid ${hexToRgba(accent, 0.18)}`,
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {settings.showPhoto && (
          <Photo
            personal={personal}
            showPhoto
            size={88}
            ringColor={accent}
            backgroundColor={tintedStrong}
            textColor={accent}
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
            <Dot color={accent} />
            <span
              style={{
                fontSize: "10.5px",
                fontWeight: 700,
                color: accent,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Hello, I&apos;m
            </span>
          </div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#111827",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontSize: "14px", color: accent, fontWeight: 600, margin: "3px 0 0" }}>
              {personal.jobTitle}
            </p>
          )}
        </div>
      </header>

      {/* Body — main + sidebar */}
      <div
        style={{
          padding: sp.padY,
          paddingLeft: sp.padX,
          paddingRight: sp.padX,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "22px",
          marginTop: "16px",
        }}
      >
        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Summary */}
          {personal.summary && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="About Me" accent={accent} />
              <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="Experience" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
                {experience.map((exp) => (
                  <div key={exp.id} style={{ display: "flex", gap: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "3px" }}>
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: accent,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        aria-hidden
                        style={{
                          width: "2px",
                          flex: 1,
                          minHeight: "20px",
                          backgroundColor: hexToRgba(accent, 0.25),
                          marginTop: "2px",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          gap: "8px",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
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
                        <div style={{ marginTop: "5px", fontSize: "12px", color: "#4b5563" }}>
                          <BulletList text={exp.description} gap={sp.listItemGap} bulletColor={accent} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="Education" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {education.map((ed) => (
                  <div
                    key={ed.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>
                        {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </div>
                      <div style={{ fontSize: "12px", color: accent, fontWeight: 600 }}>{ed.institution}</div>
                    </div>
                    <div style={{ fontSize: "10.5px", color: "#6b7280", whiteSpace: "nowrap" }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {/* Contact card */}
          {contacts.length > 0 && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="Contact" accent={accent} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                {contacts.map((c, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "11.5px",
                      color: "#374151",
                      wordBreak: "break-word",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: tinted,
                        color: accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </span>
                    <span style={{ flex: 1 }}>{c.value}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Skills */}
          {skillCategories.some((c) => c.skills.length > 0) && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="Skills" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {skillCategories.map((cat) =>
                  cat.skills.length === 0 ? null : (
                    <div key={cat.id}>
                      {cat.name && (
                        <div
                          style={{
                            fontSize: "10.5px",
                            fontWeight: 700,
                            color: "#6b7280",
                            marginBottom: "5px",
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.06em",
                          }}
                        >
                          {cat.name}
                        </div>
                      )}
                      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        {cat.skills.map((s) => (
                          <div
                            key={s.id}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "8px",
                            }}
                          >
                            <span style={{ fontSize: "11.5px", color: "#374151" }}>{s.name}</span>
                            <SkillBars level={s.level} color={accent} size="sm" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="Languages" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {languages.map((l) => (
                  <div
                    key={l.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "11.5px",
                      color: "#374151",
                    }}
                  >
                    <span>{l.name}</span>
                    <span
                      style={{
                        backgroundColor: tinted,
                        color: accent,
                        padding: "2px 9px",
                        borderRadius: "999px",
                        fontSize: "10px",
                        fontWeight: 600,
                      }}
                    >
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="Projects" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {projects.map((p) => (
                  <div key={p.id}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>{p.name}</div>
                    {p.description && (
                      <p style={{ fontSize: "11px", color: "#6b7280", margin: "1px 0 0", lineHeight: 1.45 }}>
                        {p.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: `1px solid ${hexToRgba(accent, 0.15)}`,
              }}
            >
              <FriendlyHeading label="Certifications" accent={accent} />
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {certifications.map((c) => (
                  <div key={c.id} style={{ fontSize: "11.5px", color: "#374151" }}>
                    <span style={{ fontWeight: 700, color: "#111827" }}>{c.name}</span>
                    <span style={{ color: "#6b7280" }}>
                      {c.issuer ? ` \u00b7 ${c.issuer}` : ""}
                      {c.date ? ` \u00b7 ${c.date}` : ""}
                    </span>
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

function FriendlyHeading({ label, accent }: { label: string; accent: string }) {
  return (
    <h3
      style={{
        fontSize: "13px",
        fontWeight: 700,
        color: accent,
        margin: "0 0 10px",
        display: "flex",
        alignItems: "center",
        gap: "7px",
      }}
    >
      <Dot color={accent} size={8} />
      {label}
    </h3>
  );
}

export default FreshTemplate;
