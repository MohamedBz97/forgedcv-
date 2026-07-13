"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RotateCcw,
  Ruler,
  Target,
  Mail,
  ListChecks,
  ScanText,
  Hash,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Analysis data + helpers                                                   */
/* -------------------------------------------------------------------------- */

// 60+ strong action verbs (lowercased). Matched against the FIRST word of each
// bullet point (after stripping common bullet markers).
const ACTION_VERBS = new Set<string>([
  "led", "lead", "built", "build", "shipped", "ship", "increased", "increase",
  "reduced", "reduce", "designed", "design", "launched", "launch", "created",
  "create", "developed", "develop", "implemented", "implement", "managed",
  "manage", "drove", "drive", "delivered", "deliver", "improved", "improve",
  "optimized", "optimize", "architected", "architect", "engineered", "engineer",
  "directed", "direct", "founded", "found", "established", "establish", "owned",
  "own", "spearheaded", "spearhead", "executed", "execute", "generated",
  "generate", "achieved", "achieve", "accelerated", "accelerate", "transformed",
  "transform", "automated", "automate", "streamlined", "streamline", "scaled",
  "scale", "doubled", "double", "tripled", "triple", "cut", "saved", "save",
  "grew", "grow", "expanded", "expand", "coordinated", "coordinate", "planned",
  "plan", "negotiated", "negotiate", "mentored", "mentor", "trained", "train",
  "supervised", "supervise", "hired", "hire", "partnered", "partner",
  "collaborated", "collaborate", "researched", "research", "analyzed",
  "analyze", "tested", "test", "deployed", "deploy", "migrated", "migrate",
  "integrated", "integrate", "maintained", "maintain", "supported", "support",
  "presented", "present", "wrote", "write", "authored", "author", "published",
  "publish", "taught", "teach", "instructed", "instruct", "advised", "advise",
  "consulted", "consult", "budgeted", "budget", "modeled", "model",
  "prototyped", "prototype", "redesigned", "refactored", "refactor",
  "consolidated", "restructured", "revitalized", "modernized", "orchestrated",
  "championed", "pioneered", "sourced", "forecasted",
]);

// Common English stopwords — filtered out of the keyword frequency map so the
// "Keywords" panel only shows meaningful terms the user can self-check against
// a target job description.
const STOPWORDS = new Set<string>([
  "the", "a", "an", "and", "or", "but", "if", "then", "else", "for", "of",
  "to", "in", "on", "at", "by", "with", "from", "as", "is", "are", "was",
  "were", "be", "been", "being", "have", "has", "had", "do", "does", "did",
  "will", "would", "should", "could", "may", "might", "must", "shall", "can",
  "this", "that", "these", "those", "i", "me", "my", "mine", "myself", "we",
  "us", "our", "ours", "ourselves", "you", "your", "yours", "yourself",
  "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself",
  "it", "its", "itself", "they", "them", "their", "theirs", "themselves",
  "what", "which", "who", "whom", "whose", "where", "when", "why", "how",
  "all", "any", "both", "each", "few", "more", "most", "other", "some", "such",
  "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very",
  "also", "into", "out", "up", "down", "over", "under", "again", "further",
  "once", "here", "there", "about", "above", "below", "off", "just",
  "now", "via", "per", "across", "before", "after", "during", "while", "since",
  "until", "within", "without", "including", "etc", "ie", "eg",
  "responsible", "responsibilities", "duties", "duty", "work", "working",
  "worked", "works", "job", "role", "team", "company", "experience",
  "skills", "skill", "education", "summary", "profile", "objective",
  "background", "currently", "present", "month", "year", "years", "jan",
  "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec",
  "january", "february", "march", "april", "june", "july", "august",
  "september", "october", "november", "december",
]);

