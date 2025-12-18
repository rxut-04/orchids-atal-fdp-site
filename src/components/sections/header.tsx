"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Dates", href: "#dates" },
    { name: "Committees", href: "#committes" },
    { name: "Speakers", href: "#resource-persons" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] lg:w-[calc(100%-4rem)] max-w-[1280px] z-[100] transition-all duration-500 rounded-3xl border border-white/10 ${
          isSticky 
            ? "bg-[#0d5c2e]/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] py-3" 
            : "bg-white/5 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-6 lg:max-w-[1280px]">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="bg-white p-1.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PRAVARA_LOGO-1766039988502.png?width=8000&height=8000&resize=contain"
                    alt="SVIT"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none tracking-tighter">SVIT NASHIK</span>
                <span className="text-yellow-400 font-bold text-[10px] tracking-widest uppercase opacity-80">ATAL FDP 2026</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="px-4 py-2 text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 uppercase tracking-wider"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Registration Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://atalacademy.aicte-india.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex px-6 py-2.5 bg-yellow-400 text-[#0d5c2e] text-sm font-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] uppercase tracking-wider"
              >
                Register
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 w-[320px] h-full bg-[#0d5c2e] z-[1001] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-[-20px_0_40px_rgba(0,0,0,0.3)]`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-lg">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PRAVARA_LOGO-1766039988502.png?width=8000&height=8000&resize=contain"
                    alt="SVIT"
                    width={30}
                    height={30}
                  />
                </div>
              <span className="text-white font-black text-lg tracking-tighter">SVIT NASHIK</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/60 hover:text-white p-2 hover:bg-white/10 rounded-xl transition-all"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-grow">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-4 text-xl font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-widest">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-8 mt-auto border-t border-white/10">
            <a
              href="https://atalacademy.aicte-india.org/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full bg-yellow-400 text-[#0d5c2e] text-lg font-black py-5 rounded-2xl shadow-xl transition-all active:scale-95 uppercase tracking-widest"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;