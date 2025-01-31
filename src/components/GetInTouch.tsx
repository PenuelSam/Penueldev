"use client"
import React, { useEffect } from 'react'
import arrow from "@/assets/icons/arrow.png"
import Image from 'next/image'
import github from "@/assets/icons/github.png"
import linkedin from "@/assets/icons/linkedinsvg.png"
import instagram from "@/assets/icons/instagramsvg.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link'

export default function GetInTouch() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        // Create the fade-in animation when the About section comes into view
        gsap.fromTo(
          ".getintouch-section", // Targeting the section
          { opacity: 0 }, // Starting state (completely transparent)
          {
            opacity: 1, // Ending state (fully visible)
            duration: 1, // Duration of the fade-in
            ease: "power3.out", // Ease for smooth transition
            scrollTrigger: {
              trigger: ".getintouch-section", // When this section comes into view
              start: "top 80%", // Start the animation when the top of the section is 80% from the top of the viewport
              end: "top 30%", // End the animation when the top of the section reaches 30% of the viewport height
              toggleActions: "play none none reverse", // Control animation states when scrolling
            }
          }
        );
      }, []);
    const socials = [
        {
            name: "Github",
            url: "https://github.com/PenuelSam",
            icon: github,
        },
        {
            name: "LinkedIn",
            url: "http://linkedin.com/in/penuel",
            icon: linkedin,
        },  
        {
            name: "Instagram",
            url: " ",
            icon: instagram,
        },
    ]
  return (
    <div className='getintouch-section'>
    <div className='h-[480px] w-full bg-path md:px-[32px] px-6 flex md:flex-row flex-col items-start md:items-end py-20' >
      <h1 className='font-MetroSans font-bold md:text-[120px] text-[75px] md:leading-[120px] leading-[75px] tracking-[-0.06em] text-[#DFE0D8]'>Let’s build together, 
      Get in touch</h1>
      <a href='mailto:penuelsamuel54@gmail.com' className='flex items-center gap-4 cursor-pointer mt-10 md:mt-0'>
            <Image src={arrow} alt=''/>
            <p className='font-MetroSans font-bold md:text-[32px] text-[25px] leading-[38.41px] tracking-[-0.06em] underline text-[#DFE0D8]'>penuelsamuel54@gmail.com</p>
      </a>
    </div>
   
       
    
       <div className='w-full  grid grid-cols-2 md:grid-cols-3'>
            {
                socials.map((social, index) => {
                    return(
                        <Link href={social?.url} target='_blank'  key={index} className='flex flex-col justify-center items-center gap-4 cursor-pointer border-[0.5px] border-[#3A3A3A] h-[182px]'>
                            <Image src={social.icon} alt='' width={24} height={24}/>
                            <p className='font-MetroSans font-bold text-[24px] leading-[28.8px] tracking-[-0.06em] text-[#DFE0D8]'>{social.name}</p>
                        </Link>
                    )
                })
            }
        </div>

        <div className='w-full h-[67px] md:px-[32px] px-6 flex items-center justify-between'>
            <span className='text-[#7B7C79] font-MetroSans font-bold text-[14px] leading-[16.8px] tracking-[-0.02em]'>&copy; Penuel 2025</span>
            <a href="">
                <p className='font-MetroSans font-bold text-[14px] leading-[16.8px] tracking-[-0.02em] underline text-[#DFE0D8]'>Designed by Bunmi</p>
            </a>
        </div>
    
    </div>
  )
}
