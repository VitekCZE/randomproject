import React from "react";

export const LogoGrid: React.FC = () => {
  return (
    <section className="z-0 w-full max-w-[1440px] mt-12 max-md:max-w-full max-md:mt-10">
      <h2 className="text-neutral-100 text-center text-2xl font-[612] leading-[1.3] tracking-[-0.36px] max-md:max-w-full">
        Prodávejte svou hudbu v
      </h2>
      <div className="flex w-full items-center gap-[40px_64px] justify-center flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        <div
          className="bg-[rgba(30,215,96,1)] self-stretch flex w-[57px] shrink-0 h-[57px] fill-[#1ED760] my-auto"
          aria-label="Spotify"
        />
        <div
          className="bg-white self-stretch flex w-14 shrink-0 h-14 my-auto"
          aria-label="YouTube Music"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/0cd33672ae07e3094b8afaea3bcb81b6c084e16e?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto"
          alt="Music service logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/cfadd756de94e3d15f265ee7e4ee1218cbc24cee?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto"
          alt="Music service logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/4c7ada8976e05aaa57e05ddbb75997b24b829950?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto"
          alt="Music service logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/d89a02ea197da3190cde553ecbb747f9bb569f45?placeholderIfAbsent=true"
          className="aspect-[1.02] object-contain w-[57px] fill-[#1ED760] self-stretch shrink-0 my-auto"
          alt="Music service logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/ef0401527032fc667e77922f1267a791391b9c5b?placeholderIfAbsent=true"
          className="aspect-[1.02] object-contain w-[57px] self-stretch shrink-0 my-auto"
          alt="Music service logo"
        />
      </div>
    </section>
  );
};
