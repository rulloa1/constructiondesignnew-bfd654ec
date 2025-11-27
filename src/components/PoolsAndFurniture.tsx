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

export const PoolsAndFurniture = () => {
  const [poolProjects, setPoolProjects] = useState<Project[]>([]);
  const [furnitureProjects, setFurnitureProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Fetch Pool projects
      const {
        data: poolData,
        error: poolError
      } = await supabase.from("projects").select("*").eq("category", "Pools").order("display_order");
      if (poolError) throw poolError;

      // Fetch Custom Furniture projects
      const {
        data: furnitureData,
        error: furnitureError
      } = await supabase.from("projects").select("*").eq("category", "Custom Furniture").order("display_order");
      if (furnitureError) throw furnitureError;

      const poolWithImages = await Promise.all((poolData || []).map(async project => {
        const {
          data: images
        } = await supabase.from("project_images").select("image_url, rotation_angle").eq("project_id", project.id).order("display_order").limit(1).maybeSingle();
        return {
          ...project,
          image_url: images?.image_url,
          rotation_angle: images?.rotation_angle || 0
        };
      }));

      const furnitureWithImages = await Promise.all((furnitureData || []).map(async project => {
        const {
          data: images
        } = await supabase.from("project_images").select("image_url, rotation_angle").eq("project_id", project.id).order("display_order").limit(1).maybeSingle();
        return {
          ...project,
          image_url: images?.image_url,
          rotation_angle: images?.rotation_angle || 0
        };
      }));

      setPoolProjects(poolWithImages);
      setFurnitureProjects(furnitureWithImages);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return <section className="relative py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {loading ? <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Pools Section - Left */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold mb-6 sm:mb-8 text-foreground tracking-tight">
                  Pools
                </h2>
                {poolProjects.length === 0 ? <div className="text-center py-12 text-muted-foreground">
                    No pool projects available yet.
                  </div> : <div className="flex flex-col gap-6">
                    {poolProjects.slice(0, 3).map(project => <Card key={project.id} className="overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        {project.image_url && <div className="relative aspect-[3/4] overflow-hidden">
                            <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" style={{
                      transform: `rotate(${project.rotation_angle || 0}deg)`
                    }} />
                          </div>}
                        <CardContent className="p-6">
                          <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 text-foreground">
                            {project.title}
                          </h3>
                          {project.description && <p className="text-sm sm:text-base font-inter font-light text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>}
                        </CardContent>
                      </Card>)}
                  </div>}
              </div>

              {/* Custom Furniture Section - Right */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold mb-6 sm:mb-8 text-foreground tracking-tight">
                  Custom Furniture
                </h2>
                {furnitureProjects.length === 0 ? <div className="text-center py-12 text-muted-foreground">
                    No custom furniture projects available yet.
                  </div> : furnitureProjects.slice(0, 1).map(project => <Card key={project.id} className="overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {project.image_url && <div className="relative aspect-[16/9] overflow-hidden">
                        <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" style={{
                  transform: `rotate(${project.rotation_angle || 0}deg)`
                }} />
                      </div>}
                    <CardContent className="p-6">
                      <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 text-foreground">
                        {project.title}
                      </h3>
                      {project.description && <p className="text-sm sm:text-base font-inter font-light text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>}
                    </CardContent>
                  </Card>)}
              </div>
            </div>}
        </div>
      </div>
    </section>;
};
