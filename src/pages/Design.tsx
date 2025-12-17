import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Palette, Trees, Armchair, Building, Sparkles, Compass, PenLine, Truck } from "lucide-react";

// Architecture images
import beachfrontCover from "@/assets/projects/beachfront-1.webp";
import alpineRanchCover from "@/assets/projects/alpine-ranch-cover.webp";
import bigsurCover from "@/assets/projects/bigsur-cover.webp";
import bakersBay from "@/assets/projects/bakers-bay-1.webp";

// Interiors images
import miamiBeach1 from "@/assets/projects/miami-beach-1.webp";
import miamiBeach5 from "@/assets/projects/miami-beach-5.webp";
import miamiBeach10 from "@/assets/projects/miami-beach-10.webp";
import carmelKnolls5 from "@/assets/projects/carmel-knolls-5.webp";

// Exterior images
import syracuse1 from "@/assets/projects/syracuse-1.webp";
import syracuse20 from "@/assets/projects/syracuse-20.webp";
import syracuse30 from "@/assets/projects/syracuse-30.webp";
import carmelValley1 from "@/assets/projects/carmel-valley-1.webp";

// Furniture images
import miamiBeach15 from "@/assets/projects/miami-beach-15.webp";
import miamiBeach20 from "@/assets/projects/miami-beach-20.webp";
import carmelKnolls10 from "@/assets/projects/carmel-knolls-10.webp";
import beachfront5 from "@/assets/projects/beachfront-5.webp";

// Development images
import developmentCover from "@/assets/projects/development-cover.webp";
import developmentPlan from "@/assets/projects/development-plan.webp";
import abacoBoathouse from "@/assets/projects/abaco-luxe-boathouse-cover.webp";
import coastalRestoration from "@/assets/projects/coastal-restoration-cover.webp";

type CategoryKey = "all" | "architecture" | "interiors" | "exterior" | "furniture" | "development";

