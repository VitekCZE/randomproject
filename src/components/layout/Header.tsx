
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button 
              onClick={toggleMenu} 
              className="text-neutral-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[80%] bg-[rgba(29,29,27,0.98)] text-neutral-100 flex flex-col pt-20"
          >
            <div className="flex flex-col gap-6 text-xl font-atyp font-semibold">
              <Link
                to="/jak-to-funguje"
                className="px-4 py-3 hover:bg-[rgba(45,175,229,0.2)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Jak to funguje?
              </Link>
              <Link
                to="#youtube-revenue"
                className="px-4 py-3 hover:bg-[rgba(45,175,229,0.2)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Příjmy z YouTube
              </Link>
              <Link
                to="#faq"
                className="px-4 py-3 hover:bg-[rgba(45,175,229,0.2)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ a nápověda
              </Link>
              <Link
                to="#contacts"
                className="px-4 py-3 hover:bg-[rgba(45,175,229,0.2)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakty
              </Link>
              <Link
                to="/client"
                className="mt-4 mx-4 bg-[rgba(45,175,229,1)] text-center py-3 hover:bg-[rgba(45,175,229,0.8)] transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Klientská zóna
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
