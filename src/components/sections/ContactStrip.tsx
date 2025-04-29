import React from "react";
import { Button } from "@/components/ui/Button";

export const ContactStrip: React.FC = () => {
  return (
    <section
      id="contacts"
      className="bg-[rgba(45,175,229,1)] z-0 flex min-h-[182px] w-full max-w-[1439px] items-center justify-between flex-wrap mt-12 px-20 py-[65px] max-md:max-w-full max-md:mt-10 max-md:px-5"
    >
      <h2 className="text-neutral-100 text-[43px] font-[612] leading-none tracking-[-0.65px] self-stretch flex-1 shrink basis-20 my-auto max-md:max-w-full">
        Ready to get your music out there?
      </h2>
      <Button
        variant="large-white"
        className="self-stretch text-[rgba(45,175,229,1)] hover:bg-[rgba(45,175,229,0.1)] transition-colors"
      >
        Contact Us
      </Button>
    </section>
  );
};
