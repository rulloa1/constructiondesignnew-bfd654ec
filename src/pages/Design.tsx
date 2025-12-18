import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Detail images for the bento grid
import detailTimberBeams from "@/assets/details/detail-timber-beams.jpg";
import detailSpaVanity from "@/assets/details/detail-spa-vanity.jpg";
import detailLimestoneFireplace from "@/assets/details/detail-limestone-fireplace.jpg";
import detailLeatherCabinetry from "@/assets/details/detail-leather-cabinetry.jpg";
import detailMarbleBath from "@/assets/details/detail-marble-bath.jpg";
import detailProRange from "@/assets/details/detail-pro-range.jpg";
import detailOceanviewFraming from "@/assets/details/detail-oceanview-framing.jpg";

/** 
 * Gradient placeholder component for image cards
 */
const GradientPlaceholder: React.FC<{ label: string; className?: string }> = ({ label, className = "" }) => (
  <div 
    className={`w-full h-full flex items-center justify-center ${className}`}
    style={{ background: "linear-gradient(135deg, hsl(var(--charcoal)) 0%, hsl(var(--stone)) 50%, hsl(var(--gold)) 100%)" }}
  >
    <span className="text-white font-playfair text-lg tracking-wider">{label}</span>
  </div>
);

/**
 * Bento card component with hover effects
 */
