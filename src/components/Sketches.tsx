import { Card, CardContent } from "@/components/ui/card";

export const Sketches = () => {
  const sketches = [
    {
      title: "Conceptual Floor Plan",
      category: "Architectural Sketch",
      description: "Hand-drawn spatial planning study exploring layout possibilities and flow",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
    {
      title: "Elevation Study",
      category: "Design Development",
      description: "Detailed facade exploration with material and proportion studies",
      image: "https://images.unsplash.com/photo-1554224311-beee4ece2f94?w=800&q=80",
    },
    {
      title: "Interior Perspective",
      category: "Conceptual Sketch",
      description: "Quick perspective rendering capturing spatial relationships and atmosphere",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    },
    {
      title: "Furniture Detail",
      category: "Custom Design",
      description: "Technical sketch illustrating custom furniture joinery and proportions",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    },
    {
      title: "Site Analysis",
      category: "Landscape Concept",
      description: "Preliminary landscape concept exploring topography and natural features",
      image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=800&q=80",
    },
    {
      title: "Material Exploration",
      category: "Design Development",
      description: "Sketched material palette studies and texture combinations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted/20 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              Conceptual Sketches
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl font-inter font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Raw creativity and exploratory design thinking captured through hand-drawn sketches, 
              concept studies, and preliminary design development
            </p>
          </div>

          {/* Sketches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sketches.map((sketch, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
                  <img
                    src={sketch.image}
                    alt={sketch.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply dark:mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-inter font-medium text-accent uppercase tracking-wider mb-2 block">
                    {sketch.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {sketch.title}
                  </h3>
                  <p className="text-sm sm:text-base font-inter font-light text-muted-foreground leading-relaxed">
                    {sketch.description}
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
