import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

const Design = () => {
  const navigate = useNavigate();
  
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
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <Construction className="w-24 h-24 text-gold mb-8" strokeWidth={1.5} />
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Under Construction
              </h1>
              <p className="font-inter text-lg text-charcoal/80 max-w-2xl leading-relaxed">
                Our Design Album is currently being curated. Check back soon to explore our collection of architectural designs, interior concepts, and custom furniture pieces.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Design;