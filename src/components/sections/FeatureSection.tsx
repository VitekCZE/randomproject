
import React, { useRef, useEffect, useState } from "react";
import { CustomButton } from "@/components/ui/CustomButton";
import { FreeFeatureContent, StoresFeatureContent, CzechFeatureContent, YoutubeFeatureContent } from "@/components/sections/FeatureContent";

interface FeatureSectionProps {
  title: string;
  description: string;
  titleColor: string;
  id?: string;
  imagePosition?: "left" | "right";
  contentType: "free" | "stores" | "czech" | "youtube";
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  titleColor,
  id,
  imagePosition = "left",
  contentType,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderContent = () => {
    switch (contentType) {
      case "free":
        return <FreeFeatureContent />;
      case "stores":
        return <StoresFeatureContent />;
      case "czech":
        return <CzechFeatureContent />;
      case "youtube":
        return <YoutubeFeatureContent />;
      default:
        return null;
    }
  };

  // Create the content and text components that will be positioned based on imagePosition
  const imageContent = (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : imagePosition === "left" ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
      }`}
    >
      {renderContent()}
    </div>
  );

  const textContent = (
    <div 
      className={`self-stretch flex min-w-60 flex-col items-stretch text-neutral-100 font-[612] w-full my-auto px-8 transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : imagePosition === "left" ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10"
      } max-md:max-w-full`}
    >
      <h2
        className="text-[43px] leading-[43px] max-md:max-w-full"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      <p className="text-lg font-normal leading-[25px] mt-8 max-md:max-w-full">
        {description}
      </p>
      <CustomButton
        variant="medium"
        className="border-neutral-100 border text-neutral-100 mt-8 w-fit hover:bg-neutral-100 hover:text-[rgba(29,29,27,1)] transition-colors"
      >
        Více informací
      </CustomButton>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`z-0 flex w-full max-w-[1177px] items-center py-24 max-md:py-16 mb-12 mx-auto transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      {imagePosition === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </section>
  );
};