interface ConceptCard {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface CategoryData {
  title: string;
  tagline: string;
  concepts: ConceptCard[];
  capabilities: string[];
}

const categories: { key: CategoryKey; label: string; icon: React.ElementType }[] = [
  { key: "architecture", label: "Architecture", icon: Building2 },
  { key: "interiors", label: "Interiors", icon: Palette },
  { key: "exterior", label: "Exterior Spaces", icon: Trees },
  { key: "furniture", label: "Custom Furniture", icon: Armchair },
  { key: "development", label: "Development", icon: Building },
];

const categoryData: Record<Exclude<CategoryKey, "all">, CategoryData> = {
  architecture: {
    title: "Architecture",
    tagline: "Form Meets Function",
    concepts: [
      {
        title: "Coastal Modern Residence",
        description: "Cantilevered volumes maximize oceanfront views while hurricane-rated construction ensures lasting protection.",
        tags: ["Oceanfront", "Concrete", "Glass"],
        image: beachfrontCover,
      },
      {
        title: "Hill Country Contemporary",
        description: "Native Texas limestone anchors this home to the landscape, with passive cooling strategies reducing energy demands.",
        tags: ["Limestone", "Sustainable", "Texas"],
        image: alpineRanchCover,
      },
      {
        title: "Mountain Lodge Retreat",
        description: "Heavy timber construction and expansive glazing create intimate connection with alpine vistas.",
        tags: ["Timber Frame", "Mountain", "Rustic Modern"],
        image: bigsurCover,
      },
      {
        title: "Resort Residential Compound",
        description: "Multiple pavilions connected by covered walkways, blending hospitality-inspired design with private residence.",
        tags: ["Pavilion", "Compound", "Hospitality"],
        image: bakersBay,
      },
    ],
    capabilities: [
      "Site-responsive design",
      "Architect collaboration",
      "Structural engineering coordination",
      "Material specification",
      "Energy efficiency",
      "Smart home integration",
    ],
  },
  interiors: {
    title: "Interiors",
    tagline: "Curated Living Spaces",
    concepts: [
      {
        title: "Great Room Collection",
        description: "Double-height volumes with custom millwork, integrated lighting, and carefully considered sight lines.",
        tags: ["Millwork", "Lighting", "Volume"],
        image: miamiBeach1,
      },
      {
        title: "Primary Suite Sanctuary",
        description: "Spa-inspired bathrooms, custom closeting systems, and bedroom environments designed for restoration.",
        tags: ["Spa", "Custom Closets", "Luxury"],
        image: miamiBeach5,
      },
      {
        title: "Chef's Kitchen",
        description: "Professional-grade equipment, custom cabinetry, butler's pantries, and workflow-optimized layouts.",
        tags: ["Professional", "Cabinetry", "Workflow"],
        image: miamiBeach10,
      },
      {
        title: "Wine & Spirits Gallery",
        description: "Climate-controlled cellars with custom racking, tasting rooms, and display-worthy bottle presentation.",
        tags: ["Wine Cellar", "Climate Control", "Display"],
        image: carmelKnolls5,
      },
    ],
    capabilities: [
      "Custom millwork design",
      "Decorative ceiling treatments",
      "Lighting design",
      "Premium flooring installation",
      "Interior designer coordination",
      "Art display systems",
    ],
  },
  exterior: {
    title: "Exterior Spaces",
    tagline: "Landscape & Hardscape Integration",
    concepts: [
      {
        title: "Outdoor Living Pavilion",
        description: "Full outdoor kitchens, retractable screens, climate control, and seamless indoor-outdoor transitions.",
        tags: ["Outdoor Kitchen", "Pavilion", "Entertainment"],
        image: syracuse1,
      },
      {
        title: "Pool & Water Features",
        description: "Infinity edges, natural stone surrounds, integrated spas, and water features as sculptural elements.",
        tags: ["Infinity Pool", "Natural Stone", "Spa"],
        image: syracuse20,
      },
      {
        title: "Motor Court & Entry Sequence",
        description: "Arrival experiences that set expectations, with specimen plantings and architectural lighting.",
        tags: ["Entry", "Hardscape", "Lighting"],
        image: syracuse30,
      },
      {
        title: "Native Landscape Design",
        description: "Site-appropriate plantings that reduce maintenance while honoring regional character and ecology.",
        tags: ["Native Plants", "Sustainable", "Low Maintenance"],
        image: carmelValley1,
      },
    ],
    capabilities: [
      "Hardscape design & construction",
      "Pool & spa construction",
      "Outdoor kitchen systems",
      "Landscape architect coordination",
      "Irrigation & drainage systems",
      "Exterior lighting design",
    ],
  },
  furniture: {
    title: "Custom Furniture",
    tagline: "Bespoke Craftsmanship",
    concepts: [
      {
        title: "Statement Dining Tables",
        description: "Live-edge slabs, metal bases, expandable systems—each table designed for the specific space and client.",
        tags: ["Live Edge", "Custom", "Dining"],
        image: miamiBeach15,
      },
      {
        title: "Built-In Cabinetry Systems",
        description: "Library walls, entertainment centers, and storage solutions with furniture-grade finishes and precision joinery.",
        tags: ["Built-In", "Library", "Millwork"],
        image: miamiBeach20,
      },
      {
        title: "Bedroom Collections",
        description: "Coordinated beds, nightstands, and dressers with integrated technology and upholstered headboards.",
        tags: ["Bedroom", "Upholstered", "Integrated Tech"],
        image: carmelKnolls10,
      },
      {
        title: "Outdoor Furniture Collections",
        description: "Teak, ipe, and marine-grade fabrics designed to weather beautifully in harsh coastal environments.",
        tags: ["Teak", "Marine Grade", "Outdoor"],
        image: beachfront5,
      },
    ],
    capabilities: [
      "Design & specification",
      "Master craftsman partnerships",
      "Exotic material sourcing",
      "Custom finish development",
      "White-glove installation",
      "Maintenance programs",
    ],
  },
  development: {
    title: "Development",
    tagline: "Vision to Reality",
    concepts: [
      {
        title: "Land Development",
        description: "Entitlements, infrastructure, and phasing strategies that maximize land value while respecting site character.",
        tags: ["Entitlements", "Infrastructure", "Planning"],
        image: developmentCover,
      },
      {
        title: "Residential Communities",
        description: "Master-planned neighborhoods with cohesive design standards, shared amenities, and lasting value.",
        tags: ["Master Plan", "Community", "Amenities"],
        image: developmentPlan,
      },
      {
        title: "Resort & Hospitality",
        description: "Mixed-use developments, golf communities, and hospitality venues requiring specialized construction expertise.",
        tags: ["Resort", "Golf", "Mixed-Use"],
        image: abacoBoathouse,
      },
      {
        title: "Renovation & Repositioning",
        description: "Historic preservation, adaptive reuse, and strategic renovations that honor original character while meeting modern needs.",
        tags: ["Historic", "Adaptive Reuse", "Renovation"],
        image: coastalRestoration,
      },
    ],
    capabilities: [
      "Feasibility analysis",
      "Entitlement processing",
      "Design team assembly",
      "Budget development",
      "Construction management",
      "Quality assurance",
    ],
  },
};

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding vision, site, and requirements",
    icon: Sparkles,
  },
  {
    title: "Design",
    description: "Collaborative development with architects and designers",
    icon: PenLine,
  },
  {
    title: "Development",
    description: "Detailed planning, budgeting, and scheduling",
    icon: Compass,
  },
  {
    title: "Delivery",
    description: "Meticulous construction and quality assurance",
    icon: Truck,
  },
];

