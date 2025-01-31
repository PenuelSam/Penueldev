import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Banner = ({ loadingComplete }: { loadingComplete: boolean }) => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (loadingComplete) {
      gsap.fromTo(headingRef.current, 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' });

      gsap.fromTo(paragraphRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut', delay: 0.3 });
    }
  }, [loadingComplete]);

  return (
    <div className="h-full w-full bg-path md:px-[32px] px-4 md:pt-[5rem] pt-[7rem] md:pb-[15rem] pb-[15rem]">
      <div className="md:w-[1197px] md:h-[551px] h-[350px] flex flex-col justify-between">
        <h1
          ref={headingRef}
          className="font-MetroSans font-bold md:text-[148px] text-[75px] md:leading-[120px] leading-[60px] md:tracking-[-0.06em] tracking-[-0.02em]"
        >
          Creative <span className="textgradient">Front-End</span> Software Developer.
        </h1>
        <p
          ref={paragraphRef}
          className="font-medium font-MetroSans md:text-[24px] text-[18px] leading-[20px] md:leading-[28.8px] tracking-[-0.02em] text-[#DFE0D8] md:w-[775px] mt-[40px]"
        >
          I’m Penuel, a passionate front-end developer with a flair for creating intuitive and visually stunning user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive, accessible, and engaging web applications. Experienced in modern frameworks like React and Nextjs, I enjoy transforming ideas into seamless digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Banner;
