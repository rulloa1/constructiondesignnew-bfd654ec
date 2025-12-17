import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/michael-chandler-portfolio.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.1
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
  return <section ref={elementRef as React.RefObject<HTMLElement>} className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Michael Chandler - 37 years of quality craftsmanship" width={1920} height={1080} className="w-full h-full object-contain md:object-cover object-center transition-transform duration-100 ease-out bg-[#2a2a2a]" style={{
          transform: `translateY(${scrollY * 0.15}px)`
        }} loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      {/* Hero Content - Positioned at bottom */}
      <div className="relative h-screen flex items-end pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            {/* Tagline and CTA */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="font-inter text-sm tracking-[0.2em] text-white/70 uppercase mb-6">
                37 Years of Excellence in Design, Build & Development
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button asChild className="bg-gold hover:bg-gold/90 text-white px-8 py-3">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                <Link to="/contact" className="bg-secondary opacity-85 text-zinc-950">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="font-inter text-xs text-white/50 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>;
};