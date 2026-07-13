import { BlogShell } from "@/components/blog/BlogNav";
import { ResumeScoreTool } from "./ResumeScoreTool";

/**
 * SEO wrapper page for the free Resume Score Checker.
 *
 * Server component — renders the chrome (BlogNav + BlogFooter via BlogShell),
 * the hero, the interactive client tool, long-form SEO copy explaining how
 * the score is calculated, and a final CTA to the builder.
 */

export function ResumeScorePage() {
  return (
    <BlogShell>
      {/* Hero */}
      <section className="px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-forge">Free Resume Checker</p>
          <h1 className="display-heading mt-4 text-4xl text-foreground sm:text-6xl">
            Check your resume score
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Paste your resume and get instant, actionable feedback. Free, no
            signup, no upload required. Everything runs in your browser.
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
        aria-label="Resume score checker"
      >
        <div className="mx-auto max-w-6xl">
          <ResumeScoreTool />
        </div>
      </section>

      {/* SEO copy */}
      <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5 sm:p-10 md:p-12">
            <div className="prose-flowcv mx-auto max-w-2xl">
              <h2>How your resume score is calculated</h2>
              <p>
                Your overall score is a weighted average across six categories.
                We run real regex and keyword analysis on the text you paste —
                no AI, no random numbers. Here&apos;s what each category
                measures and how it weighs into your final score:
              </p>

              <h3>Length &amp; Format — 15%</h3>
              <p>
                Recruiters spend about seven seconds on a first pass. The ideal
                resume is 400–800 words with clear bullet points. We check word
                count against that range, count your bullet points, and look for
                formatting markers like <code>-</code>, <code>*</code>, or{" "}
                <code>•</code>.
              </p>

              <h3>Impact &amp; Achievements — 25%</h3>
              <p>
                The single highest-weighted category. We count how many of your
                bullets contain numbers, percentages, or dollar amounts (your{" "}
                <em>quantified</em> ratio) and how many start with a strong
                action verb from a list of 60+ (Led, Built, Shipped, Increased,
                Reduced, Designed, Launched…). Resumes that talk in measurable
                outcomes outperform resumes that list duties — every time.
              </p>

              <h3>Contact Info — 10%</h3>
              <p>
                We look for an email, a phone number, a LinkedIn URL, and a
                location (City, State). Each one is worth 25 points. Missing
                any of these is a red flag — recruiters expect all four.
              </p>

              <h3>Sections — 15%</h3>
              <p>
                We scan for the five core resume sections: Experience,
                Education, Skills, Summary/Profile, and Projects or
                Certifications. Each one found adds 20 points. A resume missing
                Experience or Education is almost always rejected before a human
                ever reads it.
              </p>

              <h3>ATS Readiness — 20%</h3>
              <p>
                Applicant Tracking Systems parse resumes automatically. They
                choke on personal pronouns (I, me, my), generic phrases
                (&ldquo;responsible for&rdquo;, &ldquo;team player&rdquo;,
                &ldquo;hard worker&rdquo;), missing dates in your experience
                section, and table characters. We flag every one of these and
                deduct points for each.
              </p>

              <h3>Keywords — 15%</h3>
              <p>
                We extract the 15 most frequent meaningful words (filtering out
                stopwords like &ldquo;the&rdquo; and &ldquo;and&rdquo;) so you
                can see if your resume uses the same vocabulary as the job
                description you&apos;re targeting. If your top keywords
                don&apos;t match the job posting, your resume won&apos;t make it
                past the first ATS filter.
              </p>

              <h2>What&apos;s a good resume score?</h2>
              <ul>
                <li>
                  <strong>80–100 (green):</strong> Strong resume. You&apos;re
                  ready to apply. Tweak copy based on each job posting and you
                  should get interviews.
                </li>
                <li>
                  <strong>50–79 (amber):</strong> Needs work. You have the
                  bones of a good resume but you&apos;re losing recruiters on
                  impact, ATS readiness, or both. Address the high-priority
                  fixes first.
                </li>
                <li>
                  <strong>Below 50 (orange):</strong> Needs a rewrite. Start
                  over with a clear structure: contact header, summary, 3
                  experience entries with 3 quantified bullets each, education,
                  and skills.
                </li>
              </ul>

              <h2>Tips to raise your score</h2>
              <ol>
                <li>
                  <strong>Quantify everything you can.</strong> Numbers, %,
                  dollar amounts, time saved, team size, user count. If you
                  can&apos;t measure it, describe the scope.
                </li>
                <li>
                  <strong>Lead with verbs.</strong> &ldquo;Led&rdquo; beats
                  &ldquo;Was responsible for leading&rdquo;. Every single time.
                </li>
                <li>
                  <strong>Kill the clichés.</strong> &ldquo;Team player&rdquo;,
                  &ldquo;hard worker&rdquo;, &ldquo;results-driven&rdquo; —
                  delete them. Show, don&apos;t tell.
                </li>
                <li>
                  <strong>Mirror the job posting.</strong> If the posting says
                  &ldquo;stakeholder management&rdquo; and your resume says
                  &ldquo;worked with teams&rdquo;, you&apos;ll fail the keyword
                  filter.
                </li>
                <li>
                  <strong>Keep it one page</strong> unless you have 10+ years
                  of relevant experience. Two pages is fine for senior roles;
                  three is almost always too many.
                </li>
              </ol>

              <p>
                Want to see what a strong resume looks like? Browse our{" "}
                <a href="/?examples=list">resume examples</a> — each one is a
                fully-loaded sample you can load into the builder and edit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="display-heading text-3xl sm:text-4xl">
            Ready to build a better resume?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
            Take the feedback from this tool and turn it into a polished,
            recruiter-ready resume. 20 templates, live preview, free PDF
            download — no watermarks.
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

export default ResumeScorePage;
