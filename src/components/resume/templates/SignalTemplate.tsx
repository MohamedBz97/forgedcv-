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

function SignalHeading({ index, children, accent }: { index: string; children: React.ReactNode; accent: string }) {
  return (
    <h3
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "0 0 12px",
      }}
    >
      <span
        aria-hidden
        style={{
          fontSize: "18px",
          fontWeight: 800,
          color: hexToRgba(accent, 0.28),
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}
      >
        {index}
      </span>
      <span
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: accent,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <span aria-hidden style={{ flex: 1, height: "1px", backgroundColor: "#e5e7eb" }} />
    </h3>
  );
}

export function SignalTemplate({ data, settings }: TemplateProps) {
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
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header — editorial */}
      <header style={{ position: "relative", padding: "26px 0 0", overflow: "hidden" }}>
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: "-26px",
            left: "-8px",
            fontSize: "120px",
            fontWeight: 800,
            lineHeight: 1,
            color: hexToRgba(accent, 0.1),
            fontVariantNumeric: "tabular-nums",
            pointerEvents: "none",
          }}
        >
          01
        </span>
        <h1
          style={{
            position: "relative",
            fontSize: "40px",
            fontWeight: 800,
            color: "#111827",
            margin: "10px 0 0",
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: accent,
              margin: "12px 0 0",
            }}
          >
            {personal.jobTitle}
          </p>
        )}
        <div style={{ marginTop: "16px", borderTop: "2px solid #111827" }} />
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 20px",
              fontSize: "11.5px",
              color: "#4b5563",
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
          <SignalHeading index="02" accent={accent}>
            Profile
          </SignalHeading>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#374151", margin: 0 }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <SignalHeading index="03" accent={accent}>
            Experience
          </SignalHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 800, color: "#111827", letterSpacing: "-0.01em" }}>{exp.position}</span>
                    <span style={{ fontSize: "12.5px", color: accent, fontWeight: 600, marginLeft: "8px" }}>
                      {exp.company}
                    </span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                    {exp.location ? ` \u00b7 ${exp.location}` : ""}
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

      {/* Skills */}
      {allSkills.length > 0 && (
        <section>
          <SignalHeading index="04" accent={accent}>
            Capabilities
          </SignalHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px 28px", fontSize: "12.5px", color: "#374151" }}>
            {allSkills.map((s) => (
              <div key={s.id} style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ color: accent, fontWeight: 800 }}>&rarr;</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section>
          <SignalHeading index="05" accent={accent}>
            Education
          </SignalHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#111827" }}>
                      {[ed.degree, ed.field].filter(Boolean).join(", ")}
                    </span>
                    <span style={{ fontSize: "12px", color: accent, fontWeight: 600, marginLeft: "8px" }}>
                      {ed.institution}
                    </span>
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

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <SignalHeading index="06" accent={accent}>
            Selected Work
          </SignalHeading>
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
                  <p style={{ fontSize: "11px", color: "#6b7280", margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
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
              <SignalHeading index="07" accent={accent}>
                Credentials
              </SignalHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {certifications.map((c) => (
                  <div key={c.id} style={{ fontSize: "12px", color: "#374151" }}>
                    <span style={{ fontWeight: 700 }}>{c.name}</span>
                    {c.issuer && <span style={{ color: "#6b7280" }}> &mdash; {c.issuer}</span>}
                    {c.date && <span style={{ color: "#9ca3af" }}> ({c.date})</span>}
                  </div>
                ))}
              </div>
            </section>
          )}
          {languages.length > 0 && (
            <section>
              <SignalHeading index="08" accent={accent}>
                Languages
              </SignalHeading>
              <div style={{ fontSize: "12px", color: "#374151" }}>
                {languages.map((l, i) => (
                  <span key={l.id}>
                    {i > 0 && <span style={{ color: "#d1d5db", margin: "0 8px" }}>|</span>}
                    <span style={{ fontWeight: 700 }}>{l.name}</span>
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

export default SignalTemplate;