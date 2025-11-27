import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteriorDesignShowcase } from "@/components/InteriorDesignShowcase";
import { ArchitecturalRenderings } from "@/components/ArchitecturalRenderings";
import { ExteriorSpacesLandscape } from "@/components/ExteriorSpacesLandscape";
import { DevelopAndConcepts } from "@/components/DevelopAndConcepts";
import { CustomFurniture } from "@/components/CustomFurniture";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Design = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 text-cream hover:text-gold transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>

            {/* Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 sm:mb-6 text-cream tracking-tight leading-tight">
                Portfolio Design Album
              </h1>
              <div className="w-24 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl md:text-2xl font-inter font-light text-cream/80 max-w-4xl mx-auto leading-relaxed">
                A curated collection of architectural vision, interior design excellence, and custom creations
              </p>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
              {[
                "Interiors",
                "Architecture",
                "Development",
                "Concepts",
                "Pools",
                "Custom Furniture",
              ].map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full text-cream text-sm font-inter font-light hover:bg-cream/20 transition-colors cursor-default"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Album Sections */}
      <InteriorDesignShowcase />
      <ArchitecturalRenderings />
      <DevelopAndConcepts />
      <ExteriorSpacesLandscape />
      <CustomFurniture />

      <Footer />
    </div>
  );
};

export default Design;
