import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DecorativeSeparator } from "@/components/DecorativeSeparator";

// Detail images
import detailBronzeBase from "@/assets/details/detail-bronze-base.jpg";
import detailBronzeHardware from "@/assets/details/detail-bronze-hardware.jpg";
import detailFloatingVanity from "@/assets/details/detail-floating-vanity.jpg";
import detailLeatherCabinetry from "@/assets/details/detail-leather-cabinetry.jpg";
import detailLimestoneFireplace from "@/assets/details/detail-limestone-fireplace.jpg";
import detailMarbleBath from "@/assets/details/detail-marble-bath.jpg";
import detailMarbleCounter from "@/assets/details/detail-marble-counter.jpg";
import detailOceanviewFraming from "@/assets/details/detail-oceanview-framing.jpg";
import detailPendantLighting from "@/assets/details/detail-pendant-lighting.jpg";
import detailProRange from "@/assets/details/detail-pro-range.jpg";
import detailSculpturalChandelier from "@/assets/details/detail-sculptural-chandelier.jpg";
import detailSkiStorage from "@/assets/details/detail-ski-storage.jpg";
import detailSpaVanity from "@/assets/details/detail-spa-vanity.jpg";
import detailTimberBeams from "@/assets/details/detail-timber-beams.jpg";
import detailVanityNiche from "@/assets/details/detail-vanity-niche.jpg";
import detailWallFaucet from "@/assets/details/detail-wall-faucet.jpg";

const moodBoardImages = [
  { num: "01", image: detailSpaVanity, caption: "Spa-inspired primary suites" },
  { num: "02", image: detailBronzeBase, caption: "Custom bronze details" },
  { num: "03", image: detailMarbleBath, caption: "Natural stone selection" },
  { num: "04", image: detailPendantLighting, caption: "Sculptural lighting" },
];

const projectShowcase = [
  { num: "01", image: detailOceanviewFraming, title: "Private Island Estate", subtitle: "$125M+ • Bahamas", value: "$125M+" },
  { num: "02", image: detailLimestoneFireplace, title: "The Clubs at Houston Oaks", subtitle: "$67MM • Texas", value: "$67MM" },
  { num: "03", image: detailTimberBeams, title: "Yellowstone Club", subtitle: "Luxury Condo Towers • Montana", value: "Multi-Million" },
  { num: "04", image: detailSculpturalChandelier, title: "Bakers Bay Resort", subtitle: "Beach Club & Spa • Bahamas", value: "Resort Development" },
];

const services = [
  { title: "OWNER'S REPRESENTATION", description: "Trusted advocate protecting your investment throughout the construction process." },
  { title: "DESIGN-BUILD CONSULTING", description: "Bridging architectural vision with constructability through unique dual expertise." },
  { title: "INTERNATIONAL LOGISTICS", description: "Complex supply chains and regulatory navigation across international projects." },
];

const processSteps = [
  { num: "01", title: "Discovery", description: "Understanding vision, site conditions, and project requirements." },
  { num: "02", title: "Design", description: "Collaborative development with architects and interior designers." },
  { num: "03", title: "Development", description: "Detailed planning, budgeting, and construction scheduling." },
  { num: "04", title: "Delivery", description: "Meticulous construction execution and quality assurance." },
];

