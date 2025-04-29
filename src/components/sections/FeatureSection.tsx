import React from "react";
import { Button } from "@/components/ui/Button";

interface FeatureSectionProps {
  title: string;
  description: string;
  titleColor: string;
  imageContent: React.ReactNode;
  imagePosition?: "left" | "right";
  id?: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  titleColor,
  imageContent,
  imagePosition = "right",
  id,
}) => {
  const textContent = (
    <div className="self-stretch flex min-w-60 flex-col items-stretch text-neutral-100 font-[612] flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
      <h2
        className="text-[43px] leading-[43px] max-md:max-w-full"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      <p className="text-lg font-normal leading-[25px] mt-8 max-md:max-w-full">
        {description}
      </p>
      <Button
        variant="medium"
        className="text-neutral-100 mt-8 w-fit hover:bg-neutral-100 hover:text-[rgba(29,29,27,1)] transition-colors"
      >
        Více informací
      </Button>
    </div>
  );

  return (
    <section
      id={id}
      className="z-0 flex w-full max-w-[1177px] items-center gap-[40px_128px] flex-wrap mt-12 max-md:mt-10"
    >
      {imagePosition === "left" ? (
        <>
          <div className="self-stretch min-w-60 w-[522px] my-auto max-md:max-w-full">
            {imageContent}
          </div>
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          <div className="self-stretch min-w-60 w-[522px] my-auto max-md:max-w-full">
            {imageContent}
          </div>
        </>
      )}
    </section>
  );
};
