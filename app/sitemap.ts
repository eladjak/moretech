import type { MetadataRoute } from "next";
import { SITE } from "./lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/#activities`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/#demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/#pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
