
import React from "react";
import { CustomButton } from "@/components/ui/CustomButton";

export const ContactStrip: React.FC = () => {
  return (
    <section
      id="contacts"
      className="bg-[rgba(45,175,229,1)] z-0 flex w-full items-center justify-between flex-wrap px-20 py-16 max-md:py-10 max-md:px-8"
    >
      <h2 className="text-neutral-100 text-[43px] font-[612] leading-none tracking-[-0.65px] self-stretch flex-1 shrink basis-20 my-auto max-md:max-w-full">
        Ready to get your music out there?
      </h2>
      <CustomButton
        variant="large-white"
        className="self-stretch text-[rgba(45,175,229,1)] hover:bg-[rgba(45,175,229,0.1)] transition-all duration-300 hover:shadow-lg"
      >
        Contact Us
      </CustomButton>
    </section>
  );
};
