
import React, { useEffect, useRef } from "react";

export const LogoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logos = container.querySelectorAll('.logo-item');
    let animationFrame: number;
    let currentIndex = 0;

    const animateLogos = () => {
      logos.forEach((logo, index) => {
        const logoEl = logo as HTMLElement;
        if (index === currentIndex) {
          logoEl.classList.add('scale-110', 'opacity-100');
          logoEl.classList.remove('opacity-70');
        } else {
          logoEl.classList.remove('scale-110', 'opacity-100');
          logoEl.classList.add('opacity-70');
        }
      });

      currentIndex = (currentIndex + 1) % logos.length;
      animationFrame = requestAnimationFrame(() => {
        setTimeout(animateLogos, 2000);
      });
    };

    animateLogos();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const logos = [
    { id: 1, color: "bg-[rgba(30,215,96,1)]", label: "Spotify" },
    { id: 2, color: "bg-white", label: "YouTube Music" },
    { 
      id: 3, 
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/0cd33672ae07e3094b8afaea3bcb81b6c084e16e?placeholderIfAbsent=true",
      label: "Music service logo"
    },
    {
      id: 4,
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/cfadd756de94e3d15f265ee7e4ee1218cbc24cee?placeholderIfAbsent=true",
      label: "Music service logo"
    },
    {
      id: 5,
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/4c7ada8976e05aaa57e05ddbb75997b24b829950?placeholderIfAbsent=true",
      label: "Music service logo"
    },
    {
      id: 6,
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/d89a02ea197da3190cde553ecbb747f9bb569f45?placeholderIfAbsent=true",
      label: "Music service logo"
    },
    {
      id: 7,
      image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/ef0401527032fc667e77922f1267a791391b9c5b?placeholderIfAbsent=true",
      label: "Music service logo"
    },
  ];

  return (
    <section className="z-0 w-full max-w-[1440px] py-24 px-8 max-md:py-16">
      <h2 className="text-neutral-100 text-center text-2xl font-[612] leading-[1.3] tracking-[-0.36px] mb-16 max-md:mb-10">
        Prodávejte svou hudbu v
      </h2>
      <div 
        ref={containerRef}
        className="flex w-full items-center gap-12 justify-center flex-wrap overflow-hidden py-8"
      >
        {logos.map((logo) => (
          logo.image ? (
            <img
              key={logo.id}
              src={logo.image}
              className="logo-item aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto transition-all duration-500 transform hover:scale-110 opacity-70 hover:opacity-100"
              alt={logo.label}
            />
          ) : (
            <div
              key={logo.id}
              className={`logo-item ${logo.color} self-stretch flex w-[57px] shrink-0 h-[57px] my-auto transition-all duration-500 transform hover:scale-110 opacity-70 hover:opacity-100`}
              aria-label={logo.label}
            />
          )
        ))}
      </div>
    </section>
  );
};
