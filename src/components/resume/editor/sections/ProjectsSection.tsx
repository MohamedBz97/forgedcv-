"use client";

import { Plus, FolderGit2 } from "lucide-react";
import { v4 as uuid } from "uuid";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Field } from "../Field";
import { RepeatableItem } from "../RepeatableItem";
import { EmptyState } from "./EmptyState";
import { useResumeStore } from "@/lib/resume-store";
import type { ProjectItem } from "@/lib/types";

export function ProjectsSection() {
  const projects = useResumeStore((s) => s.data.projects);
  const addItem = useResumeStore((s) => s.addItem);
  const updateItem = useResumeStore((s) => s.updateItem);
  const removeItem = useResumeStore((s) => s.removeItem);
  const reorderItem = useResumeStore((s) => s.reorderItem);

  const handleAdd = () => {
    const newItem: ProjectItem = {
      id: uuid(),
      name: "",
      description: "",
      url: "",
      technologies: "",
    };
    addItem("projects", newItem);
  };

  return (
    <div className="space-y-4">
      {projects.length === 0 ? (
        <EmptyState
          icon={<FolderGit2 className="size-5" />}
          title="No projects yet"
          description="Showcase side projects, open-source work, or notable builds."
        />
      ) : null}

      {projects.map((item, index) => (
        <RepeatableItem
          key={item.id}
          index={index}
          total={projects.length}
          title={item.name || "Untitled project"}
          onMoveUp={() => reorderItem("projects", index, index - 1)}
          onMoveDown={() => reorderItem("projects", index, index + 1)}
          onRemove={() => removeItem("projects", item.id)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Project name">
              <Input
                value={item.name}
                placeholder="OpenDesign Kit"
                onChange={(e) =>
                  updateItem("projects", item.id, { name: e.target.value })
                }
              />
            </Field>
            <Field label="URL">
              <Input
                value={item.url}
                placeholder="github.com/you/project"
                onChange={(e) =>
                  updateItem("projects", item.id, { url: e.target.value })
                }
              />
            </Field>
            <Field
              label="Technologies"
              hint="Comma-separated list."
              className="sm:col-span-2"
            >
              <Input
                value={item.technologies}
                placeholder="Figma, React, Storybook"
                onChange={(e) =>
                  updateItem("projects", item.id, { technologies: e.target.value })
                }
              />
            </Field>
          </div>

          <Field className="mt-4" label="Description">
            <Textarea
              value={item.description}
              rows={3}
              placeholder="Brief description of the project, your role, and impact."
              onChange={(e) =>
                updateItem("projects", item.id, { description: e.target.value })
              }
            />
          </Field>
        </RepeatableItem>
      ))}

      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="size-4" />
        Add project
      </Button>
    </div>
  );
}
