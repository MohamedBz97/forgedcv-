"use client";

import * as React from "react";
import { Camera, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Field } from "../Field";
import { useResumeStore } from "@/lib/resume-store";

const SUMMARY_MAX = 600;

export function PersonalSection() {
  const personal = useResumeStore((s) => s.data.personal);
  const updatePersonal = useResumeStore((s) => s.updatePersonal);
  const togglePhoto = useResumeStore((s) => s.togglePhoto);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        updatePersonal({ photo: result });
        togglePhoto(true);
      }
    };
    reader.readAsDataURL(file);
    // reset input value so the same file can be re-selected
    e.target.value = "";
  };

  const removePhoto = () => {
    updatePersonal({ photo: "" });
    togglePhoto(false);
  };

  return (
    <div className="space-y-5">
      {/* Photo upload */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full border bg-muted">
          {personal.photo ? (
            <img
              src={personal.photo}
              alt="Profile preview"
              className="size-full object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-muted-foreground">
              <Camera className="size-6" />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
          />
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
            >
              <Camera className="size-4" />
              {personal.photo ? "Change photo" : "Upload photo"}
            </Button>
            {personal.photo ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                onClick={removePhoto}
              >
                <X className="size-4" />
                Remove
              </Button>
            ) : null}
          </div>
          <p className="text-xs text-muted-foreground">
            PNG or JPG. Square images work best.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <Input
            value={personal.fullName}
            placeholder="Jane Doe"
            onChange={(e) => updatePersonal({ fullName: e.target.value })}
          />
        </Field>
        <Field label="Job title">
          <Input
            value={personal.jobTitle}
            placeholder="Senior Product Designer"
            onChange={(e) => updatePersonal({ jobTitle: e.target.value })}
          />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            value={personal.email}
            placeholder="jane@email.com"
            onChange={(e) => updatePersonal({ email: e.target.value })}
          />
        </Field>
        <Field label="Phone">
          <Input
            value={personal.phone}
            placeholder="+1 (555) 123-4567"
            onChange={(e) => updatePersonal({ phone: e.target.value })}
          />
        </Field>
        <Field label="Location">
          <Input
            value={personal.location}
            placeholder="San Francisco, CA"
            onChange={(e) => updatePersonal({ location: e.target.value })}
          />
        </Field>
        <Field label="Website">
          <Input
            value={personal.website}
            placeholder="janedoe.com"
            onChange={(e) => updatePersonal({ website: e.target.value })}
          />
        </Field>
        <Field label="LinkedIn">
          <Input
            value={personal.linkedin}
            placeholder="linkedin.com/in/janedoe"
            onChange={(e) => updatePersonal({ linkedin: e.target.value })}
          />
        </Field>
        <Field label="GitHub">
          <Input
            value={personal.github}
            placeholder="github.com/janedoe"
            onChange={(e) => updatePersonal({ github: e.target.value })}
          />
        </Field>
      </div>

      <Field
        label="Professional summary"
        hint="Write 2-4 sentences about your professional background."
        trailing={`${personal.summary.length}/${SUMMARY_MAX}`}
      >
        <Textarea
          value={personal.summary}
          rows={5}
          maxLength={SUMMARY_MAX}
          placeholder="Senior Product Designer with 8+ years crafting intuitive digital experiences..."
          onChange={(e) => updatePersonal({ summary: e.target.value })}
        />
      </Field>
    </div>
  );
}
