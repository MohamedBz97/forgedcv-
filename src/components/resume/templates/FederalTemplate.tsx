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

function FederalHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        fontSize: "11px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        color: accent,
        margin: "0 0 10px",
        paddingBottom: "6px",
        borderBottom: `1.5px solid ${hexToRgba(accent, 0.45)}`,
      }}
    >
      {children}
    </h3>
  );
}

export function FederalTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
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
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Header band */}
      <header
        style={{
          backgroundColor: accent,
          padding: `${sp.padY} ${sp.padX}`,
          boxShadow: `inset 0 -4px 0 ${hexToRgba("#000000", 0.18)}`,
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.08,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.88)",
              margin: "8px 0 0",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
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
              gap: "4px 20px",
              fontSize: "11.5px",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            {contacts.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "rgba(255,255,255,0.7)", display: "flex" }}>{c.icon}</span>
                {c.value}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Body — two columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "68% 1fr",
          gap: "34px",
          padding: `${sp.padY} ${sp.padX}`,
          flex: 1,
        }}
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {personal.summary && (
            <section>
              <FederalHeading accent={accent}>Summary</FederalHeading>
              <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#374151", margin: 0 }}>{personal.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <FederalHeading accent={accent}>Experience</FederalHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                      <div>
                        <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{exp.position}</div>
                        <div style={{ fontSize: "11.5px", color: accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                          {exp.company}
                          {exp.location ? ` \u00b7 ${exp.location}` : ""}
                        </div>
                      </div>
                      <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                        {dateRange(exp.startDate, exp.endDate)}
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
              <FederalHeading accent={accent}>Education</FederalHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
                {education.map((ed) => (
                  <div key={ed.id}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>
                          {[ed.degree, ed.field].filter(Boolean).join(", ")}
                        </div>
                        <div style={{ fontSize: "11.5px", color: "#4b5563" }}>{ed.institution}</div>
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
              <FederalHeading accent={accent}>Selected Projects</FederalHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
                {projects.map((p) => (
                  <div key={p.id}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#111827" }}>{p.name}</span>
                      {p.url && <span style={{ fontSize: "10.5px", color: accent }}>{p.url}</span>}
                    </div>
                    {p.description && (
                      <p style={{ fontSize: "11.5px", color: "#374151", margin: "3px 0 0", lineHeight: 1.55 }}>{p.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: sp.sectionGap, minWidth: 0 }}>
          {allSkills.length > 0 && (
            <section>
              <FederalHeading accent={accent}>Core Competencies</FederalHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {allSkills.map((s) => (
                  <div key={s.id} style={{ fontSize: "11.5px", color: "#374151" }}>
                    <span style={{ color: accent, fontWeight: 700, marginRight: "6px" }}>&#9642;</span>
                    {s.name}
                  </div>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <FederalHeading accent={accent}>Certifications</FederalHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {certifications.map((c) => (
                  <div key={c.id} style={{ fontSize: "11.5px", color: "#374151", lineHeight: 1.4 }}>
                    <div style={{ fontWeight: 700, color: "#111827" }}>{c.name}</div>
                    {c.issuer && <div style={{ color: "#6b7280" }}>{c.issuer}</div>}
                    {c.date && <div style={{ color: "#9ca3af", fontSize: "10.5px" }}>{c.date}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <FederalHeading accent={accent}>Languages</FederalHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {languages.map((l) => (
                  <div key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: "#374151" }}>
                    <span style={{ fontWeight: 600 }}>{l.name}</span>
                    <span style={{ color: "#9ca3af" }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default FederalTemplate;