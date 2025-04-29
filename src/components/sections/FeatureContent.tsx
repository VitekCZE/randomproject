
import React, { useEffect, useRef, useState } from "react";

export const FreeFeatureContent: React.FC = () => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/84a5a6903d8f4999f97c3277d39ed4768251b0d9?placeholderIfAbsent=true"
      className="aspect-[1] object-contain w-[418px] self-stretch min-w-60 min-h-[522px] gap-2 grow shrink my-auto max-md:max-w-full"
      alt="Free service illustration"
    />
  );
};

export const StoresFeatureContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const musicServices = [
    { 
      id: 1, 
      name: "TikTok", 
      icon: "/lovable-uploads/fed2c437-0633-4f72-afed-7e4025db39af.png",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" 
    },
    { 
      id: 2, 
      name: "YouTube", 
      icon: "/lovable-uploads/11c3dfd1-fc1c-4bbb-96d2-945965565cef.png",
      position: "top-1/4 right-0 translate-x-1/2" 
    },
    { 
      id: 3, 
      name: "SoundCloud", 
      icon: "/lovable-uploads/94e56396-37e1-4f0e-96dc-2aefff7c4853.png",
      position: "bottom-0 right-1/4 translate-y-1/2" 
    },
    { 
      id: 4, 
      name: "Amazon Music", 
      icon: "/lovable-uploads/8fab1bdd-d319-42a8-8390-80fe90853dcd.png",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" 
    },
    { 
      id: 5, 
      name: "Tidal", 
      icon: "/lovable-uploads/0bf63c94-6768-4dc9-843c-70c0e7eb06bc.png",
      position: "bottom-1/4 left-0 -translate-x-1/2" 
    },
    { 
      id: 6, 
      name: "Spotify", 
      icon: "/lovable-uploads/5116c6f3-46e9-4c70-9b3e-90ddd071f679.png",
      position: "top-1/4 left-0 -translate-x-1/2" 
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="bg-[rgba(29,29,27,1)] flex flex-col items-center justify-center p-[51px] max-md:max-w-full max-md:px-5"
    >
      <div className={`relative w-[450px] h-[450px] max-w-full ${isVisible ? 'animate-rotate-circle' : ''} animation-duration-60s`}>
        {/* Circle border */}
        <div className="absolute inset-0 rounded-full border border-[rgba(245,245,245,0.2)] border-dashed"></div>
        
        {/* Center content - Phone mockup */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] bg-[rgba(46,46,44,1)] rounded-[20px_20px_0_0] overflow-hidden border-[rgba(98,98,97,1)] border-solid border-[7px]">
          <div className="p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/79dea6af83cd50b47f2c15605d3d57ed169cb205?placeholderIfAbsent=true"
              className="w-full aspect-square object-contain shadow-[0px_4px_9px_rgba(0,0,0,0.2)]"
              alt="Clarinet Factory album cover"
            />
            <div className="text-neutral-100 text-sm font-semibold mt-4">
              Clarinet Factory
            </div>
            <div className="flex items-center gap-1 text-[8px] text-neutral-100 font-semibold mt-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/eb0228f99b83cc8dd64ca300aa4626c0ccebb2b2?placeholderIfAbsent=true"
                className="aspect-[1.18] object-contain w-[13px] shrink-0 rounded-[13px]"
                alt="Artist icon"
              />
              <div>Dunaj, Zrní, Tata Bojs</div>
            </div>
            <div className="flex gap-1 text-[7px] text-[rgba(179,179,179,1)] mt-1">
              <div>Album </div>
              <div>2024</div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="bg-[rgba(29,185,84,1)] flex items-center justify-center w-[31px] h-[31px] rounded-full">
                <div className="bg-black w-[3px] h-[11px] mx-[1px]"></div>
                <div className="bg-black w-[3px] h-[11px] mx-[1px]"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Music service icons around the circle */}
        {musicServices.map((service) => (
          <div 
            key={service.id}
            className={`absolute ${service.position} w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(29,29,27,1)] z-10 transform hover:scale-125 transition-transform duration-300 ${isVisible ? 'animate-icon-pop' : ''}`} 
            style={{ animationDelay: `${service.id * 0.3}s` }}
          >
            <img 
              src={service.icon} 
              alt={service.name} 
              className="w-8 h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const CzechFeatureContent: React.FC = () => {
  return (
    <div className="self-stretch min-w-60 text-[11px] text-neutral-100 tracking-[0.11px] w-[522px] my-auto px-px max-md:max-w-full">
      <div className="bg-[rgba(29,29,27,1)] flex flex-col justify-center px-[52px] py-[69px] max-md:max-w-full max-md:px-5">
        <div className="bg-[rgba(46,46,44,1)] flex w-[250px] max-w-full flex-col overflow-hidden items-center px-4 py-[47px] rounded-[20px_20px_0px_0px] border-[rgba(98,98,97,1)] border-solid border-[7px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/0e6ceff54a6c572a030ae8f8f8d51168031ddaec?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[39px]"
            alt="Support icon"
          />
          <div className="text-[25px] leading-7 tracking-[0.5px] text-center mt-4">
            Technická podpora
          </div>
          <div className="font-normal leading-[1.1] tracking-[0.22px] text-center mt-[37px]">
            Pavel vám nyní asistuje
          </div>
          <div className="items-center rounded bg-[rgba(245,245,245,0.32)] self-stretch flex min-h-14 gap-3 mt-6 px-3 py-[17px]">
            <div className="bg-[rgba(54,155,215,1)] self-stretch flex min-h-[18px] items-center gap-3 whitespace-nowrap text-center leading-[1.4] justify-center w-[18px] h-[18px] my-auto rounded-[32px]">
              <div className="self-stretch min-h-3 w-3 my-auto rounded-[40px]">
                P
              </div>
            </div>
            <div className="leading-[15px] flex-1 shrink basis-[0%] my-auto">
              Dobrý den, Julie, jak vám mohu dnes pomoci?
            </div>
          </div>
          <div className="w-[154px] rounded bg-[rgba(245,245,245,0.32)] self-stretch min-h-14 gap-3 leading-[15px] mt-2 px-3 py-[17px]">
            Jak se mohu dostat ke svým statistikám streamování?
          </div>
        </div>
      </div>
    </div>
  );
};

export const YoutubeFeatureContent: React.FC = () => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/7b8611329dd3ea4e89159dd6e83ee4e2810873ca?placeholderIfAbsent=true"
      className="aspect-[1] object-contain w-[521px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full"
      alt="YouTube monetization illustration"
    />
  );
};
