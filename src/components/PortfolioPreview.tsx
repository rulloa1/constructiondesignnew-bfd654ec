import React, { useState } from "react";
import { projects } from "@/data/projects";
import { Portfolio } from "./Portfolio";
import { Button } from "./ui/button";

export const PortfolioPreview: React.FC = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Get first 6 projects as preview
  const previewProjects = projects.slice(0, 6);

  const handleImageClick = (projectIndex: number) => {
    setSelectedImageIndex(projectIndex);
    setIsPortfolioOpen(true);
  };

  return (
    <>
      <section className="bg-cream py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal mb-6">
              Featured Work
            </h2>
            <p className="font-inter text-muted-foreground text-lg md:text-xl font-light max-w-3xl mx-auto">
              Explore a selection of our recent projects
            </p>
          </div>

          {/* Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {previewProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleImageClick(index)}
                className="group cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-charcoal hover-lift">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-playfair text-2xl font-semibold text-cream group-hover:text-gold mb-2 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-inter text-sm text-cream/80 group-hover:text-cream font-light transition-colors duration-300">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Portfolio Button */}
          <div className="text-center">
            <Button
              onClick={() => setIsPortfolioOpen(true)}
              size="lg"
              className="bg-gold text-charcoal hover:bg-gold/90 font-semibold uppercase tracking-wider"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Portfolio
        isOpen={isPortfolioOpen}
        onClose={() => {
          setIsPortfolioOpen(false);
          setSelectedImageIndex(null);
        }}
        initialImageIndex={selectedImageIndex}
      />
    </>
  );
};
