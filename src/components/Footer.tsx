export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-muted-foreground">
            © {currentYear} Michael Chandler. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm font-light text-muted-foreground hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/michael-chandler-3858a63a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm font-light text-muted-foreground hover:text-accent transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
