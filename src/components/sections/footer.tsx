import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contact" className="w-full">
      <div className="bg-[#0d5c2e] py-[60px] lg:py-[80px] px-4">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-[32px] font-bold font-display text-white mb-8 capitalize text-center">
            Address For Communication
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#ffd700] font-bold text-[20px] mb-2">Coordinator</h3>
                  <p className="text-white font-body text-[16px] mb-1">
                    <strong>Dr. Mahendra V. Guddad</strong>
                  </p>
                  <p className="text-white/80 font-body text-[15px]">
                    Department of Chemical Engineering
                  </p>
                  <p className="text-white/80 font-body text-[15px]">
                    Sir Visvesvaraya Institute of Technology
                  </p>
                  <p className="text-white/80 font-body text-[15px]">
                    At. Post: Chincholi, Tal: Sinnar, Dist: Nashik
                  </p>
                  <p className="text-white/80 font-body text-[15px]">
                    State: Maharashtra - 422102
                  </p>
                  <p className="text-white font-body text-[16px] mt-3">
                    <strong>Mob:</strong> <a href="tel:9881396844" className="hover:text-[#ffd700] transition-colors">9881396844</a>
                  </p>
                  <p className="text-white font-body text-[16px]">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:mahendra.guddad@pravara.in" className="hover:text-[#ffd700] transition-colors">
                      mahendra.guddad@pravara.in
                    </a>
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-[#ffd700] font-bold text-[20px] mb-2">Co-coordinator</h3>
                  <p className="text-white font-body text-[16px]">
                    <strong>Ms. Archana Hatkar</strong>
                  </p>
                  <p className="text-white/80 font-body text-[15px]">
                    Department of Electronics &amp; Computer Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ec921c-43a1-4e43-aa69-d9b676eb63ee-sitrc-sandipfoundation-org/assets/images/work-img4-8.png"
                  alt="SVIT Campus"
                  width={400}
                  height={250}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a4a24] py-4 border-t border-white/10">
        <div className="max-w-[1170px] mx-auto px-4">
          <p className="text-white/80 font-body text-[14px] text-center mb-0">
            Copyright © 2026 Pravara Rural Education Society. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
