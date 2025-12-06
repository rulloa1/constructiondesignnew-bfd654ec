import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ChevronLeft, ChevronRight, MapPin, Palette, FileDown } from "lucide-react";
import { getProjectById } from "@/data/projects";
import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ImageWithWatermark } from "@/components/ImageWithWatermark";

interface ProjectVideo {
  id: string;
  video_url: string;
  title: string | null;
  description: string | null;
  display_order: number;
}

interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
  title: string | null;
  description: string | null;
  display_order: number;
  is_before: boolean;
  is_after: boolean;
}

interface ProjectDocument {
  id: string;
  document_url: string;
  file_name: string;
  title: string | null;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [videos, setVideos] = useState<ProjectVideo[]>([]);
  const [dbImages, setDbImages] = useState<ProjectImage[]>([]);
  const [documents, setDocuments] = useState<ProjectDocument[]>([]);

  // Fetch videos, images, and documents for this project
  useEffect(() => {
    if (!id) return;

    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('project_videos')
        .select('*')
        .eq('project_id', id)
        .order('display_order', { ascending: true });
      if (!error && data) {
        setVideos(data);
      }
    };

    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('project_images')
        .select('*')
        .eq('project_id', id)
        .order('display_order', { ascending: true });
      if (!error && data) {
        setDbImages(data);
      }
    };

    const fetchDocuments = async () => {
      const { data, error } = await supabase
        .from('project_documents')
        .select('id, document_url, file_name, title')
        .eq('project_id', id)
        .order('display_order', { ascending: true });
      if (!error && data) {
        setDocuments(data);
      }
    };

    fetchVideos();
    fetchImages();
    fetchDocuments();
  }, [id]);

  const hasStaticImages = project?.images && Array.isArray(project.images) && project.images.length > 0;

  const allImages = useMemo(() => {
    if (hasStaticImages && project?.images) {
      return project.images.filter(img => img != null);
    }
    
    const validDbImages = dbImages.filter(img => 
      img.image_url && 
      (img.image_url.startsWith('http') || img.image_url.startsWith('https://'))
    );
    
    if (validDbImages.length > 0) {
      return validDbImages.map(img => img.image_url);
    }
    return [];
  }, [hasStaticImages, project?.images, dbImages]);

  const validDbImages = dbImages.filter(img => 
    img.image_url && 
    (img.image_url.startsWith('http') || img.image_url.startsWith('https://'))
  );

  const getImageLabel = (imageUrl: string, index: number): string | null => {
    const dbImage = validDbImages.find(img => img.image_url === imageUrl);
    if (dbImage?.is_before) return "Before";
    if (dbImage?.is_after) return "After";
    const fileName = imageUrl.toLowerCase();
    if (fileName.includes("before")) return "Before";
    if (fileName.includes("after")) return "After";
    return null;
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex(prev => prev === 0 ? allImages.length - 1 : (prev ?? 0) - 1);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex(prev => prev === allImages.length - 1 ? 0 : (prev ?? 0) + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, allImages.length]);

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

  const heroImage = allImages.length > 0 ? allImages[0] : project.image;

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative h-[40vh] sm:h-[50vh] w-full">
          <img
            src={heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Back button overlay */}
          <div className="absolute top-4 left-4 z-10">
            <Button
              variant="outline"
              onClick={() => navigate("/", { state: { openPortfolio: true } })}
              className="bg-white/90 backdrop-blur-sm border-charcoal/20 text-charcoal hover:bg-white shadow-md"
              size="sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Info Cards */}
          <div className="space-y-0">
            {/* Location */}
            <div className="bg-muted/30 border-l-4 border-accent p-4">
              <h3 className="font-semibold text-charcoal text-sm uppercase tracking-wide">Location</h3>
              <p className="text-accent font-medium mt-1">{project.location}</p>
            </div>

            {/* Category/Designer */}
            <div className="bg-muted/30 border-l-4 border-muted p-4">
              <h3 className="font-semibold text-charcoal text-sm uppercase tracking-wide">Category</h3>
              <p className="text-accent font-medium mt-1">{project.category}</p>
            </div>

            {/* Design Style / Subtitle */}
            {project.subtitle && (
              <div className="bg-muted/30 border-l-4 border-muted p-4">
                <h3 className="font-semibold text-charcoal text-sm uppercase tracking-wide">Design Style</h3>
                <p className="text-foreground mt-1">{project.subtitle}</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-charcoal mb-4">
              {project.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Download Brochure Button */}
          {documents.length > 0 && (
            <div className="mt-6">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <a
                  href={documents[0].document_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Brochure
                </a>
              </Button>
            </div>
          )}

          {/* Videos Section */}
          {videos.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Project Videos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {videos.map(video => (
                  <div key={video.id} className="bg-white rounded-lg overflow-hidden border border-charcoal/10 shadow-sm">
                    <VideoPlayer url={video.video_url} />
                    {(video.title || video.description) && (
                      <div className="p-4">
                        {video.title && <h4 className="font-semibold text-charcoal mb-1">{video.title}</h4>}
                        {video.description && <p className="text-sm text-charcoal/70">{video.description}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          {allImages.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {allImages.map((image, index) => {
                  const label = getImageLabel(image, index);
                  return (
                    <ImageWithWatermark key={`${image}-${index}`}>
                      <button
                        onClick={() => setSelectedImageIndex(index)}
                        className="relative aspect-square overflow-hidden rounded-lg bg-white border border-charcoal/10 group cursor-pointer transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 w-full"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {label && (
                          <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white rounded ${label === "Before" ? "bg-amber-500/90" : "bg-emerald-500/90"}`}>
                            {label}
                          </span>
                        )}
                      </button>
                    </ImageWithWatermark>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-light">
            {selectedImageIndex + 1} / {allImages.length}
          </div>

          {/* Previous button */}
          <button
            onClick={e => {
              e.stopPropagation();
              setSelectedImageIndex(selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next button */}
          <button
            onClick={e => {
              e.stopPropagation();
              setSelectedImageIndex(selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image */}
          <div className="flex items-center justify-center h-full p-8 sm:p-16" onClick={e => e.stopPropagation()}>
            <ImageWithWatermark>
              <div className="relative">
                <img
                  src={allImages[selectedImageIndex]}
                  alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-scale-in"
                />
                {getImageLabel(allImages[selectedImageIndex], selectedImageIndex) && (
                  <span className={`absolute top-4 right-4 px-3 py-2 text-sm font-semibold text-white rounded-lg ${getImageLabel(allImages[selectedImageIndex], selectedImageIndex) === "Before" ? "bg-amber-500/90" : "bg-emerald-500/90"}`}>
                    {getImageLabel(allImages[selectedImageIndex], selectedImageIndex)}
                  </span>
                )}
              </div>
            </ImageWithWatermark>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
