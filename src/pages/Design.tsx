import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Hammer, PaintBucket, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Design = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Under Construction Content */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mb-8 text-foreground hover:text-accent transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>

          {/* Animated Icons */}
          <div className="flex justify-center gap-8 mb-8 animate-fade-in">
            <Hammer className="h-12 w-12 text-accent animate-pulse-subtle delay-100" />
            <PaintBucket className="h-12 w-12 text-accent animate-pulse-subtle delay-300" />
            <Wrench className="h-12 w-12 text-accent animate-pulse-subtle delay-500" />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 text-foreground tracking-tight">
            Design Gallery
          </h1>
          
          {/* Divider */}
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

          {/* Message */}
          <p className="text-xl sm:text-2xl font-inter font-light text-muted-foreground mb-6 leading-relaxed">
            Under Construction
          </p>
          
          <p className="text-base sm:text-lg font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            We're carefully curating our design portfolio to showcase our interior design, 
            architectural renderings, and custom furniture creations. Check back soon to explore 
            our collection of refined spaces and bespoke pieces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate("/portfolio")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-inter"
            >
              View Construction Portfolio
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/")}
              className="border-border hover:bg-secondary px-8 py-6 text-lg font-inter"
            >
              Back to Home
            </Button>
          </div>

          {/* Coming Soon Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Interiors", "Architecture", "Development", "Concepts", "Pools", "Custom Furniture"].map((category) => (
              <span 
                key={category} 
                className="px-4 py-2 bg-secondary border border-border rounded-full text-foreground text-sm font-inter font-light"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Design;