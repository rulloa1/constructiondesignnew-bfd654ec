import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectImage {
  id: string;
  image_url: string;
  rotation_angle: number;
}

interface Project {
  id: string;
  title: string;
  description: string | null;
  image_url?: string;
  rotation_angle?: number;
  images?: ProjectImage[];
}

export const PoolsAndFurniture = () => {
  const [poolProjects, setPoolProjects] = useState<Project[]>([]);
  const [furnitureProjects, setFurnitureProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

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
          data: allImages
        } = await supabase.from("project_images").select("id, image_url, rotation_angle").eq("project_id", project.id).order("display_order");
        const images = allImages || [];
        return {
          ...project,
          image_url: images[0]?.image_url,
          rotation_angle: images[0]?.rotation_angle || 0,
          images: images
        };
      }));

      const furnitureWithImages = await Promise.all((furnitureData || []).map(async project => {
        const {
          data: allImages
        } = await supabase.from("project_images").select("id, image_url, rotation_angle").eq("project_id", project.id).order("display_order");
        const images = allImages || [];
        return {
          ...project,
          image_url: images[0]?.image_url,
          rotation_angle: images[0]?.rotation_angle || 0,
          images: images
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

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setGalleryOpen(true);
  };

  return <>
      <section className="relative py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {loading ? <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div> : <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Pools Section - Left (2 columns) */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-6 text-foreground tracking-tight">
                    Pools
                  </h2>
                  {poolProjects.length === 0 ? <div className="text-center py-12 text-muted-foreground">
                      No pool projects available yet.
                    </div> : poolProjects.slice(0, 1).map(project => <Card key={project.id} onClick={() => handleProjectClick(project)} className="overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                      {project.image_url && <div className="relative aspect-[3/4] overflow-hidden">
                          <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{
                    transform: `rotate(${project.rotation_angle || 0}deg)`
                  }} />
                          <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-cream text-lg font-inter">View Gallery</span>
                          </div>
                        </div>}
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-semibold mb-2 text-foreground">
                          {project.title}
                        </h3>
                        {project.description && <p className="text-sm font-inter font-light text-muted-foreground leading-relaxed line-clamp-2">
                            {project.description}
                          </p>}
                      </CardContent>
                    </Card>)}
                </div>

                {/* Custom Furniture Section - Right (3 columns) */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-6 text-foreground tracking-tight">
                    Custom Furniture
                  </h2>
                  {furnitureProjects.length === 0 ? <div className="text-center py-12 text-muted-foreground">
                      No custom furniture projects available yet.
                    </div> : furnitureProjects.slice(0, 1).map(project => <Card key={project.id} onClick={() => handleProjectClick(project)} className="overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                      {project.image_url && <div className="relative aspect-[16/9] overflow-hidden">
                          <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{
                    transform: `rotate(${project.rotation_angle || 0}deg)`
                  }} />
                          <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-cream text-lg font-inter">View Gallery</span>
                          </div>
                        </div>}
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-semibold mb-2 text-foreground">
                          {project.title}
                        </h3>
                        {project.description && <p className="text-sm font-inter font-light text-muted-foreground leading-relaxed line-clamp-2">
                            {project.description}
                          </p>}
                      </CardContent>
                    </Card>)}
                </div>
              </div>}
          </div>
        </div>
      </section>

      {selectedProject && <ProjectGallery open={galleryOpen} onOpenChange={setGalleryOpen} projectTitle={selectedProject.title} images={selectedProject.images || []} />}
    </>;
};
