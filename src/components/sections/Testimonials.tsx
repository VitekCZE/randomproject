
import React, { useState, useEffect, useRef } from "react";

export const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const testimonial = {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/f5fbc0490ab55fc049637b470b4c4a0f3e9f6d8f?placeholderIfAbsent=true",
    quote:
      "Z pozice manažera Pipes and Pints vnímám digitální distribuci jako jeden z pilířů prodeje našich alb. Prodejhudbu.cz je pro manažery DIY kapel nejsnažší a asi jediná možnost, jak zdarma dostat alba do většiny světových, ale i českých obdchodů s hudbou.",
    author: "Vojta Kalina, Manažer Pipes and Pints",
  };

  return (
    <div 
      ref={sectionRef}
      className={`container mx-auto py-24 px-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <div className={`flex w-full items-center gap-8 flex-wrap md:flex-nowrap transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <img
              src={testimonial.image}
              className="aspect-[1] object-contain w-[255px] max-w-full"
              alt="Testimonial author"
            />
            <div className="flex flex-col">
              <blockquote className="text-neutral-100 text-2xl font-[612] leading-[31px] tracking-[-0.36px]">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="w-full text-lg text-neutral-100 font-normal leading-[1.3] mt-10">
                {testimonial.author}
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-[13px] mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/0f7877e584693d3dfec31da2a215e7c03862cf45?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto"
              alt="Social media icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/8ddfc60fd49f16fdf3f58bae85f46130b9be57c0?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto"
              alt="Social media icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
