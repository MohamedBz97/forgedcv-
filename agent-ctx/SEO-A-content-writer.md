# Task SEO-A — Senior SEO Content Strategist (forgedCV blog)

## Task summary
Wrote 10 NEW SEO-optimized blog articles for the forgedCV resume-builder blog, targeting high-traffic keywords that competitor flowcv.com does NOT cover. Added them to `src/lib/blog/posts.ts` without breaking existing exports.

## What was done
- Read `/home/z/my-project/worklog.md` and the existing `src/lib/blog/posts.ts` (10 existing articles, `BlogPost` interface, `ContentBlock` type, helpers).
- Drafted 10 new articles in the same voice (friendly, direct, confident career mentor; "you" and "we"; 1–2 tasteful emoji per article; concrete numbers; varied sentence length; no AI-tells).
- Inserted all 10 articles into the `BLOG_POSTS` array as objects 11–20, immediately before the closing `];`.
- Preserved all existing exports: `getPostBySlug`, `getAllPosts`, `getRelatedPosts`, `BLOG_CATEGORIES` (unchanged — they derive from the array).
- Internal-linking plan: each new article references 1–3 other articles (mix of existing and new) naturally.
- Flagship articles (`cover-letter-examples` and `interview-questions`) are ~1450 words each, more comprehensive. The interview-questions article includes ~17 sample Q&A frameworks with STAR-based answer examples.

## File touched
- `/home/z/my-project/src/lib/blog/posts.ts` (grew from ~1750 lines → 3856 lines)

## Articles added
| # | Slug | Title | Category | ~Words | Primary Keyword |
|---|------|-------|----------|--------|-----------------|
| 1 | resume-format | Best Resume Format for 2025 (with Examples) | Resumes | 980 | resume format |
| 2 | resume-objective-examples | Resume Objective Examples for Every Situation | Resumes | 930 | resume objective |
| 3 | resume-skills-section | How to Write a Resume Skills Section (with 50+ Examples) | Resumes | 990 | resume skills section |
| 4 | chronological-vs-functional-resume | Chronological vs Functional Resume: Which Format Wins? | Resumes | 1080 | chronological vs functional resume |
| 5 | cover-letter-examples (FLAGSHIP) | 50+ Cover Letter Examples for Every Job in 2025 | Cover Letters | 1450 | cover letter examples |
| 6 | short-cover-letter | How to Write a Short Cover Letter (with Templates) | Cover Letters | 970 | short cover letter |
| 7 | interview-questions (FLAGSHIP) | Top 50 Interview Questions and How to Answer Them | Interviews | 1450 | interview questions |
| 8 | thank-you-email-after-interview | Thank You Email After Interview: 10 Templates That Work | Interviews | 990 | thank you email after interview |
| 9 | two-weeks-notice-letter | Two Weeks Notice Letter: Templates and Examples | Career Change | 1180 | two weeks notice letter |
| 10 | federal-resume | How to Write a Federal Resume (Complete Guide) | Resumes | 1180 | federal resume |

Total: ~11,200 words.

## Voice & quality notes
- Author: `forgedCV Team` (rebranded from CVForge). Existing articles still use `CVForge Team`.
- Each article uses all content block types: `p`, `h2`, `h3`, `ul`, `ol`, `tip`, `quote`.
- Primary keyword appears in title, first 100 words, an H2, and naturally throughout.
- `metaDescription` 150–160 chars each.
- 4–7 `keywords` per article (primary + secondary + long-tail).
- 1–2 emoji per article (✨, 🚀, ⚒️) — forging theme lightly used in closing lines.
- No AI-tells: "Furthermore", "Moreover", "In conclusion", "When it comes to", "It's important to note that" — all avoided.

## Verification
- `bun run lint` → clean (no errors in posts.ts)
- `npx tsc --noEmit` → no TS errors in posts.ts (unrelated errors in `examples/websocket/*` and `skills/*` are pre-existing)
- 20 total articles confirmed in `BLOG_POSTS` array (10 existing + 10 new)
- Helper functions and `BLOG_CATEGORIES` export intact

## Next steps for future agents
- These articles render via the existing blog page components — no UI work needed.
- Internal links use natural-language references (e.g., "our ATS-friendly resume guide") — they're not `<a>` tags, so the blog renderer may want to add auto-linking from keyword phrases to known slugs. Check `src/components/blog/*` to see if there's a linkification step. If not, that's a future enhancement, not a regression.
- The `two-weeks-notice-letter` article is filed under "Career Change" — that category already existed.
