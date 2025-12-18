import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full">
      {/* Contact Section */}
      <div className="bg-[#0a0d14] py-[80px] lg:py-[100px] px-4">
        <div className="max-w-[1170px] mx-auto text-center">
          <h2 className="text-[32px] font-bold font-display text-white mb-8 capitalize">
            For Any Queries feel free to Contact
          </h2>
          
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white font-body text-[16px] mb-1">
              Dr. Mohammed Abdul Wassay - <a href="tel:+919912375527" className="hover:text-[#ff8a2d] transition-colors">+91 9912375527</a>
            </p>
            <p className="text-white font-body text-[16px] mb-1">
              Mrs. Vaishnavi Dhananjay Kardak - <a href="tel:+919529678981" className="hover:text-[#ff8a2d] transition-colors">+91 9529678981</a>
            </p>
            <p className="text-white font-body text-[16px] mt-2">
              <span className="font-semibold">Email :</span>{' '}
              <a href="mailto:mohammed.wassay@sitrc.org" className="hover:text-[#ff8a2d] transition-colors">
                mohammed.wassay@sitrc.org
              </a>{' '}
              /{' '}
              <a href="mailto:vaishnavi.kardak@sitrc.org" className="hover:text-[#ff8a2d] transition-colors">
                vaishnavi.kardak@sitrc.org
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#000000] py-4 border-t border-white/5">
        <div className="max-w-[1170px] mx-auto px-4">
          <p className="text-white/80 font-body text-[14px] text-center mb-0">
            Copyright © 2025 Sandip Foundation. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;