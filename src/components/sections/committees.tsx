"use client";

import React from "react";
import { User, ShieldCheck, Settings, Users, GraduationCap } from "lucide-react";

const Committees = () => {
  const patronData = [
    {
      role: "Chief Patron",
      name: "Hon'ble Namdar Shri. Radhakrishna Vikhe Patil",
      desc: "Minister Water Resources, Govt. of Maharashtra | Chairman, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      role: "Patron",
      name: "Hon'ble Sau. Shalinitai Vikhe Patil",
      desc: "Ex-President, Zilha Parishad, Ahmednagar | Trustee, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni",
      icon: <User className="w-8 h-8" />
    },
    {
      role: "Patron",
      name: "Dr. Sujay Vikhe Patil",
      desc: "Ex. Member of Parliament, Govt of India | Chairman, PDVVPSSK, Loni",
      icon: <User className="w-8 h-8" />
    },
    {
      role: "CEO",
      name: "Dr. Susmita Vikhe Patil",
      desc: "CEO, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni",
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
    <section id="committes" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:max-w-[1280px]">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-[#0d5c2e] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Leadership & Management</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d5c2e] tracking-tighter mb-4">
            ORGANIZING <span className="text-yellow-600">COMMITTEES</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full" />
        </div>

        {/* Patrons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {patronData.map((patron, i) => (
            <div key={i} className="group p-8 bg-[#f8f9fa] rounded-[32px] border border-black/5 hover:border-[#0d5c2e]/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#0d5c2e] text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {patron.icon}
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#0d5c2e]/10 text-[#0d5c2e] text-[10px] font-black uppercase tracking-widest mb-3">
                    {patron.role}
                  </span>
                  <h3 className="text-xl font-black text-[#0d5c2e] mb-2">{patron.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{patron.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Team */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {coreTeam.map((member, i) => (
            <div key={i} className="bg-[#0d5c2e] p-8 rounded-[32px] text-white hover:scale-[1.03] transition-transform duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  {member.icon}
                </div>
                <span className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">{member.role}</span>
                <h3 className="text-xl font-black mb-1">{member.name}</h3>
                <p className="text-white/70 text-sm font-medium mb-4">{member.title}</p>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-xs font-bold text-yellow-400 hover:underline">
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Organizing Committee List */}
        <div className="bg-[#f8f9fa] rounded-[40px] p-10 border border-black/5">
          <h3 className="text-2xl font-black text-[#0d5c2e] mb-10 flex items-center gap-4">
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
            ORGANIZING MEMBERS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-8">
            {organizingCommittee.map((member, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform" />
                <span className="text-gray-700 font-bold group-hover:text-[#0d5c2e] transition-colors">{member}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Committees;