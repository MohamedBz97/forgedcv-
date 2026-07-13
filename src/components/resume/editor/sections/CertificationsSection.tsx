"use client";

import { Plus, Award } from "lucide-react";
import { v4 as uuid } from "uuid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "../Field";
import { RepeatableItem } from "../RepeatableItem";
import { EmptyState } from "./EmptyState";
import { useResumeStore } from "@/lib/resume-store";
import type { CertificationItem } from "@/lib/types";

export function CertificationsSection() {
  const certifications = useResumeStore((s) => s.data.certifications);
  const addItem = useResumeStore((s) => s.addItem);
  const updateItem = useResumeStore((s) => s.updateItem);
  const removeItem = useResumeStore((s) => s.removeItem);
  const reorderItem = useResumeStore((s) => s.reorderItem);

  const handleAdd = () => {
    const newItem: CertificationItem = {
      id: uuid(),
      name: "",
      issuer: "",
      date: "",
      url: "",
    };
    addItem("certifications", newItem);
  };

  return (
    <div className="space-y-4">
      {certifications.length === 0 ? (
        <EmptyState
          icon={<Award className="size-5" />}
          title="No certifications yet"
          description="Add licenses, certificates, or professional credentials."
        />
      ) : null}

      {certifications.map((item, index) => (
        <RepeatableItem
          key={item.id}
          index={index}
          total={certifications.length}
          title={item.name || "Untitled certification"}
          onMoveUp={() => reorderItem("certifications", index, index - 1)}
          onMoveDown={() => reorderItem("certifications", index, index + 1)}
          onRemove={() => removeItem("certifications", item.id)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Certification name">
              <Input
                value={item.name}
                placeholder="Nielsen Norman UX Certification"
                onChange={(e) =>
                  updateItem("certifications", item.id, { name: e.target.value })
                }
              />
            </Field>
            <Field label="Issuer">
              <Input
                value={item.issuer}
                placeholder="NN/g"
                onChange={(e) =>
                  updateItem("certifications", item.id, { issuer: e.target.value })
                }
              />
            </Field>
            <Field label="Date">
              <Input
                value={item.date}
                placeholder="2024"
                onChange={(e) =>
                  updateItem("certifications", item.id, { date: e.target.value })
                }
              />
            </Field>
            <Field label="URL" hint="Optional link to verify.">
              <Input
                value={item.url}
                placeholder="credential.net/..."
                onChange={(e) =>
                  updateItem("certifications", item.id, { url: e.target.value })
                }
              />
            </Field>
          </div>
        </RepeatableItem>
      ))}

      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="size-4" />
        Add certification
      </Button>
    </div>
  );
}
