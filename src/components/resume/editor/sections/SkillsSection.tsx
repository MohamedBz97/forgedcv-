"use client";

import { Plus, Sparkles, Trash2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { EmptyState } from "./EmptyState";
import { useResumeStore } from "@/lib/resume-store";

const LEVEL_LABELS = ["", "Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

export function SkillsSection() {
  const skillCategories = useResumeStore((s) => s.data.skillCategories);
  const addSkill = useResumeStore((s) => s.addSkill);
  const updateSkill = useResumeStore((s) => s.updateSkill);
  const removeSkill = useResumeStore((s) => s.removeSkill);
  const addSkillCategory = useResumeStore((s) => s.addSkillCategory);
  const updateSkillCategory = useResumeStore((s) => s.updateSkillCategory);
  const removeSkillCategory = useResumeStore((s) => s.removeSkillCategory);

  return (
    <div className="space-y-4">
      {skillCategories.length === 0 ? (
        <EmptyState
          icon={<Sparkles className="size-5" />}
          title="No skills yet"
          description="Group your skills into categories like Design, Tools, or Languages."
        />
      ) : null}

      {skillCategories.map((category) => (
        <div
          key={category.id}
          className="space-y-4 rounded-lg border bg-card text-card-foreground shadow-xs"
        >
          <div className="flex items-center gap-2 border-b px-4 py-2.5">
            <Input
              value={category.name}
              placeholder="Category name (e.g. Design)"
              className="h-8 border-0 bg-transparent px-0 font-medium shadow-none focus-visible:ring-0"
              onChange={(e) => updateSkillCategory(category.id, e.target.value)}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-7 shrink-0 text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={() => removeSkillCategory(category.id)}
              aria-label="Remove category"
            >
              <Trash2 className="size-4" />
            </Button>
          </div>

          <div className="space-y-3 px-4 pb-4">
            {category.skills.length === 0 ? (
              <p className="rounded-md border border-dashed py-4 text-center text-xs text-muted-foreground">
                No skills in this category yet.
              </p>
            ) : null}

            {category.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Input
                  value={skill.name}
                  placeholder="Skill name"
                  className="sm:max-w-[220px]"
                  onChange={(e) =>
                    updateSkill(category.id, skill.id, { name: e.target.value })
                  }
                />
                <div className="flex flex-1 items-center gap-3">
                  <Slider
                    value={[skill.level]}
                    min={1}
                    max={5}
                    step={1}
                    className="flex-1"
                    onValueChange={(value) =>
                      updateSkill(category.id, skill.id, { level: value[0] ?? skill.level })
                    }
                  />
                  <span className="w-24 shrink-0 text-xs text-muted-foreground tabular-nums">
                    {LEVEL_LABELS[skill.level] ?? `Level ${skill.level}`}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-7 shrink-0 text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => removeSkill(category.id, skill.id)}
                  aria-label="Remove skill"
                >
                  <X className="size-4" />
                </Button>
              </div>
            ))}

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={() => addSkill(category.id, "")}
            >
              <Plus className="size-4" />
              Add skill
            </Button>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={() => addSkillCategory("New category")}
      >
        <Plus className="size-4" />
        Add category
      </Button>
    </div>
  );
}
