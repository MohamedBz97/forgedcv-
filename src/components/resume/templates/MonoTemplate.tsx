import React from "react";
import {
  BulletList,
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

const BLACK = "#000000";
const GRAY_DARK = "#1a1a1a";
const GRAY_MID = "#4d4d4d";
const GRAY_LIGHT = "#888888";
const HAIRLINE = "#000000";

export function MonoTemplate({ data, settings }: TemplateProps) {
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
  const sp = spacingClass(settings.spacing);
  const contacts = contactItems(personal);
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <div
      style={{
        fontFamily: "inherit",
        color: BLACK,
        padding: `${sp.padY} ${sp.padX}`,
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
      }}
    >
      {/* Header — name in massive weight + tiny meta line */}
      <header style={{ paddingBottom: "18px", borderBottom: `2px solid ${HAIRLINE}` }}>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: 900,
            color: BLACK,
            margin: 0,
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            textTransform: "uppercase",
          }}
        >
          {personal.fullName}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          {personal.jobTitle && (
            <p
              style={{
                fontSize: "13px",
                color: GRAY_MID,
                fontWeight: 500,
                margin: 0,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {personal.jobTitle}
            </p>
          )}
          {contacts.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2px 16px",
                fontSize: "11px",
                color: GRAY_DARK,
              }}
            >
              {contacts.map((c, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: GRAY_LIGHT, display: "flex" }}>{c.icon}</span>
                  {c.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personal.summary && (
        <section>
          <MonoHeading num="01" label="Profile" />
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: GRAY_DARK, margin: 0 }}>{personal.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <MonoHeading num="02" label="Experience" />
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div
                key={exp.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "18px",
                  paddingBottom: sp.itemGap,
                  borderBottom: `1px solid #e5e5e5`,
                }}
              >
                <div style={{ fontSize: "11px", color: GRAY_LIGHT, paddingTop: "2px", letterSpacing: "0.04em" }}>
                  {dateRange(exp.startDate, exp.endDate)}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: BLACK, letterSpacing: "-0.005em" }}>
                    {exp.position}
                  </div>
                  <div style={{ fontSize: "12px", color: GRAY_MID, fontWeight: 500, marginTop: "1px" }}>
                    {exp.company}
                    {exp.location ? ` \u00b7 ${exp.location}` : ""}
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: "6px", fontSize: "12px", color: GRAY_DARK }}>
                      <BulletList text={exp.description} gap={sp.listItemGap} bulletColor={BLACK} />
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
          <MonoHeading num="03" label="Education" />
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div
                key={ed.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "18px",
                }}
              >
                <div style={{ fontSize: "11px", color: GRAY_LIGHT, paddingTop: "2px", letterSpacing: "0.04em" }}>
                  {dateRange(ed.startDate, ed.endDate)}
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", fontWeight: 700, color: BLACK }}>
                    {[ed.degree, ed.field].filter(Boolean).join(", ")}
                  </div>
                  <div style={{ fontSize: "12px", color: GRAY_MID, marginTop: "1px" }}>{ed.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills — grid */}
      {allSkills.length > 0 && (
        <section>
          <MonoHeading num="04" label="Capabilities" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px 24px" }}>
            {skillCategories.map((cat) => (
              <React.Fragment key={cat.id}>
                <div
                  style={{
                    fontSize: "10.5px",
                    color: GRAY_LIGHT,
                    paddingTop: "1px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.name}
                </div>
                <div style={{ fontSize: "12px", color: BLACK, fontWeight: 500 }}>
                  {cat.skills.map((s) => s.name).join(", ")}
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <MonoHeading num="05" label="Selected Work" />
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {projects.map((p) => (
              <div
                key={p.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "12px",
                  borderBottom: `1px solid #e5e5e5`,
                  paddingBottom: sp.itemGap,
                }}
              >
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: BLACK }}>{p.name}</div>
                  {p.description && (
                    <p style={{ fontSize: "12px", color: GRAY_DARK, margin: "3px 0 0", lineHeight: 1.55 }}>
                      {p.description}
                    </p>
                  )}
                  {p.technologies && (
                    <p style={{ fontSize: "10.5px", color: GRAY_LIGHT, margin: "2px 0 0", letterSpacing: "0.05em" }}>
                      {p.technologies}
                    </p>
                  )}
                </div>
                {p.url && (
                  <div style={{ fontSize: "10.5px", color: GRAY_MID, whiteSpace: "nowrap", paddingTop: "2px" }}>
                    {p.url}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <MonoHeading num="06" label="Certifications" />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {certifications.map((c) => (
              <div
                key={c.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "12px",
                  fontSize: "12px",
                  color: GRAY_DARK,
                }}
              >
                <span>
                  <span style={{ fontWeight: 700, color: BLACK }}>{c.name}</span>
                  {c.issuer && <span style={{ color: GRAY_MID }}> — {c.issuer}</span>}
                </span>
                {c.date && <span style={{ color: GRAY_LIGHT }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Courses + Languages side by side */}
      {(courses.length > 0 || languages.length > 0) && (
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
          {courses.length > 0 && (
            <div>
              <MonoHeading num="07" label="Coursework" />
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {courses.map((c) => (
                  <div key={c.id} style={{ fontSize: "11.5px", color: GRAY_DARK }}>
                    <span style={{ fontWeight: 700, color: BLACK }}>{c.name}</span>
                    <span style={{ color: GRAY_MID }}>
                      {c.institution ? `, ${c.institution}` : ""}
                      {c.date ? ` — ${c.date}` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <MonoHeading num={courses.length > 0 ? "08" : "07"} label="Languages" />
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {languages.map((l) => (
                  <div
                    key={l.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11.5px",
                      color: GRAY_DARK,
                    }}
                  >
                    <span style={{ fontWeight: 700, color: BLACK }}>{l.name}</span>
                    <span style={{ color: GRAY_LIGHT }}>{l.level}</span>
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

function MonoHeading({ num, label }: { num: string; label: string }) {
  return (
    <h3
      style={{
        fontSize: "11px",
        fontWeight: 700,
        color: BLACK,
        margin: "0 0 12px",
        textTransform: "uppercase",
        letterSpacing: "0.32em",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: GRAY_LIGHT, fontWeight: 400 }}>{num}</span>
      <span>{label}</span>
      <span aria-hidden style={{ flex: 1, height: "1px", backgroundColor: BLACK }} />
    </h3>
  );
}

export default MonoTemplate;
