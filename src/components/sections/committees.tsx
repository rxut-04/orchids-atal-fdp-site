"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Award, ShieldCheck } from "lucide-react";

const Committees = () => {
  const chiefPatrons = [
    {
      name: "Hon'ble Namdar Shri. Radhakrishna Vikhe Patil",
      designation: "Minister Water Resources (Godavari & Krishna Valley Development Corporation), Govt. of Maharashtra",
      organization: "Chairman, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni"
    },
    {
      name: "Hon'ble Sau. Shalinitai Vikhe Patil",
      designation: "Ex-President, Zilha Parishad, Ahmednagar",
      organization: "Trustee, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni"
    },
    {
      name: "Dr. Sujay Vikhe Patil",
      designation: "Ex. Member of Parliament Govt of India",
      organization: "Chairman, PDVVPSSK, Loni"
    },
    {
      name: "Dr. Susmita Vikhe Patil",
      designation: "CEO",
      organization: "Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni"
    }
  ];

  const organizingCommittee = [
    "Dr. Ganesh Shinde", "Dr. Rana Mahajan", "Mr. Sharad Rokade", 
    "Dr. Pratibha Waje", "Dr. Vishaka Gaidhani", "Mr. K. P. Tambe",
    "Mr. Rahul Dhokane", "Ms. Shital Aher", "Dr. D.K. Chandre",
    "Mr. R. D. Patil", "Dr. S. N. Nikam", "Mr. Sushant Kurhe",
    "Mr. Nilesh Khalse", "Ms. Mohini Waje"
  ];

  return (
    <section id="committes" className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6 lg:max-w-[1280px]">
        
          {/* Section Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#0d5c2e] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Leadership & Management</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0d5c2e] tracking-tighter mb-4">
              CHIEF <span className="text-yellow-600">PATRON</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-yellow-400 mx-auto rounded-full" 
            />
          </motion.div>
  
            {/* Chief Patron Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-24"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="relative">
                  <span className="text-yellow-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Our Visionary Leadership</span>
                  <h3 className="text-3xl md:text-4xl font-black text-[#0d5c2e] flex items-center gap-4">
                    CHIEF <span className="text-yellow-600">PATRON</span>
                  </h3>
                </div>
                <div className="h-0.5 flex-grow bg-gradient-to-r from-yellow-400/50 to-transparent mx-8 hidden lg:block" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {chiefPatrons.map((patron, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c2e] to-[#0a4522] rounded-[32px] translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                    <div className="bg-white rounded-[32px] p-8 border-2 border-[#0d5c2e]/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group-hover:border-[#0d5c2e]/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d5c2e]/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-yellow-400/10 transition-colors duration-500" />
                      
                      <div className="flex items-start gap-6 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-[#0d5c2e] flex items-center justify-center shrink-0 shadow-lg shadow-[#0d5c2e]/20 group-hover:rotate-6 transition-transform duration-300">
                          <ShieldCheck className="text-white w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-[#0d5c2e] leading-tight mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                            {patron.name}
                          </h4>
                          <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                              <p className="text-gray-600 font-bold text-sm leading-relaxed">
                                {patron.designation}
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0d5c2e]/30 mt-2 shrink-0" />
                              <p className="text-gray-500 font-medium text-xs leading-relaxed italic">
                                {patron.organization}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
  
            {/* Organizing Committee List */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-12 border-2 border-[#0d5c2e]/5 relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(13,92,46,0.1)]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d5c2e]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] -ml-48 -mb-48" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0d5c2e] flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-yellow-400 rounded-full" />
                  ORGANIZING COMMITTEE
                </h3>
                <p className="text-gray-500 font-medium mt-2 ml-16">The dedicated team behind the event coordination</p>
              </div>
              <div className="hidden md:block">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[#0d5c2e] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                      <User size={16} />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-[#0d5c2e] text-[10px] font-black">
                    +{organizingCommittee.length}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
              {organizingCommittee.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-5 rounded-2xl bg-[#f8f9fa] border border-black/5 hover:bg-[#0d5c2e] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-yellow-400 transition-colors duration-300">
                      <User size={18} className="text-[#0d5c2e]" />
                    </div>
                    <span className="text-gray-800 font-bold group-hover:text-white transition-colors duration-300 text-sm">
                      {member}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

      </div>
    </section>
  );
};

export default Committees;
