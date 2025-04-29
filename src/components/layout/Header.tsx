import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="absolute z-0 flex w-[1440px] max-w-[1440px] items-center gap-[40px_100px] font-[612] leading-[1.1] justify-between flex-wrap px-20 py-8 right-0 top-0 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex items-stretch text-2xl text-[#faba00] w-[193px] my-auto pr-[22px]">
        <div className="mr-[-49px] grow">
          <span style={{ color: "rgba(45,175,229,1)" }}>prodej</span>
          <span style={{ color: "rgba(245,245,245,1)" }}>hudbu </span>{" "}
          <span style={{ color: "rgba(45,175,229,1)" }}>cz</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/d7987b3707d1f8338feca6ac3ffc29c642696ee4?placeholderIfAbsent=true"
          className="aspect-[0.96] object-contain w-[27px] shrink-0"
          alt="Logo icon"
        />
      </div>
      <nav className="self-stretch flex min-w-60 items-center gap-8 text-sm text-neutral-100 flex-wrap my-auto max-md:max-w-full">
        <Link
          to="#how-it-works"
          className="self-stretch gap-2 my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors"
        >
          Jak to funguje?
        </Link>
        <Link
          to="#youtube-revenue"
          className="self-stretch gap-2 my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors"
        >
          Příjmy z YouTube
        </Link>
        <Link
          to="#faq"
          className="self-stretch gap-2 my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors"
        >
          FAQ a nápověda
        </Link>
        <Link
          to="#contacts"
          className="self-stretch gap-2 whitespace-nowrap my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors"
        >
          Kontakty
        </Link>
        <Link
          to="/client"
          className="self-stretch bg-[rgba(45,175,229,1)] border gap-2 my-auto px-6 py-3 border-[rgba(45,175,229,1)] border-solid max-md:px-5 hover:bg-[rgba(45,175,229,0.8)] transition-colors"
        >
          Klientská zóna
        </Link>
      </nav>
    </header>
  );
};
