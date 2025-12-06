import api from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import type { ArticleShort, Conference } from "@/types/models";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const conferences = await api.get("conferences/");
  const items: any = [];

  // Conference Pages
  conferences.forEach((c: Conference) => {
    items.push({
      url: `${BASE_URL}/conferences/${c.slug}`,
      lastModified: c.created_at,
    });

    // Article pages
    c.articles?.forEach((a: ArticleShort) => {
      items.push({
        url: `${BASE_URL}/conferences/article/${a.slug}`,
        lastModified: a.created_at,
      });
    });
  });

  return items;
}
