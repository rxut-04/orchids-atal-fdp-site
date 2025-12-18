import React from 'react';
import Image from 'next/image';

/**
 * EventDetails Component
 * Clones the "ATAL FDP Event Details" section with pixel-perfect accuracy.
 * Features a dark-themed card with an orange left sidebar, registration fee,
 * event mode, resource persons, and a QR code.
 */
const EventDetails: React.FC = () => {
  return (
    <section className="section-padding bg-white" id="event-details">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-12">
          <div className="col-12 text-center">
            <h2 className="text-[32px] md:text-[42px] font-bold font-display text-[#1c1c1c] capitalize leading-tight">
              ATAL FDP Event Details
            </h2>
          </div>
        </div>

        {/* Event Ticket Card Container */}
        <div className="relative max-w-[1050px] mx-auto overflow-hidden rounded-[10px] bg-[#0a0d14] flex flex-col md:flex-row shadow-[0px_10px_30px_rgba(0,0,0,0.1)]">
          
          {/* Left Orange Sidebar */}
          <div className="w-full md:w-[70px] bg-[#ff8a2d] flex items-center justify-center py-6 md:py-0">
            <div className="md:-rotate-90 whitespace-nowrap text-center">
              <span className="text-black font-display font-semibold text-[14px] md:text-[16px] tracking-wide inline-block px-4">
                Computer Engineering Department, SITRC, Nashik
              </span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-[30px] md:p-[50px] flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* Ticket Left Info */}
            <div className="flex-1 space-y-6">
              {/* Registration Fee Badge */}
              <div className="inline-block bg-[#ff8a2d] px-5 py-2 rounded-md">
                <span className="text-black font-bold font-display text-[18px]">
                  Registration Fee: No Charges
                </span>
              </div>

              {/* Event Title */}
              <h3 className="text-white font-display font-bold text-[20px] md:text-[22px] leading-[1.4]">
                One-Week Faculty Development Programme On “Converging Technologies: 6G, AI, and Quantum Computing for Smart Innovation” Sponsored by AICTE Training and Learning (ATAL) Academy
              </h3>

              {/* Date Chip */}
              <div className="inline-block bg-white/10 border border-[#ff8a2d] px-6 py-2 rounded-full">
                <span className="text-[#ff8a2d] font-bold font-display text-[16px]">
                  08th - 13th Dec, 2025
                </span>
              </div>

              {/* Event Meta Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Mode of Event */}
                <div>
                  <h4 className="text-[#ff8a2d] font-bold font-display text-[20px] mb-2">
                    Mode Of Event
                  </h4>
                  <p className="text-white font-body text-[16px] m-0 text-left">
                    Online
                  </p>
                </div>

                {/* Resource Persons */}
                <div>
                  <h4 className="text-[#ff8a2d] font-bold font-display text-[20px] mb-2">
                    Resource Persons
                  </h4>
                  <p className="text-white font-body text-[14px] md:text-[15px] leading-relaxed m-0 text-left">
                    Domain Experts From Reputed Institutes/Academics
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="relative p-6 bg-[#181a20] rounded-[15px] border border-white/5 group">
                {/* Decorative Corners for QR Frame */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/40"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/40"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/40"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/40"></div>
                
                {/* QR Image Placeholder / Generation */}
                <div className="bg-white p-3 rounded-md">
                  <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center bg-white">
                    {/* Using a generic QR appearance as requested assets were empty but UI requires it */}
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://atalacademy.aicte-india.org/login" 
                      alt="Registration QR Code"
                      width={150}
                      height={150}
                      className="object-contain grayscale contrast-125"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>
    </section>
  );
};

export default EventDetails;