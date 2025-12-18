import React from 'react';

const WhoShouldAttend = () => {
  return (
    <section 
      id="who-should-attend" 
      className="bg-[#0d5c2e] text-white py-[60px] lg:py-[80px]"
    >
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white/10 rounded-lg p-8 border border-white/20">
            <h2 className="text-[24px] md:text-[28px] font-bold font-display mb-6 tracking-tight leading-tight border-b-2 border-[#ffd700] pb-3 inline-block">
              Perspective Participants
            </h2>
            <p className="text-[16px] font-body text-white/90 leading-[1.8]">
              This FDP is open for participants of academicians, research Scholars from AICTE approved Institutions and Central Government institutions.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-8 border border-white/20">
            <h2 className="text-[24px] md:text-[28px] font-bold font-display mb-6 tracking-tight leading-tight border-b-2 border-[#ffd700] pb-3 inline-block">
              Certificate
            </h2>
            <p className="text-[16px] font-body text-white/90 leading-[1.8]">
              Certificate shall be issued to the participants who have attended the program with minimum 80% attendance and scored minimum 60% marks in the test. The participants also have to provide compulsory online feedback on the last day of FDP.
            </p>
          </div>

        </div>

        <div className="mt-10 bg-white/10 rounded-lg p-8 border border-white/20">
          <h2 className="text-[24px] md:text-[28px] font-bold font-display mb-6 tracking-tight leading-tight border-b-2 border-[#ffd700] pb-3 inline-block">
            Key Points
          </h2>
          <ul className="text-[16px] font-body text-white/90 leading-[1.8] space-y-3 list-disc list-inside">
            <li>There is no registration fee for any participants</li>
            <li>Participants will be selected on a first-come, first-served basis</li>
            <li>Selected candidates will be intimated by email</li>
            <li>Registration is mandatory for attending the FDP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
