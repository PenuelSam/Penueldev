import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import photo from "@/assets/image/PHOTO.jpg";
import code from "@/assets/icons/code.png";
import Image from 'next/image';

const About = () => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.fromTo(
      ".about-section", 
      { opacity: 0 },
      {
        opacity: 1, 
        duration: 1, 
        ease: "power3.out", 
        scrollTrigger: {
          trigger: ".about-section", 
          start: "top 80%",
          end: "top 30%", 
          toggleActions: "play none none reverse", 
        }
      }
    );
  }, []);

  return (
    <div className="w-full h-full md:px-[32px] px-6 flex flex-col items-end py-10 relative gap-[40px] about-section">
      <div className='absolute left-6 top-[-40px]'>
        <Image src={code} alt='' />
      </div> 
      <div>
        <h1 className='font-MetroSans font-bold text-[64px] leading-[76.81px] tracking-[-0.02em] text-[#DFE0D8]'>About me</h1>
      </div>
      <div className='w-full flex md:flex-row flex-col gap-[40px] md:gap-[80px] md:items-end items-center'>
        <div className='md:w-[280px] md:h-[360px] w-full'>
          <Image 
            src={photo} 
            alt='' 
            className='w-full h-full object-cover rounded-md md:rounded-none' 
            width={280} 
            height={360} 
            quality={100} 
          />
        </div>
        <div className='md:w-[775px]'>
          <p className='text-[#DFE0D8] text-[24px] font-MetroSans font-light leading-[28.8px] tracking-[-0.02em]'>
            I’m Penuel, a passionate front-end developer with a flair for creating intuitive and visually stunning user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive, accessible, and engaging web applications. Experienced in modern frameworks like React and Nextjs, I enjoy transforming ideas into seamless digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
