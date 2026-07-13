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

export function BannerPhotoTemplate({ data, settings }: TemplateProps) {
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
      {/* Full-width colored banner with circular photo on left */}
      <header
        style={{
          backgroundColor: accent,
          color: "#ffffff",
          padding: "30px 44px",
          display: "flex",
          alignItems: "center",
          gap: "26px",
        }}
      >
        {settings.showPhoto && (
          <Photo
            personal={personal}
            showPhoto
            size={104}
            ringColor="rgba(255,255,255,0.9)"
            backgroundColor="rgba(255,255,255,0.2)"
            textColor="#ffffff"
            style={{ boxShadow: "0 0 0 6px rgba(255,255,255,0.18)" }}
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
            }}
          >
            {personal.fullName}
          </h1>
          {personal.jobTitle && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.92)",
                marginTop: "5px",
                marginBottom: 0,
                fontWeight: 500,
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
                color: "rgba(255,255,255,0.92)",
              }}
            >
              {contacts.map((c, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px", wordBreak: "break-word" }}>
                  <span style={{ display: "flex", opacity: 0.85 }}>{c.icon}</span>
                  {c.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Body — single column */}
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
            <BannerHeading label="Profile" accent={accent} />
            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <BannerHeading label="Experience" accent={accent} />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "16px" }}>
                  <div style={{ fontSize: "11px", color: "#9ca3af", paddingTop: "2px", letterSpacing: "0.04em" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                  </div>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                    <div style={{ fontSize: "12px", color: accent, fontWeight: 600, marginTop: "1px" }}>
                      {exp.company}
                      {exp.location ? ` \u00b7 ${exp.location}` : ""}
                    </div>
                    {exp.description && (
                      <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#374151" }}>
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
          <section>
            <BannerHeading label="Education" accent={accent} />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "16px" }}>
                  <div style={{ fontSize: "11px", color: "#9ca3af", paddingTop: "2px", letterSpacing: "0.04em" }}>
                    {dateRange(ed.startDate, ed.endDate)}
                  </div>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </div>
                    <div style={{ fontSize: "12px", color: accent, fontWeight: 600, marginTop: "1px" }}>
                      {ed.institution}
                      {ed.location ? ` \u00b7 ${ed.location}` : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills — pill tags */}
        {allSkills.length > 0 && (
          <section>
            <BannerHeading label="Skills" accent={accent} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {allSkills.map((s) => (
                <span
                  key={s.id}
                  style={{
                    fontSize: "11.5px",
                    padding: "4px 11px",
                    borderRadius: "4px",
                    backgroundColor: hexToRgba(accent, 0.1),
                    color: "#1f2937",
                    fontWeight: 600,
                    border: `1px solid ${hexToRgba(accent, 0.35)}`,
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
            <BannerHeading label="Projects" accent={accent} />
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "11px", color: accent, fontWeight: 600 }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12.5px", color: "#4b5563", margin: "3px 0 0", lineHeight: 1.55 }}>
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

        {/* Certifications + Languages + Courses side by side */}
        {(certifications.length > 0 || languages.length > 0 || courses.length > 0) && (
          <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            {certifications.length > 0 && (
              <div>
                <BannerHeading label="Certifications" accent={accent} />
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
                <BannerHeading label="Languages" accent={accent} />
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
                <BannerHeading label="Courses" accent={accent} />
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
    </div>
  );
}

function BannerHeading({ label, accent }: { label: string; accent: string }) {
  return (
    <h3
      style={{
        fontSize: "13px",
        fontWeight: 700,
        color: "#111827",
        margin: "0 0 12px",
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span aria-hidden style={{ width: "18px", height: "3px", backgroundColor: accent, borderRadius: "2px" }} />
      {label}
    </h3>
  );
}

export default BannerPhotoTemplate;