interface BentoCardProps {
  image?: string;
  label: string;
  number?: string;
  subtitle?: string;
  tags?: string[];
  className?: string;
  aspectRatio?: string;
  showOverlay?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  image, 
  label, 
  number, 
  subtitle,
  tags,
  className = "",
  aspectRatio = "aspect-[4/3]",
  showOverlay = false
}) => (
  <div className={`group relative overflow-hidden rounded-lg bg-offWhite border border-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}>
    <div className={`relative ${aspectRatio} overflow-hidden`}>
      {image ? (
        <img 
          src={image} 
          alt={label} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <GradientPlaceholder label={label} />
      )}
      
      {/* Hover overlay with description */}
      {showOverlay && (
        <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-sm font-inter text-center">{subtitle}</p>
        </div>
      )}
    </div>
    
    {/* Category number */}
    {number && (
      <span className="absolute top-4 left-4 font-playfair text-2xl lg:text-3xl text-gold font-light transition-all duration-300 group-hover:text-gold/80 group-hover:drop-shadow-[0_0_8px_rgba(201,169,97,0.5)]">
        {number}
      </span>
    )}
    
    {/* Label */}
    <div className="p-4">
      <h3 className="font-playfair text-lg text-charcoal">{label}</h3>
      {subtitle && !showOverlay && (
        <p className="font-inter text-xs text-stone mt-1">{subtitle}</p>
      )}
    </div>
    
    {/* Tags */}
    {tags && tags.length > 0 && (
      <div className="px-4 pb-4">
        <p className="font-inter text-xs text-stone">
          {tags.join(" • ")}
        </p>
      </div>
    )}
  </div>
);

/**
 * Development concept card for Section 3
 */
interface ConceptCardProps {
  title: string;
  tags: string[];
  delay: number;
  isVisible: boolean;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ title, tags, delay, isVisible }) => (
  <div 
    className={`bg-offWhite border border-cream rounded-lg p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
  >
    <h4 className="font-playfair text-lg text-charcoal mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="font-inter text-xs text-stone bg-cream px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Design = () => {
  const navigate = useNavigate();
  
  // Scroll animations for each section
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: bannerRef, isVisible: bannerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-cream">
      {/* HEADER */}
      <header 
        ref={headerRef as React.RefObject<HTMLElement>}
        className={`px-6 lg:px-12 py-8 lg:py-12 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Button
            variant="ghost"
            className="mb-8 text-stone hover:text-gold hover:bg-transparent -ml-4 font-inter text-sm"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          {/* Title */}
          <h1 className="font-playfair text-5xl lg:text-7xl text-charcoal tracking-tight mb-4">
            INTERIOR DESIGN
          </h1>
          
          {/* Subtitle */}
          <p className="font-inter text-stone text-base lg:text-lg tracking-wide">
            Architecture • Interiors • Custom Environments
          </p>
          
          {/* Gold divider */}
          <div className="w-16 h-[2px] bg-gold mt-6" />
        </div>
      </header>

      {/* SECTION 1: Architecture + Interiors Bento Grid */}
      <section 
        ref={section1Ref as React.RefObject<HTMLElement>}
        className="px-6 lg:px-12 py-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* LEFT COLUMN - Architecture (60%) */}
            <div 
              className={`lg:col-span-7 transition-all duration-700 ${
                section1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="group relative overflow-hidden rounded-lg bg-offWhite border border-cream h-full">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                  <img 
                    src={detailTimberBeams} 
                    alt="Architecture" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                    <p className="text-white text-sm lg:text-base font-inter text-center max-w-md">
                      Site-responsive design, structural coordination, smart home integration
                    </p>
                  </div>
                </div>
                
                {/* Category number */}
                <span className="absolute top-6 left-6 font-playfair text-4xl lg:text-5xl text-gold font-light transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(201,169,97,0.5)]">
                  01
                </span>
                
                {/* Label */}
                <div className="absolute bottom-6 left-6">
                  <h2 className="font-playfair text-2xl lg:text-3xl text-white drop-shadow-lg">ARCHITECTURE</h2>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Interiors (40%) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Interiors header */}
              <div 
                className={`transition-all duration-700 delay-100 ${
                  section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="font-playfair text-xl text-charcoal mb-4">INTERIORS</h3>
              </div>
              
              {/* Stacked interior cards */}
              {[
                { label: "Great Rooms", image: detailSpaVanity },
                { label: "Primary Suites", image: detailMarbleBath },
                { label: "Chef's Kitchens", image: detailProRange },
              ].map((item, idx) => (
                <div 
                  key={item.label}
                  className={`group relative overflow-hidden rounded-lg bg-offWhite border border-cream transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
                    section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: section1Visible ? `${200 + idx * 100}ms` : '0ms' }}
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.label} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-playfair text-lg text-charcoal">{item.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Exterior Spaces & Custom Furniture (50/50 Split) */}
      <section 
        ref={section2Ref as React.RefObject<HTMLElement>}
        className="px-6 lg:px-12 py-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Exterior Spaces */}
            <div 
              className={`transition-all duration-700 ${
                section2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <BentoCard 
                image={detailLimestoneFireplace}
                label="EXTERIOR SPACES & LANDSCAPE"
                number="02"
                tags={["Outdoor Living", "Pool & Spa", "Motor Courts", "Native Landscape"]}
                aspectRatio="aspect-[4/3]"
              />
            </div>

            {/* Custom Furniture */}
            <div 
              className={`transition-all duration-700 delay-150 ${
                section2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <BentoCard 
                image={detailLeatherCabinetry}
                label="CUSTOM FURNITURE"
                number="03"
                tags={["Statement Tables", "Built-Ins", "Vanities", "Specialty Storage"]}
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Development & Concepts (Hierarchy with 4-column grid) */}
      <section 
        ref={section3Ref as React.RefObject<HTMLElement>}
        className="px-6 lg:px-12 py-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-8 transition-all duration-700 ${
              section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="font-playfair text-3xl text-gold font-light">04</span>
            <h2 className="font-playfair text-2xl lg:text-3xl text-charcoal mt-2">DEVELOPMENT & CONCEPTS</h2>
            
            {/* Connector line */}
            <div className="flex justify-center mt-6">
              <div className="w-[2px] h-12 bg-gold/40" />
            </div>
          </div>
          
          {/* Horizontal connector line */}
          <div 
            className={`hidden lg:block relative h-[2px] bg-gold/40 mx-auto max-w-4xl mb-8 transition-all duration-700 delay-200 ${
              section3Visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          >
            {/* Vertical drops */}
            <div className="absolute left-[12.5%] top-0 w-[2px] h-6 bg-gold/40" />
            <div className="absolute left-[37.5%] top-0 w-[2px] h-6 bg-gold/40" />
            <div className="absolute left-[62.5%] top-0 w-[2px] h-6 bg-gold/40" />
            <div className="absolute left-[87.5%] top-0 w-[2px] h-6 bg-gold/40" />
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-10">
            <ConceptCard 
              title="Land Development"
              tags={["Entitlements", "Infrastructure", "Planning"]}
              delay={300}
              isVisible={section3Visible}
            />
            <ConceptCard 
              title="Residential Communities"
              tags={["Master Plan", "Amenities", "HOA"]}
              delay={400}
              isVisible={section3Visible}
            />
            <ConceptCard 
              title="Resort & Hospitality"
              tags={["Mixed-Use", "Golf", "Private Clubs"]}
              delay={500}
              isVisible={section3Visible}
            />
            <ConceptCard 
              title="Renovation & Repositioning"
              tags={["Historic", "Adaptive Reuse", "Restoration"]}
              delay={600}
              isVisible={section3Visible}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Custom Furniture Banner */}
      <section 
        ref={bannerRef as React.RefObject<HTMLElement>}
        className={`bg-charcoal py-16 lg:py-20 transition-all duration-700 ${
          bannerVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 
            className={`font-playfair text-3xl lg:text-4xl text-gold mb-4 transition-all duration-700 delay-200 ${
              bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            CUSTOM FURNITURE
          </h2>
          <p 
            className={`font-inter text-offWhite/80 mb-8 transition-all duration-700 delay-300 ${
              bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Bespoke craftsmanship for discerning clients
          </p>
          <Button
            variant="outline"
            className={`border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3 font-inter transition-all duration-700 delay-400 ${
              bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            onClick={() => navigate("/portfolio")}
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef as React.RefObject<HTMLElement>}
        className={`bg-charcoal py-20 lg:py-28 transition-all duration-700 ${
          ctaVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 
            className={`font-playfair text-3xl lg:text-5xl text-offWhite mb-4 transition-all duration-700 delay-200 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to Discuss Your Vision?
          </h2>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-400 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button
              onClick={() => navigate("/contact")}
              className="bg-gold hover:bg-gold/90 text-charcoal px-8 py-3 font-inter"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/portfolio")}
              className="border-offWhite text-offWhite hover:bg-offWhite hover:text-charcoal px-8 py-3 font-inter"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
