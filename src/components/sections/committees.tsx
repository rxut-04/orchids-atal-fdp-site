"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const Committees = () => {
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
              ORGANIZING <span className="text-yellow-600">COMMITTEE</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-yellow-400 mx-auto rounded-full" 
            />
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
