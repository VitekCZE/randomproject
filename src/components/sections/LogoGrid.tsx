
import React, { useEffect, useRef, useState } from "react";

export const LogoGrid: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const logos = [
    { 
      id: 1, 
      image: "/lovable-uploads/5116c6f3-46e9-4c70-9b3e-90ddd071f679.png", 
      name: "Spotify"
    },
    { 
      id: 2, 
      image: "/lovable-uploads/11c3dfd1-fc1c-4bbb-96d2-945965565cef.png", 
      name: "YouTube Music" 
    },
    { 
      id: 3, 
      image: "/lovable-uploads/94e56396-37e1-4f0e-96dc-2aefff7c4853.png", 
      name: "SoundCloud"
    },
    { 
      id: 4, 
      image: "/lovable-uploads/8fab1bdd-d319-42a8-8390-80fe90853dcd.png", 
      name: "Amazon Music"
    },
    { 
      id: 5, 
      image: "/lovable-uploads/5ceeedfc-51bf-417f-a64d-ce2d3d7a4e2c.png", 
      name: "Apple Music"
    },
    { 
      id: 6, 
      image: "/lovable-uploads/0bf63c94-6768-4dc9-843c-70c0e7eb06bc.png", 
      name: "Tidal"
    },
    { 
      id: 7, 
      image: "/lovable-uploads/fed2c437-0633-4f72-afed-7e4025db39af.png", 
      name: "TikTok"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="z-0 w-full max-w-[1440px] py-24 px-8 max-md:py-16 mb-12"
    >
      <h2 className="text-neutral-100 text-center text-2xl font-[612] leading-[1.3] tracking-[-0.36px] mb-16 max-md:mb-10">
        Prodávejte svou hudbu v
      </h2>
      <div 
        className="relative overflow-hidden w-full py-8"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`flex items-center gap-16 animate-carousel ${isHovering ? 'pause-animation' : ''} ${isVisible ? '' : 'pause-animation'}`}>
          {/* Double the items for seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-16 h-16 flex items-center justify-center transition-transform duration-300 hover:scale-125"
            >
              <img
                src={logo.image}
                className="w-full h-full object-contain"
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
