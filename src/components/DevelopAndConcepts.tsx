import { Card, CardContent } from "@/components/ui/card";

export const DevelopAndConcepts = () => {
  const developmentProjects = [
    {
      title: "Residential Transformation",
      type: "Development Process",
      description: "From initial concept through construction documentation and implementation",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
    {
      title: "Material Palette Evolution",
      type: "Concept Development",
      description: "Exploring textures, finishes, and color relationships through iterative refinement",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    },
    {
      title: "Spatial Programming Study",
      type: "Design Concept",
      description: "Analyzing functional requirements and spatial adjacencies for optimal flow",
      image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=800&q=80",
    },
    {
      title: "Custom Millwork Design",
      type: "Development Documentation",
      description: "Detailed drawings and specifications for bespoke cabinetry and built-ins",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    },
    {
      title: "Lighting Concept Study",
      type: "Design Concept",
      description: "Layered lighting strategy balancing ambient, task, and accent illumination",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
    {
      title: "Construction Details",
      type: "Development Documentation",
      description: "Technical details ensuring design intent translates into built reality",
      image: "https://images.unsplash.com/photo-1554224311-beee4ece2f94?w=800&q=80",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              Development & Concepts
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl font-inter font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The evolution of design ideas from initial concept through detailed development, 
              documenting the creative journey from vision to reality
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {developmentProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-inter font-medium text-accent uppercase tracking-wider mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-inter font-light text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
