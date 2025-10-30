import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { projects, ProjectCategory } from "@/data/projects";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Lightbox } from "./Lightbox";
import { Construction } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Design Build"];

const categoryColors: Record<string, string> = {
  Residential: "bg-gold text-charcoal",
  Commercial: "bg-steelBlue text-cream",
  Hospitality: "bg-burgundy text-cream",
  "Design Build": "bg-accent text-charcoal",
};

interface PortfolioProps {
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number | null;
}

export const Portfolio: React.FC<PortfolioProps> = ({ isOpen, onClose, initialImageIndex }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen && initialImageIndex !== null && initialImageIndex !== undefined) {
      setCurrentProjectIndex(initialImageIndex);
      setCurrentImageIndex(0);
      setLightboxOpen(true);
    }
  }, [isOpen, initialImageIndex]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleImageClick = (projectIndex: number, imageIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const handlePrevious = () => {
    const currentProject = filteredProjects[currentProjectIndex];
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
      setCurrentImageIndex(filteredProjects[currentProjectIndex - 1].images.length - 1);
    }
  };

  const handleNext = () => {
    const currentProject = filteredProjects[currentProjectIndex];
    if (currentImageIndex < currentProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (currentProjectIndex < filteredProjects.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
      setCurrentImageIndex(0);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 z-40 bg-black/50 animate-fade-in" onClick={onClose} />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-cream w-full max-w-7xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden pointer-events-auto animate-scale-in">
          {/* Header */}
          <div className="bg-charcoal text-cream p-6 flex items-center justify-between">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold">
              Full Portfolio
            </h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-cream hover:bg-cream/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="bg-white border-b border-charcoal/10 px-6 py-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-inter px-4 py-2 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gold text-charcoal shadow-md'
                      : 'bg-cream text-charcoal hover:bg-gold/20 border border-gold/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Grid */}
          <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProjects.map((project, projectIndex) => (
                <React.Fragment key={project.id}>
                  {project.images.map((image, imageIndex) => (
                    <div
                      key={`${project.id}-${imageIndex}`}
                      onClick={() => handleImageClick(projectIndex, imageIndex)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-sm bg-charcoal hover-lift">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Badge for first image of project */}
                        {imageIndex === 0 && (
                          <div className="absolute top-2 right-2">
                            <Badge className={`${categoryColors[project.category]} text-xs`}>
                              {project.category}
                            </Badge>
                          </div>
                        )}

                        {/* Project title on first image */}
                        {imageIndex === 0 && (
                          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="font-playfair text-cream text-sm font-semibold">
                              {project.title}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredProjects[currentProjectIndex].images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
          projectTitle={filteredProjects[currentProjectIndex].title}
        />
      )}
    </>
  );
};
