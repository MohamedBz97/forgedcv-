import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Get a single resume
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const resume = await db.resume.findUnique({ where: { id } });
    if (!resume) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({
      resume: {
        ...resume,
        data: JSON.parse(resume.data),
        settings: JSON.parse(resume.settings),
      },
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

// Update a resume
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { title, data, settings } = body;
    const resume = await db.resume.update({
      where: { id },
      data: {
        ...(title !== undefined ? { title } : {}),
        ...(data !== undefined
          ? { data: typeof data === "string" ? data : JSON.stringify(data) }
          : {}),
        ...(settings !== undefined
          ? {
              settings:
                typeof settings === "string"
                  ? settings
                  : JSON.stringify(settings),
            }
          : {}),
      },
    });
    return NextResponse.json({ resume });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

// Delete a resume
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await db.resume.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
