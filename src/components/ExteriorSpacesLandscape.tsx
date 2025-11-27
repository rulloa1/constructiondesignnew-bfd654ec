import { Card, CardContent } from "@/components/ui/card";

export const ExteriorSpacesLandscape = () => {
  const exteriorProjects = [
    {
      title: "Outdoor Living Pavilion",
      category: "Exterior Architecture",
      description: "Contemporary outdoor entertainment space with seamless indoor-outdoor flow",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      title: "Infinity Pool Sanctuary",
      category: "Pool Design",
      description: "Luxurious infinity pool with panoramic views and integrated spa features",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    },
    {
      title: "Japanese Garden Retreat",
      category: "Landscape Design",
      description: "Zen-inspired landscape with natural stone, water features, and native plantings",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    },
    {
      title: "Modern Poolhouse",
      category: "Exterior Architecture",
      description: "Minimalist poolhouse with floor-to-ceiling glass and entertainment amenities",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      title: "Coastal Garden Design",
      category: "Landscape Design",
      description: "Sustainable coastal landscape with drought-resistant plantings and natural materials",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      title: "Resort-Style Pool Complex",
      category: "Pool Design",
      description: "Multi-level pool with swim-up bar, cabanas, and integrated fire features",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              Exterior Spaces & Landscape
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl font-inter font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming outdoor environments into extraordinary living spaces through thoughtful design, 
              sustainable landscapes, and luxurious pool installations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {exteriorProjects.map((project, index) => (
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
                    {project.category}
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
