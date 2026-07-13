import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// List all saved resumes
export async function GET() {
  try {
    const resumes = await db.resume.findMany({
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        settings: true,
      },
    });
    const parsed = resumes.map((r) => ({
      ...r,
      settings: JSON.parse(r.settings),
    }));
    return NextResponse.json({ resumes: parsed });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 500 }
    );
  }
}

// Create a new saved resume
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, data, settings } = body;
    if (!data || !settings) {
      return NextResponse.json({ error: "Missing data or settings" }, { status: 400 });
    }
    const resume = await db.resume.create({
      data: {
        title: title || "Untitled Resume",
        data: typeof data === "string" ? data : JSON.stringify(data),
        settings:
          typeof settings === "string" ? settings : JSON.stringify(settings),
      },
    });
    return NextResponse.json({ resume });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 500 }
    );
  }
}