// Generic / cliché phrases that signal weak, non-specific writing. Each one is
// checked as a case-insensitive substring.
const GENERIC_PHRASES = [
  "responsible for",
  "team player",
  "hard worker",
  "hard-working",
  "hardworking",
  "detail oriented",
  "detail-oriented",
  "go getter",
  "go-getter",
  "think outside the box",
  "results driven",
  "results-driven",
  "self starter",
  "self-starter",
  "self motivated",
  "self-motivated",
  "synergy",
  "leverage",
  "best of breed",
  "cross-functional team player",
  "fast paced",
  "fast-paced",
  "wore many hats",
  "duties included",
  "tasked with",
  "assisted in",
  "assisted with",
  "helped to",
  "worked on",
  "involved in",
  "participated in",
  "in charge of",
  "handled",
  "responsible with",
  "people person",
  "team oriented",
  "team-oriented",
];

// Personal pronouns that should almost never appear in resume bullet points.
// Each entry is checked as a whole-word, case-insensitive match.
const PRONOUN_PATTERNS: RegExp[] = [
  /\bI\b/g,
  /\bme\b/g,
  /\bmy\b/g,
  /\bmyself\b/g,
  /\bmine\b/g,
  /\bwe\b/g,
  /\bour\b/g,
  /\bus\b/g,
];

// US state codes + Canadian provinces — used by the contact-info "location"
// detector. Resume location lines almost always end in "City, ST" or "City, ST ZIP".
const STATE_CODES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC","ON","QC","BC","AB","MB","SK","NS","NB","NL",
];

interface CategoryScore {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  score: number;
  summary: string;
  details: string[];
}

interface Recommendation {
  priority: "high" | "medium" | "low";
  text: string;
}

interface KeywordHit {
  word: string;
  count: number;
}

interface ResumeAnalysis {
  overall: number;
  wordCount: number;
  bulletCount: number;
  quantifiedBullets: number;
  actionVerbBullets: number;
  categories: CategoryScore[];
  recommendations: Recommendation[];
  keywords: KeywordHit[];
}

/* -------------------------------------------------------------------------- */
/*  Pure analysis logic                                                       */
/* -------------------------------------------------------------------------- */

function clamp(n: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, n));
}

function splitIntoBullets(text: string): string[] {
  // A bullet is any line that starts with -, *, •, –, —, ·, or a number+period
  // ("1."), OR a long sentence-like line ending with a period.
  const lines = text.split(/\r?\n/);
  const bullets: string[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (/^[-*•–—·]\s+/.test(line) || /^\d+[.)]\s+/.test(line)) {
      bullets.push(line.replace(/^[-*•–—·]\s+/, "").replace(/^\d+[.)]\s+/, ""));
    } else if (line.length > 40 && line.endsWith(".") && /[a-z]/.test(line)) {
      // Long sentence-like line ending with a period — probably a bullet.
      bullets.push(line);
    }
  }
  return bullets;
}

function firstWord(line: string): string {
  const m = line.match(/^\s*([A-Za-z]+)/);
  return m ? m[1].toLowerCase() : "";
}

function detectSections(text: string): Record<string, boolean> {
  const lower = text.toLowerCase();
  return {
    experience: /\b(experience|work history|employment history|professional experience|work experience)\b/.test(lower),
    education: /\beducation\b/.test(lower),
    skills: /\b(skills|technical skills|core competencies|key skills|areas of expertise)\b/.test(lower),
    summary: /\b(summary|profile|objective|about me|professional summary|career summary)\b/.test(lower),
    projectsCerts: /\b(projects|certifications|certificates|licenses)\b/.test(lower),
  };
}

function findEmail(text: string): string | null {
  const m = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return m ? m[0] : null;
}

function findPhone(text: string): string | null {
  // Match international + US-style phone numbers (10-15 digits, optional +).
  const m = text.match(/(\+?\d[\d\s().-]{8,}\d)/);
  if (!m) return null;
  const digits = m[0].replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15 ? m[0] : null;
}

