import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import commercialAerial from "@/assets/book/commercial-aerial.png";
import residentialComplete from "@/assets/book/residential-complete.jpg";
import commercialFront from "@/assets/book/commercial-front.png";
import landscape1 from "@/assets/book/landscape-1.jpg";
import landscape2 from "@/assets/book/landscape-2.jpg";
import residentialDetail from "@/assets/book/residential-detail.jpg";
import after1 from "@/assets/book/after-1.jpg";
import archDetail from "@/assets/book/arch-detail.jpg";
import lagunaCommercial from "@/assets/book/laguna-commercial.jpg";
import diningRoom from "@/assets/book/dining-room.jpg";

interface Page {
  id: number;
  type: "cover" | "image-left" | "image-right" | "text" | "closing";
  image?: string;
  title?: string;
  subtitle?: string;
  content?: string;
}

const pages: Page[] = [
  // Pages 1-2: COVER
  {
    id: 1,
    type: "cover",
    title: "Michael Chandler",
    subtitle: "Construction & Design Portfolio",
    content: "Transforming visions into exceptional spaces across Monterey Peninsula"
  },
  {
    id: 2,
    type: "text",
    title: "Introduction",
    content: "With decades of experience in residential, commercial, and landscape construction, we bring precision, artistry, and dedication to every project. From initial concept to final detail, our commitment to excellence shapes spaces that inspire and endure."
  },
  // Pages 3-4: RESIDENTIAL TRANSFORMATION
  {
    id: 3,
    type: "image-left",
    image: residentialComplete,
    title: "Residential Transformation",
    content: "Creating homes that reflect your lifestyle and aspirations. Our residential projects blend timeless design with modern functionality, ensuring every detail enhances your daily living experience."
  },
  {
    id: 4,
    type: "image-right",
    image: residentialDetail,
    content: "From complete renovations to custom builds, we approach each home with meticulous attention to architectural integrity, quality craftsmanship, and the unique vision of our clients."
  },
  // Pages 5-6: COMMERCIAL VISION
  {
    id: 5,
    type: "image-left",
    image: commercialAerial,
    title: "Commercial Vision",
    content: "Building spaces that drive business success. Our commercial projects combine functional design with aesthetic appeal, creating environments that welcome customers and inspire teams."
  },
  {
    id: 6,
    type: "image-right",
    image: commercialFront,
    content: "From retail centers to office complexes, we deliver projects on time and within budget, ensuring every square foot contributes to your business objectives."
  },
  // Pages 7-8: LANDSCAPE & SITE MASTERY
  {
    id: 7,
    type: "image-left",
    image: landscape1,
    title: "Landscape & Site Mastery",
    content: "Transforming outdoor spaces into natural sanctuaries. Our landscape expertise encompasses site development, hardscaping, irrigation, and plantings that thrive in the coastal environment."
  },
  {
    id: 8,
    type: "image-right",
    image: landscape2,
    content: "We understand the unique challenges of Monterey Peninsula terrain, creating outdoor spaces that harmonize with their surroundings while maximizing functionality and beauty."
  },
  // Pages 9-10: CRAFTSMANSHIP
  {
    id: 9,
    type: "image-left",
    image: archDetail,
    title: "Craftsmanship",
    content: "Excellence lives in the details. Our commitment to superior craftsmanship is evident in every joint, finish, and fixture. We source premium materials and employ time-honored techniques alongside modern innovations."
  },
  {
    id: 10,
    type: "image-right",
    image: diningRoom,
    content: "Quality is never an accident. It's the result of skilled hands, careful planning, and an unwavering dedication to doing things right, no matter how long it takes."
  },
  // Pages 11-12: PROCESS
  {
    id: 11,
    type: "image-left",
    image: after1,
    title: "Process",
    content: "Our proven methodology ensures transparency and collaboration at every stage. From initial consultation through final walkthrough, you'll have a clear understanding of timeline, budget, and progress."
  },
  {
    id: 12,
    type: "text",
    content: "1. Concept & Planning: We listen, collaborate, and develop detailed plans that capture your vision.\n\n2. Design Development: Blueprints, renderings, and material selections bring concepts to life.\n\n3. Construction: Expert execution with regular updates and rigorous quality control.\n\n4. Final Touches: Meticulous finishing and comprehensive walkthrough."
  },
  // Pages 13-14: INNOVATION
  {
    id: 13,
    type: "image-left",
    image: lagunaCommercial,
    title: "Innovation",
    content: "Embracing sustainable practices and cutting-edge techniques. We integrate energy-efficient systems, eco-friendly materials, and smart building technologies that reduce environmental impact while enhancing performance."
  },
  {
    id: 14,
    type: "text",
    content: "Innovation isn't just about technology—it's about finding better ways to solve challenges, reduce waste, and create spaces that adapt to changing needs while respecting our coastal environment."
  },
  // Pages 15-16: YOUR STORY
  {
    id: 15,
    type: "text",
    title: "Your Story",
    content: "Every project tells a story. Whether it's a family home that will host generations of memories, a commercial space that anchors a community, or a landscape that brings peace and beauty to daily life—we're here to help write your chapter."
  },
  {
    id: 16,
    type: "text",
    content: "Our success is measured not in square footage or timelines, but in the satisfaction of clients who return to us project after project, and refer us to friends and family. That trust is the foundation of everything we build."
  },
  // Pages 17-18: CLOSING
  {
    id: 17,
    type: "closing",
    title: "Let's Build Together",
    content: "Ready to start your project? We'd love to hear about your vision."
  },
  {
    id: 18,
    type: "text",
    title: "Contact",
    content: "Michael Chandler Construction\nMonterey Peninsula, California\n\nLicensed & Insured\nCA License #XXXXXX\n\nPhone: (831) XXX-XXXX\nEmail: info@michaelchandler.com"
  }
];

