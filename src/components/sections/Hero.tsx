import React from "react";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative z-0 max-w-full w-[1440px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/4edd626cfeaebb1084cc0a8794214d5ab7909ac6?placeholderIfAbsent=true"
        className="aspect-[1.78] object-contain w-full z-0"
        alt="Hero background"
      />
      <div className="absolute z-0 w-[630px] max-w-full left-[134px] bottom-[177px]">
        <h1 className="text-neutral-100 text-[75px] font-[612] leading-[75px] tracking-[-1.13px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
          Prodávejte svou hudbu digitálně po celém světě!
        </h1>
        <div className="flex w-full flex-col items-stretch text-neutral-100 leading-[1.1] mt-10 max-md:max-w-full">
          <Button
            variant="large"
            className="border-neutral-100 border text-neutral-100 hover:bg-neutral-100 hover:text-[rgba(29,29,27,1)] transition-colors"
          >
            Spustit prodej
          </Button>
          <div className="text-sm font-normal mt-4 max-md:max-w-full">
            Zdarma a bez poplatků
          </div>
        </div>
      </div>
    </section>
  );
};
