import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";
import { getAllExamples } from "@/lib/blog/examples";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const examples = getAllExamples();
  const base = "https://forgedcv.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/?examples=list`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/?blog=list`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const exampleRoutes: MetadataRoute.Sitemap = examples.map((e) => ({
    url: `${base}/?examples=${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/?blog=${p.slug}`,
    lastModified: new Date(p.updated || p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...exampleRoutes, ...blogRoutes];
}
