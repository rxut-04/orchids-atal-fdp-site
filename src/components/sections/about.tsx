import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="bg-[#f8f9fa] bg-texture relative py-12 lg:py-16 overflow-hidden"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')`,
      }}
    >
      <div className="container mx-auto px-4 max-w-[1170px]">
        <div className="row">
          <div className="col-lg-12">
            <div className="space-y-10">
              
              {/* About Sitrc */}
              <div className="about-item">
                <h2 className="text-[32px] font-display font-bold text-[#1c1c1c] mb-6 capitalize leading-[1.2] flex flex-wrap gap-x-3">
                  <span className="animate-in fade-in slide-in-from-bottom duration-700">About</span>
                  <span className="animate-in fade-in slide-in-from-bottom duration-700 delay-100">Sitrc</span>
                </h2>
                <p className="text-[16px] leading-[1.6] text-[#1c1c1c] text-justify font-body">
                  Sandip Institute of Technology and Research Center (SITRC), the top engineering college in Nashik, Maharashtra is established in 2008 and is approved by All India Council for Technical Education, New Delhi Government of India and An Autonomous Institute permanently affiliated to Savitribai Phule Pune University, Pune. The Institute is accredited by NAAC with &apos;A&apos; grade and comprehensive score of 3.11, an ISO 9001:2008 certified which provides uncompromising quality infrastructure (Faculty & facilities simply world class). This commitment is reflected in the investments made by the Institute in providing facilities to students in terms of laboratories, equipment, library books, sports, transportation and everything it takes to create an excellent environment for learning. On visiting the Campus, one is struck by the aesthetic and elegant buildings, splendid lawns, spacious sports grounds and lush green environment conducive for teaching-learning process. The Campus boasts of in-house facilities like state-of-the-art labs, spacious classrooms (with Audio-Video teaching aids), mess with hygienic food, college canteen, health care centre, gym etc. to cater all necessities of the student and the staff, ultramodern hostel facilities with beautiful surroundings. 250+ acres of Campus is about 12 km away from Nashik city. SITRC has an ambiance that stimulates intellectual thinking and academic proceedings (Teaching and Learning Process).
                </p>
              </div>

              {/* About Department of Computer Engineering */}
              <div className="about-item">
                <h2 className="text-[32px] font-display font-bold text-[#1c1c1c] mb-6 capitalize leading-[1.2] flex flex-wrap gap-x-3">
                  <span className="animate-in fade-in slide-in-from-bottom duration-700">About</span>
                  <span className="animate-in fade-in slide-in-from-bottom duration-700 delay-100">Department</span>
                  <span className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">of</span>
                  <span className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">Computer</span>
                  <span className="animate-in fade-in slide-in-from-bottom duration-700 delay-400">Engineering</span>
                </h2>
                <p className="text-[16px] leading-[1.6] text-[#1c1c1c] text-justify font-body">
                  The Department of Computer Engineering offers B.E. and M.E. programs with a strong emphasis on Outcome-Based Education (OBE). It has been NBA Accredited (2020-21 to 2022-23) and Re-Accredited (2023-24 to 2025-26), making it one of the most prestigious programs in the University’s jurisdiction, North Maharashtra region, and across India. The department is committed to research excellence, industry collaboration, and innovation-driven education, fostering advancements in computing, AI, and emerging technologies.
                </p>
              </div>

              {/* About Nashik */}
              <div className="about-item">
                <h2 className="text-[32px] font-display font-bold text-[#1c1c1c] mb-6 capitalize leading-[1.2] flex flex-wrap gap-x-3">
                  <span className="animate-in fade-in slide-in-from-bottom duration-700">About</span>
                  <span className="animate-in fade-in slide-in-from-bottom duration-700 delay-100">Nashik</span>
                </h2>
                <p className="text-[16px] leading-[1.6] text-[#1c1c1c] text-justify font-body">
                  Nashik also called as Nasik (listen) is a city in the northern region of the Indian state of Maharashtra. Situated on the banks of river Godavari, Nashik is the third largest metropolitan area in Maharashtra after Mumbai and Pune. District population of Nashik is around 80 lakhs. Nashik is located about 190 km north of state capital Mumbai, and about 210 km from Pune; together informally called the &quot;Golden Triangle of Maharashtra&quot;. Nashik is well known for being one of the Hindu pilgrimage sites of the Kumbh Mela, which is held every 12 years. The city is called the &quot;Wine Capital of India&quot; as more than half of India&apos;s vineyards and wineries are located here. Around 90% of all Indian wine comes from the Nashik Valley.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element - Small texture overlay if needed */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/main-bg1-7.png')`,
          backgroundSize: 'cover',
          mixBlendMode: 'multiply'
        }}
      ></div>
    </section>
  );
};

export default AboutSection;