"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  FileText,
  Settings2,
  Download,
  Save,
  LayoutTemplate,
  Eye,
  PencilLine,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResumeStore } from "@/lib/resume-store";
import { EditorForm } from "@/components/resume/editor/EditorForm";
import { PreviewPanel } from "@/components/resume/PreviewPanel";
import { SettingsPanel } from "@/components/resume/SettingsPanel";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

export function ResumeEditor() {
  const setView = useResumeStore((s) => s.setView);
  const title = useResumeStore((s) => s.title);
  const setTitle = useResumeStore((s) => s.setTitle);
  const data = useResumeStore((s) => s.data);
  const settings = useResumeStore((s) => s.settings);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");
  const [saving, setSaving] = useState(false);
  const [savedId, setSavedId] = useState<string | null>(null);

  // auto-switch to preview tab is not needed; keep edit default

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = { title, data, settings };
      const res = savedId
        ? await fetch(`/api/resumes/${savedId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/resumes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
      if (!res.ok) throw new Error("Save failed");
      const json = await res.json();
      if (json.resume?.id) setSavedId(json.resume.id);
      toast.success(savedId ? "Resume updated" : "Resume saved");
    } catch (e) {
      toast.error("Could not save. Your work is still auto-saved locally.");
    } finally {
      setSaving(false);
    }
  };

  const handleDownload = () => {
    toast.info("Opening print dialog — choose “Save as PDF”.");
    setTimeout(() => window.print(), 300);
  };

  // keyboard shortcut: cmd/ctrl + P triggers our download flow
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "p") {
        e.preventDefault();
        handleDownload();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top bar */}
      <header className="z-40 flex h-14 shrink-0 items-center justify-between gap-2 border-b bg-background/90 px-3 backdrop-blur-md sm:h-16 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="size-9 shrink-0"
            onClick={() => setView("templates")}
            title="Back to templates"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold tracking-tight text-foreground">cvforge</span>
            <span className="size-1.5 rounded-full bg-coral translate-y-1.5" />
          </div>
          <div className="mx-1 hidden h-6 w-px bg-black/10 sm:block" />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-8 w-32 border-transparent bg-transparent px-2 text-sm font-medium hover:bg-foreground/5 focus-visible:bg-background focus-visible:ring-1 sm:w-48"
            placeholder="Untitled Resume"
          />
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden h-9 rounded-lg border-black/15 bg-transparent text-foreground hover:bg-foreground/5 sm:inline-flex"
            onClick={() => setView("templates")}
          >
            <LayoutTemplate className="size-4" />
            Templates
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-9 rounded-lg border-black/15 bg-transparent text-foreground hover:bg-foreground/5"
            onClick={() => setSettingsOpen(true)}
          >
            <Settings2 className="size-4" />
            <span className="hidden sm:inline">Design</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-9 rounded-lg border-black/15 bg-transparent text-foreground hover:bg-foreground/5"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
            <span className="hidden sm:inline">Save</span>
          </Button>
          <Button
            size="sm"
            className="h-9 rounded-lg bg-primary font-semibold text-primary-foreground hover:opacity-90"
            onClick={handleDownload}
          >
            <Download className="size-4" />
            <span className="hidden sm:inline">Download</span>
          </Button>
        </div>
      </header>

      {/* Mobile tab switch */}
      <div className="border-b bg-background px-3 py-2 lg:hidden">
        <Tabs value={mobileTab} onValueChange={(v) => setMobileTab(v as "edit" | "preview")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit" className="gap-1.5">
              <PencilLine className="size-3.5" />
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview" className="gap-1.5">
              <Eye className="size-3.5" />
              Preview
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main split: editor + preview */}
      <div className="flex min-h-0 flex-1">
        {/* Editor pane */}
        <div
          className={`min-h-0 flex-1 overflow-hidden bg-foreground/[0.02] ${
            mobileTab === "preview" ? "hidden lg:block" : "block"
          }`}
        >
          <div className="h-full overflow-y-auto px-3 py-4 sm:px-5">
            <div className="mx-auto max-w-3xl">
              <EditorForm />
            </div>
          </div>
        </div>

        {/* Preview pane */}
        <div
          className={`min-h-0 w-full shrink-0 border-l border-black/5 bg-foreground/[0.03] lg:block lg:w-[46%] xl:w-[48%] ${
            mobileTab === "edit" ? "hidden lg:block" : "block"
          }`}
        >
          <PreviewPanel />
        </div>
      </div>

      {/* Settings dialog */}
      <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />

      {/* Hidden print container — only visible when printing */}
      <div className="print-only hidden print:block">
        <ResumeDocument data={data} settings={settings} />
      </div>
    </div>
  );
}
