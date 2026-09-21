import type { Project } from "../model/project";
import { API_URL } from "@/shared";

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects`, {
	cache: "no-store",
  });

  if (!response.ok) {
	throw new Error("Не удалось загрузить проекты");
  }

  return response.json();
}

export async function getProjectByLink (link:string): Promise<Project | null> {
  const response = await fetch(`${API_URL}/projects/by-link?link=${encodeURIComponent(link)}`, {
	cache: "no-store",
  });

  if (!response.ok) {
	throw new Error("Не удалось загрузить проекты");
  }

  return response.json();
}

