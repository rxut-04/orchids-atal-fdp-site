import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const LOGO_AICTE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l2-3.png";
  const LOGO_ATAL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l1-2.png";
  const INSTITUTE_IMAGE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766039634850.png?width=8000&height=8000&resize=contain";

  return (
    <section 
      id="home"
      className="relative min-h-[105vh] flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden scroll-mt-32"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={INSTITUTE_IMAGE}
          alt="SVIT Nashik"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d5c2e]/95 via-[#0d5c2e]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>

      <div className="container relative z-20 mx-auto px-6 lg:max-w-[1280px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
            {/* Left Content */}
            <div className="lg:col-span-8 text-white">
              <div className="flex flex-wrap items-center gap-4 mb-4 animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/20">
                  <Image src={LOGO_AICTE} alt="AICTE" width={40} height={40} className="h-10 w-auto object-contain" />
                </div>
                <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/20">
                  <Image src={LOGO_ATAL} alt="ATAL" width={40} height={40} className="h-10 w-auto object-contain" />
                </div>
                  <div className="h-10 w-px bg-white/30 mx-1 hidden sm:block" />
                  <div>
                    <span className="block text-[10px] font-bold tracking-widest uppercase opacity-80">Sponsored By</span>
                    <span className="block text-xs font-extrabold text-yellow-400">AICTE Training and Learning (ATAL) Academy</span>
                    <span className="block text-[10px] font-bold text-white/60">FDP ID: 1748495741</span>
                  </div>
                </div>

              <div className="space-y-2 mb-6 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                <span className="inline-block px-3 py-0.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 text-[10px] font-bold tracking-wider uppercase mb-1">
                  Faculty Development Program
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
                  ENERGY,<br />
                  <span className="text-yellow-400">SUSTAINABILITY</span><br />
                  & CLIMATE CHANGE
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-8 animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
                <div className="bg-white text-[#0d5c2e] px-6 py-3 rounded-2xl shadow-2xl flex flex-col">
                  <span className="text-[10px] font-bold uppercase opacity-60">FDP Dates</span>
                  <span className="text-xl font-black">5 - 10 JAN 2026</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-white/70">Organized By</span>
                  <span className="text-lg font-extrabold leading-tight">Department of Chemical Engineering</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                <a 
                  href="https://atalacademy.aicte-india.org/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-yellow-400 text-[#0d5c2e] font-black text-base rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] overflow-hidden text-center"
                >
                  <span className="relative z-10">REGISTER NOW</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                </a>
                <a 
                  href="#about" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-black text-base rounded-2xl transition-all duration-300 hover:bg-white/20 text-center"
                >
                  LEARN MORE
                </a>
              </div>
            </div>

            {/* Right Content - Branding Card */}
            <div className="lg:col-span-4 hidden lg:block animate-in fade-in zoom-in duration-1000 delay-400">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[32px] shadow-2xl">
                  <div className="bg-white p-4 rounded-2xl shadow-xl mb-4 flex justify-center">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PRAVARA_LOGO-1766039988502.png?width=8000&height=8000&resize=contain"
                      alt="Pravara Logo"
                      width={100}
                      height={100}
                      className="object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                <div className="text-center space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400">Founded by</p>
                  <p className="text-[11px] italic font-medium leading-relaxed">
                    Loknete Dr. Balasaheb Vikhe Patil <br />
                    <span className="text-[8px] uppercase font-bold not-italic">(Padma Bhushan Awardee)</span>
                  </p>
                  <div className="w-8 h-0.5 bg-yellow-400 mx-auto rounded-full" />
                  <p className="text-base font-black leading-tight">
                    SIR VISVESVARAYA <br />
                    INSTITUTE OF TECHNOLOGY, <br />
                    NASHIK
                  </p>
                    <div className="flex flex-col gap-0.5 text-[9px] font-bold text-white/60">
                      <span>NAAC &apos;B+&apos; GRADE ACCREDITED (CYCLE 1)</span>
                      <span>AFFILIATED TO SPPU, PUNE</span>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#0d5c2e]/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;