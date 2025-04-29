import React from "react";

export const ArtistGrid: React.FC = () => {
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
    <section className="z-0 flex w-full max-w-[1793px] flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10">
      <h2 className="text-neutral-100 text-[57px] font-[612] leading-[57px] tracking-[-0.85px] text-center self-center w-[846px] max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
        <span style={{ color: "rgba(245,245,245,1)" }}>Více než 250 kapel</span>{" "}
        a interpretů už využilo Prodejhudbu.cz
      </h2>
      <div className="flex w-full items-center gap-2 flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
        {artists.map((artist, index) => (
          <div
            key={artist.id}
            className={`bg-white self-stretch min-w-60 overflow-hidden text-lg text-neutral-100 font-[612] tracking-[-0.27px] leading-[1.3] grow shrink w-[199px] my-auto ${
              index === 0 || index === 6 ? "px-[50px]" : ""
            }`}
          >
            <div
              className={`flex flex-col relative ${
                index === 0 || index === 6
                  ? "aspect-[0.21] w-[73px]"
                  : "aspect-[0.718] w-full"
              } pt-[223px] max-md:pt-[100px]`}
            >
              <img
                src={artist.image}
                className="absolute h-full w-full object-cover inset-0"
                alt={artist.name}
              />
              <div
                className={`relative ${
                  index !== 0
                    ? "text-ellipsis pt-[92px] pb-[19px] px-[19px] max-md:pr-5"
                    : "flex shrink-0 h-[124px]"
                }`}
              >
                {index !== 0 && artist.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
