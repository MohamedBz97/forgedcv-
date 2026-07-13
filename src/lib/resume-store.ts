import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ResumeData, ResumeSettings, View, TemplateId } from "./types";
import { defaultResumeData, defaultSettings, createEmptyResumeData } from "./default-data";
import { v4 as uuid } from "uuid";

interface ResumeState {
  // navigation
  view: View;
  setView: (v: View) => void;

  // document
  title: string;
  setTitle: (t: string) => void;

  data: ResumeData;
  settings: ResumeSettings;

  // actions - personal
  updatePersonal: (patch: Partial<ResumeData["personal"]>) => void;

  // generic list helpers
  addItem: <K extends ListKey>(key: K, item: ResumeData[K][number]) => void;
  updateItem: <K extends ListKey>(
    key: K,
    id: string,
    patch: Partial<ResumeData[K][number]>
  ) => void;
  removeItem: <K extends ListKey>(key: K, id: string) => void;
  reorderItem: <K extends ListKey>(key: K, from: number, to: number) => void;

  // skills nested
  addSkill: (categoryId: string, name: string) => void;
  updateSkill: (categoryId: string, skillId: string, patch: { name?: string; level?: number }) => void;
  removeSkill: (categoryId: string, skillId: string) => void;
  addSkillCategory: (name: string) => void;
  updateSkillCategory: (categoryId: string, name: string) => void;
  removeSkillCategory: (categoryId: string) => void;

  // settings
  setTemplate: (id: TemplateId) => void;
  setAccent: (color: string) => void;
  setFont: (font: string) => void;
  setFontSize: (size: ResumeSettings["fontSize"]) => void;
  setSpacing: (spacing: ResumeSettings["spacing"]) => void;
  togglePhoto: (show: boolean) => void;

  // document lifecycle
  loadSample: () => void;
  startBlank: () => void;
  loadDocument: (data: ResumeData, settings: ResumeSettings, title: string) => void;
  resetAll: () => void;
}

type ListKey =
  | "experience"
  | "education"
  | "projects"
  | "certifications"
  | "languages"
  | "courses";

function reorder<T>(arr: T[], from: number, to: number): T[] {
  const copy = [...arr];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set, get) => ({
      view: "landing",
      setView: (v) => set({ view: v }),

      title: "My Resume",
      setTitle: (t) => set({ title: t }),

      data: defaultResumeData,
      settings: defaultSettings,

      updatePersonal: (patch) =>
        set((s) => ({ data: { ...s.data, personal: { ...s.data.personal, ...patch } } })),

      addItem: (key, item) =>
        set((s) => ({ data: { ...s.data, [key]: [...(s.data[key] as unknown[]), item] } as ResumeData })),

      updateItem: (key, id, patch) =>
        set((s) => ({
          data: {
            ...s.data,
            [key]: (s.data[key] as { id: string }[]).map((it) =>
              it.id === id ? { ...it, ...patch } : it
            ),
          } as ResumeData,
        })),

      removeItem: (key, id) =>
        set((s) => ({
          data: {
            ...s.data,
            [key]: (s.data[key] as { id: string }[]).filter((it) => it.id !== id),
          } as ResumeData,
        })),

      reorderItem: (key, from, to) =>
        set((s) => ({
          data: { ...s.data, [key]: reorder(s.data[key] as unknown[], from, to) } as ResumeData,
        })),

      addSkill: (categoryId, name) =>
        set((s) => ({
          data: {
            ...s.data,
            skillCategories: s.data.skillCategories.map((c) =>
              c.id === categoryId
                ? { ...c, skills: [...c.skills, { id: uuid(), name, level: 3 }] }
                : c
            ),
          },
        })),

      updateSkill: (categoryId, skillId, patch) =>
        set((s) => ({
          data: {
            ...s.data,
            skillCategories: s.data.skillCategories.map((c) =>
              c.id === categoryId
                ? {
                    ...c,
                    skills: c.skills.map((sk) => (sk.id === skillId ? { ...sk, ...patch } : sk)),
                  }
                : c
            ),
          },
        })),

      removeSkill: (categoryId, skillId) =>
        set((s) => ({
          data: {
            ...s.data,
            skillCategories: s.data.skillCategories.map((c) =>
              c.id === categoryId
                ? { ...c, skills: c.skills.filter((sk) => sk.id !== skillId) }
                : c
            ),
          },
        })),

      addSkillCategory: (name) =>
        set((s) => ({
          data: {
            ...s.data,
            skillCategories: [...s.data.skillCategories, { id: uuid(), name, skills: [] }],
          },
        })),

      updateSkillCategory: (categoryId, name) =>
        set((s) => ({
          data: {
            ...s.data,
            skillCategories: s.data.skillCategories.map((c) =>
              c.id === categoryId ? { ...c, name } : c
            ),
          },
        })),

      removeSkillCategory: (categoryId) =>
        set((s) => ({
          data: {
            ...s.data,
            skillCategories: s.data.skillCategories.filter((c) => c.id !== categoryId),
          },
        })),

      setTemplate: (id) =>
        set((s) => ({ settings: { ...s.settings, templateId: id } })),

      setAccent: (color) => set((s) => ({ settings: { ...s.settings, accentColor: color } })),
      setFont: (font) => set((s) => ({ settings: { ...s.settings, fontFamily: font } })),
      setFontSize: (size) => set((s) => ({ settings: { ...s.settings, fontSize: size } })),
      setSpacing: (spacing) => set((s) => ({ settings: { ...s.settings, spacing } })),
      togglePhoto: (show) => set((s) => ({ settings: { ...s.settings, showPhoto: show } })),

      loadSample: () =>
        set({
          data: structuredClone(defaultResumeData),
          settings: { ...defaultSettings },
          title: "Sample Resume",
          view: "editor",
        }),

      startBlank: () =>
        set({
          data: createEmptyResumeData(),
          settings: { ...defaultSettings },
          title: "Untitled Resume",
          view: "editor",
        }),

      loadDocument: (data, settings, title) =>
        set({ data, settings, title, view: "editor" }),

      resetAll: () =>
        set({
          view: "landing",
          data: defaultResumeData,
          settings: defaultSettings,
          title: "My Resume",
        }),
    }),
    {
      name: "resume-builder-store",
      // only persist document data, not the view
      partialize: (s) => ({
        title: s.title,
        data: s.data,
        settings: s.settings,
      }),
    }
  )
);
