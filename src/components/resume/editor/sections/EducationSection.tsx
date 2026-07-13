"use client";

import { Plus, GraduationCap } from "lucide-react";
import { v4 as uuid } from "uuid";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Field } from "../Field";
import { RepeatableItem } from "../RepeatableItem";
import { EmptyState } from "./EmptyState";
import { useResumeStore } from "@/lib/resume-store";
import type { EducationItem } from "@/lib/types";

export function EducationSection() {
  const education = useResumeStore((s) => s.data.education);
  const addItem = useResumeStore((s) => s.addItem);
  const updateItem = useResumeStore((s) => s.updateItem);
  const removeItem = useResumeStore((s) => s.removeItem);
  const reorderItem = useResumeStore((s) => s.reorderItem);

  const handleAdd = () => {
    const newItem: EducationItem = {
      id: uuid(),
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    addItem("education", newItem);
  };

  return (
    <div className="space-y-4">
      {education.length === 0 ? (
        <EmptyState
          icon={<GraduationCap className="size-5" />}
          title="No education yet"
          description="Add your academic background."
        />
      ) : null}

      {education.map((item, index) => (
        <RepeatableItem
          key={item.id}
          index={index}
          total={education.length}
          title={item.institution || item.degree || "Untitled education"}
          onMoveUp={() => reorderItem("education", index, index - 1)}
          onMoveDown={() => reorderItem("education", index, index + 1)}
          onRemove={() => removeItem("education", item.id)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Institution">
              <Input
                value={item.institution}
                placeholder="Rhode Island School of Design"
                onChange={(e) =>
                  updateItem("education", item.id, { institution: e.target.value })
                }
              />
            </Field>
            <Field label="Location">
              <Input
                value={item.location}
                placeholder="Providence, RI"
                onChange={(e) =>
                  updateItem("education", item.id, { location: e.target.value })
                }
              />
            </Field>
            <Field label="Degree">
              <Input
                value={item.degree}
                placeholder="BFA"
                onChange={(e) =>
                  updateItem("education", item.id, { degree: e.target.value })
                }
              />
            </Field>
            <Field label="Field of study">
              <Input
                value={item.field}
                placeholder="Graphic Design"
                onChange={(e) =>
                  updateItem("education", item.id, { field: e.target.value })
                }
              />
            </Field>
            <Field label="Start date">
              <Input
                value={item.startDate}
                placeholder="2012"
                onChange={(e) =>
                  updateItem("education", item.id, { startDate: e.target.value })
                }
              />
            </Field>
            <Field label="End date">
              <Input
                value={item.current ? "Present" : item.endDate}
                placeholder="2016"
                disabled={item.current}
                onChange={(e) =>
                  updateItem("education", item.id, { endDate: e.target.value })
                }
              />
            </Field>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Switch
              id={`edu-current-${item.id}`}
              checked={item.current}
              onCheckedChange={(checked) =>
                updateItem("education", item.id, {
                  current: checked,
                  endDate: checked ? "Present" : item.endDate,
                })
              }
            />
            <Label htmlFor={`edu-current-${item.id}`} className="text-sm font-normal">
              I currently study here
            </Label>
          </div>

          <Field className="mt-4" label="Description" hint="Optional. Honors, relevant coursework, GPA, etc.">
            <Textarea
              value={item.description}
              rows={3}
              placeholder="Graduated with honors. Focus on interaction design and typography."
              onChange={(e) =>
                updateItem("education", item.id, { description: e.target.value })
              }
            />
          </Field>
        </RepeatableItem>
      ))}

      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="size-4" />
        Add education
      </Button>
    </div>
  );
}
