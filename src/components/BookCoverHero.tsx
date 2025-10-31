import React from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mc-logo-new.png";

interface BookCoverHeroProps {
  onOpenBook: () => void;
}

export const BookCoverHero: React.FC<BookCoverHeroProps> = ({ onOpenBook }) => {
  return (
    <section className="relative py-24 w-full bg-muted/30 flex items-center justify-center">
      <div className="relative">
        <div className="relative w-[400px] h-[600px] md:w-[500px] md:h-[700px] bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90 border-4 border-gold/30 rounded-sm">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent" />
          
          <div className="relative h-full flex flex-col items-center justify-center p-12 space-y-8">
            <div className="mb-8 flex justify-center">
              <img src={logo} alt="MC Logo" className="h-56 w-auto" />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gold/50" />
              <div className="w-2 h-2 rotate-45 border border-gold/50" />
              <div className="w-16 h-px bg-gold/50" />
            </div>

            <p className="font-inter text-cream text-lg md:text-xl font-light tracking-[0.3em] uppercase whitespace-nowrap">
              Fine Construction & Design
            </p>

            <div className="pt-8">
              <Button 
                onClick={onOpenBook} 
                className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-medium px-8 py-6 text-base tracking-wide uppercase"
              >
                Open Portfolio
              </Button>
            </div>
          </div>

          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold/30" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gold/30" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gold/30" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold/30" />
        </div>
      </div>
    </section>
  );
};