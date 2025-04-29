
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setImageLoaded(true);
    }, 300);
  }, []);

  return (
    <section className="relative z-0 max-w-full w-full h-screen min-h-[700px] pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/4edd626cfeaebb1084cc0a8794214d5ab7909ac6?placeholderIfAbsent=true"
          className={`w-full h-full object-cover transition-opacity duration-1500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          alt="Hero background"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Animated rays overlay */}
        <div className={`absolute inset-0 bg-gradient-radial from-[rgba(45,175,229,0.3)] to-transparent transform origin-center transition-all duration-2000 ${
          imageLoaded ? "opacity-70 scale-100" : "opacity-0 scale-90"
        }`}></div>
      </div>
      <div className="container mx-auto h-full relative z-10">
        <div className="absolute z-0 w-[630px] max-w-full left-[134px] bottom-[177px] px-8">
          <h1 className={`text-neutral-100 text-[75px] font-[612] leading-[75px] tracking-[-1.13px] transition-all duration-1000 delay-300 ${
            imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]`}>
            Prodávejte svou hudbu digitálně po celém světě!
          </h1>
          <div className={`flex w-full flex-col items-stretch text-neutral-100 leading-[1.1] mt-10 transition-all duration-1000 delay-600 ${
            imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } max-md:max-w-full`}>
            <Button
              variant="large"
              className="border-neutral-100 border text-neutral-100 hover:bg-neutral-100 hover:text-[rgba(29,29,27,1)] transition-colors w-fit"
            >
              Spustit prodej
            </Button>
            <div className="text-sm font-normal mt-4 max-md:max-w-full">
              Zdarma a bez poplatků
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
