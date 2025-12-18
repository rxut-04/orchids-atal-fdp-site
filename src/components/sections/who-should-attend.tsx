import React from 'react';

const WhoShouldAttend = () => {
  return (
    <section 
      id="who-should-attend" 
      className="bg-[#0a0d14] text-white py-[60px] lg:py-[80px]"
    >
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex flex-col items-center text-center">
          {/* Section Heading */}
          <h2 className="text-[28px] md:text-[32px] font-bold font-display mb-4 tracking-tight leading-tight">
            Who Should Attend?
          </h2>
          
          {/* Content Wrapper */}
          <div className="max-w-[800px] mx-auto">
            <p className="text-[16px] font-body text-white/90 leading-[1.6] mb-0 inline-block">
              <span className="font-bold text-white">Target Participants:</span>{' '}
              PG Students, Research Scholars, Faculty Members and Industry Professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;