const ConceptCardComponent: React.FC<{ concept: ConceptCard; index: number }> = ({ concept }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50">
      {/* Image */}
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img
          src={concept.image}
          alt={concept.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 project-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h4 className="font-playfair text-lg font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
          {concept.title}
        </h4>
        <p className="font-inter text-sm text-charcoal/70 leading-relaxed mb-4">
          {concept.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {concept.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider bg-cream text-charcoal/60 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategorySection: React.FC<{ categoryKey: Exclude<CategoryKey, "all">; data: CategoryData }> = ({
  categoryKey,
  data,
}) => {
  return (
    <div className="mb-20">
      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[2px] bg-gold" />
          <span className="font-inter text-xs uppercase tracking-[0.2em] text-gold font-medium">
            {data.title}
          </span>
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-charcoal">
          {data.tagline}
        </h3>
      </div>

      {/* Concept Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.concepts.map((concept, index) => (
          <ConceptCardComponent key={concept.title} concept={concept} index={index} />
        ))}
      </div>

      {/* Capabilities */}
      <div className="bg-cream/50 rounded-lg p-6">
        <p className="font-inter text-xs uppercase tracking-[0.15em] text-charcoal/50 mb-3 font-medium">
          Capabilities
        </p>
        <p className="font-inter text-sm text-charcoal/80 leading-relaxed">
          {data.capabilities.join(" • ")}
        </p>
      </div>
    </div>
  );
};

const Design = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredCategories = activeCategory === "all"
    ? Object.entries(categoryData)
    : Object.entries(categoryData).filter(([key]) => key === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F6F3] text-charcoal">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-12 text-charcoal/60 hover:text-gold hover:bg-transparent -ml-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-charcoal mb-4">
              Design Concepts
            </h1>
            <p className="font-inter text-base sm:text-lg text-[#8B8680] mb-6">
              Luxury Residential • Hospitality • Commercial Development
            </p>
            <div className="w-16 h-[2px] bg-[#C9A961] mx-auto" />
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="pb-16 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl">
          <p className="font-inter text-center text-charcoal/80 leading-relaxed text-base sm:text-lg">
            Every exceptional project begins with a compelling vision. These concepts represent our design philosophy and construction capabilities—the synthesis of architectural innovation, master craftsmanship, and meticulous attention to detail that defines our work.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="pb-16 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-[#C9A961] text-white shadow-md"
                  : "bg-transparent text-charcoal border border-charcoal/30 hover:border-[#C9A961] hover:text-[#C9A961]"
              }`}
            >
              All Concepts
            </button>
            {categories.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-5 py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  activeCategory === key
                    ? "bg-[#C9A961] text-white shadow-md"
                    : "bg-transparent text-charcoal border border-charcoal/30 hover:border-[#C9A961] hover:text-[#C9A961]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="pb-8 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          {filteredCategories.map(([key, data]) => (
            <CategorySection
              key={key}
              categoryKey={key as Exclude<CategoryKey, "all">}
              data={data}
            />
          ))}
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#E8E4DE]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-12 h-[2px] bg-[#C9A961] mx-auto mb-8" />
          <blockquote className="font-playfair text-xl sm:text-2xl lg:text-3xl text-charcoal leading-relaxed italic">
            "We don't simply build structures—we craft environments that enhance how people live, work, and experience their world."
          </blockquote>
          <div className="w-12 h-[2px] bg-[#C9A961] mx-auto mt-8" />
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F8F6F3]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-charcoal mb-4">
              Our Process
            </h2>
            <div className="w-12 h-[2px] bg-[#C9A961] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A961]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#C9A961]" />
                  </div>
                  <div className="font-inter text-xs text-[#8B8680] mb-2 uppercase tracking-wider">
                    0{index + 1}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="py-8 px-4 sm:px-6 lg:px-12 bg-[#F8F6F3] border-t border-charcoal/10">
        <div className="container mx-auto max-w-4xl">
          <p className="font-inter text-xs text-center text-[#8B8680] italic leading-relaxed">
            Concepts shown represent design capabilities and construction expertise. Specific project details, client information, and proprietary designs are protected under confidentiality agreements.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Ready to Explore Your Vision?
          </h2>
          <p className="font-inter text-white/70 mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your project to life with the same dedication to excellence that defines all our work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-[#C9A961] hover:bg-[#C9A961]/90 text-white px-8 py-3 font-inter font-medium">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/" state={{ openPortfolio: true }}>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 font-inter font-medium"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
