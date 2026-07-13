// Blog content for CVForge.
// 10 SEO-optimized articles about careers, resumes, interviews, and job offers.
// Voice: friendly, direct, transparent — like a career mentor who genuinely wants to help.

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "tip"; title: string; text: string };

export interface BlogPost {
  slug: string;
  title: string; // SEO title, keyword-rich, natural (50-60 chars ideal)
  metaDescription: string; // 150-160 chars, compelling, includes keyword
  category: string; // e.g. "Resumes", "Interviews", "Career Change"
  keywords: string[]; // 4-7 target keywords
  excerpt: string; // 1-2 sentence hook for the blog list card
  readTime: number; // minutes
  author: string;
  date: string; // ISO date e.g. "2025-03-12"
  updated?: string;
  content: ContentBlock[]; // the full article body
}

export const BLOG_POSTS: BlogPost[] = [
  // ---------------------------------------------------------------------------
  // 1. How to write a resume
  // ---------------------------------------------------------------------------
  {
    slug: "how-to-write-a-resume",
    title: "How to Write a Resume in 2025: A Step-by-Step Guide",
    metaDescription:
      "Learn how to write a resume in 2025 with this step-by-step guide. Real examples, formatting tips, and what recruiters actually look for. Start here.",
    category: "Resumes",
    keywords: [
      "how to write a resume",
      "resume writing",
      "resume format 2025",
      "resume sections",
      "what to put on a resume",
      "resume tips",
    ],
    excerpt:
      "A no-nonsense walkthrough of every resume section, with real examples and the small choices that make recruiters actually read yours.",
    readTime: 9,
    author: "CVForge Team",
    date: "2025-01-15",
    content: [
      {
        type: "p",
        text: "Most resume advice is recycled filler. This isn't. We're going to walk through every section of a modern resume — what to include, what to cut, and the small choices that decide whether a recruiter reads past your header.",
      },
      {
        type: "p",
        text: "The goal of a resume is not to get you a job. It's to get you an interview. That reframing changes everything: you're not documenting your life, you're marketing the most relevant slice of it.",
      },
      { type: "h2", text: "Pick the right resume format" },
      {
        type: "p",
        text: "Three formats matter in 2025. Reverse-chronological (the default, and what 9 out of 10 recruiters expect), functional (skills-first — usually a red flag, avoid unless you have real gaps), and hybrid (a combo of both — great for career changers).",
      },
      {
        type: "p",
        text: "Use reverse-chronological unless you have a specific reason not to. Recruiters are trained to scan it, and ATS software parses it cleanly. We break this down more in our guide to ATS-friendly resumes.",
      },
      { type: "h2", text: "The essential resume sections (in order)" },
      { type: "h3", text: "1. Header (contact info)" },
      {
        type: "p",
        text: 'Name, phone, email, location (city and state is enough), and one link — LinkedIn or your portfolio. That\'s it. No full street address, no photo (in the US, UK, and Canada), no "References available upon request."',
      },
      {
        type: "tip",
        title: "Skip the photo",
        text: "Unless you're applying for acting or modeling work, or you're in a country where photos are standard (Germany, France, parts of Asia), leave it off. It can introduce bias and get your resume filtered out by compliance-minded ATS.",
      },
      { type: "h3", text: "2. Resume summary (not objective)" },
      {
        type: "p",
        text: 'A 2-3 line pitch at the top. Three sentences max. The formula: who you are + your strongest credential + what you\'re targeting. Skip the "objective statement" — those died in 2010.',
      },
      {
        type: "p",
        text: 'Weak: "Seeking a challenging role in a growing company where I can use my skills."',
      },
      {
        type: "p",
        text: 'Strong: "Senior product designer with 8 years shipping B2B SaaS. Led design on three products that crossed $10M ARR. Looking to lead design at a Series B+ startup."',
      },
      {
        type: "tip",
        title: "Want more?",
        text: "We compiled 45+ resume summary examples broken down by career stage — entry-level, mid-career, executive, and career changer.",
      },
      { type: "h3", text: "3. Work experience" },
      {
        type: "p",
        text: "This is the heart of your resume. For each role: job title, company, dates (month and year), and 3-6 bullet points focused on impact, not duties.",
      },
      {
        type: "p",
        text: "Use the PAR formula: Problem, Action, Result. Or STAR: Situation, Task, Action, Result. The point is to show what you did and what changed because of it.",
      },
      {
        type: "p",
        text: 'Weak: "Responsible for managing the email marketing calendar."',
      },
      {
        type: "p",
        text: 'Strong: "Owned the email marketing calendar for a 2M-subscriber list, increasing click-through rate from 2.1% to 3.8% over six months."',
      },
      {
        type: "p",
        text: "Start every bullet with an action verb. Led, Shipped, Grew, Cut, Built, Designed, Launched, Automated, Negotiated, Hired. Quantify wherever you can — numbers are proof.",
      },
      { type: "h3", text: "4. Education" },
      {
        type: "p",
        text: "Degree, school, graduation year. If you're more than 3-5 years out of school, keep this short. If you're a recent grad, you can add GPA (if 3.5+), honors, relevant coursework, and projects.",
      },
      { type: "h3", text: "5. Skills" },
      {
        type: "p",
        text: 'A scannable list. Group by category if it makes sense (Tools, Languages, Frameworks). Be honest about proficiency — claiming "expert" in something you can\'t answer a basic question about will sink an interview fast.',
      },
      { type: "h2", text: "Optional sections that actually help" },
      {
        type: "ul",
        items: [
          "Projects — especially for engineers, designers, and recent grads",
          "Certifications — only if relevant to the role (PMP, AWS, CPA, etc.)",
          "Publications or speaking — for academic, research, or thought-leadership roles",
          "Volunteer work — if it shows transferable skills or fills a gap",
        ],
      },
      { type: "h2", text: "How long should your resume be?" },
      {
        type: "p",
        text: "One page if you have under 8 years of experience. Two pages if you have more. Three pages only if you're in academia, research, or have a genuinely long senior career. Anything beyond that is self-sabotage.",
      },
      { type: "h2", text: "Formatting rules that matter" },
      {
        type: "ul",
        items: [
          "Margins: 0.5–1 inch",
          "Font size: 10–12pt body, 14–16pt for your name",
          "Font: anything clean and readable (Inter, Calibri, Georgia, Garamond). Avoid Comic Sans, Papyrus, and anything decorative.",
          "Save as PDF. Always. Word docs render inconsistently across machines.",
        ],
      },
      {
        type: "tip",
        title: "Test for ATS compatibility",
        text: "Before you send, copy your resume text into a plain text file. If it's still readable and the sections are intact, you're good. If it's garbled, an ATS will struggle too.",
      },
      { type: "h2", text: "Tailor for every application" },
      {
        type: "p",
        text: "A generic resume sent to 50 jobs will get fewer interviews than a tailored resume sent to 10. Tailoring isn't rewriting from scratch — it's reordering and rephrasing so the most relevant evidence is impossible to miss.",
      },
      {
        type: "p",
        text: "Three things to change per application: the summary (mention the target role), the bullets (lead with what's most relevant to this job), and the skills (mirror the job description's vocabulary). Twenty minutes per application is plenty.",
      },
      {
        type: "tip",
        title: "Keep a master resume",
        text: "Maintain one comprehensive master resume with everything you've ever done. For each application, duplicate it, then cut and reorder — don't invent from scratch every time. This keeps your base facts consistent and your tailoring fast.",
      },
      { type: "h2", text: "The final pass" },
      {
        type: "p",
        text: "Read it out loud. Every bullet should make sense spoken. If you find yourself tripping over a sentence, rewrite it. Then run a spell check, send it to one trusted person for review, and submit.",
      },
      {
        type: "p",
        text: "That's it. A good resume isn't magic — it's clear writing, real impact, and the discipline to cut anything that doesn't earn its place. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. ATS-friendly resume
  // ---------------------------------------------------------------------------
  {
    slug: "ats-friendly-resume",
    title: "ATS-Friendly Resumes: What They Are and How to Beat the Bots",
    metaDescription:
      "What makes a resume ATS-friendly in 2025? Real formatting rules, what to avoid, and how to write for bots without boring the human recruiters who read next.",
    category: "Resumes",
    keywords: [
      "ats-friendly resume",
      "applicant tracking system",
      "resume parsing",
      "ats resume format",
      "ats keywords",
      "resume screening software",
    ],
    excerpt:
      "Roughly 75% of resumes never reach human eyes. Here's how ATS software actually works — and how to write a resume that survives it.",
    readTime: 8,
    author: "CVForge Team",
    date: "2025-01-22",
    content: [
      {
        type: "p",
        text: "Here's a number that should make you uncomfortable: an estimated 75% of resumes are filtered out before a human ever sees them. The gatekeeper is an Applicant Tracking System — software that parses, scores, and ranks resumes based on how well they match a job description.",
      },
      {
        type: "p",
        text: '"ATS-friendly" doesn\'t mean writing for robots. It means writing a resume that\'s clean enough for software to read accurately, without sacrificing the human readability that gets you hired. You can do both.',
      },
      { type: "h2", text: "What an ATS actually does" },
      {
        type: "p",
        text: "When you submit a resume, the ATS does three things: extracts your text into structured data (name, email, jobs, dates, skills), matches that data against keywords in the job description, and assigns you a match score. Resumes below the threshold get auto-rejected.",
      },
      {
        type: "p",
        text: "The good news: most ATS failures are self-inflicted. They come from formatting choices that break parsing, not from the content itself.",
      },
      { type: "h2", text: "ATS-friendly formatting rules" },
      { type: "h3", text: "Use standard section headings" },
      {
        type: "p",
        text: 'ATS software looks for predictable labels: "Work Experience," "Education," "Skills," "Experience." Get creative with "Where I\'ve Worked" or "My Journey" and the parser may not recognize the section at all.',
      },
      { type: "h3", text: "Avoid tables, columns, and text boxes" },
      {
        type: "p",
        text: "Multi-column layouts look great to humans but confuse parsers, which read left-to-right, top-to-bottom. A two-column resume may be read as a single jumbled column. The same goes for tables and text boxes — the parser can't tell what belongs where.",
      },
      {
        type: "tip",
        title: "The tradeoff",
        text: "Some templates balance design with ATS safety by using simple two-column CSS layouts rather than tables. CVForge's templates are built this way. If you're not sure, run a plain-text test (more on that below).",
      },
      { type: "h3", text: "Stick to standard fonts" },
      {
        type: "p",
        text: "Use Calibri, Arial, Georgia, Times New Roman, or Inter. Custom fonts may not embed correctly and can render as garbage characters to the parser.",
      },
      { type: "h3", text: "No images, icons, or graphics for key info" },
      {
        type: "p",
        text: "Parsers can't read text inside images. If your contact info lives inside a graphic header, the ATS may not even know who you are. Icons next to skills or contact info are fine for humans but invisible to bots — make sure the text itself is real text.",
      },
      { type: "h3", text: "Save as PDF (or DOCX)" },
      {
        type: "p",
        text: "PDF is the safest universal format. Word docs work too but can shift layout across machines. Never submit as JPG, PNG, or a Google Doc link.",
      },
      { type: "h2", text: "The keyword problem" },
      {
        type: "p",
        text: 'ATS match scoring is keyword-driven. If the job description says "project management" and your resume says "led projects," you may miss the match even though you\'re describing the same thing.',
      },
      { type: "h3", text: "How to use keywords naturally" },
      {
        type: "ol",
        items: [
          "Print the job description. Highlight every required skill, tool, and qualification.",
          "For each one, find a place in your resume where you've used it. If you haven't, don't fake it — but do mirror the exact phrasing where you can.",
          "Use the recruiter's vocabulary. If they say 'client success,' don't write 'customer success' on your resume.",
          "Put keywords in context, not in a stuffed list. 'Implemented Jira workflows for a 30-person engineering team' beats 'Jira, Jira, Jira.'",
        ],
      },
      {
        type: "tip",
        title: "Don't keyword-stuff",
        text: "Old-school ATS gamed this with invisible white-text keyword lists. Modern systems detect it and flag you as spam. Worse, a human who does see your resume will spot it instantly.",
      },
      { type: "h3", text: "A worked keyword example" },
      {
        type: "p",
        text: 'Job description says: "Looking for someone to lead cross-functional initiatives and drive stakeholder alignment across product and engineering."',
      },
      {
        type: "p",
        text: 'Weak resume bullet: "Worked with different teams on various projects."',
      },
      {
        type: "p",
        text: 'Strong resume bullet: "Led cross-functional initiatives across product and engineering, driving stakeholder alignment on a roadmap that shipped 3 weeks early."',
      },
      {
        type: "p",
        text: "Same experience. The second version mirrors the job description's language and proves you can do the work. That's the bar.",
      },
      { type: "h2", text: "The plain-text test" },
      {
        type: "p",
        text: "Before you submit, copy your entire resume and paste it into Notepad or a plain-text editor. If the text reads cleanly — sections in order, no garbled characters, no missing content — you're ATS-ready. If it's a mess, you've got a formatting problem to fix.",
      },
      { type: "h2", text: "What ATS can't do" },
      {
        type: "p",
        text: "An ATS can't tell if you're a good fit for the team. It can't read between the lines. It can't appreciate your soft skills or your potential. It just pattern-matches. So your job is to clear the ATS bar cleanly, then write for the human on the other side.",
      },
      {
        type: "p",
        text: "The best ATS-friendly resumes are the same resumes a human would enjoy reading: well-organized, specific, scannable, and honest. No gimmicks required. For the broader resume writing process, our step-by-step guide walks through every section. 🚀",
      },
      { type: "h2", text: "How to tell if a company uses an ATS" },
      {
        type: "p",
        text: "Most mid-size and large companies do. If you apply through a portal that asks you to create an account, upload a resume, and fill out structured fields — that's an ATS. Smaller companies and early-stage startups may review applications by hand, but assume ATS unless you know otherwise.",
      },
      {
        type: "p",
        text: "Even when a human reviews first, a clean, well-structured resume still wins. The same formatting that helps an ATS also helps a tired recruiter scanning 200 applications on a Tuesday afternoon.",
      },
      { type: "h2", text: "Common ATS myths, busted" },
      {
        type: "ul",
        items: [
          "Myth: ATS reads resumes left to right like a human. Reality: it extracts data top to bottom, so order matters more than alignment.",
          "Myth: You need a separate ATS version of your resume. Reality: one clean, well-structured resume works for both bots and humans.",
          "Myth: Fancy templates get you rejected. Reality: fancy templates WITH TABLES get you rejected. Clean two-column layouts are fine.",
          "Myth: ATS scores are public. Reality: most candidates never see their score. Focus on the inputs you control.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Resume summary examples
  // ---------------------------------------------------------------------------
  {
    slug: "resume-summary-examples",
    title: "45+ Resume Summary Examples for Every Career Stage",
    metaDescription:
      "Real resume summary examples for entry-level, mid-career, executive, and career changer resumes — plus the exact formula behind every good one.",
    category: "Resumes",
    keywords: [
      "resume summary examples",
      "resume summary",
      "professional summary",
      "resume objective",
      "summary for resume",
      "resume profile",
    ],
    excerpt:
      "Your summary is the first thing recruiters read. Here are 45+ real examples by career stage, plus the formula behind every one that works.",
    readTime: 9,
    author: "CVForge Team",
    date: "2025-02-03",
    content: [
      {
        type: "p",
        text: "Your resume summary is the most-read real estate on your resume. Recruiters spend an average of 7 seconds on a first pass — and your summary is what they scan to decide whether to keep reading.",
      },
      {
        type: "p",
        text: "Here's the formula we'll use throughout: [Who you are] + [Strongest credential or result] + [What you're targeting]. Three lines. No fluff. No \"team player\" or \"results-driven.\"",
      },
      {
        type: "p",
        text: "Below are 45+ resume summary examples broken down by career stage. Borrow the structure, swap in your specifics.",
      },
      { type: "h2", text: "Entry-level resume summary examples" },
      {
        type: "p",
        text: "You don't have years of experience, so lead with what you do have: degree, internships, projects, and concrete skills.",
      },
      {
        type: "ul",
        items: [
          "Recent computer science grad (BS, Georgia Tech) with three internships in full-stack development. Built and shipped a React-based scheduling app used by 200+ students. Seeking a junior frontend role.",
          "Marketing graduate with hands-on experience running paid social campaigns for a campus nonprofit (50K followers, 4% CTR). Looking for an entry-level growth marketing role.",
          "BSN-prepared registered nurse with clinical rotations in med-surg, ICU, and ER. Comfortable with high-acuity patients and Epic EHR. Seeking a new-grad residency in critical care.",
          "Recent accounting graduate (CPA candidate) with internship experience in accounts payable and reconciliation at a mid-size firm. Proficient in QuickBooks, Excel, and NetSuite.",
          "Entry-level UX researcher with a Human-Computer Interaction master's and two published case studies on accessibility. Looking for a junior research role at a product-led company.",
        ],
      },
      { type: "h2", text: "Mid-career resume summary examples" },
      {
        type: "p",
        text: "Lead with your title, years of experience, and one signature result.",
      },
      {
        type: "ul",
        items: [
          "Senior product manager with 7 years shipping B2B SaaS products. Led the launch of a workflow tool that grew from $0 to $4M ARR in 18 months. Looking for a senior PM role at a Series B startup.",
          "Digital marketing manager with 6 years across DTC and B2B. Grew organic traffic 280% at last role through SEO and content strategy. Seeking a Head of Growth position.",
          "Full-stack engineer (TypeScript, Node, React) with 8 years building fintech products. Architected a payments platform processing $50M+ annually. Open to staff engineer roles.",
          "Senior accountant (CPA) with 9 years in corporate finance at Fortune 500 companies. Led the implementation of a new close process that cut monthly close from 12 to 6 days.",
          "RN with 10 years in labor and delivery, including 3 years as charge nurse. Mentored 15+ new grads. Seeking a clinical educator role.",
        ],
      },
      { type: "h2", text: "Executive resume summary examples" },
      {
        type: "p",
        text: "Executives should lead with scope: team size, budget, revenue, headcount.",
      },
      {
        type: "ul",
        items: [
          "VP of Engineering with 15 years scaling engineering orgs from 20 to 200+ engineers across three startups. Built and led teams that shipped products used by 10M+ users. Seeking a CTO role.",
          "Chief Marketing Officer with 12 years driving growth for B2B SaaS companies. Grew a Series C startup from $20M to $80M ARR in three years. Looking for a CMO role at a growth-stage company.",
          "Chief Financial Officer (CPA, MBA) with 20 years in healthcare finance. Led three M&A transactions totaling $400M. Seeking a CFO role at a PE-backed healthcare organization.",
          "Chief Operating Officer with 18 years in retail operations. Oversaw 350 stores and $1.2B in revenue. Seeking a COO role at a multi-location retail brand.",
        ],
      },
      { type: "h2", text: "Career changer resume summary examples" },
      {
        type: "p",
        text: "When you're changing careers, your summary has to bridge the gap. Lead with transferable skills and your target role.",
      },
      {
        type: "ul",
        items: [
          "Former high school teacher (8 years) transitioning into instructional design. Built curriculum for 4 courses used by 1,200 students. Certified in Articulate Storyline and Adobe Captivate.",
          "Operations manager pivoting into product management. 10 years leading cross-functional teams at a logistics company. Completed PM bootcamp and shipped an internal tool adopted company-wide.",
          "Journalist transitioning into content marketing. 6 years writing for national publications with 5M+ monthly readers. Seeking a senior content strategist role.",
        ],
      },
      { type: "h2", text: "Industry-specific summary examples" },
      {
        type: "p",
        text: "Use these as starting points. Adapt the numbers and tools to your real experience.",
      },
      {
        type: "ul",
        items: [
          "Sales: Enterprise account executive with 6 years closing six-figure deals in SaaS. Hit 130% of quota three years running. Seeking a senior AE role.",
          "Design: Senior product designer with 9 years shipping consumer apps. Led design systems at two startups. Open to staff or lead design roles.",
          "Data: Data scientist (Python, SQL, PyTorch) with 5 years building ML models for fraud detection. Reduced false-positive rate by 23%. Seeking a senior DS role.",
          "HR: Senior HR business partner with 11 years supporting engineering orgs. Led a company-wide compensation refresh that reduced attrition by 15%.",
          "Customer success: Customer success manager with 7 years in B2B SaaS. Managed $12M in ARR with 98% gross retention. Seeking a senior CSM role.",
        ],
      },
      { type: "h2", text: "Summary vs objective: the difference" },
      {
        type: "p",
        text: 'An objective says what you want. A summary says what you offer. Objectives ("Seeking a challenging role in…") are outdated because they make the recruiter do the work of figuring out why they should care.',
      },
      {
        type: "p",
        text: "A summary flips that: it tells the recruiter, in three seconds, what you're great at and what you're looking for. It respects their time and positions you as someone who understands the hiring conversation.",
      },
      {
        type: "tip",
        title: "One exception",
        text: "If you're a complete career changer with no relevant experience in the new field, a hybrid can work: state your transferable value, then name the target role explicitly. The career-changer examples above show this in practice.",
      },
      { type: "h2", text: "How to write your own" },
      {
        type: "p",
        text: "Steal the formula. Fill in your real numbers. Cut anything that sounds like it could be on anyone else's resume.",
      },
      {
        type: "ol",
        items: [
          "Write down your job title and years of experience.",
          "Add your single most impressive result (with a number).",
          "Add one relevant skill, tool, or credential.",
          "State what role you're targeting.",
          "Cut to three lines.",
        ],
      },
      {
        type: "tip",
        title: "The test",
        text: "Read your summary out loud. If it sounds like every other resume you've ever read, rewrite it. Specifics are what make it yours.",
      },
      {
        type: "p",
        text: "For more on where the summary fits in the full resume, our step-by-step resume guide breaks down every section. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Cover letter guide
  // ---------------------------------------------------------------------------
  {
    slug: "cover-letter-guide",
    title: "How to Write a Cover Letter That Actually Gets Read",
    metaDescription:
      "A practical guide to writing cover letters recruiters actually read. Structure, opening lines, what to never include, and real examples you can borrow.",
    category: "Cover Letters",
    keywords: [
      "how to write a cover letter",
      "cover letter examples",
      "cover letter format",
      "cover letter tips",
      "cover letter opening",
      "cover letter template",
    ],
    excerpt:
      "Most cover letters are skimmed in 10 seconds — or not read at all. Here's how to write one that earns the full read.",
    readTime: 8,
    author: "CVForge Team",
    date: "2025-02-10",
    content: [
      {
        type: "p",
        text: 'Let\'s be honest: most cover letters are terrible. They restate the resume in paragraph form, open with "To Whom It May Concern," and add nothing. No wonder many recruiters skip them entirely.',
      },
      {
        type: "p",
        text: "But a great cover letter still wins interviews — especially at smaller companies, startups, and roles where writing matters. The trick is to add information your resume can't.",
      },
      { type: "h2", text: "What a cover letter should do" },
      {
        type: "p",
        text: "A cover letter has exactly three jobs: explain why you want this specific job, show you understand the company's problem, and demonstrate you can help solve it. That's it. If a sentence doesn't do one of those three things, cut it.",
      },
      { type: "h2", text: "The cover letter structure" },
      { type: "h3", text: "Opening paragraph (2-3 sentences)" },
      {
        type: "p",
        text: 'Skip the "I am writing to apply for…" opener. Everyone writes that. Instead, lead with something specific that shows you\'ve done your homework.',
      },
      {
        type: "p",
        text: 'Weak: "I am writing to apply for the Product Manager position at Acme Corp. I believe my skills make me a strong fit."',
      },
      {
        type: "p",
        text: 'Strong: "I\'ve been following Acme\'s pivot into developer tools since your Series B announcement, and the PM role on the API platform caught my eye. I\'ve spent the last four years building exactly this kind of product at a comparable stage."',
      },
      { type: "h3", text: "Middle paragraph(s) — the proof" },
      {
        type: "p",
        text: "This is where you connect your experience to their problem. Pick one or two things from the job description and show — with specifics — how you've solved that problem before.",
      },
      {
        type: "p",
        text: "Don't list every job you've had. Pick the one or two most relevant wins and tell the story behind them. Numbers help.",
      },
      {
        type: "p",
        text: 'Example: "In my current role, I owned the launch of a developer-facing dashboard that grew weekly active users from 800 to 4,200 in six months. I see Acme is early in its API platform journey, and I\'d love to bring that playbook to your team."',
      },
      { type: "h3", text: "Closing paragraph (2 sentences)" },
      {
        type: "p",
        text: "Restate your interest, name the role, and make the ask. Don't apologize for taking their time.",
      },
      {
        type: "p",
        text: 'Example: "I\'d love to talk through how I could help scale Acme\'s API platform. Thanks for considering my application — I\'d welcome the chance to interview."',
      },
      { type: "h2", text: "Cover letter dos and don'ts" },
      { type: "h3", text: "Do" },
      {
        type: "ul",
        items: [
          "Address a real person by name (LinkedIn makes this easy)",
          "Mirror the company's language — if they say 'client,' say 'client'",
          "Keep it under 350 words",
          "Match your resume's font and formatting",
          "Proofread three times, then have a friend proofread once more",
        ],
      },
      { type: "h3", text: "Don't" },
      {
        type: "ul",
        items: [
          "Use 'To Whom It May Concern' — find a name or use 'Hi [Team]'",
          "Repeat your resume bullets in sentence form",
          "Apologize for your experience ('I know I don't have all the qualifications…')",
          "Talk about what the company can do for you — talk about what you can do for them",
          "Use a generic template you found online without customizing",
        ],
      },
      {
        type: "tip",
        title: "The 10-second test",
        text: "Skim your letter in 10 seconds. If a stranger couldn't tell you what job you're applying for and why, rewrite it.",
      },
      { type: "h2", text: "When you don't need a cover letter" },
      {
        type: "p",
        text: "Not every application needs one. Skip it if the job posting explicitly says not to send one, if you're applying through a portal that makes it optional and you're short on time, or if you genuinely have nothing specific to say. A weak cover letter hurts more than no cover letter.",
      },
      { type: "h2", text: "What if you can't find a name?" },
      {
        type: "p",
        text: 'Try LinkedIn first — search for "Hiring Manager [Company]" or "[Company] [role you\'re applying for]." If you genuinely can\'t find a name, "Hi [Team Name] team" or "Dear [Company] hiring team" is fine. Skip "To Whom It May Concern" — it screams 1995.',
      },
      { type: "h2", text: "Cover letters for career changers" },
      {
        type: "p",
        text: "If you're changing careers, your cover letter does work your resume can't. The resume shows your past; the cover letter explains why your past is relevant to a different future.",
      },
      {
        type: "p",
        text: "Lead with the bridge. Name the role you want, acknowledge the pivot honestly, and make the case for why your background is an asset — not a gap to apologize for. One or two specific stories from your previous career that map to the new role will do more than a list of claimed skills.",
      },
      {
        type: "p",
        text: 'Example opener: "After eight years in classroom education, I\'m transitioning into instructional design — and the curriculum work I\'ve done for 1,200 students maps directly to the kind of learning experiences Northwind builds."',
      },
      { type: "h2", text: "A short example cover letter" },
      {
        type: "quote",
        text: "Hi Sarah — I came across the Senior Designer role at Northwind after reading your team's recent post on design systems. I've spent the last five years building and maintaining design systems at two startups, most recently shipping a component library adopted by 40+ engineers. I'd love to bring that experience to Northwind and help your design and engineering teams move faster together. Would love to chat — thanks for considering me.",
      },
      {
        type: "p",
        text: 'Notice what\'s not there: no résumé recap, no "I am writing to apply," no apologies. Just a real, specific, short pitch.',
      },
      { type: "h2", text: "How to sign off" },
      {
        type: "p",
        text: 'Keep it simple and warm. "Best," "Thanks," "Looking forward to hearing from you," and "Warmly," all work. Avoid "Sincerely" (too stiff for most modern roles) and "Cheers" (too casual for most corporate roles).',
      },
      {
        type: "p",
        text: "Your sign-off is the last thing they read. Match the tone of the company — a startup cover letter can be warmer and looser; a law firm cover letter should be more formal.",
      },
      { type: "h2", text: "The one thing that matters most" },
      {
        type: "p",
        text: "Specificity. A specific company, a specific problem, a specific result you've shipped. Everything else is filler. For more on the resume side of this, our resume summary examples break down how to write a tight pitch in three lines. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Job interview preparation
  // ---------------------------------------------------------------------------
  {
    slug: "job-interview-preparation",
    title: "Job Interview Preparation: The Complete Checklist",
    metaDescription:
      "Everything you need to prepare for a job interview — research, STAR method answers, questions to ask, and day-of logistics. With real examples.",
    category: "Interviews",
    keywords: [
      "job interview preparation",
      "interview tips",
      "star method interview",
      "how to prepare for an interview",
      "interview questions",
      "behavioral interview",
    ],
    excerpt:
      "The candidates who get offers aren't always the most qualified — they're the most prepared. Here's the complete checklist.",
    readTime: 9,
    author: "CVForge Team",
    date: "2025-02-18",
    content: [
      {
        type: "p",
        text: "Most interview failures happen before the interview starts. The candidate who winged it sounds vague. The candidate who prepared sounds specific, confident, and like someone you'd want on the team.",
      },
      {
        type: "p",
        text: "This is the full checklist we recommend running through before any interview. It works for first rounds and finals alike.",
      },
      { type: "h2", text: "1. Research the company (1-2 hours)" },
      {
        type: "p",
        text: "Don't just skim the website. Read the company's most recent blog posts, press releases, and LinkedIn activity. Look up the team on LinkedIn. Find their competitors. Understand the business model — how do they make money?",
      },
      {
        type: "ul",
        items: [
          "What does the company sell, and to whom?",
          "What's their funding stage (if startup) or recent financial news (if public)?",
          "Who are their main competitors, and how does this company differentiate?",
          "What's the team like — who would you be working with?",
          "What problem is this role solving?",
        ],
      },
      {
        type: "tip",
        title: "The bonus move",
        text: "Find one specific thing the company has shipped recently — a product update, a blog post, a press mention — and reference it naturally in the interview. It signals you've done real homework.",
      },
      { type: "h2", text: "2. Prepare STAR-method answers" },
      {
        type: "p",
        text: 'Behavioral questions ("tell me about a time when…") are best answered with the STAR method: Situation, Task, Action, Result. Prepare 5-7 stories you can flex to different questions.',
      },
      { type: "p", text: "A good STAR story:" },
      {
        type: "ul",
        items: [
          "Situation: 1-2 sentences of context",
          "Task: what you specifically needed to do",
          "Action: what you did (focus on your role, not the team's)",
          "Result: the outcome, with numbers if possible",
        ],
      },
      {
        type: "p",
        text: 'Example: "Situation: Our support team was drowning in tickets after a pricing change. Task: I needed to reduce ticket volume without hiring. Action: I built a self-serve FAQ from the top 20 ticket topics and embedded it in the billing flow. Result: Ticket volume dropped 35% in two months, and CSAT went up 6 points."',
      },
      { type: "h3", text: "Questions to prepare stories for" },
      {
        type: "ul",
        items: [
          "Tell me about a time you led a project.",
          "Describe a conflict with a coworker and how you resolved it.",
          "Tell me about a failure. What did you learn?",
          "Describe a time you had to influence someone without authority.",
          "Tell me about a time you shipped something under a tight deadline.",
        ],
      },
      { type: "h2", text: "3. Prepare for the most common questions" },
      {
        type: "p",
        text: "Some questions show up in almost every interview. Have a clear, honest answer ready.",
      },
      {
        type: "ul",
        items: [
          "Tell me about yourself. (90-second version: present → past → future)",
          "Why this company? (Specific reasons, not 'it seems like a great opportunity')",
          "Why this role? (Tie it to your career trajectory)",
          "What are your strengths? (Pick 2-3 with evidence)",
          "What's your biggest weakness? (Pick a real one and what you're doing about it)",
          "Where do you see yourself in 5 years? (Honest but aligned with the role)",
          "Why are you leaving your current job? (Never badmouth — focus on what you're moving toward)",
        ],
      },
      { type: "h2", text: "4. Prepare questions to ask them" },
      {
        type: "p",
        text: '"Do you have any questions for us?" is not a formality. It\'s a test. Have 5-7 ready; you\'ll usually get to ask 2-3.',
      },
      {
        type: "ul",
        items: [
          "What does success look like in this role at 30 / 90 / 180 days?",
          "What's the biggest challenge the team is facing right now?",
          "How does the team make decisions — consensus, lead, or top-down?",
          "What's the trajectory of the person who previously held this role?",
          "What's something that would surprise a new hire about the culture?",
          "How is performance measured, and how often?",
        ],
      },
      {
        type: "tip",
        title: "Avoid asking",
        text: "Salary, benefits, vacation, or remote-work policy in the first round. Save those for after they've made an offer — or for when they bring it up. We cover the salary conversation in our guide to negotiating your salary.",
      },
      { type: "h2", text: "5. Day-of logistics" },
      {
        type: "p",
        text: "Eliminate every variable you can. The night before, lay out what you'll wear, test your tech (if video), print copies of your resume (if in person), and confirm the time, format, and who you're meeting.",
      },
      {
        type: "ul",
        items: [
          "Video interview: test your camera, mic, and lighting 30 minutes before. Sit somewhere quiet with a neutral background.",
          "In-person: arrive 10-15 minutes early. Bring 2-3 printed copies of your resume.",
          "Phone interview: stand up and pace — it changes your vocal energy.",
          "Hybrid: assume it's video unless told otherwise.",
        ],
      },
      { type: "h2", text: "6. During the interview" },
      {
        type: "p",
        text: "Listen fully before answering. It's okay to pause for 2-3 seconds before responding. If you don't know an answer, say so — then explain how you'd figure it out. Bluffing is louder than you think.",
      },
      {
        type: "p",
        text: "At the end, ask your best question. Thank them for their time. That's it.",
      },
      { type: "h2", text: "Common interview formats" },
      {
        type: "p",
        text: "Different formats reward different prep. Know which one you're walking into.",
      },
      {
        type: "ul",
        items: [
          "Phone screen (15-30 min): recruiter checks basics. Have your summary, salary expectations, and 'why this company' answer ready.",
          "Video interview (45-60 min): the most common first-round format. Test your tech, sit somewhere quiet, look at the camera not the screen.",
          "Panel interview: multiple interviewers, often 3-5. Note each person's name and role; address answers to whoever asked, but make eye contact with everyone.",
          "Case or technical interview: structured problem-solving. Talk through your thinking out loud — the process matters more than the final answer.",
          "Take-home assignment: budget 2-4 hours, not 12. A clean, well-documented submission beats an over-engineered one.",
        ],
      },
      { type: "h2", text: "7. The thank-you note" },
      {
        type: "p",
        text: "Send a short, specific thank-you email within 24 hours. Reference one thing you talked about. Keep it to three sentences.",
      },
      {
        type: "p",
        text: 'Example: "Hi Sarah — thanks for the time today. The conversation about how your team is restructuring the onboarding flow got me thinking, and I\'d love to dig in further. Looking forward to next steps."',
      },
      {
        type: "p",
        text: "Preparation is the unfair advantage most candidates skip. Do the work, and you'll sound like the candidate who actually wants the job. 🚀",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. Career change at 30
  // ---------------------------------------------------------------------------
  {
    slug: "career-change-at-30",
    title: "Changing Careers at 30 (or 40, or 50): A Realistic Guide",
    metaDescription:
      "Thinking about a career change at 30, 40, or 50? A realistic, practical guide to transferable skills, finances, and the resume reframe that actually works.",
    category: "Career Change",
    keywords: [
      "career change",
      "changing careers at 30",
      "career transition",
      "transferable skills",
      "mid-career change",
      "career pivot",
    ],
    excerpt:
      "Career changes are messy, scary, and totally doable. Here's the realistic playbook — including the parts most guides skip.",
    readTime: 9,
    author: "CVForge Team",
    date: "2025-02-25",
    content: [
      {
        type: "p",
        text: 'The "career change at 30" panic is real, and so is the version at 40 and 50. You\'ve built a life around one path, and now you\'re wondering if it\'s too late to start another.',
      },
      {
        type: "p",
        text: 'It\'s not. People reinvent their careers at every age. But the clean Instagram version — "I quit my job, took a bootcamp, and now I\'m a designer!" — hides the hard parts. Here\'s the realistic playbook.',
      },
      { type: "h2", text: "First, sanity-check the change" },
      {
        type: "p",
        text: 'A lot of "I hate my career" feelings are actually "I hate my boss" or "I hate my commute" or "I\'m burnt out." Before you blow up your career, get specific about what\'s actually wrong.',
      },
      {
        type: "ul",
        items: [
          "Is it the work itself, or the environment?",
          "Is it the industry, or this specific company?",
          "Is it the role, or the people you work with?",
          "What would you miss about your current path?",
        ],
      },
      {
        type: "p",
        text: "Sometimes the answer is a lateral move inside your field. Sometimes it's a different company. Sometimes it really is a full career change. Get honest about which one you need.",
      },
      { type: "h2", text: "Map your transferable skills" },
      {
        type: "p",
        text: "Career changers underestimate their transferable skills. The skills that look boring in your current role — managing stakeholders, leading projects, analyzing data, writing clearly — are gold in almost every other field.",
      },
      { type: "p", text: "Make a list. Group them into:" },
      {
        type: "ul",
        items: [
          "Hard skills (tools, methods, technical knowledge)",
          "Soft skills (communication, leadership, problem-solving)",
          "Domain knowledge (industry expertise, networks, context)",
        ],
      },
      {
        type: "p",
        text: "Then map them to your target role. A teacher pivoting to instructional design brings curriculum design, assessment, and stakeholder management. A lawyer moving into product brings analytical thinking, stakeholder negotiation, and the ability to absorb complex information fast.",
      },
      { type: "h2", text: "Mind the financial runway" },
      {
        type: "p",
        text: "This is the part most career-change guides skip. Switching careers usually means a temporary income dip — sometimes 6 months, sometimes 2 years. Plan for it.",
      },
      {
        type: "ul",
        items: [
          "Save 6-12 months of expenses before you make the jump.",
          "Research realistic starting salaries in your target field. They may be lower than what you earn now.",
          "Talk to people who've made the same change — ask them about the financial reality, not just the highlight reel.",
          "Consider keeping your current job while you build skills on the side. Most career changes start as side projects.",
        ],
      },
      {
        type: "tip",
        title: "The slow path is often the fast path",
        text: 'The fastest career changes usually started 1-2 years before the person "officially" switched. They built skills, network, and a portfolio quietly — then made the jump with momentum.',
      },
      { type: "h2", text: "Build the bridge" },
      {
        type: "p",
        text: "Don't quit and figure it out. Build the bridge first. That means:",
      },
      {
        type: "ol",
        items: [
          "Take one or two real courses or certifications in your target field. Not 20 — one or two, finished.",
          "Do 2-3 projects (paid or unpaid) that prove you can do the work. Volunteering, freelance, or a side project all count.",
          "Network into the new field. Attend meetups, join Slack communities, do 10 informational interviews.",
          "Rewrite your resume to lead with transferable skills and new evidence. We have examples for career changers in our resume summary examples.",
        ],
      },
      { type: "h2", text: "The resume reframe" },
      {
        type: "p",
        text: "Your old resume tells the story of your old career. Your new resume needs to tell the story of where you're going. Three changes matter most:",
      },
      {
        type: "p",
        text: "1. Rewrite your summary to bridge the gap. Lead with transferable skills and your target role.",
      },
      {
        type: "p",
        text: "2. Reframe past bullets to emphasize transferable skills. A project manager becoming a product manager should highlight stakeholder alignment, roadmapping, and shipping — not the construction industry context.",
      },
      {
        type: "p",
        text: '3. Add a "Projects" or "Relevant Experience" section at the top that shows your new work. Real projects beat claimed skills every time.',
      },
      { type: "h2", text: "What to expect emotionally" },
      {
        type: "p",
        text: 'Career changes are full of doubt. You\'ll feel like a beginner again. You\'ll be the oldest (or youngest) person in the room sometimes. You\'ll wonder if you made a mistake.',
      },
      {
        type: "p",
        text: "This is normal. The people who make it through aren't the ones without doubt — they're the ones who keep going anyway.",
      },
      {
        type: "quote",
        text: "You don't have to see the whole staircase. Just take the first step.",
        cite: "Martin Luther King Jr.",
      },
      { type: "h2", text: "Tell your story without apologizing" },
      {
        type: "p",
        text: "Career changers often sound defensive in interviews — explaining why they left, justifying the pivot, apologizing for what they don't know yet. That framing undersells you.",
      },
      {
        type: "p",
        text: "Own the pivot. Frame it as a deliberate choice driven by what you want next, not a flight from what you left. Talk about what your previous career taught you that most candidates in your new field don't have. The teacher becoming an instructional designer isn't behind — they have classroom experience no bootcamp grad can match.",
      },
      {
        type: "tip",
        title: "The one-line pivot story",
        text: 'Have a 20-second version ready: "I spent [X] years in [old field], where I learned [transferable skill]. I realized I wanted to do [new field], so I [built/did/learned Y], and now I\'m looking for [target role]." Practice it until it sounds natural.',
      },
      { type: "h2", text: "Realistic timelines by age" },
      { type: "h3", text: "Career change at 30" },
      {
        type: "p",
        text: "You have ~35 working years ahead. A 1-2 year transition is a rounding error in the long run. This is the easiest decade to switch — you have experience but you're not locked in.",
      },
      { type: "h3", text: "Career change at 40" },
      {
        type: "p",
        text: 'Harder but very doable. Your network is bigger, your judgment is sharper, and you have more financial cushion. The trap is waiting for "the right time" — it never arrives.',
      },
      { type: "h3", text: "Career change at 50" },
      {
        type: "p",
        text: "Plenty of people start successful second careers at 50+. Your strengths are credibility, network, and judgment. Your challenge is age bias — counter it by staying current with tools and showing recent, relevant work.",
      },
      {
        type: "p",
        text: "Career changes aren't a leap of faith. They're a series of small, deliberate steps over 1-3 years. Take the next one. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Remote job resume
  // ---------------------------------------------------------------------------
  {
    slug: "remote-job-resume",
    title: "How to Tailor Your Resume for Remote Jobs",
    metaDescription:
      "Remote jobs have different resume rules. Here's how to tailor your resume for remote roles — keywords, skills, and what recruiters actually look for.",
    category: "Resumes",
    keywords: [
      "remote job resume",
      "resume for remote work",
      "remote work skills",
      "work from home resume",
      "remote job application",
      "distributed team resume",
    ],
    excerpt:
      "Remote roles get hundreds of applicants. Here's how to write a resume that signals you can actually work without supervision.",
    readTime: 8,
    author: "CVForge Team",
    date: "2025-03-05",
    content: [
      {
        type: "p",
        text: "A remote job resume isn't a totally different document — but it does need to signal three things a regular resume doesn't: that you can communicate asynchronously, that you can self-direct, and that you've worked remotely before (or can plausibly do so).",
      },
      {
        type: "p",
        text: 'Remote roles get flooded with applicants. The recruiter\'s first filter is "can this person actually function without someone watching them?" Your resume has to answer that question before they ask it.',
      },
      { type: "h2", text: "Add remote-relevant keywords" },
      {
        type: "p",
        text: "ATS systems for remote roles scan for specific signals. Mirror the language of the job posting, and make sure these terms appear naturally:",
      },
      {
        type: "ul",
        items: [
          "Remote, distributed team, async, asynchronous communication",
          "Self-starter, self-directed, autonomous",
          "Slack, Notion, Linear, Jira, Zoom, Loom",
          "Cross-time-zone collaboration, written communication",
          "Documentation, written specs, decision logs",
        ],
      },
      {
        type: "p",
        text: 'Don\'t stuff them — use them in context. "Wrote decision logs in Notion for a 12-person distributed team" beats a keyword list.',
      },
      { type: "h2", text: "Highlight remote experience explicitly" },
      {
        type: "p",
        text: "If you've worked remotely before, say so. Don't make the recruiter guess. Add it to your summary and your role descriptions.",
      },
      {
        type: "p",
        text: 'Weak: "Software Engineer at Acme Corp, 2021-2024."',
      },
      {
        type: "p",
        text: 'Strong: "Software Engineer at Acme Corp (remote, distributed across 8 time zones), 2021-2024."',
      },
      {
        type: "p",
        text: 'If you\'ve never had a formal remote job but worked from home during the pandemic or had hybrid arrangements, you can still pull evidence: "Collaborated asynchronously with a fully remote design team based in Berlin."',
      },
      { type: "h2", text: "Emphasize async communication skills" },
      {
        type: "p",
        text: "Remote teams live and die by written communication. Show yours.",
      },
      {
        type: "ul",
        items: [
          "Wrote technical specs reviewed by 15+ engineers",
          "Maintained team documentation in Notion used by 40+ employees",
          "Led async standups in Slack across 5 time zones",
          "Recorded weekly Loom updates for stakeholders",
        ],
      },
      {
        type: "tip",
        title: "The signal recruiters look for",
        text: "Distributed teams worry about communication overhead. Any bullet that shows you can write clearly and document decisions is worth its weight in gold.",
      },
      { type: "h2", text: "Show self-direction" },
      {
        type: "p",
        text: "Remote work requires initiative. Without a manager walking past your desk, you need to drive your own work. Highlight bullets that show you:",
      },
      {
        type: "ul",
        items: [
          "Owned a project end-to-end",
          "Shipped without being asked",
          "Improved a process without waiting for permission",
          "Onboarded yourself or others to new tools",
        ],
      },
      {
        type: "p",
        text: 'Weak: "Worked on the marketing team."',
      },
      {
        type: "p",
        text: 'Strong: "Owned the editorial calendar end-to-end, shipping 40+ articles in a year without direct supervision."',
      },
      { type: "h2", text: "Mention remote-friendly tools" },
      {
        type: "p",
        text: "Remote teams run on tooling. If you're fluent in the standard remote stack, list it — but in context, not as a wall of logos.",
      },
      {
        type: "ul",
        items: [
          "Communication: Slack, Zoom, Loom, Discord",
          "Project management: Linear, Asana, Jira, Notion",
          "Documentation: Notion, Confluence, GitBook",
          "Version control / code: GitHub, GitLab",
        ],
      },
      {
        type: "p",
        text: "The keyword density matters here for ATS too. We cover keyword strategy in more depth in our ATS-friendly resume guide.",
      },
      { type: "h2", text: "The location question" },
      {
        type: "p",
        text: 'For remote roles, your location matters less — but it still matters. Many remote jobs are "remote within the US" or "remote within EU time zones." State your location clearly and indicate your flexibility.',
      },
      {
        type: "p",
        text: 'In your header: "Brooklyn, NY (open to remote, US-based)" or "Berlin, Germany (open to remote, EU time zones)."',
      },
      { type: "h2", text: "Tailor for the specific remote company" },
      {
        type: "p",
        text: 'Remote-first companies (GitLab, Automattic, Doist) operate differently than "remote-during-pandemic" companies that are now hybrid. Research the company\'s actual remote culture and tailor accordingly.',
      },
      {
        type: "ul",
        items: [
          "Async-first companies value written communication above all. Show your writing.",
          "Sync-heavy remote companies value meeting facilitation. Show your cross-time-zone coordination.",
          "Hybrid companies want people who can thrive in either mode. Show both.",
        ],
      },
      { type: "h2", text: "Remote interview prep" },
      {
        type: "p",
        text: "Remote-first companies often run their interviews differently. Expect async components — written questions you answer on your own time, or recorded video responses — alongside the usual live video rounds.",
      },
      {
        type: "p",
        text: "For async written responses, write like you'd write a doc at work: clear, structured, skimmable. For recorded video, practice once or twice so you don't ramble. For live video, the standard interview rules apply — plus the added expectation that you can communicate well over a screen.",
      },
      {
        type: "tip",
        title: "The unstated test",
        text: "Remote interviews are themselves a test of how you'll communicate as a remote employee. Clear audio, decent lighting, and the ability to listen and respond thoughtfully on video all signal you can do the job the way it needs to be done.",
      },
      { type: "h2", text: "What to leave off" },
      {
        type: "p",
        text: "Don't waste space on things that don't help:",
      },
      {
        type: "ul",
        items: [
          "Photos and graphics that don't render in ATS",
          "Empty buzzwords like 'team player' or 'self-motivated' — prove it instead",
          "Long lists of irrelevant hobbies",
          "References to in-office perks you've enjoyed",
        ],
      },
      { type: "h2", text: "Self-check: would you hire you remotely?" },
      {
        type: "p",
        text: "Before you submit, read your resume as if you were the hiring manager asking: 'Can this person work without supervision?' If the answer isn't obviously yes from your bullets, rewrite until it is.",
      },
      {
        type: "p",
        text: "The strongest remote resumes make self-direction undeniable. Every bullet should imply: I saw a problem, I owned it, I shipped it — no one had to ask me twice.",
      },
      { type: "h2", text: "A remote-ready summary example" },
      {
        type: "quote",
        text: "Senior backend engineer with 7 years building distributed systems, the last 4 fully remote at a 200-person async-first company. Comfortable across 8+ time zones, fluent in written specs and decision logs in Notion. Seeking a staff engineer role at a remote-first team.",
      },
      {
        type: "p",
        text: "That summary answers every remote recruiter's question in three lines: you've done it, you can do it, you know the tools, you understand the constraints.",
      },
      {
        type: "p",
        text: "Remote roles are competitive, but they reward the candidates who can clearly demonstrate they don't need hand-holding. Show, don't tell. 🚀",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. Resume mistakes to avoid
  // ---------------------------------------------------------------------------
  {
    slug: "resume-mistakes-to-avoid",
    title: "13 Resume Mistakes That Get You Rejected (and How to Fix Them)",
    metaDescription:
      "The resume mistakes that quietly get you rejected — and the simple fixes. Real examples of weak vs strong bullets, formatting, and summary lines.",
    category: "Resumes",
    keywords: [
      "resume mistakes",
      "common resume mistakes",
      "resume errors",
      "what not to put on a resume",
      "resume red flags",
      "resume rejection reasons",
    ],
    excerpt:
      "Most resumes get rejected for the same 13 reasons. Here they are — with the exact fixes you can apply in 30 minutes.",
    readTime: 8,
    author: "CVForge Team",
    date: "2025-03-12",
    content: [
      {
        type: "p",
        text: "Resumes get rejected for a lot of reasons. Some are out of your control — the role got filled internally, the budget got cut, the recruiter had a bad day. But most rejections come from fixable mistakes. Here are the 13 we see most often.",
      },
      { type: "h2", text: "1. A vague, generic summary" },
      {
        type: "p",
        text: '"Results-driven professional seeking a challenging role" describes literally every applicant. Replace it with something specific.',
      },
      {
        type: "p",
        text: "Fix: Use the formula [Title] + [Years] + [One signature result] + [What you want]. See our 45+ resume summary examples for templates.",
      },
      { type: "h2", text: "2. Duty bullets instead of achievement bullets" },
      {
        type: "p",
        text: '"Responsible for managing the team" tells me what you were supposed to do. It doesn\'t tell me what you did.',
      },
      {
        type: "p",
        text: 'Fix: Use PAR or STAR. "Led a 6-person team that shipped 12 features in Q2, cutting average ticket resolution time by 40%."',
      },
      { type: "h2", text: "3. No numbers anywhere" },
      {
        type: "p",
        text: 'Without numbers, your resume is unverifiable. "Increased sales" could mean $1 or $1M.',
      },
      {
        type: "p",
        text: "Fix: Quantify at least half your bullets — revenue, time saved, team size, scale, percentage. Even rough estimates help.",
      },
      { type: "h2", text: "4. Spelling and grammar mistakes" },
      {
        type: "p",
        text: "A single typo can sink you, especially for writing-heavy roles. Recruiters use it as a proxy for attention to detail.",
      },
      {
        type: "p",
        text: "Fix: Run spellcheck, read it out loud, and have one other person read it. Then read it again the next morning with fresh eyes.",
      },
      { type: "h2", text: "5. An unprofessional email address" },
      {
        type: "p",
        text: '"skaterdude2003@gmail.com" is not the email of a serious candidate. Use a clean firstname.lastname@gmail.com (or your own domain).',
      },
      {
        type: "p",
        text: "Fix: Create a dedicated job-search email if you don't already have one.",
      },
      { type: "h2", text: "6. Too long (or too short)" },
      {
        type: "p",
        text: "Resumes over 2 pages for someone with under 10 years of experience signal you can't edit. Resumes under half a page signal you haven't done anything.",
      },
      {
        type: "p",
        text: "Fix: One page for under 8 years of experience. Two pages for 8-20. Three only for senior executive or academic roles.",
      },
      { type: "h2", text: "7. A photo (in the wrong market)" },
      {
        type: "p",
        text: "In the US, UK, and Canada, photos on resumes are discouraged — they introduce bias and can trigger ATS rejection. In Germany, France, and parts of Asia, they're expected.",
      },
      {
        type: "p",
        text: "Fix: Match the local norm. When in doubt, leave it off.",
      },
      { type: "h2", text: "8. Weird formatting that breaks ATS" },
      {
        type: "p",
        text: "Multi-column table layouts, text boxes, custom fonts, and embedded images can confuse applicant tracking systems — and your resume never reaches a human.",
      },
      {
        type: "p",
        text: "Fix: Use a clean single-column or simple two-column layout. Test by copying your resume into a plain-text editor. More in our ATS-friendly resume guide.",
      },
      { type: "h2", text: "9. \"References available upon request\"" },
      {
        type: "p",
        text: "This phrase is a relic from the 1990s. It wastes space and signals you're out of touch.",
      },
      {
        type: "p",
        text: "Fix: Delete it. Recruiters will ask for references if they want them.",
      },
      { type: "h2", text: "10. Listing irrelevant jobs from 15 years ago" },
      {
        type: "p",
        text: "Your high school fast-food job doesn't help you land a senior engineering role. Old, irrelevant experience dilutes your message.",
      },
      {
        type: "p",
        text: "Fix: Cut anything older than 10-12 years unless it's directly relevant or at a prestigious company. Summarize older roles in one line if you must include them.",
      },
      { type: "h2", text: "11. Skills you can't back up" },
      {
        type: "p",
        text: 'Listing "Python expert" when you can\'t write a basic function will sink you the moment a technical screen starts. Recruiters remember.',
      },
      {
        type: "p",
        text: "Fix: Be honest about proficiency. If you've used something in a project, list it. If you read a tutorial once, don't.",
      },
      { type: "h2", text: "12. Customizing for every job — badly" },
      {
        type: "p",
        text: "Customizing your resume per application is good. Sending a resume that still says \"excited about Company X\" when you're applying to Company Y is bad.",
      },
      {
        type: "p",
        text: "Fix: Keep a master resume, then duplicate and tailor for each role. Double-check the company name before you hit submit. Always.",
      },
      { type: "h2", text: "13. No clear value proposition" },
      {
        type: "p",
        text: "The biggest mistake. A resume that lists facts without making a case for why this person, for this role, is a strong hire.",
      },
      {
        type: "p",
        text: 'Fix: Before you submit, ask yourself: "If a recruiter reads only my summary and first job, would they understand what I\'m great at?" If not, rewrite until they would.',
      },
      { type: "h2", text: "Read your resume on your phone" },
      {
        type: "p",
        text: "Over half of recruiters review applications on mobile. If your resume is unreadable on a phone screen — tiny fonts, text running off the edge, sections stacked weirdly — you've lost them before they finish your summary.",
      },
      {
        type: "p",
        text: "Email the PDF to yourself and open it on your phone. If you have to pinch and zoom to read anything, fix the formatting. A clean one-column layout usually survives mobile best.",
      },
      { type: "h2", text: "The resume review swap" },
      {
        type: "p",
        text: "You can't see your own resume clearly anymore. You've read it too many times. Find one person in your field — a friend, a former coworker, a mentor — and swap resumes for a 10-minute review.",
      },
      {
        type: "p",
        text: "Ask them two questions: What's the single strongest impression you get in 10 seconds? What's the weakest part? Their answers will surprise you, and the fixes are usually small: cut a paragraph, rewrite a summary line, reorder two sections.",
      },
      {
        type: "tip",
        title: "The 30-minute resume audit",
        text: "Spend 10 minutes on each: (1) summary, (2) bullet rewrites for your last 2 jobs, (3) cutting everything that doesn't earn its place. You'll have a stronger resume in half an hour.",
      },
      {
        type: "p",
        text: "Most resume mistakes are small, fixable, and compound. Fix the ones you can in your next application — and the one after that, you'll sound like a different candidate. For the full writing process, our step-by-step resume guide walks through every section. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. Entry-level resume
  // ---------------------------------------------------------------------------
  {
    slug: "entry-level-resume",
    title: "How to Write an Entry-Level Resume With No Experience",
    metaDescription:
      "Writing an entry-level resume with no experience? Here's how to leverage projects, coursework, and skills — with real examples you can use today.",
    category: "Resumes",
    keywords: [
      "entry-level resume",
      "resume with no experience",
      "first job resume",
      "student resume",
      "entry level resume examples",
      "no experience resume",
    ],
    excerpt:
      "No experience doesn't mean no resume. Here's how to build an entry-level resume that punches above its weight — with real examples.",
    readTime: 8,
    author: "CVForge Team",
    date: "2025-03-19",
    content: [
      {
        type: "p",
        text: '"How do I write a resume with no experience?" is the most common question we hear from new grads and career starters. The answer: you have more experience than you think — you just have to frame it differently.',
      },
      {
        type: "p",
        text: "An entry-level resume isn't a thinner version of a senior resume. It's a different document, built around different evidence: education, projects, internships, coursework, and skills. Here's how to build one that actually works.",
      },
      { type: "h2", text: "Lead with education (for now)" },
      {
        type: "p",
        text: "When you're early in your career, your education is your strongest credential. Put it near the top — above your experience section — until you've had 1-2 real jobs.",
      },
      { type: "p", text: "Include:" },
      {
        type: "ul",
        items: [
          "Degree and major",
          "School name and location",
          "Graduation date (month and year)",
          "GPA (only if 3.5 or above)",
          "Honors, dean's list, scholarships",
          "Relevant coursework (3-6 classes most relevant to the role)",
        ],
      },
      {
        type: "p",
        text: "Skip the high school section once you're in college. It signals immaturity.",
      },
      { type: "h2", text: "Build a projects section" },
      {
        type: "p",
        text: "This is the secret weapon of entry-level resumes. Real projects — even unpaid, even academic — prove you can do the work. A capstone project, a hackathon build, a freelance gig, a side project, a volunteer site you built for a local nonprofit: all of these count.",
      },
      { type: "p", text: "Treat each project like a mini job. For each:" },
      {
        type: "ul",
        items: [
          "Name and short description",
          "Your role and the team size",
          "Tools and technologies used",
          "Outcome or result (numbers if possible)",
        ],
      },
      {
        type: "p",
        text: 'Weak: "Built a website for a class."',
      },
      {
        type: "p",
        text: 'Strong: "Built a full-stack scheduling app for a university clinic (React, Node, PostgreSQL) as a 3-person capstone team. Reduced patient wait time estimates by 25%. Deployed to 200+ daily users."',
      },
      {
        type: "tip",
        title: "No projects yet?",
        text: 'Build 2-3 this month. Pick something real — a tool you\'d actually use, a redesign of an app you love, a data analysis on a public dataset. Recruiters can tell the difference between "I built a calculator in tutorial" and "I shipped something real."',
      },
      { type: "h2", text: "Reframe your work history" },
      {
        type: "p",
        text: "Even unrelated jobs — barista, retail, food service, campus tour guide — count. The trick is to frame them around transferable skills: communication, reliability, problem-solving, leadership.",
      },
      {
        type: "p",
        text: 'Weak: "Cashier at campus coffee shop."',
      },
      {
        type: "p",
        text: 'Strong: "Managed a high-volume coffee shop during peak hours, training 4 new hires and maintaining a 4.8/5 customer rating."',
      },
      {
        type: "p",
        text: "The job doesn't have to match your target role. The skills do.",
      },
      { type: "h2", text: "Include internships and volunteer work" },
      {
        type: "p",
        text: "Internships are real experience — treat them like jobs. Volunteer work counts too, especially if it's substantive.",
      },
      {
        type: "p",
        text: 'Don\'t bury these in a "Volunteer" section at the bottom. If the work is relevant, put it in your main experience section.',
      },
      { type: "h2", text: "Skills section matters more now" },
      {
        type: "p",
        text: "For an entry-level resume, the skills section does heavy lifting. List the tools, languages, and methods you've actually used — in projects, coursework, or internships.",
      },
      { type: "p", text: "Group by category:" },
      {
        type: "ul",
        items: [
          "Languages: Python, JavaScript, SQL",
          "Frameworks: React, Node.js, Flask",
          "Tools: Git, Figma, Excel, Tableau",
          "Soft skills: Don't list these — show them in your bullets instead",
        ],
      },
      {
        type: "p",
        text: 'Be honest about proficiency. "Familiar" is fine. Don\'t claim expert-level skills you can\'t back up in an interview.',
      },
      { type: "h2", text: "Write a summary that bridges the gap" },
      {
        type: "p",
        text: "Your summary should acknowledge you're early without apologizing for it. The formula: [Degree + school] + [One relevant project or internship] + [What you're targeting].",
      },
      {
        type: "p",
        text: 'Example: "Recent CS grad from Georgia Tech with capstone experience building full-stack scheduling apps. Seeking a junior frontend role at a product-led team."',
      },
      {
        type: "p",
        text: "For more examples by stage, our resume summary examples include several for entry-level candidates.",
      },
      { type: "h2", text: "What to leave off" },
      {
        type: "ul",
        items: [
          "High school info (once you're in college)",
          "GPA below 3.5",
          "Every class you ever took — pick 3-6 relevant ones",
          "Soft skills listed without evidence",
          "References (available upon request, they'll ask)",
          "Photos (in US/UK/Canada markets)",
        ],
      },
      { type: "h2", text: "Resume vs portfolio: which matters more" },
      {
        type: "p",
        text: "For design, engineering, writing, and data roles, a portfolio often outweighs the resume. A resume gets you past the ATS; a portfolio gets you the offer. If you're targeting one of these fields, build both — and link the portfolio prominently in your resume header.",
      },
      {
        type: "p",
        text: "Your portfolio should have 2-3 deep case studies, not 15 shallow ones. For each: the problem, your role, your process, the result. Recruiters skim portfolios the same way they skim resumes — lead with your strongest work, not the chronological first.",
      },
      {
        type: "tip",
        title: "No portfolio site?",
        text: "A Notion page, a GitHub README, or a Figma file all count. The medium matters less than the substance. Ship something a recruiter can click through in five minutes and understand what you can do.",
      },
      { type: "h2", text: "Format for clarity" },
      {
        type: "p",
        text: "One page. Clean layout. Standard fonts (Inter, Calibri, Georgia). Consistent spacing. Save as PDF.",
      },
      {
        type: "p",
        text: "Don't try to pad a thin resume with graphics, colors, or wild fonts. The content is what gets you the interview — the design just needs to not get in the way.",
      },
      { type: "h2", text: "The entry-level resume template" },
      {
        type: "p",
        text: "In order, top to bottom:",
      },
      {
        type: "ol",
        items: [
          "Header: Name, contact, one link (LinkedIn or portfolio)",
          "Summary: 2-3 lines",
          "Education: Degree, school, date, GPA if 3.5+, relevant coursework",
          "Projects: 2-3 substantive projects, treated like jobs",
          "Experience: Internships, part-time jobs, volunteer work — framed around transferable skills",
          "Skills: Grouped by category, tools you've actually used",
        ],
      },
      {
        type: "p",
        text: "The bar for entry-level resumes is lower than you think. Most candidates submit thin, generic resumes. A specific, well-organized one — even without much experience — stands out fast. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 10. Negotiate salary
  // ---------------------------------------------------------------------------
  {
    slug: "negotiate-salary",
    title: "How to Negotiate Your Salary Without Feeling Awkward",
    metaDescription:
      "Salary negotiation doesn't have to be awkward. Real scripts, anchoring tactics, and the exact words to use — and avoid — when negotiating your offer.",
    category: "Job Offers",
    keywords: [
      "negotiate salary",
      "salary negotiation",
      "how to negotiate salary",
      "salary negotiation tips",
      "job offer negotiation",
      "negotiate job offer",
    ],
    excerpt:
      "Salary negotiation is the highest-paying 10 minutes of your career. Here's how to do it without the awkwardness — with real scripts.",
    readTime: 9,
    author: "CVForge Team",
    date: "2025-03-26",
    content: [
      {
        type: "p",
        text: "Salary negotiation is uncomfortable for almost everyone. That's exactly why most people don't do it — and why the people who do earn significantly more over their careers. One study put the lifetime cost of not negotiating a single starting salary at over $500,000.",
      },
      {
        type: "p",
        text: "The discomfort is the point. Push through it once, and the next time is easier. Here's how.",
      },
      { type: "h2", text: "Do your research first" },
      {
        type: "p",
        text: "You can't negotiate without a number. Before any conversation, know what the role actually pays in your market.",
      },
      {
        type: "ul",
        items: [
          "Check Levels.fyi, Glassdoor, and Payscale for salary ranges",
          "Ask people in your network what they've seen for similar roles",
          "Look at the company's location and funding stage — a Series A startup won't pay FAANG salaries",
          "Understand the full comp package: base, bonus, equity, benefits, sign-on",
        ],
      },
      {
        type: "p",
        text: "Come in with a range, not a single number. The bottom of your range should be the lowest you'd accept without resentment; the top should be aspirational but defensible.",
      },
      { type: "h2", text: "Never give the first number (if you can avoid it)" },
      {
        type: "p",
        text: "The first number anchors the conversation. If you say $90K first and they were budgeted for $110K, you've cost yourself $20K. If they say $90K first and you were hoping for $100K, you've got room to push up.",
      },
      {
        type: "p",
        text: "When a recruiter asks for your expectations early, deflect gently:",
      },
      {
        type: "quote",
        text: "I'd love to learn more about the role and the full compensation package before sharing a specific number. What's the range you have budgeted for this position?",
      },
      {
        type: "p",
        text: "Some recruiters will push. Hold firm — politely. If they absolutely insist, give a range with your target at the bottom.",
      },
      { type: "h2", text: "The anchoring tactic" },
      {
        type: "p",
        text: "When it's time to give a number, anchor high. Research consistently shows that the first number on the table pulls the final offer toward it. If your target is $110K, ask for $120-125K.",
      },
      {
        type: "p",
        text: "This isn't greed — it leaves room for them to negotiate down while you still land above your floor.",
      },
      { type: "h2", text: "Negotiate the whole package" },
      {
        type: "p",
        text: "Salary is one piece. If they can't move on base, look at:",
      },
      {
        type: "ul",
        items: [
          "Sign-on bonus (often the most flexible)",
          "Equity / stock options",
          "Annual bonus target",
          "Vacation days",
          "Remote work flexibility",
          "Professional development budget",
          "Title (more important than people think for future roles)",
        ],
      },
      {
        type: "tip",
        title: "The multi-variable lever",
        text: "If base is fixed, ask: 'Is there flexibility on sign-on or equity to bring the total package closer to where I was hoping?' This signals you're reasonable but serious.",
      },
      { type: "h2", text: "The exact scripts" },
      {
        type: "p",
        text: "When you receive the initial offer, don't accept on the spot. Always ask for time.",
      },
      {
        type: "quote",
        text: "Thank you so much — I'm really excited about this offer. Can I take a day or two to review the full package and get back to you?",
      },
      { type: "p", text: "When you're ready to counter:" },
      {
        type: "quote",
        text: "Based on my research and the scope of the role, I was hoping to be closer to [number]. Is there flexibility on the base, or could we look at the overall package to get closer to that?",
      },
      { type: "p", text: "If they say no:" },
      {
        type: "quote",
        text: "I understand. Could we revisit this in 6 months based on performance? And is there any flexibility on sign-on or equity to bridge the gap?",
      },
      { type: "h2", text: "What to never say" },
      {
        type: "ul",
        items: [
          "'I need more because of my rent / loans / expenses.' (Personal finances aren't their problem.)",
          "'Other companies are offering more.' (Only if true, and only if you'd actually take the other offer.)",
          "'This is my final offer / take it or leave it.' (Unless it really is.)",
          "'Sorry to ask.' (Don't apologize for negotiating.)",
          "'Whatever you think is fair.' (This hands them all the leverage.)",
        ],
      },
      { type: "h2", text: "The pre-offer setup" },
      {
        type: "p",
        text: "The best salary negotiations start before the offer. During the interview process, plant the seeds:",
      },
      {
        type: "ul",
        items: [
          "Mention your impact in quantified terms — numbers justify higher offers",
          "Reference (subtly) that you're evaluating multiple opportunities",
          "Ask about the role's scope and responsibilities — bigger scope = bigger offer",
        ],
      },
      {
        type: "p",
        text: "For more on the interview side of this, our job interview preparation checklist covers the questions and research that set you up for a strong offer.",
      },
      { type: "h2", text: "Negotiating a raise at your current job" },
      {
        type: "p",
        text: "The same tactics apply when you're asking for a raise, not just a new offer. The difference: you have to make the case internally, against a budget your manager may not control.",
      },
      {
        type: "p",
        text: "Three things make raise conversations land: timing, evidence, and market data. Time the ask right after a big win or during a performance review. Bring a one-page doc of your quantified wins from the last 6-12 months. And anchor to market data — 'Based on what similar roles pay at [comparable companies], I'm hoping to be at [number]' — so the conversation is about the market, not your personal need.",
      },
      {
        type: "tip",
        title: "If the answer is no",
        text: "Ask what it would take to get to your number in 6 months. Get it in writing. Then revisit on schedule. A specific, time-bound plan turns a 'no' into a roadmap.",
      },
      { type: "h2", text: "What if they say no?" },
      {
        type: "p",
        text: "Sometimes the offer really is the offer. That's okay. You haven't lost anything by asking — and you've set the expectation that you'll advocate for yourself, which helps in future reviews.",
      },
      {
        type: "p",
        text: "If you accept, do it graciously and start the role ready to over-deliver. The next negotiation is your first performance review.",
      },
      { type: "h2", text: "The mindset shift" },
      {
        type: "p",
        text: "Most people feel awkward negotiating because they think they're asking for a favor. They're not. They're participating in a normal business transaction. Companies expect it. Recruiters expect it. The only people who lose are the ones who don't try.",
      },
      {
        type: "p",
        text: "Ten minutes of discomfort. Potentially tens of thousands of dollars a year, compounding for the rest of your career. Do the math. 🚀",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  // Return a copy sorted by date desc so the blog list reads newest-first.
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getRelatedPosts(slug: string, n = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  if (sameCategory.length >= n) return sameCategory.slice(0, n);
  // Backfill with posts from other categories, excluding self.
  const others = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, n);
}

export const BLOG_CATEGORIES: string[] = Array.from(
  new Set(BLOG_POSTS.map((post) => post.category)),
);
