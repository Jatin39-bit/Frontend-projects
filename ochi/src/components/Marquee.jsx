import React from 'react'
import { Linear, gsap } from "gsap";
import { useGSAP } from '@gsap/react';


function Marquee() {
    useGSAP(()=>{
        gsap.to(".h11",{
            xPercent:-100,
            repeat:-1,
            duration:5,
            ease:"linear"
        })
    })
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.025" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl   bg-[#004D43]'>
        <div className="text border-t-2 border-b-2   border-zinc-300 flex whitespace-nowrap">
            <h1 className='text-[16vw] leading-none font-["Test Founders Grotesk"] pr-10 font-semibold uppercase mb-4 h11'>WE ARE OCHI</h1>
            <h1 className='text-[16vw] leading-none font-["Test Founders Grotesk"] pr-10 font-semibold uppercase mb-4 h11'>WE ARE OCHI</h1>
        </div>
    </div>
  )
}

export default Marquee