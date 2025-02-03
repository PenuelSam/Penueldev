import React from 'react';
import arrow from "@/assets/icons/arrow.png";
import Image from 'next/image';
import github from "@/assets/icons/github.png";
import linkedin from "@/assets/icons/linkedinsvg.png"
import insta from "@/assets/icons/instagramsvg.png"
import Link from 'next/link';

export default function GetInTouch() {
    const skills = [
        {
            icon: github,
            name: "Github",
            link: "https://github.com/PenuelSam"
        },
        {
            icon: linkedin,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/penuel/"
        },
        {
            icon: insta,
            name: "Instagram",
            link: "/"
        },
    ]
  return (
    <>
    <div className='h-[480px] w-full bg-path md:px-[32px] px-6 flex flex-col md:flex-row md:items-end  py-20 justify-between ' >
      <h1 className='font-MetroSans font-bold text-[90px] md:text-[120px] md:leading-[120px] leading-[90px] tracking-[-0.06em] text-[#DFE0D8]'>
        Let’s build together, Get in touch
      </h1>
      <a href="mailto:penuelsamuel54@gmail.com" className='flex items-center md:gap-4 gap-2 cursor-pointer'>
        <Image src={arrow} alt='' className='w-4 h-4 object-cover mt-5 md:mt-0'/>
        <p className='font-MetroSans font-bold text-[25px] md:text-[32px] leading-[38.41px] tracking-[-0.06em] underline text-[#DFE0D8] mt-5 md:mt-0'>
          penuelsamuel54@gmail.com
        </p>
      </a>
    </div>
    <div className='w-full grid md:grid-cols-3 grid-cols-2'>
        {
            skills.map((skill,index) => {
                return(
                    <Link href={`${skill.link}`} key={index} className='flex flex-col justify-center items-center gap-4 w-full h-[182px] border-[0.5px] border-[#3A3A3A]'>
                        <Image src={skill.icon} alt='' className='w-6 h-6 object-cover'/>
                        <p className='font-MetroSans font-bold text-[18px] md:ext-[24px] leading-[28.8px] tracking-[-0.06em] text-[#DFE0D8]'>{skill.name}</p>
                    </Link>
                )
            })
        }
    </div>
    <div className='w-full h-[67px] md:px-[32px] px-6 flex items-center justify-between'>
        <p className='font-bold font-MetroSans text-[14px] leading-[16.8px] tracking-[-0.02em] text-[#7B7C79]'>&copy; Penuel 2025</p>

        <Link href="/">
            <p className='font-bold font-MetroSans text-[14px] leading-[16.8px] tracking-[-0.02em] underline text-[#DFE0D8]'>Designed by Bunmi</p>
        </Link>
    </div>
    </>
  );
}
