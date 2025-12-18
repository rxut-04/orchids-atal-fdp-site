import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  // Asset constants based on provided mappings
  const HERO_BG = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/hero-img4-6.png";
  const LOGO_ATAL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l1-2.png";
  const LOGO_AICTE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l2-3.png";
  const LOGO_NBA = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l3-4.png";

  return (
    <section 
      id="Home"
      className="relative min-h-[700px] lg:min-h-[850px] flex items-center pt-[80px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-[15px] lg:max-w-[1170px]">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[75%]">
            <div className="hero2-header">
              {/* Main Headline with Split Text Effect Simulation */}
              <h1 className="text-white font-display text-[32px] md:text-[38px] lg:text-[42px] leading-[1.2] font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="block mb-2">
                  One-Week Faculty Development Programme
                </span>
                <span className="block mb-2">
                  On “Converging Technologies: 6G, AI, and Quantum Computing for Smart Innovation”
                </span>
                <span className="block text-[24px] md:text-[28px] lg:text-[32px] font-bold opacity-90">
                  Sponsored by AICTE Training and Learning (ATAL) Academy & Organized By Department of Computer Engineering
                </span>
              </h1>

              {/* Date Badge */}
              <div className="inline-block animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                <span className="bg-[#ff8a2d] text-white px-[20px] py-[10px] rounded-[8px] font-bold text-[18px] lg:text-[20px] inline-block mb-8">
                  08th-13th Dec, 2025
                </span>
              </div>

              {/* Sponsoring Logos */}
              <div className="flex flex-wrap gap-4 mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                <div className="bg-white/95 p-2 rounded-sm shadow-md">
                  <Image 
                    src={LOGO_ATAL} 
                    alt="ATAL Academy Logo" 
                    width={100} 
                    height={50} 
                    className="h-[50px] w-auto object-contain"
                  />
                </div>
                <div className="bg-white/95 p-2 rounded-sm shadow-md">
                  <Image 
                    src={LOGO_AICTE} 
                    alt="AICTE Logo" 
                    width={100} 
                    height={50} 
                    className="h-[50px] w-auto object-contain"
                  />
                </div>
                <div className="bg-white/95 p-2 rounded-sm shadow-md">
                  <Image 
                    src={LOGO_NBA} 
                    alt="NBA Accreditation Logo" 
                    width={100} 
                    height={50} 
                    className="h-[50px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;