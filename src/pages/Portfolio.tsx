import React, { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, getProjectsByCategory, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Category = "All" | ProjectCategory;

const categories: Category[] = ["All", "Residential Construction", "Residential Development", "Civil", "Hospitality", "Design/Build"];

const categoryColors: Record<string, string> = {
  "Residential Construction": "bg-gold text-charcoal",
  "Residential Development": "bg-steelBlue text-white",
  Civil: "bg-steelBlue text-white",
  Hospitality: "bg-burgundy text-white",
  "Design/Build": "bg-gold text-charcoal",
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  // Scroll animations
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(selectedCategory);
  }, [selectedCategory]);

  const getCategoryCount = useCallback((category: Category) => {
    if (category === "All") return projects.length;
    return getProjectsByCategory(category).length;
  }, []);

  // Get first project image for hero
  const heroImage = projects[0]?.images?.[0];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section 
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative min-h-[60vh] lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Left Side - Hero Image */}
        <div className={`relative h-[40vh] lg:h-auto overflow-hidden transition-all duration-1000 delay-200 ${
          heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}>
          {heroImage && (
            <img 
              src={heroImage} 
              alt="Portfolio" 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          
          {/* Vertical Portfolio Text */}
          <div className={`absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-1000 delay-500 ${
            heroVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <h1 className="font-playfair text-5xl xl:text-6xl text-white tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">
              PORTFOLIO
            </h1>
          </div>

          {/* Large decorative number */}
          <span className={`absolute bottom-6 right-6 font-playfair text-7xl lg:text-9xl text-white/15 font-light leading-none transition-all duration-1000 delay-400 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            01
          </span>
        </div>

        {/* Right Side - Content */}
        <div className={`bg-[#FAF9F7] p-8 lg:p-12 xl:p-16 flex flex-col justify-center transition-all duration-1000 delay-300 ${
          heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}>
          <Button
            variant="ghost"
            className="self-start mb-8 text-muted-foreground hover:text-gold hover:bg-transparent -ml-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <h1 className="font-playfair text-4xl lg:text-5xl text-foreground mb-4 lg:hidden">
            PORTFOLIO
          </h1>

          <p className="font-inter text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Our Work</p>
          <h2 className="font-playfair text-3xl lg:text-4xl text-foreground mb-6">Project Collection</h2>
          
          <div className="w-12 h-[1px] bg-gold mb-6" />
          
          <p className="font-inter text-muted-foreground leading-relaxed max-w-md mb-8">
            A curated selection of residential, commercial, and hospitality projects showcasing 37 years of design excellence and meticulous craftsmanship.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <span className="font-playfair text-3xl lg:text-4xl text-gold">{projects.length}</span>
              <p className="font-inter text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects</p>
            </div>
            <div>
              <span className="font-playfair text-3xl lg:text-4xl text-gold">37</span>
              <p className="font-inter text-xs text-muted-foreground uppercase tracking-wider mt-1">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 z-30 bg-[#FAF9F7]/95 backdrop-blur-sm border-y border-border/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-inter text-sm transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-foreground text-background"
                      : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {category} ({getCategoryCount(category)})
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section 
        ref={gridRef as React.RefObject<HTMLElement>}
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className={`mb-12 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-end justify-between">
              <div>
                <span className="font-playfair text-7xl lg:text-8xl text-gold/10 font-light leading-none block -mb-4 lg:-mb-6">02</span>
                <h2 className="font-playfair text-2xl lg:text-3xl text-foreground">
                  {selectedCategory === "All" ? "All Projects" : selectedCategory}
                </h2>
              </div>
              <p className="font-inter text-sm text-muted-foreground hidden sm:block">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`transition-all duration-700 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: gridVisible ? `${200 + (index % 6) * 100}ms` : '0ms' }}
              >
                <ProjectCard
                  project={project}
                  categoryColor={categoryColors[project.category]}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-playfair text-7xl lg:text-8xl text-gold/20 font-light leading-none block mb-4">03</span>
              <h2 className="font-playfair text-3xl lg:text-4xl text-background mb-4">Start Your Project</h2>
              <p className="font-inter text-background/70 leading-relaxed max-w-md">
                Every exceptional project begins with a conversation. Let's discuss how we can bring your vision to life.
              </p>
            </div>
            <div className="lg:text-right">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-gold hover:bg-gold/90 text-white px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
