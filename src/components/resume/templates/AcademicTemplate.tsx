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

const SERIF = "'Georgia', 'Times New Roman', 'Times', serif";

// Roman numerals for section headings (I, II, III, ...)
function toRoman(num: number): string {
  const romans: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let res = "";
  let n = num;
  for (const [v, sym] of romans) {
    while (n >= v) {
      res += sym;
      n -= v;
    }
  }
  return res || "I";
}

function NumberedHeading({ num, label, accent }: { num: number; label: string; accent: string }) {
  return (
    <h3
      style={{
        fontFamily: SERIF,
        fontSize: "14px",
        fontWeight: 700,
        color: "#1f2937",
        margin: "0 0 10px",
        letterSpacing: "0.02em",
        display: "flex",
        alignItems: "baseline",
        gap: "8px",
      }}
    >
      <span style={{ color: accent, fontSize: "13px", fontWeight: 700 }}>{toRoman(num)}.</span>
      <span style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
      <span
        aria-hidden
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "#cbd5e1",
          marginLeft: "4px",
        }}
      />
    </h3>
  );
}

export function AcademicTemplate({ data, settings }: TemplateProps) {
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

  let sectionNum = 0;
  const nextNum = () => ++sectionNum;

  return (
    <div
      style={{
        fontFamily: SERIF,
        color: "#1f2937",
        padding: `${sp.padY} ${sp.padX}`,
        display: "flex",
        flexDirection: "column",
        gap: sp.sectionGap,
        lineHeight: 1.55,
      }}
    >
      {/* Header — centered, conservative */}
      <header style={{ textAlign: "center", borderBottom: `1px solid #94a3b8`, paddingBottom: "16px" }}>
        <h1
          style={{
            fontFamily: SERIF,
            fontSize: "26px",
            fontWeight: 700,
            color: "#0f172a",
            margin: 0,
            letterSpacing: "0.03em",
            lineHeight: 1.15,
          }}
        >
          {personal.fullName}
        </h1>
        {personal.jobTitle && (
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "14px",
              color: accent,
              fontStyle: "italic",
              margin: "4px 0 0",
            }}
          >
            {personal.jobTitle}
          </p>
        )}
        {contacts.length > 0 && (
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2px 14px",
              fontSize: "11.5px",
              color: "#475569",
            }}
          >
            {contacts.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <span style={{ color: accent, display: "flex" }}>{c.icon}</span>
                {c.value}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Research Interests / Summary */}
      {personal.summary && (
        <section>
          <NumberedHeading num={nextNum()} label="Research Interests" accent={accent} />
          <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#334155", margin: 0, textAlign: "justify" }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience — formatted as appointments */}
      {experience.length > 0 && (
        <section>
          <NumberedHeading num={nextNum()} label="Appointments" accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {experience.map((exp) => (
              <div key={exp.id}>
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
                    <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#0f172a", fontStyle: "italic" }}>
                      {exp.position}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "#334155" }}>
                      {exp.company ? `, ${exp.company}` : ""}
                    </span>
                    {exp.location && <span style={{ fontSize: "12px", color: "#64748b" }}>, {exp.location}</span>}
                  </div>
                  <div style={{ fontSize: "11px", color: "#64748b", fontStyle: "italic", whiteSpace: "nowrap" }}>
                    {dateRange(exp.startDate, exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <div style={{ marginTop: "4px", fontSize: "12px", color: "#334155" }}>
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
          <NumberedHeading num={nextNum()} label="Education" accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: sp.itemGap }}>
            {education.map((ed) => (
              <div
                key={ed.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#0f172a" }}>
                    {[ed.degree, ed.field].filter(Boolean).join(", ")}
                  </span>
                  <span style={{ fontSize: "12.5px", color: "#334155", fontStyle: "italic" }}>
                    {ed.institution ? `, ${ed.institution}` : ""}
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#64748b", fontStyle: "italic", whiteSpace: "nowrap" }}>
                  {dateRange(ed.startDate, ed.endDate)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Publications — projects shown as publications */}
      {projects.length > 0 && (
        <section>
          <NumberedHeading num={nextNum()} label="Selected Publications" accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {projects.map((p, i) => (
              <div key={p.id} style={{ fontSize: "12px", color: "#334155", lineHeight: 1.55, paddingLeft: "16px", textIndent: "-16px" }}>
                <span style={{ fontWeight: 700, color: "#0f172a" }}>[{i + 1}]</span>{" "}
                <span style={{ fontStyle: "italic", color: "#1f2937" }}>{p.name}</span>
                {p.technologies && <span style={{ color: "#64748b" }}> ({p.technologies})</span>}
                {p.url && <span style={{ color: accent }}> {p.url}</span>}
                {p.description && <span>. {p.description}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills — "Technical Skills" */}
      {allSkills.length > 0 && (
        <section>
          <NumberedHeading num={nextNum()} label="Technical Skills" accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", color: "#334155" }}>
            {skillCategories.map((cat) => (
              <div key={cat.id} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "10px" }}>
                <div style={{ fontStyle: "italic", color: "#64748b" }}>{cat.name}:</div>
                <div>{cat.skills.map((s) => s.name).join(", ")}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications — "Honors & Awards" */}
      {certifications.length > 0 && (
        <section>
          <NumberedHeading num={nextNum()} label="Honors &amp; Awards" accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "12px", color: "#334155" }}>
            {certifications.map((c) => (
              <div
                key={c.id}
                style={{ display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}
              >
                <span>
                  <span style={{ fontWeight: 700, color: "#0f172a" }}>{c.name}</span>
                  {c.issuer && <span style={{ color: "#64748b" }}>, {c.issuer}</span>}
                </span>
                {c.date && <span style={{ color: "#64748b", fontStyle: "italic" }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Courses */}
      {courses.length > 0 && (
        <section>
          <NumberedHeading num={nextNum()} label="Teaching &amp; Coursework" accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "12px", color: "#334155" }}>
            {courses.map((c) => (
              <div
                key={c.id}
                style={{ display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}
              >
                <span>
                  <span style={{ fontWeight: 700, color: "#0f172a" }}>{c.name}</span>
                  {c.institution && <span style={{ color: "#64748b" }}>, {c.institution}</span>}
                </span>
                {c.date && <span style={{ color: "#64748b", fontStyle: "italic" }}>{c.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <NumberedHeading num={nextNum()} label="Languages" accent={accent} />
          <div style={{ fontSize: "12px", color: "#334155" }}>
            {languages.map((l, i) => (
              <span key={l.id}>
                {i > 0 && <span style={{ color: "#94a3b8", margin: "0 8px" }}>|</span>}
                <span style={{ fontWeight: 700, color: "#0f172a" }}>{l.name}</span>
                <span style={{ color: "#64748b", fontStyle: "italic" }}> ({l.level})</span>
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default AcademicTemplate;
