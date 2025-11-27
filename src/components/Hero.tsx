import { useState, useEffect } from "react";
import heroImageWebP from "@/assets/hero-mc-portfolio.webp";
import heroImagePng from "@/assets/hero-mc-portfolio.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section ref={elementRef as React.RefObject<HTMLElement>} className={`relative h-screen w-full overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="absolute inset-0 bg-background">
        <picture>
          <source srcSet={heroImageWebP} type="image/webp" />
          <img src={heroImagePng} alt="Michael Chandler leading construction project - 37 years of quality craftsmanship in architectural design, landscape restoration, and construction excellence" width={1920} height={1080} className="w-full h-full object-cover object-[center_40%] transition-transform duration-100 ease-out" style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }} loading="eager" fetchPriority="high" />
        </picture>
      </div>
      
      {/* Edge Fade Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 75% 70% at 50% 40%, transparent 0%, transparent 40%, hsl(var(--background) / 0.3) 65%, hsl(var(--background)) 100%)'
    }} />
      
      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-white mb-3 sm:mb-4 md:mb-5 leading-tight drop-shadow-lg [text-shadow:0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(228,179,33,0.3)]">
            30+ Years of Quality Craftsmanship
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-inter font-light text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] px-2">
            Architectural Design | Landscape Restoration | Construction Excellence
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button onClick={() => navigate("/portfolio")} className="bg-accent text-white hover:bg-accent/90 text-sm sm:text-base px-6 sm:px-8 py-2.5 uppercase tracking-[0.2em] font-semibold shadow-lg">
              View Portfolio
            </Button>
            <Button onClick={() => navigate("/contact")} variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-charcoal text-sm sm:text-base px-6 sm:px-8 py-2.5 uppercase tracking-[0.2em] font-semibold">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>;
};