import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageWithWatermark } from "@/components/ImageWithWatermark";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    location?: string;
    images: string[];
  };
  categoryColor: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, categoryColor, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.1
  });

  const coverImage = project.images[0];

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Link 
        to={`/projects/${project.id}`}
        className="block"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-muted">
          <ImageWithWatermark>
            {!imageLoaded && (
              <Skeleton className="absolute inset-0" />
            )}
            <img
              src={coverImage}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </ImageWithWatermark>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`${categoryColor} px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider shadow-lg backdrop-blur-sm`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-1">
          <h3 className="font-playfair text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          {project.location && (
            <p className="font-inter text-sm text-charcoal/60">
              {project.location}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
