import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export const VantaBirdsBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    threeScript.async = true;

    // Load Vanta Birds
    const vantaScript = document.createElement('script');
    vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
    vantaScript.async = true;

    document.body.appendChild(threeScript);

    threeScript.onload = () => {
      document.body.appendChild(vantaScript);
      
      vantaScript.onload = () => {
        if (vantaRef.current && window.VANTA) {
          vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0xe4b321, // Gold color to match theme
            color2: 0x1a1a1a, // Dark color
            colorMode: "variance",
            backgroundAlpha: 0.0,
            birdSize: 1.2,
            quantity: 3.0,
            separation: 50.0,
            alignment: 50.0,
            cohesion: 50.0,
          });
        }
      };
    };

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
      if (document.body.contains(threeScript)) {
        document.body.removeChild(threeScript);
      }
      if (document.body.contains(vantaScript)) {
        document.body.removeChild(vantaScript);
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 opacity-60" />;
};
