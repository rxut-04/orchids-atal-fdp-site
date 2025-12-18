import React from 'react';
import Image from 'next/image';

const ImportantDates = () => {
  return (
    <section 
      id="dates" 
      className="relative min-h-[500px] flex items-center justify-center py-20 lg:py-[100px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/work-img4-8.png"
          alt="Campus Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0d5c2e]/80" />
      </div>

      <div className="container relative z-10 px-[15px] mx-auto max-w-[1170px]">
        <div className="row mb-[60px]">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="text-white text-[32px] font-bold font-display capitalize mb-6 leading-[1.2]">
              Important Dates
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-[12px]">
          <div className="w-full md:w-1/2 lg:w-1/3 px-[12px] mb-6 lg:mb-0 flex justify-center">
            <div className="bg-white rounded-lg p-[30px] w-full max-w-[370px] text-center shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
              <h5 className="text-[#0d5c2e] text-[20px] font-semibold font-display mb-10 leading-[1.2]">
                Last Date of Registration
              </h5>
              <div className="mb-[26px]">
                <ul className="list-none p-0 m-0">
                  <li>
                    <span className="inline-block text-[#1c1c1c] text-[18px] font-medium font-body transition-colors duration-300">
                      January 02nd, 2026
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-[12px] flex justify-center">
            <div className="bg-white rounded-lg p-[30px] w-full max-w-[370px] text-center shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
              <h5 className="text-[#0d5c2e] text-[20px] font-semibold font-display mb-10 leading-[1.2]">
                Date of FDP
              </h5>
              <div className="mb-[26px]">
                <ul className="list-none p-0 m-0">
                  <li>
                    <span className="inline-block text-[#1c1c1c] text-[18px] font-medium font-body transition-colors duration-300">
                      January 5th – 10th, 2026
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
