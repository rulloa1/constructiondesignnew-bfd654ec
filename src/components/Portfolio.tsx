import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Sanctuary",
    category: "Residential",
    image: project1,
  },
  {
    id: 2,
    title: "Urban Elegance",
    category: "Residential",
    image: project2,
  },
  {
    id: 3,
    title: "Creative Studio",
    category: "Commercial",
    image: project3,
  },
  {
    id: 4,
    title: "Refined Dining",
    category: "Hospitality",
    image: project4,
  },
  {
    id: 5,
    title: "Spa Retreat",
    category: "Hospitality",
    image: project5,
  },
  {
    id: 6,
    title: "Contemporary Haven",
    category: "Residential",
    image: project6,
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl">
            A curated collection of projects that showcase design excellence and creative vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`group cursor-pointer opacity-0 animate-fade-in-up delay-${index * 100 + 100}`}
            >
              <div className="relative aspect-square overflow-hidden mb-4 rounded-sm hover-lift">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-light mb-1 transition-colors duration-300 group-hover:text-accent">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-light tracking-wide transition-colors duration-300 group-hover:text-foreground/60">
                {project.category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
