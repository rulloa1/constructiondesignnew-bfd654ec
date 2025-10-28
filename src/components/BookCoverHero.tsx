import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface BookCoverHeroProps {
  onOpenBook: () => void;
}

export const BookCoverHero: React.FC<BookCoverHeroProps> = ({ onOpenBook }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative h-full flex items-center justify-center px-6">
        <div 
          className={`relative transition-all duration-700 ease-out ${
            isHovered ? 'scale-102 translate-y-[-5px]' : 'scale-100 translate-y-0'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`absolute inset-0 bg-charcoal/10 blur-3xl transition-all duration-700 ${
              isHovered ? 'opacity-40 scale-105' : 'opacity-20 scale-100'
            }`}
            style={{ transform: 'translateY(20px)' }}
          />
          
          <div className="relative w-[380px] h-[520px] md:w-[480px] md:h-[640px]">
            <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-charcoal to-charcoal/80 shadow-xl" />
            
            <div className="relative w-full h-full bg-cream shadow-2xl border-l border-charcoal/10 flex flex-col items-center justify-center p-12">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1),transparent_70%)]" />
              
              <div className="relative z-10 text-center space-y-12">
                <div className="space-y-6">
                  <h1 className="font-playfair text-5xl md:text-7xl font-light text-charcoal tracking-tight leading-[1.1]">
                    Michael<br />Chandler
                  </h1>
                  <div className="w-16 h-[1px] bg-charcoal/20 mx-auto" />
                </div>
                
                <p className="font-inter text-sm md:text-base text-charcoal/60 font-light tracking-[0.2em] uppercase">
                  Design & Construction
                </p>
                
                <Button
                  onClick={onOpenBook}
                  variant="ghost"
                  className="mt-12 text-charcoal hover:bg-charcoal/5 font-inter font-light tracking-[0.15em] uppercase text-xs border border-charcoal/20 px-8 py-6 transition-all duration-300 hover:border-charcoal/40"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
