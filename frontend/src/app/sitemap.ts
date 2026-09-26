import type { MetadataRoute } from "next";
import { API_URL } from "@/shared/config/api";

type Project = {
  link: string;
  updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rikale.ru";

  const response = await fetch(`${API_URL}/projects`);

  const projects: Project[] = await response.json();

  return [
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

    ...projects.map((project) => ({
      url: `${baseUrl}${project.link}`,
      lastModified: new Date(project.updatedAt),
    })),
  ];
}