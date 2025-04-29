
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed z-50 w-full flex items-center justify-between flex-wrap px-20 py-8 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-[rgba(29,29,27,0.95)] backdrop-blur-sm shadow-lg py-4" 
          : "bg-transparent"
      }`}
    >
      <div className="self-stretch flex items-stretch text-2xl text-[#faba00] w-[193px] my-auto pr-[22px] transition-transform hover:scale-105 duration-300">
        <div className="mr-[-49px] grow">
          <span className="transition-colors duration-300" style={{ color: "rgba(45,175,229,1)" }}>prodej</span>
          <span className="transition-colors duration-300" style={{ color: "rgba(245,245,245,1)" }}>hudbu </span>{" "}
          <span className="transition-colors duration-300" style={{ color: "rgba(45,175,229,1)" }}>cz</span>
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
          className="self-stretch gap-2 my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(45,175,229,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          Jak to funguje?
        </Link>
        <Link
          to="#youtube-revenue"
          className="self-stretch gap-2 my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(45,175,229,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          Příjmy z YouTube
        </Link>
        <Link
          to="#faq"
          className="self-stretch gap-2 my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(45,175,229,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          FAQ a nápověda
        </Link>
        <Link
          to="#contacts"
          className="self-stretch gap-2 whitespace-nowrap my-auto py-1.5 hover:text-[rgba(45,175,229,1)] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(45,175,229,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          Kontakty
        </Link>
        <Link
          to="/client"
          className="self-stretch bg-[rgba(45,175,229,1)] border gap-2 my-auto px-6 py-3 border-[rgba(45,175,229,1)] border-solid hover:bg-[rgba(45,175,229,0.8)] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Klientská zóna
        </Link>
      </nav>
    </header>
  );
};
