import React from "react";
import { Hero } from "@/components/Hero";
import { PortfolioSection } from "@/components/PortfolioSection";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Chatbot } from "@/components/Chatbot";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <div id="portfolio-section">
        <PortfolioSection />
      </div>

      <MusicPlayer />
      <Chatbot />
    </div>
  );
};

export default Index;