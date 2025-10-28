import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

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
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-8 md:mb-12 hover:bg-accent transition-colors"
          size="lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Portfolio
        </Button>

        <div className="mb-8 md:mb-12">
          <span className="text-xs sm:text-sm text-muted-foreground font-light tracking-wide uppercase">
            {project.category}
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mt-2 mb-4 md:mb-6">
            {project.title}
          </h1>
          <p className="font-inter text-base md:text-lg text-muted-foreground font-light max-w-3xl leading-relaxed">
            {project.description}
          </p>
          <p className="font-inter text-sm text-muted-foreground/70 font-light mt-2">
            {project.location}
          </p>
        </div>

        {project.video && (
          <div className="mb-8 md:mb-12">
            <video 
              controls 
              className="w-full rounded-lg shadow-lg"
              poster={project.image}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
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
