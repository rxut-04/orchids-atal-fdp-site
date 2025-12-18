import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ImportantDates = () => {
  return (
    <section 
      id="dates" 
      className="relative py-24 lg:py-32 bg-[#0d5c2e] overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Timeline</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            IMPORTANT <span className="text-yellow-400">DATES</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Registration Deadline */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-yellow-400 text-[#0d5c2e] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Clock size={28} />
              </div>
              <h3 className="text-white font-black text-xl mb-2 opacity-60 uppercase tracking-widest text-sm">Last Date of Registration</h3>
              <p className="text-3xl md:text-4xl font-black text-white leading-tight">
                JANUARY 02ND, <br />
                <span className="text-yellow-400">2026</span>
              </p>
            </div>
          </div>

          {/* FDP Dates */}
          <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[40px] hover:bg-white/20 transition-all duration-500 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white text-[#0d5c2e] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Calendar size={28} />
              </div>
              <h3 className="text-white font-black text-xl mb-2 opacity-60 uppercase tracking-widest text-sm">Event Duration</h3>
              <p className="text-3xl md:text-4xl font-black text-white leading-tight">
                JANUARY 5TH – 10TH, <br />
                <span className="text-yellow-400">2026</span>
              </p>
            </div>
          </div>

        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs">
            Participants are requested to register early as seats are limited
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;