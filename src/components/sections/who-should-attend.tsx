import React from 'react';
import { Users, Award, Zap } from 'lucide-react';

const WhoShouldAttend = () => {
  return (
    <section 
      id="who-should-attend" 
      className="bg-white py-16 md:py-24 lg:py-32 relative overflow-hidden scroll-mt-32"
    >
      <div className="container relative z-10 mx-auto px-6 lg:max-w-[1280px]">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0d5c2e] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Participation Guide</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d5c2e] tracking-tighter mb-4">
            WHO SHOULD <span className="text-yellow-600">ATTEND?</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12">
          
          {/* Eligibility Card */}
          <div className="group p-6 md:p-10 bg-[#f8f9fa] rounded-[40px] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0d5c2e]/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0d5c2e] text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
              <Users size={24} className="md:w-[28px] md:h-[28px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#0d5c2e] mb-4">Perspective Participants</h3>
            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
              This FDP is open for academicians, research scholars from AICTE approved institutions, and Central Government organizations committed to sustainability.
            </p>
          </div>

          {/* Certificate Card */}
          <div className="group p-6 md:p-10 bg-[#f8f9fa] rounded-[40px] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-400 text-[#0d5c2e] rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
              <Award size={24} className="md:w-[28px] md:h-[28px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#0d5c2e] mb-4">Certificate Criteria</h3>
            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
              Awarded to participants with min. 80% attendance and 60% marks in the final test. Online feedback is mandatory on the concluding day.
            </p>
          </div>

        </div>

        {/* Key Points Horizontal Card */}
        <div className="bg-[#0d5c2e] rounded-[40px] p-6 md:p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-400 text-[#0d5c2e] rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto lg:mx-0">
                <Zap size={24} className="md:w-[32px] md:h-[32px]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4">Quick <span className="text-yellow-400">Highlights</span></h3>
              <p className="text-white/70 font-medium text-sm md:text-base">Essential information for your smooth registration process.</p>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 md:gap-6 w-full">
              {[
                "Zero registration fee for all participants",
                "First-come, first-served selection basis",
                "Mandatory registration via ATAL portal",
                "Intimation of selection via official email"
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-center bg-white/5 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/10">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-yellow-400 text-[#0d5c2e] flex items-center justify-center font-black text-[10px] md:text-xs flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-bold text-xs md:text-sm leading-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoShouldAttend;