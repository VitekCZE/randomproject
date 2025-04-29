
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <header 
      className={`fixed z-50 w-full flex items-center justify-between flex-wrap px-6 md:px-20 py-6 md:py-8 transition-all duration-300 ease-in-out font-atyp font-semibold ${
        scrolled 
          ? "bg-[rgba(29,29,27,0.95)] backdrop-blur-sm shadow-lg py-4" 
          : "bg-transparent"
      }`}
    >
      <div className="self-stretch flex items-center text-2xl w-[193px] my-auto transition-transform hover:scale-105 duration-300">
        <Link to="/">
          <img
            src="/lovable-uploads/151772f3-bf5d-4b20-b5d6-6ec098eb2609.png"
            className="h-8 object-contain"
            alt="prodejhudbu.cz logo"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex self-stretch min-w-60 items-center gap-8 text-sm text-neutral-100 font-atyp font-semibold flex-wrap my-auto">
        <Link
          to="/jak-to-funguje"
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
          className="self-stretch bg-[rgba(45,175,229,1)] border gap-2 my-auto px-6 py-3 border-[rgba(45,175,229,1)] border-solid hover:bg-[rgba(45,175,229,0.8)] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 font-atyp font-semibold"
        >
          Klientská zóna
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none text-neutral-100"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 transition-all duration-300 ease-in-out transform rotate-90" />
          ) : (
            <Menu className="h-6 w-6 transition-all duration-300 ease-in-out" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-[rgba(29,29,27,0.95)] backdrop-blur-md z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-8 text-xl font-atyp font-semibold w-full">
            <Link
              to="/jak-to-funguje"
              className="w-full text-center py-4 text-neutral-100 hover:text-[rgba(45,175,229,1)] transition-colors"
              onClick={toggleMenu}
            >
              Jak to funguje?
            </Link>
            <Link
              to="#youtube-revenue"
              className="w-full text-center py-4 text-neutral-100 hover:text-[rgba(45,175,229,1)] transition-colors"
              onClick={toggleMenu}
            >
              Příjmy z YouTube
            </Link>
            <Link
              to="#faq"
              className="w-full text-center py-4 text-neutral-100 hover:text-[rgba(45,175,229,1)] transition-colors"
              onClick={toggleMenu}
            >
              FAQ a nápověda
            </Link>
            <Link
              to="#contacts"
              className="w-full text-center py-4 text-neutral-100 hover:text-[rgba(45,175,229,1)] transition-colors"
              onClick={toggleMenu}
            >
              Kontakty
            </Link>
            {/* Removed Klientská zóna button from here */}
          </div>
        </nav>
      </div>
    </header>
  );
};
