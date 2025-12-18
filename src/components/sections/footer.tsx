import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  const INSTITUTE_IMAGE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766039634850.png?width=8000&height=8000&resize=contain";

  return (
    <footer id="contact" className="w-full bg-[#0d5c2e] text-white overflow-hidden">
      
      {/* Upper Footer: Contact & Map */}
      <div className="container mx-auto px-6 lg:max-w-[1280px] py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <span className="text-yellow-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                ADDRESS FOR <br />
                <span className="text-yellow-400">COMMUNICATION</span>
              </h2>
              <div className="w-20 h-1.5 bg-yellow-400 rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-yellow-400 font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    FDP Coordinator
                  </h3>
                  <div className="space-y-3">
                    <p className="font-black text-xl">Dr. Mahendra V. Guddad</p>
                    <p className="text-white/70 font-medium text-sm leading-relaxed">
                      Dept. of Chemical Engineering <br />
                      Sir Visvesvaraya Institute of Technology <br />
                      Chincholi, Sinnar, Nashik - 422102
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <a href="tel:9881396844" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#0d5c2e] transition-all">
                      <Phone size={18} />
                    </div>
                    <span className="font-bold">+91 98813 96844</span>
                  </a>
                  <a href="mailto:mahendra.guddad@pravara.in" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#0d5c2e] transition-all">
                      <Mail size={18} />
                    </div>
                    <span className="font-bold text-sm">mahendra.guddad@pravara.in</span>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-yellow-400 font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    FDP Co-coordinator
                  </h3>
                  <div className="space-y-3">
                    <p className="font-black text-xl">Ms. Archana Hatkar</p>
                    <p className="text-white/70 font-medium text-sm leading-relaxed">
                      Dept. of Electronics & <br />
                      Computer Engineering
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="https://svitnashik.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/20 transition-all font-bold text-sm"
                  >
                    <Globe size={18} className="text-yellow-400" />
                    <span>Institute Website</span>
                    <ExternalLink size={14} className="opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image / Campus Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400 rounded-[40px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10">
              <Image 
                src={INSTITUTE_IMAGE}
                alt="SVIT Campus"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d5c2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
                  <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-2">Our Campus</p>
                  <p className="font-bold text-lg">Sir Visvesvaraya Institute of Technology, Nashik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright */}
      <div className="border-t border-white/10 bg-black/20 py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/PRES_Logo.png/220px-PRES_Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="brightness-0 invert opacity-50"
            />
            <p className="text-white/40 text-sm font-bold tracking-tight">
              © 2026 Pravara Rural Education Society. <br className="md:hidden" /> All Rights Reserved.
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#dates" className="hover:text-yellow-400 transition-colors">Important Dates</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;