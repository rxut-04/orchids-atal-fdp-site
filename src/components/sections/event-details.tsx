import React from 'react';
import Image from 'next/image';

const EventDetails: React.FC = () => {
  const resourcePersons = [
    { name: "Dr. Abhijat Abhyankar", designation: "Dean, NICMAR University, Pune" },
    { name: "Dr. D. S. Gandhe", designation: "Chairman, Prerana Energy, Pune" },
    { name: "Dr. Ratnadip R. Joshi", designation: "Associate Director Green Hydrogen Research Centre, MITWPU Pune" },
    { name: "Shri. Manish Kulkarni", designation: "Head, Projects NuGen Energy, Pune" },
    { name: "Shri. Chandrakant R. Mohikar", designation: "Consultant, EPCCO&M Pune, Maharashtra" },
    { name: "Dr. J. Sudarshan", designation: "Head, Energy, NICMAR University Pune" },
    { name: "Dr. Pramod Deshpande", designation: "Adjunct Professor" },
    { name: "Dr. Nitin B. Raut", designation: "Professor, Sohar University, Sultanate of Oman" },
    { name: "Shri. Gajanan R. Patil", designation: "Director, Urja Bio System Pvt. Ltd." },
    { name: "Dr. Samir Deshmukh", designation: "Professor, LIT, Nagpur" },
  ];

  return (
    <section className="py-[80px] lg:py-[100px] bg-white" id="resource-persons">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="mb-12">
          <div className="text-center">
            <h2 className="text-[32px] md:text-[42px] font-bold font-display text-[#0d5c2e] capitalize leading-tight">
              Resource Persons
            </h2>
            <p className="text-[#666] text-[16px] mt-2">Domain Experts From Reputed Institutes/Industry</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resourcePersons.map((person, index) => (
            <div 
              key={index} 
              className="bg-[#f8f9fa] rounded-lg p-6 border-l-4 border-[#0d5c2e] hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[#0d5c2e] font-bold font-display text-[18px] mb-2">
                {person.name}
              </h3>
              <p className="text-[#666] font-body text-[14px]">
                {person.designation}
              </p>
            </div>
          ))}
        </div>

        <div className="relative max-w-[1050px] mx-auto overflow-hidden rounded-[10px] bg-[#0d5c2e] flex flex-col md:flex-row shadow-[0px_10px_30px_rgba(0,0,0,0.1)]">
          
          <div className="w-full md:w-[70px] bg-[#ffd700] flex items-center justify-center py-6 md:py-0">
            <div className="md:-rotate-90 whitespace-nowrap text-center">
              <span className="text-[#0d5c2e] font-display font-semibold text-[14px] md:text-[16px] tracking-wide inline-block px-4">
                Chemical Engineering Department, SVIT, Nashik
              </span>
            </div>
          </div>

          <div className="flex-1 p-[30px] md:p-[50px] flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-[#ffd700] px-5 py-2 rounded-md">
                <span className="text-[#0d5c2e] font-bold font-display text-[18px]">
                  Registration Fee: No Charges
                </span>
              </div>

              <h3 className="text-white font-display font-bold text-[20px] md:text-[22px] leading-[1.4]">
                Faculty Development Programme On &quot;Energy, Sustainability and Climate Change&quot; Sponsored by AICTE Training and Learning (ATAL) Academy
              </h3>

              <div className="inline-block bg-white/10 border border-[#ffd700] px-6 py-2 rounded-full">
                <span className="text-[#ffd700] font-bold font-display text-[16px]">
                  5th - 10th January, 2026
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-[#ffd700] font-bold font-display text-[20px] mb-2">
                    Mode Of Event
                  </h4>
                  <p className="text-white font-body text-[16px] m-0 text-left">
                    Online
                  </p>
                </div>

                <div>
                  <h4 className="text-[#ffd700] font-bold font-display text-[20px] mb-2">
                    Venue
                  </h4>
                  <p className="text-white font-body text-[14px] md:text-[15px] leading-relaxed m-0 text-left">
                    SVIT, Chincholi, Sinnar, Nashik
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="relative p-6 bg-[#0a4a24] rounded-[15px] border border-white/5 group">
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/40"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/40"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/40"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/40"></div>
                
                <div className="bg-white p-3 rounded-md">
                  <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center bg-white">
                    <Image 
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
    </section>
  );
};

export default EventDetails;
