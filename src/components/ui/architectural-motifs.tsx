import React from "react";

/**
 * Architectural motif SVG icons for section headers
 * These replace decorative numbers with themed visuals
 */

// Hero - Compass/Direction motif
export const CompassMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="16" />
    <circle cx="20" cy="20" r="12" opacity="0.5" />
    <path d="M20 4v6M20 30v6M4 20h6M30 20h6" strokeLinecap="round" />
    <path d="M20 8l3 12-3 3-3-3 3-12z" fill="currentColor" stroke="none" />
    <path d="M20 32l-3-12 3-3 3 3-3 12z" fill="currentColor" opacity="0.4" stroke="none" />
  </svg>
);

// About - Portrait/Person motif
export const PortraitMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <circle cx="20" cy="12" r="8" />
    <path d="M6 38c0-10 6-16 14-16s14 6 14 16" opacity="0.7" />
    <rect x="4" y="2" width="32" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

// Services - Toolbox/Hammer motif
export const ToolboxMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <rect x="4" y="18" width="32" height="18" rx="2" opacity="0.8" />
    <rect x="14" y="14" width="12" height="8" rx="1" />
    <path d="M18 14V10a2 2 0 012-2h0a2 2 0 012 2v4" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="8" y="24" width="8" height="3" rx="0.5" fill="white" opacity="0.3" />
    <rect x="8" y="29" width="5" height="3" rx="0.5" fill="white" opacity="0.3" />
    <circle cx="28" cy="27" r="4" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

// Portfolio - Book/Gallery motif
export const GalleryMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <rect x="4" y="6" width="24" height="30" rx="1" opacity="0.4" />
    <rect x="8" y="4" width="24" height="30" rx="1" opacity="0.6" />
    <rect x="12" y="2" width="24" height="30" rx="1" />
    <rect x="16" y="8" width="16" height="12" rx="0.5" fill="white" opacity="0.3" />
    <rect x="16" y="24" width="10" height="2" rx="0.5" fill="white" opacity="0.2" />
    <rect x="16" y="28" width="6" height="2" rx="0.5" fill="white" opacity="0.2" />
  </svg>
);

// Blueprint Corner - for architectural contexts
export const BlueprintCorner: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 36V4h32" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 32V8h24" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
    <circle cx="36" cy="4" r="2" fill="currentColor" stroke="none" />
    <circle cx="4" cy="36" r="2" fill="currentColor" stroke="none" />
  </svg>
);

// Building Silhouette - for development contexts
export const BuildingSilhouette: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <rect x="4" y="16" width="10" height="24" opacity="0.7" />
    <rect x="16" y="8" width="12" height="32" />
    <rect x="30" y="20" width="8" height="20" opacity="0.5" />
    <rect x="6" y="20" width="2" height="3" fill="white" opacity="0.5" />
    <rect x="6" y="26" width="2" height="3" fill="white" opacity="0.5" />
    <rect x="19" y="12" width="2" height="3" fill="white" opacity="0.5" />
    <rect x="24" y="12" width="2" height="3" fill="white" opacity="0.5" />
    <rect x="19" y="18" width="2" height="3" fill="white" opacity="0.5" />
    <rect x="24" y="18" width="2" height="3" fill="white" opacity="0.5" />
    <rect x="19" y="24" width="2" height="3" fill="white" opacity="0.5" />
    <rect x="24" y="24" width="2" height="3" fill="white" opacity="0.5" />
  </svg>
);

// Tree Motif - for landscape contexts
export const TreeMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <ellipse cx="20" cy="12" rx="12" ry="10" opacity="0.8" />
    <ellipse cx="12" cy="18" rx="8" ry="7" opacity="0.6" />
    <ellipse cx="28" cy="18" rx="8" ry="7" opacity="0.6" />
    <rect x="18" y="24" width="4" height="16" opacity="0.9" />
  </svg>
);

// Interior motifs
export const ChandelierMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <rect x="18" y="2" width="4" height="6" opacity="0.8" />
    <ellipse cx="20" cy="14" rx="14" ry="4" opacity="0.3" />
    <circle cx="20" cy="14" r="3" />
    <path d="M8 14v8M14 14v10M20 14v12M26 14v10M32 14v8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
    <circle cx="8" cy="24" r="2" opacity="0.8" />
    <circle cx="14" cy="26" r="2" opacity="0.8" />
    <circle cx="20" cy="28" r="2.5" />
    <circle cx="26" cy="26" r="2" opacity="0.8" />
    <circle cx="32" cy="24" r="2" opacity="0.8" />
  </svg>
);

export const BedMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <rect x="2" y="24" width="36" height="8" rx="2" />
    <rect x="4" y="18" width="14" height="8" rx="1" opacity="0.7" />
    <rect x="22" y="18" width="14" height="8" rx="1" opacity="0.7" />
    <rect x="2" y="32" width="4" height="6" opacity="0.8" />
    <rect x="34" y="32" width="4" height="6" opacity="0.8" />
    <rect x="6" y="20" width="4" height="4" rx="1" opacity="0.4" />
    <rect x="30" y="20" width="4" height="4" rx="1" opacity="0.4" />
  </svg>
);

export const ChefHatMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <ellipse cx="20" cy="12" rx="14" ry="10" opacity="0.8" />
    <circle cx="10" cy="10" r="6" />
    <circle cx="20" cy="6" r="6" />
    <circle cx="30" cy="10" r="6" />
    <rect x="8" y="18" width="24" height="16" rx="2" opacity="0.9" />
    <path d="M10 24h20M10 30h20" stroke="white" strokeWidth="1.5" opacity="0.4" />
  </svg>
);