export const BookLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 2 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const leftPage = pages[currentPage];
  const rightPage = pages[currentPage + 1];

  const renderPageContent = (page: Page, side: "left" | "right") => {
    if (!page) return null;

    if (page.type === "cover") {
      return (
        <div className="h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-primary/10 to-background">
          <h1 className="text-5xl font-bold text-center mb-6 text-foreground">{page.title}</h1>
          <p className="text-2xl text-center mb-8 text-muted-foreground">{page.subtitle}</p>
          <p className="text-lg text-center max-w-md text-muted-foreground">{page.content}</p>
        </div>
      );
    }

    if (page.type === "closing") {
      return (
        <div className="h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-primary/5 to-background">
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">{page.title}</h2>
          <p className="text-xl text-center max-w-md text-muted-foreground">{page.content}</p>
        </div>
      );
    }

    if (page.type === "image-left" && side === "left") {
      return (
        <div className="h-full relative">
          <img 
            src={page.image} 
            alt={page.title || "Portfolio image"}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    if (page.type === "image-left" && side === "right") {
      return (
        <div className="h-full flex flex-col justify-center p-12">
          {page.title && <h2 className="text-3xl font-bold mb-6 text-foreground">{page.title}</h2>}
          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{page.content}</p>
        </div>
      );
    }

    if (page.type === "image-right" && side === "left") {
      return (
        <div className="h-full flex flex-col justify-center p-12">
          {page.title && <h2 className="text-3xl font-bold mb-6 text-foreground">{page.title}</h2>}
          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{page.content}</p>
        </div>
      );
    }

    if (page.type === "image-right" && side === "right") {
      return (
        <div className="h-full relative">
          <img 
            src={page.image} 
            alt={page.title || "Portfolio image"}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    if (page.type === "text") {
      return (
        <div className="h-full flex flex-col justify-center p-12">
          {page.title && <h2 className="text-3xl font-bold mb-6 text-foreground">{page.title}</h2>}
          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{page.content}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="relative max-w-7xl w-full">
        {/* Book Container */}
        <div className="relative bg-background rounded-lg shadow-2xl overflow-hidden" style={{ 
          perspective: "2000px",
          aspectRatio: "2/1",
          maxHeight: "80vh"
        }}>
          {/* Book Spine Shadow */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-r from-black/20 via-black/10 to-black/20 z-10 pointer-events-none" />
          
          {/* Left Page */}
          <div 
            className={`absolute left-0 top-0 bottom-0 w-1/2 bg-background border-r border-border transition-transform duration-600 ${
              isFlipping ? "animate-flip-left" : ""
            }`}
            style={{
              transformOrigin: "right center",
              transformStyle: "preserve-3d"
            }}
          >
            {renderPageContent(leftPage, "left")}
          </div>

          {/* Right Page */}
          <div 
            className={`absolute right-0 top-0 bottom-0 w-1/2 bg-background transition-transform duration-600 ${
              isFlipping ? "animate-flip-right" : ""
            }`}
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d"
            }}
          >
            {renderPageContent(rightPage, "right")}
          </div>

          {/* Page Numbers */}
          <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
            {currentPage + 1}
          </div>
          <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
            {currentPage + 2}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Pages {currentPage + 1}-{currentPage + 2} of {totalPages}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage >= totalPages - 2 || isFlipping}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
