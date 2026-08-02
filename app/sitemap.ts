import type { MetadataRoute } from "next";
import { publishedPortfolioItems } from "@/data/portfolio";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/portfolio", "/services", "/about", "/contact", "/privacy"];
  const staticPages = pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/portfolio" ? 0.9 : 0.7
  }));
  const casePages = publishedPortfolioItems.map((item) => ({
    url: `${siteUrl}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  return [...staticPages, ...casePages];
}
