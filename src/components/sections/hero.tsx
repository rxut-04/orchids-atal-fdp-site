"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const LOGO_AICTE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l2-3.png";
  const LOGO_ATAL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l1-2.png";
  const INSTITUTE_IMAGE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766039634850.png?width=8000&height=8000&resize=contain";

  const LetterPull = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
    const letters = Array.from(text);
    
    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { 
          staggerChildren: 0.03, 
          delayChildren: delay 
        },
      },
    };

    const child = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
      hidden: {
        opacity: 0,
        x: -20,
      },
    };

    return (
        <motion.span
          variants={container}
          initial="hidden"
          animate="visible"
          className={`whitespace-nowrap ${className}`}
          style={{ display: "inline-block" }}
        >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <section 
      id="home"
      className="relative min-h-[100vh] flex items-center pt-20 lg:pt-28 pb-16 overflow-hidden scroll-mt-32"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image 
            src={INSTITUTE_IMAGE}
            alt="SVIT Nashik"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d5c2e]/98 via-[#0d5c2e]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>

        <div className="container relative z-20 mx-auto px-6 lg:max-w-[1280px]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
              {/* Left Content */}
              <div className="lg:col-span-9 text-white pr-4">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-wrap items-center gap-4 mb-3"
                >
                  <div className="bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20">
                    <Image src={LOGO_AICTE} alt="AICTE" width={36} height={36} className="h-9 w-auto object-contain" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20">
                    <Image src={LOGO_ATAL} alt="ATAL" width={36} height={36} className="h-9 w-auto object-contain" />
                  </div>
                    <div className="h-8 w-px bg-white/30 mx-1 hidden sm:block" />
                    <div>
                      <span className="block text-[10px] font-bold tracking-widest uppercase opacity-80">Sponsored By</span>
                      <span className="block text-xs font-extrabold text-yellow-400">AICTE Training and Learning (ATAL) Academy</span>
                      <span className="block text-[10px] font-bold text-white/60">FDP ID: 1748495741</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-1 mb-5"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 text-[10px] font-bold tracking-wider uppercase mb-1">
                      Faculty Development Program
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-[6.2rem] font-black leading-[0.85] tracking-tighter">
                      <LetterPull text="ENERGY," delay={0.4} /><br />
                      <LetterPull 
                        text="SUSTAINABILITY" 
                        delay={0.7}
                        className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]" 
                      /><br />
                      <LetterPull text="& CLIMATE CHANGE" delay={1.2} />
                    </h1>
                  </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-4 mb-6"
                >
                  <div className="bg-white text-[#0d5c2e] px-6 py-3 rounded-2xl shadow-2xl flex flex-col border-b-4 border-yellow-500 hover:scale-105 transition-transform">
                    <span className="text-[9px] font-bold uppercase opacity-60">FDP Dates</span>
                    <span className="text-lg font-black">5 - 10 JAN 2026</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-white/70">Organized By</span>
                    <span className="text-base font-extrabold leading-tight">Department of Chemical Engineering</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-6"
                >
                  <a 
                    href="https://atalacademy.aicte-india.org/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-7 py-3.5 bg-yellow-400 text-[#0d5c2e] font-black text-sm rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] overflow-hidden text-center"
                  >
                    <span className="relative z-10">REGISTER NOW</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                  </a>
                  <a 
                    href="#about" 
                    className="px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-black text-sm rounded-2xl transition-all duration-300 hover:bg-white/20 text-center"
                  >
                    LEARN MORE
                  </a>
                </motion.div>
              </div>

              {/* Right Content - Branding Card */}
              <div className="lg:col-span-3 hidden lg:block">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5, type: "spring" }}
                  className="bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[30px] shadow-2xl relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-white/30 to-transparent rounded-[30px] opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
                  <div className="relative">
                    <div className="bg-white p-3 rounded-2xl shadow-xl mb-4 flex justify-center">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PRAVARA_LOGO-1766039988502.png?width=8000&height=8000&resize=contain"
                        alt="Pravara Logo"
                        width={90}
                        height={90}
                        className="object-contain hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Founded by</p>
                      <p className="text-[10px] italic font-semibold leading-relaxed">
                        Loknete Dr. Balasaheb Vikhe Patil <br />
                        <span className="text-[7px] uppercase font-black not-italic px-1.5 py-0.5 bg-white/20 text-white rounded-sm">(Padma Bhushan Awardee)</span>
                      </p>
                      <div className="w-8 h-0.5 bg-white/20 mx-auto rounded-full" />
                      <p className="text-sm font-black leading-tight">
                        SIR VISVESVARAYA <br />
                        INSTITUTE OF TECHNOLOGY, <br />
                        NASHIK
                      </p>
                      <div className="flex flex-col gap-1 text-[8px] font-bold text-white/70">
                        <span className="bg-white/5 py-0.5 px-2 rounded-lg">NAAC &apos;B+&apos; GRADE ACCREDITED</span>
                        <span className="bg-white/5 py-0.5 px-2 rounded-lg">AFFILIATED TO SPPU, PUNE</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
          </div>
        </div>

      {/* Enhanced Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#0d5c2e]/40 rounded-full blur-[150px] pointer-events-none" 
      />
      
      {/* Dynamic Geometric Accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none skew-x-12 transform origin-top-right" />
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
      >
        <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Explore</span>
        <div className="w-0.5 h-16 rounded-full bg-gradient-to-b from-yellow-400 via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
