import { BlogShell } from "@/components/blog/BlogNav";
import { CoverLetterTool } from "./CoverLetterTool";

/**
 * SEO wrapper page for the free Cover Letter Builder + Checker tool.
 *
 * Server component — renders the chrome (BlogNav + BlogFooter via BlogShell),
 * the hero, the interactive client tool, long-form SEO copy on how to write
 * a strong cover letter, and a final CTA to the resume builder.
 */

export function CoverLetterPage() {
  return (
    <BlogShell>
      {/* Hero */}
      <section className="px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-forge">Free Cover Letter Tool</p>
          <h1 className="display-heading mt-4 text-4xl text-foreground sm:text-6xl">
            Build and check your cover letter
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Fill in a few fields and get a polished cover letter in seconds —
            or paste an existing one and get an instant score with specific
            fixes. Free, no signup, nothing leaves your browser.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 font-medium">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald2" />
              100% private
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 font-medium">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-forge" />
              No signup
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 font-medium">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
              Free forever
            </span>
          </div>
        </div>
      </section>

      {/* Interactive tool */}
      <section
        className="px-4 pb-20 sm:px-6 sm:pb-24"
        aria-label="Cover letter builder and checker"
      >
        <div className="mx-auto max-w-6xl">
          <CoverLetterTool />
        </div>
      </section>

      {/* SEO copy */}
      <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5 sm:p-10 md:p-12">
            <div className="prose-flowcv mx-auto max-w-2xl">
              <h2>How to write a good cover letter</h2>
              <p>
                A cover letter is a 250–400 word case for why you, specifically,
                are worth interviewing for this role, at this company. Most
                cover letters fail because they restate the resume in prose.
                Yours should add something the resume can&apos;t: a sentence
                about why this company, and a sentence that ties your past work
                to their near-term problem.
              </p>

              <h3>What makes a strong opening</h3>
              <p>
                Skip &ldquo;I am writing to apply for…&rdquo;. The recruiter
                already knows what you&apos;re writing about. Open with the
                single most relevant thing about you for this role — a recent
                win, a number, or a one-line story that frames why you&apos;re
                reaching out.
              </p>
              <p>
                <strong>Weak:</strong> &ldquo;I am writing to express my
                interest in the Product Manager role at Acme Corp. I have 7
                years of experience in product management.&rdquo;
              </p>
              <p>
                <strong>Strong:</strong> &ldquo;I led the redesign that lifted
                activation 34% at Lumina Labs — I&apos;d like to bring that
                same growth lens to the Product Manager role at Acme.&rdquo;
              </p>

              <h3>The three things every letter needs</h3>
              <ol>
                <li>
                  <strong>A specific company and role.</strong> Generic letters
                  get ignored. Name both in the first sentence.
                </li>
                <li>
                  <strong>Two or three concrete achievements</strong> with
                  numbers, percentages, or dollar amounts. Numbers make claims
                  believable.
                </li>
                <li>
                  <strong>One sentence on why this company.</strong> Not
                  &ldquo;your mission inspires me&rdquo; — name a specific
                  product, decision, or recent news that made you apply.
                </li>
              </ol>

              <h2>Common cover letter mistakes</h2>
              <ul>
                <li>
                  <strong>Restating your resume.</strong> The cover letter is
                  for context, not summary. Use it to connect dots, not list
                  them.
                </li>
                <li>
                  <strong>Clichés.</strong> &ldquo;Team player&rdquo;,
                  &ldquo;perfect fit&rdquo;, &ldquo;results-driven&rdquo;,
                  &ldquo;think outside the box&rdquo; — recruiters read these
                  and tune out. Show, don&apos;t tell.
                </li>
                <li>
                  <strong>Too long.</strong> Anything over 400 words
                  won&apos;t get read. Tighten ruthlessly.
                </li>
                <li>
                  <strong>All &ldquo;I&rdquo; sentences.</strong> If every
                  sentence starts with &ldquo;I&rdquo;, the letter reads as
                  self-focused. Reword some to lead with the company&apos;s
                  needs.
                </li>
                <li>
                  <strong>Missing a greeting or closing.</strong> Small thing,
                  but skipping &ldquo;Dear …&rdquo; or &ldquo;Sincerely,&rdquo;
                  makes the letter feel unfinished.
                </li>
                <li>
                  <strong>Forgetting to mention the company by name.</strong>{" "}
                  If you&apos;re recycling a letter, double-check every name
                  and role before sending.
                </li>
              </ul>

              <h2>How the checker scores your letter</h2>
              <p>
                The <strong>Check</strong> tab scores your letter on a 100-point
                scale across seven dimensions:
              </p>
              <ul>
                <li><strong>Length (30 pts)</strong> — 250–400 words is ideal.</li>
                <li><strong>Greeting (10 pts)</strong> — Dear / Hi / Hello present.</li>
                <li><strong>Closing (10 pts)</strong> — Sincerely / Best / Regards present.</li>
                <li><strong>Company name (15 pts)</strong> — Mentioned by name (auto-detected or match your target).</li>
                <li><strong>Job title (15 pts)</strong> — Role named explicitly.</li>
                <li><strong>Specificity (15 pts)</strong> — Count of numbers, %, $ amounts.</li>
                <li><strong>No clichés (15 pts)</strong> — Each cliché found deducts 3 points.</li>
              </ul>

              <p>
                Looking for cover letter examples? Our blog has a full set —
                start with{" "}
                <a href="/?blog=cover-letter-examples">50+ cover letter examples</a>{" "}
                and our guide to{" "}
                <a href="/?blog=short-cover-letter">short cover letters</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="display-heading text-3xl sm:text-4xl">
            Pair that letter with a resume that matches
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
            A great cover letter deserves a great resume. Build one in the
            forgedCV builder — 20 templates, live preview, free PDF download.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-background px-7 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Forge my resume &nbsp;✨
          </a>
        </div>
      </section>
    </BlogShell>
  );
}

export default CoverLetterPage;