const Design = () => {
  const navigate = useNavigate();

  // Scroll animations for each section
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: moodBoardRef, isVisible: moodBoardVisible } = useScrollAnimation({ threshold: 0.15 });
  const { elementRef: showcaseRef, isVisible: showcaseVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.15 });
  const { elementRef: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation({ threshold: 0.15 });
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation({ threshold: 0.15 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className={`relative min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {/* Left Side - Hero Image */}
        <div className={`relative h-[50vh] lg:h-auto overflow-hidden transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
          <img
            src={detailLeatherCabinetry}
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Vertical Portfolio Text */}
          <div className={`absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-[-50%]' : 'opacity-0 translate-y-[-40%]'
            }`}>
            <h1 className="font-playfair text-6xl text-white tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
              PORTFOLIO
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`bg-[#FAF9F7] p-8 lg:p-16 flex flex-col justify-center transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
          <Button
            variant="ghost"
            className="self-start mb-8 text-muted-foreground hover:text-gold hover:bg-transparent -ml-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <h1 className="font-playfair text-4xl lg:text-5xl text-foreground mb-6 lg:hidden">
            PORTFOLIO
          </h1>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="font-inter">Michael Chandler</p>
            <p className="font-inter">VP of Operations | Construction Executive</p>
            <div className="w-12 h-[1px] bg-gold my-6" />
            <p className="font-inter leading-relaxed max-w-sm">
              $500M+ portfolio across 12 US states and 4 countries. Procore Certified professional with 37+ years delivering ultra-high-end residential and resort developments. Bilingual English/Spanish.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="font-playfair text-4xl lg:text-5xl text-gold mb-2">$500M+</div>
              <div className="font-inter text-xs lg:text-sm text-background/60 uppercase tracking-wider">Portfolio Managed</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl lg:text-5xl text-gold mb-2">37+</div>
              <div className="font-inter text-xs lg:text-sm text-background/60 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl lg:text-5xl text-gold mb-2">12</div>
              <div className="font-inter text-xs lg:text-sm text-background/60 uppercase tracking-wider">US States</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl lg:text-5xl text-gold mb-2">4</div>
              <div className="font-inter text-xs lg:text-sm text-background/60 uppercase tracking-wider">Countries</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl lg:text-5xl text-gold mb-2">±2%</div>
              <div className="font-inter text-xs lg:text-sm text-background/60 uppercase tracking-wider">Budget Accuracy</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl lg:text-5xl text-gold mb-2">100%</div>
              <div className="font-inter text-xs lg:text-sm text-background/60 uppercase tracking-wider">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Board Section */}
      <section
        ref={moodBoardRef as React.RefObject<HTMLElement>}
        className="py-24 lg:py-32 px-4 lg:px-8 bg-white"
      >
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-12 transition-all duration-700 ${moodBoardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <p className="font-inter text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Design Concepts</p>
            <h2 className="font-playfair text-3xl lg:text-4xl text-foreground">MOOD BOARD</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {moodBoardImages.map((item, idx) => (
              <div
                key={item.num}
                className={`group relative transition-all duration-700 ${moodBoardVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: moodBoardVisible ? `${200 + idx * 100}ms` : '0ms' }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="absolute top-4 right-4 font-playfair text-4xl lg:text-5xl text-white/80 font-light">
                  {item.num}
                </span>
                <p className="font-inter text-xs text-muted-foreground mt-3 text-center">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase - Full Width */}
      <section
        ref={showcaseRef as React.RefObject<HTMLElement>}
        className="relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Large Feature Image */}
          <div className={`relative h-[60vh] lg:h-[80vh] overflow-hidden transition-all duration-1000 ${showcaseVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}>
            <img
              src={detailProRange}
              alt="Featured Project"
              className="w-full h-full object-cover"
            />
            <span className={`absolute bottom-8 right-8 font-playfair text-8xl lg:text-[12rem] text-white/20 font-light leading-none transition-all duration-1000 delay-300 ${showcaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              01
            </span>
          </div>

          {/* Right Side Grid */}
          <div className="grid grid-cols-2 grid-rows-2">
            {projectShowcase.slice(0, 4).map((item, idx) => (
              <div
                key={item.num}
                className={`relative h-[30vh] lg:h-[40vh] group overflow-hidden transition-all duration-700 ${showcaseVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                style={{ transitionDelay: showcaseVisible ? `${200 + idx * 150}ms` : '0ms' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 right-4 font-playfair text-3xl lg:text-4xl text-white/60 font-light">
                  0{idx + 1}
                </span>
                <div className="absolute bottom-4 left-4">
                  <p className="font-playfair text-white text-lg">{item.title}</p>
                  <p className="font-inter text-white/70 text-xs">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Services */}
      <section
        ref={skillsRef as React.RefObject<HTMLElement>}
        className="py-24 lg:py-32 px-4 lg:px-8 bg-[#FAF9F7]"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Image */}
            <div className={`lg:col-span-5 relative transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={detailSkiStorage}
                  alt="Skills"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 font-playfair text-8xl lg:text-[10rem] text-gold/10 font-light leading-none transition-all duration-1000 delay-300 ${skillsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                02
              </span>
            </div>

            {/* Right Content */}
            <div className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 delay-200 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
              <p className="font-inter text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Capabilities</p>
              <h2 className="font-playfair text-3xl lg:text-4xl text-foreground mb-10">SKILLS & SERVICES</h2>

              <div className="space-y-8">
                {services.map((service, idx) => (
                  <div
                    key={service.title}
                    className={`border-l-2 border-gold/30 pl-6 transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                    style={{ transitionDelay: skillsVisible ? `${400 + idx * 150}ms` : '0ms' }}
                  >
                    <h3 className="font-inter text-sm font-medium text-foreground tracking-wide mb-2">{service.title}</h3>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section
        ref={philosophyRef as React.RefObject<HTMLElement>}
        className="py-24 lg:py-32 bg-foreground text-background"
      >
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <span className={`font-playfair text-8xl lg:text-[10rem] text-gold/20 font-light leading-none block mb-4 transition-all duration-1000 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>03</span>
              <div className={`transition-all duration-1000 delay-200 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                <p className="font-inter text-xs tracking-[0.3em] text-background/60 uppercase mb-3">Philosophy</p>
                <h2 className="font-playfair text-3xl lg:text-4xl text-background mb-6">DESIGN PHILOSOPHY</h2>
                <blockquote className="font-playfair text-xl lg:text-2xl text-background/90 italic leading-relaxed">
                  "We don't simply build structures—we craft environments that enhance how people live, work, and experience their world."
                </blockquote>
              </div>
            </div>

            {/* Image */}
            <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${philosophyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={detailVanityNiche}
                  alt="Design Philosophy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef as React.RefObject<HTMLElement>}
        className="py-24 lg:py-32 px-4 lg:px-8 bg-white"
      >
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <span className="font-playfair text-8xl lg:text-[10rem] text-gold/10 font-light leading-none block">04</span>
            <p className="font-inter text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3 -mt-8 lg:-mt-16">Our Approach</p>
            <h2 className="font-playfair text-3xl lg:text-4xl text-foreground">DESIGN PROCESS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={step.num}
                className={`text-center transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: processVisible ? `${300 + idx * 150}ms` : '0ms' }}
              >
                <span className="font-playfair text-5xl lg:text-6xl text-gold/30 font-light block mb-4">{step.num}</span>
                <h3 className="font-playfair text-xl text-foreground mb-2">{step.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 lg:py-32 px-4 lg:px-8 bg-[#FAF9F7]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="font-playfair text-8xl lg:text-[10rem] text-gold/10 font-light leading-none block">05</span>
            <p className="font-inter text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3 -mt-8 lg:-mt-16">Credentials</p>
            <h2 className="font-playfair text-3xl lg:text-4xl text-foreground">QUALIFICATIONS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white shadow-luxury hover:shadow-luxury-lg transition-shadow duration-300">
              <div className="font-playfair text-5xl text-gold/30 mb-4">🎓</div>
              <h3 className="font-playfair text-lg text-foreground mb-2">Bachelor of Architecture</h3>
              <p className="font-inter text-sm text-muted-foreground">University of Texas at Austin</p>
            </div>

            <div className="text-center p-6 bg-white shadow-luxury hover:shadow-luxury-lg transition-shadow duration-300">
              <div className="font-playfair text-5xl text-gold/30 mb-4">✓</div>
              <h3 className="font-playfair text-lg text-foreground mb-2">Procore Certified</h3>
              <p className="font-inter text-sm text-muted-foreground">Project Manager Professional</p>
            </div>

            <div className="text-center p-6 bg-white shadow-luxury hover:shadow-luxury-lg transition-shadow duration-300">
              <div className="font-playfair text-5xl text-gold/30 mb-4">37+</div>
              <h3 className="font-playfair text-lg text-foreground mb-2">Years Experience</h3>
              <p className="font-inter text-sm text-muted-foreground">Construction Leadership</p>
            </div>

            <div className="text-center p-6 bg-white shadow-luxury hover:shadow-luxury-lg transition-shadow duration-300">
              <div className="font-playfair text-5xl text-gold/30 mb-4">🌎</div>
              <h3 className="font-playfair text-lg text-foreground mb-2">Bilingual</h3>
              <p className="font-inter text-sm text-muted-foreground">English / Spanish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Image */}
      <section
        ref={ctaRef as React.RefObject<HTMLElement>}
        className="relative min-h-[60vh] flex items-center"
      >
        <div className={`absolute inset-0 transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}>
          <img
            src={detailWallFaucet}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className={`relative container mx-auto max-w-7xl px-4 lg:px-8 text-center transition-all duration-1000 delay-300 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="font-playfair text-3xl lg:text-5xl text-white mb-4">Ready to Begin?</h2>
          <p className="font-inter text-white/80 mb-8 max-w-lg mx-auto">
            Every exceptional project starts with a conversation. Let's discuss your vision.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-gold hover:bg-gold/90 text-white px-8 py-3"
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Design;
