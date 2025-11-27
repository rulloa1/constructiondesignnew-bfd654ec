import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
type DesignSection = {
  id: string;
  label: string;
  category: string;
  span: string;
  tone: string;
};
const designSections: DesignSection[] = [
// Left column
{
  id: "architecture-left",
  label: "Architecture",
  category: "Architecture",
  span: "md:col-span-6 md:row-span-4",
  tone: "bg-gradient-to-br from-cream via-white to-gold/20 text-charcoal border-gold/30"
}, {
  id: "interiors-left",
  label: "Interiors",
  category: "Interiors",
  span: "md:col-span-6 md:row-span-3",
  tone: "bg-white/95 text-charcoal border-charcoal/10"
}, {
  id: "concepts",
  label: "Concepts",
  category: "Design/Build",
  span: "md:col-span-6 md:row-span-3",
  tone: "bg-white/90 text-charcoal border-gold/20"
},
// Right column
{
  id: "interiors-right",
  label: "Interiors",
  category: "Interiors",
  span: "md:col-span-6 md:row-span-2",
  tone: "bg-white/95 text-charcoal border-charcoal/10"
}, {
  id: "architecture-right",
  label: "Architecture",
  category: "Architecture",
  span: "md:col-span-6 md:row-span-3",
  tone: "bg-gradient-to-br from-cream via-white to-gold/20 text-charcoal border-gold/30"
}, {
  id: "exterior-spaces",
  label: "Exterior Spaces",
  category: "Civil",
  span: "md:col-span-6 md:row-span-3",
  tone: "bg-gradient-to-br from-emerald-50 to-emerald-200/70 text-emerald-900 border-emerald-200"
}, {
  id: "development",
  label: "Development & Concepts",
  category: "Residential Development",
  span: "md:col-span-6 md:row-span-2",
  tone: "bg-gradient-to-br from-steelBlue/90 via-steelBlue/80 to-charcoal text-cream border-white/10"
}];
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
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-4 sm:gap-5 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] grid-cols-1 md:grid-cols-12">
              {designSections.map(section => <button key={section.id} onClick={() => handleSectionClick(section.category)} className={`rounded-3xl border p-8 flex flex-col items-start justify-end ${section.tone} ${section.span} 
                    transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-2">
                      {section.label}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.3em] opacity-70 group-hover:opacity-100 transition-opacity">
                      View Gallery →
                    </p>
                  </div>
                </button>)}
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