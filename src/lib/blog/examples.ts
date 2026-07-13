import type { ResumeData, ResumeSettings } from "@/lib/types";

/**
 * Role-specific resume example pages.
 *
 * Each example powers a high-traffic SEO landing page at `/?example={slug}`
 * that renders a fully-built sample resume (via the ResumeDocument component)
 * alongside SEO copy about what to include in that role's resume.
 *
 * Voice: direct, expert, no fluff. These are pages people will copy from.
 */

export interface ResumeExample {
  slug: string;
  role: string; // "Software Engineer"
  category: string; // "Technology" | "Business" | "Healthcare" | "Education" | "Creative"
  title: string; // SEO title: "Software Engineer Resume Example & Template"
  metaDescription: string; // 150-160 chars
  keywords: string[]; // 4-7 keywords
  excerpt: string; // 1-2 sentence hook
  readTime: number; // minutes
  /** The sample resume data + settings to render live. */
  data: ResumeData;
  settings: ResumeSettings;
  /** SEO content blocks (inline). */
  intro: string; // 2-3 sentence intro paragraph
  whatToInclude: string[]; // bullet list of role-specific resume tips
  keySkills: string[]; // top skills for this role (SEO + a skills section)
  bulletExamples: { weak: string; strong: string }[]; // 3-4 weak-vs-strong rewrites
  relatedTemplates?: string[]; // template ids to suggest
}

/** Shared default section order — same as the editor's default. */
const DEFAULT_SECTION_ORDER: string[] = [
  "experience",
  "education",
  "skills",
  "projects",
  "certifications",
  "languages",
  "courses",
];

function makeSettings(
  templateId: ResumeSettings["templateId"],
  accentColor: string,
): ResumeSettings {
  return {
    templateId,
    accentColor,
    fontFamily: "DM Sans",
    fontSize: "base",
    spacing: "normal",
    showPhoto: false,
    sectionOrder: DEFAULT_SECTION_ORDER,
  };
}