function hasLinkedIn(text: string): boolean {
  return /linkedin\.com/i.test(text) || /\blinked\s*in\b/i.test(text);
}

function hasLocation(text: string): boolean {
  for (const st of STATE_CODES) {
    const re = new RegExp(`\\b[A-Z][A-Za-z .'-]+,\\s*${st}\\b`);
    if (re.test(text)) return true;
  }
  return /\b(location|address|based in|located in)\s*:?\s*\w+/i.test(text);
}

function hasDates(text: string): boolean {
  return /\b(19|20)\d{2}\b/.test(text) || /\bpresent\b/i.test(text);
}

function extractKeywords(text: string): KeywordHit[] {
  const freq = new Map<string, number>();
  // Match word-like tokens (incl. +, #, . for tech terms like C++, C#, Node.js).
  const tokens = text.match(/[A-Za-z][A-Za-z0-9+#./_-]{2,}/g) || [];
  for (const raw of tokens) {
    const word = raw.toLowerCase().replace(/^[./_-]+|[./_-]+$/g, "");
    if (word.length < 3) continue;
    if (STOPWORDS.has(word)) continue;
    if (/^\d+$/.test(word)) continue;
    freq.set(word, (freq.get(word) || 0) + 1);
  }
  return [...freq.entries()]
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);
}

function countPronounHits(text: string): number {
  let total = 0;
  for (const re of PRONOUN_PATTERNS) {
    // Reset lastIndex because regexes are /g
    re.lastIndex = 0;
    const matches = text.match(re);
    if (matches) total += matches.length;
  }
  return total;
}

function analyzeResume(rawText: string): ResumeAnalysis {
  const text = rawText.trim();

  if (!text) {
    return {
      overall: 0,
      wordCount: 0,
      bulletCount: 0,
      quantifiedBullets: 0,
      actionVerbBullets: 0,
      categories: [],
      recommendations: [],
      keywords: [],
    };
  }

  const words = text.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const bullets = splitIntoBullets(text);
  const bulletCount = bullets.length;
  const sections = detectSections(text);

  /* ---- Category 1: Length & Format ------------------------------------- */
  let lengthScore: number;
  const lengthDetails: string[] = [];
  if (wordCount < 200) {
    lengthScore = 25;
    lengthDetails.push(`Only ${wordCount} words — resumes should be 400–800 words.`);
  } else if (wordCount < 400) {
    lengthScore = 70;
    lengthDetails.push(`${wordCount} words — a touch short. Aim for 400–800.`);
  } else if (wordCount <= 800) {
    lengthScore = 100;
    lengthDetails.push(`${wordCount} words — right in the sweet spot (400–800).`);
  } else if (wordCount <= 1000) {
    lengthScore = 80;
    lengthDetails.push(`${wordCount} words — slightly long. Trim to under 800.`);
  } else {
    lengthScore = 55;
    lengthDetails.push(`${wordCount} words — too long for most roles. Trim to 400–800.`);
  }
  if (bulletCount === 0) {
    lengthScore = Math.min(lengthScore, 50);
    lengthDetails.push("No clear bullet points detected — use -, •, or * for each achievement.");
  } else if (bulletCount < 5) {
    lengthScore -= 15;
    lengthDetails.push(`Only ${bulletCount} bullet points — aim for at least 3 per role.`);
  } else {
    lengthDetails.push(`${bulletCount} bullet points detected.`);
  }

  /* ---- Category 2: Impact & Achievements ------------------------------- */
  let quantifiedBullets = 0;
  let actionVerbBullets = 0;
  for (const b of bullets) {
    if (/\d/.test(b) || /%/.test(b) || /\$\d/.test(b) || /\b(million|thousand|billion)\b/i.test(b)) {
      quantifiedBullets++;
    }
    const fw = firstWord(b);
    if (ACTION_VERBS.has(fw)) actionVerbBullets++;
  }
  const totalForRatio = Math.max(bulletCount, 1);
  const quantifiedRatio = quantifiedBullets / totalForRatio;
  const verbRatio = actionVerbBullets / totalForRatio;

  let quantScore: number;
  if (quantifiedRatio < 0.2) quantScore = 30;
  else if (quantifiedRatio < 0.4) quantScore = 60;
  else if (quantifiedRatio < 0.6) quantScore = 80;
  else quantScore = 100;
  let verbScore: number;
  if (verbRatio < 0.3) verbScore = 40;
  else if (verbRatio < 0.5) verbScore = 70;
  else if (verbRatio < 0.7) verbScore = 85;
  else verbScore = 100;
  let impactScore = Math.round((quantScore + verbScore) / 2);

  const impactDetails: string[] = [];
  if (bulletCount === 0) {
    impactScore = 30;
    impactDetails.push("No bullets found — add achievement bullets starting with action verbs.");
  } else {
    impactDetails.push(
      `${quantifiedBullets} of ${bulletCount} bullets contain numbers, %, or $ (${Math.round(quantifiedRatio * 100)}%).`,
    );
    impactDetails.push(
      `${actionVerbBullets} of ${bulletCount} bullets start with a strong action verb (${Math.round(verbRatio * 100)}%).`,
    );
    if (quantifiedRatio < 0.4) {
      impactDetails.push("Add metrics to more bullets — recruiters look for measurable impact.");
    }
    if (verbRatio < 0.5) {
      impactDetails.push("Start more bullets with verbs like Led, Built, Shipped, Increased.");
    }
  }

  /* ---- Category 3: Contact Info ---------------------------------------- */
  const email = findEmail(text);
  const phone = findPhone(text);
  const linkedin = hasLinkedIn(text);
  const location = hasLocation(text);
  const contactDetails: string[] = [];
  let contactScore = 0;
  if (email) { contactScore += 25; contactDetails.push("Email found."); } else contactDetails.push("No email address detected.");
  if (phone) { contactScore += 25; contactDetails.push("Phone number found."); } else contactDetails.push("No phone number detected.");
  if (linkedin) { contactScore += 25; contactDetails.push("LinkedIn URL found."); } else contactDetails.push("No LinkedIn URL detected.");
  if (location) { contactScore += 25; contactDetails.push("Location detected."); } else contactDetails.push("No location (City, ST) detected.");

  /* ---- Category 4: Sections -------------------------------------------- */
  const sectionDetails: string[] = [];
  let sectionScore = 0;
  const sectionLabels: { key: keyof typeof sections; label: string }[] = [
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
    { key: "skills", label: "Skills" },
    { key: "summary", label: "Summary / Profile" },
    { key: "projectsCerts", label: "Projects or Certifications" },
  ];
  for (const s of sectionLabels) {
    if (sections[s.key]) {
      sectionScore += 20;
      sectionDetails.push(`${s.label}: found.`);
    } else {
      sectionDetails.push(`${s.label}: missing.`);
    }
  }

  /* ---- Category 5: ATS Readiness --------------------------------------- */
  const lower = text.toLowerCase();
  let atsScore = 100;
  const atsDetails: string[] = [];
  const pronounHits = countPronounHits(text);
  if (pronounHits > 0) {
    atsScore -= Math.min(25, pronounHits * 5);
    atsDetails.push(`Personal pronouns (I/me/my/we/our) found ${pronounHits} time(s) — remove them.`);
  }
  let genericHits = 0;
  const foundGeneric: string[] = [];
  for (const phrase of GENERIC_PHRASES) {
    if (lower.includes(phrase)) {
      genericHits++;
      foundGeneric.push(`"${phrase}"`);
    }
  }
  if (genericHits > 0) {
    atsScore -= Math.min(30, genericHits * 8);
    atsDetails.push(`Generic phrases detected: ${foundGeneric.slice(0, 3).join(", ")}${foundGeneric.length > 3 ? "…" : ""}.`);
  }
  if (sections.experience && !hasDates(text)) {
    atsScore -= 20;
    atsDetails.push("Experience section present but no dates found — add Month YYYY – Present style dates.");
  } else if (sections.experience) {
    atsDetails.push("Dates detected in experience section.");
  }
  if (/[│┃║]/.test(text)) {
    atsScore -= 10;
    atsDetails.push("Table/column characters detected — ATS parsers often choke on these.");
  }
  atsScore = clamp(atsScore);

  /* ---- Category 6: Keywords -------------------------------------------- */
  const keywords = extractKeywords(text);
  const uniqueMeaningful = keywords.length;
  let keywordScore: number;
  const keywordDetails: string[] = [];
  if (uniqueMeaningful < 5) {
    keywordScore = 35;
    keywordDetails.push(`Only ${uniqueMeaningful} distinct meaningful words — content may be too thin.`);
  } else if (uniqueMeaningful < 10) {
    keywordScore = 65;
    keywordDetails.push(`${uniqueMeaningful} distinct keywords — add more role-specific terms.`);
  } else if (uniqueMeaningful < 20) {
    keywordScore = 85;
    keywordDetails.push(`${uniqueMeaningful} distinct keywords — solid vocabulary.`);
  } else {
    keywordScore = 100;
    keywordDetails.push(`${uniqueMeaningful} distinct keywords — rich, role-specific vocabulary.`);
  }
  if (keywords.length > 0) {
    keywordDetails.push(`Top: ${keywords.slice(0, 5).map((k) => k.word).join(", ")}.`);
  }

  /* ---- Weighted overall ------------------------------------------------ */
  // Weights: Length 15, Impact 25, Contact 10, Sections 15, ATS 20, Keywords 15
  const overall = Math.round(
    (lengthScore * 0.15 +
      impactScore * 0.25 +
      contactScore * 0.10 +
      sectionScore * 0.15 +
      atsScore * 0.20 +
      keywordScore * 0.15),
  );

  /* ---- Recommendations ------------------------------------------------- */
  const recommendations: Recommendation[] = [];
  // High priority
  if (!email) recommendations.push({ priority: "high", text: "Add an email address to your contact header." });
  if (!phone) recommendations.push({ priority: "high", text: "Add a phone number so recruiters can reach you." });
  if (!sections.experience) recommendations.push({ priority: "high", text: "Add an Experience section — it's the core of every resume." });
  if (wordCount < 400) recommendations.push({ priority: "high", text: `Your resume is ${wordCount} words — expand to at least 400 with concrete achievements.` });
  if (pronounHits > 0) recommendations.push({ priority: "high", text: `Remove ${pronounHits} personal pronoun(s) (I, me, my) from your bullet points.` });
  if (sections.experience && !hasDates(text)) recommendations.push({ priority: "high", text: "Add dates to your experience (e.g., \"Jan 2022 – Present\")." });
  // Medium
  if (quantifiedRatio < 0.4 && bulletCount > 0) {
    const needed = Math.max(1, Math.ceil(bulletCount * 0.4) - quantifiedBullets);
    recommendations.push({ priority: "medium", text: `Add metrics (numbers, %, $) to ${needed} more of your bullet points.` });
  }
  if (verbRatio < 0.5 && bulletCount > 0) {
    recommendations.push({ priority: "medium", text: "Start more bullets with strong action verbs (Led, Built, Shipped, Increased)." });
  }
  if (!linkedin) recommendations.push({ priority: "medium", text: "Add a LinkedIn URL — most recruiters expect one." });
  if (!location) recommendations.push({ priority: "medium", text: "Add your location (City, State) so recruiters can filter locally." });
  if (!sections.summary) recommendations.push({ priority: "medium", text: "Add a 2–3 line Summary or Profile at the top." });
  if (!sections.skills) recommendations.push({ priority: "medium", text: "Add a Skills section listing your hard skills." });
  if (!sections.education) recommendations.push({ priority: "medium", text: "Add an Education section (even if just degree + year)." });
  if (genericHits > 0) {
    recommendations.push({ priority: "medium", text: `Replace ${genericHits} generic phrase(s) like "responsible for" with specific achievements.` });
  }
  // Low
  if (wordCount > 800) recommendations.push({ priority: "low", text: `Trim your resume from ${wordCount} to under 800 words.` });
  if (bulletCount > 0 && bulletCount < 5) recommendations.push({ priority: "low", text: "Add more bullet points — aim for at least 3 per role." });
  if (!sections.projectsCerts) recommendations.push({ priority: "low", text: "Consider adding a Projects or Certifications section to stand out." });
  if (uniqueMeaningful < 10) recommendations.push({ priority: "low", text: "Weave in more role-specific keywords from the job posting you're targeting." });

  const categories: CategoryScore[] = [
    {
      id: "length",
      label: "Length & Format",
      icon: Ruler,
      score: clamp(lengthScore),
      summary: `${wordCount} words · ${bulletCount} bullets`,
      details: lengthDetails,
    },
    {
      id: "impact",
      label: "Impact & Achievements",
      icon: Target,
      score: clamp(impactScore),
      summary: `${quantifiedBullets}/${bulletCount} quantified · ${actionVerbBullets}/${bulletCount} verb-led`,
      details: impactDetails,
    },
    {
      id: "contact",
      label: "Contact Info",
      icon: Mail,
      score: clamp(contactScore),
      summary: [
        email ? "email" : "no email",
        phone ? "phone" : "no phone",
        linkedin ? "LinkedIn" : "no LinkedIn",
        location ? "location" : "no location",
      ].join(" · "),
      details: contactDetails,
    },
    {
      id: "sections",
      label: "Sections",
      icon: ListChecks,
      score: clamp(sectionScore),
      summary: sectionLabels.filter((s) => sections[s.key]).map((s) => s.label).join(", ") || "none detected",
      details: sectionDetails,
    },
    {
      id: "ats",
      label: "ATS Readiness",
      icon: ScanText,
      score: clamp(atsScore),
      summary: pronounHits + genericHits === 0 ? "No major red flags" : `${pronounHits + genericHits} issue(s) flagged`,
      details: atsDetails.length ? atsDetails : ["No personal pronouns, generic phrases, or formatting issues detected."],
    },
    {
      id: "keywords",
      label: "Keywords",
      icon: Hash,
      score: clamp(keywordScore),
      summary: `${uniqueMeaningful} distinct keywords`,
      details: keywordDetails,
    },
  ];

  return {
    overall: clamp(overall),
    wordCount,
    bulletCount,
    quantifiedBullets,
    actionVerbBullets,
    categories,
    recommendations,
    keywords,
  };
}

/* -------------------------------------------------------------------------- */
/*  Score ring (SVG)                                                          */
/* -------------------------------------------------------------------------- */

function scoreColor(score: number): { stroke: string; text: string; label: string } {
  if (score >= 80) return { stroke: "#059669", text: "text-emerald2", label: "Strong" };
  if (score >= 50) return { stroke: "#F59E0B", text: "text-amber-600", label: "Needs work" };
  return { stroke: "#EA580C", text: "text-forge", label: "Needs a rewrite" };
}

function ScoreRing({ score }: { score: number }) {
  const size = 192;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - score / 100);
  const color = scoreColor(score);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#E7E5E4"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color.stroke}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease, stroke 0.4s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`display-heading text-5xl ${color.text}`}>{score}</span>
        <span className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          / 100
        </span>
        <span className={`mt-1 text-sm font-semibold ${color.text}`}>{color.label}</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function CategoryCard({ cat }: { cat: CategoryScore }) {
  const color = scoreColor(cat.score);
  const Icon = cat.icon;
  return (
    <Card className="gap-0 overflow-hidden rounded-xl p-5 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className="flex size-9 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${color.stroke}1A`, color: color.stroke }}
          >
            <Icon className="size-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-foreground">{cat.label}</h3>
            <p className="text-xs text-muted-foreground">{cat.summary}</p>
          </div>
        </div>
        <span className={`text-lg font-bold ${color.text}`}>{cat.score}</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${cat.score}%`, backgroundColor: color.stroke }}
        />
      </div>
      <ul className="mt-3 space-y-1">
        {cat.details.map((d, i) => (
          <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <span aria-hidden="true" className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-steel/50" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function PriorityIcon({ priority }: { priority: Recommendation["priority"] }) {
  if (priority === "high") return <XCircle className="size-4 text-forge" aria-hidden="true" />;
  if (priority === "medium") return <AlertTriangle className="size-4 text-amber-600" aria-hidden="true" />;
  return <Lightbulb className="size-4 text-emerald2" aria-hidden="true" />;
}

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */

const SAMPLE = `Jordan Rivera
Senior Software Engineer
jordan.rivera@email.com | (555) 123-4567 | San Francisco, CA

Summary
Senior Software Engineer with 7 years building scalable web applications.

Experience
Senior Software Engineer — Lumina Labs
Jan 2022 - Present
- Led migration of monolith to microservices, reducing deploy time by 70%
- Built CI/CD pipeline shipping 50+ times per day
- Mentored 4 junior engineers

Software Engineer — Northwind
Jun 2018 - Dec 2021
Responsible for working on backend services
Team player who helped with bugs
Helped to ship features

Education
BS Computer Science — UC Berkeley, 2018

Skills
Python, JavaScript, React, AWS, Docker, Kubernetes`;

export function ResumeScoreTool() {
  const [text, setText] = React.useState("");
  const [analysis, setAnalysis] = React.useState<ResumeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = React.useCallback((value: string) => {
    setIsAnalyzing(true);
    // Small async gap so the UI can paint the spinner on huge pastes.
    setTimeout(() => {
      setAnalysis(analyzeResume(value));
      setIsAnalyzing(false);
    }, 50);
  }, []);

  // Debounced live analysis (500ms after the user stops typing).
  const handleChange = (value: string) => {
    setText(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => run(value), 500);
  };

  const handleAnalyze = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    run(text);
  };

  const handleClear = () => {
    setText("");
    setAnalysis(null);
    if (debounceRef.current) clearTimeout(debounceRef.current);
  };

  const handleSample = () => {
    setText(SAMPLE);
    run(SAMPLE);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const content = String(reader.result || "");
      setText(content);
      run(content);
    };
    reader.onerror = () => {
      // Silently ignore — file reading failures are rare for .txt.
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      {/* ---------------- Input column ---------------- */}
      <Card className="gap-0 rounded-xl p-5 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-foreground">Your resume</h2>
            <p className="text-sm text-muted-foreground">
              Paste text or upload a .txt file. Everything stays in your browser.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,text/plain"
              className="sr-only"
              onChange={handleFile}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="size-4" />
              Upload .txt
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={handleSample}>
              <FileText className="size-4" />
              Try a sample
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="resume-text" className="sr-only">
            Paste your resume text here
          </label>
          <Textarea
            id="resume-text"
            value={text}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Paste your resume here…"
            className="min-h-[420px] resize-y font-mono text-sm leading-relaxed"
            aria-describedby="resume-text-meta"
          />
          <div
            id="resume-text-meta"
            className="mt-2 flex items-center justify-between text-xs text-muted-foreground"
          >
            <span>{text.trim() ? `${text.trim().split(/\s+/).length} words` : "Empty"}</span>
            <span>100% private — nothing leaves your device</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={handleAnalyze}
            disabled={!text.trim() || isAnalyzing}
            className="bg-forge text-white hover:bg-forge-dark"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="size-4 animate-pulse" />
                Analyzing…
              </>
            ) : (
              <>
                <Sparkles className="size-4" />
                Analyze resume
              </>
            )}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={handleClear} disabled={!text}>
            <RotateCcw className="size-4" />
            Clear
          </Button>
        </div>
      </Card>

      {/* ---------------- Results column ---------------- */}
      <div className="flex flex-col gap-6">
        {!analysis ? (
          <Card className="gap-0 flex flex-col items-center justify-center gap-3 rounded-xl p-10 text-center shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
            <div className="flex size-14 items-center justify-center rounded-full bg-secondary">
              <Sparkles className="size-6 text-forge" />
            </div>
            <h3 className="text-base font-bold text-foreground">Your score will appear here</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Paste your resume on the left and hit <strong>Analyze resume</strong>. You&apos;ll get an overall score, a breakdown across six categories, and a prioritized list of fixes.
            </p>
          </Card>
        ) : (
          <>
            {/* Overall score */}
            <Card className="gap-0 flex flex-col items-center gap-4 rounded-xl p-6 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 sm:flex-row sm:items-center sm:gap-8">
              <ScoreRing score={analysis.overall} />
              <div className="flex-1 text-center sm:text-left">
                <p className="eyebrow">Overall resume score</p>
                <h2 className="display-heading mt-1 text-2xl text-foreground sm:text-3xl">
                  {analysis.overall >= 80
                    ? "Looking sharp."
                    : analysis.overall >= 50
                      ? "Almost there."
                      : "Time to forge something better."}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {analysis.wordCount} words · {analysis.bulletCount} bullets · {analysis.quantifiedBullets} quantified · {analysis.actionVerbBullets} verb-led
                </p>
              </div>
            </Card>

            {/* Category cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {analysis.categories.map((cat) => (
                <CategoryCard key={cat.id} cat={cat} />
              ))}
            </div>

            {/* Recommendations */}
            <Card className="gap-0 rounded-xl p-6 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Recommendations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Prioritized fixes — start at the top.
                  </p>
                </div>
                <Badge variant="secondary" className="font-semibold">
                  {analysis.recommendations.length}{" "}
                  {analysis.recommendations.length === 1 ? "fix" : "fixes"}
                </Badge>
              </div>
              {analysis.recommendations.length === 0 ? (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald2/10 p-3 text-sm text-emerald2">
                  <CheckCircle2 className="size-5" />
                  No major issues found — this resume is in great shape.
                </div>
              ) : (
                <ol className="mt-4 space-y-2">
                  {analysis.recommendations.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-background p-3"
                    >
                      <PriorityIcon priority={r.priority} />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{r.text}</p>
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {r.priority} priority
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </Card>

            {/* Keywords */}
            {analysis.keywords.length > 0 && (
              <Card className="gap-0 rounded-xl p-6 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      Top keywords
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Cross-check these against the job description you&apos;re targeting.
                    </p>
                  </div>
                  <Hash className="size-5 text-muted-foreground" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {analysis.keywords.map((k) => (
                    <Badge
                      key={k.word}
                      variant="outline"
                      className="border-forge/30 bg-forge/5 text-sm text-foreground"
                    >
                      {k.word}
                      <span className="ml-1 text-xs font-normal text-muted-foreground">
                        ×{k.count}
                      </span>
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            {/* CTA to builder */}
            <Card className="gap-0 flex flex-col items-start gap-3 rounded-xl bg-primary p-6 text-primary-foreground shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-bold">Ready to put these fixes to work?</h3>
                <p className="text-sm text-primary-foreground/75">
                  Open the forgedCV builder and turn this feedback into a polished resume.
                </p>
              </div>
              <a
                href="/"
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-background px-5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
              >
                Forge my resume <ArrowRight className="size-4" />
              </a>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

export default ResumeScoreTool;
