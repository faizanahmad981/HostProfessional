import Image from 'next/image';
import React from 'react';
import { Profile, account, dollar, notebook } from '@/assets/images/index';

const TopBar = () => {
  return (
    <div className="bg-[#3B2000] text-white w-full">
      <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between px-2 py-2 text-sm">
        
       
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <Image src={Profile} alt="Austria Flag" className="w-4 h-4" />
          <span>AUS ÖSTERREICH</span>
        </div>

       
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <Image src={dollar} alt="Savings Icon" className="w-4 h-4" />
          <span>BIS ZU 60% GÜNSTIGER</span>
        </div>

       
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <Image src={notebook} alt="Cancel Icon" className="w-4 h-4" />
          <span>JEDERZEIT KÜNDBAR</span>
        </div>

    
        <div className="flex items-center space-x-2">
          <Image src={account} alt="Users Icon" className="w-4 h-4" />
          <span>40.000+ KUNDEN</span>
        </div>
        
      </div>
    </div>
  );
};

export default TopBar;
