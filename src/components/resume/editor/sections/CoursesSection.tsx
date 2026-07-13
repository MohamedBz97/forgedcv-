"use client";

import { Plus, BookOpen } from "lucide-react";
import { v4 as uuid } from "uuid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "../Field";
import { RepeatableItem } from "../RepeatableItem";
import { EmptyState } from "./EmptyState";
import { useResumeStore } from "@/lib/resume-store";
import type { CourseItem } from "@/lib/types";

export function CoursesSection() {
  const courses = useResumeStore((s) => s.data.courses);
  const addItem = useResumeStore((s) => s.addItem);
  const updateItem = useResumeStore((s) => s.updateItem);
  const removeItem = useResumeStore((s) => s.removeItem);
  const reorderItem = useResumeStore((s) => s.reorderItem);

  const handleAdd = () => {
    const newItem: CourseItem = {
      id: uuid(),
      name: "",
      institution: "",
      date: "",
    };
    addItem("courses", newItem);
  };

  return (
    <div className="space-y-4">
      {courses.length === 0 ? (
        <EmptyState
          icon={<BookOpen className="size-5" />}
          title="No courses yet"
          description="Add online courses, MOOCs, or training programs."
        />
      ) : null}

      {courses.map((item, index) => (
        <RepeatableItem
          key={item.id}
          index={index}
          total={courses.length}
          title={item.name || "Untitled course"}
          onMoveUp={() => reorderItem("courses", index, index - 1)}
          onMoveDown={() => reorderItem("courses", index, index + 1)}
          onRemove={() => removeItem("courses", item.id)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Course name">
              <Input
                value={item.name}
                placeholder="Advanced Design Systems"
                onChange={(e) =>
                  updateItem("courses", item.id, { name: e.target.value })
                }
              />
            </Field>
            <Field label="Institution">
              <Input
                value={item.institution}
                placeholder="Interaction Design Foundation"
                onChange={(e) =>
                  updateItem("courses", item.id, { institution: e.target.value })
                }
              />
            </Field>
            <Field label="Date">
              <Input
                value={item.date}
                placeholder="2024"
                onChange={(e) =>
                  updateItem("courses", item.id, { date: e.target.value })
                }
              />
            </Field>
          </div>
        </RepeatableItem>
      ))}

      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="size-4" />
        Add course
      </Button>
    </div>
  );
}
