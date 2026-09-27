import type { MetadataRoute } from "next";
import { API_URL } from "@/shared/config/api";

type Project = {
  link: string;
  updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rikale.ru";

  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/price`,
      lastModified: new Date(),
    },
  ];

  try {
    const response = await fetch(`${API_URL}/projects`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return pages;
    }

    const projects: Project[] = await response.json();

    return [
      ...pages,
      ...projects.map((project) => ({
        url: `${baseUrl}${project.link}`,
        lastModified: new Date(project.updatedAt),
      })),
    ];
  } catch {
    return pages;
  }
}