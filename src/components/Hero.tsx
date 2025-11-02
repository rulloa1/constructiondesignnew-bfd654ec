import { useState } from "react";
import heroVideo from "@/assets/hero-portfolio-video.mp4";
export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline onLoadedData={() => setVideoLoaded(true)} className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Edge Fade Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 70% 65% at 50% 45%, transparent 0%, transparent 50%, hsl(var(--background)) 100%)'
    }} />
      
      {/* Text Overlay */}
      
    </section>;
};