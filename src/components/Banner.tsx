import React from 'react'

const Banner = () => {
  return (
    <div className='h-full w-full bg-path md:px-[32px] px-6 md:pt-[5rem] pt-[15rem] md:pb-[15rem] pb-[10rem]' >
      
     <div className=' md:w-[1197px]  md:h-[551px] h-[350px]  flex flex-col justify-between '>
     <h1 className='font-MetroSans font-bold md:text-[148px] text-[40px] md:leading-[120px] leading-[50px] md:tracking-[-0.06em] tracking-[-0.02em]'>Creative <span className='textgradient'>Front-End</span> Software Developer.</h1>
      <p className='font-medium font-MetroSans md:text-[24px] text-[18px] leading-[20px]  md:leading-[28.8px] tracking-[-0.02em] text-[#DFE0D8] md:w-[775px] md:mt-[40px]'>
      I’m Penuel , a passionate front-end developer with a flair for creating intuitive and visually stunning user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive, accessible, and engaging web applications. Experienced in modern frameworks like React and Vue.js, I enjoy transforming ideas into seamless digital experiences. 
      </p>
     </div>
   
    </div>
  )
}

export default Banner
