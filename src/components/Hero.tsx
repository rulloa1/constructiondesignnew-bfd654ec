import { useState, useEffect } from "react";
import heroImageWebP from "@/assets/hero-mc-portfolio.webp";
import heroImagePng from "@/assets/hero-mc-portfolio.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={heroImageWebP} type="image/webp" />
          <img src={heroImagePng} alt="Michael Chandler leading construction project - 30+ years of quality craftsmanship" width={1920} height={1080} className="w-full h-full object-cover object-[center_40%] transition-transform duration-100 ease-out" style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }} loading="eager" fetchPriority="high" />
        </picture>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Hero Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide mb-6">
          Michael Chandler
        </h1>
        <div className="flex items-center gap-4 md:gap-6 text-white/90">
          <span className="font-inter text-sm md:text-base tracking-widest uppercase">Design</span>
          <div className="w-px h-4 bg-white/60" />
          <span className="font-inter text-sm md:text-base tracking-widest uppercase">Build</span>
          <div className="w-px h-4 bg-white/60" />
          <span className="font-inter text-sm md:text-base tracking-widest uppercase">Develop</span>
        </div>
      </div>
    </section>;
};