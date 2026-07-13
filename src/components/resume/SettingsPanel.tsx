"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useResumeStore } from "@/lib/resume-store";
import { TEMPLATES, FONT_OPTIONS, ACCENT_PRESETS } from "@/lib/templates";
import { defaultResumeData } from "@/lib/default-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { Check } from "lucide-react";

interface SettingsPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsPanel({ open, onOpenChange }: SettingsPanelProps) {
  const settings = useResumeStore((s) => s.settings);
  const setTemplate = useResumeStore((s) => s.setTemplate);
  const setAccent = useResumeStore((s) => s.setAccent);
  const setFont = useResumeStore((s) => s.setFont);
  const setFontSize = useResumeStore((s) => s.setFontSize);
  const setSpacing = useResumeStore((s) => s.setSpacing);
  const togglePhoto = useResumeStore((s) => s.togglePhoto);
  const [customColor, setCustomColor] = useState(settings.accentColor);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">Customize design</DialogTitle>
          <DialogDescription>
            Switch templates, pick an accent color, and fine-tune typography.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* Template picker */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Template</Label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={`group relative overflow-hidden rounded-lg text-left transition-all ${
                    settings.templateId === t.id
                      ? "ring-2 ring-primary"
                      : "ring-1 ring-black/5 hover:ring-black/15"
                  }`}
                >
                  <div className="relative aspect-[1/1.414] overflow-hidden bg-foreground/[0.03]">
                    <div className="absolute left-0 top-0 origin-top-left" style={{ transform: "scale(0.16)", width: "625%" }}>
                      <ResumeDocument
                        data={defaultResumeData}
                        settings={{ ...settings, templateId: t.id, accentColor: t.accent }}
                      />
                    </div>
                    {settings.templateId === t.id && (
                      <div className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3" />
                      </div>
                    )}
                  </div>
                  <p className="px-2 py-1.5 text-[11px] font-medium">{t.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Accent color */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Accent color</Label>
            <div className="flex flex-wrap items-center gap-2">
              {ACCENT_PRESETS.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setAccent(c);
                    setCustomColor(c);
                  }}
                  className={`relative size-8 rounded-full border-2 transition-transform hover:scale-110 ${
                    settings.accentColor === c ? "border-foreground" : "border-transparent"
                  }`}
                  style={{ backgroundColor: c }}
                  aria-label={`Accent ${c}`}
                >
                  {settings.accentColor === c && (
                    <Check className="absolute inset-0 m-auto size-4 text-white drop-shadow" />
                  )}
                </button>
              ))}
              <label className="relative size-8 cursor-pointer overflow-hidden rounded-full border-2 border-dashed border-border">
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    setAccent(e.target.value);
                  }}
                  className="absolute inset-0 size-full cursor-pointer opacity-0"
                />
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: customColor }}
                />
              </label>
            </div>
          </div>

          {/* Font family */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Font family</Label>
              <Select value={settings.fontFamily} onValueChange={setFont}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FONT_OPTIONS.map((f) => (
                    <SelectItem key={f.name} value={f.name}>
                      <span style={{ fontFamily: f.stack }}>{f.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Font size */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Font size</Label>
              <Select value={settings.fontSize} onValueChange={(v) => setFontSize(v as typeof settings.fontSize)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="base">Medium</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Spacing */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Spacing</Label>
              <Select value={settings.spacing} onValueChange={(v) => setSpacing(v as typeof settings.spacing)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="relaxed">Relaxed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Photo toggle */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Profile photo</Label>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <Switch checked={settings.showPhoto} onCheckedChange={togglePhoto} />
                <span className="text-sm text-muted-foreground">
                  {settings.showPhoto ? "Shown on resume" : "Hidden"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            className="rounded-xl bg-primary font-semibold text-primary-foreground hover:opacity-90"
            onClick={() => onOpenChange(false)}
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
