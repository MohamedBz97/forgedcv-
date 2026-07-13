# Task TOOLS — Free Client-Side Tools (Resume Score + Cover Letter)

**Agent:** Tools Agent
**Task:** Build two REAL, working, free-forever client-side tools for forgedCV — Resume Score Checker + Cover Letter Builder/Checker. SEO wrapper pages + routing + sitemap.

## Files created

- `src/components/tools/ResumeScoreTool.tsx` — `"use client"`. Interactive resume analyzer with SVG score ring, 6 weighted category cards (Length, Impact, Contact, Sections, ATS, Keywords), prioritized recommendations, top-15 keywords. Real regex/keyword logic, 100+ action verbs, 35-item cliché list, stopword-filtered keyword extraction. Debounced live analysis + Analyze button + .txt upload via FileReader + sample resume.
- `src/components/tools/ResumeScorePage.tsx` — Server-component SEO wrapper via `<BlogShell>`. Hero + tool + `.prose-flowcv` SEO copy (how scoring works, what's a good score, 5 tips) + CTA.
- `src/components/tools/CoverLetterTool.tsx` — `"use client"`. Two-mode Tabs tool: **Build** (12-field form assembles a polished cover letter in real time; copy + download-as-.txt) and **Check** (paste letter → score ring + quick-check grid + recommendations + clichés list). 7-dimension scoring (Length 30 + Greeting 10 + Closing 10 + Company 15 + Job title 15 + Specificity 15 + No-clichés 15), 35-item cliché list.
- `src/components/tools/CoverLetterPage.tsx` — Server-component SEO wrapper. Hero + tool + SEO copy (how to write a good cover letter, weak-vs-strong opening example, 3 things every letter needs, common mistakes, scoring breakdown) + CTA.

## Files updated

- `src/app/page.tsx` — Added `tool?: string` to `searchParams` type. Routes `?tool=resume-score` → `<ResumeScorePage/>` and `?tool=cover-letter` → `<CoverLetterPage/>`. Added `generateMetadata` branches with title/description/keywords/canonical/openGraph/twitter for both tools.
- `src/app/sitemap.ts` — Added `/?tool=resume-score` and `/?tool=cover-letter` at priority 0.9, changeFrequency monthly. Total sitemap now 32 URLs.

## Scoring algorithms (genuine, not random)

**Resume (weighted avg of 6 × 0–100):** Length 15% (word count vs 400–800 + bullets) · Impact 25% (quantified-bullet ratio + action-verb-bullet ratio) · Contact 10% (email/phone/LinkedIn/location regex) · Sections 15% (5 sections × 20pts) · ATS 20% (pronouns + 35 clichés + missing dates + table chars) · Keywords 15% (distinct meaningful word count).

**Cover letter (sum of 7 dimensions = 100):** Length 30 · Greeting 10 · Closing 10 · Company 15 · Job title 15 · Specificity 15 (number/%/$ count) · No-clichés 15 (each -3).

## Verification

- `bun run lint` → 0 errors, 0 warnings (one parsing-error fix: escaped quotes in a JSX `hint` attr → switched to expression syntax).
- `npx tsc --noEmit` → 0 errors in any new file. (Pre-existing errors in `examples/` and `skills/` folders are unrelated.)
- Runtime curl smoke tests:
  - `GET /?tool=resume-score` → 200, title "Free Resume Score Checker — Instant Resume Review | forgedCV", all key content present.
  - `GET /?tool=cover-letter` → 200, title "Free Cover Letter Builder & Checker | forgedCV", all key content present.
  - `GET /sitemap.xml` → 200, both tool URLs present at priority 0.9.
- `dev.log` → clean, no compile errors. Both tool routes compile in 40–80ms after first hit.

## Design notes

- 100% client-side. No fetch, no AI SDK, no server calls. Free forever.
- Forge palette: charcoal primary (CTAs/footer), forge-orange accent (score ring, active Analyze button), emerald for high scores, bone bg, white cards with `shadow-[0_2px_12px_-6px_rgba(28,25,23,0.14)]` + `ring-1 ring-black/5`.
- Score ring color tiers: forge-orange < 50, amber 50–79, emerald 80+.
- Both pages use `<BlogShell>` (sticky-footer flex-col wrapper).
- Sample resume built into the resume tool so users can see the analysis without pasting anything.
- Cover letter template is genuinely good: opens with role+company (not "I am writing to apply"), uses 3 bulleted strengths (recruiter-skimmable), ties experience in 1–2 sentences, closes with a forward-looking line + "Sincerely".
- Accessible: sr-only labels, aria-describedby, aria-hidden decorative SVG/icons, semantic fieldset/legend, keyboard-navigable.

Ready for QA. Total: 4 new files (~1900 lines) + 2 files updated. Lint + tsc clean.
