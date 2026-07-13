"use client";

import * as React from "react";
import { Plus, Briefcase } from "lucide-react";
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
import type { ExperienceItem } from "@/lib/types";

export function ExperienceSection() {
  const experience = useResumeStore((s) => s.data.experience);
  const addItem = useResumeStore((s) => s.addItem);
  const updateItem = useResumeStore((s) => s.updateItem);
  const removeItem = useResumeStore((s) => s.removeItem);
  const reorderItem = useResumeStore((s) => s.reorderItem);

  const handleAdd = () => {
    const newItem: ExperienceItem = {
      id: uuid(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    addItem("experience", newItem);
  };

  return (
    <div className="space-y-4">
      {experience.length === 0 ? (
        <EmptyState
          icon={<Briefcase className="size-5" />}
          title="No experience yet"
          description="Add your work history to get started."
        />
      ) : null}

      {experience.map((item, index) => (
        <RepeatableItem
          key={item.id}
          index={index}
          total={experience.length}
          title={item.position || item.company || "Untitled position"}
          onMoveUp={() => reorderItem("experience", index, index - 1)}
          onMoveDown={() => reorderItem("experience", index, index + 1)}
          onRemove={() => removeItem("experience", item.id)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Position">
              <Input
                value={item.position}
                placeholder="Senior Product Designer"
                onChange={(e) =>
                  updateItem("experience", item.id, { position: e.target.value })
                }
              />
            </Field>
            <Field label="Company">
              <Input
                value={item.company}
                placeholder="Lumina Labs"
                onChange={(e) =>
                  updateItem("experience", item.id, { company: e.target.value })
                }
              />
            </Field>
            <Field label="Location">
              <Input
                value={item.location}
                placeholder="San Francisco, CA"
                onChange={(e) =>
                  updateItem("experience", item.id, { location: e.target.value })
                }
              />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Start date">
                <Input
                  value={item.startDate}
                  placeholder="Mar 2022"
                  onChange={(e) =>
                    updateItem("experience", item.id, { startDate: e.target.value })
                  }
                />
              </Field>
              <Field label="End date">
                <Input
                  value={item.current ? "Present" : item.endDate}
                  placeholder="Feb 2024"
                  disabled={item.current}
                  onChange={(e) =>
                    updateItem("experience", item.id, { endDate: e.target.value })
                  }
                />
              </Field>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Switch
              id={`current-${item.id}`}
              checked={item.current}
              onCheckedChange={(checked) =>
                updateItem("experience", item.id, {
                  current: checked,
                  endDate: checked ? "Present" : item.endDate,
                })
              }
            />
            <Label htmlFor={`current-${item.id}`} className="text-sm font-normal">
              I currently work here
            </Label>
          </div>

          <Field
            className="mt-4"
            label="Description"
            hint="One achievement per line. Start with action verbs."
          >
            <Textarea
              value={item.description}
              rows={5}
              placeholder={
                "Led end-to-end design for the flagship analytics platform.\nEstablished a cross-functional design system adopted by 4 product teams."
              }
              onChange={(e) =>
                updateItem("experience", item.id, { description: e.target.value })
              }
            />
          </Field>
        </RepeatableItem>
      ))}

      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="size-4" />
        Add experience
      </Button>
    </div>
  );
}
