import React from 'react';
import Image from 'next/image';

const ImportantDates = () => {
  return (
    <section 
      id="dates" 
      className="relative min-h-[500px] flex items-center justify-center py-20 lg:py-[100px]"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/work-img4-8.png"
          alt="Campus Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark linear-gradient overlay as specified in the design system */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 px-[15px] mx-auto max-w-[1170px]">
        {/* Section Heading */}
        <div className="row mb-[60px]">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="text-white text-[32px] font-bold font-display capitalize mb-6 leading-[1.2]">
              Important Dates
            </h2>
          </div>
        </div>

        {/* Date Cards Grid */}
        <div className="flex flex-wrap justify-center -mx-[12px]">
          {/* Card 1: Registration Deadline */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-[12px] mb-6 lg:mb-0 flex justify-center">
            <div className="bg-white rounded-lg p-[30px] w-full max-w-[370px] text-center shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
              <h5 className="text-[#ff8a2d] text-[20px] font-semibold font-display mb-10 leading-[1.2]">
                Last Date of Registration
              </h5>
              <div className="mb-[26px]">
                <ul className="list-none p-0 m-0">
                  <li>
                    <span className="inline-block text-[#1c1c1c] text-[18px] font-medium font-body transition-colors duration-300">
                      December 04th, 2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: FDP Training Dates */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-[12px] flex justify-center">
            <div className="bg-white rounded-lg p-[30px] w-full max-w-[370px] text-center shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
              <h5 className="text-[#ff8a2d] text-[20px] font-semibold font-display mb-10 leading-[1.2]">
                Date of FDP
              </h5>
              <div className="mb-[26px]">
                <ul className="list-none p-0 m-0">
                  <li>
                    <span className="inline-block text-[#1c1c1c] text-[18px] font-medium font-body transition-colors duration-300">
                      December 08th – 13th, 2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;