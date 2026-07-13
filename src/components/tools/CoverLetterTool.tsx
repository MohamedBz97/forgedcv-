"use client";

import * as React from "react";
import {
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Sparkles,
  Copy,
  Download,
  Check,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Lightbulb,
  Wand2,
  ScanText,
  Hash,
  Building2,
  User,
  FileText,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Build mode — letter assembly                                              */
/* -------------------------------------------------------------------------- */

interface BuildForm {
  yourName: string;
  email: string;
  phone: string;
  city: string;
  linkedin: string;
  companyName: string;
  jobTitle: string;
  hiringManager: string;
  strength1: string;
  strength2: string;
  strength3: string;
  experience: string;
  whyThisCompany: string;
}

const EMPTY_FORM: BuildForm = {
  yourName: "",
  email: "",
  phone: "",
  city: "",
  linkedin: "",
  companyName: "",
  jobTitle: "",
  hiringManager: "",
  strength1: "",
  strength2: "",
  strength3: "",
  experience: "",
  whyThisCompany: "",
};

function todayLong(): string {
  try {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

/** Build a polished cover letter from the form. Empty optional fields are
 *  gracefully skipped so the letter always reads naturally. */
function buildLetter(f: BuildForm): string {
  const lines: string[] = [];

  // Header
  if (f.yourName) lines.push(f.yourName);
  const contactBits = [f.city, f.email, f.phone, f.linkedin].filter(Boolean);
  if (contactBits.length) lines.push(contactBits.join(" · "));
  if (f.yourName || contactBits.length) lines.push("");

  // Date
  lines.push(todayLong());
  lines.push("");

  // Recipient block
  if (f.hiringManager || f.companyName) {
    if (f.hiringManager) lines.push(f.hiringManager);
    if (f.companyName) lines.push(f.companyName);
    lines.push("");
  }

  // Greeting
  const greeting = f.hiringManager
    ? `Dear ${f.hiringManager},`
    : "Dear Hiring Manager,";
  lines.push(greeting);
  lines.push("");

  // Opening
  const company = f.companyName || "your company";
  const role = f.jobTitle || "open role";
  const opening = f.whyThisCompany
    ? `I'm writing to apply for the ${role} position at ${company}. ${f.whyThisCompany}`
    : `I'm writing to apply for the ${role} position at ${company}. The role aligns closely with the work I want to do next, and I'd welcome the chance to contribute to your team.`;
  lines.push(opening);
  lines.push("");

  // Strengths
  const strengths = [f.strength1, f.strength2, f.strength3].filter(Boolean);
  if (strengths.length > 0) {
    lines.push("Three things from my background that map to what you're hiring for:");
    lines.push("");
    for (const s of strengths) {
      lines.push(`  • ${s}`);
    }
    lines.push("");
  }

  // Experience summary
  if (f.experience) {
    lines.push(f.experience);
    lines.push("");
  }

  // Closing
  const closingGoal = f.companyName
    ? `I'd welcome the chance to talk through how I can help ${f.companyName} hit its next milestone. Thank you for your time and consideration.`
    : "I'd welcome the chance to talk through how I can contribute. Thank you for your time and consideration.";
  lines.push(closingGoal);
  lines.push("");

  // Sign-off
  lines.push("Sincerely,");
  if (f.yourName) {
    lines.push("");
    lines.push(f.yourName);
  }

  return lines.join("\n");
}

/* -------------------------------------------------------------------------- */
/*  Check mode — analysis                                                     */
/* -------------------------------------------------------------------------- */

const CLICHES = [
  "i am writing to apply",
  "i am writing to express my interest",
  "i am writing to express",
  "perfect fit",
  "team player",
  "hard worker",
  "hard-working",
  "hardworking",
  "think outside the box",
  "self-starter",
  "self starter",
  "self-motivated",
  "self motivated",
  "detail oriented",
  "detail-oriented",
  "results-driven",
  "results driven",
  "go-getter",
  "go getter",
  "fast paced",
  "fast-paced",
  "synergy",
  "leverage",
  "dynamic environment",
  "proven track record",
  "extensive experience",
  "deep understanding",
  "extensive knowledge",
  "passionate about",
  "people person",
  "best of breed",
  "wore many hats",
  "hit the ground running",
];

const GREETINGS = [
  /^dear\s+\w+/i,
  /^hi\s+\w+/i,
  /^hello\s+\w+/i,
  /^to whom it may concern/i,
  /^good (morning|afternoon|evening)/i,
];

const CLOSINGS = [
  /\bsincerely\b/i,
  /\bbest regards\b/i,
  /\bkind regards\b/i,
  /\bwarm regards\b/i,
  /\bregards\b/i,
  /\bbest,\s*$/im,
  /\bthank you\b/i,
  /\bthanks\b/i,
  /\brespectfully\b/i,
  /\byours truly\b/i,
];

interface ClCheck {
  overall: number;
  wordCount: number;
  paragraphCount: number;
  hasGreeting: boolean;
  hasClosing: boolean;
  hasCompany: boolean;
  hasJobTitle: boolean;
  specificity: number;
  clichesFound: string[];
  iCount: number;
  recommendations: { priority: "high" | "medium" | "low"; text: string }[];
}

function checkLetter(
  text: string,
  opts: { companyName?: string; jobTitle?: string } = {},
): ClCheck {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const paragraphs = trimmed
    ? trimmed.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
    : [];
  const paragraphCount = paragraphs.length;
  const lower = trimmed.toLowerCase();

  // Length score (30 pts)
  let lengthScore: number;
  if (wordCount >= 250 && wordCount <= 400) lengthScore = 30;
  else if ((wordCount >= 200 && wordCount < 250) || (wordCount > 400 && wordCount <= 450)) lengthScore = 22;
  else if ((wordCount >= 150 && wordCount < 200) || (wordCount > 450 && wordCount <= 500)) lengthScore = 12;
  else lengthScore = 0;

  // Greeting (10 pts)
  const firstPara = paragraphs[0] || "";
  const firstLines = firstPara.split(/\n/);
  const greetingLine = firstLines[0] || "";
  const hasGreeting = GREETINGS.some((re) => re.test(greetingLine.trim()));
  const greetingScore = hasGreeting ? 10 : 0;

  // Closing (10 pts)
  const lastPara = paragraphs[paragraphs.length - 1] || "";
  const hasClosing = CLOSINGS.some((re) => re.test(lastPara));
  const closingScore = hasClosing ? 10 : 0;

  // Company name (15 pts)
  let hasCompany = false;
  if (opts.companyName && opts.companyName.trim().length >= 2) {
    const target = opts.companyName.trim().toLowerCase();
    hasCompany = lower.includes(target);
  } else {
    // Heuristic: look for "the <Capitalized Word> team" or "join <Capitalized Word>".
    hasCompany = /\b(joined?|joining|at|the)\s+[A-Z][A-Za-z]+/m.test(trimmed);
  }
  const companyScore = hasCompany ? 15 : 0;

  // Job title (15 pts)
  let hasJobTitle = false;
  if (opts.jobTitle && opts.jobTitle.trim().length >= 2) {
    const target = opts.jobTitle.trim().toLowerCase();
    hasJobTitle = lower.includes(target);
  } else {
    hasJobTitle = /\b(role|position|opportunity)\b/i.test(trimmed);
  }
  const jobTitleScore = hasJobTitle ? 15 : 0;

  // Specificity (15 pts) — count of numbers, %, $ amounts in the body
  const numberHits = (trimmed.match(/\b\d+(\.\d+)?%?\b/g) || []).length;
  const dollarHits = (trimmed.match(/\$\d[\d,]*(\.\d+)?/g) || []).length;
  const specificityRaw = numberHits + dollarHits;
  const specificity = Math.min(15, specificityRaw * 4);
  let specificityScore: number;
  if (specificityRaw >= 3) specificityScore = 15;
  else if (specificityRaw === 2) specificityScore = 12;
  else if (specificityRaw === 1) specificityScore = 8;
  else specificityScore = 0;

  // Clichés (15 pts) — each cliché -3 pts, min 0
  const clichesFound: string[] = [];
  for (const c of CLICHES) {
    if (lower.includes(c)) clichesFound.push(c);
  }
  const clicheScore = Math.max(0, 15 - clichesFound.length * 3);

  // "I" density — informational only (no point deduction, but flagged)
  const iCount = (trimmed.match(/\bI\b/g) || []).length;

  const overall = Math.round(
    lengthScore + greetingScore + closingScore + companyScore + jobTitleScore + specificityScore + clicheScore,
  );

  // Recommendations
  const recommendations: { priority: "high" | "medium" | "low"; text: string }[] = [];
  if (wordCount < 250) {
    recommendations.push({
      priority: "high",
      text: `Your letter is ${wordCount} words — aim for 250–400. Add one more concrete example.`,
    });
  } else if (wordCount > 400) {
    recommendations.push({
      priority: "high",
      text: `Your letter is ${wordCount} words — trim to 250–400. Recruiters skim; shorter wins.`,
    });
  }
  if (!hasGreeting) {
    recommendations.push({
      priority: "high",
      text: "Add a greeting (e.g., \"Dear Hiring Manager,\"). It's a basic courtesy recruiters expect.",
    });
  }
  if (!hasClosing) {
    recommendations.push({
      priority: "high",
      text: "Add a closing (e.g., \"Sincerely,\"). Without it the letter feels unfinished.",
    });
  }
  if (!hasCompany) {
    recommendations.push({
      priority: "high",
      text: `Mention the company by name${opts.companyName ? ` (${opts.companyName})` : ""} — generic letters get ignored.`,
    });
  }
  if (!hasJobTitle) {
    recommendations.push({
      priority: "high",
      text: `Name the specific role you're applying for${opts.jobTitle ? ` (${opts.jobTitle})` : ""}.`,
    });
  }
  if (clichesFound.length > 0) {
    recommendations.push({
      priority: "medium",
      text: `Remove ${clichesFound.length} cliché phrase(s): "${clichesFound.slice(0, 3).join('", "')}${clichesFound.length > 3 ? '"' : '"'} — replace with specifics.`,
    });
  }
  if (specificityRaw < 2) {
    recommendations.push({
      priority: "medium",
      text: "Add at least 2 specific numbers (metrics, %, $, scope) — they make claims believable.",
    });
  }
  if (iCount > 12) {
    recommendations.push({
      priority: "medium",
      text: `You use "I" ${iCount} times — reword some sentences to focus on the company's needs, not just yours.`,
    });
  }
  if (paragraphCount < 3) {
    recommendations.push({
      priority: "low",
      text: `You have ${paragraphCount} paragraph(s) — aim for 3–5 short paragraphs for readability.`,
    });
  } else if (paragraphCount > 6) {
    recommendations.push({
      priority: "low",
      text: `You have ${paragraphCount} paragraphs — consolidate to 3–5 for a tighter letter.`,
    });
  }

  return {
    overall,
    wordCount,
    paragraphCount,
    hasGreeting,
    hasClosing,
    hasCompany,
    hasJobTitle,
    specificity: specificityRaw,
    clichesFound,
    iCount,
    recommendations,
  };
}

function clScoreColor(score: number): { stroke: string; text: string; label: string } {
  if (score >= 80) return { stroke: "#059669", text: "text-emerald2", label: "Strong" };
  if (score >= 50) return { stroke: "#F59E0B", text: "text-amber-600", label: "Needs work" };
  return { stroke: "#EA580C", text: "text-forge", label: "Needs a rewrite" };
}

function ClScoreRing({ score }: { score: number }) {
  const size = 160;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - score / 100);
  const color = clScoreColor(score);
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E7E5E4" strokeWidth={stroke} />
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
        <span className={`display-heading text-4xl ${color.text}`}>{score}</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">/ 100</span>
        <span className={`mt-0.5 text-xs font-semibold ${color.text}`}>{color.label}</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Field helper                                                              */
/* -------------------------------------------------------------------------- */

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Build mode UI                                                             */
/* -------------------------------------------------------------------------- */

function BuildMode() {
  const [form, setForm] = React.useState<BuildForm>(EMPTY_FORM);
  const [copied, setCopied] = React.useState(false);

  const letter = React.useMemo(() => buildLetter(form), [form]);

  const update = (key: keyof BuildForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked by permissions; silently ignore.
    }
  };

  const handleDownload = () => {
    const blob = new Blob([letter], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const safeName = (form.yourName || "cover-letter").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
    a.download = `${safeName}-cover-letter.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      {/* Form */}
      <Card className="gap-0 rounded-xl p-5 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 sm:p-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-foreground">Fill in the blanks</h2>
          <p className="text-sm text-muted-foreground">
            The letter assembles itself in real time. Required fields are marked.
          </p>
        </div>

        <div className="space-y-5">
          {/* About you */}
          <fieldset className="space-y-3">
            <legend className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <User className="size-3.5" /> About you
            </legend>
            <Field id="yourName" label="Your name *">
              <Input
                id="yourName"
                value={form.yourName}
                onChange={(e) => update("yourName", e.target.value)}
                placeholder="Alex Morgan"
              />
            </Field>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field id="email" label="Email">
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="alex@email.com"
                />
              </Field>
              <Field id="phone" label="Phone">
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field id="city" label="City">
                <Input
                  id="city"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="San Francisco, CA"
                />
              </Field>
              <Field id="linkedin" label="LinkedIn">
                <Input
                  id="linkedin"
                  value={form.linkedin}
                  onChange={(e) => update("linkedin", e.target.value)}
                  placeholder="linkedin.com/in/alexmorgan"
                />
              </Field>
            </div>
          </fieldset>

          {/* The role */}
          <fieldset className="space-y-3">
            <legend className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Building2 className="size-3.5" /> The role
            </legend>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field id="companyName" label="Company name *">
                <Input
                  id="companyName"
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  placeholder="Acme Corp"
                />
              </Field>
              <Field id="jobTitle" label="Job title *">
                <Input
                  id="jobTitle"
                  value={form.jobTitle}
                  onChange={(e) => update("jobTitle", e.target.value)}
                  placeholder="Senior Product Manager"
                />
              </Field>
            </div>
            <Field
              id="hiringManager"
              label="Hiring manager name"
              hint={'Leave blank to use "Hiring Manager".'}
            >
              <Input
                id="hiringManager"
                value={form.hiringManager}
                onChange={(e) => update("hiringManager", e.target.value)}
                placeholder="Jordan Lee"
              />
            </Field>
          </fieldset>

          {/* Your pitch */}
          <fieldset className="space-y-3">
            <legend className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Sparkles className="size-3.5" /> Your pitch
            </legend>
            <Field
              id="strength1"
              label="Strength 1 *"
              hint="One specific achievement with a metric if possible."
            >
              <Input
                id="strength1"
                value={form.strength1}
                onChange={(e) => update("strength1", e.target.value)}
                placeholder="Led a 6-person team that shipped a redesign lifting activation 34%"
              />
            </Field>
            <Field id="strength2" label="Strength 2 *">
              <Input
                id="strength2"
                value={form.strength2}
                onChange={(e) => update("strength2", e.target.value)}
                placeholder="Built a cross-functional roadmap process adopted by 4 product teams"
              />
            </Field>
            <Field id="strength3" label="Strength 3 *">
              <Input
                id="strength3"
                value={form.strength3}
                onChange={(e) => update("strength3", e.target.value)}
                placeholder="Cut customer churn by 22% through a targeted onboarding redesign"
              />
            </Field>
            <Field
              id="experience"
              label="Relevant experience summary *"
              hint="1–2 sentences tying your background to the role."
            >
              <Textarea
                id="experience"
                value={form.experience}
                onChange={(e) => update("experience", e.target.value)}
                placeholder="Over the last 7 years I've shipped products for 10M+ users across B2B and consumer, with a focus on growth and onboarding."
                className="min-h-[80px]"
              />
            </Field>
            <Field
              id="whyThisCompany"
              label="Why this company?"
              hint="Optional. One sentence on what draws you to them."
            >
              <Input
                id="whyThisCompany"
                value={form.whyThisCompany}
                onChange={(e) => update("whyThisCompany", e.target.value)}
                placeholder="I've followed Acme's work on accessibility and would love to contribute."
              />
            </Field>
          </fieldset>
        </div>
      </Card>

      {/* Preview */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-20 lg:self-start">
        <Card className="gap-0 rounded-xl shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
          <div className="flex items-center justify-between border-b border-border/60 p-4">
            <div>
              <h2 className="text-sm font-bold text-foreground">Live preview</h2>
              <p className="text-xs text-muted-foreground">
                {letter.trim() ? letter.trim().split(/\s+/).length : 0} words
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopy}
                disabled={!letter.trim()}
              >
                {copied ? <Check className="size-4 text-emerald2" /> : <Copy className="size-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleDownload}
                disabled={!letter.trim()}
              >
                <Download className="size-4" />
                Download .txt
              </Button>
            </div>
          </div>
          <pre className="m-0 max-h-[640px] overflow-y-auto whitespace-pre-wrap p-5 font-sans text-sm leading-relaxed text-foreground">
            {letter || <span className="text-muted-foreground">Start filling in the form to see your letter…</span>}
          </pre>
        </Card>
        <p className="text-center text-xs text-muted-foreground">
          Tip: paste your generated letter into the <strong>Check</strong> tab to score it before sending.
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Check mode UI                                                             */
/* -------------------------------------------------------------------------- */

function CheckMode() {
  const [text, setText] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [result, setResult] = React.useState<ClCheck | null>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = React.useCallback(
    (value: string, co: string, jt: string) => {
      setIsAnalyzing(true);
      setTimeout(() => {
        setResult(checkLetter(value, { companyName: co, jobTitle: jt }));
        setIsAnalyzing(false);
      }, 50);
    },
    [],
  );

  const handleChange = (value: string) => {
    setText(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => run(value, companyName, jobTitle), 500);
  };

  const handleAnalyze = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    run(text, companyName, jobTitle);
  };

  const handleClear = () => {
    setText("");
    setResult(null);
    if (debounceRef.current) clearTimeout(debounceRef.current);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      {/* Input */}
      <Card className="gap-0 rounded-xl p-5 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 sm:p-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-foreground">Your cover letter</h2>
          <p className="text-sm text-muted-foreground">
            Paste your letter below. Add the target company and role for a tighter check.
          </p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field id="cl-company" label="Target company (optional)">
              <Input
                id="cl-company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Acme Corp"
              />
            </Field>
            <Field id="cl-jobtitle" label="Target job title (optional)">
              <Input
                id="cl-jobtitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Senior Product Manager"
              />
            </Field>
          </div>
          <Field id="cl-text" label="Cover letter text">
            <Textarea
              id="cl-text"
              value={text}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Paste your cover letter here…"
              className="min-h-[380px] resize-y font-mono text-sm leading-relaxed"
            />
          </Field>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{text.trim() ? `${text.trim().split(/\s+/).length} words` : "Empty"}</span>
            <span>100% private — nothing leaves your device</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
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
                  <ScanText className="size-4" />
                  Check letter
                </>
              )}
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={handleClear} disabled={!text}>
              Clear
            </Button>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="flex flex-col gap-6">
        {!result ? (
          <Card className="gap-0 flex flex-col items-center justify-center gap-3 rounded-xl p-10 text-center shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
            <div className="flex size-14 items-center justify-center rounded-full bg-secondary">
              <ScanText className="size-6 text-forge" />
            </div>
            <h3 className="text-base font-bold text-foreground">Your score will appear here</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Paste your letter on the left and hit <strong>Check letter</strong>. We&apos;ll score it on length, structure, specificity, and cliché-free writing.
            </p>
          </Card>
        ) : (
          <>
            <Card className="gap-0 flex flex-col items-center gap-4 rounded-xl p-6 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5 sm:flex-row sm:items-center sm:gap-8">
              <ClScoreRing score={result.overall} />
              <div className="flex-1 text-center sm:text-left">
                <p className="eyebrow">Cover letter score</p>
                <h2 className="display-heading mt-1 text-2xl text-foreground sm:text-3xl">
                  {result.overall >= 80
                    ? "Ready to send."
                    : result.overall >= 50
                      ? "Close — tighten it up."
                      : "Worth another draft."}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {result.wordCount} words · {result.paragraphCount} paragraphs · {result.clichesFound.length} cliché(s) · {result.specificity} specific(s)
                </p>
              </div>
            </Card>

            {/* Quick checks grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <QuickCheck ok={result.hasGreeting} label="Greeting" />
              <QuickCheck ok={result.hasClosing} label="Closing" />
              <QuickCheck ok={result.hasCompany} label="Company named" />
              <QuickCheck ok={result.hasJobTitle} label="Role named" />
              <QuickCheck
                ok={result.wordCount >= 250 && result.wordCount <= 400}
                label="Length 250–400"
              />
              <QuickCheck ok={result.clichesFound.length === 0} label="No clichés" />
            </div>

            {/* Recommendations */}
            <Card className="gap-0 rounded-xl p-6 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground">Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Prioritized fixes — start at the top.</p>
                </div>
                <Badge variant="secondary" className="font-semibold">
                  {result.recommendations.length}{" "}
                  {result.recommendations.length === 1 ? "fix" : "fixes"}
                </Badge>
              </div>
              {result.recommendations.length === 0 ? (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald2/10 p-3 text-sm text-emerald2">
                  <CheckCircle2 className="size-5" />
                  No major issues found — this letter is in great shape.
                </div>
              ) : (
                <ol className="mt-4 space-y-2">
                  {result.recommendations.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-background p-3"
                    >
                      <ClPriorityIcon priority={r.priority} />
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

            {result.clichesFound.length > 0 && (
              <Card className="gap-0 rounded-xl p-6 shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-foreground">Clichés detected</h3>
                    <p className="text-sm text-muted-foreground">Replace each with a specific example.</p>
                  </div>
                  <Hash className="size-5 text-muted-foreground" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {result.clichesFound.map((c) => (
                    <Badge
                      key={c}
                      variant="outline"
                      className="border-forge/30 bg-forge/5 text-sm lowercase text-foreground"
                    >
                      &ldquo;{c}&rdquo;
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            <Card className="gap-0 flex flex-col items-start gap-3 rounded-xl bg-primary p-6 text-primary-foreground shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-bold">Pair this letter with a strong resume</h3>
                <p className="text-sm text-primary-foreground/75">
                  Build a resume in the forgedCV builder — 20 templates, free PDF, no watermarks.
                </p>
              </div>
              <a
                href="/"
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-background px-5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
              >
                <FileText className="size-4" />
                Build my resume
              </a>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

function QuickCheck({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border p-3 ${
        ok
          ? "border-emerald2/30 bg-emerald2/5"
          : "border-forge/30 bg-forge/5"
      }`}
    >
      {ok ? (
        <CheckCircle2 className="size-4 shrink-0 text-emerald2" />
      ) : (
        <XCircle className="size-4 shrink-0 text-forge" />
      )}
      <span className="text-xs font-semibold text-foreground">{label}</span>
    </div>
  );
}

function ClPriorityIcon({ priority }: { priority: "high" | "medium" | "low" }) {
  if (priority === "high") return <XCircle className="size-4 text-forge" aria-hidden="true" />;
  if (priority === "medium") return <AlertTriangle className="size-4 text-amber-600" aria-hidden="true" />;
  return <Lightbulb className="size-4 text-emerald2" aria-hidden="true" />;
}

/* -------------------------------------------------------------------------- */
/*  Main tool — Tabs                                                          */
/* -------------------------------------------------------------------------- */

export function CoverLetterTool() {
  return (
    <Tabs defaultValue="build" className="w-full">
      <div className="mb-6 flex justify-center">
        <TabsList className="h-11 rounded-xl bg-secondary p-1">
          <TabsTrigger
            value="build"
            className="h-9 rounded-lg px-5 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            <Wand2 className="size-4" />
            Build a letter
          </TabsTrigger>
          <TabsTrigger
            value="check"
            className="h-9 rounded-lg px-5 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            <ScanText className="size-4" />
            Check a letter
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="build">
        <BuildMode />
      </TabsContent>
      <TabsContent value="check">
        <CheckMode />
      </TabsContent>
    </Tabs>
  );
}

export default CoverLetterTool;
