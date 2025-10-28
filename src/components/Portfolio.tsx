import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, ProjectCategory } from "@/data/projects";
import { Link } from "react-router-dom";

interface PortfolioProps {
  onClose: () => void;
}

const categories = ["All", "Residential", "Commercial", "Hospitality", "Design Build"];

const categoryColors: Record<string, string> = {
  Residential: "bg-charcoal/90 text-cream",
  Commercial: "bg-charcoal/90 text-cream",
  Hospitality: "bg-charcoal/90 text-cream",
  "Design Build": "bg-charcoal/90 text-cream",
};

export const Portfolio: React.FC<PortfolioProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryCount = (category: string) => {
    if (category === "All") return projects.length;
    return projects.filter(p => p.category === category).length;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <div className="sticky top-0 z-40 bg-background/98 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-16 py-8">
          <div className="flex items-center justify-between">
            <Button
              onClick={onClose}
              variant="ghost"
              className="text-foreground/60 hover:text-foreground hover:bg-transparent transition-colors font-light text-sm tracking-wide"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <h1 className="font-playfair text-xl md:text-2xl font-light text-foreground tracking-wide">
              Michael Chandler
            </h1>
            
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Minimal category filters */}
      <div className="sticky top-[89px] z-30 bg-background/98 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-16 py-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs font-inter uppercase tracking-[0.2em] transition-all duration-300 relative ${
                  selectedCategory === category
                    ? "text-foreground font-normal"
                    : "text-muted-foreground hover:text-foreground font-light"
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal project grid */}
      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project image */}
              <div className="aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  loading="lazy"
                />
              </div>

              {/* Project info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-light">
                    {project.category}
                  </span>
                  <span className="w-4 h-[1px] bg-border"></span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 font-light">
                    {project.location}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-light text-foreground group-hover:text-foreground/70 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Minimal footer */}
      <footer className="border-t border-border/50 bg-background py-16 mt-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-light text-muted-foreground tracking-wide">
              © {new Date().getFullYear()} Michael Chandler
            </p>
            
            <div className="flex gap-8">
              <a
                href="#"
                className="text-xs font-light text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/michael-chandler-3858a63a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-light text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-xs font-light text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
