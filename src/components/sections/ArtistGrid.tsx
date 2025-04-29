
import React, { useState, useEffect, useRef } from "react";

export const ArtistGrid: React.FC = () => {
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

  const artists = [
    { id: 1, image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/2597359ca39149ba8cb2dfec4b4bb7c2bcdbfd09?placeholderIfAbsent=true", name: "Artist Name" },
    { id: 2, image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/ae051779007d92f38ecf5664d516c84b14a3cbbc?placeholderIfAbsent=true", name: "Artist Name" },
    { id: 3, image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/c1e6e43cdd1275502481e370718adfe73b0329fb?placeholderIfAbsent=true", name: "Artist Name" },
    { id: 4, image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/139971095797b5fa931650bc2a5918e09d5f52e0?placeholderIfAbsent=true", name: "Artist Name" },
    { id: 5, image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/cbd154718d09b91b9d87d28d11ef31a9571b41f5?placeholderIfAbsent=true", name: "Artist Name" },
    { id: 6, image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/b1c7ebdcff2532759e35b31a8ff423085d940348?placeholderIfAbsent=true", name: "Artist Name" },
    { id: 7, image: "https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/9bc2779f5e2640a2a10d57c5debef32b818406f4?placeholderIfAbsent=true", name: "Artist Name" },
  ];

  return (
    <section 
      ref={sectionRef}
      className={`z-0 flex w-full max-w-full flex-col items-stretch py-24 px-8 max-md:py-16 mb-12 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container mx-auto">
        <h2 className={`text-neutral-100 text-[57px] font-[612] leading-[57px] tracking-[-0.85px] text-center self-center w-[846px] max-w-full mx-auto mb-20 max-md:mb-12 max-md:text-[40px] max-md:leading-[45px] transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span style={{ color: "rgba(245,245,245,1)" }}>Více než 250 kapel</span>{" "}
          a interpretů už využilo Prodejhudbu.cz
        </h2>
        <div className={`relative overflow-x-hidden transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex w-full items-center animate-carousel hover:pause-animation">
            {/* Double the items for seamless looping */}
            {[...artists, ...artists].map((artist, index) => (
              <div
                key={`${artist.id}-${index}`}
                className="flex-shrink-0 w-[199px] group cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-[0.718] w-full">
                  <img
                    src={artist.image}
                    className="absolute h-full w-full object-cover inset-0"
                    alt={artist.name}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-white text-lg font-[612] tracking-[-0.27px] leading-[1.3]">{artist.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
