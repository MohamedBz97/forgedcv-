import * as pdfjsLib from "pdfjs-dist";

const MAX_LINKEDIN_PDF_BYTES = 10 * 1024 * 1024;
const MAX_LINKEDIN_PDF_PAGES = 20;

export interface LinkedInImportResult {
  fullName?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  summary?: string;
}

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function nonEmptyLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function sectionText(lines: string[], sectionName: string, nextSections: string[]): string {
  const start = lines.findIndex((line) => line.toLowerCase() === sectionName.toLowerCase());
  if (start < 0) return "";
  const end = lines.findIndex(
    (line, index) => index > start && nextSections.includes(line.toLowerCase()),
  );
  return lines.slice(start + 1, end < 0 ? lines.length : end).join("\n").trim();
}

function firstMatch(text: string, pattern: RegExp): string | undefined {
  return text.match(pattern)?.[0];
}

export async function importLinkedInProfile(file: File): Promise<LinkedInImportResult> {
  if (file.size === 0 || file.size > MAX_LINKEDIN_PDF_BYTES) {
    throw new Error("LinkedIn PDF must be smaller than 10 MB.");
  }

  const loadingTask = pdfjsLib.getDocument({ data: await file.arrayBuffer() });
  const pdf = await loadingTask.promise;
  if (pdf.numPages > MAX_LINKEDIN_PDF_PAGES) {
    await loadingTask.destroy();
    throw new Error("LinkedIn PDF contains too many pages.");
  }

  const pages: string[] = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => ("str" in item ? item.str : "")).join("\n"));
  }

  const rawText = pages.join("\n");
  const lines = nonEmptyLines(rawText);
  const email = firstMatch(rawText, /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  const phone = firstMatch(rawText, /\+?\d[\d\s().-]{8,}\d/);
  const linkedin = firstMatch(rawText, /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/[A-Za-z0-9._-]+/i);
  const about = sectionText(lines, "About", ["experience", "education", "skills", "accomplishments"]);
  const experience = sectionText(lines, "Experience", ["education", "skills", "accomplishments", "interests"]);
  const firstProfileLine = lines.findIndex((line) => /linkedin\.com|@|experience|education/i.test(line));
  const profileLines = firstProfileLine > 0 ? lines.slice(0, firstProfileLine) : lines.slice(0, 4);

  return {
    fullName: profileLines[0],
    jobTitle: profileLines[1],
    email,
    phone: phone?.trim(),
    location: profileLines.find((line) => /,|remote|area|region/i.test(line) && line !== profileLines[1]),
    linkedin,
    summary: about || experience,
  };
}