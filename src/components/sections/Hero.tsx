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

    // Add scroll animation
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className={`relative z-0 max-w-full w-full h-screen min-h-[700px] pt-24 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/4edd626cfeaebb1084cc0a8794214d5ab7909ac6?placeholderIfAbsent=true"
          className="w-full h-full object-cover"
          alt="Hero background"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.4)] to-[rgba(29,29,27,1)]"></div>
        
        {/* Animated diagonal stripes overlay with blur effect - now with z-index below fade-out gradient */}
        <div className={`absolute inset-0 overflow-hidden ${
          imageLoaded ? "opacity-40" : "opacity-0"
        } transition-opacity duration-1000 z-[1]`}>
          <div className="absolute top-0 right-0 w-[200%] h-[200%] -rotate-45 origin-top-right blur-[15px]">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className={`absolute h-[100px] bg-white w-full transform translate-y-[-100%] animate-stripe-slide`} 
                style={{
                  top: `${i * 250}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Updated fade-out gradient overlay - with 100% opacity at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,29,27,1)] via-[rgba(29,29,27,0.3)] to-transparent z-[2]"></div>
      </div>
      <div className="container mx-auto h-full relative z-10">
        <div className={`absolute z-0 w-[630px] max-w-full left-[134px] bottom-[177px] px-8 transition-all duration-1000 delay-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-neutral-100 text-[75px] font-atyp font-semibold leading-[75px] tracking-[-1.13px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
            Prodávejte svou hudbu digitálně po celém světě!
          </h1>
          <div className="flex w-full flex-col items-stretch text-neutral-100 leading-[1.1] mt-10 max-md:max-w-full">
            <CustomButton
              variant="large"
              className="border-neutral-100 border text-neutral-100 hover:bg-neutral-100 hover:text-[rgba(29,29,27,1)] transition-colors w-fit font-atyp font-semibold"
            >
              Spustit prodej
            </CustomButton>
            <div className="text-sm font-atyp font-normal mt-4 max-md:max-w-full">
              Zdarma a bez poplatků
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
