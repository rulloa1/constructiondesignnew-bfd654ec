import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const designSections = [
  {
    id: "architecture",
    label: "ARCHITECTURE",
    category: "Architecture",
    className: "bg-muted/50 hover:bg-muted/70"
  },
  {
    id: "interiors",
    label: "INTERIORS",
    category: "Interiors",
    className: "bg-muted/30 hover:bg-muted/50"
  },
  {
    id: "development",
    label: "DEVELOPMENT & CONCEPTS",
    category: "Design/Build",
    className: "bg-muted/40 hover:bg-muted/60"
  },
  {
    id: "pools",
    label: "POOLS",
    category: "Civil",
    className: "bg-muted/50 hover:bg-muted/70"
  },
  {
    id: "furniture",
    label: "CUSTOM FURNITURE",
    category: "Custom Furniture",
    className: "bg-muted/30 hover:bg-muted/50"
  }
];
const Design = () => {
  const navigate = useNavigate();
  const handleSectionClick = (category: string) => {
    navigate(`/portfolio?category=${encodeURIComponent(category)}`);
  };
  return <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-gold/10" />
      <div className="absolute inset-0 opacity-[0.035]" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23888888' stroke-width='0.5'%3E%3Cpath d='M0 0h140v140H0z'/%3E%3Cpath d='M20 0v140M40 0v140M60 0v140M80 0v140M100 0v140M120 0v140M0 20h140M0 40h140M0 60h140M0 80h140M0 100h140M0 120h140'/%3E%3C/g%3E%3C/svg%3E\")"
    }} />

      <main className="relative z-10">
        <section className="pt-24 pb-14 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button variant="ghost" className="text-charcoal hover:text-gold hover:bg-white/70 border border-transparent hover:border-gold/30" onClick={() => navigate(-1)}>
                Back
              </Button>
              <Badge variant="secondary" className="tracking-[0.2em] uppercase bg-gold/10 text-charcoal">
                Design Album
              </Badge>
            </div>

            <div className="space-y-6 mb-12">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Interior Design</h1>
              <p className="font-inter text-lg text-charcoal/80 max-w-3xl leading-relaxed">
                A dedicated archive for sketches, elevations, and tactile studies across architecture, interiors, landscape, and custom furniture.
                Each section showcases curated projects from our portfolio.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl space-y-6">
            {/* Row 1: Architecture (large left) + Interiors (3 tall images right) */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[500px]">
              {/* Architecture - Large left section */}
              <button
                onClick={() => handleSectionClick("Architecture")}
                className="lg:col-span-3 rounded-2xl border border-border bg-muted/50 hover:bg-muted/70 transition-all duration-300 hover:shadow-xl flex items-end p-8 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="font-playfair text-4xl md:text-5xl font-semibold relative z-10">
                  ARCHITECTURE
                </h2>
              </button>

              {/* Interiors - Right column with header and 3 vertical sections */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-right">
                  INTERIORS
                </h2>
                <div className="grid grid-cols-3 gap-4 flex-1">
                  {[1, 2, 3].map((i) => (
                    <button
                      key={i}
                      onClick={() => handleSectionClick("Interiors")}
                      className="rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg flex items-center justify-center group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Development & Concepts - Full width */}
            <button
              onClick={() => handleSectionClick("Design/Build")}
              className="w-full rounded-2xl border border-border bg-muted/40 hover:bg-muted/60 transition-all duration-300 hover:shadow-xl min-h-[400px] flex items-center justify-center p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold relative z-10">
                DEVELOPMENT & CONCEPTS
              </h2>
            </button>

            {/* Row 3: Pools (left) + Custom Furniture (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[350px]">
              {/* Pools */}
              <button
                onClick={() => handleSectionClick("Civil")}
                className="rounded-2xl border border-border bg-muted/50 hover:bg-muted/70 transition-all duration-300 hover:shadow-xl flex items-center justify-center p-8 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="font-playfair text-4xl md:text-5xl font-semibold relative z-10">
                  POOLS
                </h2>
              </button>

              {/* Custom Furniture */}
              <button
                onClick={() => handleSectionClick("Custom Furniture")}
                className="rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:shadow-xl flex items-center justify-center p-8 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="font-playfair text-4xl md:text-5xl font-semibold relative z-10">
                  CUSTOM FURNITURE
                </h2>
              </button>
            </div>
          </div>
        </section>

        <section className="pb-24 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="rounded-3xl border border-gold/20 bg-white/80 p-8 shadow-xl text-center">
              <h2 className="font-playfair text-3xl mb-4">Ready to Start Your Project?</h2>
              <p className="font-inter text-charcoal/80 mb-6 max-w-2xl mx-auto">
                Schedule a design review to discuss how we can bring your vision to life.
              </p>
              <Button variant="default" className="bg-accent text-white hover:bg-accent/90" onClick={() => navigate("/contact")}>
                Schedule a Design Review
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Design;