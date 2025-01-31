import React from 'react'
import reactjs from "@/assets/icons/reactjs.png"
import nextjs from "@/assets/icons/nextjs.png"
import tailwind from "@/assets/icons/tailwindcss.png"
import framer from "@/assets/icons/framer.png"
import javascript from "@/assets/icons/javascript.png"
import gsap from "@/assets/icons/Gsap.png"
import nodejs from "@/assets/icons/nodejs02.png"
import github from "@/assets/icons/github.png"
import Image from 'next/image'

const Skills = () => {
    const skills = [
        {
            icon: reactjs,
            skill: "Reactjs",
            desc: "A powerful library for building dynamic user interfaces. React enables fast and efficient updates using a virtual DOM. Widely used in modern web development."
        },
        {
            icon: nextjs,
            skill: "Nextjs",
            desc: "A React framework for server-side rendering and static site generation. It provides routing, API routes, and performance optimizations."
        },
        {
            icon: tailwind,
            skill: "Tailwindcss",
            desc: "A utility-first CSS framework for rapid UI development. Offers flexibility with pre-defined classes to build responsive designs quickly."
        },
        {
            icon: framer,
            skill: "Framer-motion",
            desc: "A motion library for React that makes animations simple. Provides powerful tools for creating fluid and interactive UI animations."
        },
        {
            icon: javascript,
            skill: "Javascript",
            desc: "A versatile programming language for building web applications. It powers dynamic features in the browser and on servers with Node.js."
        },
        {
            icon: gsap,
            skill: "Gsap",
            desc: "A robust JavaScript library for creating animations. Perfect for intricate, high-performance animations on web pages."
        },
        {
            icon: nodejs,
            skill: "Nodejs",
            desc: "A runtime environment for running JavaScript on the server. Enables backend development with access to file systems, databases, and APIs."
        },
        {
            icon: github,
            skill: "Version Control",
            desc: "A platform for code collaboration and version control. GitHub helps teams manage code changes and coordinate development projects."
        },
    ];
    
  return (
    <div className='w-full h-full md:px-[32px] px-6 my-10'>
        <div className='flex flex-col gap-[80px] py-20 border-t border-b border-[#3A3A3A]'>
      <h1 className='font-MetroSans font-bold text-[64px] leading-[76.81px] tracking-[-0.02em]'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {
            skills.map(({icon, skill, desc}, index) => (
                <div key={index} className=' border-[0.5px] border-[#3A3A3A] p-5 flex flex-col gap-3'>
                    <div className='w-[24px] h-[24px]'>
                        <Image src={icon} alt='' className='w-full h-full object-cover' width={24} height={24} quality={100}/>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-[24px] leading-[28.8px] tracking-[-0.04em] text-[#DFE0D8] font-MetroSans'>{skill}</h1>
                        <p className='font-light font-MetroSans text-[16px] leading-[19.2px] tracking-[-0.02px] text-[#989898]'>{desc}</p>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  )
}

export default Skills
