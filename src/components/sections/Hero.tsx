
import React, { useState, useEffect, useRef } from "react";
import { CustomButton } from "@/components/ui/CustomButton";

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setImageLoaded(true);
    }, 300);

    // Set visibility for animation
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative z-0 w-full h-screen overflow-hidden"
    >
      {/* Dynamic Visual Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image with blur effect and reduced opacity */}
        <div className="absolute inset-0 bg-[rgba(29,29,27,1)] opacity-50">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/4edd626cfeaebb1084cc0a8794214d5ab7909ac6?placeholderIfAbsent=true"
            className="w-full h-full object-cover blur-sm opacity-70"
            alt="Hero background"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Animated Background Element */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-[rgba(45,175,229,0.1)] to-[rgba(150,195,85,0.1)] overflow-hidden transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-50' : 'opacity-0'
          }`}
        >
          {/* Dynamic particles or shapes could be added here */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated elements */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white/10 backdrop-blur-md animate-pulse-glow"
                style={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.7}s`,
                  opacity: 0.3,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Fade-out Overlay - From bottom to midpoint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,29,27,0.95)] via-[rgba(29,29,27,0.7)] to-transparent"></div>
      </div>

      {/* Text Layer - Always on top and readable */}
      <div className="container relative z-10 h-full mx-auto px-8 flex flex-col justify-center items-center">
        <div className={`max-w-[800px] text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Main Headline */}
          <h1 className="text-neutral-100 text-5xl md:text-6xl lg:text-[75px] font-bold leading-tight tracking-[-1.13px] mb-6">
            Prodávejte svou hudbu digitálně po celém světě!
          </h1>
          
          {/* Subheadline */}
          <p className="text-neutral-100/90 text-xl md:text-2xl mb-10">
            Jednoduchý způsob, jak dostat svou hudbu do celého světa
          </p>
          
          {/* Call to action */}
          <div className="flex flex-col items-center">
            <CustomButton
              variant="large"
              className="border-neutral-100 border-2 text-neutral-100 hover:bg-neutral-100 hover:text-[rgba(29,29,27,1)] transition-colors"
            >
              Spustit prodej
            </CustomButton>
            <div className="text-neutral-100/80 text-sm font-normal mt-4">
              Zdarma a bez poplatků
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
