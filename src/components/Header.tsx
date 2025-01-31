import React from 'react'

const Header = () => {
   
  return (
    <div className='sticky top-0 left-0 right-0 bg-[#0E0E0E] w-full flex items-center justify-between py-[16px] md:px-[32px] px-6  border-b border-[#191919]'>
      <div>
        <h1 className='font-extrabold uppercase'>Penuel</h1>
      </div>
      <div className='flex items-center gap-5'>
        <ul className='hidden md:flex items-center gap-5'>
            <li className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8]'>Work</li>
            <li className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8]'>About</li>
            <li className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8]'>Get in Touch</li>
        </ul>
        <a 
        href='/myResume.pdf'
        download="myResume.pdf"
        className='font-medium font-MetroSans text-[16px] leading-[19.2px] tracking-[-2%] text-[#DFE0D8] '>Download Cv</a>
      </div>
    </div>
  )
}

export default Header
