import React from 'react';
import { Info, Target, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  return (
      <section 
        id="about" 
        className="bg-[#f8f9fa] relative py-24 lg:py-32 overflow-hidden scroll-mt-32"
      >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0d5c2e]/5 rounded-bl-[200px] -z-0" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-400/5 rounded-tr-[150px] -z-0" />

      <div className="container relative z-10 mx-auto px-6 lg:max-w-[1280px]">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[#0d5c2e] font-black tracking-[0.2em] uppercase text-sm mb-4 block">Information Hub</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d5c2e] leading-tight tracking-tighter">
            EMPOWERING RURAL INDIA <br />
            <span className="text-yellow-600">THROUGH EXCELLENCE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Main Info Columns */}
          <div className="space-y-12">
            <div className="group p-8 bg-white rounded-[32px] shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#0d5c2e]/10 transition-all duration-500 border border-black/5">
              <div className="w-14 h-14 bg-[#0d5c2e] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#0d5c2e] mb-4">Pravara Rural Education Society</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Established in July 1964 by Late Padmashri Dr. Vitthalrao Vikhe Patil, the pioneer of Asia&apos;s first cooperative sugar factory. The society is flourishing under the visionary guidance of Late Padmabhushan Dr. Balasaheb Vikhe Patil, Former Union Minister, Govt. of India. Today, under the leadership of Hon&apos;ble Chairman Namdar Shri Radhakrishna Vikhe Patil and CEO Dr. Susmita Vikhe Patil, the society stands as a symbol of academic excellence, providing education from pre-primary to Ph.D. in various streams like Medical, Pharmacy, and Engineering.
                </p>
            </div>

            <div className="group p-8 bg-white rounded-[32px] shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#0d5c2e]/10 transition-all duration-500 border border-black/5">
              <div className="w-14 h-14 bg-yellow-400 text-[#0d5c2e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Info size={28} />
              </div>
                <h3 className="text-2xl font-black text-[#0d5c2e] mb-4">Sir Visvesvaraya Institute of Technology</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Established in 1998–99, SVIT Nashik offers undergraduate programs in Chemical, Computer, Information Technology and Electronics & Computer Engineering. The institute also offers MBA program. With highly qualified faculty and state-of-the-art laboratories, we foster academic growth and innovation. The institute is NAAC &apos;B+&apos; accredited (Cycle 1) and committed to preparing students for global challenges.
                </p>
            </div>
          </div>

          <div className="space-y-12 lg:mt-24">
            <div className="group p-8 bg-white rounded-[32px] shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#0d5c2e]/10 transition-all duration-500 border border-black/5">
              <div className="w-14 h-14 bg-[#0d5c2e] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Lightbulb size={28} />
              </div>
                <h3 className="text-2xl font-black text-[#0d5c2e] mb-4">Chemical Engineering Dept.</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  The department was established in the year 1998 with an intake of 60 students. It is the recipient of several grants from AICTE (MODROBS) and BCUD (QIP & RPS). The department organizes the annual state-level event &quot;Chemcoalesce&quot; and is supported by dynamic, highly qualified faculty committed to academic excellence.
                </p>
            </div>

            <div className="group p-8 bg-[#0d5c2e] text-white rounded-[32px] shadow-2xl shadow-[#0d5c2e]/20 hover:scale-[1.02] transition-all duration-500">
              <div className="w-14 h-14 bg-white text-[#0d5c2e] rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">The ATAL FDP Program</h3>
              <p className="text-white/80 leading-relaxed text-justify">
                Our FDP on &quot;Energy, Sustainability and Climate Change&quot; equips participants with knowledge and tools to address critical global challenges. It provides a multidisciplinary platform to explore the intersection of energy systems, sustainability practices, and climate change mitigation.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives & Outcomes Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[40px] border border-[#0d5c2e]/10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d5c2e]/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl font-black text-[#0d5c2e] mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-[#0d5c2e] rounded-full" />
              OBJECTIVES
            </h3>
              <ul className="space-y-6">
                {[
                  "To understand the fundamental concepts of energy and sustainability.",
                  "To explore renewable energy technologies and their role in carbon reduction.",
                  "To highlight the importance of climate policy and carbon management.",
                  "To promote interdisciplinary research and innovation for sustainability.",
                  "To provide hands-on experience and case studies in energy systems."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-gray-700 font-medium">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#0d5c2e] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-yellow-400/20 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl font-black text-[#0d5c2e] mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-yellow-400 rounded-full" />
              EXPECTED OUTCOMES
            </h3>
              <ul className="space-y-6">
                {[
                  "Participants will gain an in-depth understanding of energy systems and their impact on the environment.",
                  "The FDP will equip faculty with tools and methodologies to teach sustainability and climate change.",
                  "It will facilitate cross-disciplinary engagement and networking among researchers.",
                  "Participants will explore new research opportunities and innovative solutions for global sustainability."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-gray-700 font-medium">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;