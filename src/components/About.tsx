import michaelPhoto from "@/assets/michael-chandler.jpg";

export const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={michaelPhoto} 
          alt="Michael Chandler background" 
          className="w-full h-full object-cover object-top opacity-35"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 opacity-0 animate-slide-in-left">
            About
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-4 md:space-y-6 text-base md:text-lg font-light leading-relaxed text-foreground/80 opacity-0 animate-fade-in-up delay-200">
              <p className="transition-all duration-300 hover:text-foreground/90">
                With over a decade of experience in design, I specialize in creating spaces
                that seamlessly blend functionality with aesthetic excellence. My approach
                centers on understanding the unique needs of each client and translating
                their vision into reality.
              </p>
              <p className="transition-all duration-300 hover:text-foreground/90">
                Every project is an opportunity to push creative boundaries while maintaining
                a commitment to timeless design principles. I believe great design should
                enhance the way people live and work, creating environments that inspire
                and endure.
              </p>
            </div>
            
            <div className="space-y-8 opacity-0 animate-fade-in-up delay-400">
              <div className="transition-all duration-300 hover:translate-x-1">
                <h3 className="text-sm font-medium tracking-wider text-accent mb-3">
                  EXPERTISE
                </h3>
                <ul className="space-y-2 text-base md:text-lg font-light">
                  <li className="transition-colors duration-300 hover:text-accent">Residential Design</li>
                  <li className="transition-colors duration-300 hover:text-accent">Commercial Spaces</li>
                  <li className="transition-colors duration-300 hover:text-accent">Hospitality Projects</li>
                  <li className="transition-colors duration-300 hover:text-accent">Interior Architecture</li>
                </ul>
              </div>
              
              <div className="transition-all duration-300 hover:translate-x-1">
                <h3 className="text-sm font-medium tracking-wider text-accent mb-3">
                  RECOGNITION
                </h3>
                <ul className="space-y-2 text-base md:text-lg font-light">
                  <li className="transition-colors duration-300 hover:text-accent">Design Excellence Award, 2023</li>
                  <li className="transition-colors duration-300 hover:text-accent">Best Residential Project, 2022</li>
                  <li className="transition-colors duration-300 hover:text-accent">Featured in Design Magazine, 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
