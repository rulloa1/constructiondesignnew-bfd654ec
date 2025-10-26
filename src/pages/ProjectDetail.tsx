import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project1Detail1 from "@/assets/project-1-detail-1.jpg";
import project1Detail2 from "@/assets/project-1-detail-2.jpg";
import project2Detail1 from "@/assets/project-2-detail-1.jpg";
import project2Detail2 from "@/assets/project-2-detail-2.jpg";
import project3Detail1 from "@/assets/project-3-detail-1.jpg";
import project3Detail2 from "@/assets/project-3-detail-2.jpg";
import project4Detail1 from "@/assets/project-4-detail-1.jpg";
import project4Detail2 from "@/assets/project-4-detail-2.jpg";
import project5Detail1 from "@/assets/project-5-detail-1.jpg";
import project5Detail2 from "@/assets/project-5-detail-2.jpg";
import project6Detail1 from "@/assets/project-6-detail-1.jpg";
import project6Detail2 from "@/assets/project-6-detail-2.jpg";

const projectsData = {
  "1": {
    id: 1,
    title: "Modern Sanctuary",
    category: "Residential",
    description: "A contemporary residential project featuring minimalist design principles, natural light, and sophisticated material choices that create a serene living environment.",
    images: [project1, project1Detail1, project1Detail2],
  },
  "2": {
    id: 2,
    title: "Urban Elegance",
    category: "Residential",
    description: "An elegant urban residence that seamlessly blends luxury with functionality, offering stunning city views and refined interior spaces.",
    images: [project2, project2Detail1, project2Detail2],
  },
  "3": {
    id: 3,
    title: "Creative Studio",
    category: "Commercial",
    description: "A dynamic commercial space designed to inspire creativity and collaboration, featuring flexible work areas and contemporary design elements.",
    images: [project3, project3Detail1, project3Detail2],
  },
  "4": {
    id: 4,
    title: "Refined Dining",
    category: "Hospitality",
    description: "An upscale dining destination that combines sophisticated ambiance with elegant design, creating an unforgettable culinary experience.",
    images: [project4, project4Detail1, project4Detail2],
  },
  "5": {
    id: 5,
    title: "Spa Retreat",
    category: "Hospitality",
    description: "A tranquil spa sanctuary designed to promote relaxation and wellness through thoughtful spatial design and natural materials.",
    images: [project5, project5Detail1, project5Detail2],
  },
  "6": {
    id: 6,
    title: "Contemporary Haven",
    category: "Residential",
    description: "A modern residential masterpiece featuring clean lines, luxury finishes, and carefully curated spaces for contemporary living.",
    images: [project6, project6Detail1, project6Detail2],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 md:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="mb-8 md:mb-12">
          <span className="text-xs sm:text-sm text-muted-foreground font-light tracking-wide uppercase">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-2 mb-4 md:mb-6">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-3xl">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
