import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";
import { getAllExamples } from "@/lib/blog/examples";
import { TEMPLATES } from "@/lib/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const examples = getAllExamples();
  const base = "https://forgedcv.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/templates`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/resume-examples`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tools/resume-score-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/cover-letter-builder`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const templateRoutes: MetadataRoute.Sitemap = TEMPLATES.map((t) => ({
    url: `${base}/templates/${t.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const exampleRoutes: MetadataRoute.Sitemap = examples.map((e) => ({
    url: `${base}/resume-examples/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updated || p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...templateRoutes, ...exampleRoutes, ...blogRoutes];
}