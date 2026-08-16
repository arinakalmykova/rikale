import { getProjects, Project } from "@/entities";
import { useEffect, useState } from "react";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProjects();
        setProjects(data);
      } catch(err) {
         setError(err instanceof Error ? err.message : "Ошибка загрузки проектов");
      } finally {
        setLoading(false);
      }
      
    }
    loadProjects();
  }, []);

  return {
    projects,
    loading,
    error,
  };
}
