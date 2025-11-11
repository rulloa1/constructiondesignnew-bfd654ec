import { ReactNode } from "react";

interface ImageWithWatermarkProps {
  children: ReactNode;
  watermarkText?: string;
}

export const ImageWithWatermark = ({ 
  children, 
  watermarkText = "PORTFOLIO" 
}: ImageWithWatermarkProps) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="text-[8rem] font-bold text-foreground/[0.03] whitespace-nowrap select-none"
          style={{ transform: 'rotate(-45deg)' }}
        >
          {watermarkText}
        </div>
      </div>
    </div>
  );
};
