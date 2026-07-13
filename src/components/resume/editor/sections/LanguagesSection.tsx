"use client";

import { Plus, Languages } from "lucide-react";
import { v4 as uuid } from "uuid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field } from "../Field";
import { RepeatableItem } from "../RepeatableItem";
import { EmptyState } from "./EmptyState";
import { useResumeStore } from "@/lib/resume-store";
import type { LanguageItem } from "@/lib/types";

const LEVEL_OPTIONS = ["Native", "Fluent", "Advanced", "Intermediate", "Basic"] as const;

export function LanguagesSection() {
  const languages = useResumeStore((s) => s.data.languages);
  const addItem = useResumeStore((s) => s.addItem);
  const updateItem = useResumeStore((s) => s.updateItem);
  const removeItem = useResumeStore((s) => s.removeItem);
  const reorderItem = useResumeStore((s) => s.reorderItem);

  const handleAdd = () => {
    const newItem: LanguageItem = {
      id: uuid(),
      name: "",
      level: "Fluent",
    };
    addItem("languages", newItem);
  };

  return (
    <div className="space-y-4">
      {languages.length === 0 ? (
        <EmptyState
          icon={<Languages className="size-5" />}
          title="No languages yet"
          description="Add languages you speak and your proficiency."
        />
      ) : null}

      {languages.map((item, index) => (
        <RepeatableItem
          key={item.id}
          index={index}
          total={languages.length}
          title={item.name || "Untitled language"}
          onMoveUp={() => reorderItem("languages", index, index - 1)}
          onMoveDown={() => reorderItem("languages", index, index + 1)}
          onRemove={() => removeItem("languages", item.id)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Language">
              <Input
                value={item.name}
                placeholder="English"
                onChange={(e) =>
                  updateItem("languages", item.id, { name: e.target.value })
                }
              />
            </Field>
            <Field label="Proficiency">
              <Select
                value={item.level}
                onValueChange={(value) =>
                  updateItem("languages", item.id, { level: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  {LEVEL_OPTIONS.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
        </RepeatableItem>
      ))}

      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="size-4" />
        Add language
      </Button>
    </div>
  );
}
