import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
interface Project {
  id: string;
  title: string;
  description: string | null;
  image_url?: string;
  rotation_angle?: number;
}
export const ArchitecturalRenderings = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    try {
      const {
        data: projectsData,
        error: projectsError
      } = await supabase.from("projects").select("*").eq("category", "Architecture").order("display_order");
      if (projectsError) throw projectsError;
      const projectsWithImages = await Promise.all((projectsData || []).map(async project => {
        const {
          data: images
        } = await supabase.from("project_images").select("image_url, rotation_angle").eq("project_id", project.id).order("display_order").limit(1).maybeSingle();
        return {
          ...project,
          image_url: images?.image_url,
          rotation_angle: images?.rotation_angle || 0
        };
      }));
      setProjects(projectsWithImages);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };
  return <section id="renderings" className="relative py-16 sm:py-20 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
      </div>
    </section>;
};