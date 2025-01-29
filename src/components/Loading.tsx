"use client"
import React, { useEffect, useRef } from 'react'


import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'




const Loader = () => {

  
    const lineRef = useRef(null)
    const loadRef = useRef(null)
    const counterRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const counterElement = counterRef.current;
        let currentValue = 0;

        function updateCounter() {
            if(currentValue === 100) {
              return;
            }
    
            currentValue += Math.floor(Math.random() * 10) + 1
    
            if(currentValue > 100) {
              currentValue = 100
            }
    
            if (counterElement) {
                (counterElement as HTMLElement).textContent = currentValue + "%";
            }
    
            const delay = Math.floor(Math.random() * 200) + 250;
    
            setTimeout(updateCounter, delay)
       }
       updateCounter()
        const tl = gsap.timeline()

          
        
            tl.to(lineRef.current, {y: -300, ease: "power4.in", duration: 0.5 })
            .to(loadRef.current, {height: "0vh", ease: "power4.in", duration: 0.5})
         
    },[])

  

  return (

     <div ref={loadRef} className='fixed bg-[#000] top-0 left-0 right-0 bottom-0 w-screen h-screen overflow-hidden z-[999]'>
          <div className='loader'>
        <h1 ref={counterRef} className="counter">0</h1>
        <div className="circles">
          <div className="circle circle-outer"></div>
          <div className="circle circle-inner"></div>
          <div className="circle-inner-rotator"></div>
          <div className="block"></div>
        </div>
        </div>
      <div ref={lineRef} className='w-[0.5px] h-[500px] bg-white absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-5%]'></div>
    </div>
  
  )
}

export default Loader
