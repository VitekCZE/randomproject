import React from "react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/8e830cb020e27ddd60c66696442ec2ccf6529206?placeholderIfAbsent=true",
      quote:
        "Z pozice manažera Pipes and Pints vnímám digitální distribuci jako jeden z pilířů prodeje našich alb. Prodejhudbu.cz je pro manažery DIY kapel nejsnažší a asi jediná možnost, jak zdarma dostat alba do většiny světových, ale i českých obdchodů s hudbou.",
      author: "Vojta Kalina, Manažer Pipes and Pints",
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/f5fbc0490ab55fc049637b470b4c4a0f3e9f6d8f?placeholderIfAbsent=true",
      quote:
        "Z pozice manažera Pipes and Pints vnímám digitální distribuci jako jeden z pilířů prodeje našich alb. Prodejhudbu.cz je pro manažery DIY kapel nejsnažší a asi jediná možnost, jak zdarma dostat alba do většiny světových, ale i českých obdchodů s hudbou.",
      author: "Vojta Kalina, Manažer Pipes and Pints",
    },
    {
      id: 3,
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/f72583187be96421e97bb548cbe611471fe90cbd?placeholderIfAbsent=true",
      quote:
        "Z pozice manažera Pipes and Pints vnímám digitální distribuci jako jeden z pilířů prodeje našich alb. Prodejhudbu.cz je pro manažery DIY kapel nejsnažší a asi jediná možnost, jak zdarma dostat alba do většiny světových, ale i českých obdchodů s hudbou.",
      author: "Vojta Kalina, Manažer Pipes and Pints",
    },
  ];

  return (
    <div className="absolute z-0 flex w-[933px] max-w-full flex-col items-center left-[253px] bottom-[284px]">
      <div className="flex w-full gap-[40px_120px] justify-center max-md:max-w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="min-w-60 w-[933px] text-2xl text-neutral-100 font-[612] tracking-[-0.36px] leading-[31px] max-md:max-w-full"
          >
            <div className="flex w-full items-center gap-[40px_80px] flex-wrap">
              <img
                src={testimonial.image}
                className="aspect-[1] object-contain w-[255px] self-stretch min-w-60 grow shrink my-auto"
                alt="Testimonial author"
              />
              <div className="self-stretch min-w-60 grow shrink w-[470px] my-auto max-md:max-w-full">
                <blockquote className="text-neutral-100 text-2xl font-[612] leading-[31px] tracking-[-0.36px] max-md:max-w-full">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                {index === 2 && (
                  <div className="w-full text-lg text-neutral-100 font-normal leading-[1.3] mt-10 max-md:max-w-full">
                    {testimonial.author}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="self-center flex items-center gap-[13px] mt-8">
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
  );
};
