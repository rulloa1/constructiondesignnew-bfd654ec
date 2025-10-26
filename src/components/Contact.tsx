import { Mail, Phone, MapPin } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 md:mb-12 text-center">
            Get In Touch
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center opacity-0 animate-scale-in delay-100 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                <Mail className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-medium tracking-wider text-muted-foreground mb-2">
                EMAIL
              </h3>
              <a href="mailto:hello@michaelchandler.com" className="text-lg font-light hover:text-accent transition-all duration-300 hover:tracking-wide">mike.rcccon@yahoo.com</a>
            </div>
            
            <div className="text-center opacity-0 animate-scale-in delay-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                <Phone className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-medium tracking-wider text-muted-foreground mb-2">
                PHONE
              </h3>
              <a href="tel:+1234567890" className="text-lg font-light hover:text-accent transition-all duration-300 hover:tracking-wide">+1 (435) 237-7373</a>
            </div>
            
            <div className="text-center opacity-0 animate-scale-in delay-500 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                <MapPin className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-medium tracking-wider text-muted-foreground mb-2">
                LOCATION
              </h3>
              <p className="text-lg font-light">Spring, Texas</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};