import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const LOGO_AICTE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l2-3.png";
  const LOGO_ATAL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/l1-2.png";

  return (
    <section 
      id="home"
      className="relative min-h-[750px] lg:min-h-[900px] flex items-center pt-[80px] bg-gradient-to-b from-[#f5f5dc] to-white"
    >
      <div className="container mx-auto px-[15px] lg:max-w-[1170px]">
        <div className="flex flex-col items-center text-center">
          
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 animate-in fade-in duration-700">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <Image 
                src={LOGO_AICTE} 
                alt="AICTE Logo" 
                width={70} 
                height={70} 
                className="h-[60px] md:h-[70px] w-auto object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#0d5c2e] font-bold text-[14px] md:text-[18px] uppercase tracking-wide">
                AICTE Training and Learning (ATAL) Academy
              </h3>
              <p className="text-[#333] text-[12px] md:text-[14px]">(ATAL FDP NO. 1748495741)</p>
              <p className="text-[#0d5c2e] font-bold text-[14px] md:text-[16px] mt-1">SPONSORED</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md">
              <Image 
                src={LOGO_ATAL} 
                alt="ATAL Academy Logo" 
                width={70} 
                height={70} 
                className="h-[60px] md:h-[70px] w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-[#0d5c2e] font-semibold text-[16px] md:text-[20px] mb-4 animate-in fade-in duration-700 delay-100">
            FACULTY DEVELOPMENT PROGRAM ON
          </p>

          <h1 className="text-[#0d5c2e] font-display text-[36px] md:text-[52px] lg:text-[64px] leading-[1.1] font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            ENERGY,<br />
            SUSTAINABILITY AND<br />
            CLIMATE CHANGE
          </h1>

          <div className="inline-block animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 mb-8">
            <span className="bg-[#0d5c2e] text-white px-[24px] py-[12px] rounded-[8px] font-bold text-[20px] lg:text-[24px] inline-block">
              5 JAN 2026 - 10 JAN 2026
            </span>
          </div>

          <p className="text-[#0d5c2e] font-semibold text-[16px] md:text-[18px] mb-2 animate-in fade-in duration-700 delay-400">
            ORGANIZED BY
          </p>
          <h2 className="text-[#0d5c2e] font-bold text-[18px] md:text-[22px] mb-6 animate-in fade-in duration-700 delay-500">
            DEPARTMENT OF CHEMICAL ENGINEERING
          </h2>

          <div className="flex flex-col items-center mb-6 animate-in fade-in duration-700 delay-600">
            <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] mb-4">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/PRES_Logo.png/220px-PRES_Logo.png"
                alt="Pravara Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-[#333] text-[14px] md:text-[16px] italic">
              Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee)
            </p>
            <p className="text-[#333] text-[14px] md:text-[16px]">
              Pravara Rural Education Society&apos;s
            </p>
          </div>

          <h2 className="text-[#0d5c2e] font-display font-extrabold text-[22px] md:text-[28px] lg:text-[32px] mb-4 animate-in fade-in duration-700 delay-700">
            SIR VISVESVARAYA INSTITUTE OF TECHNOLOGY, NASHIK
          </h2>

          <div className="text-center text-[#333] text-[13px] md:text-[15px] leading-relaxed animate-in fade-in duration-700 delay-800">
            <p>(Recognized by AICTE, DTE, Govt of Maharashtra &amp; Affiliated to SPPU, Pune)</p>
            <p>NAAC (Cycle 1) &apos;B+&apos; Grade Accredited,</p>
            <p>Chincholi, Sinnar, Nashik Maharashtra 422102</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