export const RESUME_EXAMPLES: ResumeExample[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // 1. Software Engineer
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "software-engineer-resume",
    role: "Software Engineer",
    category: "Technology",
    title: "Software Engineer Resume Example & Template",
    metaDescription:
      "See a free software engineer resume example with a live, rendered sample. Copy the bullets, swap your metrics, and build yours in minutes with forgedCV.",
    keywords: [
      "software engineer resume",
      "software engineer resume example",
      "developer resume template",
      "backend engineer resume",
      "software engineer CV",
      "coding resume",
    ],
    excerpt:
      "A real, rendered software engineer resume you can copy — plus the bullet-writing patterns that actually get past hiring managers.",
    readTime: 8,
    data: {
      personal: {
        fullName: "Daniel Okonkwo",
        jobTitle: "Senior Software Engineer",
        email: "daniel.okonkwo@email.com",
        phone: "+1 (415) 555-0142",
        location: "Seattle, WA",
        website: "danielokonkwo.dev",
        linkedin: "linkedin.com/in/dokonkwo",
        github: "github.com/dokonkwo",
        photo: "",
        summary:
          "Senior Software Engineer with 7+ years building scalable backend systems and distributed services. Specialized in Go, Kubernetes, and event-driven architectures that handle tens of millions of requests daily. Track record of cutting infrastructure costs 30% while improving reliability.",
      },
      experience: [
        {
          id: "exp1",
          company: "Northwind Cloud",
          position: "Senior Software Engineer",
          location: "Seattle, WA",
          startDate: "Apr 2021",
          endDate: "Present",
          current: true,
          description:
            "Architected a Go-based event streaming pipeline processing 40M+ events/day, reducing ingestion latency from 800ms to 90ms p99.\nLed migration of 28 microservices from EC2 to Kubernetes, cutting infrastructure spend by $480K/year and improving deployment frequency 4x.\nDesigned a multi-tenant caching layer on Redis Cluster that absorbed 92% of read traffic and reduced database CPU by 60%.\nMentored 5 engineers and introduced trunk-based development with contract testing, dropping incident count by 38%.",
        },
        {
          id: "exp2",
          company: "Brightwave Systems",
          position: "Software Engineer",
          location: "Remote",
          startDate: "Jun 2018",
          endDate: "Mar 2021",
          current: false,
          description:
            "Built the payments service in Go and PostgreSQL processing $2.1B in annual transaction volume with 99.99% uptime.\nShipped a rate-limiting middleware adopted by 14 internal services, preventing 3 major outages in its first year.\nReduced CI pipeline runtime from 22 minutes to 4 minutes by parallelizing test suites and introducing remote build caching.\nCo-authored an internal RFC framework now used across 9 engineering teams.",
        },
        {
          id: "exp3",
          company: "Tessellate Labs",
          position: "Junior Software Engineer",
          location: "Austin, TX",
          startDate: "Aug 2016",
          endDate: "May 2018",
          current: false,
          description:
            "Developed Python data ingestion tools that automated a previously manual QA workflow, saving 12 engineering hours/week.\nWrote the company's first internal REST API documentation standard, later adopted org-wide.\nShipped 4 customer-facing features in React and Node.js with a 100% on-call response rate.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "University of Texas at Austin",
          degree: "BS",
          field: "Computer Science",
          location: "Austin, TX",
          startDate: "2012",
          endDate: "2016",
          current: false,
          description:
            "Graduated with honors. Concentration in distributed systems; teaching assistant for Operating Systems.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Languages & Frameworks",
          skills: [
            { id: "s1", name: "Go", level: 5 },
            { id: "s2", name: "Python", level: 4 },
            { id: "s3", name: "TypeScript", level: 4 },
            { id: "s4", name: "React", level: 3 },
            { id: "s5", name: "PostgreSQL", level: 5 },
            { id: "s6", name: "Redis", level: 4 },
          ],
        },
        {
          id: "sk2",
          name: "Infrastructure",
          skills: [
            { id: "s7", name: "Kubernetes", level: 5 },
            { id: "s8", name: "AWS", level: 4 },
            { id: "s9", name: "Docker", level: 4 },
            { id: "s10", name: "Terraform", level: 4 },
            { id: "s11", name: "gRPC", level: 4 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "konko/vector-cache",
          description:
            "Open-source Go library for adaptive in-memory caching with hit-rate-aware eviction. 1.8k GitHub stars and used in production at 3 companies.",
          url: "github.com/dokonkwo/vector-cache",
          technologies: "Go, Redis, gRPC",
        },
        {
          id: "pr2",
          name: "homelab-k8s",
          description:
            "GitOps-managed home Kubernetes cluster running 18 self-hosted services with a full Prometheus + Grafana observability stack.",
          url: "github.com/dokonkwo/homelab-k8s",
          technologies: "Kubernetes, ArgoCD, Terraform",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "AWS Certified Solutions Architect – Professional",
          issuer: "Amazon Web Services",
          date: "2022",
          url: "",
        },
        {
          id: "c2",
          name: "Certified Kubernetes Administrator (CKA)",
          issuer: "Cloud Native Computing Foundation",
          date: "2021",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Native" },
        { id: "l2", name: "Igbo", level: "Intermediate" },
      ],
      courses: [
        {
          id: "co1",
          name: "Designing Data-Intensive Applications",
          institution: "Internal book club (lead)",
          date: "2023",
        },
      ],
    },
    settings: makeSettings("tech", "#0F766E"),
    intro:
      "A great software engineer resume reads like a deploy log of your impact: each bullet pairs a verb with a measurable outcome. Recruiters and engineering managers scan for scale (users, requests, revenue), the tech stack you owned, and proof you shipped. Use this example as a skeleton, swap in your numbers, and keep it to one page.",
    whatToInclude: [
      "Lead every bullet with an action verb and a metric — requests per second, latency, cost saved, or uptime.",
      "List the exact tech stack per role under each position so reviewers can pattern-match against the job description.",
      "Link your GitHub, personal site, or a flagship project near the top — engineers are evaluated on what they ship.",
      "Mention system scale explicitly: daily active users, throughput, dataset size, or annual transaction volume.",
      "Include infrastructure and observability work (Kubernetes, CI/CD, on-call) — it signals seniority fast.",
      "Drop a short projects section for open-source or side work; one starred repo beats three filler bullets.",
    ],
    keySkills: [
      "Go",
      "Python",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "AWS",
      "Docker",
      "Terraform",
      "gRPC",
      "System Design",
    ],
    bulletExamples: [
      {
        weak: "Worked on backend APIs",
        strong:
          "Designed and shipped 12 REST APIs serving 2M daily requests, cutting p99 latency by 40%.",
      },
      {
        weak: "Helped migrate to Kubernetes",
        strong:
          "Led migration of 28 microservices from EC2 to Kubernetes, cutting infra spend by $480K/year and 4x'ing deploy frequency.",
      },
      {
        weak: "Improved performance",
        strong:
          "Built a multi-tenant Redis caching layer absorbing 92% of read traffic, reducing database CPU by 60%.",
      },
      {
        weak: "Mentored junior devs",
        strong:
          "Mentored 5 engineers and introduced trunk-based development with contract testing, dropping incident count by 38%.",
      },
    ],
    relatedTemplates: ["tech", "modern", "minimal"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2. Data Analyst
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "data-analyst-resume",
    role: "Data Analyst",
    category: "Technology",
    title: "Data Analyst Resume Example & Template",
    metaDescription:
      "See a free data analyst resume example with a live, rendered sample resume. Copy SQL-friendly bullets, swap your metrics, and build yours with forgedCV.",
    keywords: [
      "data analyst resume",
      "data analyst resume example",
      "analyst resume template",
      "SQL resume",
      "data analytics CV",
      "business analyst resume",
    ],
    excerpt:
      "A live, rendered data analyst resume — plus the bullet patterns that turn 'ran queries' into 'drove $4.2M in retained ARR.'",
    readTime: 7,
    data: {
      personal: {
        fullName: "Mei-Ling Chen",
        jobTitle: "Senior Data Analyst",
        email: "meiling.chen@email.com",
        phone: "+1 (312) 555-0187",
        location: "Chicago, IL",
        website: "meilingchen.io",
        linkedin: "linkedin.com/in/meilingchen",
        github: "github.com/meilingchen",
        photo: "",
        summary:
          "Senior Data Analyst with 6+ years turning messy event data into board-level decisions. Expert in SQL, Python, and dbt, with a track record of building self-serve dashboards that eliminated 20+ hours/week of ad-hoc reporting. Passionate about experimentation, data quality, and translating analytics into revenue.",
      },
      experience: [
        {
          id: "exp1",
          company: "Compass Retail",
          position: "Senior Data Analyst",
          location: "Chicago, IL",
          startDate: "Feb 2022",
          endDate: "Present",
          current: true,
          description:
            "Built the experimentation platform in Python and dbt now powering 140+ A/B tests/year, lifting conversion 11% in the first 12 months.\nDesigned a churn-prediction model (XGBoost, AUC 0.89) that flagged 18K at-risk accounts and drove $4.2M in retained ARR.\nReplaced 6 weekly manual reports with a Looker self-serve layer, saving 24 analyst hours/week.\nEstablished data quality SLAs and contract tests that cut dashboard incidents by 64%.",
        },
        {
          id: "exp2",
          company: "Helix Health",
          position: "Data Analyst",
          location: "Remote",
          startDate: "Jul 2019",
          endDate: "Jan 2022",
          current: false,
          description:
            "Modeled claims data for 3.4M members in Snowflake, enabling the analytics team to ship 12 net-new KPIs to the executive dashboard.\nBuilt a Tableau utilization dashboard adopted by 7 department heads, surfacing $1.1M in avoidable spend.\nWrote the team's first dbt style guide, adopted by 9 analysts across the org.\nPartnered with actuarial on a risk-adjustment model that improved forecast accuracy by 14%.",
        },
        {
          id: "exp3",
          company: "Northstar Consulting",
          position: "Junior Data Analyst",
          location: "Chicago, IL",
          startDate: "Aug 2017",
          endDate: "Jun 2019",
          current: false,
          description:
            "Pulled, cleaned, and visualized survey data for 30+ client engagements in Excel, R, and Tableau.\nAutomated a weekly client deliverable in Python, cutting turnaround from 6 hours to 12 minutes.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "University of Illinois Urbana-Champaign",
          degree: "MS",
          field: "Statistics",
          location: "Urbana, IL",
          startDate: "2015",
          endDate: "2017",
          current: false,
          description:
            "Thesis on hierarchical Bayesian models for customer lifetime value.",
        },
        {
          id: "edu2",
          institution: "University of Michigan",
          degree: "BS",
          field: "Applied Mathematics",
          location: "Ann Arbor, MI",
          startDate: "2011",
          endDate: "2015",
          current: false,
          description: "Graduated with distinction. Minor in Computer Science.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Analytics & Modeling",
          skills: [
            { id: "s1", name: "SQL", level: 5 },
            { id: "s2", name: "Python", level: 5 },
            { id: "s3", name: "dbt", level: 4 },
            { id: "s4", name: "Statistics", level: 4 },
            { id: "s5", name: "A/B Testing", level: 5 },
            { id: "s6", name: "Experimentation", level: 4 },
          ],
        },
        {
          id: "sk2",
          name: "Tools & Platforms",
          skills: [
            { id: "s7", name: "Snowflake", level: 4 },
            { id: "s8", name: "Looker", level: 4 },
            { id: "s9", name: "Tableau", level: 4 },
            { id: "s10", name: "BigQuery", level: 3 },
            { id: "s11", name: "Airflow", level: 3 },
            { id: "s12", name: "Excel", level: 5 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "meiling/cohorts",
          description:
            "Open-source dbt package for subscription cohort retention analysis, used by 200+ analytics teams and featured in the dbt Hub showcase.",
          url: "github.com/meilingchen/cohorts",
          technologies: "dbt, SQL, Snowflake",
        },
        {
          id: "pr2",
          name: "NPS-to-Revenue Attribution",
          description:
            "Pro-bono project for a local SaaS: built an attribution model linking NPS scores to expansion revenue, surfacing a $300K opportunity.",
          url: "meilingchen.io/nps",
          technologies: "Python, scikit-learn, Looker",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "Google Data Analytics Professional Certificate",
          issuer: "Google",
          date: "2020",
          url: "",
        },
        {
          id: "c2",
          name: "dbt Analytics Engineering Certification",
          issuer: "dbt Labs",
          date: "2023",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Native" },
        { id: "l2", name: "Mandarin", level: "Native" },
      ],
      courses: [
        {
          id: "co1",
          name: "Statistical Learning",
          institution: "Stanford Online",
          date: "2021",
        },
      ],
    },
    settings: makeSettings("modern", "#1C1917"),
    intro:
      "A standout data analyst resume proves impact in numbers — not tools. Hiring managers already know you can write SQL; they want to see what your analysis changed. Lead with business outcomes (revenue, retention, cost saved), back them with the stack you used, and show you can communicate findings to non-technical leaders.",
    whatToInclude: [
      "Quantify business impact first — revenue influenced, churn reduced, cost avoided — then mention the tools.",
      "Name your data warehouse, transformation tool, and BI platform (Snowflake, dbt, Looker) so reviewers can pattern-match.",
      "Mention experimentation and statistical methods (A/B testing, regression, cohort analysis) — they signal seniority.",
      "Show data quality work — contracts, tests, SLAs — because every analytics team struggles with trust.",
      "Include a project or two: a dbt package, a Kaggle notebook, or a public dashboard proves you actually do the work.",
      "List a relevant certification (Google Analytics, dbt, AWS) only if it's recent and role-relevant.",
    ],
    keySkills: [
      "SQL",
      "Python",
      "dbt",
      "Snowflake",
      "Looker",
      "Tableau",
      "A/B Testing",
      "Statistics",
      "Experimentation",
      "Data Visualization",
      "BigQuery",
      "Airflow",
    ],
    bulletExamples: [
      {
        weak: "Ran SQL queries for the team",
        strong:
          "Modeled 3.4M-member claims data in Snowflake, enabling 12 net-new executive KPIs and surfacing $1.1M in avoidable spend.",
      },
      {
        weak: "Built dashboards",
        strong:
          "Replaced 6 weekly manual reports with a Looker self-serve layer, saving 24 analyst hours/week.",
      },
      {
        weak: "Did A/B testing",
        strong:
          "Built the experimentation platform powering 140+ A/B tests/year, lifting conversion 11% in 12 months.",
      },
      {
        weak: "Predicted churn",
        strong:
          "Built an XGBoost churn model (AUC 0.89) that flagged 18K at-risk accounts and drove $4.2M in retained ARR.",
      },
    ],
    relatedTemplates: ["modern", "tech", "professional"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3. Registered Nurse
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "registered-nurse-resume",
    role: "Registered Nurse",
    category: "Healthcare",
    title: "Registered Nurse Resume Example & Template",
    metaDescription:
      "See a free registered nurse resume example with a live, rendered sample. Copy ICU-friendly bullets, swap your unit, and build yours in minutes with forgedCV.",
    keywords: [
      "nurse resume",
      "registered nurse resume",
      "RN resume example",
      "ICU nurse resume",
      "nursing resume template",
      "BSN resume",
    ],
    excerpt:
      "A live, rendered registered nurse resume — plus the bullet patterns that prove clinical skill and patient impact.",
    readTime: 7,
    data: {
      personal: {
        fullName: "Maria Santos",
        jobTitle: "Registered Nurse, ICU",
        email: "maria.santos@email.com",
        phone: "+1 (619) 555-0119",
        location: "San Diego, CA",
        website: "",
        linkedin: "linkedin.com/in/mariasantos-rn",
        github: "",
        photo: "",
        summary:
          "ICU Registered Nurse with 9+ years delivering critical care across cardiac, medical, and surgical intensive care units. ACLS and BLS certified, with a track record of zero hospital-acquired infections over 4 consecutive review cycles. Known for calm under pressure, rapid assessment, and mentoring new graduates through their first code.",
      },
      experience: [
        {
          id: "exp1",
          company: "Sharp Memorial Hospital",
          position: "ICU Charge Nurse",
          location: "San Diego, CA",
          startDate: "Mar 2019",
          endDate: "Present",
          current: true,
          description:
            "Lead nursing care for a 16-bed cardiac ICU, managing 4-5 critically ill patients per shift and supervising 6 RNs and 2 techs.\nReduced central line-associated bloodstream infections (CLABSI) to zero over 14 months by leading a bundled-care initiative adopted unit-wide.\nTriage and stabilize 30+ admissions per month, holding a 98% on-time medication administration score.\nPrecepted 14 new-graduate RNs through a 12-week critical care orientation with a 100% retention rate.",
        },
        {
          id: "exp2",
          company: "UC San Diego Health",
          position: "Staff RN, Medical ICU",
          location: "San Diego, CA",
          startDate: "Jul 2015",
          endDate: "Feb 2019",
          current: false,
          description:
            "Cared for 2-3 critically ill patients per shift in a 24-bed MICU, managing ventilators, vasoactive drips, and continuous renal replacement therapy.\nServed on the rapid response team, responding to 200+ inpatient emergencies per year.\nCo-led the unit's pressure injury prevention task force, cutting HAPI rates by 41% in 12 months.",
        },
        {
          id: "exp3",
          company: "Kaiser Permanente",
          position: "Staff RN, Telemetry",
          location: "San Diego, CA",
          startDate: "Aug 2013",
          endDate: "Jun 2015",
          current: false,
          description:
            "Monitored 4-5 telemetry patients per shift, interpreting rhythms and intervening on 50+ arrhythmia events.\nEarned a 96% patient satisfaction score across 6 consecutive review cycles.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "San Diego State University",
          degree: "BSN",
          field: "Nursing",
          location: "San Diego, CA",
          startDate: "2009",
          endDate: "2013",
          current: false,
          description:
            "Passed NCLEX-RN on first attempt. Sigma Theta Tau member. Senior practicum in cardiac ICU.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Clinical Skills",
          skills: [
            { id: "s1", name: "Critical Care", level: 5 },
            { id: "s2", name: "Ventilator Management", level: 5 },
            { id: "s3", name: "ACLS", level: 5 },
            { id: "s4", name: "Vasoactive Drips", level: 5 },
            { id: "s5", name: "ECG Interpretation", level: 4 },
            { id: "s6", name: "CRRT", level: 4 },
          ],
        },
        {
          id: "sk2",
          name: "Leadership & Safety",
          skills: [
            { id: "s7", name: "Charge Nurse", level: 4 },
            { id: "s8", name: "Preceptorship", level: 4 },
            { id: "s9", name: "Infection Control", level: 4 },
            { id: "s10", name: "Rapid Response", level: 4 },
            { id: "s11", name: "Documentation", level: 4 },
            { id: "s12", name: "Patient Education", level: 4 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "CLABSI Bundled-Care Initiative",
          description:
            "Designed and rolled out a unit-wide central-line care bundle, eliminating CLABSI for 14 consecutive months and earning a hospital-wide safety award.",
          url: "",
          technologies: "Epic, Evidence-Based Protocols",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "Registered Nurse (RN)",
          issuer: "California Board of Registered Nursing",
          date: "2013",
          url: "",
        },
        {
          id: "c2",
          name: "BLS & ACLS",
          issuer: "American Heart Association",
          date: "2024",
          url: "",
        },
        {
          id: "c3",
          name: "CCRN (Adult)",
          issuer: "American Association of Critical-Care Nurses",
          date: "2020",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Fluent" },
        { id: "l2", name: "Tagalog", level: "Native" },
        { id: "l3", name: "Spanish", level: "Intermediate" },
      ],
      courses: [
        {
          id: "co1",
          name: "Essentials of Critical Care Nursing",
          institution: "AACN",
          date: "2018",
        },
      ],
    },
    settings: makeSettings("classic", "#134E4A"),
    intro:
      "A strong registered nurse resume balances clinical credentials with patient outcomes. Nurse managers scan for your license, certifications (BLS, ACLS, specialty), and concrete evidence of safe practice — infection rates, code response, retention of preceptees. Lead with your unit and acuity, then back every bullet with a measurable patient safety or quality outcome.",
    whatToInclude: [
      "Start with your license, BLS/ACLS, and any specialty certification (CCRN, PALS, OCN) near the top — they're hard requirements.",
      "Quantify patient load and acuity (e.g., 4-5 critically ill patients per shift, 16-bed ICU) so reviewers understand your scope.",
      "Highlight quality and safety outcomes: infection rates, fall rates, pressure injuries, medication error rates.",
      "Mention leadership roles — charge nurse, preceptor, committee work — even if informal.",
      "List relevant clinical skills (ventilator management, vasoactive drips, CRRT, ECG interpretation) grouped by category.",
      "Include your BSN and any continuing education; many Magnet hospitals require or strongly prefer a BSN.",
    ],
    keySkills: [
      "Critical Care",
      "ACLS",
      "BLS",
      "Ventilator Management",
      "Vasoactive Drips",
      "ECG Interpretation",
      "CRRT",
      "Patient Assessment",
      "Charge Nurse",
      "Preceptorship",
      "Infection Control",
      "Documentation",
    ],
    bulletExamples: [
      {
        weak: "Cared for ICU patients",
        strong:
          "Led nursing care for a 16-bed cardiac ICU, managing 4-5 critically ill patients per shift and supervising 6 RNs.",
      },
      {
        weak: "Helped reduce infections",
        strong:
          "Reduced CLABSI to zero over 14 months by leading a bundled-care initiative adopted unit-wide.",
      },
      {
        weak: "Trained new nurses",
        strong:
          "Precepted 14 new-graduate RNs through a 12-week critical care orientation with 100% retention.",
      },
      {
        weak: "Worked on quality team",
        strong:
          "Co-led the pressure injury prevention task force, cutting HAPI rates by 41% in 12 months.",
      },
    ],
    relatedTemplates: ["classic", "professional", "modern"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 4. Teacher
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-resume",
    role: "Teacher",
    category: "Education",
    title: "Teacher Resume Example & Template",
    metaDescription:
      "See a free teacher resume example with a live, rendered sample. Copy classroom-tested bullets, swap your subject, and build yours in minutes with forgedCV.",
    keywords: [
      "teacher resume",
      "teacher resume example",
      "high school teacher resume",
      "english teacher resume",
      "teaching resume template",
      "educator resume",
    ],
    excerpt:
      "A live, rendered teacher resume — plus the bullet patterns that prove student outcomes, not just lesson plans.",
    readTime: 7,
    data: {
      personal: {
        fullName: "James Whitfield",
        jobTitle: "High School English Teacher",
        email: "james.whitfield@email.com",
        phone: "+1 (720) 555-0163",
        location: "Denver, CO",
        website: "",
        linkedin: "linkedin.com/in/jwhitfield-edu",
        github: "",
        photo: "",
        summary:
          "High School English Teacher with 11+ years fostering critical reading and writing across grades 9-12. AP English Literature certified with a 92% pass rate over the last 5 cohorts. Recognized for project-based learning, restorative classroom management, and mentoring 18 student teachers through their licensure year.",
      },
      experience: [
        {
          id: "exp1",
          company: "Denver South High School",
          position: "English Teacher & Department Chair",
          location: "Denver, CO",
          startDate: "Aug 2016",
          endDate: "Present",
          current: true,
          description:
            "Teach 5 sections of English II and AP English Literature to 150+ students across diverse learner populations, including 22% IEP students.\nRaised AP English Literature pass rate from 71% to 92% over 5 cohorts by redesigning the unit arc around timed-write cycles.\nChaired a 9-person English department, aligning curriculum to Common Core and cutting textbook spend by $34K/year.\nBuilt a project-based creative writing unit now used across 3 district high schools, with student work published in 2 regional anthologies.",
        },
        {
          id: "exp2",
          company: "Lincoln High School",
          position: "English Teacher",
          location: "Aurora, CO",
          startDate: "Aug 2013",
          endDate: "Jun 2016",
          current: false,
          description:
            "Taught English I and English II to 130+ students, including sheltered ESL sections.\nCoached the speech and debate team to a state quarterfinals finish in 2015.\nLaunched a twice-weekly after-school writing lab serving 40+ students per semester.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "University of Colorado Denver",
          degree: "MA",
          field: "Curriculum & Instruction",
          location: "Denver, CO",
          startDate: "2014",
          endDate: "2016",
          current: false,
          description:
            "Capstone on project-based learning in secondary English. 4.0 GPA.",
        },
        {
          id: "edu2",
          institution: "University of Colorado Boulder",
          degree: "BA",
          field: "English Literature",
          location: "Boulder, CO",
          startDate: "2009",
          endDate: "2013",
          current: false,
          description: "Graduated cum laude. Secondary teaching licensure program.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Instruction",
          skills: [
            { id: "s1", name: "AP English Literature", level: 5 },
            { id: "s2", name: "Curriculum Design", level: 4 },
            { id: "s3", name: "Project-Based Learning", level: 4 },
            { id: "s4", name: "Differentiated Instruction", level: 5 },
            { id: "s5", name: "Literacy Intervention", level: 4 },
            { id: "s6", name: "Assessment Design", level: 4 },
          ],
        },
        {
          id: "sk2",
          name: "Leadership",
          skills: [
            { id: "s7", name: "Department Chair", level: 4 },
            { id: "s8", name: "Mentoring", level: 5 },
            { id: "s9", name: "Classroom Management", level: 5 },
            { id: "s10", name: "Restorative Practices", level: 4 },
            { id: "s11", name: "Family Communication", level: 4 },
            { id: "s12", name: "EdTech Integration", level: 4 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "PBL Creative Writing Unit",
          description:
            "Authored a 9-week project-based creative writing unit adopted by 3 district high schools; student work published in 2 regional anthologies.",
          url: "",
          technologies: "Google Classroom, CommonLit, Turnitin",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "Colorado Professional Teaching License, English (7-12)",
          issuer: "Colorado Department of Education",
          date: "2013",
          url: "",
        },
        {
          id: "c2",
          name: "AP English Literature Certified",
          issuer: "College Board",
          date: "2017",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Native" },
        { id: "l2", name: "Spanish", level: "Intermediate" },
      ],
      courses: [
        {
          id: "co1",
          name: "Restorative Practices in Schools",
          institution: "IIRP",
          date: "2019",
        },
      ],
    },
    settings: makeSettings("classic", "#7C2D12"),
    intro:
      "An effective teacher resume leads with student outcomes, not lesson descriptions. Principals scan for certification, grade bands, subject area, and evidence that your teaching moves the needle on achievement, engagement, or equity. Quantify class sizes, pass rates, and growth; spotlight leadership (department chair, mentor, coach); and show you can manage a diverse classroom.",
    whatToInclude: [
      "List your teaching license, state, grade band, and subject endorsement up top — these are hard filters.",
      "Quantify student outcomes: pass rates, growth percentiles, reading-level gains, attendance improvements.",
      "Mention class sizes, IEP/504/ELL populations, and differentiation to signal inclusive practice.",
      "Highlight leadership roles — department chair, instructional coach, mentor teacher, club sponsor.",
      "Include relevant PD and certifications (AP, IB, Orton-Gillingham, ESL endorsement) only if recent.",
      "Show tech integration (Google Classroom, Canvas, CommonLit, Turnitin) without listing every app.",
    ],
    keySkills: [
      "Curriculum Design",
      "Differentiated Instruction",
      "AP English Literature",
      "Project-Based Learning",
      "Classroom Management",
      "Restorative Practices",
      "Assessment Design",
      "Literacy Intervention",
      "Mentoring",
      "Family Communication",
      "EdTech Integration",
      "IEP/504 Support",
    ],
    bulletExamples: [
      {
        weak: "Taught English classes",
        strong:
          "Taught 5 sections of English II and AP English Literature to 150+ students, including 22% IEP learners.",
      },
      {
        weak: "Improved test scores",
        strong:
          "Raised AP English Literature pass rate from 71% to 92% over 5 cohorts by redesigning the unit arc around timed-write cycles.",
      },
      {
        weak: "Led the department",
        strong:
          "Chaired a 9-person English department, aligning curriculum to Common Core and cutting textbook spend by $34K/year.",
      },
      {
        weak: "Started a writing program",
        strong:
          "Built a project-based creative writing unit now used in 3 district high schools, with student work published in 2 regional anthologies.",
      },
    ],
    relatedTemplates: ["classic", "professional", "modern"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5. Marketing Manager
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "marketing-manager-resume",
    role: "Marketing Manager",
    category: "Business",
    title: "Marketing Manager Resume Example & Template",
    metaDescription:
      "See a free marketing manager resume example with a live, rendered sample. Copy the funnel-friendly bullets, swap your metrics, and build yours with forgedCV.",
    keywords: [
      "marketing manager resume",
      "marketing resume example",
      "demand generation resume",
      "growth marketer resume",
      "marketing CV template",
      "performance marketing resume",
    ],
    excerpt:
      "A live, rendered marketing manager resume — plus the bullet patterns that prove pipeline, ROI, and team leadership.",
    readTime: 8,
    data: {
      personal: {
        fullName: "Aaliyah Johnson",
        jobTitle: "Senior Marketing Manager",
        email: "aaliyah.johnson@email.com",
        phone: "+1 (646) 555-0172",
        location: "Brooklyn, NY",
        website: "aaliyahjohnson.com",
        linkedin: "linkedin.com/in/aaliyahjohnson",
        github: "",
        photo: "",
        summary:
          "Senior Marketing Manager with 8+ years driving full-funnel growth for B2B SaaS and DTC brands. Specialist in paid media, lifecycle, and brand — averaging 3.4x pipeline ROI across the last 6 quarters. Known for building high-velocity teams, ruthless experimentation, and turning messy attribution data into board-ready narratives.",
      },
      experience: [
        {
          id: "exp1",
          company: "Northbeam",
          position: "Senior Marketing Manager, Demand Generation",
          location: "Brooklyn, NY (Remote)",
          startDate: "Apr 2021",
          endDate: "Present",
          current: true,
          description:
            "Own a $4.2M annual demand budget across paid search, paid social, and content; delivered $14.6M in influenced pipeline at 3.4x ROI in FY24.\nBuilt the lifecycle program in HubSpot and Customer.io, lifting trial-to-paid conversion 23% and reducing churn 11%.\nLaunched the company's first podcast and newsletter, growing the owned audience from 0 to 38K subscribers in 18 months.\nHired and managed a 5-person team of performance, content, and lifecycle marketers; promoted 2 to manager level.",
        },
        {
          id: "exp2",
          company: "Hims & Hers",
          position: "Growth Marketing Manager",
          location: "San Francisco, CA",
          startDate: "Jun 2018",
          endDate: "Mar 2021",
          current: false,
          description:
            "Scaled paid social spend from $200K/mo to $1.8M/mo on Meta and TikTok while holding CAC payback under 9 months.\nRan 240+ creative experiments per quarter, lifting click-through rate 62% and cutting CPA 28%.\nPartnered with brand to launch the 'Here for Every Body' campaign, contributing to a 19% YoY revenue lift.",
        },
        {
          id: "exp3",
          company: "Movable Ink",
          position: "Marketing Associate",
          location: "New York, NY",
          startDate: "Aug 2016",
          endDate: "May 2018",
          current: false,
          description:
            "Built the email marketing engine in Marketo, growing the marketing-qualified lead base 3x in 18 months.\nOwned weekly campaign reporting for a 12-person growth team.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "New York University",
          degree: "BS",
          field: "Integrated Marketing",
          location: "New York, NY",
          startDate: "2012",
          endDate: "2016",
          current: false,
          description: "Magna Cum Laude. Minor in Data Analytics.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Strategy & Acquisition",
          skills: [
            { id: "s1", name: "Paid Media", level: 5 },
            { id: "s2", name: "Demand Generation", level: 5 },
            { id: "s3", name: "Lifecycle Marketing", level: 4 },
            { id: "s4", name: "SEO/SEM", level: 4 },
            { id: "s5", name: "Content Strategy", level: 4 },
            { id: "s6", name: "Attribution", level: 4 },
          ],
        },
        {
          id: "sk2",
          name: "Tools & Platforms",
          skills: [
            { id: "s7", name: "HubSpot", level: 5 },
            { id: "s8", name: "Google Analytics", level: 4 },
            { id: "s9", name: "Meta Ads", level: 5 },
            { id: "s10", name: "Customer.io", level: 4 },
            { id: "s11", name: "Marketo", level: 4 },
            { id: "s12", name: "Looker", level: 3 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "Growth-at-Home Newsletter",
          description:
            "Authored and grew a weekly B2B marketing newsletter to 38K subscribers in 18 months, with a 42% open rate and 6% CTR.",
          url: "aaliyahjohnson.com/newsletter",
          technologies: "HubSpot, Customer.io, Beehiiv",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "Google Ads Search Certification",
          issuer: "Google",
          date: "2023",
          url: "",
        },
        {
          id: "c2",
          name: "HubSpot Marketing Hub Certified",
          issuer: "HubSpot Academy",
          date: "2022",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Native" },
        { id: "l2", name: "French", level: "Intermediate" },
      ],
      courses: [
        {
          id: "co1",
          name: "Reforge: Growth Series",
          institution: "Reforge",
          date: "2022",
        },
      ],
    },
    settings: makeSettings("professional", "#9D174D"),
    intro:
      "A great marketing manager resume is a one-page case study in revenue impact. Hiring managers scan for budget owned, channels run, and the funnel metrics you moved — CAC, LTV, pipeline, conversion. Lead with dollar amounts and percentages, name the marketing stack, and show you can manage a team, not just a campaign.",
    whatToInclude: [
      "Quantify funnel impact in dollars: pipeline influenced, revenue lifted, CAC reduced, ROI multiples.",
      "List the channels you actually ran (paid search, paid social, lifecycle, SEO, content) — not every channel that exists.",
      "Name your martech stack (HubSpot, Marketo, Customer.io, GA4, Looker, Meta Ads) so reviewers can pattern-match.",
      "Mention team size and hiring — 'managed a 5-person team' signals seniority faster than any certification.",
      "Show experimentation velocity (e.g., 240+ creative tests/quarter) to prove a data-driven mindset.",
      "Include a portfolio link, newsletter, or campaign case study — marketers are evaluated on work they can show.",
    ],
    keySkills: [
      "Paid Media",
      "Demand Generation",
      "Lifecycle Marketing",
      "SEO/SEM",
      "Content Strategy",
      "Attribution",
      "HubSpot",
      "Google Analytics",
      "Meta Ads",
      "Customer.io",
      "Marketo",
      "Team Leadership",
    ],
    bulletExamples: [
      {
        weak: "Managed marketing budget",
        strong:
          "Owned a $4.2M annual demand budget, delivering $14.6M in influenced pipeline at 3.4x ROI in FY24.",
      },
      {
        weak: "Ran email campaigns",
        strong:
          "Built the lifecycle program in HubSpot and Customer.io, lifting trial-to-paid conversion 23% and cutting churn 11%.",
      },
      {
        weak: "Grew the audience",
        strong:
          "Launched the company's first podcast and newsletter, growing owned audience from 0 to 38K subscribers in 18 months.",
      },
      {
        weak: "Scaled ad spend",
        strong:
          "Scaled paid social from $200K/mo to $1.8M/mo on Meta and TikTok while holding CAC payback under 9 months.",
      },
    ],
    relatedTemplates: ["professional", "modern", "creative"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 6. Project Manager
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "project-manager-resume",
    role: "Project Manager",
    category: "Business",
    title: "Project Manager Resume Example & Template",
    metaDescription:
      "See a free project manager resume example with a live, rendered sample. Copy the PMP-friendly bullets, swap your program, and build yours with forgedCV.",
    keywords: [
      "project manager resume",
      "project manager resume example",
      "PMP resume",
      "technical project manager resume",
      "program manager resume",
      "PM resume template",
    ],
    excerpt:
      "A live, rendered project manager resume — plus the bullet patterns that prove on-time delivery, scope, and budget ownership.",
    readTime: 8,
    data: {
      personal: {
        fullName: "Rohan Kapoor",
        jobTitle: "Senior Technical Project Manager",
        email: "rohan.kapoor@email.com",
        phone: "+1 (206) 555-0155",
        location: "Seattle, WA",
        website: "",
        linkedin: "linkedin.com/in/rohankapoor-pmp",
        github: "",
        photo: "",
        summary:
          "Senior Technical Project Manager with 10+ years shipping enterprise software across fintech, healthcare, and developer tools. PMP and SAFe certified, with a track record of rescuing stalled programs and delivering $50M+ initiatives on time and within budget. Known for translating between engineering and executives, ruthless scope discipline, and mentoring PMs into leadership roles.",
      },
      experience: [
        {
          id: "exp1",
          company: "Stripe",
          position: "Senior Technical Project Manager",
          location: "Seattle, WA (Remote)",
          startDate: "May 2020",
          endDate: "Present",
          current: true,
          description:
            "Lead delivery of a $50M+ cross-border payments modernization program across 7 engineering teams, shipping on time and 4% under budget.\nRescued a stalled merchant-onboarding initiative, restructuring the roadmap and cutting time-to-go-live from 14 weeks to 6.\nBuilt the program health dashboard adopted by 23 PMs org-wide, surfacing schedule, risk, and dependency data in one view.\nMentored 4 PMs; two were promoted to senior within 18 months.",
        },
        {
          id: "exp2",
          company: "Tableau",
          position: "Technical Program Manager",
          location: "Seattle, WA",
          startDate: "Jul 2016",
          endDate: "Apr 2020",
          current: false,
          description:
            "Drove the migration of the analytics platform to a service-oriented architecture across 12 teams, delivering a 35% performance gain.\nEstablished the company's first cross-team planning cadence, reducing dependency-related delays by 48%.\nOwned quarterly executive program reviews for the 80-engineer platform org, presenting to the CTO and VP Eng.",
        },
        {
          id: "exp3",
          company: "Microsoft",
          position: "Project Manager",
          location: "Redmond, WA",
          startDate: "Aug 2013",
          endDate: "Jun 2016",
          current: false,
          description:
            "Coordinated release management for the Office 365 security team, shipping 18 feature updates with zero P1 incidents.\nIntroduced a risk register template later adopted across the larger Office org.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "University of Washington",
          degree: "MS",
          field: "Engineering Management",
          location: "Seattle, WA",
          startDate: "2011",
          endDate: "2013",
          current: false,
          description: "Capstone on scaling agile across distributed teams.",
        },
        {
          id: "edu2",
          institution: "University of Washington",
          degree: "BS",
          field: "Computer Engineering",
          location: "Seattle, WA",
          startDate: "2007",
          endDate: "2011",
          current: false,
          description: "Graduated with honors. President of the ACM student chapter.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Delivery",
          skills: [
            { id: "s1", name: "Program Management", level: 5 },
            { id: "s2", name: "Agile/Scrum", level: 5 },
            { id: "s3", name: "SAFe", level: 4 },
            { id: "s4", name: "Risk Management", level: 4 },
            { id: "s5", name: "Release Management", level: 4 },
            { id: "s6", name: "Roadmapping", level: 5 },
          ],
        },
        {
          id: "sk2",
          name: "Tools & Leadership",
          skills: [
            { id: "s7", name: "Jira", level: 5 },
            { id: "s8", name: "Confluence", level: 5 },
            { id: "s9", name: "Smartsheet", level: 4 },
            { id: "s10", name: "Stakeholder Management", level: 5 },
            { id: "s11", name: "Executive Communication", level: 5 },
            { id: "s12", name: "Dependency Management", level: 5 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "Program Health Dashboard",
          description:
            "Designed and rolled out a cross-org program health dashboard adopted by 23 PMs, surfacing schedule, risk, and dependency data in a single view.",
          url: "",
          technologies: "Jira, Confluence, Looker",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "Project Management Professional (PMP)",
          issuer: "Project Management Institute",
          date: "2017",
          url: "",
        },
        {
          id: "c2",
          name: "SAFe 5 Agilist",
          issuer: "Scaled Agile",
          date: "2021",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Native" },
        { id: "l2", name: "Hindi", level: "Fluent" },
      ],
      courses: [
        {
          id: "co1",
          name: "Stanford LEAD: Project Leadership",
          institution: "Stanford GSB",
          date: "2022",
        },
      ],
    },
    settings: makeSettings("executive", "#1C1917"),
    intro:
      "A standout project manager resume proves you ship — on time, on budget, and across teams. Hiring managers scan for program scope (dollar value, headcount, team count), delivery metrics (cycle time, on-time rate), and stakeholder fluency. Lead with the size of what you delivered, the methodology you used, and the executive audience you briefed.",
    whatToInclude: [
      "Quantify program scope: budget owned, team count, headcount, and duration — reviewers need to feel the size.",
      "Mention delivery outcomes explicitly: shipped on time, X% under budget, cycle time reduced.",
      "Name your methodology (Agile, Scrum, SAFe, Waterfall) and tooling (Jira, Confluence, Smartsheet, Asana).",
      "Highlight stakeholder management — 'briefed CTO and VP Eng quarterly' signals executive fluency.",
      "List PMP, SAFe, Scrum Master, or Prince2 certifications near the top — many PM roles filter on them.",
      "Show rescues and turnarounds — saving a stalled program is more impressive than shipping a smooth one.",
    ],
    keySkills: [
      "Program Management",
      "Agile/Scrum",
      "SAFe",
      "Risk Management",
      "Release Management",
      "Roadmapping",
      "Jira",
      "Confluence",
      "Stakeholder Management",
      "Executive Communication",
      "Dependency Management",
      "PMP",
    ],
    bulletExamples: [
      {
        weak: "Managed a big project",
        strong:
          "Led delivery of a $50M+ cross-border payments modernization program across 7 engineering teams, shipping on time and 4% under budget.",
      },
      {
        weak: "Helped fix a stalled project",
        strong:
          "Rescued a stalled merchant-onboarding initiative, restructuring the roadmap and cutting time-to-go-live from 14 weeks to 6.",
      },
      {
        weak: "Improved processes",
        strong:
          "Established the first cross-team planning cadence, reducing dependency-related delays by 48%.",
      },
      {
        weak: "Mentored team members",
        strong: "Mentored 4 PMs; two were promoted to senior within 18 months.",
      },
    ],
    relatedTemplates: ["executive", "professional", "classic"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 7. Customer Service Representative
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "customer-service-resume",
    role: "Customer Service Representative",
    category: "Business",
    title: "Customer Service Resume Example & Template",
    metaDescription:
      "See a free customer service resume example with a live, rendered sample. Copy the CSAT-friendly bullets, swap your metrics, and build yours with forgedCV.",
    keywords: [
      "customer service resume",
      "customer service representative resume",
      "CSR resume example",
      "call center resume",
      "support agent resume",
      "customer service CV",
    ],
    excerpt:
      "A live, rendered customer service resume — plus the bullet patterns that prove CSAT, handle time, and de-escalation skill.",
    readTime: 7,
    data: {
      personal: {
        fullName: "Carlos Mendoza",
        jobTitle: "Customer Service Representative",
        email: "carlos.mendoza@email.com",
        phone: "+1 (305) 555-0188",
        location: "Miami, FL",
        website: "",
        linkedin: "linkedin.com/in/carlosmendoza-cs",
        github: "",
        photo: "",
        summary:
          "Bilingual Customer Service Representative with 6+ years resolving high-volume support tickets across SaaS, fintech, and e-commerce. Consistently maintains a 97%+ CSAT and a 2:14 median first-response time. Known for de-escalating complex billing disputes, building reusable macros that cut handle time, and mentoring new agents through their first 90 days.",
      },
      experience: [
        {
          id: "exp1",
          company: "Chime",
          position: "Customer Service Representative II",
          location: "Remote",
          startDate: "Mar 2021",
          endDate: "Present",
          current: true,
          description:
            "Resolve 60-80 customer contacts per day across chat, email, and phone, sustaining a 97.4% CSAT and a 2:14 median first-response time.\nBuilt a library of 40+ macros in Zendesk now used by 120 agents, reducing average handle time by 22%.\nDe-escalate 8-10 high-risk billing disputes per week, recovering $18K/month in potential chargebacks.\nEarned 'Top 5% Performer' recognition in 5 consecutive quarters and trained 14 new hires through onboarding.",
        },
        {
          id: "exp2",
          company: "Chewy",
          position: "Customer Service Representative",
          location: "Miami, FL (Remote)",
          startDate: "Jun 2018",
          endDate: "Feb 2021",
          current: false,
          description:
            "Handled 50+ inbound contacts per day for a pet e-commerce platform, maintaining a 95% CSAT.\nCo-founded the bilingual support pod, expanding service to 2.4K Spanish-speaking customers per month.\nClosed the highest first-contact resolution rate on the team (84%) for 6 consecutive months.",
        },
        {
          id: "exp3",
          company: "Royal Caribbean",
          position: "Guest Services Associate",
          location: "Miami, FL",
          startDate: "Aug 2016",
          endDate: "May 2018",
          current: false,
          description:
            "Resolved guest complaints across a 5,500-passenger ship, escalating only 4% of cases to management.\nProcessed 200+ guest requests per voyage with a 92% satisfaction post-cruise survey score.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "Florida International University",
          degree: "AA",
          field: "Business Administration",
          location: "Miami, FL",
          startDate: "2014",
          endDate: "2016",
          current: false,
          description: "Dean's List. Coursework in customer experience and operations.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Customer Support",
          skills: [
            { id: "s1", name: "Ticketing", level: 5 },
            { id: "s2", name: "De-escalation", level: 5 },
            { id: "s3", name: "Live Chat", level: 5 },
            { id: "s4", name: "Phone Support", level: 4 },
            { id: "s5", name: "Email Support", level: 5 },
            { id: "s6", name: "Billing Disputes", level: 4 },
          ],
        },
        {
          id: "sk2",
          name: "Tools & Soft Skills",
          skills: [
            { id: "s7", name: "Zendesk", level: 5 },
            { id: "s8", name: "Intercom", level: 4 },
            { id: "s9", name: "Salesforce Service Cloud", level: 3 },
            { id: "s10", name: "Bilingual Communication", level: 5 },
            { id: "s11", name: "First-Contact Resolution", level: 5 },
            { id: "s12", name: "Mentoring", level: 4 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "Bilingual Support Pod",
          description:
            "Co-founded a Spanish-language support pod that expanded service to 2.4K Spanish-speaking customers per month and lifted regional CSAT by 6 points.",
          url: "",
          technologies: "Zendesk, Intercom",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "HDI Customer Service Representative",
          issuer: "HDI",
          date: "2020",
          url: "",
        },
        {
          id: "c2",
          name: "LinkedIn Customer Service Foundations",
          issuer: "LinkedIn Learning",
          date: "2022",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Fluent" },
        { id: "l2", name: "Spanish", level: "Native" },
      ],
      courses: [
        {
          id: "co1",
          name: "Zendesk Support Administrator",
          institution: "Zendesk Academy",
          date: "2021",
        },
      ],
    },
    settings: makeSettings("minimal", "#15803D"),
    intro:
      "A strong customer service resume proves impact with the metrics that matter to support leaders: CSAT, first-response time, average handle time, and first-contact resolution rate. Hiring managers also scan for ticketing tools (Zendesk, Intercom), bilingual ability, and evidence you can de-escalate. Quantify your volume, then back it with a quality score.",
    whatToInclude: [
      "Lead with daily volume and a quality metric — '60-80 contacts/day at 97% CSAT' is the universal CSR flex.",
      "Mention your ticketing and help desk tools (Zendesk, Intercom, Salesforce Service Cloud, Freshdesk).",
      "Quantify handle time, first-response time, and first-contact resolution rate — these are the metrics managers run.",
      "Highlight de-escalation, billing disputes, and retention — they signal seniority beyond ticket-closing.",
      "Call out bilingual or multilingual ability explicitly — it's a hard differentiator in many support orgs.",
      "Mention training, mentoring, or team-lead responsibilities even informally — they show career trajectory.",
    ],
    keySkills: [
      "Ticketing",
      "De-escalation",
      "Live Chat",
      "Phone Support",
      "Email Support",
      "Billing Disputes",
      "Zendesk",
      "Intercom",
      "Salesforce Service Cloud",
      "Bilingual Communication",
      "First-Contact Resolution",
      "Mentoring",
    ],
    bulletExamples: [
      {
        weak: "Answered customer emails",
        strong:
          "Resolved 60-80 customer contacts per day across chat, email, and phone, sustaining a 97.4% CSAT and a 2:14 median first-response time.",
      },
      {
        weak: "Wrote macros",
        strong:
          "Built a library of 40+ macros in Zendesk now used by 120 agents, reducing average handle time by 22%.",
      },
      {
        weak: "Handled angry customers",
        strong:
          "De-escalated 8-10 high-risk billing disputes per week, recovering $18K/month in potential chargebacks.",
      },
      {
        weak: "Helped Spanish speakers",
        strong:
          "Co-founded the bilingual support pod, expanding service to 2.4K Spanish-speaking customers per month.",
      },
    ],
    relatedTemplates: ["minimal", "modern", "classic"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 8. Graphic Designer
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "graphic-designer-resume",
    role: "Graphic Designer",
    category: "Creative",
    title: "Graphic Designer Resume Example & Template",
    metaDescription:
      "See a free graphic designer resume example with a live, rendered sample. Copy the portfolio-ready bullets, swap your work, and build yours with forgedCV.",
    keywords: [
      "graphic designer resume",
      "graphic designer resume example",
      "designer resume template",
      "brand designer resume",
      "creative resume",
      "visual designer resume",
    ],
    excerpt:
      "A live, rendered graphic designer resume — plus the bullet patterns that prove craft, brand impact, and awards.",
    readTime: 7,
    data: {
      personal: {
        fullName: "Yuki Tanaka",
        jobTitle: "Senior Graphic Designer",
        email: "yuki.tanaka@email.com",
        phone: "+1 (415) 555-0124",
        location: "San Francisco, CA",
        website: "yukitanaka.design",
        linkedin: "linkedin.com/in/yukitanaka",
        github: "",
        photo: "",
        summary:
          "Senior Graphic Designer with 8+ years crafting brand systems, packaging, and digital experiences for beauty, CPG, and lifestyle brands. Skilled across print and motion, with a 2024 ADC Bronze Cube and three D&AD Wood pencils. Known for typography-led systems, sustainable packaging, and translating brand strategy into shippable design ops.",
      },
      experience: [
        {
          id: "exp1",
          company: "Glossier",
          position: "Senior Graphic Designer",
          location: "San Francisco, CA (Remote)",
          startDate: "Feb 2021",
          endDate: "Present",
          current: true,
          description:
            "Lead visual design for two product launches per quarter, contributing to a 24% YoY revenue lift on launched SKUs.\nDesigned the brand's first sustainable packaging system, reducing plastic use by 38% across 14 SKUs and earning a Fast Company World Changing Ideas mention.\nBuilt the brand's Figma component library (320+ tokens), cutting design-to-production time by 31%.\nArt-directed 4 photo shoots per year and partnered with motion on 12 launch films averaging 1.4M views.",
        },
        {
          id: "exp2",
          company: "Pentagram",
          position: "Graphic Designer",
          location: "New York, NY",
          startDate: "Jul 2017",
          endDate: "Jan 2021",
          current: false,
          description:
            "Designed brand systems for 9 client engagements across cultural institutions, CPG, and tech.\nLed the visual identity for a major museum rebrand, recognized with a 2020 D&AD Wood Pencil.\nProduced print collateral at scale, managing 40+ print runs with zero critical errors.",
        },
        {
          id: "exp3",
          company: "Wolff Olins",
          position: "Junior Designer",
          location: "New York, NY",
          startDate: "Aug 2015",
          endDate: "Jun 2017",
          current: false,
          description:
            "Contributed to brand identity work for 3 Fortune 500 clients, specializing in typography and layout.\nDesigned 60+ pieces of internal marketing collateral across digital and print.",
        },
      ],
      education: [
        {
          id: "edu1",
          institution: "School of Visual Arts",
          degree: "BFA",
          field: "Graphic Design",
          location: "New York, NY",
          startDate: "2011",
          endDate: "2015",
          current: false,
          description:
            "Honors. Thesis on variable typography in editorial design.",
        },
      ],
      skillCategories: [
        {
          id: "sk1",
          name: "Design Craft",
          skills: [
            { id: "s1", name: "Brand Identity", level: 5 },
            { id: "s2", name: "Typography", level: 5 },
            { id: "s3", name: "Packaging", level: 4 },
            { id: "s4", name: "Editorial Design", level: 4 },
            { id: "s5", name: "Motion Design", level: 3 },
            { id: "s6", name: "Art Direction", level: 4 },
          ],
        },
        {
          id: "sk2",
          name: "Tools",
          skills: [
            { id: "s7", name: "Figma", level: 5 },
            { id: "s8", name: "Adobe Illustrator", level: 5 },
            { id: "s9", name: "Adobe InDesign", level: 5 },
            { id: "s10", name: "Adobe Photoshop", level: 4 },
            { id: "s11", name: "After Effects", level: 3 },
            { id: "s12", name: "Blender", level: 2 },
          ],
        },
      ],
      projects: [
        {
          id: "pr1",
          name: "Variable Type Specimen 'Hibi'",
          description:
            "Designed a self-published variable type specimen and microsite exploring the limits of variable axes; featured on Fonts In Use.",
          url: "yukitanaka.design/hibi",
          technologies: "Figma, Glyphs, Next.js",
        },
        {
          id: "pr2",
          name: "Sustainable Beauty Packaging",
          description:
            "An ongoing personal research project prototyping refillable, mono-material cosmetic packaging from post-consumer PET.",
          url: "yukitanaka.design/sustainable",
          technologies: "Figma, KeyShot",
        },
      ],
      certifications: [
        {
          id: "c1",
          name: "Adobe Certified Professional in Visual Design",
          issuer: "Adobe",
          date: "2019",
          url: "",
        },
        {
          id: "c2",
          name: "UX Design Certificate",
          issuer: "Google",
          date: "2022",
          url: "",
        },
      ],
      languages: [
        { id: "l1", name: "English", level: "Fluent" },
        { id: "l2", name: "Japanese", level: "Native" },
      ],
      courses: [
        {
          id: "co1",
          name: "Type@Cooper: Postgraduate Type Design",
          institution: "The Cooper Union",
          date: "2018",
        },
      ],
    },
    settings: makeSettings("creative", "#EA580C"),
    intro:
      "A great graphic designer resume reads like a tightly art-directed case study. Creative directors scan for craft (typography, layout, brand systems), outcomes (revenue lift, awards, production scale), and the tools you actually own. Lead with shipped work and its impact, list your stack honestly, and make sure your portfolio link is impossible to miss.",
    whatToInclude: [
      "Link your portfolio at the top — designers are hired off the portfolio, not the resume.",
      "Quantify outcomes: revenue lift on launched SKUs, packaging waste reduced, production runs managed.",
      "Mention awards (D&AD, ADC, One Show, AIGA) by name — they're the design world's currency.",
      "List your real tool stack (Figma, Illustrator, InDesign, Photoshop, After Effects, Blender) without padding.",
      "Show range across print, digital, packaging, and motion — versatility wins mid-to-senior roles.",
      "Include 1-2 personal or side projects; they signal taste and curiosity beyond client work.",
    ],
    keySkills: [
      "Brand Identity",
      "Typography",
      "Packaging",
      "Editorial Design",
      "Motion Design",
      "Art Direction",
      "Figma",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
      "After Effects",
      "Print Production",
    ],
    bulletExamples: [
      {
        weak: "Designed packaging",
        strong:
          "Designed the brand's first sustainable packaging system, reducing plastic use by 38% across 14 SKUs and earning a Fast Company mention.",
      },
      {
        weak: "Built a design system",
        strong:
          "Built the brand's Figma component library (320+ tokens), cutting design-to-production time by 31%.",
      },
      {
        weak: "Worked on launches",
        strong:
          "Led visual design for two product launches per quarter, contributing to a 24% YoY revenue lift on launched SKUs.",
      },
      {
        weak: "Did brand work",
        strong:
          "Led the visual identity for a major museum rebrand, recognized with a 2020 D&AD Wood Pencil.",
      },
    ],
    relatedTemplates: ["creative", "modern", "elegant"],
  },
];

// ──────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────

export function getExampleBySlug(slug: string): ResumeExample | undefined {
  return RESUME_EXAMPLES.find((ex) => ex.slug === slug);
}

export function getAllExamples(): ResumeExample[] {
  return RESUME_EXAMPLES;
}

/**
 * Returns up to `n` related examples — same category first, then backfilled
 * from other categories in array order. Always excludes the current slug.
 */
export function getRelatedExamples(slug: string, n = 3): ResumeExample[] {
  const current = getExampleBySlug(slug);
  if (!current) return [];

  const sameCategory = RESUME_EXAMPLES.filter(
    (ex) => ex.slug !== slug && ex.category === current.category,
  );
  const others = RESUME_EXAMPLES.filter(
    (ex) => ex.slug !== slug && ex.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, n);
}

export const EXAMPLE_CATEGORIES: string[] = Array.from(
  new Set(RESUME_EXAMPLES.map((ex) => ex.category)),
);
