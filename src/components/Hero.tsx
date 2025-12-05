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
          <img src={heroImagePng} alt="Michael Chandler leading construction project - 30+ years of quality craftsmanship" width={1920} height={1080} className="w-full h-full object-cover object-[center_40%] transition-transform duration-100 ease-out" style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }} loading="eager" fetchPriority="high" />
        </picture>
      </div>
      
      {/* Simple bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white mb-4 leading-tight drop-shadow-lg">
            30+ Years of Quality Craftsmanship
          </h1>
          <p className="text-lg sm:text-xl font-inter font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
            Architectural Design • Landscape Restoration • Construction Excellence
          </p>
          
          <div className="mt-8">
            <Button onClick={() => navigate("/portfolio")} className="bg-accent text-white hover:bg-accent/90 px-8 py-3 uppercase tracking-[0.15em] font-semibold shadow-lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>;
};