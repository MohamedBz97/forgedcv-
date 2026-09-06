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

function TidesHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        margin: "0 0 12px",
      }}
    >
      <span aria-hidden style={{ width: "22px", height: "3px", borderRadius: "999px", backgroundColor: accent, display: "inline-block" }} />
      <span
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#1f2937",
        }}
      >
        {children}
      </span>
    </h3>
  );
}

function SidebarTides({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <section>
      <h3
        style={{
          fontSize: "10px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: accent,
          margin: "0 0 9px",
        }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

export function TidesTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100%",
        fontFamily: "inherit",
        color: "#1f2937",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "34%",
          backgroundColor: hexToRgba(accent, 0.07),
          borderRight: `1px solid ${hexToRgba(accent, 0.16)}`,
          padding: `${sp.padY} 26px`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
        }}
      >
        {settings.showPhoto && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2px" }}>
            <Photo
              personal={personal}
              showPhoto
              size={104}
              ringColor={accent}
            />
          </div>
        )}

        {contacts.length > 0 && (
          <SidebarTides title="Contact" accent={accent}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: sp.itemGap,
              }}
            >
              {contacts.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "11.5px",
                    lineHeight: 1.45,
                    color: "#374151",
                    wordBreak: "break-word",
                  }}
                >
                  <span style={{ color: accent, flexShrink: 0, marginTop: "1px", display: "flex" }}>{c.icon}</span>
                  <span style={{ flex: 1 }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </SidebarTides>
        )}

        {allSkills.length > 0 && (
          <SidebarTides title="Skills" accent={accent}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {skillCategories.map((cat) =>
                cat.skills.length === 0 ? null : (
                  <div key={cat.id}>
                    {cat.name && (
                      <div
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#6b7280",
                          marginBottom: "5px",
                        }}
                      >
                        {cat.name}
                      </div>
                    )}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {cat.skills.map((s) => (
                        <span
                          key={s.id}
                          style={{
                            fontSize: "11px",
                            padding: "3px 10px",
                            borderRadius: "999px",
                            backgroundColor: "rgba(255,255,255,0.75)",
                            border: `1px solid ${hexToRgba(accent, 0.28)}`,
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
          </SidebarTides>
        )}

        {certifications.length > 0 && (
          <SidebarTides title="Certifications" accent={accent}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {certifications.map((c) => (
                <li key={c.id} style={{ fontSize: "11.5px", lineHeight: 1.4, color: "#374151" }}>
                  <span style={{ fontWeight: 700 }}>{c.name}</span>
                  {c.issuer && <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>}
                  {c.date && <span style={{ color: "#9ca3af" }}> &middot; {c.date}</span>}
                </li>
              ))}
            </ul>
          </SidebarTides>
        )}

        {languages.length > 0 && (
          <SidebarTides title="Languages" accent={accent}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
              {languages.map((l) => (
                <li key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: "#374151" }}>
                  <span style={{ fontWeight: 600 }}>{l.name}</span>
                  <span style={{ color: accent, fontWeight: 600 }}>{l.level}</span>
                </li>
              ))}
            </ul>
          </SidebarTides>
        )}
      </aside>

      {/* Main column */}
      <main
        style={{
          flex: 1,
          padding: `${sp.padY} ${sp.padX}`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
        }}
      >
        <header style={{ borderBottom: `1px solid ${hexToRgba(accent, 0.25)}`, paddingBottom: "16px" }}>
          <h1
            style={{
              fontSize: "28px",
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
                fontSize: "13px",
                color: accent,
                fontWeight: 600,
                margin: "6px 0 0",
                letterSpacing: "0.06em",
              }}
            >
              {personal.jobTitle}
            </p>
          )}
        </header>

        {personal.summary && (
          <section>
            <TidesHeading accent={accent}>Profile</TidesHeading>
            <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <TidesHeading accent={accent}>Experience</TidesHeading>
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
                    <span
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 600,
                        color: "#1f2937",
                        backgroundColor: hexToRgba(accent, 0.1),
                        border: `1px solid ${hexToRgba(accent, 0.22)}`,
                        borderRadius: "999px",
                        padding: "3px 10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {dateRange(exp.startDate, exp.endDate)}
                    </span>
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

        {education.length > 0 && (
          <section>
            <TidesHeading accent={accent}>Education</TidesHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>
                        {[ed.degree, ed.field].filter(Boolean).join(", ")}
                      </div>
                      <div style={{ fontSize: "11.5px", color: accent, fontWeight: 600 }}>{ed.institution}</div>
                    </div>
                    <span
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 600,
                        color: "#6b7280",
                        backgroundColor: hexToRgba(accent, 0.08),
                        borderRadius: "999px",
                        padding: "3px 10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {dateRange(ed.startDate, ed.endDate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <TidesHeading accent={accent}>Projects</TidesHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
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
      </main>
    </div>
  );
}

export default TidesTemplate;