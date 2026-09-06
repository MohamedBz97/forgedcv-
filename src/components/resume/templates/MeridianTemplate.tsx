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

const SERIF = "'Georgia', 'Times New Roman', serif";

function MeridianHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        fontFamily: SERIF,
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: accent,
        margin: "0 0 10px",
        paddingBottom: "6px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {children}
    </h3>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3
        style={{
          fontSize: "10px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "#64748b",
          margin: "0 0 9px",
        }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

export function MeridianTemplate({ data, settings }: TemplateProps) {
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
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "32%",
          backgroundColor: "#F1F5F9",
          borderRight: "1px solid #e2e8f0",
          padding: `${sp.padY} 26px`,
          display: "flex",
          flexDirection: "column",
          gap: sp.sectionGap,
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
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
          <SidebarSection title="Contact">
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
                    color: "#475569",
                    wordBreak: "break-word",
                  }}
                >
                  <span style={{ color: accent, flexShrink: 0, marginTop: "1px", display: "flex" }}>{c.icon}</span>
                  <span style={{ flex: 1 }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </SidebarSection>
        )}

        {allSkills.length > 0 && (
          <SidebarSection title="Expertise">
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {allSkills.map((s) => (
                <div key={s.id} style={{ display: "flex", alignItems: "baseline", gap: "8px", fontSize: "11.5px", color: "#475569" }}>
                  <span style={{ color: accent, fontWeight: 700 }}>&bull;</span>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </SidebarSection>
        )}

        {languages.length > 0 && (
          <SidebarSection title="Languages">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
              {languages.map((l) => (
                <li key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: "#475569" }}>
                  <span style={{ fontWeight: 600 }}>{l.name}</span>
                  <span style={{ color: "#94a3b8" }}>{l.level}</span>
                </li>
              ))}
            </ul>
          </SidebarSection>
        )}

        {certifications.length > 0 && (
          <SidebarSection title="Credentials">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {certifications.map((c) => (
                <li key={c.id} style={{ fontSize: "11.5px", lineHeight: 1.4, color: "#475569" }}>
                  <span style={{ fontWeight: 600, color: "#334155" }}>{c.name}</span>
                  {c.issuer && <span style={{ color: "#64748b" }}>, {c.issuer}</span>}
                  {c.date && <span style={{ color: "#94a3b8" }}> &middot; {c.date}</span>}
                </li>
              ))}
            </ul>
          </SidebarSection>
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
        <header style={{ borderBottom: `2px solid ${accent}`, paddingBottom: "16px", marginBottom: "2px" }}>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "32px",
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
            <p
              style={{
                fontFamily: SERIF,
                fontSize: "13.5px",
                color: accent,
                fontStyle: "italic",
                margin: "6px 0 0",
                letterSpacing: "0.05em",
              }}
            >
              {personal.jobTitle}
            </p>
          )}
        </header>

        {personal.summary && (
          <section>
            <MeridianHeading accent={accent}>Profile</MeridianHeading>
            <p style={{ fontSize: "12.5px", lineHeight: 1.7, color: "#374151", margin: 0, textAlign: "justify" }}>
              {personal.summary}
            </p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <MeridianHeading accent={accent}>Professional Experience</MeridianHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{exp.company}</span>
                      {exp.position && (
                        <span style={{ fontSize: "12px", color: accent, fontStyle: "italic", marginLeft: "7px" }}>
                          &mdash; {exp.position}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap" }}>
                      {dateRange(exp.startDate, exp.endDate)}
                      {exp.location ? ` \u00b7 ${exp.location}` : ""}
                    </div>
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: "5px", fontSize: "12px", color: "#374151" }}>
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
            <MeridianHeading accent={accent}>Education</MeridianHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {education.map((ed) => (
                <div key={ed.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{ed.institution}</span>
                      {(ed.degree || ed.field) && (
                        <span style={{ fontSize: "12px", color: accent, fontStyle: "italic", marginLeft: "7px" }}>
                          &mdash; {[ed.degree, ed.field].filter(Boolean).join(", ")}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap" }}>
                      {dateRange(ed.startDate, ed.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <MeridianHeading accent={accent}>Selected Engagements</MeridianHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
              {projects.map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: "10.5px", color: accent }}>{p.url}</span>}
                  </div>
                  {p.description && (
                    <p style={{ fontSize: "12px", color: "#374151", margin: "3px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                  )}
                  {p.technologies && (
                    <p style={{ fontSize: "10.5px", color: "#6b7280", margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
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

export default MeridianTemplate;