"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Important Dates", href: "#dates" },
    { name: "Committees", href: "#committes" },
    { name: "Brochure", href: "/assets/pdf/brochure.pdf" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header className="homepage2-menu w-full relative z-[100]">
        <div
          id="vl-header-sticky"
          className={`vl-header-area fixed top-0 left-0 w-full transition-all duration-300 ${
            isSticky 
              ? "bg-[#090b0e] shadow-md h-[79px]" 
              : "bg-[#090b0e]/80 lg:bg-transparent h-[79px] lg:h-[89px]"
          }`}
        >
          <div className="container mx-auto max-w-[1320px] px-3 h-full flex items-center">
            <div className="w-full flex items-center justify-between lg:justify-start bg-transparent py-4 lg:py-0 border-none">
              
              {/* Logo */}
              <div className="flex-shrink-0 w-[164px] lg:w-[220px]">
                <div className="vl-logo">
                  <a href="#home" className="block">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/header-logo-1.png"
                      alt="Sandip Foundation Logo"
                      width={164}
                      height={50}
                      className="object-contain"
                      priority
                    />
                  </a>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:block flex-grow px-3">
                <nav className="vl-main-menu text-center">
                  <ul className="flex justify-center items-center space-x-0">
                    {navLinks.map((link) => (
                      <li key={link.name} className="relative group">
                        <a
                          href={link.href}
                          className="inline-block px-4 py-2 text-[18px] font-medium font-display text-white transition-colors duration-300 hover:text-[#ff8a2d] whitespace-nowrap"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Registration Button (Desktop) & Mobile Toggle */}
              <div className="flex items-center lg:w-[330px] justify-end space-x-4">
                <div className="hidden lg:block">
                  <div className="btn-area1">
                    <a
                      href="https://atalacademy.aicte-india.org/login"
                      className="vl-btn2 inline-block bg-[#fd7e14] text-white text-[20px] font-semibold font-display px-[20px] py-[18px] rounded-[8px] transition-all duration-300 hover:bg-[#e6761d] hover:-translate-y-0.5 text-center min-w-[143px]"
                    >
                      Registration
                    </a>
                  </div>
                </div>

                {/* Mobile Menu Icon */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden text-white p-2"
                  aria-label="Open Menu"
                >
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Offcanvas Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-[#090b0e] z-[1001] transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div className="vl-logo">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/header-logo-1.png"
                alt="Logo"
                width={140}
                height={42}
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#ff8a2d] transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-grow">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[18px] font-medium text-white hover:text-[#ff8a2d] transition-colors py-2 border-b border-white/10"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="https://atalacademy.aicte-india.org/login"
                  className="block text-center bg-[#fd7e14] text-white text-[18px] font-semibold py-3 rounded-[8px]"
                >
                  Registration
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;