"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, ShieldCheck, Settings, Users, GraduationCap } from "lucide-react";

const Committees = () => {
  const patronData = [
    {
      role: "Chief Patron",
      name: "Hon'ble Namdar Shri. Radhakrishna Vikhe Patil",
      desc: "Minister Water Resources (Godavari & Krishna Valley Development Corporation), Govt. of Maharashtra | Executive Chairman, Pravara Rural Education Society, Loni",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      role: "Patron",
      name: "Hon'ble Sau. Shalinitai Vikhe Patil",
      desc: "Ex-President, Zilha Parishad, Ahmednagar | Trustee, Pravara Rural Education Society, Loni",
      icon: <User className="w-8 h-8" />
    },
    {
      role: "Patron",
      name: "Dr. Sujay Vikhe Patil",
      desc: "Chairman, PDVVPSSK, Loni",
      icon: <User className="w-8 h-8" />
    },
    {
      role: "CEO",
      name: "Dr. Susmita Vikhe Patil",
      desc: "Chief Executive Officer, Pravara Rural Education Society, Loni",
      icon: <Settings className="w-8 h-8" />
    }
  ];

  const coreTeam = [
    {
      role: "Program Director",
      name: "Dr. Sarang Pande",
      title: "Principal, SVIT, Chincholi, Nashik",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      role: "FDP Coordinator",
      name: "Dr. Mahendra V. Guddad",
      title: "Dept. of Chemical Engineering",
      email: "mahendra.guddad@pravara.in",
      icon: <Users className="w-6 h-6" />
    },
    {
      role: "FDP Co-coordinator",
      name: "Ms. Archana Hatkar",
      title: "Dept. of Electronics & Computer Engineering",
      icon: <Users className="w-6 h-6" />
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
              ORGANIZING <span className="text-yellow-600">COMMITTEES</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-yellow-400 mx-auto rounded-full" 
            />
          </motion.div>

          {/* Patrons Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {patronData.map((patron, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 md:p-8 bg-[#f8f9fa] rounded-[32px] border border-black/5 hover:border-[#0d5c2e]/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0d5c2e] text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {patron.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0d5c2e]/10 text-[#0d5c2e] text-[10px] font-black uppercase tracking-widest mb-3">
                      {patron.role}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-[#0d5c2e] mb-2">{patron.name}</h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">{patron.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Team */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {coreTeam.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-[#0d5c2e] p-6 md:p-8 rounded-[32px] text-white transition-all duration-500 relative overflow-hidden group shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-[#0d5c2e] transition-colors duration-500">
                    {member.icon}
                  </div>
                  <span className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">{member.role}</span>
                  <h3 className="text-lg md:text-xl font-black mb-1">{member.name}</h3>
                  <p className="text-white/70 text-xs md:text-sm font-medium mb-4">{member.title}</p>
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-yellow-400 hover:text-white transition-colors">
                      {member.email}
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Organizing Committee List */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#f8f9fa] rounded-[40px] p-6 md:p-10 border border-black/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
            <h3 className="text-xl md:text-2xl font-black text-[#0d5c2e] mb-8 md:mb-10 flex items-center gap-4 relative z-10">
              <span className="w-10 md:w-12 h-1 bg-yellow-400 rounded-full" />
              ORGANIZING MEMBERS
            </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-8 relative z-10">
            {organizingCommittee.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className="w-2 h-2 rounded-full bg-yellow-400" 
                />
                <span className="text-gray-700 font-bold group-hover:text-[#0d5c2e] group-hover:translate-x-1 transition-all">{member}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Committees;
