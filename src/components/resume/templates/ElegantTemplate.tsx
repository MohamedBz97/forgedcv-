import React from "react";
import {
  SectionTitle,
  BulletList,
  Photo,
  contactItems,
  spacingClass,
  dateRange,
  type ResumeData,
  type ResumeSettings,
} from "./shared";

interface TemplateProps {
  data: ResumeData;
  settings: ResumeSettings;
}

const SERIF_STACK = "'EB Garamond', 'Garamond', 'Georgia', serif";

export function ElegantTemplate({ data, settings }: TemplateProps) {
  const { personal, experience, education, projects, certifications, skillCategories, languages } = data;
  const accent = settings.accentColor;
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        padding: `${sp.padY} ${sp.padX}`,
        fontFamily: SERIF_STACK,
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header — centered */}
      <header style={{ textAlign: "center" }}>
        {settings.showPhoto && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
            <Photo
              personal={personal}
              showPhoto
              size={110}
              ringColor={accent}
              backgroundColor={accent}
            />
          </div>
        )}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 500,
            color: "#111827",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "0.04em",
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontSize: "14px",
              color: accent,
              fontStyle: "italic",
              marginTop: "6px",
              marginBottom: 0,
              letterSpacing: "0.12em",
            }}
          >
            {personal.jobTitle}
          </p>
        )}
        {/* Centered thin rule with flourish */}
        <div
          aria-hidden
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <span style={{ width: "60px", height: "1px", backgroundColor: accent, opacity: 0.6 }} />
          <span style={{ color: accent, fontSize: "10px" }}>&#10086;</span>
          <span style={{ width: "60px", height: "1px", backgroundColor: accent, opacity: 0.6 }} />
        </div>
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "4px 10px",
              fontSize: "11.5px",
              color: "#6b7280",
            }}
          >
            {contacts.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                {i > 0 && <span style={{ color: accent, margin: "0 2px" }}>&bull;</span>}
                <span style={{ display: "flex", color: accent }}>{c.icon}</span>
                {c.value}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <SectionTitle accent={accent} variant="centered">
            Profile
          </SectionTitle>
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: 1.75,
              color: "#374151",
              margin: 0,
              textAlign: "center",
              fontStyle: "italic",
              maxWidth: "92%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="centered">
            Experience
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "11px", color: accent, letterSpacing: "0.1em", fontStyle: "italic", marginBottom: "2px" }}>
                  {dateRange(exp.startDate, exp.endDate)}
                  {exp.location ? ` \u00b7 ${exp.location}` : ""}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827", letterSpacing: "0.02em" }}>
                  {exp.position}
                </div>
                <div style={{ fontSize: "12.5px", color: "#6b7280", fontStyle: "italic", marginBottom: "4px" }}>
                  {exp.company}
                </div>
                {exp.description && (
                  <div style={{ fontSize: "12.5px", color: "#374151", textAlign: "left", maxWidth: "92%", margin: "0 auto" }}>
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
          <SectionTitle accent={accent} variant="centered">
            Education
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap, textAlign: "center" }}>
            {education.map((ed) => (
              <div key={ed.id}>
                <div style={{ fontSize: "11px", color: accent, letterSpacing: "0.1em", fontStyle: "italic", marginBottom: "2px" }}>
                  {dateRange(ed.startDate, ed.endDate)}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>
                  {[ed.degree, ed.field].filter(Boolean).join(", ")}
                </div>
                <div style={{ fontSize: "12.5px", color: "#6b7280", fontStyle: "italic" }}>
                  {ed.institution}
                  {ed.location ? ` \u00b7 ${ed.location}` : ""}
                </div>
                {ed.description && (
                  <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#374151", textAlign: "left", maxWidth: "92%", margin: "5px auto 0" }}>
                    <BulletList text={ed.description} gap={sp.listItemGap} bulletColor={accent} />
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
          <SectionTitle accent={accent} variant="centered">
            Skills
          </SectionTitle>
          <div style={{ textAlign: "center", fontSize: "12.5px", color: "#374151", lineHeight: 1.8 }}>
            {skillCategories.map((cat, i) => (
              <div key={cat.id} style={i > 0 ? { marginTop: "4px" } : undefined}>
                {cat.name && <span style={{ fontStyle: "italic", color: accent }}>{cat.name}: </span>}
                {cat.skills.map((s, j) => (
                  <span key={s.id}>
                    {j > 0 && <span style={{ color: accent, margin: "0 6px" }}>&middot;</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="centered">
            Projects
          </SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap, textAlign: "center" }}>
            {projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#111827" }}>{p.name}</span>
                  {p.url && <span style={{ fontSize: "11px", color: accent, fontStyle: "italic" }}>{p.url}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "12.5px", color: "#374151", margin: "3px auto 0", lineHeight: 1.55, maxWidth: "92%" }}>{p.description}</p>
                )}
                {p.technologies && (
                  <p style={{ fontSize: "11.5px", color: "#9ca3af", margin: "2px 0 0", fontStyle: "italic" }}>{p.technologies}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="centered">
            Certifications
          </SectionTitle>
          <div style={{ textAlign: "center", fontSize: "12.5px", color: "#374151" }}>
            {certifications.map((c, i) => (
              <div key={c.id}>
                {i > 0 && <div aria-hidden style={{ margin: "6px auto", width: "40px", height: "1px", backgroundColor: "#e5e7eb" }} />}
                <span style={{ fontWeight: 600, color: "#111827" }}>{c.name}</span>
                {c.issuer && <span style={{ color: "#6b7280", fontStyle: "italic" }}> &mdash; {c.issuer}</span>}
                {c.date && <span style={{ color: "#9ca3af", fontStyle: "italic", marginLeft: "6px" }}>({c.date})</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <SectionTitle accent={accent} variant="centered">
            Languages
          </SectionTitle>
          <div style={{ textAlign: "center", fontSize: "12.5px", color: "#374151" }}>
            {languages.map((l, i) => (
              <span key={l.id}>
                {i > 0 && <span style={{ color: accent, margin: "0 10px" }}>&bull;</span>}
                <span style={{ fontWeight: 600, color: "#111827" }}>{l.name}</span>
                <span style={{ color: "#9ca3af", fontStyle: "italic" }}> {l.level.toLowerCase()}</span>
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ElegantTemplate;
