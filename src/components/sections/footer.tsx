'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ExternalLink, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Building2,
  Users2
} from 'lucide-react';

const Footer = () => {
  const INSTITUTE_IMAGE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766039634850.png?width=8000&height=8000&resize=contain";
  const PRES_LOGO = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PRAVARA_LOGO-1766039988502.png?width=8000&height=8000&resize=contain";

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About FDP', href: '#about' },
    { name: 'Committees', href: '#committees' },
    { name: 'Event Details', href: '#event-details' },
    { name: 'Registration', href: '#registration' },
  ];

  const resources = [
    { name: 'AICTE Official', href: 'https://www.aicte-india.org/' },
    { name: 'ATAL Academy', href: 'https://www.aicte-india.org/atal' },
    { name: 'SVIT Nashik', href: 'https://svitnashik.in' },
    { name: 'Pravara Education', href: 'https://pravara.in' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#032b15] text-white overflow-hidden scroll-mt-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] bg-[#0d5c2e]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:max-w-[1280px] pt-24 pb-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 bg-white p-2 rounded-2xl shadow-xl">
                <Image 
                  src={PRES_LOGO}
                  alt="PRES Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-black leading-none tracking-tighter">SVIT <span className="text-yellow-400">NASHIK</span></h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1 font-bold">Pravara Education</p>
              </div>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Empowering engineers through excellence in technical education and research. Join our ATAL FDP to explore the future of Chemical and Digital Engineering.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-[#0d5c2e] transition-all group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/60 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-sm font-bold"
                  >
                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Resources
            </h4>
            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-yellow-400 transition-colors flex items-center justify-between group text-sm font-bold"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-yellow-400" />
                </div>
                <p className="text-sm text-white/60 font-medium leading-relaxed">
                  Chincholi, Sinnar, <br /> Nashik - 422102, MH
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-yellow-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-black">+91 98813 96844</p>
                  <p className="text-[10px] text-white/40 uppercase font-bold">Main Coordinator</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-yellow-400" />
                </div>
                <p className="text-sm font-black truncate">mahendra.guddad@pravara.in</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Campus Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] rounded-[40px] overflow-hidden group mb-20 shadow-2xl border border-white/10"
        >
          <Image 
            src={INSTITUTE_IMAGE}
            alt="SVIT Campus"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032b15] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#0d5c2e]/20 group-hover:bg-transparent transition-colors duration-500" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-yellow-400/20">
                <Building2 size={12} />
                Visit Our Campus
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">Sir Visvesvaraya Institute of Technology</h2>
              <p className="text-white/60 font-bold text-sm mt-2">Accredited by NAAC (Cycle 1) | Approved by AICTE New Delhi</p>
            </div>
            
            <a 
              href="https://svitnashik.in" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-yellow-400 text-[#0d5c2e] rounded-2xl font-black text-sm hover:bg-white transition-all shadow-xl flex items-center gap-2 group"
            >
              Take Virtual Tour
              <Globe size={16} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#032b15] flex items-center justify-center backdrop-blur-md">
                <ShieldCheck size={18} className="text-yellow-400" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#032b15] flex items-center justify-center backdrop-blur-md">
                <Users2 size={18} className="text-yellow-400" />
              </div>
            </div>
            <p className="text-white/40 text-xs font-bold leading-relaxed">
              &copy; 2026 Pravara Rural Education Society. <br className="hidden sm:block" />
              Managed by Dept. of Chemical Engineering, SVIT.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-white/50 hover:text-white"
            >
              <ArrowUpRight size={20} className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
