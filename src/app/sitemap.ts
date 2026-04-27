import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { getPrimaryNavPaths } from "@/shared/site-navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const paths = getPrimaryNavPaths();

  return paths.map((path) => ({
    url: `${base}${path ? path : "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
