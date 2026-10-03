"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  FileText,
  FileDown,
  FileUp,
  HardDrive,
  Linkedin,
  MoreHorizontal,
  Settings2,
  Download,
  LayoutTemplate,
  Eye,
  PencilLine,
  Coffee,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResumeStore } from "@/lib/resume-store";
import { EditorForm } from "@/components/resume/editor/EditorForm";
import { PreviewPanel } from "@/components/resume/PreviewPanel";
import { SettingsPanel } from "@/components/resume/SettingsPanel";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { DONATE } from "@/lib/site-config";
import { importLinkedInProfile } from "@/lib/linkedin-import";
import {
  createResumeBackup,
  isResumeBackupFileSizeAllowed,
  parseResumeBackup,
} from "@/lib/resume-backup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ResumeEditor() {
  const setView = useResumeStore((s) => s.setView);
  const title = useResumeStore((s) => s.title);
  const setTitle = useResumeStore((s) => s.setTitle);
  const data = useResumeStore((s) => s.data);
  const settings = useResumeStore((s) => s.settings);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");
  const [showCoffee, setShowCoffee] = useState(false);
  const [importingLinkedIn, setImportingLinkedIn] = useState(false);
  const linkedinFileRef = useRef<HTMLInputElement>(null);
  const backupFileRef = useRef<HTMLInputElement>(null);
  const [coffeeDismissed, setCoffeeDismissed] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem(DONATE.storageKey) === "1"
  );

  const handleDownload = () => {
    toast.info("Opening print dialog — choose “Save as PDF”.");
    if (!coffeeDismissed) setShowCoffee(true);
    setTimeout(() => window.print(), 300);
  };

  const handleExportBackup = () => {
    try {
      const backup = createResumeBackup(title, data, settings);
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${(title || "resume").replace(/[^a-z0-9-_]+/gi, "-").toLowerCase()}.json`;
      link.click();
      URL.revokeObjectURL(url);
      toast.success("Resume backup downloaded.");
    } catch {
      toast.error("Could not create a resume backup.");
    }
  };

  const handleImportBackup = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!window.confirm("Restore this backup and replace the resume currently open in the editor?")) return;
    if (!isResumeBackupFileSizeAllowed(file.size)) {
      toast.error("Choose a valid backup file smaller than 8 MB.");
      return;
    }

    try {
      const backup = parseResumeBackup(JSON.parse(await file.text()));
      useResumeStore.getState().loadDocument(backup.data, backup.settings, backup.title);
      toast.success("Resume backup restored.");
    } catch {
      toast.error("This file is not a valid forgedCV resume backup.");
    }
  };

  const handleLinkedInImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setImportingLinkedIn(true);
    try {
      const imported = await importLinkedInProfile(file);
      const importedFields = Object.fromEntries(Object.entries(imported).filter(([, value]) => Boolean(value)));
      if (!Object.keys(importedFields).length) throw new Error("No profile fields found");
      useResumeStore.getState().updatePersonal(importedFields);
      toast.success("Profile details imported. Review them before downloading.");
    } catch {
      toast.error("Could not read that LinkedIn PDF. Download your profile as PDF and try again.");
    } finally {
      setImportingLinkedIn(false);
    }
  };

  const handleClearLocalResume = () => {
    if (!window.confirm("Clear this resume from this browser? Download a backup first if you want to keep it.")) return;
    useResumeStore.getState().startBlank();
    toast.success("Local resume cleared.");
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
            <span className="text-lg font-bold tracking-tight text-foreground">forged<span className="text-forge">CV</span></span>
          </div>
          <div className="mx-1 hidden h-6 w-px bg-line sm:block" />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-8 w-32 border-transparent bg-transparent px-2 text-sm font-medium hover:bg-surface-2 focus-visible:bg-background focus-visible:ring-1 sm:w-48"
            placeholder="Untitled Resume"
          />
          <span className="hidden items-center gap-1 text-xs text-muted-foreground xl:inline-flex" title="Your draft is saved in this browser">
            <HardDrive className="size-3.5" />
            Saved locally
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden h-9 sm:inline-flex"
            onClick={() => setView("templates")}
          >
            <LayoutTemplate className="size-4" />
            Templates
          </Button>
          <input ref={backupFileRef} type="file" accept=".json,application/json" className="sr-only" onChange={handleImportBackup} />
          <input ref={linkedinFileRef} type="file" accept=".pdf,application/pdf" className="sr-only" onChange={handleLinkedInImport} />
          <Button
            variant="outline"
            size="sm"
            className="h-9"
            onClick={() => setSettingsOpen(true)}
          >
            <Settings2 className="size-4" />
            <span className="hidden sm:inline">Design</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden h-9 md:inline-flex"
            onClick={() => linkedinFileRef.current?.click()}
            disabled={importingLinkedIn}
            title="Upload a LinkedIn profile PDF"
          >
            <Linkedin className="size-4" />
            <span className="hidden lg:inline">Import LinkedIn</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="size-9" aria-label="Resume data options" title="Resume data options">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={(event) => { event.preventDefault(); linkedinFileRef.current?.click(); }}>
                <Linkedin className="size-4" />
                Import LinkedIn PDF
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={handleExportBackup}>
                <FileDown className="size-4" />
                Download backup
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(event) => { event.preventDefault(); backupFileRef.current?.click(); }}>
                <FileUp className="size-4" />
                Restore backup
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={handleClearLocalResume}>
                <Trash2 className="size-4" />
                Clear local resume
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="sm"
            className="hidden h-9 border border-solid border-[#40A67B]/40 text-[#B45309] hover:bg-[#40A67B]/10 md:inline-flex"
            onClick={() => window.open(DONATE.url, "_blank", "noopener,noreferrer")}
          >
            <Coffee className="size-4 text-[#B45309]" />
            <span className="hidden xl:inline">Buy me a coffee</span>
          </Button>
          <Button
            size="sm"
            className="h-9 font-semibold"
            onClick={handleDownload}
          >
            <Download className="size-4" />
            <span className="hidden sm:inline">Download</span>
          </Button>
        </div>
      </header>

      {/* Post-download thank-you */}
      {showCoffee && (
        <div className="flex items-center gap-3 border-b bg-[#FDF6EC] px-4 py-2.5 text-sm">
          <span className="min-w-0 flex-1 text-[#57534E]">
            It&apos;s yours — free, no watermark. If forgedCV helped, a {DONATE.amount} coffee keeps it that way.
          </span>
          <a
            href={DONATE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#B45309] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#92400E]"
          >
            {DONATE.label} {DONATE.amount}
          </a>
          <button
            onClick={() => {
              setShowCoffee(false);
              setCoffeeDismissed(true);
              localStorage.setItem(DONATE.storageKey, "1");
            }}
            aria-label="Dismiss"
            className="shrink-0 rounded-full p-1 text-[#A8A29E] transition-colors hover:bg-black/5 hover:text-[#57534E]"
          >
            <X className="size-4" />
          </button>
        </div>
      )}

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
          className={`min-h-0 flex-1 overflow-hidden bg-surface-2/40 ${
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
          className={`min-h-0 w-full shrink-0 border-l border-line bg-surface-2/50 lg:block lg:w-[46%] xl:w-[48%] ${
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
