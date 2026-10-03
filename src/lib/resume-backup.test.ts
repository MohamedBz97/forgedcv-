import { describe, expect, it } from "vitest";
import { defaultResumeData, defaultSettings } from "./default-data";
import {
  createResumeBackup,
  isResumeBackupFileSizeAllowed,
  parseResumeBackup,
} from "./resume-backup";

describe("resume backup", () => {
  it("round-trips resume content and settings", () => {
    const backup = createResumeBackup("My resume", defaultResumeData, defaultSettings);
    const restored = parseResumeBackup(JSON.parse(JSON.stringify(backup)));

    expect(restored.title).toBe("My resume");
    expect(restored.data).toEqual(defaultResumeData);
    expect(restored.settings).toEqual(defaultSettings);
  });

  it("rejects malformed data and unsupported versions", () => {
    const backup = createResumeBackup("My resume", defaultResumeData, defaultSettings);

    expect(() => parseResumeBackup({ ...backup, version: 2 })).toThrow();
    expect(() => parseResumeBackup({ ...backup, data: { personal: {} } })).toThrow();
  });

  it("rejects empty and oversized files", () => {
    expect(isResumeBackupFileSizeAllowed(0)).toBe(false);
    expect(isResumeBackupFileSizeAllowed(8 * 1024 * 1024)).toBe(true);
    expect(isResumeBackupFileSizeAllowed(8 * 1024 * 1024 + 1)).toBe(false);
  });
});