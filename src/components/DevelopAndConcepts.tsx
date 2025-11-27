import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url?: string;
  rotation_angle?: number;
}

export const DevelopAndConcepts = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .in("category", ["Development", "Concepts"])
        .order("category")
        .order("display_order");

      if (projectsError) throw projectsError;

      const projectsWithImages = await Promise.all(
        (projectsData || []).map(async (project) => {
          const { data: images } = await supabase
            .from("project_images")
            .select("image_url, rotation_angle")
            .eq("project_id", project.id)
            .order("display_order")
            .limit(1)
            .maybeSingle();

          return {
            ...project,
            image_url: images?.image_url,
            rotation_angle: images?.rotation_angle || 0,
          };
        })
      );

      setProjects(projectsWithImages);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              Development & Concepts
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl font-inter font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial concepts to full development, bringing visionary projects to life
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No development or concept projects available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {project.image_url && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ transform: `rotate(${project.rotation_angle || 0}deg)` }}
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-sm sm:text-base font-inter font-light text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
