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

  // ---------------------------------------------------------------------------
  // 11. Resume format (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "resume-format",
    title: "Best Resume Format for 2025 (with Examples)",
    metaDescription:
      "Best resume format for 2025 explained. Compare chronological, functional, and hybrid formats with examples — and learn which one wins for your situation.",
    category: "Resumes",
    keywords: [
      "resume format",
      "best resume format 2025",
      "chronological resume format",
      "functional resume format",
      "hybrid resume format",
      "resume layout",
    ],
    excerpt:
      "Picking a resume format is a strategic decision, not a creative one. Here's how the three formats compare — and which one wins for your situation.",
    readTime: 8,
    author: "forgedCV Team",
    date: "2025-04-02",
    content: [
      {
        type: "p",
        text: "Picking a resume format isn't a creative exercise. It's a strategic one. The format you choose dictates what a recruiter sees first — and whether your strongest evidence lands before their eyes glaze over.",
      },
      {
        type: "p",
        text: "There are three resume formats worth knowing in 2025: chronological, functional, and hybrid. We'll walk through each, when to use it, and what it actually looks like on the page. By the end you'll know exactly which one fits your situation.",
      },
      { type: "h2", text: "The three resume formats explained" },
      { type: "h3", text: "1. Reverse-chronological (the default)" },
      {
        type: "p",
        text: "The reverse-chronological resume format lists your work experience starting with your most recent role and working backward. It's what 9 out of 10 recruiters expect, and what ATS software parses most cleanly.",
      },
      {
        type: "p",
        text: "Use it when: you have a steady work history in the field you're applying to, with clear upward progression. Which is most people, most of the time.",
      },
      {
        type: "p",
        text: "Skip it when: you have major employment gaps, you're switching industries, or your most recent role isn't the most relevant one for the job you're targeting.",
      },
      {
        type: "tip",
        title: "The safe default",
        text: "If you're not sure which resume format to use, use reverse-chronological. It works for the widest range of candidates and never raises suspicion.",
      },
      { type: "h3", text: "2. Functional (skills-first)" },
      {
        type: "p",
        text: "The functional resume format leads with your skills and accomplishments, with work history pushed to the bottom or condensed. It's marketed as a solution for career changers and people with gaps — but most recruiters read it as a red flag.",
      },
      {
        type: "p",
        text: "Use it when: honestly, almost never in 2025. ATS systems struggle to parse it, and recruiters assume you're hiding something.",
      },
      {
        type: "p",
        text: "Skip it when: you have any kind of conventional work history. The hybrid format does what the functional resume tries to do, without the suspicion.",
      },
      { type: "h3", text: "3. Hybrid (combination)" },
      {
        type: "p",
        text: "The hybrid resume format blends the two: a skills summary at the top, then a reverse-chronological work history below. It's the best choice for career changers, people with varied experience, and anyone whose most relevant work isn't their most recent.",
      },
      {
        type: "p",
        text: "Use it when: you're switching industries, you have transferable skills from a different field, or you want to lead with capability rather than job titles.",
      },
      { type: "h2", text: "Which resume format should you use?" },
      {
        type: "p",
        text: "Quick decision framework:",
      },
      {
        type: "ul",
        items: [
          "Steady work history in your target field → reverse-chronological",
          "Career changer, varied background, or transferable skills → hybrid",
          "Major employment gaps you can't explain otherwise → hybrid with a brief, honest note",
          "Recent grad with internships and projects → reverse-chronological with a projects section",
        ],
      },
      {
        type: "p",
        text: "For most candidates, reverse-chronological is the right answer. The hybrid format is the runner-up. The functional format is something we mention so you know to avoid it.",
      },
      { type: "h2", text: "A reverse-chronological resume example" },
      {
        type: "p",
        text: "Here's the structure, top to bottom:",
      },
      {
        type: "ol",
        items: [
          "Header: name, phone, email, location, one link",
          "Summary: 2-3 line pitch",
          "Work experience: most recent first, 3-6 bullets per role",
          "Education: degree, school, date",
          "Skills: grouped by category",
        ],
      },
      {
        type: "p",
        text: "This is the format we build into most forgedCV templates. It works for ATS, works for recruiters, and works for almost every role from junior to senior.",
      },
      {
        type: "tip",
        title: "Need the full walkthrough?",
        text: "Our how to write a resume guide breaks down every section in detail — what to include, what to cut, and the small choices that decide whether a recruiter reads past your header.",
      },
      { type: "h2", text: "A hybrid resume example" },
      {
        type: "p",
        text: "Same header and summary as above, then:",
      },
      {
        type: "ol",
        items: [
          "Core Skills section: 4-6 grouped skill areas with 1-2 line evidence each",
          "Professional Experience: reverse-chronological, slightly condensed",
          "Education",
          "Additional skills",
        ],
      },
      {
        type: "p",
        text: 'The skills section at the top is where you do the heavy lifting. Each skill area should have a concrete result attached — not just "project management," but "project management: led 3 cross-functional launches, $4M+ in combined revenue."',
      },
      { type: "h2", text: "Resume formatting rules that apply to all three" },
      {
        type: "p",
        text: "Format and layout are separate concerns. Whichever resume format you pick, the underlying layout rules stay the same:",
      },
      {
        type: "ul",
        items: [
          "One page if you have under 8 years of experience, two pages for 8-20",
          "0.5–1 inch margins",
          "10–12pt body font, 14–16pt for your name",
          "Clean fonts: Inter, Calibri, Georgia, Garamond",
          "Save as PDF — always",
          "Standard section headings ATS recognizes (Work Experience, Education, Skills)",
        ],
      },
      {
        type: "p",
        text: "Multi-column layouts look great but can confuse applicant tracking systems. If you use a two-column template, make sure it's a CSS-based layout, not a table. Our ATS-friendly resume guide covers this in depth.",
      },
      { type: "h2", text: "Common resume format mistakes" },
      {
        type: "ul",
        items: [
          "Choosing functional to 'hide' gaps — gaps are more visible in functional format, not less",
          "Cramming two pages of content onto one by shrinking fonts and margins",
          "Using creative section headings ('My Story,' 'Where I've Been') that ATS can't parse",
          "Using photos, icons, or graphics for critical info like contact details",
          "Mixing multiple fonts and colors",
        ],
      },
      {
        type: "quote",
        text: "Your format should make your evidence easy to find. Anything that gets in the way of that — no matter how good it looks — is working against you.",
      },
      { type: "h2", text: "The format test" },
      {
        type: "p",
        text: "Before you submit, do two checks. First, copy your resume into a plain text file. If the sections are intact and the order makes sense, ATS will read it cleanly. Second, send the PDF to your phone and read it there. If a recruiter can scan it in 7 seconds on mobile, you're good.",
      },
      {
        type: "p",
        text: "For more on the chronological vs functional debate, our deep-dive comparison walks through which one wins for which situation. The best resume format in 2025 is the one that puts your strongest evidence in front of the recruiter fastest. Pick yours deliberately — then forge a resume that gets you hired. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 12. Resume objective examples (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "resume-objective-examples",
    title: "Resume Objective Examples for Every Situation",
    metaDescription:
      "Real resume objective examples for every situation — entry-level, career change, industry-specific. Plus the formula behind every objective that works.",
    category: "Resumes",
    keywords: [
      "resume objective",
      "resume objective examples",
      "career objective for resume",
      "objective statement resume",
      "entry level resume objective",
      "career change resume objective",
    ],
    excerpt:
      "Resume objectives get a bad rap — mostly because most of them are terrible. Here's how to write one that earns its line, with examples by situation.",
    readTime: 8,
    author: "forgedCV Team",
    date: "2025-04-09",
    content: [
      {
        type: "p",
        text: 'Resume objectives get a bad rap — mostly because most of them are terrible. "Seeking a challenging position in a growing company" tells the recruiter nothing about you and nothing about why you want the job.',
      },
      {
        type: "p",
        text: "But here's the thing: when you're early in your career, changing fields, or applying for a very specific role, a sharp resume objective can do work a summary can't. The trick is knowing when to use one — and how to write one that doesn't read like a 2005 template.",
      },
      { type: "h2", text: "Resume objective vs resume summary — what's the difference?" },
      {
        type: "p",
        text: "An objective says what you want. A summary says what you offer. Most experienced candidates should use a summary — but if you're a new grad, a career changer, or targeting a very specific narrow role, an objective (or a hybrid) can work better.",
      },
      {
        type: "p",
        text: "We break down the summary side of this in our resume summary examples guide. This article is about the objective side: when it actually helps, and how to write one that doesn't waste the recruiter's time.",
      },
      { type: "h2", text: "When to use a resume objective" },
      {
        type: "ul",
        items: [
          "You're a recent grad with limited work experience",
          "You're changing careers and need to make the pivot explicit",
          "You're targeting a very specific role (a particular fellowship or program)",
          "You're relocating and want to signal your target market",
        ],
      },
      {
        type: "p",
        text: "For everyone else — mid-career professionals with steady experience in their field — use a summary instead. It's stronger.",
      },
      { type: "h2", text: "The resume objective formula" },
      {
        type: "p",
        text: "Every good resume objective has three parts: who you are, what you want, and the value you bring. Three lines max. Drop the adjectives.",
      },
      {
        type: "ol",
        items: [
          "Who you are: degree, years of experience, or current role",
          "What you want: the target role or field",
          "The value you bring: one concrete skill, project, or credential",
        ],
      },
      { type: "h2", text: "Entry-level resume objective examples" },
      {
        type: "p",
        text: "Lead with your degree and what you're targeting. Add one concrete skill or project.",
      },
      {
        type: "ul",
        items: [
          "Recent marketing graduate (BS, University of Texas) seeking an entry-level growth marketing role. Built and ran paid social campaigns for a campus nonprofit with 50K followers and a 4% CTR.",
          "Computer science graduate (Georgia Tech, 2025) targeting a junior frontend role. Shipped a React scheduling app used by 200+ students during capstone.",
          "BSN-registered nurse seeking a new-grad residency in critical care. Clinical rotations in med-surg, ICU, and ER with Epic EHR proficiency.",
          "Recent accounting graduate (CPA candidate) pursuing an entry-level staff accountant role. Internship experience in accounts payable and reconciliation at a mid-size firm.",
        ],
      },
      { type: "h2", text: "Career change resume objective examples" },
      {
        type: "p",
        text: "Acknowledge the pivot, name the target, and bring one transferable skill or piece of evidence.",
      },
      {
        type: "ul",
        items: [
          "Former high school teacher (8 years) transitioning into instructional design. Bringing curriculum design experience for 1,200 students and certifications in Articulate Storyline and Adobe Captivate.",
          "Operations manager pivoting into product management. 10 years leading cross-functional logistics teams and shipping an internal tool adopted company-wide.",
          "Journalist moving into content marketing. 6 years writing for national publications with 5M+ monthly readers.",
        ],
      },
      {
        type: "tip",
        title: "Career changers: split the story",
        text: "Your cover letter is where the pivot story belongs. Use the objective to declare the target, not to explain the journey. For the longer narrative, see our career change at 30 guide.",
      },
      { type: "h2", text: "Industry-specific resume objective examples" },
      {
        type: "p",
        text: "Use these as starting points. Swap in your real details.",
      },
      {
        type: "ul",
        items: [
          "Sales: Enterprise account executive targeting a senior AE role in SaaS. Six years closing six-figure deals at 130% of quota.",
          "Design: Senior product designer seeking a staff design role. 9 years shipping consumer apps, including design systems for two startups.",
          "Data: Data scientist (Python, SQL, PyTorch) pursuing a senior DS role. 5 years building fraud detection models with a 23% reduction in false positives.",
          "Customer success: Customer success manager targeting a senior CSM role. 7 years managing $12M ARR at 98% gross retention.",
        ],
      },
      { type: "h2", text: "What to never put in a resume objective" },
      {
        type: "ul",
        items: [
          "'Seeking a challenging role' — every candidate wants this",
          "'Looking for a company where I can grow' — vague and self-focused",
          "'Hardworking team player' — prove it in your bullets instead",
          "'To utilize my skills' — tell them which skills, and to what end",
          "Salary expectations — never belong on a resume",
        ],
      },
      { type: "h2", text: "A hybrid: objective + summary" },
      {
        type: "p",
        text: "If you can't decide, combine them. Open with your target role, then add a sentence of evidence.",
      },
      {
        type: "quote",
        text: "Recent mechanical engineering graduate (Purdue, 2025) targeting an entry-level role in EV powertrain design. Capstone project on battery thermal management, presented at the SAE World Congress.",
      },
      {
        type: "p",
        text: "That's an objective (target role) and a summary (signature result) in two lines. It works for entry-level and career-change candidates especially well.",
      },
      { type: "h2", text: "Common resume objective mistakes" },
      {
        type: "ul",
        items: [
          "Using first person ('I am seeking...') — drop the pronoun, that's resume convention",
          "Writing 4+ lines — three max, two is better",
          "Focusing on what the company can do for you, not what you bring",
          "Reusing the same objective for every application — tailor it",
          "Using 'utilize' or 'leverage' — they sound stiff and add nothing",
        ],
      },
      {
        type: "tip",
        title: "The 10-second test",
        text: "Read your objective aloud. If a stranger can't tell what role you want and one reason you'd be good at it, rewrite.",
      },
      { type: "h2", text: "Should you include an objective at all?" },
      {
        type: "p",
        text: "If you're a mid-career professional with a clear trajectory in your field, skip it — use a summary instead. If you're a new grad, a career changer, or targeting a narrow role, an objective can earn its place. The choice is about whether the line does work your bullets can't.",
      },
      {
        type: "p",
        text: "A resume objective isn't required. But when it's sharp, specific, and tied to a real result, it can land the way a generic summary never will. Forge one that earns the line it takes. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 13. Resume skills section (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "resume-skills-section",
    title: "How to Write a Resume Skills Section (with 50+ Examples)",
    metaDescription:
      "How to write a resume skills section that ATS bots and recruiters love. 50+ examples by industry, hard vs soft skills, how many to list, and how to format.",
    category: "Resumes",
    keywords: [
      "resume skills section",
      "resume skills",
      "skills for resume",
      "resume skills examples",
      "hard skills vs soft skills",
      "ats keywords resume",
    ],
    excerpt:
      "Your skills section is the most-scanned part of your resume. Here's how to build one that survives ATS, helps recruiters, and skips the buzzword bingo.",
    readTime: 8,
    author: "forgedCV Team",
    date: "2025-04-16",
    content: [
      {
        type: "p",
        text: "Your resume skills section is the most-scanned part of your resume. Recruiters look here first to check off must-have tools and competencies. ATS systems keyword-match against it. Yet most candidates waste the section — either stuffing it with 40 vague skills or listing three things and moving on.",
      },
      {
        type: "p",
        text: "Here's how to build a resume skills section that survives ATS, helps recruiters, and doesn't read like a buzzword bingo card.",
      },
      { type: "h2", text: "Hard skills vs soft skills" },
      {
        type: "p",
        text: "Hard skills are teachable and measurable: tools, languages, frameworks, methodologies, certifications. Soft skills are behavioral: communication, leadership, adaptability.",
      },
      {
        type: "p",
        text: 'List hard skills in your skills section. Show soft skills in your bullets — "led a 6-person team" beats listing "leadership" ever could.',
      },
      { type: "h2", text: "How many skills should you list?" },
      {
        type: "p",
        text: "Aim for 10-15 skills total, grouped into 3-4 categories. More than 20 starts to look like padding. Fewer than 6 makes the section look thin.",
      },
      {
        type: "p",
        text: "The point isn't to list everything you've ever touched. It's to surface the skills most relevant to the role you're targeting.",
      },
      {
        type: "tip",
        title: "Tailor per application",
        text: "If the job description emphasizes SQL and Tableau, those should be the first two things the recruiter sees. Cut the rest for that application.",
      },
      { type: "h2", text: "How to format your resume skills section" },
      {
        type: "p",
        text: "Group by category. A flat list of 15 tools is hard to scan. A grouped list tells a story.",
      },
      {
        type: "ul",
        items: [
          "Languages: Python, JavaScript, SQL, Go",
          "Frameworks: React, Node.js, Flask, FastAPI",
          "Tools: Git, Docker, AWS, Tableau",
          "Methodologies: Agile, Scrum, A/B testing",
        ],
      },
      {
        type: "p",
        text: 'Keep proficiency labels honest. "Familiar," "Proficient," and "Advanced" are all fine — "Expert" should mean you could teach it. If you can\'t answer a basic question about a skill, don\'t list it.',
      },
      { type: "h2", text: "Resume skills examples by industry" },
      { type: "h3", text: "Engineering" },
      {
        type: "ul",
        items: [
          "Languages: Python, Go, TypeScript, SQL",
          "Backend: Node.js, FastAPI, gRPC, PostgreSQL",
          "Infra: AWS, Docker, Kubernetes, Terraform",
          "Practices: TDD, code review, on-call rotation",
        ],
      },
      { type: "h3", text: "Design" },
      {
        type: "ul",
        items: [
          "Tools: Figma, Sketch, Adobe XD, Photoshop",
          "Disciplines: Product design, design systems, prototyping, accessibility",
          "Research: User interviews, usability testing, surveys",
          "Code: HTML/CSS, basic React",
        ],
      },
      { type: "h3", text: "Marketing" },
      {
        type: "ul",
        items: [
          "Paid: Google Ads, Meta Ads, LinkedIn Ads",
          "SEO: Ahrefs, Semrush, content strategy",
          "Analytics: GA4, Looker, Mixpanel",
          "CRM: HubSpot, Marketo, Salesforce",
        ],
      },
      { type: "h3", text: "Data & analytics" },
      {
        type: "ul",
        items: [
          "Languages: SQL, Python, R",
          "Tools: dbt, Airflow, Snowflake, BigQuery",
          "Visualization: Tableau, Looker, Power BI",
          "Methods: A/B testing, causal inference, forecasting",
        ],
      },
      { type: "h3", text: "Finance" },
      {
        type: "ul",
        items: [
          "Accounting: QuickBooks, NetSuite, Excel modeling",
          "FP&A: Anaplan, Adaptive Insights",
          "Reporting: SEC filings, month-end close",
          "Certifications: CPA, CFA Level II",
        ],
      },
      { type: "h3", text: "Project & program management" },
      {
        type: "ul",
        items: [
          "Methodologies: Agile, Scrum, Kanban, Waterfall",
          "Tools: Jira, Asana, Linear, Smartsheet",
          "Practices: Roadmapping, stakeholder management, RACI",
          "Certifications: PMP, CSM, SAFe",
        ],
      },
      { type: "h2", text: "How ATS reads your skills section" },
      {
        type: "p",
        text: "ATS software matches your skills against the job description. If the job posting says 'project management' and your resume says 'PM,' you might miss the match. Mirror the job description's vocabulary.",
      },
      {
        type: "ol",
        items: [
          "Print the job description. Highlight every required skill, tool, and qualification.",
          "For each one, confirm you actually have it. If yes, make sure it's in your skills section or your bullets.",
          "Use the recruiter's exact phrasing. If they say 'stakeholder management,' don't write 'cross-functional collaboration.'",
          "Put skills in context. 'Python (built 3 production APIs)' beats a bare 'Python.'",
        ],
      },
      {
        type: "tip",
        title: "Don't keyword-stuff",
        text: "Modern ATS detects white-text keyword dumps and flags them as spam. Worse, a human who sees your resume will spot it instantly. More on this in our ATS-friendly resume guide.",
      },
      { type: "h2", text: "Soft skills: how to show, not tell" },
      {
        type: "p",
        text: "Don't list soft skills in your skills section. Show them in your bullets with evidence.",
      },
      {
        type: "ul",
        items: [
          "Leadership → 'Led a 6-person team through a 9-month product launch'",
          "Communication → 'Wrote technical specs reviewed by 15+ engineers'",
          "Problem-solving → 'Diagnosed and fixed a memory leak causing 5% daily crash rate'",
          "Adaptability → 'Shipped 3 product pivots in 18 months as strategy evolved'",
        ],
      },
      {
        type: "p",
        text: "A bullet with evidence is worth 10 adjectives in a skills list. We cover this in more depth in our resume mistakes to avoid guide.",
      },
      { type: "h2", text: "Skills you should leave off" },
      {
        type: "ul",
        items: [
          "Anything you can't back up in an interview",
          "Outdated tools (MS-DOS, Internet Explorer)",
          "Generic soft skills ('team player,' 'hard worker') — prove them in bullets",
          "Hobbies and interests unless directly relevant",
          "Skills that aren't relevant to the target role",
        ],
      },
      { type: "h2", text: "The skills section checklist" },
      {
        type: "p",
        text: "Before you submit, run this:",
      },
      {
        type: "ol",
        items: [
          "10-15 skills total, grouped by category",
          "All skills relevant to the target role",
          "Vocabulary matches the job description",
          "No proficiency inflation",
          "Soft skills shown in bullets, not listed",
          "Skills you could actually answer a technical question about",
        ],
      },
      {
        type: "quote",
        text: "The skills section isn't a trophy case. It's a directory of the tools a recruiter needs to see to put you in the 'yes' pile.",
      },
      { type: "h2", text: "Tailoring your skills section per application" },
      {
        type: "p",
        text: "Keep a master skills list — every tool, language, framework, and methodology you've ever used. For each application, copy it and cut to the 10-15 most relevant. Twenty minutes of tailoring per application is plenty.",
      },
      {
        type: "p",
        text: "Your skills section is one of the few resume sections where more specific is always better. List the tools, group them logically, mirror the job description, and skip the adjectives. That's the entire playbook. ⚒️",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 14. Chronological vs functional resume (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "chronological-vs-functional-resume",
    title: "Chronological vs Functional Resume: Which Format Wins?",
    metaDescription:
      "Chronological vs functional resume — which format wins? A side-by-side comparison of structure, ATS compatibility, and recruiter preference for 2025.",
    category: "Resumes",
    keywords: [
      "chronological vs functional resume",
      "chronological resume",
      "functional resume",
      "resume format comparison",
      "reverse chronological resume",
      "combination resume",
    ],
    excerpt:
      "If you're choosing between chronological and functional resume formats, one wins almost every time — and it's probably not the one you've been told to use.",
    readTime: 8,
    author: "forgedCV Team",
    date: "2025-04-23",
    content: [
      {
        type: "p",
        text: "If you're staring at a blank resume and trying to pick a format, the choice usually comes down to two: chronological or functional. One of them wins almost every time — and it's probably not the one you've been told to use.",
      },
      {
        type: "p",
        text: "Let's settle this. We'll break down what each format is, when each one works, and which one you should actually pick in 2025.",
      },
      { type: "h2", text: "What is a chronological resume?" },
      {
        type: "p",
        text: "A chronological (technically reverse-chronological) resume lists your work experience starting with your most recent role and working backward. Each role gets job title, company, dates, and 3-6 bullet points describing your impact.",
      },
      {
        type: "p",
        text: "It's the default format for a reason: recruiters are trained to scan it, ATS systems parse it cleanly, and it makes your career trajectory obvious in about 5 seconds.",
      },
      { type: "h2", text: "What is a functional resume?" },
      {
        type: "p",
        text: "A functional resume leads with your skills and accomplishments, organized by skill area rather than by job. Work history is pushed to the bottom or condensed into a brief list.",
      },
      {
        type: "p",
        text: "It's marketed as a solution for career changers, people with employment gaps, and recent grads. In practice, most recruiters read functional resumes as a red flag — they assume you're hiding something.",
      },
      { type: "h2", text: "Chronological vs functional: side-by-side" },
      {
        type: "ul",
        items: [
          "Structure: chronological = work history first; functional = skills first",
          "Best for: chronological = steady work history in one field; functional = supposedly for career changers (but see below)",
          "ATS compatibility: chronological = excellent; functional = poor",
          "Recruiter preference: chronological = strongly preferred; functional = suspicious",
          "Career trajectory: chronological = obvious; functional = hidden",
        ],
      },
      {
        type: "tip",
        title: "The hybrid option",
        text: "If you're choosing between these two, choose chronological unless you have a very specific reason not to. The hybrid format (below) does what functional tries to do, without the downsides.",
      },
      { type: "h2", text: "Why the functional resume has a bad reputation" },
      {
        type: "p",
        text: "Recruiters see a lot of functional resumes from candidates with gaps, frequent job changes, or unrelated experience. The format itself becomes a signal — fairly or not — that you have something to hide.",
      },
      {
        type: "p",
        text: "ATS systems compound the problem. Functional resumes often put dates in unusual places or group experience by skill area, which the parser struggles to read. The result: your resume may be filtered out before a human sees it.",
      },
      {
        type: "quote",
        text: "The functional resume doesn't hide gaps — it puts a spotlight on them. A chronological resume with a brief, honest note about a gap reads better than a functional resume that pretends the gap isn't there.",
      },
      { type: "h2", text: "When the functional resume actually helps" },
      {
        type: "p",
        text: "Almost never in 2025. But there are a few narrow cases:",
      },
      {
        type: "ul",
        items: [
          "You're a recent grad with no work history but substantial project work",
          "You're applying for a creative role where portfolio matters more than job history",
          "You're in a field where skills-based hiring is genuinely the norm (rare)",
        ],
      },
      {
        type: "p",
        text: "For everyone else, the chronological format wins. Even career changers — see below.",
      },
      { type: "h2", text: "The hybrid: a third option" },
      {
        type: "p",
        text: "If you're a career changer or have varied experience, the hybrid format is almost always the right answer. It leads with a short skills summary, then follows with a reverse-chronological work history.",
      },
      {
        type: "p",
        text: "You get the recruiter-friendly structure of a chronological resume plus the upfront skills emphasis of a functional one — without the red flag.",
      },
      {
        type: "p",
        text: "We walk through the hybrid in detail in our resume format guide.",
      },
      { type: "h2", text: "Chronological resume example structure" },
      {
        type: "ol",
        items: [
          "Header: name, contact, one link",
          "Summary: 2-3 line pitch",
          "Work experience: most recent first, 3-6 bullets per role",
          "Education: degree, school, date",
          "Skills: grouped by category",
        ],
      },
      { type: "h2", text: "Functional resume example structure" },
      {
        type: "ol",
        items: [
          "Header",
          "Objective or summary",
          "Skills section (organized by skill area, with bullets under each)",
          "Work history (condensed: job title, company, dates — no bullets)",
          "Education",
        ],
      },
      {
        type: "p",
        text: "Notice how the functional format pushes your most verifiable evidence (jobs with dates and impact) to the bottom. That's exactly what makes recruiters nervous.",
      },
      { type: "h2", text: "How to handle gaps in a chronological resume" },
      {
        type: "p",
        text: "Don't try to hide them with a functional format. Instead:",
      },
      {
        type: "ul",
        items: [
          "Use years instead of months if the gap is short (2022-2024 instead of May 2022-August 2024)",
          "Fill the gap with what you actually did: freelance, caregiving, study, volunteering, travel",
          "Address it briefly in your cover letter if it's substantial",
          "Don't apologize for it — frame it as deliberate if you can",
        ],
      },
      {
        type: "tip",
        title: "Recruiters care less than you think",
        text: "A candidate who says 'I took 8 months off to care for a family member and used the time to complete a certification' reads better than one who hides the gap with a confusing format.",
      },
      { type: "h2", text: "Recruiter perspective: what hiring managers actually look at" },
      {
        type: "p",
        text: "Recruiters spend about 7 seconds on a first scan. In that time, they're looking for: most recent job title, dates of employment, company names, and overall progression. The chronological format puts all four of those signals at the top of the page, in the order recruiters expect.",
      },
      {
        type: "p",
        text: "The functional format hides them. Recruiters have to dig to verify you actually held the roles your skills list implies. Most won't bother — they'll move to the next resume in the pile.",
      },
      {
        type: "p",
        text: "For career changers specifically, the hybrid format works because it leads with capability (which is what you want to highlight) while keeping the work history visible and verifiable below. You get credit for your transferable skills without raising suspicion.",
      },
      { type: "h2", text: "Which format gets more interviews?" },
      {
        type: "p",
        text: "In our experience, and across every recruiter conversation we've had: chronological wins. The candidates who switch from functional to chronological typically see more interviews, even when their work history is imperfect.",
      },
      {
        type: "p",
        text: "The reason is simple: chronological resumes are easier to read, easier to trust, and easier to parse. The format itself signals you understand professional conventions.",
      },
      { type: "h2", text: "The decision in one sentence" },
      {
        type: "p",
        text: "Use chronological unless you're a recent grad with only project work or a creative professional whose portfolio outweighs job history. If you're tempted by functional because of gaps or career change, use hybrid instead.",
      },
      {
        type: "p",
        text: "For the broader format decision — including how hybrid fits in and what the layout rules are for each — see our resume format guide. Forge a resume that puts your strongest evidence first. ⚒️",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 15. Cover letter examples (FLAGSHIP - NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "cover-letter-examples",
    title: "50+ Cover Letter Examples for Every Job in 2025",
    metaDescription:
      "50+ cover letter examples for every job in 2025 — software, marketing, sales, design, finance, and more. Borrow the structure and tailor for each application.",
    category: "Cover Letters",
    keywords: [
      "cover letter examples",
      "cover letter samples",
      "cover letter templates",
      "best cover letters 2025",
      "cover letter examples by industry",
      "how to start a cover letter",
    ],
    excerpt:
      "Good cover letters don't get read because they're good. They get read because they don't waste the recruiter's time. Here are 50+ examples by industry.",
    readTime: 11,
    author: "forgedCV Team",
    date: "2025-04-30",
    content: [
      {
        type: "p",
        text: "Good cover letters don't get read because they're good. They get read because they don't waste the recruiter's time. The 50+ cover letter examples below all share three things: they're short, they're specific, and they prove you can do the job in the first three lines.",
      },
      {
        type: "p",
        text: "Borrow the structure, swap in your details, and tailor for every application. Let's walk through what makes each one work — then give you a library you can adapt today.",
      },
      { type: "h2", text: "The cover letter structure that works in 2025" },
      {
        type: "p",
        text: "Every example below follows the same three-part structure: a specific opening that proves you've done your homework, one or two paragraphs of evidence that you can solve their problem, and a short close that asks for the interview.",
      },
      {
        type: "p",
        text: 'Skip the "I am writing to apply" opener. Skip the resume recap. Skip the apology for what you don\'t have. The examples below show what to do instead.',
      },
      { type: "h2", text: "Software and engineering cover letter examples" },
      { type: "h3", text: "Senior backend engineer" },
      {
        type: "quote",
        text: "Hi Marcus — I read the Acme engineering blog post on your migration from monolith to services and the senior backend role caught my eye. I led a comparable migration at Northwind that cut p99 latency from 800ms to 180ms over six months. Would love to talk about how I could help with the next phase of yours.",
      },
      { type: "h3", text: "Frontend engineer (career changer)" },
      {
        type: "quote",
        text: "Hi Priya — after four years building internal tools as a designer-developer hybrid at a 30-person agency, I'm moving full-time into frontend engineering. I've shipped 12 React apps in production, including a design system used by 40+ engineers. The Acme frontend role feels like the natural next step — would love to chat.",
      },
      { type: "h3", text: "Data scientist" },
      {
        type: "quote",
        text: "Hi Jamal — the senior data scientist role on Acme's fraud team caught my eye. I spent the last five years building fraud detection models at Northwind — most recently a gradient-boosted classifier that cut false positives 23% while improving catch rate. I'd bring that playbook to your team.",
      },
      { type: "h3", text: "DevOps engineer" },
      {
        type: "quote",
        text: "Hi Lin — Acme's shift to Kubernetes is exactly the kind of work I love. I migrated Northwind's 80-service stack from EC2 to EKS over a year, cutting infrastructure costs 38% and deploy time from 22 minutes to 4. I'd love to learn more about what your migration looks like.",
      },
      { type: "h3", text: "Mobile engineer (iOS)" },
      {
        type: "quote",
        text: "Hi Devon — the iOS engineer role at Acme caught my eye. I've shipped four apps to the App Store with a combined 2M+ downloads, most recently a SwiftUI rebuild that lifted retention 18%. Would love to talk about your mobile roadmap.",
      },
      { type: "h2", text: "Marketing and growth cover letter examples" },
      { type: "h3", text: "Senior content strategist" },
      {
        type: "quote",
        text: "Hi Sam — Acme's recent pivot into the developer-tools space is the kind of move that lives or dies on content, and the senior content strategist role caught my eye. I built Northwind's developer content program from 0 to 80K monthly readers in 18 months. I'd love to bring that playbook to your team.",
      },
      { type: "h3", text: "Performance marketing manager" },
      {
        type: "quote",
        text: "Hi Toni — I came across the performance marketing role at Acme after seeing your recent Meta ads. I've spent the last six years managing $4M+ in annual paid social spend, most recently cutting CAC 28% at Northwind through a creative testing program. Would love to talk about what you're trying to scale.",
      },
      { type: "h3", text: "Brand marketer" },
      {
        type: "quote",
        text: "Hi Devon — Acme's brand has a distinctive voice, and the brand marketing role caught my eye. I led the rebrand at Northwind that lifted unaided awareness from 8% to 19% in our target segment over a year. I'd love to talk about where you're trying to take the brand next.",
      },
      { type: "h3", text: "Growth marketer (entry-level)" },
      {
        type: "quote",
        text: "Hi Riley — I'm a recent grad with hands-on growth experience running paid social for a campus nonprofit (50K followers, 4% CTR). The growth marketing role at Acme is exactly the kind of work I want to do — would love to learn more.",
      },
      { type: "h2", text: "Sales cover letter examples" },
      { type: "h3", text: "Enterprise account executive" },
      {
        type: "quote",
        text: "Hi Morgan — I've been following Acme's expansion into enterprise and the senior AE role caught my eye. I closed $4.2M in net new ARR last year at Northwind, including a seven-figure deal with a Fortune 100 retailer. I'd love to bring that playbook to your team.",
      },
      { type: "h3", text: "Sales development rep (SDR)" },
      {
        type: "quote",
        text: "Hi Casey — I'm targeting an SDR role at Acme because I want to learn enterprise sales from a team that's clearly doing it well. I spent the last year as an SDR at Northwind, booking 90+ qualified meetings and finishing at 115% of quota. Would love to chat.",
      },
      { type: "h3", text: "Customer success manager" },
      {
        type: "quote",
        text: "Hi Drew — the senior CSM role at Acme caught my eye. I've managed $12M in ARR at Northwind with 98% gross retention and 112% net retention — both numbers I'd like to think I can replicate with your book of business. Would love to talk.",
      },
      { type: "h2", text: "Design and creative cover letter examples" },
      { type: "h3", text: "Senior product designer" },
      {
        type: "quote",
        text: "Hi Alex — I've admired Acme's product design from afar for a while, and the senior designer role on the onboarding team caught my eye. I led the redesign of Northwind's onboarding flow that lifted activation from 41% to 58% in one quarter. Would love to dig in.",
      },
      { type: "h3", text: "UX researcher" },
      {
        type: "quote",
        text: "Hi Sam — the senior researcher role at Acme is exactly the kind of work I want to do. I spent the last four years running research at Northwind — most recently a generative study that reshaped our pricing strategy and lifted conversion 14%. I'd love to bring that lens to your team.",
      },
      { type: "h3", text: "Graphic designer" },
      {
        type: "quote",
        text: "Hi Jordan — the graphic designer role at Acme caught my eye. I've spent six years designing for B2B SaaS brands, most recently leading a visual identity refresh that cut our design production time 30% through a new template system. Would love to learn more.",
      },
      { type: "h2", text: "Finance and accounting cover letter examples" },
      { type: "h3", text: "Senior accountant (CPA)" },
      {
        type: "quote",
        text: "Hi Pat — the senior accountant role at Acme caught my eye. I'm a CPA with nine years in corporate finance at Fortune 500 companies, most recently leading a close-process redesign that cut monthly close from 12 days to 6. Would love to learn more.",
      },
      { type: "h3", text: "Financial analyst" },
      {
        type: "quote",
        text: "Hi Jordan — I came across the FP&A analyst role at Acme after a former colleague mentioned your team. I've spent the last three years in FP&A at Northwind, building the operating model used for board reporting. Would love to chat about how I could contribute.",
      },
      { type: "h2", text: "Healthcare cover letter examples" },
      { type: "h3", text: "Registered nurse" },
      {
        type: "quote",
        text: "Hi Taylor — the RN role on Acme's med-surg unit caught my eye. I'm a BSN-prepared nurse with three years of med-surg and float experience, comfortable with Epic and high-acuity patients. I'd love to learn more about the unit and the team.",
      },
      { type: "h3", text: "Medical assistant" },
      {
        type: "quote",
        text: "Hi Casey — I'm a certified medical assistant with two years of experience in a busy family practice. I'm comfortable with rooming, vitals, Epic EHR, and patient education. The MA role at Acme feels like a strong fit — would love to chat.",
      },
      { type: "h2", text: "Education cover letter examples" },
      { type: "h3", text: "Instructional designer (career changer)" },
      {
        type: "quote",
        text: "Hi Morgan — after eight years teaching high school English, I'm transitioning into instructional design, and the ID role at Acme caught my eye. I've designed curriculum for 1,200 students and I'm certified in Articulate Storyline and Adobe Captivate. Would love to talk about how my classroom experience maps to your team's work.",
      },
      { type: "h3", text: "Adjunct professor" },
      {
        type: "quote",
        text: "Hi Dr. Lee — I'm writing to express interest in the adjunct position in the Marketing department. I have an MBA and seven years of industry experience in growth marketing, including teaching a guest lecture series at State University last spring. I'd love to bring that practitioner perspective to your students.",
      },
      { type: "h2", text: "Operations and project management cover letter examples" },
      { type: "h3", text: "Program manager" },
      {
        type: "quote",
        text: "Hi Devon — the senior program manager role at Acme caught my eye. I've spent the last six years leading cross-functional programs at Northwind — most recently a 9-month rollout that touched 4 teams and shipped on time. Would love to talk about how I could help your team.",
      },
      { type: "h3", text: "Operations manager" },
      {
        type: "quote",
        text: "Hi Riley — I came across the operations manager role at Acme after seeing your team speak at the ops summit last fall. I've run operations for a 200-person logistics company for the last five years, including a process overhaul that cut average delivery time 22%. Would love to learn more.",
      },
      { type: "h2", text: "Entry-level cover letter examples" },
      { type: "h3", text: "Recent grad, marketing" },
      {
        type: "quote",
        text: "Hi Sam — I'm a 2025 marketing graduate from UT Austin targeting an entry-level growth marketing role. I ran paid social for a campus nonprofit with 50K followers and a 4% CTR, and I'd love to bring that hands-on experience to Acme. Would love to chat.",
      },
      { type: "h3", text: "Recent grad, software engineering" },
      {
        type: "quote",
        text: "Hi Priya — I'm a 2025 CS grad from Georgia Tech, targeting a junior frontend role. I shipped a React-based scheduling app used by 200+ students during my capstone, and I've been following Acme's design system work. Would love to learn more.",
      },
      { type: "h2", text: "Cover letter examples for career changers" },
      {
        type: "p",
        text: "Career changers need to do extra work in the cover letter — make the pivot explicit, name the transferable skills, and bring evidence from the old career that maps to the new one.",
      },
      { type: "h3", text: "Lawyer to product manager" },
      {
        type: "quote",
        text: "Hi Morgan — after six years in corporate law, I'm moving into product management. My legal work has been a crash course in stakeholder negotiation, complex regulatory analysis, and translating ambiguity into decisions — all skills PMs use daily. I'd love to bring that lens to Acme's product team.",
      },
      { type: "h3", text: "Teacher to instructional designer" },
      {
        type: "quote",
        text: "Hi Devon — eight years in the classroom taught me how to design learning experiences that actually work. I'm now certified in Articulate Storyline and Adobe Captivate, and I've built two self-paced courses used by 1,200 students. The ID role at Acme feels like the natural next step.",
      },
      {
        type: "tip",
        title: "For the longer pivot story",
        text: "Our career change at 30 guide walks through the narrative in depth — the cover letter is where the pivot story belongs, not the resume.",
      },
      { type: "h2", text: "More cover letter examples (quick format)" },
      {
        type: "p",
        text: "Short, adaptable examples across more roles. Borrow the structure, swap your details, tailor per application.",
      },
      {
        type: "ul",
        items: [
          "HR: 'Hi Sam — the HR Business Partner role at Acme caught my eye. I've spent 7 years supporting engineering orgs at Northwind, most recently leading a compensation refresh that reduced attrition 15%.'",
          "Recruiter: 'Hi Taylor — the senior recruiter role at Acme caught my eye. I've closed 40+ engineering roles in the last year at Northwind, including 12 senior-level hires.'",
          "Admin: 'Hi Casey — the office administrator role at Acme caught my eye. I've run operations for a 60-person office for 4 years, including a vendor management overhaul that saved $120K annually.'",
          "Legal: 'Hi Pat — the in-house counsel role at Acme caught my eye. I've spent 6 years in corporate law, most recently negotiating $30M+ in commercial contracts at Northwind.'",
          "Product manager: 'Hi Morgan — the PM role on Acme's platform team caught my eye. I shipped a developer-facing dashboard at Northwind that grew weekly active users from 800 to 4,200 in 6 months.'",
          "Engineering manager: 'Hi Devon — the EM role at Acme caught my eye. I scaled a team from 4 to 12 engineers at Northwind, with 95% retention over 2 years.'",
          "Copywriter: 'Hi Riley — the copywriter role at Acme caught my eye. I've written for 3 DTC brands, most recently lifting email CTR 40% through a voice refresh.'",
          "Data engineer: 'Hi Alex — the data engineer role at Acme caught my eye. I migrated Northwind's analytics stack to Snowflake + dbt, cutting query times 60%.'",
          "Security engineer: 'Hi Jordan — the security engineer role at Acme caught my eye. I led SOC 2 compliance at Northwind, closing 80+ findings in 6 months.'",
          "Account manager: 'Hi Drew — the AM role at Acme caught my eye. I managed $8M in ARR at Northwind with 99% retention and 3 expansions.'",
          "Product marketing: 'Hi Sam — the PMM role at Acme caught my eye. I launched 12 product features at Northwind, including a positioning refresh that lifted trial conversion 22%.'",
          "Operations analyst: 'Hi Toni — the ops analyst role at Acme caught my eye. I built dashboards at Northwind that surfaced $400K in annual savings opportunities.'",
        ],
      },
      { type: "h2", text: "Cover letter opening lines that work" },
      {
        type: "p",
        text: 'Skip "I am writing to apply for…" Try these instead:',
      },
      {
        type: "ul",
        items: [
          "\"I came across [role] at [company] after [specific thing you saw/read/heard]\"",
          "\"I've been following [company]'s work on [specific project] and the [role] caught my eye\"",
          "\"After [years] in [field], I'm moving into [target field] — and the [role] at [company] is exactly the kind of work I want to do\"",
          "\"[Mutual connection] suggested I reach out about the [role] at [company]\"",
        ],
      },
      { type: "h2", text: "Cover letter closing lines that work" },
      {
        type: "ul",
        items: [
          "\"Would love to chat about how I could help with [specific problem]\"",
          "\"I'd welcome the chance to interview and dig in further\"",
          "\"Thanks for considering me — looking forward to next steps\"",
          "\"I'd love to bring that playbook to your team\"",
        ],
      },
      { type: "h2", text: "Common cover letter mistakes" },
      {
        type: "ul",
        items: [
          "Recapping your resume in paragraph form",
          "Apologizing for what you don't have",
          "Using 'To Whom It May Concern' — find a name or use 'Hi [Team]'",
          "Writing more than 350 words",
          "Sending the same letter to every company with the wrong name",
        ],
      },
      {
        type: "tip",
        title: "For the broader structure",
        text: "Our how to write a cover letter guide breaks down the full process and the mistakes to avoid. For shorter versions, see our short cover letter templates.",
      },
      { type: "h2", text: "How to use these examples" },
      {
        type: "p",
        text: "Don't copy any of them word for word. The reason they work is specificity — the named projects, real numbers, and concrete proof. Borrow the structure, swap in your real details, and tailor for every single application.",
      },
      {
        type: "p",
        text: "A great cover letter takes 30-60 minutes to write well. A bad one takes 5 minutes and gets you rejected. The math favors doing it right. Forge a cover letter that earns the read. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 16. Short cover letter (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "short-cover-letter",
    title: "How to Write a Short Cover Letter (with Templates)",
    metaDescription:
      "How to write a short cover letter that gets read. 5 templates for email, career changers, referrals, and more — plus examples you can adapt in 10 minutes.",
    category: "Cover Letters",
    keywords: [
      "short cover letter",
      "brief cover letter",
      "cover letter templates",
      "short cover letter examples",
      "quick cover letter",
      "email cover letter",
    ],
    excerpt:
      "Short cover letters work better than long ones. Here's how to write one that earns the read, plus 5 templates you can adapt in 10 minutes.",
    readTime: 7,
    author: "forgedCV Team",
    date: "2025-05-07",
    content: [
      {
        type: "p",
        text: "Short cover letters work better than long ones. Most recruiters skim a cover letter in 10 seconds or skip it entirely — so a tight, three-paragraph letter beats a sprawling essay every time.",
      },
      {
        type: "p",
        text: "Here's how to write a short cover letter that earns the full read, plus templates you can adapt in 10 minutes.",
      },
      { type: "h2", text: "How short should a short cover letter be?" },
      {
        type: "p",
        text: "Aim for 150-250 words — about half a page. Three short paragraphs: opening, evidence, close. Anything longer is asking the recruiter to do work they don't want to do.",
      },
      {
        type: "p",
        text: "Email cover letters can be even shorter. If you're sending the cover letter in the body of an email (with the resume attached), 100-150 words is ideal.",
      },
      { type: "h2", text: "The short cover letter template" },
      {
        type: "p",
        text: "Use this structure for almost any role:",
      },
      {
        type: "ol",
        items: [
          "Opening (2 sentences): Name the role and one specific reason you're interested",
          "Evidence (3-4 sentences): One concrete result that proves you can do the job",
          "Close (1-2 sentences): Ask for the interview",
        ],
      },
      { type: "h2", text: "Short cover letter template #1: Standard" },
      {
        type: "quote",
        text: "Hi [Name] — I'm writing to apply for the [Role] position at [Company]. I came across the role after [specific reason — read a blog post, saw a job posting, etc.], and it caught my eye because [one specific thing about the company or role].\n\nIn my current role, I [one concrete achievement with a number]. I see [Company] is trying to [specific challenge or goal from the job description], and I'd love to bring that experience to your team.\n\nWould love to chat — thanks for considering me.",
      },
      { type: "h2", text: "Short cover letter template #2: Email" },
      {
        type: "quote",
        text: "Hi [Name] — I'm applying for the [Role] at [Company] and wanted to send my resume directly. I've spent the last [X] years [doing relevant work], most recently [one specific achievement]. I'd love to learn more about the role and the team. Thanks for considering me — [Your name]. Resume attached.",
      },
      {
        type: "p",
        text: "Email cover letters should be scannable in one screen. No paragraphs over three sentences. The subject line should be clear: 'Application: [Role] — [Your Name]'.",
      },
      { type: "h2", text: "Short cover letter template #3: Career changer" },
      {
        type: "quote",
        text: "Hi [Name] — I'm writing to apply for the [Role] at [Company]. After [X] years in [old field], I'm transitioning into [new field], and the role feels like a strong fit for my transferable skills.\n\nIn my previous role, I [transferable achievement with a number]. I'm now [what you've done to prepare — certification, project, course]. I'd love to bring that lens to [Company].\n\nWould love to chat — thanks for considering me.",
      },
      {
        type: "tip",
        title: "The pivot story belongs here",
        text: "For the longer narrative, our career change at 30 guide walks through how to frame a career transition without apologizing for it.",
      },
      { type: "h2", text: "Short cover letter template #4: Referral" },
      {
        type: "quote",
        text: "Hi [Name] — [Mutual connection] suggested I reach out about the [Role] at [Company]. I've spent the last [X] years [doing relevant work], most recently [specific achievement]. I'd love to learn more about the role and how I could help. Thanks — [Your name].",
      },
      {
        type: "p",
        text: "Referral cover letters can be even shorter than standard ones — the referral does the credibility work for you.",
      },
      { type: "h2", text: "Short cover letter template #5: Internal promotion" },
      {
        type: "quote",
        text: "Hi [Name] — I'm writing to express interest in the [Role] position posted internally. In my [X] years at [Company], I've [one concrete achievement], and I see this role as a natural next step. I'd love to talk through how I could contribute at the next level.",
      },
      { type: "h2", text: "Short cover letter examples by situation" },
      { type: "h3", text: "Software engineer" },
      {
        type: "quote",
        text: "Hi Marcus — I'm applying for the senior backend role at Acme. I spent the last five years building distributed systems at Northwind, most recently leading a migration that cut p99 latency from 800ms to 180ms. Would love to chat — thanks for considering me.",
      },
      { type: "h3", text: "Marketing manager" },
      {
        type: "quote",
        text: "Hi Sam — the senior marketing role at Acme caught my eye. I've spent six years in B2B SaaS marketing, most recently growing organic traffic 280% through SEO and content. I'd love to bring that playbook to your team. Would love to chat.",
      },
      { type: "h3", text: "Customer success" },
      {
        type: "quote",
        text: "Hi Drew — I'm applying for the senior CSM role at Acme. I've managed $12M in ARR at Northwind with 98% gross retention and 112% net retention. Would love to talk about how I could help your book of business.",
      },
      { type: "h2", text: "What to leave out of a short cover letter" },
      {
        type: "ul",
        items: [
          "Your full work history — that's what the resume is for",
          "Generic statements about being a 'team player' or 'results-driven'",
          "Apologies for what you don't have",
          "Salary expectations — save for after the offer",
          "Long lists of skills — pick one or two relevant ones",
        ],
      },
      { type: "h2", text: "Common short cover letter mistakes" },
      {
        type: "ul",
        items: [
          "Going over 300 words — the whole point is brevity",
          "Using 'To Whom It May Concern' — find a name",
          "Recapping your resume — the recruiter already has it",
          "Skipping the specific reason you're interested in this company",
          "Forgetting to attach your resume (yes, really)",
        ],
      },
      {
        type: "tip",
        title: "Read it aloud",
        text: "Before you send, read your short cover letter aloud. If it takes more than 45 seconds to read, it's too long. Cut until it doesn't.",
      },
      { type: "h2", text: "When a short cover letter is the right call" },
      {
        type: "p",
        text: "Short cover letters work best when:",
      },
      {
        type: "ul",
        items: [
          "You're applying via email with the resume attached",
          "The job posting explicitly asks for a brief note",
          "You're sending a referral application",
          "You're applying to a startup or fast-moving company",
          "You have a strong resume and the cover letter is a formality",
        ],
      },
      {
        type: "p",
        text: "For roles where writing matters (content, communications, marketing) or where the company culture rewards depth, a slightly longer cover letter may serve you better. We cover that in our cover letter examples guide.",
      },
      { type: "h2", text: "The short cover letter checklist" },
      {
        type: "ol",
        items: [
          "150-250 words (100-150 for email)",
          "Three paragraphs: opening, evidence, close",
          "One specific reason you're interested in this company",
          "One concrete achievement with a number",
          "A clear ask for the interview",
          "Addressed to a real person",
          "No resume recap",
        ],
      },
      {
        type: "quote",
        text: "Brevity isn't laziness. It's respect for the recruiter's time — and confidence that your evidence speaks for itself.",
      },
      { type: "h2", text: "Send it and move on" },
      {
        type: "p",
        text: "A short cover letter should take 15-30 minutes to write well. Tailor for the company, double-check the name, attach the resume, and send. Then start the next application.",
      },
      {
        type: "p",
        text: "The candidates who get interviews aren't the ones who write the longest cover letters. They're the ones who write the sharpest. Forge a short cover letter that earns the read in 10 seconds. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 17. Interview questions (FLAGSHIP - NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "interview-questions",
    title: "Top 50 Interview Questions and How to Answer Them",
    metaDescription:
      "Top 50 interview questions and how to answer them. Sample frameworks for behavioral, technical, and common questions using STAR. Be ready for any interview.",
    category: "Interviews",
    keywords: [
      "interview questions",
      "common interview questions",
      "behavioral interview questions",
      "interview questions and answers",
      "star method interview",
      "job interview questions",
    ],
    excerpt:
      "Job interview questions follow predictable patterns. Here are the top 50, with sample answer frameworks for the ones that show up most.",
    readTime: 12,
    author: "forgedCV Team",
    date: "2025-05-14",
    content: [
      {
        type: "p",
        text: "Job interview questions follow predictable patterns. Once you know the patterns — and the frameworks for answering them — every interview gets easier. We've collected the top 50 interview questions, with sample answer frameworks for the ones that show up most.",
      },
      {
        type: "p",
        text: "We won't give you scripted answers to memorize. Recruiters can tell. Instead, you'll get the structure behind each answer, with examples you can adapt to your real experience.",
      },
      { type: "h2", text: "The 5 question categories every interview covers" },
      {
        type: "p",
        text: "Almost every interview question falls into one of five buckets:",
      },
      {
        type: "ul",
        items: [
          "Behavioral ('Tell me about a time when…') — STAR method territory",
          "Common / general ('Tell me about yourself') — openers and closers",
          "Technical / role-specific — tests your hard skills",
          "Situational / hypothetical ('What would you do if…') — judgment and problem-solving",
          "Personal / fit — culture, motivation, self-awareness",
        ],
      },
      {
        type: "tip",
        title: "Prepare your STAR stories",
        text: "Before any interview, prepare 5-7 STAR stories you can flex across behavioral questions. Our job interview preparation guide walks through this in detail.",
      },
      { type: "h2", text: "The STAR method, briefly" },
      {
        type: "p",
        text: "Most behavioral interview questions are best answered with STAR: Situation (1-2 sentences of context), Task (what you needed to do), Action (what you specifically did), Result (the outcome, with numbers if possible).",
      },
      {
        type: "p",
        text: "Practice your stories until you can tell each one in under 90 seconds. Long answers lose the recruiter.",
      },
      { type: "h2", text: "Common interview questions (with answer frameworks)" },
      { type: "h3", text: "1. Tell me about yourself" },
      {
        type: "p",
        text: "The 90-second version: present → past → future. Start with your current role, briefly cover how you got there, then say what you're looking for next.",
      },
      {
        type: "quote",
        text: "I'm a senior product manager at Northwind, where I lead our workflow tools portfolio. Before that I spent four years as an associate PM at a Series A startup, where I shipped my first product from zero to $2M ARR. I'm now looking for a senior PM role at a Series B+ company where I can help scale a product org.",
      },
      { type: "h3", text: "2. Why this company?" },
      {
        type: "p",
        text: "Don't say 'it seems like a great opportunity.' Name one specific thing — a product, a recent launch, a values decision — that made you apply.",
      },
      {
        type: "quote",
        text: "I've been following Acme's pivot into developer tools since your Series B, and the API platform work especially caught my eye. The combination of technical depth and the early-stage energy is exactly what I'm looking for.",
      },
      { type: "h3", text: "3. Why this role?" },
      {
        type: "p",
        text: "Tie the role to your career trajectory. Show it's a logical next step, not a random jump.",
      },
      {
        type: "quote",
        text: "I've spent the last three years as an IC and I'm ready to lead a team. This role's mix of IC work and team leadership feels like the right bridge — I can keep shipping while building the management muscle I want to develop.",
      },
      { type: "h3", text: "4. What are your strengths?" },
      {
        type: "p",
        text: "Pick two strengths, each backed by a one-sentence example. Skip 'team player' — pick something specific.",
      },
      {
        type: "quote",
        text: "My two strongest are stakeholder alignment and writing. On alignment: I led a six-month project where I had to get product, engineering, and legal on the same page about a sensitive feature. On writing: I maintain our team's decision logs, which the whole org uses for context.",
      },
      { type: "h3", text: "5. What's your biggest weakness?" },
      {
        type: "p",
        text: "Pick a real weakness — not 'I work too hard' — and say what you're doing about it.",
      },
      {
        type: "quote",
        text: "I've historically struggled with delegating — I'd rather do it myself than explain it. Over the last year I've been deliberately handing off projects earlier, even when it's uncomfortable, and it's made my team stronger and freed me up for higher-leverage work.",
      },
      { type: "h2", text: "Behavioral interview questions (with STAR frameworks)" },
      { type: "h3", text: "6. Tell me about a time you led a project" },
      {
        type: "p",
        text: "Pick a project with a clear scope, a team, and a measurable result. Walk through STAR. Focus on your role, not the team's.",
      },
      {
        type: "quote",
        text: "Situation: Our support team was drowning in tickets after a pricing change. Task: I needed to reduce ticket volume without hiring. Action: I built a self-serve FAQ from the top 20 ticket topics and embedded it in the billing flow. Result: Ticket volume dropped 35% in two months, CSAT went up 6 points.",
      },
      { type: "h3", text: "7. Describe a conflict with a coworker" },
      {
        type: "p",
        text: "Don't pretend you've never had one. Pick a real disagreement, show how you resolved it, and focus on what you learned.",
      },
      {
        type: "quote",
        text: "A teammate and I disagreed on whether to ship a feature with known bugs or delay the release. I proposed we quantify the bug impact together — turned out two of the three affected only 1% of users. We shipped with a fix for the third, on time. The lesson: get specific before you take a position.",
      },
      { type: "h3", text: "8. Tell me about a failure" },
      {
        type: "p",
        text: "Pick a real failure, not a humblebrag. Show what you learned and what you do differently now.",
      },
      {
        type: "quote",
        text: "I shipped a feature without enough user research and we had to roll it back within a week. It cost the team two weeks of rework. The lesson I took: even when stakeholders push for speed, I now insist on at least one round of user testing before shipping anything user-facing.",
      },
      { type: "h3", text: "9. Describe a time you influenced without authority" },
      {
        type: "p",
        text: "Show how you persuaded someone who didn't report to you — through evidence, relationships, or shared goals.",
      },
      {
        type: "quote",
        text: "I needed engineering to prioritize a UX fix they saw as low-impact. I pulled the data showing the issue was causing 12% of support tickets, then framed the fix as a clear ROI for engineering. They picked it up the next sprint.",
      },
      { type: "h3", text: "10. Tell me about a time you shipped under a tight deadline" },
      {
        type: "p",
        text: "Pick a story where you made smart tradeoffs to hit the deadline — not where you worked 80 hours and burned out.",
      },
      {
        type: "quote",
        text: "We had a launch date we couldn't move and a feature list that didn't fit. I proposed cutting two of the lower-impact features and shipping them in v1.1. We hit the date, the launch landed well, and the cut features shipped two weeks later with no customer pushback.",
      },
      { type: "h2", text: "Technical interview questions" },
      { type: "h3", text: "11. Walk me through how you would design X" },
      {
        type: "p",
        text: "Talk through your thinking out loud. The process matters more than the final answer. Ask clarifying questions first.",
      },
      {
        type: "p",
        text: "For engineering: clarify requirements, sketch the system at a high level, then drill into components. For product: clarify the user and problem, propose a solution, then discuss tradeoffs and metrics.",
      },
      { type: "h3", text: "12. Tell me about a technical decision you made that turned out to be wrong" },
      {
        type: "p",
        text: "Show you can evaluate past decisions honestly. Pick a real one, explain your reasoning at the time, and explain what you'd do differently with the benefit of hindsight.",
      },
      { type: "h2", text: "Situational interview questions" },
      { type: "h3", text: "13. What would you do in your first 30 days?" },
      {
        type: "p",
        text: "Most hiring managers want to hear: listen, learn, ship something small, build relationships. Don't promise to overhaul everything in week one.",
      },
      {
        type: "quote",
        text: "I'd spend the first two weeks listening — meeting the team, understanding the current state, and learning the systems. By week three I'd aim to ship something small to build trust, and by day 30 I'd have a 90-day plan to discuss with you.",
      },
      { type: "h3", text: "14. How would you handle a stakeholder who disagrees with your recommendation?" },
      {
        type: "p",
        text: "Show that you'd seek to understand their concern first, then bring evidence — not authority.",
      },
      {
        type: "p",
        text: 'Strong answer framework: "I\'d start by asking them to walk me through their concern — usually there\'s context I\'m missing. Then I\'d bring whatever data or examples could help us converge on a decision. If we still disagreed, I\'d escalate to a decision-maker rather than argue in circles."',
      },
      { type: "h2", text: "Personal and fit questions" },
      { type: "h3", text: "15. Why are you leaving your current job?" },
      {
        type: "p",
        text: "Never badmouth. Frame it as moving toward something, not away from something.",
      },
      {
        type: "quote",
        text: "I've learned a lot at Northwind and I'm grateful for the experience, but I'm looking for a role with more scope and a team I can help scale. This role at Acme feels like the natural next step.",
      },
      { type: "h3", text: "16. Where do you see yourself in five years?" },
      {
        type: "p",
        text: "Honest but aligned with the role. You don't need a 5-year plan, but you should have a direction.",
      },
      {
        type: "quote",
        text: "I want to be a staff engineer — building systems at scale and mentoring more junior engineers. The work I'd do in this role over the next couple of years would be a direct step in that direction.",
      },
      { type: "h3", text: "17. What are your salary expectations?" },
      {
        type: "p",
        text: "Deflect if you can — turn it back to their range. If pressed, give a range with your target at the bottom. Our salary negotiation guide covers this in depth.",
      },
      { type: "h2", text: "Questions you should ask them" },
      {
        type: "p",
        text: "'Do you have any questions for us?' is a test, not a formality. Have 5-7 ready. You'll usually get to ask 2-3.",
      },
      {
        type: "ul",
        items: [
          "What does success look like in this role at 30, 90, and 180 days?",
          "What's the biggest challenge the team is facing right now?",
          "How does the team make decisions — consensus, lead, or top-down?",
          "What's the trajectory of the person who previously held this role?",
          "What would surprise a new hire about the culture?",
          "How is performance measured, and how often?",
          "What are you most excited about for the company this year?",
        ],
      },
      {
        type: "tip",
        title: "Save salary questions for later",
        text: "Hold salary, benefits, and remote-work questions for after the offer — or for when they bring it up. More on this in our salary negotiation guide.",
      },
      { type: "h2", text: "Questions to avoid" },
      {
        type: "ul",
        items: [
          "'What does your company do?' (you should know)",
          "'How much does it pay?' (too early)",
          "'Do I have to work weekends?' (sounds like a red flag)",
          "'How quickly can I get promoted?' (sounds entitled)",
          "Anything you could have googled",
        ],
      },
      { type: "h2", text: "Technical and case interview formats" },
      {
        type: "p",
        text: "Different formats reward different prep:",
      },
      {
        type: "ul",
        items: [
          "Coding interview: talk through your thinking out loud; the process matters more than the final answer",
          "System design: clarify requirements, sketch high-level, then drill in",
          "Case interview: structure the problem, ask clarifying questions, walk through your math",
          "Take-home: budget 2-4 hours, not 12 — a clean submission beats an over-engineered one",
        ],
      },
      { type: "h2", text: "How to handle questions you don't know" },
      {
        type: "p",
        text: "Don't bluff. Say 'I don't know, but here's how I'd figure it out' and walk through your thinking. Recruiters respect honesty; they detect bluster instantly.",
      },
      {
        type: "quote",
        text: "I haven't worked with that specific tool, but from what I understand it's similar to [tool you know]. I'd start by reading the docs, looking for an equivalent pattern, and asking a teammate who's used it before.",
      },
      { type: "h2", text: "The day-of checklist" },
      {
        type: "ul",
        items: [
          "Test your tech (camera, mic, lighting) 30 minutes before for video interviews",
          "Arrive 10-15 minutes early for in-person",
          "Bring 2-3 printed resume copies for in-person",
          "Have your STAR stories and questions ready",
          "Send a thank-you email within 24 hours (templates in our thank-you email guide)",
        ],
      },
      { type: "h2", text: "Practice out loud" },
      {
        type: "p",
        text: "Reading your answers silently doesn't prepare you to say them. Practice out loud — ideally with a friend playing the interviewer. The first time you say an answer out loud, it'll sound worse than you expected. The fifth time, it'll sound natural.",
      },
      {
        type: "p",
        text: "The candidates who get offers aren't always the most qualified. They're the most prepared. Run through these questions, prepare your STAR stories, and walk in ready. Forge the kind of interview performance that earns the offer. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 18. Thank you email after interview (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "thank-you-email-after-interview",
    title: "Thank You Email After Interview: 10 Templates That Work",
    metaDescription:
      "Thank you email after interview: 10 ready-to-copy templates that work. Standard, detailed, panel, technical, and short options. Plus what to never include.",
    category: "Interviews",
    keywords: [
      "thank you email after interview",
      "interview thank you note",
      "post interview email",
      "thank you letter after interview",
      "follow up email after interview",
      "interview follow up",
    ],
    excerpt:
      "A thank-you email takes five minutes to write and meaningfully improves your odds. Here are 10 templates you can adapt for any situation.",
    readTime: 7,
    author: "forgedCV Team",
    date: "2025-05-21",
    content: [
      {
        type: "p",
        text: "A thank-you email after an interview takes five minutes to write and meaningfully improves your odds. Most candidates skip it. The ones who send it stand out — and give the interviewer a clean reason to reply with next steps.",
      },
      {
        type: "p",
        text: "Here's how to write a thank-you email after an interview, plus 10 templates you can adapt for any situation.",
      },
      { type: "h2", text: "When to send a thank-you email" },
      {
        type: "p",
        text: "Within 24 hours of the interview. Same day is ideal. After 48 hours, the moment has passed and the email feels like an afterthought.",
      },
      {
        type: "p",
        text: "Send a separate email to each person who interviewed you, if you can. Don't CC everyone — it reads as lazy. Personalize each one with something specific from your conversation.",
      },
      { type: "h2", text: "What a thank-you email should do" },
      {
        type: "p",
        text: "Three things: thank them for their time, reference one specific thing you discussed, and reiterate your interest. That's it. Three to five sentences. No essay.",
      },
      {
        type: "tip",
        title: "The specific reference is what makes it work",
        text: "'Thanks for the great conversation about [topic]' proves you were listening and gives the interviewer a hook to reply.",
      },
      { type: "h2", text: "Thank-you email template #1: Standard" },
      {
        type: "quote",
        text: "Hi [Name] — thanks for taking the time to meet with me today. I really enjoyed our conversation about [specific topic you discussed], and it made me even more excited about the [Role] opportunity. Looking forward to next steps — thanks again.",
      },
      { type: "h2", text: "Thank-you email template #2: Detailed" },
      {
        type: "quote",
        text: "Hi [Name] — thanks for the time today. Our conversation about [specific topic] got me thinking about [a follow-up thought or idea], and I'd love to dig into that further if it'd be helpful. I'm really excited about the [Role] and the work your team is doing. Looking forward to hearing from you.",
      },
      { type: "h2", text: "Thank-you email template #3: After a panel interview" },
      {
        type: "p",
        text: "Send one to each interviewer, personalized:",
      },
      {
        type: "quote",
        text: "Hi [Name] — thanks for being part of my interview today. I really appreciated your question about [specific question they asked] — it pushed me to think harder about [topic]. Excited about the [Role] and looking forward to next steps.",
      },
      { type: "h2", text: "Thank-you email template #4: After a phone screen" },
      {
        type: "quote",
        text: "Hi [Name] — thanks for the call today. The conversation gave me a much clearer picture of the [Role] and the team, and I'm even more interested than I was going in. Looking forward to next steps.",
      },
      { type: "h2", text: "Thank-you email template #5: After a final-round interview" },
      {
        type: "quote",
        text: "Hi [Name] — thanks for the time today, and for the chance to meet the broader team. The conversation about [specific topic] reinforced for me that this is the right next step. I'd love to bring my experience to [Company] and am looking forward to hearing your decision.",
      },
      { type: "h2", text: "Thank-you email template #6: After a technical interview" },
      {
        type: "quote",
        text: "Hi [Name] — thanks for the technical interview today. I appreciated the question about [specific problem] — it pushed me to think through [topic] more carefully. (I realized afterward that [a sharper solution or follow-up thought], if it's helpful.) Excited about the role and looking forward to next steps.",
      },
      {
        type: "tip",
        title: "Don't overdo the post-interview insight",
        text: "One sentence is fine. A long re-answer to a question you bombed reads as defensive.",
      },
      { type: "h2", text: "Thank-you email template #7: After a video interview" },
      {
        type: "quote",
        text: "Hi [Name] — thanks for the time today. I really enjoyed our conversation about [specific topic], and it gave me a clearer picture of how the team works. Excited about the [Role] and looking forward to next steps.",
      },
      { type: "h2", text: "Thank-you email template #8: When you forgot to send one" },
      {
        type: "p",
        text: "Better late than never, up to about 5 days:",
      },
      {
        type: "quote",
        text: "Hi [Name] — I realized I didn't send a proper thank-you after our conversation [X days ago]. I really enjoyed our discussion about [specific topic], and I'm excited about the [Role]. I know you're likely still in the process — happy to answer any follow-up questions in the meantime. Thanks again.",
      },
      { type: "h2", text: "Thank-you email template #9: With a follow-up question" },
      {
        type: "quote",
        text: "Hi [Name] — thanks again for the time today. Our conversation about [topic] made me curious about [a related question], if you have a moment to share. Either way, I'm excited about the role and looking forward to next steps.",
      },
      { type: "h2", text: "Thank-you email template #10: Short and warm" },
      {
        type: "quote",
        text: "Hi [Name] — thanks for the great conversation today. I'm really excited about the [Role] and the work your team is doing. Looking forward to next steps.",
      },
      { type: "h2", text: "What to never include in a thank-you email" },
      {
        type: "ul",
        items: [
          "An apology for your performance ('I know I struggled with the technical question…')",
          "A long re-answer to a question you bombed",
          "A question about salary, benefits, or remote work",
          "A pushy ask for the timeline ('When can I expect to hear back?')",
          "A generic template with the wrong name or company",
        ],
      },
      { type: "h2", text: "Subject lines for thank-you emails" },
      {
        type: "p",
        text: "Keep it simple and clear. The recruiter should know exactly what the email is before they open it.",
      },
      {
        type: "ul",
        items: [
          "\"Thank you — [Your Name]\"",
          "\"Thanks for the interview — [Your Name]\"",
          "\"Following up: [Role] interview — [Your Name]\"",
          "\"Thank you from [Your Name]\"",
        ],
      },
      { type: "h2", text: "Should you send a thank-you email to every interviewer?" },
      {
        type: "p",
        text: "Yes, if you can. Get business cards or LinkedIn profiles during the interview (or ask the recruiter for the list afterward). Personalize each one with something specific that person said or asked.",
      },
      {
        type: "p",
        text: "If you only had one interviewer, one email is fine. If you had a panel of five, five short personalized emails are better than one group message.",
      },
      { type: "h2", text: "What if they don't reply?" },
      {
        type: "p",
        text: "Silence after a thank-you email doesn't mean rejection. Interviewers are busy, and many forget to reply. If you haven't heard back after the timeline they gave you, a single polite follow-up is fine. After that, move on.",
      },
      {
        type: "quote",
        text: "Hi [Name] — wanted to follow up on the [Role] interview. I'm still really interested and would love to know if there are any updates. Either way, thanks again for the time.",
      },
      { type: "h2", text: "Thank-you email checklist" },
      {
        type: "ol",
        items: [
          "Sent within 24 hours (same day is best)",
          "Addressed to the specific interviewer by name",
          "References one specific thing you discussed",
          "Reiterates your interest in the role",
          "Three to five sentences — no essay",
          "Subject line is clear",
          "No apology, no re-answering, no salary questions",
        ],
      },
      {
        type: "tip",
        title: "For the broader interview process",
        text: "Our job interview preparation guide has the full checklist — research, STAR stories, questions to ask, and day-of logistics.",
      },
      { type: "h2", text: "Thank-you emails aren't optional" },
      {
        type: "p",
        text: "Sending a thank-you email is one of the easiest ways to stand out from candidates who didn't bother. It signals follow-through, attention to detail, and genuine interest. Five minutes of writing can be the difference between an offer and a 'we went with another candidate' email.",
      },
      {
        type: "p",
        text: "Send the email. Make it specific. Move on with your day. Forge a follow-up that leaves a clean final impression. ✨",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 19. Two weeks notice letter (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "two-weeks-notice-letter",
    title: "Two Weeks Notice Letter: Templates and Examples",
    metaDescription:
      "Two weeks notice letter templates and examples — standard, short, grateful, and retiring. Plus how to deliver it and what to never include when you resign.",
    category: "Career Change",
    keywords: [
      "two weeks notice letter",
      "two weeks notice",
      "resignation letter",
      "how to write a notice letter",
      "resignation email",
      "notice letter template",
    ],
    excerpt:
      "Quitting your job the right way matters more than people admit. Here's how to write a two weeks notice letter — plus four templates for any situation.",
    readTime: 9,
    author: "forgedCV Team",
    date: "2025-05-28",
    content: [
      {
        type: "p",
        text: "Quitting your job the right way matters more than people admit. A clean two weeks notice letter protects your references, keeps bridges intact, and sets you up for a smooth exit. A messy one burns bridges you'll wish you had three years later.",
      },
      {
        type: "p",
        text: "Here's how to write a two weeks notice letter — plus four templates you can adapt for any situation.",
      },
      { type: "h2", text: "What a two weeks notice letter should include" },
      {
        type: "p",
        text: "Keep it short and professional. Three things only: your resignation, your final date, and an offer to help with the transition. That's it.",
      },
      {
        type: "ul",
        items: [
          "A clear statement that you're resigning",
          "Your final date of employment (typically two weeks from today)",
          "A brief thanks for the opportunity",
          "An offer to help with the transition",
        ],
      },
      {
        type: "p",
        text: "Don't include your reasons for leaving, your grievances, your new job, or your salary. Save those for the in-person conversation (which should happen before the letter).",
      },
      { type: "h2", text: "Template #1: Standard" },
      {
        type: "quote",
        text: "Dear [Manager's Name],\n\nPlease accept this letter as formal notice that I'm resigning from my position as [Role] at [Company]. My last day will be [Date, two weeks from today].\n\nThank you for the opportunity to work here. I've appreciated the chance to [one specific thing you valued], and I'm grateful for the experience.\n\nI'll do everything I can to ensure a smooth transition over the next two weeks, including wrapping up [specific project] and documenting [specific process] for whoever takes over.\n\nBest,\n[Your Name]",
      },
      { type: "h2", text: "Template #2: Short and minimal" },
      {
        type: "quote",
        text: "Dear [Manager's Name],\n\nI'm writing to resign from my position as [Role] at [Company], effective [Date].\n\nThank you for the opportunity. I'll do everything I can to ensure a smooth transition over the next two weeks.\n\nBest,\n[Your Name]",
      },
      {
        type: "tip",
        title: "Short is fine",
        text: "Sometimes a minimal letter is the right call. You don't owe a long letter — especially in a job that wasn't a great fit.",
      },
      { type: "h2", text: "Template #3: Grateful" },
      {
        type: "quote",
        text: "Dear [Manager's Name],\n\nPlease accept this letter as formal notice of my resignation from [Role] at [Company]. My last day will be [Date].\n\nI want to sincerely thank you for the [X] years we've worked together. The opportunity to [specific project or growth area] has shaped my career in ways I'll always be grateful for. I've learned more than I can list — from you, from the team, and from the work itself.\n\nI'm committed to a smooth transition. Over the next two weeks, I'll [wrap up X, document Y, train Z on whatever they need].\n\nI hope we stay in touch. Thank you again.\n\nWarmly,\n[Your Name]",
      },
      { type: "h2", text: "Template #4: Retiring" },
      {
        type: "quote",
        text: "Dear [Manager's Name],\n\nAfter [X] years at [Company], I'm writing to formally announce my retirement, effective [Date].\n\nIt's been a privilege to work here. I'm especially proud of [one or two specific things you contributed], and grateful for the colleagues and mentors who made the work meaningful.\n\nOver the next two weeks, I'll do everything I can to ensure a smooth handoff of [specific responsibilities]. I'm also happy to be available as a resource after [Date] if it would help.\n\nThank you for everything.\n\nWith gratitude,\n[Your Name]",
      },
      { type: "h2", text: "How to deliver a two weeks notice letter" },
      {
        type: "p",
        text: "Tell your manager in person (or on video) first. Then follow up with the letter as an email or printed document. Never let the letter be how they find out.",
      },
      {
        type: "ol",
        items: [
          "Schedule a 1:1 with your manager",
          "Tell them in plain language: 'I'm giving my two weeks notice. My last day will be [Date].'",
          "Hand them the letter or send it by email immediately after the conversation",
          "Don't tell coworkers until your manager knows",
          "Be prepared for a counter-offer — decide in advance how you'll respond",
        ],
      },
      { type: "h2", text: "What to say in the resignation conversation" },
      {
        type: "p",
        text: "Keep it short and professional. You don't need to justify your decision, but a brief, neutral reason helps.",
      },
      {
        type: "quote",
        text: "I wanted to let you know I'm resigning. My last day will be [Date]. I've accepted a role that's a closer fit for where I want my career to go. I've appreciated my time here, and I'm committed to a smooth transition.",
      },
      {
        type: "tip",
        title: "Don't vent",
        text: "Don't list grievances. Don't tell them how to fix the company. Save the honest feedback for a trusted friend — or for an exit interview, if the company does them and you choose to share.",
      },
      { type: "h2", text: "Common two weeks notice mistakes" },
      {
        type: "ul",
        items: [
          "Telling coworkers before your manager",
          "Using the letter to air grievances",
          "Skipping the in-person conversation",
          "Giving less than two weeks (unless contractually allowed)",
          "Resigning in anger — sleep on it first",
          "Refusing to do transition work during your final two weeks",
        ],
      },
      { type: "h2", text: "How much notice should you actually give?" },
      {
        type: "p",
        text: "Two weeks is the standard in the US. Some contracts require more (30, 60, or 90 days for senior roles). Check your offer letter and any employment agreement before you commit to a date.",
      },
      {
        type: "p",
        text: "If you're in a critical role or a small team, you may want to offer more — three or four weeks — to maintain the relationship. If your employer has been toxic or you're at risk of being walked out, two weeks is plenty.",
      },
      {
        type: "tip",
        title: "Be ready to be walked out",
        text: "Some employers walk employees out the day they give notice, especially in roles with access to sensitive data. Be prepared for that possibility — have your files backed up (personal copies only of your own work), and don't take it personally if it happens.",
      },
      { type: "h2", text: "What to do during your final two weeks" },
      {
        type: "ol",
        items: [
          "Document your current projects and processes",
          "Train whoever will take over your work",
          "Clean up your files and shared drives",
          "Say goodbye to colleagues personally",
          "Leave your contact info with people you want to stay in touch with",
          "Don't slack off — your final weeks set the tone for how you're remembered",
        ],
      },
      { type: "h2", text: "Resignation email vs letter" },
      {
        type: "p",
        text: "An email is fine for most modern roles. A printed letter is more formal and traditional — appropriate for very senior roles, law firms, or old-school corporate environments. Either works. The content matters more than the format.",
      },
      {
        type: "p",
        text: "If you email, send it to your manager (and CC HR if your company requires it). Don't BCC anyone. Don't send it to a distribution list.",
      },
      { type: "h2", text: "What if they counter-offer?" },
      {
        type: "p",
        text: "Many managers will counter-offer — more money, a promotion, flexible work. Decide in advance whether you'd accept. Most career coaches advise against it: the reasons you decided to leave usually don't go away with a raise, and accepting a counter often delays the inevitable by 6-12 months.",
      },
      {
        type: "p",
        text: "If you do accept, get the new terms in writing. And be honest with yourself about whether you're staying for the right reasons.",
      },
      { type: "h2", text: "Two weeks notice checklist" },
      {
        type: "ul",
        items: [
          "Notice given to manager in person/video first",
          "Formal letter or email sent immediately after",
          "Final date confirmed (and aligns with your contract)",
          "Transition plan shared with manager",
          "Personal files backed up (your own work only)",
          "Coworkers told after manager",
          "No venting, no grievances, no bridges burned",
        ],
      },
      {
        type: "quote",
        text: "How you leave a job is how people remember you. Make it clean, professional, and gracious — even if the job didn't deserve it. Your future self will thank you.",
      },
      { type: "h2", text: "Leaving well is part of the career" },
      {
        type: "p",
        text: "Every job you leave becomes a reference, a network connection, and a chapter in your story. Quitting well isn't about the company — it's about protecting your own reputation and the relationships you've built.",
      },
      {
        type: "p",
        text: "For the broader picture on career transitions, our career change at 30 guide walks through what comes next. Forge an exit that opens doors rather than closing them. ⚒️",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 20. Federal resume (NEW - Task SEO-A)
  // ---------------------------------------------------------------------------
  {
    slug: "federal-resume",
    title: "How to Write a Federal Resume (Complete Guide)",
    metaDescription:
      "How to write a federal resume for USAJobs. Complete guide to format, length, KSAs, and the details private-sector resumes skip — with examples and a checklist.",
    category: "Resumes",
    keywords: [
      "federal resume",
      "federal resume format",
      "usajobs resume",
      "ksa resume",
      "government resume",
      "federal resume writing",
    ],
    excerpt:
      "Federal resumes aren't like private-sector resumes. Here's how to write one that survives the USAJobs system and lands on a hiring manager's desk.",
    readTime: 9,
    author: "forgedCV Team",
    date: "2025-06-04",
    content: [
      {
        type: "p",
        text: "Federal resumes aren't like private-sector resumes. They're longer, more detailed, and follow specific format rules set by the Office of Personnel Management. Submit a one-page corporate resume to a USAJobs posting and you'll get rejected before a human ever sees it.",
      },
      {
        type: "p",
        text: "Here's how to write a federal resume that survives the USAJobs system and lands on a hiring manager's desk.",
      },
      { type: "h2", text: "What makes a federal resume different" },
      {
        type: "p",
        text: "Federal resumes are typically 3-5 pages long. They require more detail per job, including hours per week, salary, supervisor contact info, and a fuller description of your duties and accomplishments. The format is dictated by what the federal hiring system expects.",
      },
      {
        type: "p",
        text: "Private-sector conventions — one page, tight bullets, design-forward layout — actively work against you here.",
      },
      { type: "h2", text: "The federal resume format" },
      {
        type: "p",
        text: "Federal resumes follow a specific structure. In order:",
      },
      {
        type: "ol",
        items: [
          "Header: name, contact info, citizenship status",
          "Summary (optional but recommended)",
          "Work experience: each role with full detail (see below)",
          "Education: degrees, schools, dates, relevant coursework",
          "Skills, certifications, and clearances",
          "References (sometimes required upfront)",
        ],
      },
      { type: "h2", text: "Federal work experience: what to include per role" },
      {
        type: "p",
        text: "Each job entry on a federal resume needs more than a corporate resume would. For each role, include:",
      },
      {
        type: "ul",
        items: [
          "Job title",
          "Agency or company name and location",
          "Dates of employment (month/year to month/year)",
          "Hours per week (e.g., '40 hours/week')",
          "Salary (e.g., 'GS-13, Step 5' or '$95,000/year')",
          "Supervisor's name and phone number (with 'may be contacted' or 'do not contact')",
          "Whether the job was federal or private-sector",
          "3-6 detailed bullets describing duties and accomplishments",
        ],
      },
      {
        type: "tip",
        title: "Hours per week matters",
        text: "The hours-per-week detail sounds ridiculous, but federal hiring uses it to calculate your total experience. Without it, the system may not credit you for the role.",
      },
      { type: "h2", text: "KSAs: knowledge, skills, and abilities" },
      {
        type: "p",
        text: "Some federal postings still ask for KSA narratives — short essays (1/2 to 1 page each) describing how you've demonstrated a specific competency. Many agencies have moved away from separate KSA documents and now ask you to embed KSA evidence in your resume bullets, but you'll still see them in some postings.",
      },
      {
        type: "p",
        text: "When KSAs are required, treat them like mini STAR stories. For each KSA, write 1-2 paragraphs describing a specific situation where you demonstrated that competency, with measurable results.",
      },
      {
        type: "p",
        text: "If the posting says KSAs are evaluated based on your resume, build your bullets to explicitly show each required KSA. Use the exact phrasing from the job posting.",
      },
      { type: "h2", text: "Reading a USAJobs posting" },
      {
        type: "p",
        text: "Before you start writing, read the posting carefully. Federal postings include:",
      },
      {
        type: "ul",
        items: [
          "Duties: what the role actually does day to day",
          "Requirements: must-haves, including education, experience, and clearances",
          "Specialized experience: specific experience the role requires (often in months or years)",
          "Grade and pay scale (GS-7, GS-12, etc.) with the salary range",
          "Required documents (resume, transcripts, SF-50, etc.)",
        ],
      },
      {
        type: "p",
        text: "Your resume has to explicitly show you meet every requirement. Federal hiring is rules-driven — if the posting says 'one year of specialized experience equivalent to GS-11,' your resume needs to show that exact thing, in those terms.",
      },
      { type: "h2", text: "Federal resume keywords and language" },
      {
        type: "p",
        text: "Federal hiring uses keyword matching similar to ATS. Mirror the language of the posting exactly.",
      },
      {
        type: "ul",
        items: [
          "Use the exact phrasing from the posting's 'Duties' and 'Requirements' sections",
          "Spell out acronyms the first time you use them",
          "Use the government's preferred terms (e.g., 'personnel' instead of 'HR,' 'supervisory' instead of 'management')",
          "If the posting lists specific tools, frameworks, or regulations, name them in your bullets",
        ],
      },
      {
        type: "tip",
        title: "Treat the Specialized Experience section as a checklist",
        text: "Federal postings often include a 'Specialized Experience' section that reads like a checklist. Make sure each item on the list appears in your resume.",
      },
      { type: "h2", text: "Federal resume length and what to include" },
      {
        type: "p",
        text: "A federal resume is typically 3-5 pages. Don't try to compress it to one — the format requires the detail.",
      },
      {
        type: "p",
        text: "Include:",
      },
      {
        type: "ul",
        items: [
          "Every relevant job from the last 10 years (federal and private-sector)",
          "Education, including relevant coursework and GPA (if 3.0+)",
          "Certifications and licenses",
          "Security clearances (with level and dates)",
          "Awards and recognition",
          "Volunteer work (counts toward experience in federal hiring)",
          "Training and professional development",
        ],
      },
      { type: "h2", text: "Federal resume example: a sample bullet" },
      {
        type: "p",
        text: "Compare a corporate resume bullet to a federal one:",
      },
      {
        type: "quote",
        text: "Corporate: 'Led a 6-person team that shipped 12 features in Q2, cutting ticket resolution time by 40%.'",
      },
      {
        type: "quote",
        text: "Federal: 'Served as team lead for a 6-person customer support team at [Agency], supervising day-to-day operations and coordinating across three regional offices. Managed a ticket volume of approximately 800 per week. Implemented a new triage process that reduced average ticket resolution time by 40% over six months, from 4.2 days to 2.5 days. Prepared weekly performance reports for senior leadership. Reviewed and approved time and attendance for direct reports. (40 hours/week, GS-12, $95,000/year, Supervisor: Jane Smith, 555-123-4567, may be contacted.)'",
      },
      {
        type: "p",
        text: "The federal bullet is longer, more specific, and includes all the administrative detail the hiring system requires. It's not better or worse — it's a different document for a different system.",
      },
      { type: "h2", text: "Using the USAJobs Resume Builder" },
      {
        type: "p",
        text: "USAJobs has a built-in Resume Builder that walks you through the required fields. For first-time federal applicants, it's the safest option — you won't miss a required field, and the formatting will be compatible with every agency's system.",
      },
      {
        type: "p",
        text: "You can also upload your own resume document (Word or PDF), but it needs to include all the same information. If you go this route, follow the format above carefully.",
      },
      { type: "h2", text: "Common federal resume mistakes" },
      {
        type: "ul",
        items: [
          "Submitting a one-page corporate resume (will be auto-rejected)",
          "Omitting hours per week or salary",
          "Leaving off supervisor contact info",
          "Not explicitly showing you meet the specialized experience requirement",
          "Using vague language ('managed projects') instead of specific duties",
          "Skipping volunteer work or relevant training",
          "Forgetting to include your citizenship status (required)",
        ],
      },
      { type: "h2", text: "Federal resume vs private-sector resume" },
      {
        type: "p",
        text: "Keep two versions of your resume if you're applying to both federal and private-sector roles. The federal resume is too long and detailed for a corporate recruiter; the corporate resume is too thin for federal hiring.",
      },
      {
        type: "p",
        text: "For the private-sector version, see our resume format guide. For federal applications, follow the structure above.",
      },
      { type: "h2", text: "The federal hiring process: what to expect" },
      {
        type: "p",
        text: "Federal hiring is slower than private-sector hiring — typically 2-6 months from application to offer. After you submit, you may wait weeks before hearing back. The process often includes:",
      },
      {
        type: "ul",
        items: [
          "Initial application and resume submission",
          "Eligibility and qualifications review",
          "Reference checks",
          "Additional assessments (writing samples, structured interviews)",
          "Tentative offer (subject to background check)",
          "Background investigation (especially for clearanced roles)",
          "Final offer",
        ],
      },
      {
        type: "p",
        text: "Patience is part of the process. Don't assume silence means rejection — federal hiring timelines are just slower.",
      },
      { type: "h2", text: "Federal resume checklist" },
      {
        type: "ol",
        items: [
          "3-5 pages, full detail per role",
          "Hours per week, salary, and supervisor info for each job",
          "Citizenship status in header",
          "Specialized experience explicitly addressed",
          "Language mirrors the job posting",
          "Education, certifications, and clearances listed",
          "Volunteer work included (if relevant)",
          "Saved as PDF or submitted via USAJobs Resume Builder",
        ],
      },
      {
        type: "quote",
        text: "Federal resumes reward thoroughness over polish. The system isn't looking for clever — it's looking for complete.",
      },
      { type: "h2", text: "Federal resume writing: the long game" },
      {
        type: "p",
        text: "Writing a federal resume is more work than a corporate one, but the payoff is real. Federal jobs offer stability, benefits, and a clear pay structure that private-sector roles often can't match. The investment in getting the resume right pays off across a multi-decade career.",
      },
      {
        type: "p",
        text: "Take the time. Read the posting. Follow the format. Forge a federal resume that earns the interview. ⚒️",
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
