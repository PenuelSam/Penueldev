"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import a spinner icon

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);

    // Simulate download delay (3 seconds)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className='sticky top-0 left-0 right-0 bg-[#0E0E0E] w-full flex items-center justify-between py-[16px] px-[32px] z-[999] border-b border-[#191919]'>
      <div>
        <Link href="/" className='font-extrabold uppercase'>Penuel</Link>
      </div>
      <div className='flex items-center gap-5'>
        <ul className='md:flex items-center gap-5 hidden'>
          <li className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8]'>Work</li>
          <li className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8]'>About</li>
          <li className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8]'>Get in Touch</li>
        </ul>
        
        {/* Download CV Button */}
        <a 
          href='/myResume.pdf'
          download="Resume.pdf"
          onClick={handleDownload}
          className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8] cursor-pointer flex items-center gap-2'
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin" /> Downloading...
            </>
          ) : (
            'Download CV'
          )}
        </a>
      </div>
    </div>
  );
};

export default Header;
