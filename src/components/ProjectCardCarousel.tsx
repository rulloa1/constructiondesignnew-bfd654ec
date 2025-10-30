import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Project } from "@/data/projects";

interface ProjectCardCarouselProps {
  project: Project;
  categoryColor: string;
  index: number;
}

export const ProjectCardCarousel: React.FC<ProjectCardCarouselProps> = ({
  project,
  categoryColor,
  index,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Link
      to={`/project/${project.id}`}
      className="group cursor-pointer opacity-0 animate-fade-in-up block"
      style={{ animationDelay: `${index * 100 + 400}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-charcoal hover-lift">
        <Carousel setApi={setApi} className="w-full h-full">
          <CarouselContent className="h-full">
            {project.images.map((image, imgIndex) => (
              <CarouselItem key={imgIndex} className="h-full">
                <img
                  src={image}
                  alt={`${project.title} - Image ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows - Only show if more than 1 image */}
          {project.images.length > 1 && (
            <>
              <CarouselPrevious
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 rounded-full bg-white/90 hover:bg-white border-0 text-charcoal"
                onClick={(e) => e.preventDefault()}
              >
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 rounded-full bg-white/90 hover:bg-white border-0 text-charcoal"
                onClick={(e) => e.preventDefault()}
              >
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </>
          )}
        </Carousel>

        {/* Image Counter Badge */}
        {project.images.length > 1 && (
          <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm text-cream px-3 py-1 rounded-full text-xs font-medium">
            {current} / {count}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 pointer-events-none">
          <span
            className={`inline-block w-fit px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium mb-3 transition-colors duration-300 ${categoryColor}`}
          >
            {project.category}
          </span>
          <h3 className="font-playfair text-2xl font-semibold text-cream group-hover:text-gold mb-2 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-inter text-sm text-cream/80 group-hover:text-cream font-light transition-colors duration-300">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  );
};
