import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  projectTitle?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  projectTitle,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Previous Button */}
      {images.length > 1 && (
        <Button
          onClick={onPrevious}
          variant="ghost"
          size="icon"
          className="absolute left-4 z-10 text-white hover:bg-white/10"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {/* Image */}
      <div className="max-w-7xl max-h-[90vh] mx-auto px-16">
        <img
          src={images[currentIndex]}
          alt={projectTitle ? `${projectTitle} - Image ${currentIndex + 1}` : `Image ${currentIndex + 1}`}
          className="w-full h-full object-contain animate-scale-in"
        />
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <Button
          onClick={onNext}
          variant="ghost"
          size="icon"
          className="absolute right-4 z-10 text-white hover:bg-white/10"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
