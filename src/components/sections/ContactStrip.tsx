
import React, { useState, useEffect, useRef } from "react";
import { CustomButton } from "@/components/ui/CustomButton";

export const ContactStrip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stripRef = useRef<HTMLElement>(null);

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

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={stripRef}
      id="contacts"
      className={`bg-[rgba(45,175,229,1)] z-0 flex w-full items-center justify-between flex-wrap px-20 py-16 max-md:py-10 max-md:px-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <h2 className={`text-neutral-100 text-[43px] font-[612] leading-none tracking-[-0.65px] self-stretch flex-1 shrink basis-20 my-auto max-md:max-w-full transition-all duration-700 delay-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}>
        Ready to get your music out there?
      </h2>
      <CustomButton
        variant="medium"
        className={`border-neutral-100 border text-neutral-100 hover:bg-neutral-100 hover:text-[rgba(45,175,229,1)] transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        Contact Us
      </CustomButton>
    </section>
  );
};
