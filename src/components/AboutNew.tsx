import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mikeProfile from "@/assets/michael-chandler.jpg";

export const AboutNew = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-32 bg-charcoal text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section Label */}
            <p className="font-inter text-xs tracking-[0.3em] text-gold uppercase mb-4">
              Established 1987
            </p>

            {/* Heading */}
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              A Legacy of{" "}
              <span className="italic text-gold">Craftsmanship</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-white/70 font-inter leading-relaxed">
              <p>
                Through my experience of 37 years as a Business, Design, and
                Construction professional, I have found that exceptional results
                come from exceptional teams.
              </p>
              <p>
                My approach is simple: bring together the right people, create an
                environment built on mutual respect, and stay closely attuned to
                client feedback throughout every phase of a project.
              </p>
              <p>
                I've built my career on the universal business principle that
                quality construction isn't just about meeting standards—it's
                about exceeding them, by combining rigorous processes with
                forward-thinking design.
              </p>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src={mikeProfile}
                  alt="Michael Chandler - Master Builder"
                  className="w-full aspect-[3/4] object-cover grayscale-[30%]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>

              {/* Name Card Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-playfair text-2xl sm:text-3xl text-white mb-1">
                  Michael Chandler
                </p>
                <p className="font-inter text-xs tracking-[0.2em] text-gold uppercase">
                  Founder & Master Builder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10 transition-all duration-1000 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <span className="block font-playfair text-4xl sm:text-5xl lg:text-6xl text-gold font-light mb-2">
              37+
            </span>
            <span className="font-inter text-xs tracking-[0.2em] text-white/50 uppercase">
              Years Experience
            </span>
          </div>
          <div className="text-center">
            <span className="block font-playfair text-4xl sm:text-5xl lg:text-6xl text-gold font-light mb-2">
              500+
            </span>
            <span className="font-inter text-xs tracking-[0.2em] text-white/50 uppercase">
              Projects Completed
            </span>
          </div>
          <div className="text-center">
            <span className="block font-playfair text-4xl sm:text-5xl lg:text-6xl text-gold font-light mb-2">
              100%
            </span>
            <span className="font-inter text-xs tracking-[0.2em] text-white/50 uppercase">
              Client Satisfaction
            </span>
          </div>
          <div className="text-center">
            <span className="block font-playfair text-4xl sm:text-5xl lg:text-6xl text-gold font-light mb-2">
              25+
            </span>
            <span className="font-inter text-xs tracking-[0.2em] text-white/50 uppercase">
              Awards Won
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
