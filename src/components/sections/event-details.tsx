import React from 'react';
import Image from 'next/image';
import { UserCheck, Calendar, MapPin, CreditCard, Monitor } from 'lucide-react';

const EventDetails: React.FC = () => {
  const resourcePersons = [
    { name: "Dr. Abhijat Abhyankar", designation: "Dean, NICMAR University, Pune" },
    { name: "Dr. D. S. Gandhe", designation: "Chairman, Prerana Energy, Pune" },
    { name: "Dr. Ratnadip R. Joshi", designation: "Associate Director Green Hydrogen Research Centre, MITWPU Pune" },
    { name: "Shri. Manish Kulkarni", designation: "Head, Projects NuGen Energy, Pune" },
    { name: "Shri. Chandrakant R. Mohikar", designation: "Consultant, EPCCO&M Pune, Maharashtra" },
    { name: "Dr. J. Sudarshan", designation: "Head, Energy, NICMAR University Pune" },
      { name: "Dr. Pramod Deshpande", designation: "Adjunct Professor" },
      { name: "Dr. Nitin B. Raut", designation: "Professor, Sohar University, P.O. Box 446, Postal Code 311, Sultanate of Oman" },
      { name: "Shri. Gajanan R. Patil", designation: "Director, Urja Bio System Pvt. Ltd." },
    { name: "Dr. Samir Deshmukh", designation: "Professor, LIT, Nagpur" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#f8f9fa] relative overflow-hidden scroll-mt-32" id="resource-persons">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0d5c2e]/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:max-w-[1280px] relative z-10">
        
        {/* Resource Persons Header */}
        <div className="text-center mb-16">
          <span className="text-[#0d5c2e] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Meet Our Experts</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d5c2e] tracking-tighter mb-6">
            RESOURCE <span className="text-yellow-600">PERSONS</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Domain experts from reputed institutes and industry leaders sharing their insights and expertise.
          </p>
        </div>

        {/* Resource Persons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {resourcePersons.map((person, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-6 border border-black/5 hover:border-[#0d5c2e]/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0d5c2e]/5 rounded-bl-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="w-12 h-12 bg-[#0d5c2e]/10 text-[#0d5c2e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0d5c2e] group-hover:text-white transition-all duration-500">
                <UserCheck size={24} />
              </div>
              <h3 className="text-[#0d5c2e] font-black text-lg mb-2 leading-tight">
                {person.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {person.designation}
              </p>
            </div>
          ))}
        </div>

        {/* Event Quick Info Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-yellow-400 rounded-[40px] translate-x-3 translate-y-3 -z-10 opacity-30" />
          <div className="bg-[#0d5c2e] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
            
            {/* Left Accent */}
            <div className="hidden lg:flex w-20 bg-yellow-400 items-center justify-center">
              <span className="font-black text-[#0d5c2e] uppercase tracking-[0.5em] -rotate-90 whitespace-nowrap text-sm">
                SVIT NASHIK • FDP 2026
              </span>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 md:p-16 text-white">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <CreditCard size={18} className="text-yellow-400" />
                  <span className="text-xs font-black uppercase tracking-widest">Registration: FREE</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Calendar size={18} className="text-yellow-400" />
                  <span className="text-xs font-black uppercase tracking-widest">5-10 Jan 2026</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-10 leading-tight">
                Energy, Sustainability and Climate Change <br />
                <span className="text-yellow-400/80 text-lg font-bold block mt-2 opacity-80 uppercase tracking-widest">AICTE-ATAL Sponsored FDP</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Monitor size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-black text-yellow-400 uppercase text-xs tracking-widest mb-1">Mode</h4>
                      <p className="font-bold">Online (Link via Email)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-black text-yellow-400 uppercase text-xs tracking-widest mb-1">Venue</h4>
                      <p className="font-bold">SVIT, Chincholi, Sinnar, Nashik</p>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://atalacademy.aicte-india.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-yellow-400 text-[#0d5c2e] font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>SECURE YOUR SPOT</span>
                <div className="w-6 h-6 bg-[#0d5c2e] text-white rounded-full flex items-center justify-center">
                  <span className="text-xs">→</span>
                </div>
              </a>
            </div>

            {/* QR Section */}
            <div className="bg-white/5 backdrop-blur-2xl p-10 lg:w-80 flex flex-col items-center justify-center border-l border-white/10">
              <div className="bg-white p-4 rounded-3xl shadow-2xl mb-6 group hover:scale-110 transition-transform duration-500">
                <Image 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://atalacademy.aicte-india.org/login" 
                  alt="QR Code"
                  width={150}
                  height={150}
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-center">
                Scan to Register <br /> on ATAL Portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;